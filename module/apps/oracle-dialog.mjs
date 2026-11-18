import { SOLO10 } from "../constants.mjs";
import { executeSolo10Roll } from "../dice/rolls.mjs";

const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

export class Solo10OracleApp extends HandlebarsApplicationMixin(ApplicationV2) {
  constructor(options = {}) {
    super(options);
    this.activeTab = options.tab || "cenario";
    this.selectedActorId = options.actorId || game.user?.character?.id || "";
    this.posturaAlvo = 8;
    this.perigoAlvo = 10;
    this.nomeAlvo = "Personagem do Cenário";
  }

  static DEFAULT_OPTIONS = {
    id: "solo10-oracle-app",
    classes: ["solo10", "theme-light", "solo10-theme-light", "solo10-oracle-window"],
    tag: "div",
    window: {
      title: "Oráculo & Ferramentas — Solo 10",
      icon: "fas fa-eye",
      resizable: true
    },
    position: {
      width: 680,
      height: 680
    },
    actions: {
      changeTab: Solo10OracleApp.#onChangeTab,
      rolarOraculoCenario: Solo10OracleApp.#onRolarOraculoCenario,
      rolarMedidorD10: Solo10OracleApp.#onRolarMedidorD10,
      rolarInteracaoPersonagem: Solo10OracleApp.#onRolarInteracaoPersonagem,
      rolarTabelaSetor: Solo10OracleApp.#onRolarTabelaSetor,
      deslocarSetor: Solo10OracleApp.#onDeslocarSetor,
      adicionarSetorCustom: Solo10OracleApp.#onAdicionarSetorCustom,
      removerSetorCustom: Solo10OracleApp.#onRemoverSetorCustom,
      restaurarSetoresPadrao: Solo10OracleApp.#onRestaurarSetoresPadrao,
      salvarSetorLabel: Solo10OracleApp.#onSalvarSetorLabel,
      visitarLocalAcontecimento: Solo10OracleApp.#onVisitarLocalAcontecimento,
      vencerAreaAcontecimento: Solo10OracleApp.#onVencerAreaAcontecimento,
      calcularCombateMassa: Solo10OracleApp.#onCalcularCombateMassa
    }
  };

  static PARTS = {
    main: {
      template: "systems/solo10/templates/oracle-app.hbs",
      scrollable: [".solo10-oracle-content"]
    }
  };

  async _prepareContext(options) {
    const personagens = (game.actors ?? []).filter((a) => a.type === "personagem");
    if (!this.selectedActorId && personagens.length > 0) {
      this.selectedActorId = personagens[0].id;
    }
    const actor = game.actors?.get(this.selectedActorId) ?? null;
    const rollTables = (game.tables ?? []).map((t) => ({ id: t.id, name: t.name }));
    const setorLabel = game.settings?.get("solo10", "setorLabel") || "Setor";
    const customSetores = game.settings?.get("solo10", "customSetores");
    const setores = Array.isArray(customSetores) && customSetores.length ? customSetores : SOLO10.SETORES;

    return {
      setorLabel,
      isGM: Boolean(game.user?.isGM),
      activeTab: this.activeTab,
      personagens: personagens.map((p) => ({
        id: p.id,
        name: p.name,
        selected: p.id === this.selectedActorId
      })),
      actor,
      setores,
      oraculoTabela: SOLO10.ORACULO_TABELA,
      unidadesExercito: SOLO10.UNIDADES_EXERCITO,
      fortificacoesVeiculos: SOLO10.FORTIFICACOES_VEICULOS,
      rollTables,
      nomeAlvo: this.nomeAlvo,
      perigoAlvo: this.perigoAlvo,
      posturaAlvo: this.posturaAlvo
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    game.solo10?.applyLightThemeToElement?.(this.element);
    const actorSelect = this.element.querySelector('[name="selectedActorId"]');
    if (actorSelect) {
      actorSelect.addEventListener("change", (ev) => {
        this.selectedActorId = ev.currentTarget.value;
        this.render();
      });
    }
  }

  static #onChangeTab(event, target) {
    const tab = target.dataset.tab;
    if (tab) {
      this.activeTab = tab;
      this.render();
    }
  }

  static async #onRolarOraculoCenario(event, target) {
    const root = this.element;
    const pergunta = root.querySelector('[name="oraculoPergunta"]')?.value?.trim() || "Pergunta ao Oráculo";
    const tipoProposta = root.querySelector('[name="oraculoProposta"]')?.value || "todas";
    const customBaixo = root.querySelector('[name="customBaixo"]')?.value?.trim() || "Não / Opção A (1-5)";
    const customAlto = root.querySelector('[name="customAlto"]')?.value?.trim() || "Sim / Opção B (6-0)";

    const roll = new Roll("1d10");
    await roll.evaluate();
    const d10 = roll.total;
    const isAlto = d10 >= 6; // Em D10 do Solo 10, 1-5 vs 6-0 (onde 0 no d10 é 10)

    let respBaixo = "Não / Negativo";
    let respAlto = "Sim / Positivo";

    if (tipoProposta === "custom") {
      respBaixo = customBaixo;
      respAlto = customAlto;
    } else {
      const found = SOLO10.ORACULO_TABELA.find((o) => o.key === tipoProposta) ?? SOLO10.ORACULO_TABELA[3];
      respBaixo = found.baixo;
      respAlto = found.alto;
    }

    const resultadoTexto = isAlto ? respAlto : respBaixo;
    const faixaTexto = isAlto ? "6-0 (6 a 10)" : "1-5";

    const content = `
      <div class="solo10-chat-card solo10-oraculo-card">
        <header class="solo10-card-header">
          <h3><i class="fas fa-eye"></i> Oráculo: Interação com Cenário</h3>
        </header>
        <div class="solo10-card-breakdown">
          <div><strong>Pergunta:</strong> <em>"${foundry.utils.escapeHTML(pergunta)}"</em></div>
        </div>
        <div class="solo10-dice-strip">
          <span class="solo10-dice-label">Rolagem 1D10:</span>
          <span class="solo10-die active">${d10 === 10 ? "0 (10)" : d10}</span>
          <span class="solo10-badge">Faixa ${faixaTexto}</span>
        </div>
        <div class="solo10-roll-total ${isAlto ? "sucesso" : "falha"}">
          <div class="solo10-status-banner">
            <strong>${foundry.utils.escapeHTML(resultadoTexto)}</strong>
          </div>
        </div>
        <div class="solo10-card-notes">
          <small><strong>1-5:</strong> ${foundry.utils.escapeHTML(respBaixo)}<br/><strong>6-0:</strong> ${foundry.utils.escapeHTML(respAlto)}</small>
        </div>
      </div>
    `;

    await ChatMessage.create({
      user: game.user.id,
      content,
      rolls: [roll]
    });
  }

  static async #onRolarMedidorD10(event, target) {
    const root = this.element;
    const questao = root.querySelector('[name="medidorQuestao"]')?.value?.trim() || "Medida de Intensidade / Quantidade";
    const roll = new Roll("1d10");
    await roll.evaluate();
    const d10 = roll.total;

    let avaliacao = "Moderado / Médio";
    if (d10 <= 3) avaliacao = "Baixo / Poucos ( Situação favorável )";
    else if (d10 >= 8) avaliacao = "Alto / Muitos ( Problemas à vista! )";

    const content = `
      <div class="solo10-chat-card solo10-oraculo-card">
        <header class="solo10-card-header">
          <h3><i class="fas fa-tachometer-alt"></i> Oráculo: Medidor 1D10</h3>
        </header>
        <div class="solo10-card-breakdown">
          <div><strong>Questão medida:</strong> <em>"${foundry.utils.escapeHTML(questao)}"</em></div>
        </div>
        <div class="solo10-dice-strip">
          <span class="solo10-dice-label">Medida (1D10):</span>
          <span class="solo10-die active">${d10}</span>
        </div>
        <div class="solo10-card-effect">
          <strong>Intensidade ${d10}/10:</strong> ${avaliacao}
        </div>
      </div>
    `;

    await ChatMessage.create({
      user: game.user.id,
      content,
      rolls: [roll]
    });
  }

  static async #onRolarInteracaoPersonagem(event, target) {
    const root = this.element;
    const actor = game.actors?.get(this.selectedActorId);
    if (!actor) {
      ui.notifications.warn("Selecione um Personagem para realizar a interação!");
      return;
    }

    this.nomeAlvo = root.querySelector('[name="nomeAlvo"]')?.value?.trim() || "Personagem do Cenário";
    this.perigoAlvo = Number(root.querySelector('[name="perigoAlvo"]')?.value ?? 10);
    this.posturaAlvo = Number(root.querySelector('[name="posturaAlvo"]')?.value ?? 8);
    const modoDados = root.querySelector('[name="modoDadosSocial"]')?.value || "normal";
    const bonusHonrado = Boolean(root.querySelector('[name="bonusHonrado"]')?.checked) ? 2 : 0;

    const msg = await executeSolo10Roll({
      actor,
      titulo: `Oráculo: Interação com ${this.nomeAlvo}`,
      atributo: "espirito",
      pericia: "Manipulação",
      usarPericia: actor.hasPericia("manipulacao"),
      modoDados,
      perigoBase: this.perigoAlvo,
      modificadorExtra: bonusHonrado,
      tipoTeste: "social"
    });

    const res = msg?.flags?.solo10?.resultado;
    if (res?.sucesso && res?.impactoPostura > 0) {
      const posturaAnterior = this.posturaAlvo;
      this.posturaAlvo = Math.max(0, posturaAnterior - res.impactoPostura);
      const desmoralizado = this.posturaAlvo <= 0;

      await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor }),
        content: `
          <div class="solo10-chat-card">
            <header class="solo10-card-header">
              <h3>Postura de ${foundry.utils.escapeHTML(this.nomeAlvo)}</h3>
            </header>
            <div class="solo10-card-effect">
              Postura reduzida em <strong>${res.impactoPostura}</strong> pontos (${posturaAnterior} &rarr; <strong>${this.posturaAlvo}</strong>).
              ${desmoralizado ? `<br/><strong>Postura chegou a 0!</strong> ${foundry.utils.escapeHTML(this.nomeAlvo)} está <strong>desmoralizado</strong> e sujeito a todas as suas vontades!` : ""}
            </div>
          </div>
        `
      });
      this.render();
    }
  }

  static async #onRolarTabelaSetor(event, target) {
    const root = this.element;
    const tipo = target.dataset.tipo || "Evento";
    const dado = root.querySelector('[name="dadoTabelaSetor"]')?.value || "1d10";
    const tableId = root.querySelector('[name="rollTableId"]')?.value || "";

    if (tableId && game.tables?.get(tableId)) {
      const table = game.tables.get(tableId);
      await table.draw();
      return;
    }

    const actor = game.actors?.get(this.selectedActorId);
    const setor = actor?.system?.setorAtual || "Setor Atual";

    let extraHtml = "";
    const roll = new Roll(dado);
    await roll.evaluate();

    if (tipo === "Personagem Importante") {
      const rollCarac = new Roll(dado);
      await rollCarac.evaluate();
      extraHtml = `<br/><strong>Dado da Característica (${dado}):</strong> Resultado <strong>${rollCarac.total}</strong>`;
    }

    const content = `
      <div class="solo10-chat-card solo10-oraculo-card">
        <header class="solo10-card-header">
          <h3><i class="fas fa-map-marked-alt"></i> ${tipo} — ${foundry.utils.escapeHTML(setor)}</h3>
        </header>
        <div class="solo10-card-effect">
          <strong>Dado de ${tipo} (${dado}):</strong> Resultado <strong>${roll.total}</strong>${extraHtml}
          <p><small>Compare o resultado com a tabela de ${tipo} do seu cenário.</small></p>
        </div>
      </div>
    `;

    await ChatMessage.create({
      user: game.user.id,
      content,
      rolls: [roll]
    });
  }

  static async #onDeslocarSetor(event, target) {
    const root = this.element;
    const actor = game.actors?.get(this.selectedActorId);
    const novoSetor = root.querySelector('[name="novoSetor"]')?.value || "Cidade Nova";
    const meio = target.dataset.meio || "pe";
    const tempo = meio === "veiculo" ? "meia hora (30 min)" : "1 hora";

    if (actor) {
      await actor.update({ "system.setorAtual": novoSetor });
    }

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: `
        <div class="solo10-chat-card">
          <header class="solo10-card-header">
            <h3><i class="fas fa-walking"></i> Deslocamento para ${foundry.utils.escapeHTML(novoSetor)}</h3>
          </header>
          <div class="solo10-card-effect">
            Tempo gasto no deslocamento: <strong>${tempo}</strong> (${meio === "veiculo" ? "usando veículo" : "a pé"}).
            <hr/>
            <strong>Passos ao entrar no novo local:</strong>
            <ol>
              <li>Escolha uma ação a realizar;</li>
              <li>Role um evento na tabela específica;</li>
              <li>Caso queira realizar outras ações, pague o custo em tempo para cada uma.</li>
            </ol>
          </div>
        </div>
      `
    });
    this.render();
  }

  static async #onSalvarSetorLabel(event, target) {
    if (!game.user?.isGM) {
      ui.notifications.warn("Apenas o GM/Mediador pode alterar as configurações globais de Setor/Zona.");
      return;
    }
    const label = this.element.querySelector('[name="novoSetorLabel"]')?.value?.trim() || "Setor";
    await game.settings.set("solo10", "setorLabel", label);
    ui.notifications.info(`Nomenclatura atualizada para "${label}".`);
    this.render();
  }

  static async #onAdicionarSetorCustom(event, target) {
    if (!game.user?.isGM) {
      ui.notifications.warn("Apenas o GM/Mediador pode cadastrar novos locais na listagem do mundo.");
      return;
    }
    const root = this.element;
    const nome = root.querySelector('[name="cadSetorNome"]')?.value?.trim();
    const descricao = root.querySelector('[name="cadSetorDesc"]')?.value?.trim() || "";
    const tableId = root.querySelector('[name="cadSetorTableId"]')?.value || "";

    if (!nome) {
      ui.notifications.warn("Informe um nome para o local (Setor / Bairro / Distrito / Zona).");
      return;
    }

    const atuais = foundry.utils.deepClone(game.settings.get("solo10", "customSetores") || SOLO10.SETORES);
    atuais.push({ nome, descricao, tableId });
    await game.settings.set("solo10", "customSetores", atuais);
    this.render();
  }

  static async #onRemoverSetorCustom(event, target) {
    if (!game.user?.isGM) return;
    const idx = Number(target.dataset.index);
    const atuais = foundry.utils.deepClone(game.settings.get("solo10", "customSetores") || SOLO10.SETORES);
    if (idx >= 0 && idx < atuais.length) {
      atuais.splice(idx, 1);
      await game.settings.set("solo10", "customSetores", atuais);
      this.render();
    }
  }

  static async #onRestaurarSetoresPadrao(event, target) {
    if (!game.user?.isGM) return;
    await game.settings.set("solo10", "customSetores", SOLO10.SETORES);
    this.render();
  }

  static async #onVisitarLocalAcontecimento(event, target) {
    const actor = game.actors?.get(this.selectedActorId);
    if (!actor) return;
    const atual = Number(actor.system.acontecimento?.locaisVisitados ?? 0);
    const novo = Math.min(5, atual + 1);
    const ameacaNoQuinto = novo >= 5;

    await actor.update({
      "system.acontecimento.locaisVisitados": novo,
      "system.acontecimento.ameacaEncontrada": ameacaNoQuinto || actor.system.acontecimento?.ameacaEncontrada
    });

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: `
        <div class="solo10-chat-card">
          <header class="solo10-card-header">
            <h3>Acontecimento Importante — Local ${novo}/5</h3>
          </header>
          <div class="solo10-card-effect">
            <strong>${actor.name}</strong> visitou o <strong>${novo}º local</strong> do Acontecimento Importante.
            ${ameacaNoQuinto ? `<br/><strong style="color:#b71c1c;">5º Local alcançado! Regra: "Se você for a 4 locais e não encontrar a Ameaça Principal, ela sempre estará no quinto local!"</strong>` : ""}
          </div>
        </div>
      `
    });
    this.render();
  }

  static async #onVencerAreaAcontecimento(event, target) {
    const actor = game.actors?.get(this.selectedActorId);
    if (!actor) return;
    const xpAtual = Number(actor.system.experiencia?.value ?? 0);
    const xpTotal = Number(actor.system.experiencia?.total ?? 0);

    await actor.update({
      "system.experiencia.value": xpAtual + 1,
      "system.experiencia.total": xpTotal + 1
    });

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor }),
      content: `
        <div class="solo10-chat-card">
          <header class="solo10-card-header">
            <h3>Área Vencida em Acontecimento Importante!</h3>
          </header>
          <div class="solo10-card-effect">
            <strong>${actor.name}</strong> recebeu <strong>+1 ponto de experiência extra</strong> (XP Disponível: ${xpAtual + 1}).
          </div>
        </div>
      `
    });
    this.render();
  }

  static async #onCalcularCombateMassa(event, target) {
    const root = this.element;

    const calcularLado = (prefix) => {
      const nome = root.querySelector(`[name="${prefix}Nome"]`)?.value?.trim() || prefix;
      const poderPersonagens = Number(root.querySelector(`[name="${prefix}PoderPersonagens"]`)?.value ?? 0);
      const fortKey = root.querySelector(`[name="${prefix}Fortificacao"]`)?.value || "nenhuma";
      const palicada = Boolean(root.querySelector(`[name="${prefix}Palicada"]`)?.checked);
      const terreno = Boolean(root.querySelector(`[name="${prefix}Terreno"]`)?.checked);
      const moral = Boolean(root.querySelector(`[name="${prefix}Moral"]`)?.checked);

      const fortObj = SOLO10.FORTIFICACOES_VEICULOS.find((f) => f.key === fortKey) ?? SOLO10.FORTIFICACOES_VEICULOS[0];

      // Coletar lista de todas as unidades individuais (exceto armas de cerco) para descontar a Guarnição/Tripulação Mínima
      const listaPoderUnidades = [];
      let poderArmasCerco = 0;

      for (const u of SOLO10.UNIDADES_EXERCITO) {
        const qtd = Math.max(0, Number(root.querySelector(`[name="${prefix}_unit_${u.key}"]`)?.value ?? 0));
        if (qtd > 0) {
          if (u.key.startsWith("armaCerco")) {
            poderArmasCerco += qtd * u.poder;
          } else {
            for (let i = 0; i < qtd; i++) {
              listaPoderUnidades.push(u.poder);
            }
          }
        }
      }

      const totalUnidadesHumanas = listaPoderUnidades.length;
      const atendeGuarnicao = fortObj.guarnicao === 0 || totalUnidadesHumanas >= fortObj.guarnicao;

      // Regra: "* O número de unidades utilizada para atender a Guarnição ou a Tripulação Mínima não poderão ser somadas no cálculo do Poder da Tropa."
      listaPoderUnidades.sort((a, b) => a - b);
      const unidadesParaGuarnicao = atendeGuarnicao ? fortObj.guarnicao : 0;
      const unidadesSomadas = listaPoderUnidades.slice(unidadesParaGuarnicao);
      const poderUnidades = poderPersonagens + poderArmasCerco + unidadesSomadas.reduce((acc, v) => acc + v, 0);

      let poderFortificacao = atendeGuarnicao ? fortObj.poder : 0;
      if (poderFortificacao > 0 && palicada) {
        // "*** As paliçadas construídas ao redor de uma fortificação atrapalham o avanço das tropas inimigas, conferindo 50% a mais de Poder a fortificação."
        poderFortificacao = Math.ceil(poderFortificacao * 1.5);
      }

      const poderBase = poderUnidades + poderFortificacao;
      let poderFinal = poderBase;

      if (terreno) {
        poderFinal = Math.ceil(poderFinal * 1.5);
      }
      if (moral) {
        poderFinal = Math.ceil(poderFinal * 1.5);
      }

      return {
        nome,
        poderUnidades,
        fortNome: fortObj.nome,
        atendeGuarnicao,
        guarnicaoMinima: fortObj.guarnicao,
        totalUnidadesHumanas,
        poderFortificacao,
        palicada,
        poderBase,
        terreno,
        moral,
        poderFinal
      };
    };

    const aliado = calcularLado("aliado");
    const inimigo = calcularLado("inimigo");

    let vencedor = "Empate Técnico entre as Tropas!";
    if (aliado.poderFinal > inimigo.poderFinal) {
      vencedor = `Vitória / Vantagem para ${foundry.utils.escapeHTML(aliado.nome)} (${aliado.poderFinal} vs ${inimigo.poderFinal})`;
    } else if (inimigo.poderFinal > aliado.poderFinal) {
      vencedor = `Vitória / Vantagem para ${foundry.utils.escapeHTML(inimigo.nome)} (${inimigo.poderFinal} vs ${aliado.poderFinal})`;
    }

    const content = `
      <div class="solo10-chat-card">
        <header class="solo10-card-header">
          <h3><i class="fas fa-chess-rook"></i> Resolução de Combate em Massa</h3>
        </header>
        <div class="solo10-card-breakdown">
          <p><strong>${foundry.utils.escapeHTML(aliado.nome)}:</strong> Poder Final = <strong>${aliado.poderFinal}</strong>
            <br/><small>(Unidades: ${aliado.poderUnidades} + Fort./Veículo: ${aliado.poderFortificacao}${aliado.terreno ? " | Terreno Vantajoso x1,5" : ""}${aliado.moral ? " | Moral Elevada x1,5" : ""})</small>
          </p>
          <hr/>
          <p><strong>${foundry.utils.escapeHTML(inimigo.nome)}:</strong> Poder Final = <strong>${inimigo.poderFinal}</strong>
            <br/><small>(Unidades: ${inimigo.poderUnidades} + Fort./Veículo: ${inimigo.poderFortificacao}${inimigo.terreno ? " | Terreno Vantajoso x1,5" : ""}${inimigo.moral ? " | Moral Elevada x1,5" : ""})</small>
          </p>
        </div>
        <div class="solo10-card-effect">
          <strong>Resultado:</strong> ${vencedor}
        </div>
      </div>
    `;

    await ChatMessage.create({
      user: game.user.id,
      content
    });
  }
}
