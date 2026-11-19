import { SOLO10 } from "./constants.mjs";
import {
  PersonagemDataModel,
  AdversarioDataModel,
  PericiaDataModel,
  QualidadeDataModel,
  ArmaDataModel,
  ArmaduraDataModel,
  EquipamentoDataModel,
  ArmadilhaDataModel,
  MetaDataModel,
  MagiaDataModel
} from "./data-models.mjs";
import { Solo10Actor } from "./documents/actor.mjs";
import { Solo10Item } from "./documents/item.mjs";
import { Solo10PersonagemSheet, Solo10AdversarioSheet } from "./sheets/actor-sheet.mjs";
import { Solo10ItemSheet } from "./sheets/item-sheet.mjs";
import { Solo10OracleApp } from "./apps/oracle-dialog.mjs";
import { executeSolo10Roll, promptSolo10RollDialog } from "./dice/rolls.mjs";
import { ensureSystemCompendiumsPopulated, abrirCompendioSistema } from "./compendiums.mjs";

/**
 * Garante que todas as janelas de Ficha (Personagem, Adversário, Itens: Qualidades, Perícias, Armas, Armaduras, etc.)
 * e do Oráculo utilizem sempre o tema Claro Minimalista.
 */
export function applyLightThemeToElement(element) {
  if (!element) return;
  const targets = [
    element,
    element.querySelector?.(".window-content"),
    element.querySelector?.(".solo10-sheet-container"),
    element.querySelector?.(".solo10-oracle-container")
  ].filter(Boolean);

  for (const el of targets) {
    el.classList.remove("theme-dark", "solo10-theme-dark", "solo10-theme-system");
    el.classList.add("theme-light", "solo10-theme-light");
  }
}

Hooks.once("init", () => {
  console.log("SOLO 10 | Inicializando o Sistema Solo 10 - Licença Aberta 2.0 (v13/v14)");

  CONFIG.SOLO10 = SOLO10;

  // Rótulo customizável para Setor (Setor, Bairro, Distrito, Zona, Região, Hexágono)
  game.settings.register("solo10", "setorLabel", {
    name: "Nomenclatura de Setor / Zona",
    hint: "Define como as divisões do mapa/cenário são chamadas na ficha e no Oráculo (ex: Setor, Bairro, Distrito, Zona, Região).",
    scope: "world",
    config: true,
    type: String,
    default: "Setor",
    onChange: () => {
      if (foundry.applications?.instances) {
        for (const app of foundry.applications.instances.values()) {
          if (app?.options?.classes?.includes("solo10")) app.render();
        }
      }
    }
  });

  // Lista customizável de Setores / Bairros / Distritos / Zonas do Mundo
  game.settings.register("solo10", "customSetores", {
    name: "Lista de Setores / Zonas do Cenário",
    scope: "world",
    config: false,
    type: Array,
    default: SOLO10.SETORES,
    onChange: () => {
      if (foundry.applications?.instances) {
        for (const app of foundry.applications.instances.values()) {
          if (app?.options?.classes?.includes("solo10")) app.render();
        }
      }
    }
  });

  // Classes de Documento
  CONFIG.Actor.documentClass = Solo10Actor;
  CONFIG.Item.documentClass = Solo10Item;

  // DataModels (Foundry VTT v13 & v14)
  CONFIG.Actor.dataModels = {
    personagem: PersonagemDataModel,
    adversario: AdversarioDataModel
  };

  CONFIG.Item.dataModels = {
    pericia: PericiaDataModel,
    qualidade: QualidadeDataModel,
    arma: ArmaDataModel,
    armadura: ArmaduraDataModel,
    equipamento: EquipamentoDataModel,
    armadilha: ArmadilhaDataModel,
    meta: MetaDataModel,
    magia: MagiaDataModel
  };

  // Helpers Handlebars
  if (!Handlebars.helpers.eq) {
    Handlebars.registerHelper("eq", (a, b) => a === b);
  }
  if (!Handlebars.helpers.gt) {
    Handlebars.registerHelper("gt", (a, b) => Number(a) > Number(b));
  }
  if (!Handlebars.helpers.add) {
    Handlebars.registerHelper("add", (a, b) => Number(a || 0) + Number(b || 0));
  }

  // Registro de Fichas (compatível com Foundry v13 e v14)
  const ActorsCollection = foundry.documents?.collections?.Actors ?? Actors;
  const ItemsCollection = foundry.documents?.collections?.Items ?? Items;

  ActorsCollection.registerSheet("solo10", Solo10PersonagemSheet, {
    types: ["personagem"],
    makeDefault: true,
    label: "SOLO10.SheetPersonagem"
  });

  ActorsCollection.registerSheet("solo10", Solo10AdversarioSheet, {
    types: ["adversario"],
    makeDefault: true,
    label: "SOLO10.SheetAdversario"
  });

  ItemsCollection.registerSheet("solo10", Solo10ItemSheet, {
    types: ["pericia", "qualidade", "arma", "armadura", "equipamento", "armadilha", "meta", "magia"],
    makeDefault: true,
    label: "SOLO10.SheetItem"
  });

  // Expor API global do sistema
  game.solo10 = {
    SOLO10,
    Solo10OracleApp,
    executeSolo10Roll,
    promptSolo10RollDialog,
    abrirCompendioSistema,
    applyLightThemeToElement,
    openOracle: (options = {}) => new Solo10OracleApp(options).render(true)
  };
});

Hooks.once("ready", async () => {
  await ensureSystemCompendiumsPopulated();
});

/**
 * Quando uma Qualidade que concede bônus em Saúde/Postura/Vontade é adicionada a um Personagem,
 * incrementa também o valor atual da reserva correspondente.
 */
Hooks.on("createItem", async (item, options, userId) => {
  if (game.user?.id !== userId) return;
  const actor = item.parent;
  if (!actor || actor.type !== "personagem" || item.type !== "qualidade") return;

  const bS = Number(item.system?.bonusSaude || 0);
  const bP = Number(item.system?.bonusPostura || 0);
  const bV = Number(item.system?.bonusVontade || 0);
  const updates = {};
  if (bS) updates["system.saude.value"] = Number(actor.system.saude.value || 0) + bS;
  if (bP) updates["system.postura.value"] = Number(actor.system.postura.value || 0) + bP;
  if (bV) updates["system.vontade.value"] = Number(actor.system.vontade.value || 0) + bV;
  if (Object.keys(updates).length > 0) {
    await actor.update(updates);
  }
});

/**
 * Listener para botões interativos nos Cards de Chat (compatível com v13 e v14 via renderChatMessageHTML)
 */
function bindChatCardListeners(message, htmlElement) {
  const root = htmlElement instanceof HTMLElement ? htmlElement : htmlElement[0];
  if (!root) return;

  root.querySelectorAll(".solo10-chat-btn").forEach((btn) => {
    if (btn.dataset.solo10Bound) return;
    btn.dataset.solo10Bound = "true";

    btn.addEventListener("click", async (ev) => {
      ev.preventDefault();
      const action = btn.dataset.action;
      const card = btn.closest(".solo10-chat-card");
      const actorId = card?.dataset?.actorId || message.speaker?.actor;
      const actor = game.actors?.get(actorId) || canvas?.tokens?.controlled?.[0]?.actor || game.user?.character;

      if (action === "rerollVontade") {
        const rollConfig = message.flags?.solo10?.rollConfig;
        if (!actor || !rollConfig) {
          ui.notifications.warn("Personagem não encontrado para gastar Vontade.");
          return;
        }
        await actor.gastarVontadeParaRerolar(rollConfig);
      } else if (action === "salvarBonusMental") {
        if (!actor) return;
        const bonus = Number(btn.dataset.bonus || 0);
        const atual = Number(actor.system.bonusMentalFuturo || 0);
        await actor.update({ "system.bonusMentalFuturo": atual + bonus });
        ui.notifications.info(`${actor.name}: +${bonus} de Bônus Mental guardado para teste futuro!`);
      } else if (action === "aplicarCura") {
        if (!actor) return;
        const cura = Number(btn.dataset.cura || 0);
        const nova = Math.min(actor.system.saude.max, Number(actor.system.saude.value || 0) + cura);
        await actor.update({ "system.saude.value": nova });
        ui.notifications.info(`${actor.name} recuperou +${cura} pontos de Saúde (${nova}/${actor.system.saude.max}).`);
      } else if (action === "sofrerDano") {
        if (!actor) return;
        const dano = Number(btn.dataset.dano || 0);
        await actor.sofrerDano(dano, false);
      } else if (action === "defenderReacao") {
        const defensor = canvas?.tokens?.controlled?.[0]?.actor?.type === "personagem"
          ? canvas.tokens.controlled[0].actor
          : game.user?.character || game.actors?.find((a) => a.type === "personagem");
        if (!defensor) {
          ui.notifications.warn("Selecione um Personagem para rolar a Defesa!");
          return;
        }
        const perigo = Number(btn.dataset.perigo || 10);
        const dano = Number(btn.dataset.dano || 3);
        const nomeInimigo = btn.dataset.nome || "Adversário";
        await promptSolo10RollDialog({
          actor: defensor,
          titulo: `Defesa contra ${nomeInimigo}`,
          atributo: "corpo",
          pericia: "Combate Corporal",
          tipoTeste: "defesa",
          perigoInicial: perigo,
          danoReacaoInimigo: dano
        });
      }
    });
  });
}

Hooks.on("renderChatMessageHTML", (message, html) => {
  bindChatCardListeners(message, html);
});

/**
 * Adiciona botões minimalistas de acesso rápido ao Oráculo e Compêndios na barra do Chat
 */
Hooks.on("renderChatLog", (app, html) => {
  const root = html instanceof HTMLElement ? html : html[0];
  if (!root || root.querySelector(".solo10-chat-toolbar")) return;

  const toolbar = document.createElement("div");
  toolbar.className = "solo10-chat-toolbar";
  toolbar.innerHTML = `
    <button type="button" class="solo10-btn solo10-btn-xs solo10-btn-primary" data-tab="cenario">
      <i class="fas fa-eye"></i> Oráculo
    </button>
    <button type="button" class="solo10-btn solo10-btn-xs" data-tab="setores">
      <i class="fas fa-map"></i> Setores
    </button>
    <button type="button" class="solo10-btn solo10-btn-xs" data-tab="exercito">
      <i class="fas fa-chess-rook"></i> Exércitos
    </button>
  `;

  toolbar.querySelectorAll("button").forEach((b) => {
    b.addEventListener("click", (ev) => {
      ev.preventDefault();
      game.solo10.openOracle({ tab: b.dataset.tab });
    });
  });

  const chatControls = root.querySelector("#chat-controls") || root.querySelector(".chat-controls") || root;
  chatControls.prepend(toolbar);
});
