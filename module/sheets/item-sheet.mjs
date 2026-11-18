import { SOLO10 } from "../constants.mjs";

const { ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

export class Solo10ItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["solo10", "sheet", "item"],
    position: {
      width: 520,
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
    return {
      ...context,
      item: this.document,
      system: this.document.system,
      efeitosArmadilha: SOLO10.EFEITOS_ARMADILHA
    };
  }

  static async #onPostToChat(event, target) {
    return this.document.postToChat();
  }
}
