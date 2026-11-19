import { SOLO10 } from "../constants.mjs";

const { ItemSheetV2 } = foundry.applications.sheets;
const { HandlebarsApplicationMixin } = foundry.applications.api;

const ITEM_TYPE_LABELS = {
  pericia: "Perícia",
  qualidade: "Qualidade",
  arma: "Arma",
  armadura: "Armadura",
  equipamento: "Equipamento",
  armadilha: "Armadilha",
  meta: "Meta / Campanha",
  magia: "Magia"
};

export class Solo10ItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: ["solo10", "theme-light", "solo10-theme-light", "sheet", "item"],
    position: {
      width: 520,
      height: 500
    },
    window: {
      resizable: true
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    },
    actions: {
      editImage: Solo10ItemSheet.#onEditImage,
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
      typeLabel: ITEM_TYPE_LABELS[this.document.type] || this.document.type,
      efeitosArmadilha: SOLO10.EFEITOS_ARMADILHA
    };
  }

  _onRender(context, options) {
    super._onRender(context, options);
    game.solo10?.applyLightThemeToElement?.(this.element);
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

  static async #onPostToChat(event, target) {
    return this.document.postToChat();
  }
}
