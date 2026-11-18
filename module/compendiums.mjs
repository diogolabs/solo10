import { SOLO10 } from "./constants.mjs";

/**
 * Popula automaticamente os Compêndios do sistema (Perícias, Qualidades, Armas e Armaduras separados)
 * na inicialização do mundo no Foundry VTT v13/v14 caso estejam vazios.
 */
export async function ensureSystemCompendiumsPopulated() {
  if (!game.user?.isGM) return;

  try {
    // 1. Compêndio de Perícias
    const packPericias = game.packs?.get("solo10.pericias");
    if (packPericias) {
      await packPericias.getIndex();
      if (packPericias.index.size === 0) {
        const wasLocked = packPericias.locked;
        if (wasLocked) await packPericias.configure({ locked: false });

        const docsData = Object.values(SOLO10.PERICIAS).map((p) => ({
          name: p.label,
          type: "pericia",
          img: "icons/svg/book.svg",
          system: {
            slug: p.key,
            descricao: p.descricao
          }
        }));
        await Item.createDocuments(docsData, { pack: "solo10.pericias" });
        if (wasLocked) await packPericias.configure({ locked: true });
        console.log("SOLO 10 | Compêndio de Perícias populado com sucesso.");
      }
    }

    // 2. Compêndio de Qualidades
    const packQualidades = game.packs?.get("solo10.qualidades");
    if (packQualidades) {
      await packQualidades.getIndex();
      if (packQualidades.index.size === 0) {
        const wasLocked = packQualidades.locked;
        if (wasLocked) await packQualidades.configure({ locked: false });

        const docsData = SOLO10.QUALIDADES.map((q) => ({
          name: q.nome,
          type: "qualidade",
          img: "icons/svg/upgrade.svg",
          system: {
            slug: q.slug,
            tipo: q.tipo,
            bonusSaude: q.bonusSaude ?? 0,
            bonusPostura: q.bonusPostura ?? 0,
            bonusVontade: q.bonusVontade ?? 0,
            bonusRD: q.bonusRD ?? 0,
            bonusTeste: q.bonusTeste ?? 0,
            concedeVantagem: Boolean(q.concedeVantagem),
            descricao: q.descricao
          }
        }));
        await Item.createDocuments(docsData, { pack: "solo10.qualidades" });
        if (wasLocked) await packQualidades.configure({ locked: true });
        console.log("SOLO 10 | Compêndio de Qualidades populado com sucesso.");
      }
    }

    // 3. Compêndio de Armas (Separado)
    const packArmas = game.packs?.get("solo10.armas");
    if (packArmas) {
      await packArmas.getIndex();
      if (packArmas.index.size === 0) {
        const wasLocked = packArmas.locked;
        if (wasLocked) await packArmas.configure({ locked: false });

        const armasData = SOLO10.ARMAS_PADRAO.map((a) => ({
          name: a.nome,
          type: "arma",
          img: "icons/svg/sword.svg",
          system: {
            alcance: a.alcance,
            tipoDano: a.tipoDano,
            bonusDano: a.bonusDano,
            danoFixo: a.danoFixo,
            leve: a.leve,
            pesada: a.pesada,
            duasMaos: a.duasMaos,
            equipada: true,
            descricao: a.descricao
          }
        }));

        await Item.createDocuments(armasData, { pack: "solo10.armas" });
        if (wasLocked) await packArmas.configure({ locked: true });
        console.log("SOLO 10 | Compêndio de Armas populado com sucesso.");
      }
    }

    // 4. Compêndio de Armaduras (Separado)
    const packArmaduras = game.packs?.get("solo10.armaduras");
    if (packArmaduras) {
      await packArmaduras.getIndex();
      if (packArmaduras.index.size === 0) {
        const wasLocked = packArmaduras.locked;
        if (wasLocked) await packArmaduras.configure({ locked: false });

        const armadurasData = SOLO10.ARMADURAS_PADRAO.map((arm) => ({
          name: arm.nome,
          type: "armadura",
          img: "icons/svg/shield.svg",
          system: {
            resistenciaDano: arm.resistenciaDano,
            penalidadeAgilidade: arm.penalidadeAgilidade,
            escudo: arm.escudo,
            leve: arm.leve,
            equipada: true,
            descricao: arm.descricao
          }
        }));

        await Item.createDocuments(armadurasData, { pack: "solo10.armaduras" });
        if (wasLocked) await packArmaduras.configure({ locked: true });
        console.log("SOLO 10 | Compêndio de Armaduras populado com sucesso.");
      }
    }
  } catch (err) {
    console.warn("SOLO 10 | Aviso ao popular compêndios:", err);
  }
}

/**
 * Abre a janela do Compêndio correspondente para arrastar itens para a ficha.
 */
export async function abrirCompendioSistema(packKey) {
  const pack = game.packs?.get(`solo10.${packKey}`);
  if (pack) {
    return pack.render(true);
  }
  ui.notifications.warn(`Compêndio solo10.${packKey} não encontrado.`);
}
