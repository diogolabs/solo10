const { TypeDataModel } = foundry.abstract;
const fields = foundry.data.fields;

export class PersonagemDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      atributos: new fields.SchemaField({
        corpo: new fields.SchemaField({
          value: new fields.NumberField({ required: true, integer: true, initial: 3, min: 0 }),
          bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
        }),
        espirito: new fields.SchemaField({
          value: new fields.NumberField({ required: true, integer: true, initial: 3, min: 0 }),
          bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
        }),
        mente: new fields.SchemaField({
          value: new fields.NumberField({ required: true, integer: true, initial: 3, min: 0 }),
          bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
        })
      }),
      saude: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      postura: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      vontade: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 8, min: 0 }),
        bonus: new fields.NumberField({ required: true, integer: true, initial: 0 })
      }),
      idiomasLista: new fields.StringField({ initial: "" }),
      especieTipo: new fields.StringField({ initial: "" }),
      moradaInicial: new fields.StringField({ initial: "" }),
      setorAtual: new fields.StringField({ initial: "Cidade Nova" }),
      dinheiro: new fields.NumberField({ required: true, initial: 3000 }),
      experiencia: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 0, min: 0 }),
        total: new fields.NumberField({ required: true, integer: true, initial: 0, min: 0 })
      }),
      diasVividos: new fields.NumberField({ required: true, integer: true, initial: 0, min: 0 }),
      investigadoCrime: new fields.BooleanField({ initial: false }),
      bonusMentalFuturo: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      acontecimento: new fields.SchemaField({
        titulo: new fields.StringField({ initial: "" }),
        locaisVisitados: new fields.NumberField({ required: true, integer: true, initial: 0, min: 0, max: 5 }),
        ameacaEncontrada: new fields.BooleanField({ initial: false })
      }),
      campanha: new fields.SchemaField({
        ideiaCentral: new fields.StringField({ initial: "" }),
        falhas: new fields.NumberField({ required: true, integer: true, initial: 0, min: 0 }),
        notas: new fields.StringField({ initial: "" })
      }),
      biografia: new fields.HTMLField({ initial: "" }),
      notas: new fields.HTMLField({ initial: "" }),
      grimorio: new fields.HTMLField({ initial: "" })
    };
  }
}

export class AdversarioDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      saude: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 })
      }),
      postura: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 })
      }),
      vontade: new fields.SchemaField({
        value: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 }),
        max: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0 })
      }),
      perigo: new fields.NumberField({ required: true, integer: true, initial: 10, min: 0, max: 15 }),
      danoReacao: new fields.NumberField({ required: true, integer: true, initial: 3, min: 0 }),
      ataqueReacao: new fields.StringField({
        initial: "Caso o alvo falhe em um teste de Corpo (Combate Corporal), o Adversário causa X de dano a sua Saúde."
      }),
      outrasCaracteristicas: new fields.HTMLField({ initial: "" }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

/**
 * Perícia como Item modular independente de Atributo
 */
export class PericiaDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      slug: new fields.StringField({ initial: "" }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

/**
 * Qualidade como Item modular com modificadores configuráveis
 */
export class QualidadeDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      slug: new fields.StringField({ initial: "" }),
      tipo: new fields.StringField({ initial: "passiva" }),
      bonusSaude: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      bonusPostura: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      bonusVontade: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      bonusRD: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      bonusTeste: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      concedeVantagem: new fields.BooleanField({ initial: false }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class ArmaDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      alcance: new fields.StringField({ initial: "corporal" }),
      tipoDano: new fields.StringField({ initial: "corpo" }),
      bonusDano: new fields.NumberField({ required: true, integer: true, initial: 1 }),
      danoFixo: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      pesada: new fields.BooleanField({ initial: false }),
      duasMaos: new fields.BooleanField({ initial: false }),
      leve: new fields.BooleanField({ initial: false }),
      equipada: new fields.BooleanField({ initial: true }),
      custo: new fields.NumberField({ required: true, initial: 0 }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class ArmaduraDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      resistenciaDano: new fields.NumberField({ required: true, integer: true, initial: 1, min: 0 }),
      penalidadeAgilidade: new fields.BooleanField({ initial: false }),
      escudo: new fields.BooleanField({ initial: false }),
      leve: new fields.BooleanField({ initial: false }),
      equipada: new fields.BooleanField({ initial: true }),
      custo: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class EquipamentoDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      quantidade: new fields.NumberField({ required: true, integer: true, initial: 1, min: 0 }),
      custo: new fields.NumberField({ required: true, initial: 0 }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class ArmadilhaDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      efeito: new fields.StringField({ initial: "dano" }),
      bonusPoder: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      perigoSecundario: new fields.BooleanField({ initial: false }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class MetaDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      tipo: new fields.StringField({ initial: "meta" }),
      concluida: new fields.BooleanField({ initial: false }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}

export class MagiaDataModel extends TypeDataModel {
  static defineSchema() {
    return {
      escola: new fields.StringField({ initial: "" }),
      atributo: new fields.StringField({ initial: "mente" }),
      custo: new fields.StringField({ initial: "" }),
      alcance: new fields.StringField({ initial: "" }),
      duracao: new fields.StringField({ initial: "" }),
      bonusTeste: new fields.NumberField({ required: true, integer: true, initial: 0 }),
      descricao: new fields.HTMLField({ initial: "" })
    };
  }
}
