import { SOLO10 } from "../constants.mjs";

const renderTpl = (...args) =>
  (foundry.applications?.handlebars?.renderTemplate ?? renderTemplate)(...args);

/**
 * Calcula modificadores automáticos e sugestões de Vantagem/Desvantagem com base nas Qualidades e Equipamentos do Ator.
 */
export function getActorRollModifiers(actor, { atributo = "corpo", pericia = "", tipoTeste = "padrao", arma = null } = {}) {
  let bonusQualidades = 0;
  const notasModificadores = [];
  let sugereVantagem = false;
  let sugereDesvantagem = false;

  if (!actor || actor.type !== "personagem") {
    return { bonusQualidades, notasModificadores, sugereVantagem, sugereDesvantagem };
  }

  const hasQualidade = (slug, nome) => actor.hasQualidade(slug, nome);

  // Vantagens automáticas por Qualidade
  if (atributo === "corpo" && pericia === "atletismo" && hasQualidade("agil", "Ágil")) {
    sugereVantagem = true;
    notasModificadores.push("Qualidade Ágil (Vantagem em Corpo/Atletismo)");
  }
  if (atributo === "mente" && (pericia === "conhecimento" || pericia === "idiomas") && hasQualidade("genial", "Genial")) {
    sugereVantagem = true;
    notasModificadores.push("Qualidade Genial (Vantagem em Mente/Conhecimento ou Idiomas)");
  }
  if (atributo === "mente" && pericia === "investigacao" && hasQualidade("sentidosAgucados", "Sentidos Aguçados")) {
    sugereVantagem = true;
    notasModificadores.push("Qualidade Sentidos Aguçados (Vantagem em Mente/Investigação)");
  }
  if (atributo === "corpo" && pericia === "subterfugio") {
    if (hasQualidade("maosLeves", "Mãos Leves")) {
      sugereVantagem = true;
      notasModificadores.push("Qualidade Mãos Leves (Vantagem em fechaduras/cofres/carteiras)");
    }
    if (hasQualidade("rastrosInvisiveis", "Rastros Invisíveis")) {
      sugereVantagem = true;
      notasModificadores.push("Qualidade Rastros Invisíveis (Vantagem em furtividade/esconder-se)");
    }
  }
  if (atributo === "espirito" && pericia === "manipulacao") {
    if (hasQualidade("almaIluminada", "Alma Iluminada")) {
      notasModificadores.push("Qualidade Alma Iluminada disponível (Vantagem em interação benéfica)");
    }
    if (hasQualidade("ameacador", "Ameaçador")) {
      notasModificadores.push("Qualidade Ameaçador disponível (Vantagem em interação forçada)");
    }
    if (hasQualidade("golpista", "Golpista")) {
      notasModificadores.push("Qualidade Golpista disponível (Vantagem para enganar)");
    }
  }

  // Bônus numéricos por Qualidade
  if (atributo === "corpo" && pericia === "combateDistancia" && hasQualidade("atiradorDeElite", "Atirador de Elite")) {
    bonusQualidades += 2;
    notasModificadores.push("Atirador de Elite (+2)");
  }

  if (atributo === "corpo" && pericia === "combateCorporal") {
    const isDesarmado = arma ? arma.name.toLowerCase().includes("desarmado") : false;
    if (isDesarmado && hasQualidade("caoDeBriga", "Cão de Briga")) {
      bonusQualidades += 2;
      notasModificadores.push("Cão de Briga (+2 desarmado)");
    }
    if (arma && (arma.system.pesada || arma.system.duasMaos) && hasQualidade("homemDeArmas", "Homem de Armas")) {
      bonusQualidades += 2;
      notasModificadores.push("Homem de Armas (+2 arma pesada/2 mãos)");
    }
    if (hasQualidade("lutadorVeloz", "Lutador Veloz") && actor.isUsandoEquipamentoLeveSemEscudo(arma)) {
      bonusQualidades += 2;
      notasModificadores.push("Lutador Veloz (+2 arma/armadura leve sem escudo)");
    }
  }

  if (tipoTeste === "defesa" && hasQualidade("defensor", "Defensor")) {
    bonusQualidades += 2;
    notasModificadores.push("Defensor (+2 defesa física)");
  }

  // Penalidade de Armadura Tática/Batalha* ou Escudo* em destreza/agilidade
  if (atributo === "corpo" && (pericia === "atletismo" || pericia === "subterfugio")) {
    if (actor.temPenalidadeArmaduraAgilidade()) {
      sugereDesvantagem = true;
      notasModificadores.push("Armadura/Escudo* (Desvantagem em destreza/agilidade)");
    }
  }

  return { bonusQualidades, notasModificadores, sugereVantagem, sugereDesvantagem };
}

/**
 * Executa uma rolagem do sistema Solo 10 e cria a mensagem no Chat.
 */
export async function executeSolo10Roll({
  actor = null,
  titulo = "Teste de Atributo",
  atributo = "corpo",
  pericia = "",
  usarPericia = false,
  modoDados = "normal", // "normal" | "vantagem" | "desvantagem" | "ambas"
  perigoBase = 10,
  riscosExtras = 0,
  ignorarPerigoCuidadoso = false,
  modificadorExtra = 0,
  ataqueSelvagem = false,
  ataqueEmArco = false,
  desarme = false,
  tipoTeste = "padrao", // "padrao" | "ataque" | "defesa" | "social" | "mental" | "curandeiro" | "armadilha" | "barganha" | "abastado"
  armaData = null,
  danoReacaoInimigo = 0,
  isRerollVontade = false
} = {}) {
  const attrObj = SOLO10.ATRIBUTOS[atributo] ?? SOLO10.ATRIBUTOS.corpo;
  const valorAtributo = actor?.type === "personagem"
    ? Number(actor.system.atributos?.[atributo]?.value ?? 0) + Number(actor.system.atributos?.[atributo]?.bonus ?? 0)
    : Number(perigoBase || 0);

  const periciaObj = pericia ? SOLO10.PERICIAS[pericia] : null;
  const bonusPericia = usarPericia ? 2 : 0;

  const { bonusQualidades, notasModificadores } = getActorRollModifiers(actor, {
    atributo,
    pericia,
    tipoTeste,
    arma: armaData
  });

  const bonusSelvagem = ataqueSelvagem ? 5 : 0;
  if (ataqueSelvagem) {
    notasModificadores.push("Ataque Selvagem (+5 no ataque; sem defesa neste turno)");
  }

  // Cálculo do Perigo Total (Regra: Perigo Total = Maior Perigo + 1 por risco extra, máximo 15)
  let perigoTotal = Math.max(0, Number(perigoBase) || 10) + Math.max(0, Number(riscosExtras) || 0);
  if (perigoTotal > 15) perigoTotal = 15;

  let dificuldade = Math.max(10, perigoTotal);
  if (ignorarPerigoCuidadoso) {
    dificuldade = 10;
    notasModificadores.push("Qualidade Cuidadoso (Ignora Perigo: Dificuldade 10)");
  }

  // Determinação da fórmula de dados (1d10, 2d10kh1, 2d10kl1)
  let diceFormula = "1d10";
  let modoDadosLabel = "Normal (1D10)";
  if (modoDados === "vantagem") {
    diceFormula = "2d10kh1";
    modoDadosLabel = "Vantagem (2D10 - Maior)";
  } else if (modoDados === "desvantagem") {
    diceFormula = "2d10kl1";
    modoDadosLabel = "Desvantagem (2D10 - Menor)";
  } else if (modoDados === "ambas") {
    diceFormula = "1d10";
    modoDadosLabel = "Vantagem + Desvantagem (Anulam-se: 1D10)";
  }

  const somaModificadores = valorAtributo + bonusPericia + bonusQualidades + bonusSelvagem + Number(modificadorExtra || 0);
  const formula = `${diceFormula} + ${somaModificadores}`;

  const roll = new Roll(formula);
  await roll.evaluate();

  // Extrair resultados individuais dos dados D10 rolados
  const dieTerm = roll.terms[0];
  const dadosRolados = (dieTerm?.results ?? []).map((r) => ({
    result: r.result,
    active: r.active !== false,
    discarded: r.discarded === true
  }));
  const valorDado = dieTerm?.total ?? 0;

  const total = roll.total;
  const sucesso = total >= dificuldade;
  const bonusPoder = sucesso ? Math.max(0, total - dificuldade) : 0;

  // Cálculo de efeitos específicos conforme o tipo de teste
  let efeitoTexto = "";
  let danoTotal = null;
  let impactoPostura = null;
  let bonusMentalGerado = null;
  let curaGerada = null;
  let danoSofridoDefesa = null;

  const corpoTotal = actor?.type === "personagem"
    ? Number(actor.system.atributos.corpo.value ?? 0) + Number(actor.system.atributos.corpo.bonus ?? 0)
    : 0;
  const espiritoTotal = actor?.type === "personagem"
    ? Number(actor.system.atributos.espirito.value ?? 0) + Number(actor.system.atributos.espirito.bonus ?? 0)
    : 0;
  const menteTotal = actor?.type === "personagem"
    ? Number(actor.system.atributos.mente.value ?? 0) + Number(actor.system.atributos.mente.bonus ?? 0)
    : 0;

  if (tipoTeste === "ataque") {
    if (sucesso) {
      if (ataqueEmArco) {
        danoTotal = bonusPoder;
        efeitoTexto = `Ataque em Arco bem-sucedido! Causa ${danoTotal} de dano (igual ao Bônus de Poder) a TODOS os Adversários engajados.`;
      } else if (desarme) {
        impactoPostura = bonusPoder;
        efeitoTexto = `Desarme bem-sucedido! Oponente desarmado e perde ${impactoPostura} de Postura (Bônus de Poder). Se chegar a 0, ele se rende.`;
      } else {
        const baseArma = armaData?.system?.tipoDano === "fixo"
          ? Number(armaData.system.danoFixo || 0)
          : corpoTotal + Number(armaData?.system?.bonusDano ?? 0);
        danoTotal = baseArma + bonusPoder;
        efeitoTexto = `Ataque certeiro! Dano Total: ${danoTotal} (Base ${baseArma} + Bônus de Poder ${bonusPoder}).`;
      }
    } else {
      efeitoTexto = "O ataque falhou! A reação do Adversário pode ser ativada.";
    }
  } else if (tipoTeste === "defesa") {
    if (sucesso) {
      efeitoTexto = "Defesa bem-sucedida! Você evitou o ataque/reação do Adversário.";
    } else {
      const rd = actor?.type === "personagem" ? actor.getResistenciaDano() : 0;
      const bruto = Math.max(0, Number(danoReacaoInimigo) || 0);
      danoSofridoDefesa = Math.max(0, bruto - rd);
      efeitoTexto = bruto > 0
        ? `Falha na defesa! Dano da Reação (${bruto}) - Resistência a Dano (${rd}) = ${danoSofridoDefesa} de dano à Saúde.`
        : "Falha na defesa! Aplique o efeito da Reação do Adversário.";
    }
  } else if (tipoTeste === "social" || atributo === "espirito") {
    if (sucesso) {
      impactoPostura = espiritoTotal + bonusPoder;
      efeitoTexto = `Sucesso Social! Reduz (ou altera) a Postura do alvo em ${impactoPostura} pontos (Espírito ${espiritoTotal} + Bônus de Poder ${bonusPoder}).`;
    } else {
      efeitoTexto = "Falha na interação social.";
    }
  } else if (tipoTeste === "mental" || atributo === "mente") {
    if (sucesso && bonusPoder > 0) {
      bonusMentalGerado = bonusPoder;
      efeitoTexto = `Sucesso Mental! Concede +${bonusPoder} de bônus em testes futuros sobre o mesmo assunto.`;
    }
  }

  if (tipoTeste === "curandeiro") {
    if (sucesso) {
      curaGerada = 2 + bonusPoder;
      efeitoTexto = `Curandeiro bem-sucedido! Cura doença mundana ou recupera ${curaGerada} pontos de Saúde (2 + Bônus de Poder ${bonusPoder}).`;
    } else {
      efeitoTexto = "Falha ao administrar o tratamento de Curandeiro.";
    }
  } else if (tipoTeste === "barganha") {
    if (sucesso) {
      const desconto = Math.min(50, 10 + bonusPoder * 10);
      efeitoTexto = `Barganha bem-sucedida! Desconto obtido: ${desconto}% no valor do item (máx. 50%).`;
    } else {
      efeitoTexto = "Não conseguiu desconto na barganha.";
    }
  } else if (tipoTeste === "abastado") {
    if (sucesso) {
      const valorObtido = 100 + bonusPoder * 20;
      efeitoTexto = `Qualidade Abastado: obteve $ ${valorObtido} da sua fonte de renda ($ 100 + $ ${bonusPoder * 20} do Bônus de Poder)!`;
    } else {
      efeitoTexto = "Não conseguiu obter recursos extras da fonte de renda neste momento.";
    }
  } else if (tipoTeste === "armadilha") {
    if (sucesso) {
      efeitoTexto = `Armadilha montada com sucesso! Bônus de Poder: +${bonusPoder} (Dano: ${menteTotal + bonusPoder} | Atraso: ${1 + bonusPoder}h | Envenenado: ${bonusPoder} | Preso Perigo: ${Math.min(15, bonusPoder)} | Perigo Desarme: ${Math.min(15, 10 + bonusPoder)}).`;
    } else {
      efeitoTexto = "Falha ao montar a armadilha.";
    }
  }

  const podeGastarVontade = actor?.type === "personagem" && Number(actor.system.vontade?.value ?? 0) > 0;

  const rollConfig = {
    actorId: actor?.id ?? null,
    titulo,
    atributo,
    pericia,
    usarPericia,
    modoDados,
    perigoBase,
    riscosExtras,
    ignorarPerigoCuidadoso,
    modificadorExtra,
    ataqueSelvagem,
    ataqueEmArco,
    desarme,
    tipoTeste,
    armaData: armaData ? { name: armaData.name, system: armaData.system } : null,
    danoReacaoInimigo
  };

  const templateData = {
    actorId: actor?.id ?? "",
    actorName: actor?.name ?? "Personagem",
    titulo,
    isRerollVontade,
    atributoLabel: attrObj.label,
    valorAtributo,
    periciaLabel: periciaObj ? periciaObj.label : null,
    usarPericia,
    bonusPericia,
    bonusQualidades,
    bonusSelvagem,
    modificadorExtra: Number(modificadorExtra || 0),
    notasModificadores,
    modoDadosLabel,
    dadosRolados,
    valorDado,
    dificuldade,
    perigoTotal,
    total,
    sucesso,
    bonusPoder,
    efeitoTexto,
    danoTotal,
    impactoPostura,
    bonusMentalGerado,
    curaGerada,
    danoSofridoDefesa,
    podeGastarVontade
  };

  const content = await renderTpl("systems/solo10/templates/chat/roll-card.hbs", templateData);

  const chatData = {
    user: game.user.id,
    speaker: ChatMessage.getSpeaker({ actor }),
    content,
    rolls: [roll],
    flags: {
      solo10: {
        rollConfig,
        resultado: {
          total,
          sucesso,
          bonusPoder,
          danoTotal,
          impactoPostura,
          bonusMentalGerado,
          curaGerada,
          danoSofridoDefesa
        }
      }
    }
  };

  return ChatMessage.create(chatData);
}

/**
 * Abre um diálogo interativo para configurar o Teste de Atributo / Perícia / Combate antes de rolar.
 */
export async function promptSolo10RollDialog({
  actor,
  titulo = "Teste de Atributo",
  atributo = "corpo",
  pericia = "",
  usarPericia = null,
  tipoTeste = "padrao",
  arma = null,
  perigoInicial = 10,
  danoReacaoInimigo = 0
} = {}) {
  const periciaTreinada = pericia && actor?.type === "personagem"
    ? Boolean(actor.system.pericias?.[pericia]?.treinada)
    : false;
  const checkPericia = usarPericia !== null ? usarPericia : periciaTreinada;

  const { bonusQualidades, notasModificadores, sugereVantagem, sugereDesvantagem } = getActorRollModifiers(actor, {
    atributo,
    pericia,
    tipoTeste,
    arma
  });

  let modoInicial = "normal";
  if (sugereVantagem && sugereDesvantagem) modoInicial = "ambas";
  else if (sugereVantagem) modoInicial = "vantagem";
  else if (sugereDesvantagem) modoInicial = "desvantagem";

  const hasCuidadoso = actor?.type === "personagem" && actor.hasQualidade("cuidadoso", "Cuidadoso");
  const hasAtaqueSelvagem = actor?.type === "personagem" && actor.hasQualidade("ataqueSelvagem", "Ataque Selvagem");
  const hasAtaqueEmArco = actor?.type === "personagem" && actor.hasQualidade("ataqueEmArco", "Ataque em Arco");
  const hasDesarme = actor?.type === "personagem" && actor.hasQualidade("desarme", "Desarme");

  const atributosOptions = Object.values(SOLO10.ATRIBUTOS)
    .map((a) => `<option value="${a.key}" ${a.key === atributo ? "selected" : ""}>${a.label} (${(actor?.system?.atributos?.[a.key]?.value ?? 0) + (actor?.system?.atributos?.[a.key]?.bonus ?? 0)})</option>`)
    .join("");

  const periciasOptions = [
    `<option value="">— Nenhuma Perícia —</option>`,
    ...Object.values(SOLO10.PERICIAS).map((p) => {
      const isTr = actor?.system?.pericias?.[p.key]?.treinada;
      return `<option value="${p.key}" ${p.key === pericia ? "selected" : ""}>${p.label}${isTr ? " (+2 Treinada)" : ""}</option>`;
    })
  ].join("");

  const notasHtml = notasModificadores.length
    ? `<div class="solo10-dialog-notes"><strong>Qualidades / Equipamento detectados:</strong><ul>${notasModificadores.map((n) => `<li>${n}</li>`).join("")}</ul></div>`
    : "";

  const combateExtrasHtml = (tipoTeste === "ataque" || pericia === "combateCorporal")
    ? `
      <div class="solo10-dialog-group">
        <label class="solo10-checkbox">
          <input type="checkbox" name="ataqueSelvagem" ${hasAtaqueSelvagem ? "" : ""} />
          <span><strong>Ataque Selvagem (+5):</strong> Abdica de qualquer defesa neste turno (só RD da armadura).</span>
        </label>
        ${hasAtaqueEmArco ? `
        <label class="solo10-checkbox">
          <input type="checkbox" name="ataqueEmArco" />
          <span><strong>Ataque em Arco:</strong> Causa dano igual ao Bônus de Poder a todos os Adversários engajados.</span>
        </label>` : ""}
        ${hasDesarme ? `
        <label class="solo10-checkbox">
          <input type="checkbox" name="desarme" />
          <span><strong>Desarme:</strong> Desarma o oponente e reduz a Postura dele igual ao Bônus de Poder.</span>
        </label>` : ""}
      </div>
    `
    : "";

  const defesaExtrasHtml = tipoTeste === "defesa"
    ? `
      <div class="solo10-dialog-row">
        <label>Dano da Reação do Adversário (se falhar)</label>
        <input type="number" name="danoReacaoInimigo" value="${danoReacaoInimigo}" min="0" />
      </div>
    `
    : "";

  const content = `
    <div class="solo10-roll-dialog">
      ${notasHtml}
      <div class="solo10-dialog-row">
        <label>Atributo Testado</label>
        <select name="atributo">${atributosOptions}</select>
      </div>
      <div class="solo10-dialog-row">
        <label>Perícia Relacionada</label>
        <select name="pericia">${periciasOptions}</select>
      </div>
      <div class="solo10-dialog-row">
        <label class="solo10-checkbox">
          <input type="checkbox" name="usarPericia" ${checkPericia ? "checked" : ""} />
          <span>Possui / Aplicar Perícia (+2 na rolagem)</span>
        </label>
      </div>
      <div class="solo10-dialog-row">
        <label>Rolagem de Dados (Vantagem / Desvantagem)</label>
        <select name="modoDados">
          <option value="normal" ${modoInicial === "normal" ? "selected" : ""}>Normal (1D10)</option>
          <option value="vantagem" ${modoInicial === "vantagem" ? "selected" : ""}>Vantagem (2D10 - pega o maior)</option>
          <option value="desvantagem" ${modoInicial === "desvantagem" ? "selected" : ""}>Desvantagem (2D10 - pega o menor)</option>
          <option value="ambas" ${modoInicial === "ambas" ? "selected" : ""}>Vantagem + Desvantagem (Anulam-se: 1D10)</option>
        </select>
      </div>
      <div class="solo10-dialog-grid-2">
        <div class="solo10-dialog-row">
          <label>Maior Perigo (Padrão 10)</label>
          <input type="number" name="perigoBase" value="${perigoInicial}" min="0" max="15" />
        </div>
        <div class="solo10-dialog-row">
          <label>Riscos / Adversários Extras (+1 cada, máx. 15)</label>
          <input type="number" name="riscosExtras" value="0" min="0" max="15" />
        </div>
      </div>
      ${hasCuidadoso ? `
      <div class="solo10-dialog-row">
        <label class="solo10-checkbox">
          <input type="checkbox" name="ignorarPerigoCuidadoso" />
          <span><strong>Qualidade Cuidadoso:</strong> Confrontando Armadilha ou Perigo Natural (Ignora Perigo -> Dificuldade 10)</span>
        </label>
      </div>` : ""}
      <div class="solo10-dialog-row">
        <label>Modificador Extra (Bônus Mental Futuro, Honrado +2, etc.)</label>
        <input type="number" name="modificadorExtra" value="${atributo === "mente" ? Number(actor?.system?.bonusMentalFuturo || 0) : 0}" />
      </div>
      ${combateExtrasHtml}
      ${defesaExtrasHtml}
    </div>
  `;

  const DialogV2 = foundry.applications?.api?.DialogV2;
  if (DialogV2) {
    return DialogV2.wait({
      window: { title: `${titulo} — ${actor?.name ?? "Solo 10"}` },
      content,
      buttons: [
        {
          action: "roll",
          label: "Rolar 1D10",
          icon: "fas fa-dice-d10",
          default: true,
          callback: async (event, button, dialog) => {
            const form = button.form ?? dialog.element.querySelector("form") ?? dialog.element;
            const getVal = (name) => form.querySelector(`[name="${name}"]`);
            const selAttr = getVal("atributo")?.value || atributo;
            const selPericia = getVal("pericia")?.value || "";
            const selUsarPericia = Boolean(getVal("usarPericia")?.checked);
            const selModoDados = getVal("modoDados")?.value || "normal";
            const selPerigoBase = Number(getVal("perigoBase")?.value ?? 10);
            const selRiscosExtras = Number(getVal("riscosExtras")?.value ?? 0);
            const selCuidadoso = Boolean(getVal("ignorarPerigoCuidadoso")?.checked);
            const selModExtra = Number(getVal("modificadorExtra")?.value ?? 0);
            const selSelvagem = Boolean(getVal("ataqueSelvagem")?.checked);
            const selArco = Boolean(getVal("ataqueEmArco")?.checked);
            const selDesarme = Boolean(getVal("desarme")?.checked);
            const selDanoReacao = Number(getVal("danoReacaoInimigo")?.value ?? danoReacaoInimigo);

            return executeSolo10Roll({
              actor,
              titulo,
              atributo: selAttr,
              pericia: selPericia,
              usarPericia: selUsarPericia,
              modoDados: selModoDados,
              perigoBase: selPerigoBase,
              riscosExtras: selRiscosExtras,
              ignorarPerigoCuidadoso: selCuidadoso,
              modificadorExtra: selModExtra,
              ataqueSelvagem: selSelvagem,
              ataqueEmArco: selArco,
              desarme: selDesarme,
              tipoTeste,
              armaData: arma,
              danoReacaoInimigo: selDanoReacao
            });
          }
        },
        {
          action: "cancel",
          label: "Cancelar",
          icon: "fas fa-times"
        }
      ],
      rejectClose: false
    });
  }
}
