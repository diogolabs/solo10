export class Solo10Item extends Item {
  /**
   * Envia a descrição do Item para o Chat.
   */
  async postToChat() {
    const sys = this.system;
    let detalhes = "";
    if (this.type === "pericia") {
      detalhes = `<p><strong>Perícia (+2 nos testes):</strong> Livre de Atributo (definido na hora do teste)</p>`;
    } else if (this.type === "arma") {
      const danoStr = sys.tipoDano === "fixo" ? `${sys.danoFixo}` : `Corpo + ${sys.bonusDano}`;
      detalhes = `<p><strong>Alcance:</strong> ${sys.alcance === "distancia" ? "Combate a Distância" : "Combate Corporal"} | <strong>Dano:</strong> ${danoStr}</p>`;
    } else if (this.type === "armadura") {
      detalhes = `<p><strong>Resistência a Dano:</strong> Reduz ${sys.resistenciaDano} de dano ${sys.penalidadeAgilidade ? "<em>(*Desvantagem em destreza/agilidade)</em>" : ""}</p>`;
    } else if (this.type === "qualidade") {
      const mods = [];
      if (sys.bonusSaude) mods.push(`+${sys.bonusSaude} Saúde`);
      if (sys.bonusPostura) mods.push(`+${sys.bonusPostura} Postura`);
      if (sys.bonusVontade) mods.push(`+${sys.bonusVontade} Vontade`);
      if (sys.bonusRD) mods.push(`+${sys.bonusRD} RD`);
      if (sys.bonusTeste) mods.push(`+${sys.bonusTeste} em Testes`);
      if (sys.concedeVantagem) mods.push(`Concede Vantagem`);
      detalhes = `<p><strong>Tipo:</strong> Qualidade ${sys.tipo === "ativa" ? "Ativa" : "Passiva"}${mods.length ? ` (${mods.join(", ")})` : ""}</p>`;
    } else if (this.type === "armadilha") {
      detalhes = `<p><strong>Efeito:</strong> ${sys.efeito} (Bônus de Poder: +${sys.bonusPoder})</p>`;
    } else if (this.type === "equipamento") {
      const cats = {
        equipamento: "Equipamento",
        vestuario: "Vestuário",
        alimentacao: "Alimentação",
        outro: "Outro"
      };
      const catLabel = cats[sys.categoria] || "Equipamento";
      detalhes = `<p><strong>Categoria:</strong> ${catLabel} | <strong>Qtd:</strong> ${sys.quantidade ?? 1} | <strong>Custo:</strong> $ ${sys.custo ?? 0}</p>`;
    } else if (this.type === "magia") {
      const attrs = { corpo: "Corpo", espirito: "Espírito", mente: "Mente" };
      const parts = [];
      if (sys.escola) parts.push(`<strong>Escola / Círculo:</strong> ${sys.escola}`);
      parts.push(`<strong>Atributo:</strong> ${attrs[sys.atributo] || sys.atributo || "Mente"}`);
      if (sys.custo) parts.push(`<strong>Custo:</strong> ${sys.custo}`);
      if (sys.alcance) parts.push(`<strong>Alcance:</strong> ${sys.alcance}`);
      if (sys.duracao) parts.push(`<strong>Duração:</strong> ${sys.duracao}`);
      if (sys.bonusTeste) parts.push(`<strong>Bônus:</strong> +${sys.bonusTeste}`);
      detalhes = `<p>${parts.join(" | ")}</p>`;
    }

    const content = `
      <div class="solo10-chat-card">
        <header class="solo10-card-header">
          <h3>${this.name}</h3>
        </header>
        <div class="solo10-card-effect">
          ${detalhes}
          <div>${sys.descricao || ""}</div>
        </div>
      </div>
    `;

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content
    });
  }
}
