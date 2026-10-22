/* ============================================================
   SISTEMA EXTRA DE HABILIDADES POKÉMON
   Este arquivo compartilha o banco de habilidades entre os modos 1v1, 1vB e 2vB.
   O código principal permanece sem alterações.
   ============================================================ */
(() => {
  "use strict";

  /* 1) Catálogo: habilidade atribuída a cada espécie deste jogo. */
  const habilidadesPorPokemon = {
    Pikachu: "Static",
    Clefairy: "Magic Guard",
    Charizard: "Blaze",
    Blastoise: "Torrent",
    Venusaur: "Overgrow",
    Garchomp: "Rough Skin",
    Gengar: "Levitate",
    Dragonite: "Multiscale",
    Greninja: "Protean",
    Metagross: "Clear Body",
    Eevee: "Adaptability",
    Snorlax: "Thick Fat",
    Gardevoir: "Synchronize",
    Mewtwo: "Pressure",
    Sceptile: "Overgrow",
    Blaziken: "Speed Boost",
    Infernape: "Blaze",
    Mimikyu: "Disguise",
    Mawile: "Intimidate",
    Tinkaton: "Mold Breaker",
    Scizor: "Technician",
    Scyther: "Technician",
    Ninjask: "Speed Boost",
    Incineroar: "Intimidate",
    Primarina: "Torrent",
    Mew: "Synchronize",
    Obstagoon: "Guts",
    Kangaskhan: "Scrappy",
    Kingambit: "Supreme Overlord",
    Komala: "Comatose",
    "Kommo-o": "Bulletproof",
    Xerneas: "Fairy Aura",
    Yveltal: "Dark Aura",
    Goodra: "Sap Sipper",
    "Goodra Hisui": "Sap Sipper",
    Ceruledge: "Flash Fire",
    Moltres: "Flame Body",
    Jigglypuff: "Cute Charm",
    Wigglytuff: "Cute Charm",
    Clefable: "Magic Guard",
    Golisopode: "Emergency Exit",
    Persian: "Technician",
    Raichu: "Static",
    Zapdos: "Static",
    Articuno: "Pressure",
    "Rayquaza Mega": "Delta Stream",
    "Groudon Primal": "Desolate Land",
    "Kyogre Primal": "Primordial Sea",
    Meowth: "Pickup",
    Swampert: "Torrent",
    Cloyster: "Skill Link",
    Koraidon: "Orichalcum Pulse",
    Miraidon: "Hadron Engine",
    "Zoroark Hisui": "Illusion",
    Marowak: "Rock Head",
    "Pidgeot Mega": "No Guard",
    Decidueye: "Overgrow",
    Lucario: "Inner Focus",
    Tyranitar: "Sand Stream",
    Zoroark: "Illusion",
    Vaporeon: "Water Absorb",
    Jolteon: "Volt Absorb",
    Flareon: "Flash Fire",
    Espeon: "Synchronize",
    Umbreon: "Synchronize",
    Leafeon: "Leaf Guard",
    Glaceon: "Ice Body",
    Sylveon: "Cute Charm",
    Shedinja: "Wonder Guard",
    Pidgeot: "Keen Eye",
    Rayquaza: "Air Lock",
    Groudon: "Drought",
    Kyogre: "Drizzle",
    "Mawile Mega": "Huge Power",
    "Scizor Mega": "Technician",
    "Charizard Mega X": "Tough Claws",
    "Charizard Mega Y": "Drought",
    "Blastoise Mega": "Mega Launcher",
    "Venusaur Mega": "Thick Fat",
    "Gengar Mega": "Shadow Tag",
    "Kangaskhan Mega": "Parental Bond",
    "Gardevoir Mega": "Pixilate",
    "Tyranitar Mega": "Sand Stream",
    "Blaziken Mega": "Speed Boost",
    "Swampert Mega": "Swift Swim",
    "Sceptile Mega": "Lightning Rod",
    "Lucario Mega": "Adaptability",
    "Garchomp Mega": "Sand Force",
    "Metagross Mega": "Tough Claws",
    "Mewtwo Mega X": "Steadfast",
    "Mewtwo Mega Y": "Insomnia",
    "Urshifu Rapid Strike Style": "Unseen Fist",
    "Urshifu Single Strike Style": "Unseen Fist",
    "Ultra Necrozma": "Neuroforce",
    "Rayquaza Mega": "Delta Stream",
    "Groudon Primal": "Desolate Land",
    "Kyogre Primal": "Primordial Sea",
    Shiftry: "Wind Rider",
    Baxcalibur: "Thermal Exchange",
  };

  window.HABILIDADES_POR_POKEMON = Object.freeze({ ...habilidadesPorPokemon });
  const descricoes = {
    Static: "pode paralisar quem o atingir com contato",
    "Magic Guard": "ignora dano indireto de queimadura e veneno",
    Blaze: "fortalece golpes de Fogo quando o HP está baixo",
    Torrent: "fortalece golpes de Água quando o HP está baixo",
    Overgrow: "fortalece golpes de Grama quando o HP está baixo",
    Intimidate: "reduz o ataque do adversário ao entrar em campo",
    Levitate: "fica imune a golpes de Terra",
    "Cursed Body": "pode bloquear por alguns turnos o golpe que a atingiu",
    "Flash Fire": "absorve golpes de Fogo e fortalece seus golpes de Fogo",
    "Water Absorb": "absorve golpes de Água e recupera HP",
    "Volt Absorb": "absorve golpes Elétricos e recupera HP",
    "Lightning Rod": "absorve golpes Elétricos e aumenta o ataque especial",
    "Storm Drain": "absorve golpes de Água e aumenta o ataque especial",
    "Sap Sipper": "absorve golpes de Grama e aumenta o ataque",
    "Motor Drive": "absorve golpes Elétricos e aumenta a velocidade",
    "Thick Fat": "reduz o dano de golpes de Fogo e Gelo",
    Multiscale: "reduz o dano recebido enquanto está com HP cheio",
    Technician: "fortalece golpes de baixo poder",
    "Huge Power": "dobra o poder dos golpes físicos",
    Guts: "fortalece golpes quando está com uma condição de status",
    Adaptability: "fortalece golpes do mesmo tipo do Pokémon",
    "Speed Boost": "aumenta a velocidade ao fim de cada ação",
    Regenerator: "recupera HP ao sair de campo",
    "Natural Cure": "cura sua condição de status ao sair de campo",
    Pressure: "consome BP extra dos golpes que o atingem",
    Synchronize: "pode devolver queimadura, veneno ou paralisia",
    "Clear Body": "impede reduções de atributos causadas pelo adversário",
    Contrary: "inverte aumentos e reduções de atributos",
    Simple: "dobra as mudanças de atributos",
    Moxie: "aumenta o ataque ao derrotar um adversário",
    "Flame Body": "pode queimar quem a atingir com contato",
    Scrappy: "permite atingir Pokémon Fantasma com golpes Normal e Lutador",
    "Supreme Overlord": "fortalece golpes para cada aliado derrotado",
    Comatose: "não pode dormir",
    Bulletproof: "bloqueia alguns golpes de projétil",
    "Fairy Aura": "fortalece golpes do tipo Fada",
    "Dark Aura": "fortalece golpes do tipo Sombrio",
    Protean: "muda para o tipo do golpe usado",
    "Water Bubble": "fortalece golpes de Água e reduz dano de Fogo",
    Steelworker: "fortalece golpes do tipo Metal",
    "White Smoke": "impede reduções de atributos causadas pelo adversário",
    "Full Metal Body": "impede reduções de atributos causadas pelo adversário",
    Teravolt: "ignora algumas habilidades defensivas do alvo",
    Turboblaze: "ignora algumas habilidades defensivas do alvo",
    "Dry Skin": "absorve golpes de Água e recupera HP",
    Filter: "reduz golpes super efetivos recebidos",
    "Solid Rock": "reduz golpes super efetivos recebidos",
    "Prism Armor": "reduz golpes super efetivos recebidos",
    "Wonder Guard": "só recebe dano de golpes super efetivos",
    "Long Reach": "usa golpes de contato sem tocar o alvo",
    "Poison Point": "pode envenenar quem a atingir com contato",
    "Pure Power": "dobra o poder dos golpes físicos",
    "Cute Charm": "pode apaixonar quem a atingir com contato se os sexos forem diferentes",
    "Emergency Exit": "pode sair da batalha quando seu HP fica baixo",
    "Delta Stream": "cria ventos fortes que reduzem fraquezas do tipo Voador",
    "Desolate Land": "cria sol intenso e impede golpes de Água",
    "Primordial Sea": "cria chuva intensa e impede golpes de Fogo",
    Pickup: "pode encontrar um item após a batalha",
    "Skill Link": "faz golpes de múltiplos acertos atingirem o máximo de vezes",
    "Orichalcum Pulse": "cria sol intenso e fortalece o Ataque",
    "Hadron Engine": "cria campo elétrico e fortalece ataques especiais",
    Illusion: "entra em campo disfarçado do último Pokémon da equipe",
    "Rock Head": "evita dano de recuo causado pelos próprios golpes",
    "No Guard": "faz os golpes do usuário e contra ele não errarem",
    "Inner Focus": "impede hesitação e intimidação",
    "Mold Breaker": "ignora algumas habilidades defensivas do alvo",
    "Rough Skin": "fere quem atingir o Pokémon com contato",
    "Sand Stream": "cria uma tempestade de areia ao entrar em campo",
    Disguise: "evita o primeiro golpe recebido e depois perde o disfarce",
    "Leaf Guard": "protege contra condições de status sob sol intenso",
    "Ice Body": "recupera HP durante granizo ou neve",
    "Keen Eye": "impede que a precisão do Pokémon seja reduzida",
    "Air Lock": "anula os efeitos do clima durante a batalha",
    Drought: "cria sol intenso ao entrar em campo",
    Drizzle: "cria chuva ao entrar em campo",
    "Tough Claws": "fortalece golpes que fazem contato",
    "Mega Launcher": "fortalece golpes de aura e pulso",
    "Shadow Tag": "impede que adversários escapem ou troquem",
    "Parental Bond": "faz o Pokémon atingir o alvo duas vezes",
    Pixilate: "transforma golpes Normal em Fada e os fortalece",
    "Swift Swim": "aumenta a velocidade durante chuva",
    "Sand Force": "fortalece golpes de Pedra, Terra e Metal em tempestade de areia",
    Steadfast: "aumenta a velocidade quando o Pokémon hesita",
    Insomnia: "impede que o Pokémon adormeça",
    "Unseen Fist": "permite que golpes de contato atravessem proteção",
    Neuroforce: "fortalece golpes super efetivos",
    "Wind Rider": "aumenta o Ataque quando há vento e anula golpes de vento",
    "Thermal Exchange": "impede queimadura e aumenta o Ataque ao ser atingido por golpe de Fogo",
  };

  /* Banco público compartilhado: para registrar uma habilidade no catálogo,
       adicione sua descrição a este objeto e informe o nome em pokemon.habilit. */
  const bancoHabilidades = Object.freeze(
    Object.fromEntries(
      Object.entries(descricoes).map(([nome, efeito]) => [nome, Object.freeze({ nome, efeito })]),
    ),
  );
  window.BANCO_HABILIDADES_POKEMON = bancoHabilidades;
  window.obterHabilidadePokemon = function (pokemon) {
    if (!pokemon) return null;
    const nome = String(pokemon.habilit || pokemon.habilidade || "").trim();
    if (!nome) return null;
    const registro = bancoHabilidades[nome] || {
      nome,
      efeito: "Habilidade registrada; efeito ainda não implementado neste simulador.",
    };
    pokemon.habilit = registro.nome;
    pokemon.habilidade = registro.nome; // compatibilidade com as regras já implementadas
    return registro;
  };
  window.atualizarIndicadoresPokemon = function (pokemon, prefixo) {
    if (!pokemon) return;
    const campoHabilidade = document.getElementById(prefixo + "-habilidade");
    const nomeHabilidade = String(pokemon.habilit || pokemon.habilidade || "Sem habilidade").trim();
    if (campoHabilidade) {
      campoHabilidade.textContent = "Habilidade: " + nomeHabilidade;
      const registro = window.obterHabilidadePokemon(pokemon);
      if (registro) campoHabilidade.title = registro.efeito;
    }
    const areaStatus = document.getElementById(prefixo + "-status-visual");
    if (!areaStatus) return;
    const dados = window.dadosStatusPokemon?.(pokemon.status);
    if (!dados) {
      areaStatus.replaceChildren();
      if (pokemon.infatuado) {
        const texto = document.createElement("span");
        texto.textContent = "Apaixonado";
        areaStatus.replaceChildren(texto);
        areaStatus.hidden = false;
        return;
      }
      areaStatus.hidden = true;
      return;
    }
    const { nome: rotulo, cor, simbolo } = dados;
    const imagem = document.createElement("img");
    imagem.className = "icone-status-pokemon";
    imagem.alt = "";
    imagem.setAttribute("aria-hidden", "true");
    imagem.src =
      "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="${cor}"/><text x="20" y="26" text-anchor="middle" font-family="Arial,sans-serif" font-size="${simbolo.length > 1 ? 13 : 21}" font-weight="bold" fill="white">${simbolo}</text></svg>`,
      );
    const texto = document.createElement("span");
    texto.textContent =
      rotulo + (pokemon.statusTurns > 0 ? ` · ${pokemon.statusTurns} turno(s)` : "");
    if (pokemon.infatuado) texto.textContent += " · Apaixonado";
    areaStatus.replaceChildren(imagem, texto);
    areaStatus.hidden = false;
  };

  function registrarNoClone(pokemon) {
    if (!pokemon) return pokemon;
    const valor = String(
      pokemon.habilit ||
        pokemon.habilidade ||
        habilidadesPorPokemon[pokemon.nome] ||
        "Sem habilidade",
    ).trim();
    pokemon.habilit = valor;
    pokemon.habilidade = valor;
    if (pokemon.sexo === undefined && pokemon.genero === undefined) {
      // O catálogo não informa sexo; espécies sem gênero ficam sem sexo e as demais usam 50/50.
      const semSexo = new Set([
        "Articuno",
        "Mew",
        "Mewtwo",
        "Mewtwo Mega X",
        "Mewtwo Mega Y",
        "Moltres",
        "Rayquaza",
        "Rayquaza Mega",
        "Groudon",
        "Groudon Primal",
        "Kyogre",
        "Kyogre Primal",
        "Zapdos",
        "Xerneas",
        "Yveltal",
        "Ultra Necrozma",
        "Koraidon",
        "Miraidon",
      ]);
      pokemon.sexo = semSexo.has(pokemon.nome) ? null : Math.random() < 0.5 ? "M" : "F";
    }
    if (!pokemon.tiposOriginais) pokemon.tiposOriginais = [...(pokemon.tipos || [])];
    if (valor === "Disguise" && pokemon.disguiseIntact === undefined) pokemon.disguiseIntact = true;
    if (valor) {
      if (pokemon.flashFireBoost === undefined) pokemon.flashFireBoost = false;
    }
    return pokemon;
  }
  window.prepararHabilidadePokemon = registrarNoClone;

  // Regras compartilhadas pelos três modos de batalha.
  const normalizarTipoHabilidade = (tipo) =>
    ({
      fogo: "fire",
      agua: "water",
      água: "water",
      eletrico: "electric",
      elétrico: "electric",
      grama: "grass",
      planta: "grass",
      terra: "ground",
      gelo: "ice",
      lutador: "fighting",
      venenoso: "poison",
      voador: "flying",
      psiquico: "psychic",
      psíquico: "psychic",
      inseto: "bug",
      pedra: "rock",
      fantasma: "ghost",
      dragao: "dragon",
      dragão: "dragon",
      sombrio: "dark",
      metal: "steel",
      aco: "steel",
      aço: "steel",
      fada: "fairy",
    })[String(tipo || "normal").toLowerCase()] || String(tipo || "normal").toLowerCase();
  const porTipo = (g) => normalizarTipoHabilidade(g?.tipo || g?.tipos || "Normal");
  const habil = (p) => registrarNoClone(p).habilidade;
  const sexoPokemon = (pokemon) => {
    const sexo = String(pokemon?.sexo || pokemon?.genero || "").toLowerCase();
    if (["m", "masculino", "male"].includes(sexo)) return "M";
    if (["f", "feminino", "female"].includes(sexo)) return "F";
    return null;
  };
  const normalizarNomeContatoPokemon = (golpe) =>
    String(golpe?.nome || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z]/g, "");
  const golpesDeContatoPokemon = new Set(
    [
      "Acrobatics",
      "Aerial Ace",
      "Aqua Jet",
      "Aqua Tail",
      "Bite",
      "Bitter Blade",
      "Body Press",
      "Body Slam",
      "Brave Bird",
      "Brick Break",
      "Bullet Punch",
      "Close Combat",
      "Collision Course",
      "Crunch",
      "Double Kick",
      "Double-Edge",
      "Dragon Claw",
      "Dragon Rush",
      "Drain Punch",
      "Drill Run",
      "Extreme Speed",
      "Facade",
      "Fake Out",
      "Fire Fang",
      "Fire Punch",
      "First Impression",
      "Flare Blitz",
      "Flip Turn",
      "Foul Play",
      "Glaive Rush",
      "Hammer Arm",
      "Heat Crash",
      "High Horsepower",
      "Horn Leech",
      "Ice Punch",
      "Ice Spinner",
      "Iron Head",
      "Iron Tail",
      "Knock Off",
      "Kowtow Cleave",
      "Leaf Blade",
      "Liquidation",
      "Lunge",
      "Mach Punch",
      "Megahorn",
      "Metal Claw",
      "Meteor Mash",
      "Night Slash",
      "Outrage",
      "Play Rough",
      "Poison Jab",
      "Power-Up Punch",
      "Quick Attack",
      "Rapid Spin",
      "Razor Shell",
      "Return",
      "Sacred Sword",
      "Shadow Claw",
      "Shadow Sneak",
      "Slash",
      "Sucker Punch",
      "Surging Strikes",
      "Tackle",
      "Thunder Punch",
      "U-turn",
      "Waterfall",
      "Wicked Blow",
      "Wild Charge",
      "X-Scissor",
      "Zen Headbutt",
    ].map((nome) => normalizarNomeContatoPokemon({ nome })),
  );  const recuosPorGolpePokemon = Object.freeze({
    doubleedge: 1 / 3,
    flareblitz: 1 / 3,
    bravebird: 1 / 3,
    woodhammer: 1 / 3,
    volttackle: 1 / 3,
  });
  window.ehGolpeDeContatoPokemon = function (golpe) {
    return (
      golpe?.contato === true ||
      String(golpe?.categoria || golpe?.classe || "")
        .toLowerCase()
        .includes("contato") ||
      golpesDeContatoPokemon.has(normalizarNomeContatoPokemon(golpe))
    );
  };
  window.aplicarRecuoGolpePokemon = function (pokemon, golpe, danoReal = 0, fracaoExplicita) {
    if (!pokemon || !golpe || Number(danoReal) <= 0) return [];
    const fracao = Number(
        fracaoExplicita ?? golpe.recoil ?? recuosPorGolpePokemon[normalizarNomeContatoPokemon(golpe)],
      ),
      habilidade = window.obterHabilidadePokemon(pokemon)?.nome;
    if (!Number.isFinite(fracao) || fracao <= 0 || habilidade === "Rock Head") return [];
    const perda = Math.max(1, Math.floor(Number(danoReal) * fracao));
    pokemon.hp = Math.max(0, pokemon.hp - perda);
    return [pokemon.nome + " sofreu " + perda + " de dano de recuo"];
  };
  const ignoramDefesa = (a) => ["Mold Breaker", "Teravolt", "Turboblaze"].includes(habil(a));
  if (typeof window.processarStatusPokemon === "function") {
    const processarStatusOriginal = window.processarStatusPokemon;
    window.processarStatusPokemon = function (pokemon) {
      if (!pokemon || pokemon.hp <= 0) return processarStatusOriginal(pokemon);
      const habilidade = habil(pokemon),
        status = window.normalizarStatusPokemon?.(pokemon.status) || pokemon.status;
      if (habilidade === "Magic Guard" && ["burn", "poison"].includes(status))
        return { podeAgir: true, dano: 0, mensagem: "Magic Guard anulou o dano residual." };
      if (habilidade === "Poison Heal" && status === "poison") {
        const antes = pokemon.hp;
        pokemon.hp = Math.min(
          pokemon.hpMax,
          pokemon.hp + Math.max(1, Math.floor(pokemon.hpMax / 8)),
        );
        return {
          podeAgir: true,
          dano: 0,
          mensagem:
            pokemon.hp > antes
              ? "Poison Heal recuperou " + (pokemon.hp - antes) + " HP."
              : "Poison Heal impediu o dano do veneno.",
        };
      }
      return processarStatusOriginal(pokemon);
    };
  }
  const projeteis = [
    "Aura Sphere",
    "Bullet Seed",
    "Egg Bomb",
    "Energy Ball",
    "Focus Blast",
    "Gyro Ball",
    "Ice Ball",
    "Magnetic Bomb",
    "Misty Explosion",
    "Mud Bomb",
    "Octazooka",
    "Rock Blast",
    "Rock Wrecker",
    "Seed Bomb",
    "Shadow Ball",
    "Sludge Bomb",
    "Weather Ball",
    "Zap Cannon",
  ];
  window.modificadorHabilidadePokemon = function (a, d, g, ef = 1) {
    if (!a || !d || !g) return 1;
    const h = habil(a),
      hd = habil(d),
      tipo = porTipo(g),
      fisico = !g.categoria || String(g.categoria).toLowerCase().includes("fisico"),
      poder = Number(g.poder || g.dano || 0);
    let m = 1;
    if (fisico && ["Huge Power", "Pure Power"].includes(h)) m *= 2;
    if (fisico && h === "Guts" && a.status) m *= 1.5;
    if (h === "Technician" && poder > 0 && poder <= 60) m *= 1.5;
    if (h === "Adaptability" && (a.tipos || []).some((t) => normalizarTipoHabilidade(t) === tipo))
      m *= 1.5;
    if (h === "Flash Fire" && a.flashFireBoost && tipo === "fire") m *= 1.5;
    if (h === "Water Bubble" && tipo === "water") m *= 2;
    if (h === "Steelworker" && tipo === "steel") m *= 1.5;
    if (
      (h === "Blaze" && tipo === "fire") ||
      (h === "Torrent" && tipo === "water") ||
      (h === "Overgrow" && tipo === "grass") ||
      (h === "Swarm" && tipo === "bug")
    )
      if (a.hp <= a.hpMax / 3) m *= 1.5;
    if ((h === "Fairy Aura" && tipo === "fairy") || (h === "Dark Aura" && tipo === "dark"))
      m *= 1.33;
    if (!ignoramDefesa(a)) {
      if (["Thick Fat"].includes(hd) && ["fire", "ice"].includes(tipo)) m *= 0.5;
      if (hd === "Water Bubble" && tipo === "fire") m *= 0.5;
      if (hd === "Multiscale" && d.hp >= d.hpMax) m *= 0.5;
      if (["Filter", "Solid Rock", "Prism Armor"].includes(hd) && ef > 1) m *= 0.75;
    }
    return m;
  };
  // Normaliza mudanças de estágio para que Simple, Contrary e habilidades
  // que bloqueiam reduções funcionem também fora do adaptador do modo 1vB.
  window.ajustarEstagiosHabilidadePokemon = function (
    pokemon,
    mudancas,
    { causadoPorAdversario = false } = {},
  ) {
    if (!pokemon || !mudancas) return {};
    const habilidade = habil(pokemon),
      bloqueiaReducao = ["Clear Body", "White Smoke", "Full Metal Body"].includes(habilidade),
      ajustadas = {};
    for (const [atributo, valorOriginal] of Object.entries(mudancas)) {
      let valor = Number(valorOriginal) || 0;
      if (habilidade === "Contrary") valor *= -1;
      if (habilidade === "Simple") valor *= 2;
      if (causadoPorAdversario && bloqueiaReducao && valor < 0) valor = 0;
      ajustadas[atributo] = valor;
    }
    return ajustadas;
  };
  window.bloqueioHabilidadePokemon = function (a, d, g, ef = 1) {
    if (!a || !d || !g || ignoramDefesa(a)) return null;
    const h = habil(d),
      tipo = porTipo(g),
      nome = String(g.nome || "");
    const absorcoes = {
      "Water Absorb": "water",
      "Dry Skin": "water",
      "Storm Drain": "water",
      "Volt Absorb": "electric",
      "Lightning Rod": "electric",
      "Motor Drive": "electric",
      "Sap Sipper": "grass",
      "Flash Fire": "fire",
    };
    if (h === "Levitate" && tipo === "ground")
      return { tipo: "levitate", mensagem: d.nome + " flutuou com Levitate e evitou o golpe." };
    if (absorcoes[h] === tipo)
      return { tipo: "absorcao", mensagem: d.nome + " absorveu o golpe com " + h + "." };
    if (h === "Wonder Guard" && ef <= 1)
      return { tipo: "wonder", mensagem: "Wonder Guard protegeu " + d.nome + "." };
    if (h === "Bulletproof" && projeteis.includes(nome))
      return { tipo: "bulletproof", mensagem: "Bulletproof bloqueou o golpe." };
    if (h === "Disguise" && d.disguiseIntact && Number(g.dano || g.poder || 0) > 0)
      return { tipo: "disguise", mensagem: "Disguise protegeu " + d.nome + "." };
    return null;
  };
  window.aplicarPosHabilidadePokemon = function (a, d, g, dano = 0, contexto = {}) {
    if (!a || !d || !g) return [];
    const msgs = [],
      h = habil(a),
      hd = habil(d),
      tipo = porTipo(g),
      contato = window.ehGolpeDeContatoPokemon(g);
    if (contexto.bloqueio?.tipo === "disguise") {
      d.disguiseIntact = false;
      msgs.push("o disfarce de " + d.nome + " foi desfeito");
    }
    if (contexto.bloqueio?.tipo === "absorcao") {
      const antes = d.hp;
      if (["Water Absorb", "Dry Skin", "Volt Absorb"].includes(hd))
        d.hp = Math.min(d.hpMax, d.hp + Math.max(1, Math.floor(d.hpMax / 4)));
      else if (hd === "Flash Fire") d.flashFireBoost = true;
      else if (hd === "Storm Drain" || hd === "Lightning Rod")
        aplicarMudancaDeEstagio(d, { spa: 1 }, msgs);
      else if (hd === "Motor Drive") aplicarMudancaDeEstagio(d, { spe: 1 }, msgs);
      else if (hd === "Sap Sipper") aplicarMudancaDeEstagio(d, { atk: 1 }, msgs);
      if (d.hp > antes) msgs.push(hd + " recuperou HP");
    }
    const contatoReal = dano > 0 && contato && !g.longoAlcance && h !== "Long Reach";
    if (contatoReal) {
      if (Math.random() < 0.3) {
        if (
          hd === "Static" &&
          !a.status &&
          !(a.tipos || []).some((t) => normalizarTipoHabilidade(t) === "electric")
        ) {
          a.status = "paralysis";
          a.statusTurns = 0;
          msgs.push("Static paralisou " + a.nome);
        }
        if (
          hd === "Flame Body" &&
          !a.status &&
          !(a.tipos || []).some((t) => normalizarTipoHabilidade(t) === "fire")
        ) {
          a.status = "burn";
          a.statusTurns = 0;
          msgs.push("Flame Body queimou " + a.nome);
        }
        if (
          hd === "Poison Point" &&
          !a.status &&
          !(a.tipos || []).some((t) => ["poison", "steel"].includes(normalizarTipoHabilidade(t)))
        ) {
          a.status = "poison";
          a.statusTurns = 0;
          msgs.push("Poison Point envenenou " + a.nome);
        }
      }
      const sexoAtacante = sexoPokemon(a),
        sexoDefensor = sexoPokemon(d);
      if (
        hd === "Cute Charm" &&
        !a.infatuado &&
        sexoAtacante &&
        sexoDefensor &&
        sexoAtacante !== sexoDefensor &&
        Math.random() < 0.3
      ) {
        a.infatuado = true;
        msgs.push("Cute Charm apaixonou " + a.nome);
      }
      if (hd === "Rough Skin") {
        a.hp = Math.max(0, a.hp - Math.max(1, Math.floor(a.hpMax / 8)));
        msgs.push("Rough Skin feriu " + a.nome);
      }
    }
    if (d.hp <= 0 && a.hp > 0 && h === "Moxie") {
      aplicarMudancaDeEstagio(a, { atk: 1 }, msgs);
      msgs.push("Moxie aumentou o Ataque de " + a.nome);
    }
    return msgs;
  };
  function aplicarMudancaDeEstagio(pokemon, mudancas, mensagens, causadoPorAdversario = false) {
    const ajustadas = window.ajustarEstagiosHabilidadePokemon(pokemon, mudancas, {
        causadoPorAdversario,
      }),
      nomes = {
        atk: "Ataque",
        def: "Defesa",
        spa: "Ataque especial",
        spd: "Defesa especial",
        spe: "Velocidade",
      };
    pokemon.estagios ||= { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    for (const [atributo, delta] of Object.entries(ajustadas)) {
      const antes = pokemon.estagios[atributo] || 0,
        depois = Math.max(-6, Math.min(6, antes + delta));
      pokemon.estagios[atributo] = depois;
      if (depois !== antes)
        mensagens.push(
          nomes[atributo] +
            (depois > antes
              ? " de " + pokemon.nome + " aumentou"
              : " de " + pokemon.nome + " diminuiu"),
        );
    }
  }
  const camposAnteriores = new Map();
  window.processarEntradasHabilidadePokemon = function (campos) {
    for (const campo of campos || []) {
      const { chave, pokemon, adversarios = [] } = campo || {},
        anterior = camposAnteriores.get(chave);
      if (anterior === pokemon) continue;
      if (anterior) {
        anterior.infatuado = false;
        const h = habil(anterior);
        if (h === "Regenerator" && anterior.hp > 0)
          anterior.hp = Math.min(anterior.hpMax, anterior.hp + Math.floor(anterior.hpMax / 3));
        if (h === "Natural Cure") anterior.status = null;
        if (h === "Protean") anterior.tipos = [...(anterior.tiposOriginais || [])];
      }
      camposAnteriores.set(chave, pokemon || null);
      if (!pokemon) continue;
      const h = habil(pokemon);
      if (h === "Intimidate")
        for (const alvo of adversarios)
          if (alvo) aplicarMudancaDeEstagio(alvo, { atk: -1 }, [], true);
      if (h === "Download" && adversarios.length) {
        const maisDef = adversarios.reduce((n, p) => n + Number(p.def || p.defesa || 0), 0),
          maisSpd = adversarios.reduce((n, p) => n + Number(p.spd || p.defesaEspecial || 0), 0);
        const chaveStat = maisDef < maisSpd ? "atk" : "spa";
        aplicarMudancaDeEstagio(pokemon, { [chaveStat]: 1 }, []);
      }
    }
  };
  if (typeof clone === "function") {
    const clonar = clone;
    clone = function (pokemon) {
      return registrarNoClone(clonar(pokemon));
    };
  }
  if (typeof clonarPokemon === "function") {
    const clonar = clonarPokemon;
    clonarPokemon = function (pokemon) {
      return registrarNoClone(clonar(pokemon));
    };
  }

  /* O restante deste arquivo contém os adaptadores de batalha do modo 1vB. */
  if (typeof prepararAcao !== "function" || typeof acaoBot !== "function") return;

  /* 2) Associação da habilidade e estado próprio de habilidades com uso único. */
  function prepararPokemon(pokemon) {
    if (!pokemon) return pokemon;
    const nomeInformado = String(pokemon.habilit || pokemon.habilidade || "").trim();
    pokemon.habilit = nomeInformado || habilidadesPorPokemon[pokemon.nome] || "Sem habilidade";
    pokemon.habilidade = pokemon.habilit;
    if (!pokemon.tiposOriginais) pokemon.tiposOriginais = [...(pokemon.tipos || [])];
    if (pokemon.habilidade === "Disguise" && pokemon.disguiseIntact === undefined) {
      pokemon.disguiseIntact = true;
    }
    if (pokemon.flashFireBoost === undefined) pokemon.flashFireBoost = false;
    return pokemon;
  }

  /* 3) Envolvimento de clone: cópias do time e do bot já recebem habilidade. */
  const cloneOriginal = clone;
  clone = function (pokemon) {
    return prepararPokemon(cloneOriginal(pokemon));
  };

  /* Os Pokémon já restaurados pelo arquivo principal também são preparados. */
  [1, 2].forEach((id) => (equipes[id] || []).forEach(prepararPokemon));

  /* 4) Regras de atributos: Simple, Contrary e Clear Body. */
  const aplicarEstagiosOriginal = aplicarEstagios;
  aplicarEstagios = function (pokemon, mudancas) {
    prepararPokemon(pokemon);
    if (!mudancas) return aplicarEstagiosOriginal(pokemon, mudancas);
    const habilidade = pokemon.habilidade;
    const mudancasAjustadas = {};
    for (const [atributo, valorOriginal] of Object.entries(mudancas)) {
      let valor = Number(valorOriginal) || 0;
      if (habilidade === "Contrary") valor *= -1;
      if (habilidade === "Simple") valor *= 2;
      const adversario =
        habilidade === "Clear Body" ||
        habilidade === "White Smoke" ||
        habilidade === "Full Metal Body";
      if (adversario && valor < 0) {
        const idPokemon = ativos[1] === pokemon ? 1 : ativos[2] === pokemon ? 2 : 0;
        const idAtacante = contextoAtaque?.atacante;
        if (idPokemon && idAtacante && idAtacante !== idPokemon) valor = 0;
      }
      mudancasAjustadas[atributo] = valor;
    }
    return aplicarEstagiosOriginal(pokemon, mudancasAjustadas);
  };

  /* 5) Efeitos de saída e entrada de campo. */
  const ativosAnteriores = { 1: null, 2: null };
  function aoSairDeCampo(pokemon) {
    prepararPokemon(pokemon);
    if (pokemon.habilidade === "Protean") pokemon.tipos = [...pokemon.tiposOriginais];
    if (pokemon.habilidade === "Natural Cure" && pokemon.status) {
      pokemon.status = null;
      pokemon.statusTurns = 0;
    }
    if (pokemon.habilidade === "Regenerator" && pokemon.hp > 0) {
      pokemon.hp = Math.min(pokemon.hpMax, pokemon.hp + Math.floor(pokemon.hpMax / 3));
    }
  }
  function aoEntrarEmCampo(id, pokemon) {
    prepararPokemon(pokemon);
    const adversario = ativos[id === 1 ? 2 : 1];
    if (!adversario) return;
    prepararPokemon(adversario);
    if (pokemon.habilidade === "Intimidate") {
      const bloqueia = ["Clear Body", "White Smoke", "Full Metal Body"].includes(
        adversario.habilidade,
      );
      if (!bloqueia) aplicarEstagios(adversario, { atk: -1 });
    }
    if (pokemon.habilidade === "Download") {
      const defesa = Number(adversario.estagios?.def || 0);
      const defesaEspecial = Number(adversario.estagios?.spd || 0);
      aplicarEstagios(pokemon, defesa < defesaEspecial ? { atk: 1 } : { spa: 1 });
    }
  }

  const atualizarOriginal = atualizar;
  atualizar = function () {
    atualizarOriginal();
    let houveTroca = false;
    for (const id of [1, 2]) {
      const atual = ativos[id];
      if (!atual) continue;
      prepararPokemon(atual);
      if (ativosAnteriores[id] !== atual) {
        if (ativosAnteriores[id]) aoSairDeCampo(ativosAnteriores[id]);
        ativosAnteriores[id] = atual;
        aoEntrarEmCampo(id, atual);
        houveTroca = true;
      }
    }
    if (houveTroca) atualizarOriginal();
  };

  /* 6) Modificadores defensivos e ofensivos aplicados no cálculo de dano. */
  let contextoAtaque = null;
  let absorcaoPendente = null;
  const multOriginal = mult;
  mult = function (tipo, tiposDefensor) {
    let multiplicador = multOriginal(tipo, tiposDefensor);
    const contexto = contextoAtaque;
    if (!contexto) return multiplicador;
    const atacante = prepararPokemon(ativos[contexto.atacante]);
    const defensor = prepararPokemon(ativos[contexto.defensor]);
    if (!atacante || !defensor) return multiplicador;
    const habilidadeAtacante = atacante.habilidade;
    const habilidadeDefensor = defensor.habilidade;
    /* Normaliza o tipo porque os dados da batalha usam nomes com maiúsculas. */
    const tipoGolpe = String(tipo || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
    const ignoraHabilidades = ["Mold Breaker", "Teravolt", "Turboblaze"].includes(
      habilidadeAtacante,
    );

    /* Imunidades e absorções defensivas. */
    if (!ignoraHabilidades) {
      if (
        habilidadeDefensor === "Levitate" &&
        tipoGolpe === "terra" &&
        Number(contexto.golpe?.dano || 0) > 0
      ) {
        contexto.mensagens.push("Levitate anulou o golpe de Terra");
        return 0;
      }
      if (
        habilidadeDefensor === "Flash Fire" &&
        tipoGolpe === "fogo" &&
        Number(contexto.golpe?.dano || 0) > 0
      ) {
        defensor.flashFireBoost = true;
        contexto.mensagens.push("Flash Fire absorveu o golpe e aumentou o poder de Fogo");
        return 0;
      }
      const absorcoes = {
        "Water Absorb": { tipo: "agua", cura: true },
        "Volt Absorb": { tipo: "eletrico", cura: true },
        "Dry Skin": { tipo: "agua", cura: true },
        "Lightning Rod": { tipo: "eletrico", atributo: { spa: 1 } },
        "Storm Drain": { tipo: "agua", atributo: { spa: 1 } },
        "Sap Sipper": { tipo: "grama", atributo: { atk: 1 } },
        "Motor Drive": { tipo: "eletrico", atributo: { spe: 1 } },
      };
      const absorcao = absorcoes[habilidadeDefensor];
      if (absorcao && tipoGolpe === absorcao.tipo && Number(contexto.golpe?.dano || 0) > 0) {
        absorcaoPendente = { pokemon: defensor, habilidade: habilidadeDefensor, dados: absorcao };
        contexto.mensagens.push(habilidadeDefensor + " absorveu o golpe");
        return 0;
      }
      if (
        habilidadeAtacante === "Scrappy" &&
        ["normal", "lutador"].includes(tipoGolpe) &&
        (defensor.tipos || []).includes("Fantasma")
      )
        multiplicador = multOriginal(
          tipo,
          (defensor.tipos || []).filter((t) => t !== "Fantasma"),
        );
      if (
        habilidadeDefensor === "Bulletproof" &&
        new Set([
          "shadowball",
          "sludgebomb",
          "focusblast",
          "energyball",
          "weatherball",
          "aurasphere",
          "gyroball",
          "electroball",
        ]).has(normalizarGolpe(contexto.golpe?.nome))
      )
        return 0;
      if (habilidadeDefensor === "Thick Fat" && ["fogo", "gelo"].includes(tipoGolpe))
        multiplicador *= 0.5;
      if (habilidadeDefensor === "Water Bubble" && tipoGolpe === "fogo") multiplicador *= 0.5;
      if (habilidadeDefensor === "Multiscale" && defensor.hp >= defensor.hpMax)
        multiplicador *= 0.5;
      if (["Filter", "Solid Rock", "Prism Armor"].includes(habilidadeDefensor) && multiplicador > 1)
        multiplicador *= 0.75;
      if (habilidadeDefensor === "Wonder Guard" && multiplicador <= 1) return 0;
      if (
        habilidadeDefensor === "Disguise" &&
        defensor.disguiseIntact &&
        Number(contexto.golpe?.dano || 0) > 0
      ) {
        contexto.disguiseQuebrado = defensor;
        return 0;
      }
    }

    /* Aumentos ofensivos. */
    const poderBase = Number(contexto.golpe?.dano || 0);
    const temMesmoTipo = (atacante.tipos || []).some((t) => String(t).toLowerCase() === tipoGolpe);
    if (["Huge Power", "Pure Power"].includes(habilidadeAtacante)) multiplicador *= 2;
    if (habilidadeAtacante === "Guts" && atacante.status) multiplicador *= 1.5;
    if (habilidadeAtacante === "Technician" && poderBase > 0 && poderBase <= 60)
      multiplicador *= 1.5;
    if (habilidadeAtacante === "Adaptability" && temMesmoTipo) multiplicador *= 2;
    if (habilidadeAtacante === "Flash Fire" && atacante.flashFireBoost && tipoGolpe === "fogo")
      multiplicador *= 1.5;
    if (habilidadeAtacante === "Water Bubble" && tipoGolpe === "agua") multiplicador *= 2;
    if (habilidadeAtacante === "Steelworker" && tipoGolpe === "metal") multiplicador *= 1.5;
    if (habilidadeAtacante === "Supreme Overlord") {
      const derrotados = equipes[atacante === ativos[1] ? 1 : 2].filter(
        (p) => p !== atacante && p.hp <= 0,
      ).length;
      multiplicador *= 1 + Math.min(5, derrotados) * 0.1;
    }
    if (habilidadeAtacante === "Fairy Aura" && tipoGolpe === "fada") multiplicador *= 1.33;
    if (habilidadeAtacante === "Dark Aura" && tipoGolpe === "sombrio") multiplicador *= 1.33;
    const limiar = atacante.hpMax / 3;
    if (
      atacante.hp <= limiar &&
      ((habilidadeAtacante === "Blaze" && tipoGolpe === "fogo") ||
        (habilidadeAtacante === "Torrent" && tipoGolpe === "agua") ||
        (habilidadeAtacante === "Overgrow" && tipoGolpe === "grama") ||
        (habilidadeAtacante === "Swarm" && tipoGolpe === "inseto"))
    )
      multiplicador *= 1.5;
    return multiplicador;
  };

  /* 7) Efeitos de fim de ação, cura de entrada e interações de status. */
  const atacarOriginal = atacar;
  atacar = function (golpe, atacanteId) {
    const defensorId = atacanteId === 1 ? 2 : 1;
    const atacante = prepararPokemon(ativos[atacanteId]);
    const defensor = prepararPokemon(ativos[defensorId]);
    const statusAnterior = defensor?.status;
    const hpDefensorAntes = defensor?.hp;
    absorcaoPendente = null;
    contextoAtaque = {
      atacante: atacanteId,
      defensor: defensorId,
      golpe,
      mensagens: [],
      disguiseQuebrado: null,
    };
    try {
      atacarOriginal(golpe, atacanteId);
    } finally {
      const contexto = contextoAtaque;
      contextoAtaque = null;
      if (
        defensor?.habilidade === "Cursed Body" &&
        defensor.hp < hpDefensorAntes &&
        golpe &&
        Math.random() < 0.3
      ) {
        golpe.disabledTurns = 4;
        contexto?.mensagens.push("Cursed Body bloqueou o golpe por 4 turnos");
      }
      if (defensor?.habilidade === "Comatose" && defensor.status === "sleep") {
        defensor.status = null;
        defensor.statusTurns = 0;
        atualizar();
      }
      if (contexto?.disguiseQuebrado) {
        contexto.disguiseQuebrado.disguiseIntact = false;
        contexto.mensagens.push("Disguise protegeu o Pokémon e foi quebrado");
      }
      if (absorcaoPendente) {
        const { pokemon, habilidade, dados } = absorcaoPendente;
        if (dados.cura)
          pokemon.hp = Math.min(pokemon.hpMax, pokemon.hp + Math.floor(pokemon.hpMax / 4));
        if (dados.atributo) aplicarEstagios(pokemon, dados.atributo);
        if (dados.cura) contexto?.mensagens.push(habilidade + " recuperou HP");
        atualizar();
        absorcaoPendente = null;
      }
      if (
        defensor?.habilidade === "Synchronize" &&
        defensor.status &&
        defensor.status !== statusAnterior &&
        atacante &&
        !atacante.status &&
        ["burn", "poison", "paralysis"].includes(defensor.status)
      ) {
        atacante.status = defensor.status;
        atacante.statusTurns = defensor.statusTurns;
        if (ativos[atacanteId] === atacante) atualizar();
        contexto?.mensagens.push("Synchronize devolveu a condição de status");
      }
      if (atacante?.habilidade === "Moxie" && defensor && defensor.hp <= 0) {
        aplicarEstagios(atacante, { atk: 1 });
        contexto?.mensagens.push("Moxie aumentou o ataque");
        if (ativos[atacanteId] === atacante) atualizar();
      }
      if (atacante?.habilidade === "Speed Boost" && atacante.hp > 0) {
        aplicarEstagios(atacante, { spe: 1 });
        if (ativos[atacanteId] === atacante) atualizar();
      }
      if (defensor?.habilidade === "Pressure" && golpe && Number(golpe.bp) > 0) {
        golpe.bp = Math.max(0, golpe.bp - 1);
      }
      if (contexto?.mensagens.length) {
        const elemento = document.getElementById("mensagem-batalha");
        if (elemento) elemento.textContent += " • " + contexto.mensagens.join(" • ");
      }
    }
  };

  /* 8) Magic Guard e Poison Heal modificam o dano residual já existente. */
  const prepararAcaoOriginal = prepararAcao;
  prepararAcao = function (id) {
    const pokemon = prepararPokemon(ativos[id]);
    if (!pokemon) return prepararAcaoOriginal(id);
    if (pokemon.habilidade === "Magic Guard" && ["burn", "poison"].includes(pokemon.status)) {
      const status = pokemon.status,
        turnos = pokemon.statusTurns;
      pokemon.status = null;
      const podeAgir = prepararAcaoOriginal(id);
      pokemon.status = status;
      pokemon.statusTurns = turnos;
      atualizar();
      return podeAgir;
    }
    if (pokemon.habilidade === "Poison Heal" && pokemon.status === "poison") {
      pokemon.hp = Math.min(pokemon.hpMax, pokemon.hp + Math.max(1, Math.floor(pokemon.hpMax / 8)));
      const turnos = pokemon.statusTurns;
      pokemon.status = null;
      const podeAgir = prepararAcaoOriginal(id);
      pokemon.status = "poison";
      pokemon.statusTurns = turnos;
      atualizar();
      return podeAgir;
    }
    return prepararAcaoOriginal(id);
  };

  /* 9) Protean e contagem dos golpes bloqueados no modo 1vB. */
  const atacarComHabilidades = atacar;
  atacar = function (golpe, atacanteId) {
    const atacante = ativos[atacanteId];
    if (atacante?.habilidade === "Protean" && golpe?.tipo) {
      const tipos = {
        normal: "Normal",
        fogo: "Fogo",
        agua: "Agua",
        eletrico: "Eletrico",
        grama: "Grama",
        gelo: "Gelo",
        luta: "Lutador",
        lutador: "Lutador",
        veneno: "Veneno",
        terra: "Terra",
        voador: "Voador",
        psiquico: "Psiquico",
        inseto: "Inseto",
        pedra: "Pedra",
        fantasma: "Fantasma",
        dragao: "Dragao",
        sombrio: "Sombrio",
        metal: "Metal",
        fada: "Fada",
      };
      const tipoNovo =
        tipos[
          String(golpe.tipo)
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
        ];
      if (tipoNovo) atacante.tipos = [tipoNovo];
    }
    atacarComHabilidades(golpe, atacanteId);
    if (atacante)
      (atacante.golpes || []).forEach((m) => {
        if (m !== golpe && m.disabledTurns > 0) m.disabledTurns--;
      });
  };
  /* 10) Proteção de turno, bloqueio de golpes e contagem da habilidade Cursed Body. */
  const acaoBotOriginal = acaoBot;
  acaoBot = function () {
    if (ativos[1]?.hp <= 0) {
      if (equipes[1].every((p) => p.hp <= 0)) fim(2);
      else trocaJogador(true);
      return;
    }
    const pokemonBot = ativos[2];
    const bpSalvos = [];
    (pokemonBot?.golpes || []).forEach((golpe) => {
      if (golpe.disabledTurns > 0) {
        bpSalvos.push([golpe, golpe.bp]);
        golpe.bp = 0;
      }
    });
    try {
      return acaoBotOriginal();
    } finally {
      bpSalvos.forEach(([golpe, bp]) => {
        golpe.bp = bp;
      });
    }
  };
  const turnoJogadorOriginal = turnoJogador;
  turnoJogador = function (texto) {
    if (ativos[2]?.hp <= 0) {
      if (equipes[2].every((p) => p.hp <= 0)) fim(1);
      else {
        const proximo = trocarBotAutomaticamente();
        return turnoJogadorOriginal("O bot enviou " + proximo.nome + ". Sua vez!");
      }
    }
    const retorno = turnoJogadorOriginal(texto);
    (ativos[1]?.golpes || []).forEach((golpe, indice) => {
      const botao = document.getElementById("golpe-" + (indice + 1));
      if (!botao) return;
      botao.disabled = golpe.bp <= 0 || golpe.disabledTurns > 0;
      if (golpe.disabledTurns > 0)
        botao.textContent = golpe.nome + " • Selado: " + golpe.disabledTurns + " turno(s)";
    });
    return retorno;
  };
  /* 11) Confirma que o complemento foi carregado; a tela também exibe a habilidade ativa. */
  console.info("Sistema complementar de habilidades Pokémon carregado.");
})();
