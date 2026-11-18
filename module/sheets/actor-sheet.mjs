import { SOLO10 } from "../constants.mjs";
import { executeSolo10Roll, promptSolo10RollDialog } from "../dice/rolls.mjs";
import { Solo10OracleApp } from "../apps/oracle-dialog.mjs";
import { abrirCompendioSistema } from "../compendiums.mjs";

const { ActorSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class Solo10PersonagemSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  constructor(options = {}) {
    super(options);
    this.activeTab = "principal";
  }

  static DEFAULT_OPTIONS = {
    classes: ["solo10", "sheet", "actor", "personagem"],
    position: {
      width: 820,
      height: 780
    },
    window: {
      resizable: true
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    },
    actions: {
      changeTab: Solo10PersonagemSheet.#onChangeTab,
      setTheme: Solo10PersonagemSheet.#onSetTheme,
      cycleTheme: Solo10PersonagemSheet.#onCycleTheme,
      editImage: Solo10PersonagemSheet.#onEditImage,
      rollAtributo: Solo10PersonagemSheet.#onRollAtributo,
      rollPericia: Solo10PersonagemSheet.#onRollPericia,
      rollLivre: Solo10PersonagemSheet.#onRollLivre,
      abrirOraculo: Solo10PersonagemSheet.#onAbrirOraculo,
      abrirCompendio: Solo10PersonagemSheet.#onAbrirCompendio,
      descansar: Solo10PersonagemSheet.#onDescansar,
      tratamento: Solo10PersonagemSheet.#onTratamento,
      calcularDinheiroInicial: Solo10PersonagemSheet.#onCalcularDinheiroInicial,
      distribuirAtributos: Solo10PersonagemSheet.#onDistribuirAtributos,
      usarQualidadeAtiva: Solo10PersonagemSheet.#onUsarQualidadeAtiva,
      createItem: Solo10PersonagemSheet.#onCreateItem,
      editItem: Solo10PersonagemSheet.#onEditItem,
      deleteItem: Solo10PersonagemSheet.#onDeleteItem,
      postItem: Solo10PersonagemSheet.#onPostItem,
      toggleEquipItem: Solo10PersonagemSheet.#onToggleEquipItem,
      toggleMetaConcluida: Solo10PersonagemSheet.#onToggleMetaConcluida,
      atacarArma: Solo10PersonagemSheet.#onAtacarArma,
      defenderFisico: Solo10PersonagemSheet.#onDefenderFisico,
      fugirCombate: Solo10PersonagemSheet.#onFugirCombate,
      aplicarDanoDiverso: Solo10PersonagemSheet.#onAplicarDanoDiverso,
      testarOficio: Solo10PersonagemSheet.#onTestarOficio,
      montarArmadilha: Solo10PersonagemSheet.#onMontarArmadilha,
      acaoSetor: Solo10PersonagemSheet.#onAcaoSetor,
      addDiaVivido: Solo10PersonagemSheet.#onAddDiaVivido,
      addAreaVencida: Solo10PersonagemSheet.#onAddAreaVencida,
      gastarXp: Solo10PersonagemSheet.#onGastarXp
    }
  };

  static PARTS = {
    form: {
      template: "systems/solo10/templates/actor-personagem-sheet.hbs",
      scrollable: [".solo10-sheet-body"]
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const actor = this.document;
    const sys = actor.system;
    const theme = game.settings?.get("solo10", "theme") || "system";
    const setorLabel = game.settings?.get("solo10", "setorLabel") || "Setor";
    const customSetores = game.settings?.get("solo10", "customSetores");
    const setores = Array.isArray(customSetores) && customSetores.length ? customSetores : SOLO10.SETORES;

    const pericias = actor.items.filter((i) => i.type === "pericia");
    const qualidades = actor.items.filter((i) => i.type === "qualidade");
    const armas = actor.items.filter((i) => i.type === "arma");
    const armaduras = actor.items.filter((i) => i.type === "armadura");
    const equipamentos = actor.items.filter((i) => i.type === "equipamento");
    const armadilhas = actor.items.filter((i) => i.type === "armadilha");
    const metas = actor.items.filter((i) => i.type === "meta");

    const maxPericiasIniciais = actor.hasQualidade("perito", "Perito") ? 4 : 3;

    const themeLabels = {
      system: "Sistema",
      light: "Claro",
      dark: "Escuro"
    };

    return {
      ...context,
      actor,
      system: sys,
      theme,
      themeLabel: themeLabels[theme] || "Sistema",
      setorLabel,
      activeTab: this.activeTab,
      atributosConfig: SOLO10.ATRIBUTOS,
      setores,
      efeitosArmadilha: SOLO10.EFEITOS_ARMADILHA,
      pericias,
      maxPericiasIniciais,
      qualidades,
      armas,
      armaduras,
      equipamentos,
      armadilhas,
      metas
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    game.solo10?.applyThemeToElement?.(this.element);
  }

  static #onChangeTab(event, target) {
    const tab = target.dataset.tab;
    if (tab) {
      this.activeTab = tab;
      this.render();
    }
  }

  static async #onSetTheme(event, target) {
    const novo = target.dataset.theme || "system";
    game.solo10?.applyThemeToElement?.(this.element, novo);
    await game.settings?.set("solo10", "theme", novo);
  }

  static async #onCycleTheme(event, target) {
    const ordem = ["system", "light", "dark"];
    const atual = game.settings?.get("solo10", "theme") || "system";
    const proximo = ordem[(ordem.indexOf(atual) + 1) % ordem.length];
    game.solo10?.applyThemeToElement?.(this.element, proximo);
    await game.settings?.set("solo10", "theme", proximo);
  }

  static async #onEditImage(event, target) {
    const attr = target.dataset.edit || "img";
    const current = foundry.utils.getProperty(this.document, attr);
    const FilePickerCls = foundry.applications?.apps?.FilePicker?.implementation ?? FilePicker;
    const fp = new FilePickerCls({
      type: "image",
      current,
      callback: (path) => {
        this.document.update({ [attr]: path });
      }
    });
    return fp.browse();
  }

  static async #onRollAtributo(event, target) {
    const atributo = target.dataset.atributo || "corpo";
    const label = SOLO10.ATRIBUTOS[atributo]?.label || atributo;
    return promptSolo10RollDialog({
      actor: this.document,
      titulo: `Teste de ${label}`,
      atributo
    });
  }

  static async #onRollPericia(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    const nomePericia = item?.name || target.dataset.pericia || "";
    return promptSolo10RollDialog({
      actor: this.document,
      titulo: `Teste com Perícia: ${nomePericia}`,
      atributo: "corpo",
      pericia: nomePericia,
      usarPericia: true
    });
  }

  static async #onRollLivre(event, target) {
    return promptSolo10RollDialog({
      actor: this.document,
      titulo: "Teste Solo 10",
      atributo: "corpo"
    });
  }

  static async #onAbrirOraculo(event, target) {
    const tab = target.dataset.tab || "cenario";
    const app = new Solo10OracleApp({ actorId: this.document.id, tab });
    return app.render(true);
  }

  static async #onAbrirCompendio(event, target) {
    const pack = target.dataset.pack || "pericias";
    return abrirCompendioSistema(pack);
  }

  static async #onDescansar(event, target) {
    return this.document.descansar(false);
  }

  static async #onTratamento(event, target) {
    return this.document.descansar(true);
  }

  static async #onCalcularDinheiroInicial(event, target) {
    const valor = this.document.system.dinheiroInicialSugerido;
    await this.document.update({ "system.dinheiro": valor });
    ui.notifications.info(`Dinheiro atualizado para o Dinheiro Inicial calculado: $ ${valor}`);
  }

  static async #onDistribuirAtributos(event, target) {
    const modo = target.dataset.modo;
    if (modo === "333") {
      await this.document.update({
        "system.atributos.corpo.value": 3,
        "system.atributos.espirito.value": 3,
        "system.atributos.mente.value": 3
      });
      await this.document.update({
        "system.saude.value": this.document.system.saude.max,
        "system.postura.value": this.document.system.postura.max,
        "system.vontade.value": this.document.system.vontade.max
      });
    } else if (modo === "resetReservas") {
      await this.document.update({
        "system.saude.value": this.document.system.saude.max,
        "system.postura.value": this.document.system.postura.max,
        "system.vontade.value": this.document.system.vontade.max
      });
    }
  }

  static async #onUsarQualidadeAtiva(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    if (!item) return;
    const slug = (item.system.slug || item.name || "").toLowerCase();

    if (slug.includes("abastado")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "espirito",
        pericia: "Manipulação",
        tipoTeste: "abastado"
      });
    } else if (slug.includes("curandeiro")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "mente",
        pericia: "Conhecimento",
        tipoTeste: "curandeiro"
      });
    } else if (slug.includes("armadilheiro")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "mente",
        pericia: "Sobrevivência",
        tipoTeste: "armadilha"
      });
    } else if (slug.includes("camaleao") || slug.includes("camaleão")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "mente",
        pericia: "Subterfúgio",
        tipoTeste: "padrao"
      });
    } else if (slug.includes("ataqueemarco") || slug.includes("ataque em arco")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "corpo",
        pericia: "Combate Corporal",
        tipoTeste: "ataque"
      });
    } else if (slug.includes("desarme")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "corpo",
        pericia: "Combate Corporal",
        tipoTeste: "ataque"
      });
    } else if (slug.includes("falsificador")) {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "mente",
        pericia: "Ofícios",
        tipoTeste: "padrao"
      });
    } else {
      return promptSolo10RollDialog({
        actor: this.document,
        titulo: `Qualidade: ${item.name}`,
        atributo: "corpo"
      });
    }
  }

  static async #onCreateItem(event, target) {
    const type = target.dataset.type || "equipamento";
    const nomes = {
      pericia: "Nova Perícia",
      qualidade: "Nova Qualidade",
      arma: "Nova Arma",
      armadura: "Nova Armadura",
      equipamento: "Novo Equipamento",
      armadilha: "Nova Armadilha",
      meta: "Nova Meta"
    };
    const item = await Item.create(
      {
        name: nomes[type] || "Novo Item",
        type
      },
      { parent: this.document }
    );
    item?.sheet?.render(true);
  }

  static async #onEditItem(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    item?.sheet?.render(true);
  }

  static async #onDeleteItem(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    if (item) await item.delete();
  }

  static async #onPostItem(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    if (item) await item.postToChat();
  }

  static async #onToggleEquipItem(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    if (item) {
      await item.update({ "system.equipada": !item.system.equipada });
    }
  }

  static async #onToggleMetaConcluida(event, target) {
    const itemId = target.dataset.itemId;
    const item = this.document.items.get(itemId);
    if (item) {
      await item.update({ "system.concluida": !item.system.concluida });
    }
  }

  static async #onAtacarArma(event, target) {
    const itemId = target.dataset.itemId;
    const arma = itemId ? this.document.items.get(itemId) : null;
    const alcance = arma?.system?.alcance || target.dataset.alcance || "corporal";
    const pericia = alcance === "distancia" ? "Combate a Distância" : "Combate Corporal";
    const nomeAtaque = arma ? `Ataque: ${arma.name}` : `Ataque (${pericia})`;

    return promptSolo10RollDialog({
      actor: this.document,
      titulo: nomeAtaque,
      atributo: "corpo",
      pericia,
      tipoTeste: "ataque",
      arma
    });
  }

  static async #onDefenderFisico(event, target) {
    const pericia = target.dataset.pericia || "Combate Corporal";
    return promptSolo10RollDialog({
      actor: this.document,
      titulo: `Defesa (${pericia})`,
      atributo: "corpo",
      pericia,
      tipoTeste: "defesa",
      danoReacaoInimigo: 3
    });
  }

  static async #onFugirCombate(event, target) {
    return promptSolo10RollDialog({
      actor: this.document,
      titulo: "Fugir do Combate — Corpo (Atletismo)",
      atributo: "corpo",
      pericia: "Atletismo",
      tipoTeste: "padrao"
    });
  }

  static async #onAplicarDanoDiverso(event, target) {
    const fonte = target.dataset.fonte;
    if (fonte === "queda") {
      const altura = Number(this.element.querySelector('[data-field="alturaQueda"]')?.value ?? 4);
      const dano = Math.max(0, altura - 3);
      if (dano <= 0) {
        ui.notifications.info(`Queda de altura ${altura}: nenhum dano sofrido (Altura - 3 <= 0).`);
        return;
      }
      return this.document.sofrerDano(dano, true);
    } else if (fonte === "fogo") {
      const dano = Number(this.element.querySelector('[data-field="danoFogoAcido"]')?.value ?? 3);
      const rd = this.document.getResistenciaDano();
      const danoFinal = Math.max(0, dano - rd);
      return this.document.sofrerDano(danoFinal, false);
    } else if (fonte === "veneno") {
      const dano = Number(this.element.querySelector('[data-field="danoVeneno"]')?.value ?? 2);
      return this.document.sofrerDano(dano, true);
    }
  }

  static async #onTestarOficio(event, target) {
    const tipo = target.dataset.tipo || "oficios";
    const custo = Number(this.element.querySelector('[data-field="custoOficio"]')?.value ?? 100);
    const dias = Math.max(1, Math.ceil(custo / 100));
    const pericia = tipo === "veiculos" ? "Condução" : "Ofícios";
    const label = tipo === "veiculos" ? "Criar/Melhorar Veículo" : "Criar/Melhorar Item ou Fortificação";

    return promptSolo10RollDialog({
      actor: this.document,
      titulo: `${label} (${dias} dia(s) — $ ${custo})`,
      atributo: "mente",
      pericia,
      tipoTeste: "padrao"
    });
  }

  static async #onMontarArmadilha(event, target) {
    const efeito = this.element.querySelector('[data-field="efeitoNovaArmadilha"]')?.value || "dano";
    const perigoSec = Boolean(this.element.querySelector('[data-field="perigoSecArmadilha"]')?.checked);

    const msg = await executeSolo10Roll({
      actor: this.document,
      titulo: `Montar Armadilha (${SOLO10.EFEITOS_ARMADILHA[efeito]?.label || efeito})`,
      atributo: "mente",
      pericia: "Sobrevivência",
      usarPericia: this.document.hasPericia("sobrevivencia"),
      tipoTeste: "armadilha"
    });

    const res = msg?.flags?.solo10?.resultado;
    if (res?.sucesso) {
      const bp = res.bonusPoder;
      const mente = this.document.system.atributos.mente.total;
      let descEfeito = "";
      if (efeito === "dano") descEfeito = `Dano à Saúde: ${mente + bp} (Mente ${mente} + Bônus de Poder ${bp}).`;
      else if (efeito === "atraso") descEfeito = `Atraso: ${1 + bp} hora(s).`;
      else if (efeito === "envenenado") descEfeito = `Envenenado e dano à Saúde: ${bp}.`;
      else if (efeito === "preso") descEfeito = `Preso: exige teste de Corpo (Subterfúgio) contra Perigo ${Math.min(15, bp)}.`;
      else if (efeito === "perigo") descEfeito = `Perigo para encontrar e desarmar: ${Math.min(15, 10 + bp)}.`;

      if (perigoSec && efeito !== "perigo") {
        descEfeito += ` | Perigo Secundário para encontrar/desarmar: ${Math.min(15, 10 + bp)}.`;
      }

      await Item.create(
        {
          name: `Armadilha (${SOLO10.EFEITOS_ARMADILHA[efeito]?.label || efeito})`,
          type: "armadilha",
          system: {
            efeito,
            bonusPoder: bp,
            perigoSecundario: perigoSec,
            descricao: descEfeito
          }
        },
        { parent: this.document }
      );
    }
  }

  static async #onAcaoSetor(event, target) {
    const acao = target.dataset.acao;
    if (acao) {
      return this.document.executarAcaoSetor(acao);
    }
  }

  static async #onAddDiaVivido(event, target) {
    const dias = Number(this.document.system.diasVividos || 0) + 1;
    const xpVal = Number(this.document.system.experiencia?.value || 0) + 1;
    const xpTot = Number(this.document.system.experiencia?.total || 0) + 1;
    await this.document.update({
      "system.diasVividos": dias,
      "system.experiencia.value": xpVal,
      "system.experiencia.total": xpTot
    });
    ui.notifications.info(`+1 Dia vivido! ${this.document.name} ganhou +1 Ponto de Experiência.`);
  }

  static async #onAddAreaVencida(event, target) {
    const xpVal = Number(this.document.system.experiencia?.value || 0) + 1;
    const xpTot = Number(this.document.system.experiencia?.total || 0) + 1;
    await this.document.update({
      "system.experiencia.value": xpVal,
      "system.experiencia.total": xpTot
    });
    ui.notifications.info(`Área vencida em Acontecimento Importante! +1 Ponto de Experiência extra.`);
  }

  static async #onGastarXp(event, target) {
    const tipo = target.dataset.tipo;
    const xpAtual = Number(this.document.system.experiencia?.value || 0);
    const custos = {
      atributo: 20,
      pericia: 15,
      qualidade: 20
    };
    const custo = custos[tipo] || 20;
    if (xpAtual < custo) {
      ui.notifications.warn(`Experiência insuficiente! Necessário: ${custo} XP (Disponível: ${xpAtual} XP).`);
      return;
    }

    await this.document.update({
      "system.experiencia.value": xpAtual - custo
    });

    const labels = {
      atributo: "Aumentar um Atributo em 1 ponto (20 XP)",
      pericia: "Aprender uma nova Perícia (15 XP)",
      qualidade: "Aprender uma nova Qualidade (20 XP)"
    };

    await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.document }),
      content: `<div class="solo10-chat-card"><header class="solo10-card-header"><h3>Evolução de Personagem — ${this.document.name}</h3></header><div class="solo10-card-effect">Gastou <strong>${custo} XP</strong> em: <strong>${labels[tipo]}</strong>. XP Restante: ${xpAtual - custo}.</div></div>`
    });
  }
}

export class Solo10AdversarioSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["solo10", "sheet", "actor", "adversario"],
    position: {
      width: 580,
      height: 540
    },
    window: {
      resizable: true
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    },
    actions: {
      setTheme: Solo10AdversarioSheet.#onSetTheme,
      cycleTheme: Solo10AdversarioSheet.#onCycleTheme,
      editImage: Solo10AdversarioSheet.#onEditImage,
      dispararReacao: Solo10AdversarioSheet.#onDispararReacao
    }
  };

  static PARTS = {
    form: {
      template: "systems/solo10/templates/actor-adversario-sheet.hbs",
      scrollable: [".solo10-sheet-body"]
    }
  };

  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const theme = game.settings?.get("solo10", "theme") || "system";
    const themeLabels = { system: "Sistema", light: "Claro", dark: "Escuro" };
    return {
      ...context,
      theme,
      themeLabel: themeLabels[theme] || "Sistema",
      actor: this.document,
      system: this.document.system
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    game.solo10?.applyThemeToElement?.(this.element);
  }

  static async #onSetTheme(event, target) {
    const novo = target.dataset.theme || "system";
    game.solo10?.applyThemeToElement?.(this.element, novo);
    await game.settings?.set("solo10", "theme", novo);
  }

  static async #onCycleTheme(event, target) {
    const ordem = ["system", "light", "dark"];
    const atual = game.settings?.get("solo10", "theme") || "system";
    const proximo = ordem[(ordem.indexOf(atual) + 1) % ordem.length];
    game.solo10?.applyThemeToElement?.(this.element, proximo);
    await game.settings?.set("solo10", "theme", proximo);
  }

  static async #onEditImage(event, target) {
    const attr = target.dataset.edit || "img";
    const current = foundry.utils.getProperty(this.document, attr);
    const FilePickerCls = foundry.applications?.apps?.FilePicker?.implementation ?? FilePicker;
    const fp = new FilePickerCls({
      type: "image",
      current,
      callback: (path) => {
        this.document.update({ [attr]: path });
      }
    });
    return fp.browse();
  }

  static async #onDispararReacao(event, target) {
    return this.document.dispararReacaoAdversario();
  }
}
