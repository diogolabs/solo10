import { SOLO10 } from "../constants.mjs";

const { ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class Solo10ItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["solo10", "sheet", "item"],
    position: {
      width: 500,
      height: 480
    },
    window: {
      resizable: true
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    },
    actions: {
      setTheme: Solo10ItemSheet.#onSetTheme,
      cycleTheme: Solo10ItemSheet.#onCycleTheme,
      postToChat: Solo10ItemSheet.#onPostToChat
    }
  };

  static PARTS = {
    form: {
      template: "systems/solo10/templates/item-sheet.hbs",
      scrollable: [".solo10-item-body"]
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
      item: this.document,
      system: this.document.system,
      efeitosArmadilha: SOLO10.EFEITOS_ARMADILHA
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

  static async #onPostToChat(event, target) {
    return this.document.postToChat();
  }
}
