export class Solo10Item extends Item {
  /**
   * Envia a descrição do Item para o Chat.
   */
  async postToChat() {
    const sys = this.system;
    let detalhes = "";
    if (this.type === "arma") {
      const danoStr = sys.tipoDano === "fixo" ? `${sys.danoFixo}` : `Corpo + ${sys.bonusDano}`;
      detalhes = `<p><strong>Alcance:</strong> ${sys.alcance === "distancia" ? "Combate a Distância" : "Combate Corporal"} | <strong>Dano:</strong> ${danoStr}</p>`;
    } else if (this.type === "armadura") {
      detalhes = `<p><strong>Resistência a Dano:</strong> Reduz ${sys.resistenciaDano} de dano ${sys.penalidadeAgilidade ? "<em>(*Desvantagem em destreza/agilidade)</em>" : ""}</p>`;
    } else if (this.type === "qualidade") {
      detalhes = `<p><strong>Tipo:</strong> Qualidade ${sys.tipo === "ativa" ? "Ativa" : "Passiva"}</p>`;
    } else if (this.type === "armadilha") {
      detalhes = `<p><strong>Efeito:</strong> ${sys.efeito} (Bônus de Poder: +${sys.bonusPoder})</p>`;
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
