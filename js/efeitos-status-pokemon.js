/* Banco central e executor de condições de status usado pelos três modos. */
(() => {
  "use strict";

  const normalizar = (valor) =>
    String(valor || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z]/g, "");
  const STATUS_POKEMON = Object.freeze({
    burn: Object.freeze({
      nome: "Queimadura",
      efeito: "Causa dano residual no fim do turno e reduz o dano físico.",
      cor: "#e85d3f",
      simbolo: "🔥",
    }),
    poison: Object.freeze({
      nome: "Envenenamento",
      efeito: "Causa dano residual no fim do turno.",
      cor: "#a85ac7",
      simbolo: "☠",
    }),
    paralysis: Object.freeze({
      nome: "Paralisia",
      efeito: "Pode impedir o Pokémon de agir e reduz sua velocidade.",
      cor: "#d5a900",
      simbolo: "ϟ",
    }),
    freeze: Object.freeze({
      nome: "Congelamento",
      efeito: "Pode impedir o Pokémon de agir até descongelar.",
      cor: "#38a7d8",
      simbolo: "❄",
    }),
    sleep: Object.freeze({
      nome: "Sono",
      efeito: "Impede o Pokémon de agir por alguns turnos.",
      cor: "#6875c8",
      simbolo: "Zz",
    }),
    confusion: Object.freeze({
      nome: "Confusão",
      efeito: "Pode fazer o Pokémon perder a ação e causar dano a si mesmo.",
      cor: "#d08037",
      simbolo: "?",
    }),
  });

  // Cada entrada associa o nome normalizado do golpe à condição e à chance.
  const EFEITOS_STATUS_POR_GOLPE = Object.freeze({
    flamethrower: { status: "burn", chance: 0.1 },
    fireblast: { status: "burn", chance: 0.1 },
    firepunch: { status: "burn", chance: 0.1 },
    firefang: { status: "burn", chance: 0.1 },
    heatwave: { status: "burn", chance: 0.1 },
    flareblitz: { status: "burn", chance: 0.1 },
    thunderbolt: { status: "paralysis", chance: 0.1 },
    thunderpunch: { status: "paralysis", chance: 0.1 },
    thundershock: { status: "paralysis", chance: 0.1 },
    thunder: { status: "paralysis", chance: 0.3 },
    bodyslam: { status: "paralysis", chance: 0.3 },
    nuzzle: { status: "paralysis", chance: 1 },
    thunderwave: { status: "paralysis", chance: 1 },
    glare: { status: "paralysis", chance: 1 },
    stunspore: { status: "paralysis", chance: 0.75 },
    icebeam: { status: "freeze", chance: 0.1 },
    icepunch: { status: "freeze", chance: 0.1 },
    freezedry: { status: "freeze", chance: 0.1 },
    sludgebomb: { status: "poison", chance: 0.3 },
    sludgewave: { status: "poison", chance: 0.1 },
    poisonjab: { status: "poison", chance: 0.3 },
    poisonpowder: { status: "poison", chance: 0.75 },
    toxic: { status: "poison", chance: 1 },
    hypnosis: { status: "sleep", chance: 0.6, turnos: 2 },
    sleeppowder: { status: "sleep", chance: 0.8, turnos: 2 },
    spore: { status: "sleep", chance: 1, turnos: 2 },
    sing: { status: "sleep", chance: 0.55, turnos: 2 },
    yawn: { status: "sleep", chance: 1, turnos: 2 },
    confuseray: { status: "confusion", chance: 1, turnos: 3 },
    dynamicpunch: { status: "confusion", chance: 1, turnos: 3 },
    confusion: { status: "confusion", chance: 0.1, turnos: 3 },
    rest: { selfStatus: "sleep", selfTurns: 2, curarAtacante: true },
    refresh: { curarAtacante: true },
    healbell: { curarEquipe: true },
    aromatherapy: { curarEquipe: true },
    sparklingaria: { curarAlvo: "burn" },
    sparklearia: { curarAlvo: "burn" },
  });

  function obterEfeitoStatus(golpe) {
    const porNome = EFEITOS_STATUS_POR_GOLPE[normalizar(golpe?.nome)] || {};
    return {
      ...porNome,
      ...(golpe?.status ? { status: normalizarStatus(golpe.status) } : {}),
      ...(golpe?.statusChance != null ? { chance: Number(golpe.statusChance) } : {}),
      ...(golpe?.statusTurns != null ? { turnos: Number(golpe.statusTurns) } : {}),
      ...(golpe?.selfStatus ? { selfStatus: normalizarStatus(golpe.selfStatus) } : {}),
    };
  }
  function normalizarStatus(status) {
    const chave = normalizar(status);
    return (
      {
        queimado: "burn",
        burned: "burn",
        burn: "burn",
        veneno: "poison",
        envenenado: "poison",
        poisoned: "poison",
        poison: "poison",
        toxic: "poison",
        badlypoisoned: "poison",
        paralisado: "paralysis",
        paralyze: "paralysis",
        paralyzed: "paralysis",
        paralisia: "paralysis",
        static: "paralysis",
        paralysis: "paralysis",
        congelado: "freeze",
        frozen: "freeze",
        congelamento: "freeze",
        freeze: "freeze",
        dormindo: "sleep",
        asleep: "sleep",
        sono: "sleep",
        sleep: "sleep",
        confuso: "confusion",
        confusao: "confusion",
        confusion: "confusion",
      }[chave] || chave
    );
  }
  function nomeStatusPokemon(status) {
    return STATUS_POKEMON[normalizarStatus(status)]?.nome || "Normal";
  }
  function tipoEh(tipos, ...nomes) {
    const chaves = (tipos || []).map(normalizar);
    return nomes.some((nome) => chaves.includes(normalizar(nome)));
  }
  function statusImune(alvo, status, golpe) {
    const tipos = alvo?.tipos || [];
    if (status === "burn" && tipoEh(tipos, "fogo", "fire")) return true;
    if (status === "freeze" && tipoEh(tipos, "gelo", "ice")) return true;
    if (status === "poison" && tipoEh(tipos, "veneno", "poison", "metal", "steel")) return true;
    if (status === "paralysis" && tipoEh(tipos, "eletrico", "electric")) return true;
    if (
      status === "paralysis" &&
      tipoEh(tipos, "terrestre", "ground") &&
      tipoEh([golpe?.tipo || golpe?.tipos], "eletrico", "electric")
    )
      return true;
    if (
      status === "sleep" &&
      tipoEh(tipos, "grama", "grass") &&
      ["sleeppowder", "spore"].includes(normalizar(golpe?.nome))
    )
      return true;
    return false;
  }
  function modificadorStatusPokemon(pokemon, golpe) {
    const categoria = normalizar(golpe?.categoria || golpe?.classe);
    return normalizarStatus(pokemon?.status) === "burn" && categoria.includes("fisico") ? 0.5 : 1;
  }
  function velocidadeEfetivaPokemon(pokemon) {
    const base = Number(pokemon?.velocidade || 0);
    return normalizarStatus(pokemon?.status) === "paralysis" ? Math.floor(base * 0.5) : base;
  }

  function aplicarEfeitoStatusPokemon(atacante, alvo, golpe, opcoes = {}) {
    const efeito = obterEfeitoStatus(golpe),
      mensagens = [],
      chaveGolpe = normalizar(golpe?.nome);
    const acertou = opcoes.acertou !== false;
    const efetivo = acertou && Number(opcoes.efetividade ?? 1) > 0,
      efetivoProprio =
        acertou && Number(opcoes.efetividadePropria ?? opcoes.efetividade ?? 1) > 0;
    if (!efetivo && !efetivoProprio) return mensagens;

    const statusProprio = efeito.selfStatus;
    if (efetivoProprio && (efeito.curarAtacante || golpe?.curaStatus)) {
      if (atacante?.status) {
        atacante.status = null;
        atacante.statusTurns = 0;
        mensagens.push(atacante.nome + " teve suas condições curadas");
      }
    }
    if (efetivoProprio && efeito.curarEquipe && Array.isArray(opcoes.equipe)) {
      opcoes.equipe.forEach((p) => {
        if (p?.status) {
          p.status = null;
          p.statusTurns = 0;
        }
      });
      mensagens.push("as condições da equipe foram curadas");
    }
    if (efetivo && efeito.curarAlvo && alvo?.status === efeito.curarAlvo) {
      alvo.status = null;
      alvo.statusTurns = 0;
      mensagens.push(alvo.nome + " foi curado");
    }
    if (efetivoProprio && statusProprio && atacante && !atacante.status) {
      atacante.status = statusProprio;
      atacante.statusTurns = Number(efeito.selfTurns || 2);
      mensagens.push(atacante.nome + " ficou " + STATUS_POKEMON[statusProprio]?.nome.toLowerCase());
    }
    let status = normalizarStatus(efeito.status);
    if (
      efetivo &&
      status &&
      alvo &&
      alvo.hp > 0 &&
      !alvo.status &&
      Math.random() < Number(efeito.chance ?? 1)
    ) {
      if (!statusImune(alvo, status, golpe)) {
        alvo.status = status;
        alvo.statusTurns = Number(
          efeito.turnos ?? (status === "sleep" ? 2 : status === "confusion" ? 3 : 0),
        );
        mensagens.push(
          alvo.nome + " ficou " + (STATUS_POKEMON[status]?.nome || status).toLowerCase(),
        );
      } else
        mensagens.push(
          alvo.nome + " é imune a " + (STATUS_POKEMON[status]?.nome || status).toLowerCase(),
        );
    }
    return mensagens;
  }

  // Executa dano residual e testa se a condição impede a ação deste turno.
  function processarStatusPokemon(pokemon) {
    if (!pokemon || pokemon.hp <= 0) return { podeAgir: false, dano: 0, mensagem: "" };
    const status = normalizarStatus(pokemon.status),
      hpAntes = pokemon.hp;
    let podeAgir = true,
      mensagem = "";
    if (status === "burn" || status === "poison") {
      const dano = Math.max(1, Math.floor(pokemon.hpMax * (status === "burn" ? 1 / 16 : 1 / 8)));
      pokemon.hp = Math.max(0, pokemon.hp - dano);
      if (pokemon.hp <= 0)
        return {
          podeAgir: false,
          dano: hpAntes - pokemon.hp,
          mensagem: pokemon.nome + " foi derrotado pelo dano de status.",
        };
    } else if (status === "sleep") {
      pokemon.statusTurns = Math.max(0, Number(pokemon.statusTurns || 2) - 1);
      podeAgir = false;
      mensagem = pokemon.nome + " está dormindo e perdeu a vez.";
      if (pokemon.statusTurns <= 0) {
        pokemon.status = null;
        pokemon.statusTurns = 0;
        mensagem += " " + pokemon.nome + " acordou.";
      }
    } else if (status === "freeze") {
      if (Math.random() < 0.2) {
        pokemon.status = null;
        pokemon.statusTurns = 0;
        mensagem = pokemon.nome + " descongelou.";
      } else {
        podeAgir = false;
        mensagem = pokemon.nome + " está congelado e perdeu a vez.";
      }
    } else if (status === "paralysis" && Math.random() < 0.25) {
      podeAgir = false;
      mensagem = pokemon.nome + " está paralisado e perdeu a vez.";
    } else if (status === "confusion") {
      pokemon.statusTurns = Math.max(0, Number(pokemon.statusTurns || 1) - 1);
      if (Math.random() < 1 / 3) {
        const dano = Math.max(1, Math.floor(pokemon.hpMax / 8));
        pokemon.hp = Math.max(0, pokemon.hp - dano);
        podeAgir = false;
        mensagem = pokemon.nome + " se feriu por causa da confusão e perdeu a vez.";
      }
      if (pokemon.statusTurns === 0) {
        pokemon.status = null;
        if (!mensagem) mensagem = pokemon.nome + " saiu da confusão.";
      }
    }
    if (podeAgir && pokemon.infatuado && Math.random() < 0.5) {
      podeAgir = false;
      mensagem = [mensagem, pokemon.nome + " está apaixonado e perdeu a vez."].filter(Boolean).join(" ");
    }
    return { podeAgir, dano: hpAntes - pokemon.hp, mensagem };
  }

  window.BANCO_EFEITOS_STATUS_POKEMON = Object.freeze({
    status: STATUS_POKEMON,
    golpes: EFEITOS_STATUS_POR_GOLPE,
  });
  window.obterEfeitoStatusPokemon = obterEfeitoStatus;
  window.aplicarEfeitoStatusPokemon = aplicarEfeitoStatusPokemon;
  window.processarStatusPokemon = processarStatusPokemon;
  window.normalizarStatusPokemon = normalizarStatus;
  window.nomeStatusPokemon = nomeStatusPokemon;
  window.dadosStatusPokemon = (status) => STATUS_POKEMON[normalizarStatus(status)] || null;
  window.modificadorStatusPokemon = modificadorStatusPokemon;
  window.velocidadeEfetivaPokemon = velocidadeEfetivaPokemon;
})();
