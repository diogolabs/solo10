import { SOLO10 } from "../constants.mjs";
import { executeSolo10Roll, promptSolo10RollDialog } from "../dice/rolls.mjs";

function normalizeStr(str = "") {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export class Solo10Actor extends Actor {
  /** @override */
  prepareDerivedData() {
    super.prepareDerivedData();

    if (this.type === "personagem") {
      this._preparePersonagemData();
    } else if (this.type === "adversario") {
      this._prepareAdversarioData();
    }
  }

  _preparePersonagemData() {
    const sys = this.system;

    const corpoTotal = Number(sys.atributos?.corpo?.value ?? 3) + Number(sys.atributos?.corpo?.bonus ?? 0);
    const espiritoTotal = Number(sys.atributos?.espirito?.value ?? 3) + Number(sys.atributos?.espirito?.bonus ?? 0);
    const menteTotal = Number(sys.atributos?.mente?.value ?? 3) + Number(sys.atributos?.mente?.bonus ?? 0);

    sys.atributos.corpo.total = corpoTotal;
    sys.atributos.espirito.total = espiritoTotal;
    sys.atributos.mente.total = menteTotal;

    // Soma modular de bônus de Saúde, Postura e Vontade vindos de Itens do tipo Qualidade
    let bonusQualSaude = 0;
    let bonusQualPostura = 0;
    let bonusQualVontade = 0;

    for (const item of this.items ?? []) {
      if (item.type !== "qualidade") continue;
      const bS = Number(item.system?.bonusSaude || 0);
      const bP = Number(item.system?.bonusPostura || 0);
      const bV = Number(item.system?.bonusVontade || 0);
      bonusQualSaude += bS;
      bonusQualPostura += bP;
      bonusQualVontade += bV;
    }

    // Fórmulas oficiais:
    // Saúde = 5 + Corpo + bônus de Qualidades (ex: Vigoroso +4) + bônus extra
    // Postura = 5 + Espírito + bônus de Qualidades (ex: Aristocrata +4) + bônus extra
    // Vontade = 5 + Mente + bônus de Qualidades (ex: Perseverante +4) + bônus extra
    sys.saude.max = 5 + corpoTotal + bonusQualSaude + Number(sys.saude?.bonus ?? 0);
    sys.postura.max = 5 + espiritoTotal + bonusQualPostura + Number(sys.postura?.bonus ?? 0);
    sys.vontade.max = 5 + menteTotal + bonusQualVontade + Number(sys.vontade?.bonus ?? 0);

    // Poder do Personagem em Combate em Massa = somatória de todos os pontos de Atributos
    sys.poderCombateMassa = corpoTotal + espiritoTotal + menteTotal;

    // Dinheiro Inicial = Mente x $ 1.000 (x2 se possuir Qualidade Abastado)
    const multAbastado = this.hasQualidade("abastado", "Abastado") ? 2 : 1;
    sys.dinheiroInicialSugerido = menteTotal * 1000 * multAbastado;

    // Resistência a Dano Total
    sys.resistenciaDanoTotal = this.getResistenciaDano();

    // Estados de reserva zerada
    sys.inconsciente = sys.saude.value <= 0 && (!this.hasQualidade("destemido", "Destemido") || sys.vontade.value <= 0);
    sys.desmoralizado = sys.postura.value <= 0;
    sys.desmotivado = sys.vontade.value <= 0;
  }

  _prepareAdversarioData() {
    const sys = this.system;
    sys.derrotadoSaude = sys.saude.value <= 0;
    sys.derrotadoPostura = sys.postura.value <= 0;
    sys.derrotadoVontade = sys.vontade.value <= 0;
  }

  /**
   * Busca um Item de Perícia na ficha do personagem (por id, slug ou nome).
   */
  findPericiaItem(ref = "") {
    if (!this.items || !ref) return null;
    const direct = this.items.get(ref);
    if (direct && direct.type === "pericia") return direct;

    const target = normalizeStr(ref);
    const labelRef = SOLO10.PERICIAS[ref]?.label ? normalizeStr(SOLO10.PERICIAS[ref].label) : "";

    return (
      this.items.find((i) => {
        if (i.type !== "pericia") return false;
        const iSlug = normalizeStr(i.system?.slug || "");
        const iName = normalizeStr(i.name || "");
        return iSlug === target || iName === target || (labelRef && iName === labelRef);
      }) ?? null
    );
  }

  /**
   * Verifica se o personagem possui determinada Perícia como Item na ficha.
   */
  hasPericia(ref = "") {
    return Boolean(this.findPericiaItem(ref));
  }

  /**
   * Verifica se o personagem possui determinada Qualidade (por slug ou nome).
   */
  hasQualidade(slug, nome = "") {
    if (!this.items) return false;
    const targetSlug = normalizeStr(slug || "");
    const targetNome = normalizeStr(nome || "");
    return this.items.some((i) => {
      if (i.type !== "qualidade") return false;
      const itemSlug = normalizeStr(i.system?.slug || "");
      const itemName = normalizeStr(i.name || "");
      return (targetSlug && itemSlug === targetSlug) || (targetNome && itemName === targetNome);
    });
  }

  /**
   * Verifica se o personagem está usando apenas armas e armaduras leves e nenhum escudo (Qualidade Lutador Veloz).
   */
  isUsandoEquipamentoLeveSemEscudo(armaAtiva = null) {
    const armadurasEquipadas = this.items.filter((i) => i.type === "armadura" && i.system.equipada);
    const temEscudo = armadurasEquipadas.some((a) => a.system.escudo);
    if (temEscudo) return false;
    const temArmaduraNaoLeve = armadurasEquipadas.some((a) => !a.system.leve);
    if (temArmaduraNaoLeve) return false;

    if (armaAtiva && !armaAtiva.system?.leve) return false;
    return true;
  }

  /**
   * Verifica se o personagem está equipado com Armadura Tática/Batalha* ou Escudo* que impõe desvantagem em destreza/agilidade.
   */
  temPenalidadeArmaduraAgilidade() {
    return this.items.some(
      (i) => i.type === "armadura" && i.system.equipada && i.system.penalidadeAgilidade
    );
  }

  /**
   * Calcula a Resistência a Dano total (Armaduras equipadas + Escudo + bônus de Qualidades como Defensor e Lutador Veloz).
   */
  getResistenciaDano() {
    if (this.type !== "personagem") return 0;
    let rd = 0;
    for (const item of this.items) {
      if (item.type === "armadura" && item.system.equipada) {
        rd += Number(item.system.resistenciaDano || 0);
      } else if (item.type === "qualidade") {
        rd += Number(item.system?.bonusRD || 0);
      }
    }
    if (this.hasQualidade("lutadorVeloz", "Lutador Veloz") && this.isUsandoEquipamentoLeveSemEscudo()) {
      rd += 1;
    }
    return rd;
  }

  /**
   * Recupera reservas com descanso (8h = +1) ou tratamento adequado (+2).
   */
  async descansar(comTratamento = false) {
    if (this.type !== "personagem") return;
    const rec = comTratamento ? 2 : 1;
    const novaSaude = Math.min(this.system.saude.max, this.system.saude.value + rec);
    const novaPostura = Math.min(this.system.postura.max, this.system.postura.value + rec);
    const novaVontade = Math.min(this.system.vontade.max, this.system.vontade.value + rec);

    await this.update({
      "system.saude.value": novaSaude,
      "system.postura.value": novaPostura,
      "system.vontade.value": novaVontade
    });

    const msg = comTratamento
      ? `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Tratamento Adequado — ${this.name}</h3></header><div class="solo10-card-effect">Recuperou <strong>+2 pontos</strong> em Saúde (${novaSaude}/${this.system.saude.max}), Postura (${novaPostura}/${this.system.postura.max}) e Vontade (${novaVontade}/${this.system.vontade.max}).</div></div>`
      : `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Descanso (8 horas) — ${this.name}</h3></header><div class="solo10-card-effect">Recuperou <strong>+1 ponto</strong> em Saúde (${novaSaude}/${this.system.saude.max}), Postura (${novaPostura}/${this.system.postura.max}) e Vontade (${novaVontade}/${this.system.vontade.max}).</div></div>`;

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: msg
    });
  }

  /**
   * Aplica dano à Saúde (respeitando a Qualidade Destemido quando Saúde chega a 0).
   */
  async sofrerDano(dano, ignorarArmadura = false) {
    const valor = Math.max(0, Number(dano) || 0);
    if (valor <= 0) return;

    let saudeAtual = Number(this.system.saude.value || 0);
    let vontadeAtual = Number(this.system.vontade?.value || 0);
    const destemido = this.type === "personagem" && this.hasQualidade("destemido", "Destemido");

    let danoRestante = valor;
    const absorvidoSaude = Math.min(saudeAtual, danoRestante);
    saudeAtual -= absorvidoSaude;
    danoRestante -= absorvidoSaude;

    let absorvidoVontade = 0;
    if (danoRestante > 0 && destemido) {
      absorvidoVontade = Math.min(vontadeAtual, danoRestante);
      vontadeAtual -= absorvidoVontade;
    }

    const updates = { "system.saude.value": saudeAtual };
    if (absorvidoVontade > 0) {
      updates["system.vontade.value"] = vontadeAtual;
    }
    await this.update(updates);

    let extraTxt = "";
    if (absorvidoVontade > 0) {
      extraTxt = ` (Qualidade <strong>Destemido</strong> ativada: ${absorvidoVontade} ponto(s) descontados da Vontade!)`;
    }
    if (saudeAtual <= 0 && (!destemido || vontadeAtual <= 0)) {
      extraTxt += ` <strong>${this.name} caiu inconsciente!</strong>`;
    }

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Ferimento Sofrido — ${this.name}</h3></header><div class="solo10-card-effect">Sofreu <strong>${valor}</strong> de dano à Saúde. Saúde atual: <strong>${saudeAtual}/${this.system.saude.max}</strong>.${extraTxt}</div></div>`
    });
  }

  /**
   * Gasta 1 ponto de Vontade para rerolar o D10 de um teste anterior (devendo assumir o novo valor).
   */
  async gastarVontadeParaRerolar(rollConfig) {
    if (this.type !== "personagem") return;
    const vontadeAtual = Number(this.system.vontade?.value ?? 0);
    if (vontadeAtual <= 0) {
      ui.notifications.warn(`${this.name} não possui pontos de Vontade disponíveis para rerolar!`);
      return;
    }

    await this.update({ "system.vontade.value": vontadeAtual - 1 });
    return executeSolo10Roll({
      ...rollConfig,
      actor: this,
      isRerollVontade: true
    });
  }

  /**
   * Executa uma das Ações Básicas de Setor (capítulo JOGANDO - EXEMPLO DE AÇÕES).
   */
  async executarAcaoSetor(acao) {
    if (this.type !== "personagem") return;

    switch (acao) {
      case "abrigo":
        return promptSolo10RollDialog({
          actor: this,
          titulo: "Procurar Abrigo Temporário / Comida",
          atributo: "mente",
          pericia: "investigacao",
          tipoTeste: "padrao"
        });

      case "comprar":
        return promptSolo10RollDialog({
          actor: this,
          titulo: "Comprar Algo (Barganha)",
          atributo: "espirito",
          pericia: "manipulacao",
          tipoTeste: "barganha"
        });

      case "encontrarPessoa":
        return promptSolo10RollDialog({
          actor: this,
          titulo: "Encontrar uma Pessoa no Setor",
          atributo: "mente",
          pericia: "investigacao",
          tipoTeste: "padrao"
        });

      case "interagirPersonagem":
        return promptSolo10RollDialog({
          actor: this,
          titulo: "Oráculo: Interagir com Personagem",
          atributo: "espirito",
          pericia: "manipulacao",
          tipoTeste: "social"
        });

      case "trabalharHonesto": {
        const novoDinheiro = Number(this.system.dinheiro || 0) + 25;
        await this.update({ "system.dinheiro": novoDinheiro });
        return ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: this }),
          content: `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Trabalho Honesto (1 hora)</h3></header><div class="solo10-card-effect"><strong>${this.name}</strong> trabalhou de forma honesta por 1 hora e recebeu <strong>$ 25</strong> (Total: $ ${novoDinheiro}).</div></div>`
        });
      }

      case "roubarEspancar":
      case "convencerLudibriar":
      case "baterCarteiras":
      case "informatica": {
        const mapa = {
          roubarEspancar: {
            titulo: "Conseguir Dinheiro: Roubar após Espancar ($ 20 + 1D10/h)",
            atributo: "corpo",
            pericia: "combateCorporal",
            base: 20
          },
          convencerLudibriar: {
            titulo: "Conseguir Dinheiro: Convencer ou Ludibriar ($ 20 + 1D10/h)",
            atributo: "espirito",
            pericia: "manipulacao",
            base: 20
          },
          baterCarteiras: {
            titulo: "Conseguir Dinheiro: Bater Carteiras / Roubar Lugar ($ 30 + 1D10/h)",
            atributo: "corpo",
            pericia: "subterfugio",
            base: 30
          },
          informatica: {
            titulo: "Conseguir Dinheiro: Informática ($ 30 + 1D10/h)",
            atributo: "mente",
            pericia: "tecnologia",
            base: 30
          }
        };
        const cfg = mapa[acao];
        const periciaItem = this.findPericiaItem(cfg.pericia);
        const msg = await executeSolo10Roll({
          actor: this,
          titulo: cfg.titulo,
          atributo: cfg.atributo,
          pericia: periciaItem ? periciaItem.name : (SOLO10.PERICIAS[cfg.pericia]?.label || cfg.pericia),
          usarPericia: Boolean(periciaItem),
          tipoTeste: "padrao"
        });
        const res = msg?.flags?.solo10?.resultado;
        if (res?.sucesso) {
          const ganhoRoll = new Roll(`1d10 + ${cfg.base}`);
          await ganhoRoll.evaluate();
          const ganho = ganhoRoll.total;
          const novoDinheiro = Number(this.system.dinheiro || 0) + ganho;
          await this.update({ "system.dinheiro": novoDinheiro });
          await ChatMessage.create({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            rolls: [ganhoRoll],
            content: `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Dinheiro Obtido!</h3></header><div class="solo10-card-effect">Ganho em 1 hora: <strong>$ ${ganho}</strong> ($ ${cfg.base} + 1D10 [${ganho - cfg.base}]). Saldo atual: <strong>$ ${novoDinheiro}</strong>.</div></div>`
          });
        } else {
          await ChatMessage.create({
            speaker: ChatMessage.getSpeaker({ actor: this }),
            content: `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Atenção: Crime Mal Sucedido!</h3></header><div class="solo10-card-effect">Falhas em testes para obtenção de dinheiro de forma ilícita podem criar problemas para o personagem (como colocar um policial para investigar seus atos ou prendê-lo). Marque a observação <strong>Investigado por Crime</strong> na ficha se aplicável!</div></div>`
          });
        }
        return msg;
      }
    }
  }

  /**
   * Para Adversários: publica a Reação do Adversário no Chat e permite aos jogadores rolarem Defesa.
   */
  async dispararReacaoAdversario() {
    if (this.type !== "adversario") return;
    const sys = this.system;
    const html = `
      <div class="solo10-chat-card solo10-adversario-card" data-adversario-id="${this.id}">
        <header class="solo10-card-header">
          <h3>Reação do Adversário: ${this.name}</h3>
          <span class="solo10-badge">Perigo ${sys.perigo}</span>
        </header>
        <div class="solo10-card-breakdown">
          <div class="solo10-breakdown-row">
            <span><strong>Saúde:</strong> ${sys.saude.value}/${sys.saude.max}</span>
            <span><strong>Postura:</strong> ${sys.postura.value}/${sys.postura.max}</span>
            <span><strong>Vontade:</strong> ${sys.vontade.value}/${sys.vontade.max}</span>
          </div>
        </div>
        <div class="solo10-card-effect">
          <strong>Ataque (Reação):</strong> ${sys.ataqueReacao}
          <br/><strong>Dano da Reação:</strong> ${sys.danoReacao} pontos à Saúde.
        </div>
        ${sys.outrasCaracteristicas ? `<div class="solo10-card-notes"><strong>Outras Características:</strong> ${sys.outrasCaracteristicas}</div>` : ""}
        <footer class="solo10-card-actions">
          <button type="button" class="solo10-chat-btn" data-action="defenderReacao" data-perigo="${sys.perigo}" data-dano="${sys.danoReacao}" data-nome="${this.name}">
            <i class="fas fa-shield-alt"></i> Rolar Defesa contra ${this.name} (Perigo ${sys.perigo})
          </button>
        </footer>
      </div>
    `;
    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: html
    });
  }
}
