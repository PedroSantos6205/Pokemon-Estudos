// Catálogo de Pokémon reaproveitado: atributos, imagens e golpes disponíveis.
const pokemons = window.CATALOGO_POKEMON;

// ============================================================
// EFETIVIDADE DOS TIPOS
// ============================================================

const efetividadeTipos = {
  Normal: {
    Pedra: 0.5,
    Fantasma: 0,
    Metal: 0.5,
  },

  Fogo: {
    Fogo: 0.5,
    Agua: 0.5,
    Grama: 2,
    Gelo: 2,
    Inseto: 2,
    Pedra: 0.5,
    Dragao: 0.5,
    Metal: 2,
  },

  Agua: {
    Fogo: 2,
    Agua: 0.5,
    Grama: 0.5,
    Terrestre: 2,
    Pedra: 2,
    Dragao: 0.5,
  },

  Eletrico: {
    Agua: 2,
    Eletrico: 0.5,
    Grama: 0.5,
    Terrestre: 0,
    Voador: 2,
    Dragao: 0.5,
  },

  Grama: {
    Fogo: 0.5,
    Agua: 2,
    Grama: 0.5,
    Veneno: 0.5,
    Terrestre: 2,
    Voador: 0.5,
    Inseto: 0.5,
    Pedra: 2,
    Dragao: 0.5,
    Metal: 0.5,
  },

  Gelo: {
    Fogo: 0.5,
    Agua: 0.5,
    Grama: 2,
    Gelo: 0.5,
    Terrestre: 2,
    Voador: 2,
    Dragao: 2,
    Metal: 0.5,
  },

  Lutador: {
    Normal: 2,
    Gelo: 2,
    Pedra: 2,
    Noturno: 2,
    Metal: 2,
    Veneno: 0.5,
    Voador: 0.5,
    Psycho: 0.5,
    Fada: 0.5,
    Fantasma: 0,
  },

  Veneno: {
    Grama: 2,
    Veneno: 0.5,
    Terrestre: 0.5,
    Pedra: 0.5,
    Fantasma: 0.5,
    Metal: 0,
    Fada: 2,
  },

  Terrestre: {
    Fogo: 2,
    Eletrico: 2,
    Grama: 0.5,
    Veneno: 2,
    Voador: 0,
    Inseto: 0.5,
    Pedra: 2,
    Metal: 2,
  },

  Voador: {
    Eletrico: 0.5,
    Grama: 2,
    Lutador: 2,
    Inseto: 2,
    Pedra: 0.5,
    Metal: 0.5,
  },

  Psycho: {
    Lutador: 2,
    Veneno: 2,
    Psycho: 0.5,
    Metal: 0.5,
    Noturno: 0,
  },

  Inseto: {
    Fogo: 0.5,
    Grama: 2,
    Lutador: 0.5,
    Veneno: 0.5,
    Voador: 0.5,
    Pedra: 0.5,
    Fantasma: 0.5,
    Metal: 0.5,
    Fada: 0.5,
    Noturno: 2,
  },

  Pedra: {
    Fogo: 2,
    Gelo: 2,
    Voador: 2,
    Inseto: 2,
    Lutador: 0.5,
    Terrestre: 0.5,
    Metal: 0.5,
  },

  Fantasma: {
    Normal: 0,
    Psycho: 2,
    Fantasma: 2,
    Noturno: 0.5,
  },

  Dragao: {
    Dragao: 2,
    Metal: 0.5,
    Fada: 0,
  },

  Noturno: {
    Lutador: 0.5,
    Psycho: 2,
    Fantasma: 2,
    Noturno: 0.5,
    Fada: 0.5,
  },

  Metal: {
    Fogo: 0.5,
    Agua: 0.5,
    Eletrico: 0.5,
    Gelo: 2,
    Pedra: 2,
    Metal: 0.5,
    Fada: 2,
  },

  Fada: {
    Fogo: 0.5,
    Lutador: 2,
    Veneno: 0.5,
    Dragao: 2,
    Metal: 0.5,
    Noturno: 2,
  },
};

// Banco de questões por tema; cada acerto permite que o golpe escolhido cause dano.

// As tags do catálogo controlam as vagas especiais: começam vazias e só são consumidas ao escolher um Pokémon marcado.
function temTagPokemon(p, tag) {
  return Array.isArray(p?.tags) && p.tags.includes(tag);
}

function contarTagEquipe(equipe, tag) {
  return (equipe || []).filter((p) => temTagPokemon(p, tag)).length;
}

function eMega(p) {
  return temTagPokemon(p, "mega");
}

function regraEquipe(p, equipe) {
  if (temTagPokemon(p, "lendario") && contarTagEquipe(equipe, "lendario") >= 1)
    return "Cada time pode ter apenas um lendário ou mítico.";
  if (eMega(p) && contarTagEquipe(equipe, "mega") >= 1)
    return "Cada time pode ter apenas uma Mega Evolução.";
  return "";
}

function resumoVagasEquipe(equipe) {
  return (
    "Lendários " +
    contarTagEquipe(equipe, "lendario") +
    "/1 · Megas " +
    contarTagEquipe(equipe, "mega") +
    "/1"
  );
}

// Efeitos não relacionados a condições de status: atributos, cura, recuo e flinch.

const efeitosGolpeCompetitivo = {
  firefang: { flinch: 0.1 },
  flareblitz: { recoil: 0.3333333333333333 },
  fakeout: {
    flinch: 1,
    firstTurn: true,
  },

  ironhead: {
    flinch: 0.3,
  },

  darkpulse: {
    flinch: 0.2,
  },

  airslash: {
    flinch: 0.3,
  },

  bite: {
    flinch: 0.3,
  },

  zenheadbutt: {
    flinch: 0.2,
  },
  iciclecrash: {
    flinch: 0.3,
  },
  icywind: {
    debuff: {
      spe: -1,
    },
  },

  mysticalfire: {
    debuff: {
      spa: -1,
    },
  },

  overheat: {
    selfDebuff: {
      spa: -2,
    },
  },

  dracometeor: {
    selfDebuff: {
      spa: -2,
    },
  },

  leafstorm: {
    selfDebuff: {
      spa: -2,
    },
  },

  clangingscales: {
    selfDebuff: {
      def: -1,
    },
  },

  closecombat: {
    selfDebuff: {
      def: -1,
      spd: -1,
    },
  },

  dragonascent: {
    selfDebuff: {
      def: -1,
      spd: -1,
    },
  },

  crunch: {
    debuff: {
      def: -1,
    },
    stageChance: 0.2,
  },

  moonblast: {
    debuff: {
      spa: -1,
    },
    stageChance: 0.3,
  },

  psychic: {
    debuff: {
      spd: -1,
    },
    stageChance: 0.1,
  },

  energyball: {
    debuff: {
      spd: -1,
    },
    stageChance: 0.1,
  },

  shadowball: {
    debuff: {
      spd: -1,
    },
    stageChance: 0.2,
  },

  meteormash: {
    buff: {
      atk: 1,
    },
    stageChance: 0.2,
  },

  razorshell: {
    debuff: {
      def: -1,
    },
    stageChance: 0.5,
  },

  swordsdance: {
    buff: {
      atk: 2,
    },
  },

  dragondance: {
    buff: {
      atk: 1,
      spe: 1,
    },
  },

  calmind: {
    buff: {
      spa: 1,
      spd: 1,
    },
  },

  nastyplot: {
    buff: {
      spa: 2,
    },
  },

  geomancy: {
    buff: {
      spa: 2,
      spd: 2,
      spe: 2,
    },
  },

  shellsmash: {
    selfDebuff: {
      def: -1,
      spd: -1,
    },
    buff: {
      atk: 2,
      spa: 2,
      spe: 2,
    },
  },

  clangoroussoul: {
    selfDebuff: {
      hp: 0.3333333333333333,
    },
    buff: {
      atk: 1,
      def: 1,
      spa: 1,
      spd: 1,
      spe: 1,
    },
  },

  rapidspin: {
    buff: {
      spe: 1,
    },
  },

  drainpunch: {
    drain: 0.5,
  },

  leechlife: {
    drain: 0.5,
  },

  oblivionwing: {
    drain: 0.75,
  },

  bitterblade: {
    drain: 0.5,
  },

  gigadrain: {
    drain: 0.5,
  },

  recover: {
    heal: 0.5,
  },

  roost: {
    heal: 0.5,
  },

  synthesis: {
    heal: 0.5,
  },

  moonlight: {
    heal: 0.5,
  },

  softboiled: {
    heal: 0.5,
  },

  rest: {
    heal: 1,
  },

  doubleedge: {
    recoil: 0.3333333333333333,
  },

  bravebird: {
    recoil: 0.3333333333333333,
  },

  woodhammer: {
    recoil: 0.3333333333333333,
  },

  volttackle: {
    recoil: 0.3333333333333333,
  },
};

function normalizarGolpe(nome) {
  return String(nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function chaveGolpeCompetitivo(g) {
  return normalizarGolpe(g?.nome);
}

function aplicarEstagiosGolpeCompetitivo(pokemon, mudancas, causadoPorAdversario = false) {
  if (!mudancas) return [];
  const ajustadas = window.ajustarEstagiosHabilidadePokemon
      ? window.ajustarEstagiosHabilidadePokemon(pokemon, mudancas, { causadoPorAdversario })
      : mudancas,
    nomes = {
      atk: "Ataque",
      def: "Defesa",
      spa: "Ataque especial",
      spd: "Defesa especial",
      spe: "Velocidade",
    },
    mensagens = [];
  pokemon.estagios ||= { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  for (const [stat, deltaRaw] of Object.entries(ajustadas)) {
    if (!(stat in nomes)) continue;
    const antes = pokemon.estagios[stat] || 0,
      depois = Math.max(-6, Math.min(6, antes + (Number(deltaRaw) || 0)));
    pokemon.estagios[stat] = depois;
    if (depois !== antes)
      mensagens.push(
        nomes[stat] + " de " + pokemon.nome + (depois > antes ? " aumentou" : " diminuiu"),
      );
  }
  return mensagens;
}

function aplicarEfeitoGolpeCompetitivo(
  a,
  d,
  g,
  danoReal,
  equipe,
  turnoAtual,
  ignorarCura = false,
  ignorarDrenagem = false,
) {
  const original = efeitosGolpeCompetitivo[chaveGolpeCompetitivo(g)] || {},
    fx = {
      ...original,
      recoil: g.recoil ?? original.recoil,
      buff: g.buff || original.buff,
      debuff: g.debuff || original.debuff,
      selfDebuff: g.selfDebuff || original.selfDebuff,
      stageChance: g.stageChance ?? original.stageChance,
      heal: g.cura ?? g.heal ?? original.heal,
      drain: g.drain ?? original.drain,
    },
    msgs = [];

  if (fx.heal && !ignorarCura && a.hp > 0) {
    const antes = a.hp,
      ganho = Math.floor(fx.heal <= 1 ? a.hpMax * fx.heal : fx.heal);
    a.hp = Math.min(a.hpMax, a.hp + ganho);

    if (a.hp > antes) msgs.push(a.nome + " recuperou " + (a.hp - antes) + " HP");
  }
  if (fx.drain && danoReal > 0 && !ignorarDrenagem && a.hp > 0) {
    const antes = a.hp;
    a.hp = Math.min(a.hpMax, a.hp + Math.max(1, Math.floor(danoReal * fx.drain)));

    if (a.hp > antes) msgs.push(a.nome + " recuperou " + (a.hp - antes) + " HP");
  }
  if (fx.recoil && danoReal > 0 && window.aplicarRecuoGolpePokemon)
    msgs.push(...window.aplicarRecuoGolpePokemon(a, g, danoReal, fx.recoil));
  if (fx.selfDebuff?.hp) {
    const perda = Math.max(1, Math.floor(a.hpMax * fx.selfDebuff.hp));
    a.hp = Math.max(1, a.hp - perda);
    msgs.push(a.nome + " sacrificou " + perda + " HP");
  }
  const oportunidade = Number(fx.stageChance ?? 1);

  if (Math.random() < oportunidade && (danoReal > 0 || Number(g.dano || 0) === 0)) {
    msgs.push(...aplicarEstagiosGolpeCompetitivo(a, fx.buff));
    msgs.push(
      ...aplicarEstagiosGolpeCompetitivo(d, fx.debuff, true),
      ...aplicarEstagiosGolpeCompetitivo(a, fx.selfDebuff),
    );
  }

  const tipoGolpe = g.tipo || g.tipos || "Normal",
    tiposAlvo = d.tipos || [],
    imunePorTipo =
      Number(g.dano || 0) > 0 && multiplicador(tipoGolpe, tiposAlvo) === 0;

  const efetivo = !g.__errou && !imunePorTipo && (Number(g.dano || 0) === 0 || danoReal > 0);
  if (efetivo && window.aplicarEfeitoStatusPokemon)
    msgs.push(
      ...window.aplicarEfeitoStatusPokemon(a, d, g, {
        acertou: true,
        efetividade: 1,
        dano: danoReal,
        equipe,
      }),
    );
  if (
    efetivo &&
    fx.flinch &&
    d.hp > 0 &&
    Math.random() < fx.flinch &&
    (!fx.firstTurn || !a.fakeOutUsed)
  ) {
    d.flinch = true;
    msgs.push(d.nome + " recuou");
  }
  if (fx.firstTurn) a.fakeOutUsed = true;
  return msgs;
}

function golpePodeAgir(p) {
  if (!p) return false;
  if (p.flinch) {
    p.flinch = false;
    return false;
  }
  const estado = window.processarStatusPokemon
    ? window.processarStatusPokemon(p)
    : { podeAgir: true };
  if (p.hp <= 0) removerDerrotadoPorReferencia2vB(p);
  return estado.podeAgir && p.hp > 0;
}
function golpeAcertaCompetitivo(g) {
  return Math.random() * 100 < Number(g?.precisao ?? 100);
}

function poderGolpeCompetitivo(g, a) {
  if (chaveGolpeCompetitivo(g) === "waterspout")
    return Math.max(1, Math.floor(150 * (a.hp / a.hpMax)));
  return Number(g?.dano || 0);
}

function modificadorDanoCompetitivo(g, a, d, crit = false) {
  const fisico = String(g?.categoria || "")
      .toLowerCase()
      .includes("fisico"),
    ataque = fisico ? "atk" : "spa",
    defesa = fisico ? "def" : "spd",
    estA = a.estagios?.[ataque] || 0,
    estD = d.estagios?.[defesa] || 0,
    estagio = (n) => (n >= 0 ? (2 + n) / 2 : 2 / (2 - n));
  let mod = estagio(crit && estA < 0 ? 0 : estA) / estagio(crit && estD > 0 ? 0 : estD);

  if (window.modificadorStatusPokemon) mod *= window.modificadorStatusPokemon(a, g);
  return mod;
}

const questoes = {
  "Vestibulinho-Etec": [
    {
      pergunta: "Qual é o valor de π?",
      alternativas: ["3.141292", "3.141598", "3.141122", "3.141592"],
      resposta: "3.141592",
    },
    {
      pergunta: "Quanto é X se 8² - 74 + 5X = 0?",
      alternativas: ["5", "2", "10", "1"],
      resposta: "2",
    },
    {
      pergunta:
        "Meu cão me revigora toda. Sem falar que dorme às vezes aos meus pés enchendo o quarto da cálida vida úmida. O meu cão me ensina a viver. Ele só fica sendo. Ser é a sua atividade. LISPECTOR, Clarice. Um sopro de vida. Org. Olga Borelli. Rio de Janeiro: Rocco, 1999, p. 43. Na passagem apresentada, o cão é usado como modelo a ser seguido por",
      alternativas: [
        "realizar com simplicidade ações complexas, como acalentar as dores alheias e submeter-se constantemente às vontades dos outros.",
        "sentir-se acolhido ao ser inferiorizado diante de seus superiores hierárquicos, evidenciando a aceitação de sua posição social.",
        "regozijar-se diante da possibilidade de tornar um outro indivíduo tenso pela simples companhia que pode oferecer.",
        "viver com plenitude sua existência, sem se deixar levar por infrutíferas angústias durante esse processo.",
      ],
      resposta:
        "viver com plenitude sua existência, sem se deixar levar por infrutíferas angústias durante esse processo.",
    },
    {
      pergunta: "Qual é o planeta mais distante do Sistema Solar?",
      alternativas: ["Vênus", "Júpiter", "Netuno", "Saturno"],
      resposta: "Netuno",
    },
    {
      pergunta: "Quem é atualmente o Kazekage da Areia em Naruto Shippuden?",
      alternativas: ["Naruto", "Deidara", "Gaara", "Temari"],
      resposta: "Gaara",
    },
    {
      pergunta:
        "Uma ferramenta digital agiliza tarefas, mas notificações frequentes levam as pessoas a assumir novas atividades ao longo do dia. Qual conclusão sintetiza essa situação?",
      alternativas: [
        "A tecnologia tornou todas as atividades humanas mais demoradas.",
        "O desenvolvimento tecnológico eliminou a necessidade de organização pessoal.",
        "A tecnologia necessariamente produz mais tempo livre para as pessoas.",
        "A tecnologia acelerou tarefas, mas também contribuiu para o aumento das atividades realizadas.",
      ],
      resposta:
        "A tecnologia acelerou tarefas, mas também contribuiu para o aumento das atividades realizadas.",
    },
    {
      pergunta:
        "O problema da frase 'João contou ao irmão que seu professor havia cancelado a prova.' está relacionado principalmente à:",
      alternativas: [
        "Ausência de verbo.",
        "Ambiguidade na referência do pronome 'seu'.",
        "Utilização inadequada do tempo verbal.",
        "Falta de concordância nominal.",
      ],
      resposta: "Ambiguidade na referência do pronome 'seu'.",
    },
    {
      pergunta:
        "Na frase 'A cidade cresceu rapidamente. Por isso, os moradores começaram a enfrentar problemas relacionados ao trânsito.', a expressão 'Por isso' estabelece uma relação de:",
      alternativas: ["Oposição.", "Comparação.", "Conclusão/consequência.", "Condição."],
      resposta: "Conclusão/consequência.",
    },
    {
      pergunta:
        "Na frase 'O planeta não precisa de heróis. Precisa de hábitos.', a estratégia utilizada busca principalmente:",
      alternativas: [
        "Apresentar uma informação científica sobre o meio ambiente.",
        "Convencer o leitor de que apenas especialistas podem proteger o planeta.",
        "Criar uma oposição entre grandes ações individuais e mudanças de comportamento cotidiano.",
        "Demonstrar que os problemas ambientais não podem ser solucionados.",
      ],
      resposta:
        "Criar uma oposição entre grandes ações individuais e mudanças de comportamento cotidiano.",
    },
    {
      pergunta:
        "Na frase 'Embora estivesse cansado, continuou estudando, pois precisava melhorar seu desempenho.', as palavras 'embora' e 'pois' estabelecem, respectivamente, relações de:",
      alternativas: [
        "Causa e oposição.",
        "Condição e conclusão.",
        "Concessão e explicação/causa.",
        "Comparação e consequência.",
      ],
      resposta: "Concessão e explicação/causa.",
    },
    {
      pergunta:
        "Na frase 'A internet aproximou pessoas que estavam fisicamente distantes, mas também criou novas formas de isolamento.', a palavra 'mas' poderia ser substituída, sem alteração fundamental do sentido, por:",
      alternativas: ["Portanto.", "Entretanto.", "Porque.", "Consequentemente."],
      resposta: "Entretanto.",
    },
    {
      pergunta:
        "Na frase 'O garoto observou o céu escuro. Sabia que a chuva estava próxima.', a relação entre as duas frases pode ser compreendida porque:",
      alternativas: [
        "A segunda frase contradiz completamente a primeira.",
        "A primeira apresenta uma informação que permite inferir a segunda.",
        "A segunda apresenta uma informação sem qualquer relação com a primeira.",
        "A primeira depende gramaticalmente da segunda.",
      ],
      resposta: "A primeira apresenta uma informação que permite inferir a segunda.",
    },
    {
      pergunta:
        "Na frase “Os estudantes que estudaram durante todo o semestre apresentaram melhores resultados”, qual é a função da oração “que estudaram durante todo o semestre”?",
      alternativas: [
        "Restringir a referência aos estudantes que estudaram durante todo o semestre.",
        "Indicar uma consequência causada pelos resultados.",
        "Expressar uma ordem dirigida aos estudantes.",
        "Estabelecer uma comparação entre semestres.",
      ],
      resposta: "Restringir a referência aos estudantes que estudaram durante todo o semestre.",
    },
    {
      pergunta:
        "Considere o anúncio: “Você ainda joga fora o que poderia transformar?”. O uso dessa pergunta tem principalmente a função de:",
      alternativas: [
        "Solicitar uma resposta obrigatoriamente verbal.",
        "Apresentar uma dúvida científica.",
        "Provocar reflexão no leitor sobre seus hábitos.",
        "Demonstrar que reciclagem é impossível.",
      ],
      resposta: "Provocar reflexão no leitor sobre seus hábitos.",
    },
    {
      pergunta:
        "Na frase 'Pedro estudou bastante para a prova. Ainda assim, ficou inseguro no momento de responder às questões.', a expressão 'Ainda assim' indica:",
      alternativas: ["Causa.", "Finalidade.", "Oposição/concessão.", "Explicação."],
      resposta: "Oposição/concessão.",
    },
    {
      pergunta:
        "Uma escola possui 480 estudantes. 35% participaram de uma atividade e, desses participantes, 25% faltaram no segundo encontro. Quantos alunos participaram dos dois encontros?",
      alternativas: ["84", "108", "126", "132"],
      resposta: "126",
    },
    {
      pergunta:
        "Um produto custa R$ 800 e recebe 20% de desconto. Pagando à vista, recebe mais 10% de desconto sobre o preço promocional. Qual será o preço final?",
      alternativas: ["R$ 560", "R$ 576", "R$ 580", "R$ 600"],
      resposta: "R$ 576",
    },
    {
      pergunta:
        "Uma torneira enche um reservatório em 6 horas e outra em 4 horas. Mantendo as duas abertas simultaneamente, aproximadamente quanto tempo será necessário?",
      alternativas: ["2 h", "2 h 24 min", "2 h 30 min", "3 h"],
      resposta: "2 h 24 min",
    },
    {
      pergunta:
        "Um estudante percorre 1,2 km até a escola em 6 minutos e retorna em 8 minutos. Qual é aproximadamente a velocidade média considerando todo o percurso?",
      alternativas: ["8 km/h", "9 km/h", "10,3 km/h", "12 km/h"],
      resposta: "10,3 km/h",
    },
    {
      pergunta:
        "Um terreno retangular possui área de 240 m². Seu comprimento é 4 metros maior que sua largura. Qual é a medida do comprimento?",
      alternativas: ["12 m", "14 m", "16 m", "18 m"],
      resposta: "16 m",
    },
    {
      pergunta:
        "Uma escada de 5 m está apoiada em uma parede vertical. A distância entre a base da escada e a parede é de 3 m. Qual é a altura atingida pela escada?",
      alternativas: ["2 m", "3 m", "4 m", "4,5 m"],
      resposta: "4 m",
    },
    {
      pergunta:
        "Um poste projeta uma sombra de 8 m. Uma pessoa de 1,5 m projeta uma sombra de 2 m. Considerando triângulos semelhantes, qual é a altura do poste?",
      alternativas: ["4 m", "5 m", "6 m", "7 m"],
      resposta: "6 m",
    },
    {
      pergunta: "Uma circunferência possui raio de 7 cm. Utilizando π = 22/7, qual será sua área?",
      alternativas: ["44 cm²", "88 cm²", "132 cm²", "154 cm²"],
      resposta: "154 cm²",
    },
    {
      pergunta:
        "A sequência 3, 7, 15, 31, 63, ... é formada multiplicando o termo anterior por 2 e adicionando 1. Qual será o 8º termo?",
      alternativas: ["127", "191", "255", "511"],
      resposta: "511",
    },
    {
      pergunta:
        "Um jogador possui 18, 25, 17, 30 e 35 pontos nas cinco primeiras partidas. Para terminar 6 partidas com média de 25 pontos, quantos pontos deverá fazer na sexta?",
      alternativas: ["20", "25", "30", "35"],
      resposta: "35",
    },
    {
      pergunta:
        "Um produto teve seu preço aumentado em 25% e depois sofreu uma redução de 20%. Comparando o preço final com o original, é correto afirmar que:",
      alternativas: ["Aumentou 5%.", "Diminuiu 5%.", "Permaneceu igual.", "Aumentou 10%."],
      resposta: "Permaneceu igual.",
    },
    {
      pergunta:
        "Um grupo precisa escolher 2 representantes entre 5 candidatos. Quantas duplas diferentes podem ser formadas?",
      alternativas: ["5", "8", "10", "15"],
      resposta: "10",
    },
    {
      pergunta:
        "Durante uma corrida, as células musculares aumentam sua demanda energética. Qual processo celular está diretamente relacionado à produção de energia utilizável pela célula?",
      alternativas: ["Fotossíntese.", "Respiração celular.", "Transpiração.", "Osmose."],
      resposta: "Respiração celular.",
    },
    {
      pergunta:
        "Uma pessoa passa várias horas sem beber água e apresenta urina mais concentrada. Qual órgão possui papel fundamental na regulação da quantidade de água eliminada pela urina?",
      alternativas: ["Pulmão.", "Estômago.", "Rim.", "Pâncreas."],
      resposta: "Rim.",
    },
    {
      pergunta:
        "Na cadeia alimentar Capim → gafanhoto → sapo → cobra → gavião, em qual organismo é esperada a maior concentração de uma substância tóxica não degradável?",
      alternativas: ["Capim.", "Gafanhoto.", "Sapo.", "Gavião."],
      resposta: "Gavião.",
    },
    {
      pergunta:
        "Uma região sofre intensa retirada de vegetação e apresenta aumento da erosão e redução da água disponível. Esses fenômenos podem estar relacionados principalmente:",
      alternativas: [
        "À interrupção completa da fotossíntese mundial.",
        "À alteração do ciclo da água e à perda da proteção do solo.",
        "Ao aumento da produção de oxigênio pelas árvores restantes.",
        "À diminuição da evaporação devido à retirada das plantas.",
      ],
      resposta: "À alteração do ciclo da água e à perda da proteção do solo.",
    },
    {
      pergunta:
        "Uma pessoa recebe uma vacina contra determinada doença. Qual é o principal objetivo da vacinação?",
      alternativas: [
        "Destruir imediatamente todas as bactérias presentes no organismo.",
        "Fornecer energia para as células de defesa.",
        "Estimular o sistema imunológico a desenvolver memória contra o agente.",
        "Substituir permanentemente os glóbulos brancos.",
      ],
      resposta: "Estimular o sistema imunológico a desenvolver memória contra o agente.",
    },
    {
      pergunta:
        "Em uma espécie, uma característica é determinada por um alelo dominante A e um recessivo a. No cruzamento Aa × Aa, qual é a probabilidade de nascer um descendente aa?",
      alternativas: ["0%", "25%", "50%", "75%"],
      resposta: "25%",
    },
    {
      pergunta:
        "Um estudante mistura água, areia e sal de cozinha. O sal se dissolve e a areia permanece no fundo. Qual sequência de processos separa adequadamente os componentes?",
      alternativas: [
        "Filtração e destilação.",
        "Decantação e fusão.",
        "Evaporação e filtração, necessariamente nessa ordem.",
        "Filtração para separar a areia e evaporação da água para recuperar o sal.",
      ],
      resposta: "Filtração para separar a areia e evaporação da água para recuperar o sal.",
    },
    {
      pergunta:
        "O gás oxigênio é representado por O₂ e o gás carbônico por CO₂. É correto afirmar que:",
      alternativas: [
        "Ambos são substâncias simples.",
        "Ambos são substâncias compostas.",
        "O₂ é substância simples e CO₂ é substância composta.",
        "O₂ é mistura e CO₂ é substância simples.",
      ],
      resposta: "O₂ é substância simples e CO₂ é substância composta.",
    },
    {
      pergunta:
        "Um ciclista aumenta sua velocidade de 10 m/s para 20 m/s. Durante esse processo, podemos afirmar que:",
      alternativas: [
        "Sua velocidade diminuiu.",
        "Ele permaneceu necessariamente em repouso.",
        "Houve aceleração, pois sua velocidade variou.",
        "Sua massa necessariamente dobrou.",
      ],
      resposta: "Houve aceleração, pois sua velocidade variou.",
    },
    {
      pergunta:
        "Dois objetos, um de ferro e outro de madeira, possuem a mesma massa. O ferro afunda na água e a madeira flutua. A melhor explicação é:",
      alternativas: [
        "A madeira não possui massa.",
        "O ferro sempre possui temperatura maior que a água.",
        "A densidade dos materiais influencia seu comportamento no líquido.",
        "Objetos metálicos não sofrem ação da gravidade.",
      ],
      resposta: "A densidade dos materiais influencia seu comportamento no líquido.",
    },
    {
      pergunta: "Uma lâmpada ligada a uma tomada transforma principalmente energia:",
      alternativas: [
        "Química em nuclear.",
        "Elétrica em luminosa e térmica.",
        "Térmica em elétrica.",
        "Luminosa em química.",
      ],
      resposta: "Elétrica em luminosa e térmica.",
    },
    {
      pergunta:
        "Duas lâmpadas idênticas estão ligadas em série. Uma delas queima e deixa de conduzir corrente. O que acontece com a outra?",
      alternativas: [
        "Continua funcionando normalmente.",
        "Fica duas vezes mais brilhante.",
        "Também deixa de funcionar, pois o circuito é interrompido.",
        "Passa a funcionar apenas com metade da tensão.",
      ],
      resposta: "Também deixa de funcionar, pois o circuito é interrompido.",
    },
    {
      pergunta: "Durante a Revolução Industrial, uma consequência importante foi:",
      alternativas: [
        "Desaparecimento das cidades.",
        "Redução da produção em larga escala.",
        "Crescimento da urbanização e expansão do trabalho fabril.",
        "Retorno predominante ao trabalho artesanal doméstico.",
      ],
      resposta: "Crescimento da urbanização e expansão do trabalho fabril.",
    },
    {
      pergunta:
        "As Grandes Navegações europeias dos séculos XV e XVI estiveram relacionadas a diversos fatores. Entre eles, destaca-se:",
      alternativas: [
        "Busca por novas rotas comerciais e expansão econômica.",
        "Intenção de abandonar completamente o comércio marítimo.",
        "Isolamento econômico das monarquias europeias.",
        "Fim do interesse europeu por produtos orientais.",
      ],
      resposta: "Busca por novas rotas comerciais e expansão econômica.",
    },
    {
      pergunta:
        "Durante o período colonial brasileiro, a economia açucareira esteve fortemente associada:",
      alternativas: [
        "À pequena propriedade familiar e ao trabalho exclusivamente livre.",
        "Ao latifúndio, monocultura e trabalho escravizado.",
        "À industrialização pesada e ao trabalho assalariado.",
        "À produção de automóveis para exportação.",
      ],
      resposta: "Ao latifúndio, monocultura e trabalho escravizado.",
    },
    {
      pergunta:
        "A Independência do Brasil, em 1822, não significou uma ruptura completa com todas as estruturas sociais anteriores. Isso pode ser percebido porque:",
      alternativas: [
        "A escravidão foi imediatamente abolida.",
        "O Brasil deixou de possuir grandes propriedades rurais.",
        "Estruturas econômicas e sociais herdadas do período colonial permaneceram.",
        "Todos os grupos sociais passaram a possuir os mesmos direitos políticos.",
      ],
      resposta: "Estruturas econômicas e sociais herdadas do período colonial permaneceram.",
    },
    {
      pergunta: "Durante a Guerra Fria, Estados Unidos e União Soviética:",
      alternativas: [
        "Entraram imediatamente em guerra nuclear direta.",
        "Disputaram influência política, econômica, militar e tecnológica em escala mundial.",
        "Formaram uma única aliança econômica.",
        "Abandonaram completamente o desenvolvimento tecnológico.",
      ],
      resposta:
        "Disputaram influência política, econômica, militar e tecnológica em escala mundial.",
    },
    {
      pergunta: "A Constituição brasileira de 1988 é associada à redemocratização do país porque:",
      alternativas: [
        "Restaurou direitos políticos e ampliou direitos sociais e civis.",
        "Estabeleceu uma monarquia constitucional.",
        "Retirou direitos políticos da população.",
        "Proibiu eleições diretas.",
      ],
      resposta: "Restaurou direitos políticos e ampliou direitos sociais e civis.",
    },
    {
      pergunta:
        "Uma empresa instala uma fábrica próxima a uma grande rodovia e a um importante centro consumidor. Essa decisão pode ser explicada principalmente pela intenção de:",
      alternativas: [
        "Aumentar as dificuldades de transporte.",
        "Reduzir custos logísticos e facilitar a distribuição dos produtos.",
        "Afastar-se dos mercados consumidores.",
        "Impedir o acesso às matérias-primas.",
      ],
      resposta: "Reduzir custos logísticos e facilitar a distribuição dos produtos.",
    },
    {
      pergunta: "O fenômeno conhecido como El Niño está relacionado principalmente:",
      alternativas: [
        "Ao resfriamento permanente dos oceanos tropicais.",
        "Ao aquecimento anormal das águas superficiais do Pacífico Equatorial.",
        "Ao desaparecimento das correntes marítimas.",
        "Exclusivamente ao derretimento das calotas polares.",
      ],
      resposta: "Ao aquecimento anormal das águas superficiais do Pacífico Equatorial.",
    },
    {
      pergunta:
        "Uma cidade apresenta crescimento urbano acelerado sem planejamento adequado, com ocupações em áreas de risco, problemas de mobilidade e deficiência no saneamento. Esse cenário está relacionado principalmente:",
      alternativas: [
        "À urbanização sem infraestrutura suficiente.",
        "À redução da população urbana.",
        "À diminuição das atividades econômicas.",
        "À desertificação natural de todas as cidades.",
      ],
      resposta: "À urbanização sem infraestrutura suficiente.",
    },
    {
      pergunta:
        "Uma região possui elevada disponibilidade de água, mas sofre com falta de abastecimento em alguns bairros e perdas significativas durante a distribuição. A situação demonstra que:",
      alternativas: [
        "Possuir recursos naturais significa necessariamente distribuí-los de maneira igualitária.",
        "Problemas de infraestrutura e gestão podem provocar escassez mesmo onde existe disponibilidade natural.",
        "A água deixou de existir naquela região.",
        "A disponibilidade hídrica depende exclusivamente da população.",
      ],
      resposta:
        "Problemas de infraestrutura e gestão podem provocar escassez mesmo onde existe disponibilidade natural.",
    },
    {
      pergunta:
        "A retirada da vegetação de uma encosta aumenta o risco de deslizamentos principalmente porque:",
      alternativas: [
        "Aumenta a fixação do solo pelas raízes.",
        "Diminui a ação da gravidade.",
        "Reduz a proteção e a estabilidade proporcionadas pela vegetação.",
        "Impede completamente a infiltração da água.",
      ],
      resposta: "Reduz a proteção e a estabilidade proporcionadas pela vegetação.",
    },
    {
      pergunta:
        "Uma escola substitui 20 lâmpadas de 60 W por 20 lâmpadas de 10 W. Ambas ficam ligadas durante 5 horas por dia. Qual será a redução diária no consumo de energia?",
      alternativas: ["1 kWh", "2 kWh", "5 kWh", "10 kWh"],
      resposta: "5 kWh",
    },
    {
      pergunta:
        "Uma população de coelhos cresce rapidamente em uma área sem predadores, mas depois seu crescimento diminui devido à falta de alimento e espaço. Qual conceito explica melhor essa situação?",
      alternativas: [
        "A população possui crescimento ilimitado independentemente do ambiente.",
        "Os recursos disponíveis impõem limites ao crescimento populacional.",
        "A ausência de predadores elimina qualquer competição.",
        "O ambiente deixa de exercer influência sobre a população.",
      ],
      resposta: "Os recursos disponíveis impõem limites ao crescimento populacional.",
    },
    {
      pergunta:
        "Uma cidade possui uma região com grande concentração de indústrias e poucas áreas verdes e outra com menor concentração industrial e maior cobertura vegetal. Em um período de intensa radiação solar, é esperado que:",
      alternativas: [
        "A Região A possa apresentar maior intensidade de ilha de calor urbana.",
        "A Região B seja necessariamente mais quente porque possui árvores.",
        "As duas regiões tenham exatamente a mesma temperatura.",
        "A vegetação aumente obrigatoriamente a temperatura local.",
      ],
      resposta: "A Região A possa apresentar maior intensidade de ilha de calor urbana.",
    },
    {
      pergunta:
        "Um agricultor possui uma área de 1 hectare, equivalente a 10.000 m², e deseja dividi-la em lotes quadrados de 25 m × 25 m. Quantos lotes completos poderá obter?",
      alternativas: ["8", "10", "12", "16"],
      resposta: "16",
    },
    {
      pergunta:
        "Uma comunidade percebe que um rio recebe grande quantidade de resíduos contendo matéria orgânica. Após algum tempo, ocorre redução da quantidade de peixes devido à proliferação de microrganismos decompositores. Qual é a explicação mais adequada?",
      alternativas: [
        "A decomposição da matéria orgânica pode consumir oxigênio dissolvido na água, prejudicando organismos aquáticos.",
        "Os decompositores produzem oxigênio em quantidade suficiente para aumentar imediatamente a população de peixes.",
        "A matéria orgânica elimina completamente todos os microrganismos do rio.",
        "A presença de resíduos sempre aumenta a biodiversidade aquática.",
      ],
      resposta:
        "A decomposição da matéria orgânica pode consumir oxigênio dissolvido na água, prejudicando organismos aquáticos.",
    },
    {
      pergunta:
        "Em diferentes povos indígenas, certos animais possuem importância cultural e espiritual. Considerando a onça como predadora de topo, qual papel ecológico ela pode exercer?",
      alternativas: [
        "Atuar como produtora, transformando luz solar em matéria orgânica.",
        "Decompor restos orgânicos e devolver nutrientes ao solo.",
        "Regular populações de presas e contribuir para o equilíbrio da cadeia alimentar.",
        "Ocupar a base da cadeia alimentar por se alimentar diretamente de vegetais.",
      ],
      resposta: "Regular populações de presas e contribuir para o equilíbrio da cadeia alimentar.",
    },
    {
      pergunta:
        "Leia o trecho: “Quando cresceu, ficou livre e acabou indo com o seu bando.” Nesse contexto, a locução verbal “acabou indo” indica:",
      alternativas: [
        "uma ação inacabada que é realizada recorrentemente.",
        "uma ação inacabada que se prolonga infinitamente.",
        "uma ação finalizada que é enfatizada ao terminar.",
        "o desenvolvimento de uma ação que não se concretiza.",
      ],
      resposta: "uma ação finalizada que é enfatizada ao terminar.",
    },
    {
      pergunta:
        "Uma mochila custa R$ 160 e recebe desconto de 15%. Qual é o preço após o desconto?",
      alternativas: ["R$ 124", "R$ 136", "R$ 140", "R$ 145"],
      resposta: "R$ 136",
    },
    {
      pergunta: "Resolva a equação 3(x − 2) = 15.",
      alternativas: ["x = 3", "x = 5", "x = 7", "x = 9"],
      resposta: "x = 7",
    },
    {
      pergunta:
        "Leia: “A biblioteca ampliou o horário de atendimento. Nas semanas seguintes, mais estudantes passaram a frequentar o espaço.” Qual relação está sugerida?",
      alternativas: [
        "A ampliação do horário pode ter contribuído para o aumento da frequência.",
        "A biblioteca fechou antes do fim das aulas.",
        "Os estudantes deixaram de usar a biblioteca.",
        "O horário não tem relação possível com a frequência.",
      ],
      resposta: "A ampliação do horário pode ter contribuído para o aumento da frequência.",
    },
    {
      pergunta: "Assinale a frase em que a concordância verbal está de acordo com a norma-padrão.",
      alternativas: [
        "Fazem dois anos que a escola abriu.",
        "Houveram muitos inscritos no curso.",
        "Os resultados da pesquisa mostram uma tendência.",
        "Existe várias opções de transporte.",
      ],
      resposta: "Os resultados da pesquisa mostram uma tendência.",
    },
    {
      pergunta:
        "Durante a respiração celular aeróbia, qual substância é utilizada pelas células para liberar energia dos nutrientes?",
      alternativas: ["Oxigênio", "Nitrogênio", "Hélio", "Ozônio"],
      resposta: "Oxigênio",
    },
    {
      pergunta:
        "Em uma espécie, a característica verde das sementes é dominante sobre a amarela. No cruzamento entre dois indivíduos heterozigotos, qual proporção de descendentes amarelos é esperada?",
      alternativas: ["0%", "25%", "50%", "75%"],
      resposta: "25%",
    },
    {
      pergunta: "A Lei Áurea, assinada em 1888, teve como consequência legal imediata:",
      alternativas: [
        "A abolição da escravidão no Brasil.",
        "A proclamação da República.",
        "A independência do Brasil.",
        "A criação da Constituição de 1988.",
      ],
      resposta: "A abolição da escravidão no Brasil.",
    },
    {
      pergunta:
        "Em um mapa de escala 1:100.000, a distância entre duas cidades é de 3 cm. Qual é a distância real aproximada?",
      alternativas: ["300 m", "3 km", "30 km", "300 km"],
      resposta: "3 km",
    },
    {
      pergunta:
        "Um automóvel percorre 150 km em 3 horas, mantendo velocidade média constante. Qual é essa velocidade média?",
      alternativas: ["30 km/h", "45 km/h", "50 km/h", "75 km/h"],
      resposta: "50 km/h",
    },
    {
      pergunta: "Em uma sequência de dados ordenados, a mediana é:",
      alternativas: [
        "O valor central, ou a média dos dois valores centrais quando há quantidade par de dados.",
        "Sempre o maior valor observado.",
        "A soma de todos os valores dividida por dois.",
        "O valor que aparece primeiro na lista.",
      ],
      resposta:
        "O valor central, ou a média dos dois valores centrais quando há quantidade par de dados.",
    },
  ],
  JavaScript: [
    {
      pergunta: "Qual operador compara valor e tipo sem fazer conversão?",
      alternativas: ["=", "==", "===", "!="],
      resposta: "===",
    },
    {
      pergunta: "Qual método converte uma string JSON em um valor JavaScript?",
      alternativas: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.read()"],
      resposta: "JSON.parse()",
    },
    {
      pergunta: "Qual método registra uma função para responder a um evento do navegador?",
      alternativas: ["addEventListener()", "querySelector()", "createElement()", "setAttribute()"],
      resposta: "addEventListener()",
    },
    {
      pergunta: "Qual é o índice do primeiro elemento de um array em JavaScript?",
      alternativas: ["0", "1", "-1", "Depende do tamanho do array"],
      resposta: "0",
    },
    {
      pergunta: "O que a palavra-chave `const` impede no mesmo escopo?",
      alternativas: [
        "A leitura da variável",
        "A redeclaração da variável",
        "O uso de objetos",
        "A chamada de funções",
      ],
      resposta: "A redeclaração da variável",
    },
    {
      pergunta: "Qual método cria um novo array aplicando uma função a cada elemento?",
      alternativas: ["filter()", "forEach()", "map()", "push()"],
      resposta: "map()",
    },
    {
      pergunta: "Qual afirmação descreve corretamente `var` e `const` em JavaScript?",
      alternativas: [
        "`var` declara uma variável com escopo de função; `const` declara um vínculo que não pode ser reatribuído.",
        "`var` cria uma constante; `const` cria uma variável global.",
        "As duas palavras reservadas têm exatamente o mesmo comportamento.",
        "`var` compara valores; `const` converte textos em números.",
      ],
      resposta:
        "`var` declara uma variável com escopo de função; `const` declara um vínculo que não pode ser reatribuído.",
    },
    {
      pergunta:
        "Qual trecho percorre os valores de `i` de 1 a 10, inclusive, com um laço `for` válido?",
      alternativas: [
        "for (let i = 1; i <= 10; i++)",
        "for (let i = 1; i <= 10; i--)",
        "for (let i = 1; i < 10; i++)",
        "for (let i = 1; i <= 10)",
      ],
      resposta: "for (let i = 1; i <= 10; i++)",
    },
    {
      pergunta:
        "Qual função do navegador exibe uma caixa de diálogo para a pessoa digitar uma resposta?",
      alternativas: ["prompt()", "const", "alert()", "let"],
      resposta: "prompt()",
    },
    {
      pergunta: "Qual expressão converte em número a resposta textual obtida com `prompt()`?",
      alternativas: [
        "Number(prompt())",
        "String(prompt())",
        "Boolean(prompt())",
        "prompt(Number())",
      ],
      resposta: "Number(prompt())",
    },
    {
      pergunta: "No código `let itens = [];`, o que os colchetes vazios representam?",
      alternativas: [
        "Um array vazio.",
        "Uma função sem parâmetros.",
        "Um objeto com uma propriedade.",
        "Uma comparação lógica.",
      ],
      resposta: "Um array vazio.",
    },
    {
      pergunta: "No código `let resultado = null;`, o que `null` indica inicialmente?",
      alternativas: [
        "Que ainda não há um valor de objeto atribuído à variável.",
        "Que a variável contém o número zero.",
        "Que a variável contém uma string vazia.",
        "Que a variável é um array vazio.",
      ],
      resposta: "Que ainda não há um valor de objeto atribuído à variável.",
    },
    {
      pergunta:
        "Considerando o código 'let quantidadeEscolhida = 0; quantidadeEscolhida++; quantidadeEscolhida++;', qual será o valor final de quantidadeEscolhida?",
      alternativas: ["0", "1", "2", "3"],
      resposta: "2",
    },
    {
      pergunta: "No código `if (temperatura <= 0)`, o que significa o operador `<=`?",
      alternativas: [
        "Menor ou igual a.",
        "Maior ou igual a.",
        "Diferente de.",
        "Igual em valor e tipo.",
      ],
      resposta: "Menor ou igual a.",
    },
    {
      pergunta:
        'Observe: `let temperatura = 50; if (temperatura <= 0) { console.log("Frio"); }`. O que será mostrado no console?',
      alternativas: ["Nada.", "Frio.", "50.", "Um erro de sintaxe."],
      resposta: "Nada.",
    },
    {
      pergunta: "Em JavaScript, o que `push()` faz quando é chamado em um array?",
      alternativas: [
        "Adiciona um ou mais elementos ao final do array.",
        "Remove o primeiro elemento do array.",
        "Ordena os elementos em ordem alfabética.",
        "Cria uma cópia independente do array.",
      ],
      resposta: "Adiciona um ou mais elementos ao final do array.",
    },
    {
      pergunta:
        'Considere `let frutas = []; frutas.push("maçã"); frutas.push("pera"); frutas.push("uva");`. Qual será o conteúdo final do array?',
      alternativas: ['["maçã", "pera", "uva"]', '["uva", "pera", "maçã"]', '["maçã"]', "[]"],
      resposta: '["maçã", "pera", "uva"]',
    },
    {
      pergunta:
        'Considere `let cores = ["azul", "verde", "amarelo"]; console.log(cores[0]);`. O que será exibido?',
      alternativas: ["azul", "verde", "amarelo", "0"],
      resposta: "azul",
    },
    {
      pergunta: "No código `if (lista.length > 0)`, o que a propriedade `length` representa?",
      alternativas: [
        "A quantidade de elementos do array.",
        "O tipo dos elementos.",
        "O tamanho em bytes de cada elemento.",
        "A posição do último item, sempre.",
      ],
      resposta: "A quantidade de elementos do array.",
    },
    {
      pergunta: "No código `function calcularMedia() { }`, o que está sendo declarado?",
      alternativas: ["Uma função.", "Um array.", "Uma condição.", "Uma classe CSS."],
      resposta: "Uma função.",
    },
    {
      pergunta:
        "No JavaScript, o que acontece quando se executa `mostrarAviso();`, considerando que essa função foi declarada?",
      alternativas: [
        "A função é chamada.",
        "A função é apagada.",
        "A variável vira uma constante.",
        "O navegador fecha.",
      ],
      resposta: "A função é chamada.",
    },
    {
      pergunta:
        "Na declaração `function calcularMedia(nota1, nota2) { }`, o que são `nota1` e `nota2`?",
      alternativas: [
        "Parâmetros da função.",
        "Valores retornados obrigatoriamente.",
        "Nomes de operadores.",
        "Elementos HTML.",
      ],
      resposta: "Parâmetros da função.",
    },
    {
      pergunta:
        "Na chamada `calcularMedia(7, 9);`, qual valor é recebido pelo primeiro parâmetro da função?",
      alternativas: ["7", "9", "16", '"nota1"'],
      resposta: "7",
    },
    {
      pergunta:
        "Em um jogo, por que verificar se os pontos de vida de um personagem são menores ou iguais a zero?",
      alternativas: [
        "Para identificar se ele foi derrotado.",
        "Para aumentar automaticamente seus pontos de vida.",
        "Para mudar o idioma da página.",
        "Para ordenar a equipe alfabeticamente.",
      ],
      resposta: "Para identificar se ele foi derrotado.",
    },
    {
      pergunta:
        "Em um jogo por equipes, o personagem ativo foi derrotado, mas ainda há integrantes disponíveis. Qual é a próxima ação apropriada?",
      alternativas: [
        "Permitir escolher um integrante disponível para continuar.",
        "Encerrar a partida imediatamente como derrota definitiva.",
        "Restaurar todos os pontos de vida sem escolha.",
        "Apagar o progresso da equipe.",
      ],
      resposta: "Permitir escolher um integrante disponível para continuar.",
    },
    {
      pergunta:
        "Em um jogo por equipes, o personagem ativo foi derrotado e não há mais integrantes disponíveis. Qual deve ser o resultado?",
      alternativas: [
        "A partida deve terminar com a derrota dessa equipe.",
        "O personagem deve ser considerado invencível.",
        "A equipe adversária deve ser apagada.",
        "A partida deve continuar sem personagens.",
      ],
      resposta: "A partida deve terminar com a derrota dessa equipe.",
    },
    {
      pergunta: 'Observe `let frutas = ["maçã", "pera", "uva"]; frutas.pop();`. O que `pop()` faz?',
      alternativas: [
        "Remove o último elemento do array.",
        "Remove o primeiro elemento do array.",
        "Adiciona um elemento no início do array.",
        "Ordena o array.",
      ],
      resposta: "Remove o último elemento do array.",
    },
    {
      pergunta:
        "Considere `let numeros = [4, 8, 12]; numeros.pop(); console.log(numeros.length);`. Qual valor será exibido?",
      alternativas: ["2", "3", "4", "12"],
      resposta: "2",
    },
    {
      pergunta: "Em uma batalha por equipes, por que registrar quais personagens foram derrotados?",
      alternativas: [
        "Para impedir que um personagem derrotado seja selecionado como reserva.",
        "Para aumentar o dano de todos os ataques.",
        "Para transformar derrotas em vitórias.",
        "Para escolher perguntas aleatoriamente.",
      ],
      resposta: "Para impedir que um personagem derrotado seja selecionado como reserva.",
    },
    {
      pergunta:
        "Em uma aplicação que acompanha várias tarefas, o que uma variável chamada `tarefaAtual` pode representar?",
      alternativas: [
        "A tarefa que está sendo exibida ou trabalhada naquele momento.",
        "Todas as tarefas possíveis do mundo.",
        "A largura da janela do navegador.",
        "A quantidade de caracteres do código-fonte.",
      ],
      resposta: "A tarefa que está sendo exibida ou trabalhada naquele momento.",
    },
    {
      pergunta:
        "Em um programa que guarda uma lista de tarefas e também destaca uma tarefa selecionada, qual diferença esses dados representam?",
      alternativas: [
        "A lista contém vários itens; o dado selecionado representa o item atual.",
        "A lista guarda apenas números; o item atual guarda apenas textos.",
        "Os dois dados sempre precisam ter o mesmo valor.",
        "O item selecionado contém automaticamente todos os itens da lista.",
      ],
      resposta: "A lista contém vários itens; o dado selecionado representa o item atual.",
    },
    {
      pergunta: "O que a condição `equipe.length > 0` verifica quando `equipe` é um array?",
      alternativas: [
        "Se o array contém pelo menos um elemento.",
        "Se todos os elementos são números.",
        "Se o array está ordenado.",
        "Se o último elemento foi removido.",
      ],
      resposta: "Se o array contém pelo menos um elemento.",
    },
    {
      pergunta:
        "Qual estrutura é responsável por executar um bloco de código somente quando uma condição é verdadeira?",
      alternativas: ["if", "array", "push", "function"],
      resposta: "if",
    },
    {
      pergunta:
        "Em programação, por que uma função pode criar uma cópia de um objeto antes de ele ser alterado?",
      alternativas: [
        "Para preservar os dados do objeto original enquanto se trabalha com a cópia.",
        "Para apagar todos os objetos do programa.",
        "Para converter qualquer objeto em uma imagem.",
        "Para impedir que a função receba argumentos.",
      ],
      resposta: "Para preservar os dados do objeto original enquanto se trabalha com a cópia.",
    },
    {
      pergunta:
        "Por que cópias independentes de um objeto podem ser úteis ao simular duas compras diferentes?",
      alternativas: [
        "Cada compra pode alterar seus próprios dados sem modificar os dados da outra.",
        "A cópia sempre ocupa menos memória.",
        "A cópia converte os valores automaticamente em números.",
        "Objetos copiados não podem ser alterados.",
      ],
      resposta: "Cada compra pode alterar seus próprios dados sem modificar os dados da outra.",
    },
    {
      pergunta:
        "Em uma batalha por equipes, o que normalmente deve ser verificado quando o personagem ativo chega a zero pontos de vida?",
      alternativas: [
        "Se há outro integrante disponível ou se a equipe foi derrotada.",
        "Se o navegador precisa ser fechado.",
        "Se todos os ataques devem ser apagados.",
        "Se a tela deve mudar para modo escuro.",
      ],
      resposta: "Se há outro integrante disponível ou se a equipe foi derrotada.",
    },
    {
      pergunta:
        "Em um jogo por equipes, qual é a utilidade de registrar os personagens que já foram derrotados?",
      alternativas: [
        "Controlar o estado da partida e não oferecer personagens indisponíveis.",
        "Guardar somente os comandos digitados.",
        "Calcular a resolução da tela.",
        "Substituir os dados do adversário.",
      ],
      resposta: "Controlar o estado da partida e não oferecer personagens indisponíveis.",
    },
    {
      pergunta:
        "Em um jogo com equipes, qual é a finalidade de verificar repetidamente se ainda há personagens aptos a agir?",
      alternativas: [
        "Manter a partida em andamento até que uma das equipes não tenha mais integrantes disponíveis.",
        "Recarregar o navegador a cada turno.",
        "Repetir o mesmo ataque sem parar.",
        "Apagar os dados da equipe vencedora.",
      ],
      resposta:
        "Manter a partida em andamento até que uma das equipes não tenha mais integrantes disponíveis.",
    },
    {
      pergunta: "Qual é a principal diferença entre `let` e `var` quanto ao escopo?",
      alternativas: [
        "`let` tem escopo de bloco; `var` tem escopo de função.",
        "`var` só pode ser usada em números.",
        "`let` cria automaticamente uma constante.",
        "Não há diferença de escopo entre elas.",
      ],
      resposta: "`let` tem escopo de bloco; `var` tem escopo de função.",
    },
    {
      pergunta:
        "Qual operador lógico retorna verdadeiro somente quando as duas condições são verdadeiras?",
      alternativas: ["||", "&&", "!", "??"],
      resposta: "&&",
    },
    {
      pergunta: "Em JavaScript, qual valor booleano representa uma condição falsa?",
      alternativas: ['"false"', "0", "false", "null"],
      resposta: "false",
    },
    {
      pergunta: "Qual expressão transforma o número 42 em texto?",
      alternativas: ["String(42)", 'Number("42")', "Boolean(42)", 'parseFloat("texto")'],
      resposta: "String(42)",
    },
    {
      pergunta: 'Qual método converte o texto "8.5" em número decimal?',
      alternativas: [
        'parseFloat("8.5")',
        "JSON.stringify(8.5)",
        "String(8.5)",
        'Array.isArray("8.5")',
      ],
      resposta: 'parseFloat("8.5")',
    },
    {
      pergunta: "O que `return` faz quando é executado dentro de uma função?",
      alternativas: [
        "Encerra a execução da função e pode devolver um valor.",
        "Repete a função para sempre.",
        "Cria uma variável global automaticamente.",
        "Exibe uma janela no navegador.",
      ],
      resposta: "Encerra a execução da função e pode devolver um valor.",
    },
    {
      pergunta: 'Qual é o resultado de `"maçã".toUpperCase()`?',
      alternativas: ['"MAÇÃ"', '"maçã"', '"Maçã"', "Um erro por ser texto."],
      resposta: '"MAÇÃ"',
    },
    {
      pergunta: "Para que serve `Array.isArray(valor)`?",
      alternativas: [
        "Verificar se o valor é um array.",
        "Ordenar os elementos do array.",
        "Somar os números do array.",
        "Converter qualquer valor em texto.",
      ],
      resposta: "Verificar se o valor é um array.",
    },
    {
      pergunta: "O que o operador `?.` permite ao acessar uma propriedade?",
      alternativas: [
        "Interrompe o acesso com segurança se o valor anterior for `null` ou `undefined`.",
        "Converte a propriedade em número.",
        "Cria uma nova propriedade obrigatória.",
        "Compara dois objetos por conteúdo.",
      ],
      resposta: "Interrompe o acesso com segurança se o valor anterior for `null` ou `undefined`.",
    },
    {
      pergunta: "Qual é a finalidade do operador `...` usado para espalhar um array em outro?",
      alternativas: [
        "Copiar ou inserir seus elementos individualmente em outra estrutura.",
        "Apagar todos os elementos do array original.",
        "Transformar o array em uma função.",
        "Impedir a alteração de qualquer elemento.",
      ],
      resposta: "Copiar ou inserir seus elementos individualmente em outra estrutura.",
    },
    {
      pergunta: "O que é uma Promise em JavaScript?",
      alternativas: [
        "Um objeto que representa o resultado futuro de uma operação assíncrona.",
        "Um tipo de comentário de várias linhas.",
        "Uma forma de declarar uma constante.",
        "Um método que ordena arrays.",
      ],
      resposta: "Um objeto que representa o resultado futuro de uma operação assíncrona.",
    },
    {
      pergunta: "Para que serve o bloco `try...catch`?",
      alternativas: [
        "Executar código e tratar erros que ocorram durante a execução.",
        "Repetir um bloco enquanto uma condição for verdadeira.",
        "Criar uma classe sem construtor.",
        "Converter uma string em JSON automaticamente.",
      ],
      resposta: "Executar código e tratar erros que ocorram durante a execução.",
    },
    {
      pergunta:
        "Qual expressão seleciona, pela API do navegador, o elemento HTML cujo atributo `id` é `aviso`?",
      alternativas: [
        'document.getElementById("aviso")',
        'document.getElementsByClassName("aviso")',
        'Array.isArray("aviso")',
        'JSON.parse("aviso")',
      ],
      resposta: 'document.getElementById("aviso")',
    },
    {
      pergunta: "O que `preventDefault()` faz em um evento do navegador?",
      alternativas: [
        "Impede a ação padrão associada ao evento, quando aplicável.",
        "Apaga o elemento que recebeu o evento.",
        "Desativa todos os eventos da página.",
        "Fecha obrigatoriamente a aba.",
      ],
      resposta: "Impede a ação padrão associada ao evento, quando aplicável.",
    },
    {
      pergunta: "Qual característica descreve uma função assíncrona declarada com `async`?",
      alternativas: [
        "Ela sempre retorna uma Promise.",
        "Ela só pode receber números.",
        "Ela executa todo o código duas vezes.",
        "Ela não pode usar `return`.",
      ],
      resposta: "Ela sempre retorna uma Promise.",
    },
  ],
  HTML: [
    {
      pergunta: "Qual elemento HTML representa o conteúdo principal de uma página?",
      alternativas: ["<main>", "<footer>", "<aside>", "<small>"],
      resposta: "<main>",
    },
    {
      pergunta: "Qual atributo fornece uma descrição textual alternativa para uma imagem?",
      alternativas: ["title", "alt", "src", "name"],
      resposta: "alt",
    },
    {
      pergunta: "Qual elemento é usado para criar um link para outra página?",
      alternativas: ["<a>", "<link-text>", "<href>", "<url>"],
      resposta: "<a>",
    },
    {
      pergunta: "Qual elemento deve conter metadados e links para folhas de estilo?",
      alternativas: ["<head>", "<body>", "<main>", "<section>"],
      resposta: "<head>",
    },
    {
      pergunta: "Qual atributo associa um <label> ao campo de formulário correspondente?",
      alternativas: ["for", "target", "action", "method"],
      resposta: "for",
    },
    {
      pergunta: "Qual elemento representa um item de uma lista?",
      alternativas: ["<li>", "<ul>", "<ol>", "<list-item>"],
      resposta: "<li>",
    },
    {
      pergunta: "Qual elemento representa um cabeçalho introdutório de uma página ou seção?",
      alternativas: ["<header>", "<footer>", "<aside>", "<main>"],
      resposta: "<header>",
    },
    {
      pergunta: "Qual elemento costuma agrupar os principais links de navegação de um site?",
      alternativas: ["<nav>", "<figure>", "<address>", "<mark>"],
      resposta: "<nav>",
    },
    {
      pergunta: "Qual elemento representa o rodapé de uma página ou seção?",
      alternativas: ["<footer>", "<head>", "<summary>", "<title>"],
      resposta: "<footer>",
    },
    {
      pergunta: "Qual elemento é apropriado para um parágrafo de texto?",
      alternativas: ["<p>", "<h1>", "<br>", "<meta>"],
      resposta: "<p>",
    },
    {
      pergunta: "Qual elemento indica o título mais importante dentro do conteúdo da página?",
      alternativas: ["<h1>", "<caption>", "<strong>", "<title>"],
      resposta: "<h1>",
    },
    {
      pergunta: "Qual elemento cria uma lista ordenada, normalmente numerada?",
      alternativas: ["<ol>", "<ul>", "<li>", "<dl>"],
      resposta: "<ol>",
    },
    {
      pergunta: "Qual elemento cria uma lista sem ordem numérica, normalmente com marcadores?",
      alternativas: ["<ul>", "<ol>", "<li>", "<table>"],
      resposta: "<ul>",
    },
    {
      pergunta: "Qual atributo de um link define o endereço para o qual ele leva?",
      alternativas: ["href", "src", "alt", "action"],
      resposta: "href",
    },
    {
      pergunta: "Qual atributo de uma imagem informa o caminho do arquivo de imagem?",
      alternativas: ["src", "href", "for", "value"],
      resposta: "src",
    },
    {
      pergunta: "Em uma tabela HTML, qual elemento representa uma linha?",
      alternativas: ["<tr>", "<td>", "<th>", "<thead>"],
      resposta: "<tr>",
    },
    {
      pergunta: "Qual elemento representa uma célula de cabeçalho em uma tabela?",
      alternativas: ["<th>", "<td>", "<tr>", "<caption>"],
      resposta: "<th>",
    },
    {
      pergunta:
        "Qual elemento contém campos e controles para enviar dados preenchidos pelo usuário?",
      alternativas: ["<form>", "<table>", "<article>", "<canvas>"],
      resposta: "<form>",
    },
    {
      pergunta:
        "Qual valor de `type` em um `<input>` oferece um campo apropriado para endereço de e-mail?",
      alternativas: ["email", "image", "file", "range"],
      resposta: "email",
    },
    {
      pergunta: "Qual atributo torna obrigatório preencher um campo de formulário antes do envio?",
      alternativas: ["required", "checked", "download", "autofocus"],
      resposta: "required",
    },
    {
      pergunta: "Qual elemento define o título mostrado na aba do navegador?",
      alternativas: ["<title>", "<h1>", "<header>", "<label>"],
      resposta: "<title>",
    },
    {
      pergunta: "Qual atributo do elemento `<html>` informa o idioma principal do documento?",
      alternativas: ["lang", "charset", "dir", "rel"],
      resposta: "lang",
    },
    {
      pergunta:
        "Qual declaração de codificação é normalmente usada para exibir corretamente caracteres acentuados em português?",
      alternativas: [
        '<meta charset="UTF-8">',
        '<meta name="author">',
        '<link rel="icon">',
        "<title>UTF-8</title>",
      ],
      resposta: '<meta charset="UTF-8">',
    },
    {
      pergunta:
        "Qual elemento semântico representa conteúdo independente que poderia ser distribuído separadamente, como uma notícia?",
      alternativas: ["<article>", "<span>", "<br>", "<input>"],
      resposta: "<article>",
    },
    {
      pergunta:
        "Qual elemento semântico é adequado para conteúdo complementar, como uma barra lateral?",
      alternativas: ["<aside>", "<main>", "<title>", "<label>"],
      resposta: "<aside>",
    },
    {
      pergunta:
        "Qual elemento HTML permite incluir ou referenciar código JavaScript em uma página?",
      alternativas: ["<script>", "<style>", "<source>", "<codebase>"],
      resposta: "<script>",
    },
  ],
  Facil: [
    {
      pergunta: "Qual é a capital do Brasil?",
      alternativas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      resposta: "Brasília",
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      alternativas: ["Vênus", "Terra", "Júpiter", "Saturno"],
      resposta: "Júpiter",
    },
    {
      pergunta: "Quanto é 1+1?",
      alternativas: ["1", "2", "22", "11"],
      resposta: "2",
    },
    {
      pergunta: "Qual animal é conhecido por latir?",
      alternativas: ["Gato", "Cachorro", "Peixe", "Tartaruga"],
      resposta: "Cachorro",
    },
    {
      pergunta: "Qual a capital dos Estados Unidos?",
      alternativas: ["Nova York", "São Paulo", "Washington, D.C.", "Salvador"],
      resposta: "Washington, D.C.",
    },
    {
      pergunta: "Quantos dias há em uma semana?",
      alternativas: ["5", "6", "7", "8"],
      resposta: "7",
    },
    {
      pergunta: "Qual animal é conhecido por miar?",
      alternativas: ["Cachorro", "Gato", "Cavalo", "Peixe"],
      resposta: "Gato",
    },
    {
      pergunta: "Quanto é 5 × 6?",
      alternativas: ["11", "25", "30", "35"],
      resposta: "30",
    },
    {
      pergunta: "Qual destes é um meio de transporte aéreo?",
      alternativas: ["Avião", "Bicicleta", "Barco", "Ônibus"],
      resposta: "Avião",
    },
    {
      pergunta: "Qual estação do ano costuma vir depois do inverno no Brasil?",
      alternativas: ["Outono", "Primavera", "Verão", "Inverno"],
      resposta: "Primavera",
    },
  ],
};

("use strict");

// Estado da partida: equipes dos dois jogadores, dois bots, tema de cada jogador e turno atual.

const equipes = {
  jogadores: [[], []],
  bots: [[], []],
};
const indicesAtivos = {
  jogadores: [0, 0],
  bots: [0, 0],
};
const nocautePendenteJogadores = [false, false];
function removerDerrotado2vB(lado, indiceSlot, pokemon) {
  const equipe = equipes[lado][indiceSlot],
    indice = equipe.indexOf(pokemon);
  if (indice < 0) return;
  equipe.splice(indice, 1);
  const ativo = indicesAtivos[lado][indiceSlot];
  if (lado === "jogadores") {
    if (indice === ativo) {
      indicesAtivos.jogadores[indiceSlot] = -1;
      nocautePendenteJogadores[indiceSlot] = true;
    } else if (indice < ativo) indicesAtivos.jogadores[indiceSlot] = ativo - 1;
  } else if (indice < ativo) indicesAtivos.bots[indiceSlot] = ativo - 1;
  else if (indice === ativo) indicesAtivos.bots[indiceSlot] = Math.min(indice, equipe.length - 1);
}
function removerDerrotadoPorReferencia2vB(pokemon) {
  for (const lado of ["jogadores", "bots"])
    for (let slot = 0; slot < equipes[lado].length; slot++)
      if (equipes[lado][slot].includes(pokemon)) {
        removerDerrotado2vB(lado, slot, pokemon);
        return;
      }
}
const temas = [null, null];

let jogadorEscolhendo = 0,
  turno = 0,
  golpeEscolhido = null,
  jogadorDaAcao = null,
  alvoEscolhido = null,
  perguntaAtual = null,
  partidaEncerrada = false,
  trocaObrigatoria = false,
  trocaPivo = false,
  ultimoGolpePodeRetornar = false;

let acoesDaRodada = [],
  acoesPendentes = [];

// Atalhos para elementos da página e nomes de participantes usados nas mensagens.

const $ = (id) => document.getElementById(id);

const selecao = $("selecao-pokemon"),
  arena = $("arena-batalha"),
  lista = $("lista-pokemon"),
  msg = $("mensagem-batalha");

const nomesTurno = ["Jogador 1", "Jogador 2", "Bot 1", "Bot 2"];

const temaBotoes = [...document.querySelectorAll(".TemaDeEstudos")];

// Copia os dados-base de um Pokémon e inicializa seus pontos de vida para esta partida.

function clonarPokemon(base) {
  const p = JSON.parse(JSON.stringify(base));
  p.hpMax = Number(p.hpMax || p.hpmax || 100);
  p.hp = p.hpMax;
  return p;
}

// Cria o catálogo clicável a partir dos mesmos dados de Pokémon usados pelos outros modos.

function montarCatalogo() {
  lista.innerHTML = "";
  pokemons.forEach((p) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pokemon-opcao";
    b.dataset.nome = p.nome;
    const nome = document.createElement("span");
    nome.textContent = p.nome;
    b.appendChild(nome);
    const tags = p.tags || [];
    if (tags.includes("lendario") || tags.includes("mega")) {
      const tag = document.createElement("small");
      tag.className = "tag-pokemon";
      tag.textContent =
        tags.includes("mega") && tags.includes("lendario")
          ? "Lendário · Mega"
          : tags.includes("mega")
            ? "Mega"
            : "Lendário";
      b.appendChild(tag);
    }
    b.addEventListener("click", () => escolherPokemon(p.nome));
    lista.appendChild(b);
  });
}

// Atualiza a etapa de preparação e mostra qual jogador deve escolher tema e Pokémon.

function atualizarPreparacao() {
  const nome = "Jogador " + (jogadorEscolhendo + 1);

  const rotulosTema = {
    "Vestibulinho-Etec": "Vestibulinho Etec",
    JavaScript: "JavaScript",
    HTML: "HTML",
    Facil: "Fácil",
  };

  $("titulo-tema").textContent = "Tema de estudos — " + nome;
  $("resumo-escolhas").textContent =
    "J1: " +
    (rotulosTema[temas[0]] || "tema pendente") +
    " · equipe " +
    equipes.jogadores[0].length +
    "/6 (" +
    resumoVagasEquipe(equipes.jogadores[0]) +
    ") | J2: " +
    (rotulosTema[temas[1]] || "tema pendente") +
    " · equipe " +
    equipes.jogadores[1].length +
    "/6 (" +
    resumoVagasEquipe(equipes.jogadores[1]) +
    ")";
  temaBotoes.forEach((b) => b.classList.toggle("selecionado", b.id === temas[jogadorEscolhendo]));

  const nomesDaEquipe = new Set(equipes.jogadores[jogadorEscolhendo].map((p) => p.nome));
  document.querySelectorAll(".pokemon-opcao").forEach((b) => {
    const nome = b.dataset.nome,
      selecionado = nomesDaEquipe.has(nome);
    const escolhidoPeloOutro = equipes.jogadores[1 - jogadorEscolhendo].some(
      (p) => p.nome === nome,
    );
    b.classList.toggle("pokemon-selecionado", selecionado);
    b.disabled = escolhidoPeloOutro && !selecionado;
  });

  const completo =
    Boolean(temas[jogadorEscolhendo]) && equipes.jogadores[jogadorEscolhendo].length === 6;
  const btn = $("btn-iniciar-batalha");
  btn.disabled = !completo;
  btn.style.display = "block";
  btn.textContent = completo
    ? jogadorEscolhendo === 0
      ? "Confirmar equipe do Jogador 1 e passar ao Jogador 2"
      : "Começar batalha"
    : !temas[jogadorEscolhendo]
      ? "Escolha o tema de estudos"
      : "Escolha " +
        Math.max(0, 6 - equipes.jogadores[jogadorEscolhendo].length) +
        " Pokémon para completar a equipe";
}

// Guarda o tema selecionado para o jogador da etapa atual.

temaBotoes.forEach((b) =>
  b.addEventListener("click", () => {
    temas[jogadorEscolhendo] = b.id;
    atualizarPreparacao();
  }),
);

// Adiciona ou remove Pokémon da equipe atual, com limite de seis e sem duplicatas entre jogadores.

function escolherPokemon(nome) {
  const base = pokemons.find((p) => p.nome === nome);
  if (!base) return;
  const equipe = equipes.jogadores[jogadorEscolhendo],
    indice = equipe.findIndex((p) => p.nome === nome);

  if (indice >= 0) {
    equipe.splice(indice, 1);
  } else {
    if (equipes.jogadores[1 - jogadorEscolhendo].some((p) => p.nome === nome)) {
      msg.textContent = "Esse Pokémon já foi escolhido pelo outro jogador.";
      return;
    }
    if (equipe.length >= 6) {
      msg.textContent = "A equipe já tem seis Pokémon. Clique em um selecionado para removê-lo.";
      return;
    }

    const bloqueio = regraEquipe(base, equipe);

    if (bloqueio) {
      msg.textContent = bloqueio;
      return;
    }

    equipe.push(clonarPokemon(base));
  }

  atualizarPreparacao();
}

// Sorteia seis Pokémon diferentes para cada bot, sem repetir os Pokémon escolhidos pelos jogadores.

function criarBots() {
  const usados = new Set(equipes.jogadores.flat().map((p) => p.nome));
  for (let i = 0; i < 2; i++) {
    equipes.bots[i] = [];
    while (equipes.bots[i].length < 6) {
      const opcoes = pokemons.filter(
        (p) => !usados.has(p.nome) && !regraEquipe(p, equipes.bots[i]),
      );
      if (!opcoes.length) break;
      const base = opcoes[Math.floor(Math.random() * opcoes.length)];
      usados.add(base.nome);
      equipes.bots[i].push(clonarPokemon(base));
    }
  }
}

// Retorna o Pokémon ativo de um participante ou o próximo membro vivo da equipe.
function pokemonAtivo(lado, indice) {
  const p = equipes[lado][indice][indicesAtivos[lado][indice]];
  return p && p.hp > 0 ? p : null;
}
function ajustarAtivos() {
  equipes.bots.forEach((equipe, i) => {
    if (equipe[indicesAtivos.bots[i]]?.hp > 0) return;
    const proximo = equipe.findIndex((p) => p.hp > 0);
    if (proximo >= 0) indicesAtivos.bots[i] = proximo;
  });
}

// Preenche nome, nível, imagem e barras de vida dos quatro Pokémon.
function atualizarArena() {
  ajustarAtivos();
  if (window.processarEntradasHabilidadePokemon)
    window.processarEntradasHabilidadePokemon([
      {
        chave: "2vB-bot-1",
        pokemon: pokemonAtivo("bots", 0),
        adversarios: [pokemonAtivo("jogadores", 0), pokemonAtivo("jogadores", 1)],
      },
      {
        chave: "2vB-bot-2",
        pokemon: pokemonAtivo("bots", 1),
        adversarios: [pokemonAtivo("jogadores", 0), pokemonAtivo("jogadores", 1)],
      },
      {
        chave: "2vB-jogador-1",
        pokemon: pokemonAtivo("jogadores", 0),
        adversarios: [pokemonAtivo("bots", 0), pokemonAtivo("bots", 1)],
      },
      {
        chave: "2vB-jogador-2",
        pokemon: pokemonAtivo("jogadores", 1),
        adversarios: [pokemonAtivo("bots", 0), pokemonAtivo("bots", 1)],
      },
    ]);
  const todos = [
    pokemonAtivo("bots", 0),
    pokemonAtivo("bots", 1),
    pokemonAtivo("jogadores", 0),
    pokemonAtivo("jogadores", 1),
  ];
  const ids = ["bot-1", "bot-2", "jogador-1", "jogador-2"];
  todos.forEach((p, i) => {
    if (!p) {
      $("nome-" + ids[i]).textContent = "Sem Pokémon";
      $("nivel-" + ids[i]).textContent = "";
      $("imagem-" + ids[i]).src = "";
      $("hp-" + ids[i]).style.width = "0%";
      $("texto-hp-" + ids[i]).textContent = "Equipe derrotada";
      $("combatente-" + ids[i]).classList.add("derrotado");
      return;
    }
    const sufixo = ids[i];
    $("nome-" + sufixo).textContent = p.nome;
    $("nivel-" + sufixo).textContent = "Lv. " + (p.nivel || 50);
    $("imagem-" + sufixo).src = p.imagem;
    $("imagem-" + sufixo).alt = p.nome;
    $("hp-" + sufixo).style.width = Math.max(0, (p.hp / p.hpMax) * 100) + "%";
    $("texto-hp-" + sufixo).textContent = Math.max(0, p.hp) + " / " + p.hpMax;
    if (window.atualizarIndicadoresPokemon) window.atualizarIndicadoresPokemon(p, sufixo);
    $("combatente-" + sufixo).classList.toggle("derrotado", p.hp <= 0);
  });
}

// Destaca o atacante e os alvos por mais de um instante para deixar o resultado visível.
function destacarAtaque(idAtacante, idsAlvos = [], cura = false) {
  const classeAtacante = cura ? "animacao-cura" : "animacao-atacante";
  [idAtacante, ...idsAlvos].forEach((id) => {
    const card = $(id);
    if (!card) return;
    card.classList.remove("animacao-atacante", "animacao-impacto", "animacao-cura");
    void card.offsetWidth;
    card.classList.add(id === idAtacante ? classeAtacante : "animacao-impacto");
    setTimeout(
      () => card.classList.remove("animacao-atacante", "animacao-impacto", "animacao-cura"),
      1250,
    );
  });
}

// Troca da tela de preparação para a arena e inicia a rodada pelo Jogador 1.
function iniciarBatalha() {
  criarBots();
  selecao.style.display = "none";
  arena.style.display = "flex";
  atualizarArena();
  iniciarRodada();
}
$("btn-iniciar-batalha").addEventListener("click", () => {
  if (!temas[jogadorEscolhendo] || equipes.jogadores[jogadorEscolhendo].length !== 6) return;
  if (jogadorEscolhendo === 0) {
    jogadorEscolhendo = 1;
    atualizarPreparacao();
    msg.textContent = "Passe o dispositivo ao Jogador 2 para fazer suas escolhas.";
    return;
  }
  iniciarBatalha();
});

// Calcula efetividade usando a tabela de tipos reaproveitada dos arquivos enviados.
function multiplicador(tipo, tipos) {
  return (tipos || []).reduce((total, t) => total * (efetividadeTipos[tipo]?.[t] ?? 1), 1);
}

// Escolhe uma questão aleatória do tema do jogador, evitando repetir a última quando possível.
const ultimaQuestao = [null, null];
function sortearQuestao(indice) {
  const banco = questoes[temas[indice]] || questoes.Facil || [];
  if (!banco.length) return null;
  let opcoes = banco.filter((q) => q !== ultimaQuestao[indice]);
  if (!opcoes.length) opcoes = banco;
  const q = opcoes[Math.floor(Math.random() * opcoes.length)];
  ultimaQuestao[indice] = q;
  return q;
}

// Abre a pergunta vinculada ao golpe escolhido; resposta errada consome a ação do turno.
function abrirQuestao() {
  perguntaAtual = sortearQuestao(jogadorDaAcao);
  $("texto-questao").textContent =
    perguntaAtual?.pergunta || "Não há perguntas disponíveis para este tema.";
  perguntaAtual.alternativas.forEach((texto, i) => {
    const b = $("alternativa-" + i);
    b.textContent = texto;
    b.disabled = false;
  });
  $("menu-golpes").style.display = "none";
  $("area-questao").style.display = "grid";
}

// Prepara os botões de seleção de alvo apenas com bots que ainda estão em combate.
function mostrarAlvos() {
  const area = $("alvos-golpe");
  area.innerHTML = "";
  [1, 2, 3, 4, 5].forEach((i) => ($("golpe-" + i).style.display = "none"));
  $("btn-voltar").style.display = "none";
  equipes.bots.forEach((equipe, i) => {
    const p = pokemonAtivo("bots", i);
    if (!p) return;
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "Atacar Bot " + (i + 1) + " — " + p.nome;
    b.addEventListener("click", () => {
      alvoEscolhido = i;
      abrirQuestao();
    });
    area.appendChild(b);
  });
  $("menu-golpes").style.display = "grid";
  $("menu-acoes").style.display = "none";
}

// Mostra os quatro golpes do Pokémon do jogador ativo.
function mostrarGolpes() {
  // Prepara os golpes do Pokémon atual e decide se algum exige alvo.
  jogadorDaAcao = turno;
  const pokemon = pokemonAtivo("jogadores", jogadorDaAcao);

  pokemon.golpes.slice(0, 5).forEach((golpe, indice) => {
    const botao = $("golpe-" + (indice + 1));
    const tipo = ehMultiAlvo(golpe)
      ? " — área"
      : ehCuraDireta(golpe)
        ? " — cura"
        : ehBuffDireto(golpe)
          ? " — buff"
          : "";

    botao.textContent = golpe.nome + tipo;
    botao.disabled = false;
    botao.style.display = "block";
    botao.onclick = () => {
      golpeEscolhido = golpe;
      if (ehMultiAlvo(golpe) || ehCuraDireta(golpe) || ehBuffDireto(golpe)) {
        alvoEscolhido = null;
        abrirQuestao();
      } else {
        mostrarAlvos();
      }
    };
  });

  for (let indice = pokemon.golpes.length + 1; indice <= 5; indice++) {
    $("golpe-" + indice).style.display = "none";
  }
  $("btn-voltar").style.display = "block";
  $("menu-acoes").style.display = "none";
  $("menu-golpes").style.display = "grid";
  $("alvos-golpe").innerHTML = "";
}

// Informa quem recebe um golpe de área: adversários ou todos os outros combatentes.
function tipoAlvoArea(golpe) {
  const nome = String(golpe.nome || "")
    .trim()
    .toLowerCase();
  if (golpe.alvos === "todos" || golpe.alvo === "todos" || golpe.multiAlvo === true) return "todos";
  if (golpe.alvos === "adversarios" || golpe.alvo === "adversarios") return "adversarios";
  const todosOsOutros = new Set([
    "earthquake",
    "surf",
    "discharge",
    "bulldoze",
    "petal blizzard",
    "lava plume",
  ]);
  const soAdversarios = new Set([
    "rock slide",
    "dazzling gleam",
    "blizzard",
    "heat wave",
    "hyper voice",
    "icy wind",
    "electroweb",
    "muddy water",
    "water spout",
    "origin pulse",
    "precipice blades",
    "eruption",
    "boomburst",
    "snarl",
    "razor leaf",
    "breaking swipe",
    "astral barrage",
    "glacial lance",
    "make it rain",
    "clanging scales",
  ]);
  if (todosOsOutros.has(nome)) return "todos";
  if (soAdversarios.has(nome)) return "adversarios";
  return null;
}
function ehMultiAlvo(golpe) {
  return tipoAlvoArea(golpe) !== null;
}
function ehGolpeDeRetorno(golpe) {
  const nome = String(golpe?.nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  return ["uturn", "voltswitch", "flipturn"].includes(nome);
}

// Recuperação integrada: golpes de drenagem curam uma fração do dano causado e golpes de cura usam o HP máximo.
const efeitosDeRecuperacao = {
  drainpunch: { drenagem: 0.5 },
  leechlife: { drenagem: 0.5 },
  gigadrain: { drenagem: 0.5 },
  oblivionwing: { drenagem: 0.75 },
  bitterblade: { drenagem: 0.5 },
  recover: { cura: 0.5 },
  roost: { cura: 0.5 },
  synthesis: { cura: 0.5 },
  moonlight: { cura: 0.5 },
  softboiled: { cura: 0.5 },
  rest: { cura: 1 },
};
function efeitoDeRecuperacao(golpe) {
  const chave = String(golpe.nome || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const salvo = efeitosDeRecuperacao[chave] || {};
  return {
    cura: Number(golpe.cura ?? golpe.heal ?? salvo.cura ?? 0),
    drenagem: Number(golpe.drain ?? salvo.drenagem ?? 0),
  };
}
function ehCuraDireta(golpe) {
  return Number(golpe.dano || 0) <= 0 && efeitoDeRecuperacao(golpe).cura > 0;
}

// Identifica golpes sem dano que alteram o próprio Pokémon, como Swords Dance.
function ehBuffDireto(golpe) {
  if (Number(golpe?.dano || 0) > 0) return false;
  const efeito = efeitosGolpeCompetitivo[chaveGolpeCompetitivo(golpe)] || {};
  const efeitoStatus = window.obterEfeitoStatusPokemon?.(golpe) || {};
  return Boolean(
    efeito.buff ||
      efeito.selfDebuff ||
      efeito.heal ||
      efeitoStatus.selfStatus ||
      efeitoStatus.curarAtacante ||
      efeitoStatus.curarEquipe,
  );
}

// Destaca em verde a caixa do Pokémon durante a aplicação de um buff próprio.
function destacarBuff(id) {
  const card = $(id);
  if (!card) return;
  card.classList.add("efeito-buff");
  setTimeout(() => card.classList.remove("efeito-buff"), 1400);
}

// Abre a troca do Pokémon ativo pelo membro vivo escolhido na equipe reserva.
function abrirTroca(obrigatoria = false, pivo = false) {
  trocaObrigatoria = obrigatoria;
  trocaPivo = pivo;
  const area = $("area-troca"),
    opcoes = $("opcoes-troca"),
    equipe = equipes.jogadores[turno],
    atual = indicesAtivos.jogadores[turno];
  $("area-troca").querySelector("h2").textContent = pivo
    ? "O golpe permitiu uma troca. Escolha quem vai entrar:"
    : obrigatoria
      ? "Seu Pokémon foi derrotado. Escolha quem vai entrar:"
      : "Escolha um Pokémon para entrar";
  $("btn-cancelar-troca").style.display = obrigatoria || pivo ? "none" : "block";
  opcoes.innerHTML = "";
  const reservas = equipe
    .map((p, i) => ({ pokemon: p, indice: i }))
    .filter((item) => item.indice !== atual && item.pokemon.hp > 0);
  if (!reservas.length) {
    msg.textContent = "Não há Pokémon vivos na reserva para trocar.";
    return;
  }
  reservas.forEach(({ pokemon, indice }) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.textContent = pokemon.nome + " — HP " + pokemon.hp + "/" + pokemon.hpMax;
    botao.addEventListener("click", () => {
      area.style.display = "none";
      if (trocaObrigatoria) {
        indicesAtivos.jogadores[turno] = indice;
        nocautePendenteJogadores[turno] = false;
        trocaObrigatoria = false;
        trocaPivo = false;
        $("btn-cancelar-troca").style.display = "block";
        atualizarArena();
        msg.textContent =
          pokemon.nome + (pivo ? " entrou após o golpe de retirada." : " entrou em campo.");
        resolverProximaAcao();
      } else {
        // A troca acontece agora e consome a ação do jogador nesta rodada.
        indicesAtivos.jogadores[turno] = indice;
        nocautePendenteJogadores[turno] = false;
        atualizarArena();
        msg.textContent = pokemon.nome + " entrou em campo. Este jogador não atacará nesta rodada.";
        if (turno === 0) {
          turno = 1;
          mostrarTurno();
        } else iniciarResolucaoRodada();
      }
    });
    opcoes.appendChild(botao);
  });
  $("menu-acoes").style.display = "none";
  area.style.display = "block";
}

// Aplica dano, efetividade e crítico e atualiza a arena após uma resposta correta.
function aplicarGolpe() {
  ultimoGolpePodeRetornar = false;
  const atacante = pokemonAtivo("jogadores", jogadorDaAcao),
    tipoArea = tipoAlvoArea(golpeEscolhido);
  const recuperacao = efeitoDeRecuperacao(golpeEscolhido);
  // Buffs próprios são aplicados sem pedir que o jogador selecione um alvo.
  if (ehBuffDireto(golpeEscolhido)) {
    const efeitos = aplicarEfeitoGolpeCompetitivo(
      atacante,
      atacante,
      golpeEscolhido,
      0,
      equipes.jogadores[jogadorDaAcao],
      jogadorDaAcao,
    );
    atualizarArena();
    destacarBuff("combatente-jogador-" + (jogadorDaAcao + 1));
    msg.textContent =
      atacante.nome +
      " usou " +
      golpeEscolhido.nome +
      " em si mesmo." +
      (efeitos.length ? " " + efeitos.join("; ") + "." : "");
    return;
  }
  if (ehCuraDireta(golpeEscolhido)) {
    const cura =
      recuperacao.cura <= 1
        ? Math.floor(atacante.hpMax * recuperacao.cura)
        : Math.floor(recuperacao.cura);
    const hpAntes = atacante.hp;
    atacante.hp = Math.min(atacante.hpMax, atacante.hp + cura);
    const efeitosCura = aplicarEfeitoGolpeCompetitivo(
      atacante,
      atacante,
      golpeEscolhido,
      0,
      equipes.jogadores[jogadorDaAcao],
      jogadorDaAcao,
      true,
    );
    atualizarArena();
    destacarAtaque("combatente-jogador-" + (jogadorDaAcao + 1), [], true);
    const recuperado = atacante.hp - hpAntes;
    msg.textContent =
      (recuperado > 0
        ? atacante.nome + " usou " + golpeEscolhido.nome + " e recuperou " + recuperado + " HP."
        : atacante.nome + " usou " + golpeEscolhido.nome + ", mas já está com o HP cheio.") +
      (efeitosCura.length ? " " + efeitosCura.join("; ") + "." : "");
    return;
  }
  const alvos = tipoArea
    ? [
        ...equipes.bots.map((_, i) => ({
          pokemon: pokemonAtivo("bots", i),
          nomeLado: "Bot " + (i + 1),
          cardId: "combatente-bot-" + (i + 1),
        })),
        ...(tipoArea === "todos"
          ? equipes.jogadores
              .map((_, i) =>
                i === jogadorDaAcao
                  ? null
                  : {
                      pokemon: pokemonAtivo("jogadores", i),
                      nomeLado: "Jogador " + (i + 1),
                      cardId: "combatente-jogador-" + (i + 1),
                    },
              )
              .filter(Boolean)
          : []),
      ].filter((item) => item.pokemon)
    : [
        {
          pokemon: pokemonAtivo("bots", alvoEscolhido),
          nomeLado: "Bot " + (alvoEscolhido + 1),
          cardId: "combatente-bot-" + (alvoEscolhido + 1),
        },
      ].filter((item) => item.pokemon);
  // Regra adotada neste modo didático: golpes de área causam 25% menos dano
  // quando atingem mais de um alvo ativo, conforme formatos modernos de duplas.
  const reducaoAlvo = tipoArea && alvos.length > 1 ? 0.75 : 1,
    resultados = [];
  let danoRealTotal = 0;
  alvos.forEach(({ pokemon, nomeLado }) => {
    const tipo = golpeEscolhido.tipo || golpeEscolhido.tipos || "Normal",
      efBase = multiplicador(tipo, pokemon.tipos),
      crit = Number(golpeEscolhido.dano || 0) > 0 && Math.random() < 1 / 16;
    const hpAntes = pokemon.hp,
      acertou = golpeAcertaCompetitivo(golpeEscolhido),
      bloqueio =
        acertou && window.bloqueioHabilidadePokemon
          ? window.bloqueioHabilidadePokemon(atacante, pokemon, golpeEscolhido, efBase)
          : null,
      ef = bloqueio ? 0 : efBase,
      poder = poderGolpeCompetitivo(golpeEscolhido, atacante),
      modHab =
        acertou && window.modificadorHabilidadePokemon
          ? window.modificadorHabilidadePokemon(atacante, pokemon, golpeEscolhido, efBase)
          : 1,
      dano =
        !acertou || ef === 0 || poder <= 0
          ? 0
          : Math.max(
              1,
              Math.floor(
                poder *
                  ef *
                  modificadorDanoCompetitivo(golpeEscolhido, atacante, pokemon, crit) *
                  modHab *
                  reducaoAlvo *
                  (crit ? 1.5 : 1),
              ),
            );
    if (acertou && ef > 0 && poder > 0 && ehGolpeDeRetorno(golpeEscolhido))
      ultimoGolpePodeRetornar = true;
    pokemon.hp = Math.max(0, pokemon.hp - dano);
    danoRealTotal += hpAntes - pokemon.hp;
    const efeitosHab =
        acertou && window.aplicarPosHabilidadePokemon
          ? window.aplicarPosHabilidadePokemon(
              atacante,
              pokemon,
              golpeEscolhido,
              hpAntes - pokemon.hp,
              { bloqueio },
            )
          : [],
      efeitos =
        acertou && !bloqueio
          ? aplicarEfeitoGolpeCompetitivo(
              atacante,
              pokemon,
              golpeEscolhido,
              hpAntes - pokemon.hp,
              equipes.jogadores[jogadorDaAcao],
              jogadorDaAcao,
              false,
              true,
            )
          : [];
    efeitos.push(...efeitosHab);
    if (pokemon.hp <= 0) {
      const ehBot = nomeLado.startsWith("Bot "),
        indiceSlot = Number(nomeLado.match(/(\d+)$/)?.[1]) - 1;
      removerDerrotado2vB(ehBot ? "bots" : "jogadores", indiceSlot, pokemon);
    }
    if (atacante.hp <= 0) removerDerrotadoPorReferencia2vB(atacante);
    resultados.push({ nome: nomeLado + " — " + pokemon.nome, dano, ef, crit, efeitos });
  });
  let hpRecuperado = 0;
  if (recuperacao.drenagem > 0 && danoRealTotal > 0) {
    const hpAntes = atacante.hp;
    atacante.hp = Math.min(
      atacante.hpMax,
      atacante.hp + Math.max(1, Math.floor(danoRealTotal * recuperacao.drenagem)),
    );
    hpRecuperado = atacante.hp - hpAntes;
  }
  atualizarArena();
  destacarAtaque(
    "combatente-jogador-" + (jogadorDaAcao + 1),
    alvos.map((alvo) => alvo.cardId),
  );
  const resumo = resultados
    .map(
      (r) =>
        r.nome +
        ": " +
        r.dano +
        " de dano" +
        (r.crit ? " (crítico)" : "") +
        (r.ef === 0
          ? " (sem efeito)"
          : r.ef > 1
            ? " (super efetivo)"
            : r.ef < 1
              ? " (pouco efetivo)"
              : "") +
        (r.efeitos?.length ? " — " + r.efeitos.join("; ") : ""),
    )
    .join("; ");
  const descricaoArea =
    tipoArea === "todos"
      ? " em todos os outros combatentes"
      : tipoArea === "adversarios"
        ? " nos adversários"
        : "";
  msg.textContent =
    atacante.nome +
    " usou " +
    golpeEscolhido.nome +
    descricaoArea +
    "! " +
    resumo +
    (hpRecuperado > 0 ? " " + atacante.nome + " recuperou " + hpRecuperado + " HP." : "");
}

// Registra a ação aprovada pela resposta; ela só causa efeito quando a fila da rodada for resolvida.
[0, 1, 2, 3].forEach((i) =>
  $("alternativa-" + i).addEventListener("click", () => {
    if (!perguntaAtual) return;
    const botoes = [0, 1, 2, 3].map((n) => $("alternativa-" + n));
    botoes.forEach((b) => (b.disabled = true));
    const acertou = botoes[i].textContent === perguntaAtual.resposta;
    $("area-questao").style.display = "none";
    if (acertou) {
      const ator = pokemonAtivo("jogadores", jogadorDaAcao);
      acoesDaRodada.push({
        tipo: "ataque",
        lado: "jogadores",
        indice: jogadorDaAcao,
        ator,
        golpe: golpeEscolhido,
        alvo: alvoEscolhido,
        prioridade: Number(golpeEscolhido.prioridade || 0),
        velocidade: window.velocidadeEfetivaPokemon
          ? window.velocidadeEfetivaPokemon(ator)
          : Number(ator?.velocidade || 0),
        desempate: Math.random(),
      });
      msg.textContent = "Resposta correta. O ataque foi registrado para a resolução da rodada.";
    } else {
      msg.textContent = "Resposta incorreta. O ataque não foi registrado.";
    }
    perguntaAtual = null;
    setTimeout(selecionarProximaAcaoHumana, 700);
  }),
);
// Define o resultado final quando todos os Pokémon de um dos lados forem derrotados.
function verificarFim() {
  if (equipes.bots.flat().length === 0) {
    encerrar("Jogadores venceram! As equipes dos bots foram derrotadas.");
    return true;
  }
  if (equipes.jogadores.flat().length === 0) {
    encerrar("Os bots venceram. As equipes dos jogadores foram derrotadas.");
    return true;
  }
  return false;
}
function encerrar(texto) {
  partidaEncerrada = true;
  $("menu-acoes").style.display = "none";
  $("menu-golpes").style.display = "none";
  $("area-questao").style.display = "none";
  $("area-troca").style.display = "none";
  msg.textContent = texto;
}

// Cada bot escolhe sua ação sem executá-la ainda, para participar da ordem por velocidade.
function criarAcaoBot(indice) {
  const bot = pokemonAtivo("bots", indice);
  if (!bot) return null;
  const golpes = bot.golpes || [],
    curas = golpes.filter(ehCuraDireta),
    buffs = golpes.filter(ehBuffDireto),
    ataques = golpes.filter((g) => Number(g.dano) > 0);
  const usarCura =
    curas.length > 0 && bot.hp <= bot.hpMax * 0.5 && (ataques.length === 0 || Math.random() < 0.7);
  const usarBuff = buffs.length > 0 && Math.random() < 0.25 && !usarCura;
  const disponiveis = usarCura ? curas : usarBuff ? buffs : ataques,
    g = disponiveis[Math.floor(Math.random() * disponiveis.length)] || {
      nome: "Investida",
      dano: 35,
      tipo: "Normal",
    };
  const alvos = equipes.jogadores
    .map((_, i) => (pokemonAtivo("jogadores", i) ? i : null))
    .filter((i) => i !== null);
  return {
    tipo: "ataque",
    lado: "bots",
    indice,
    ator: bot,
    golpe: g,
    alvo: alvos[Math.floor(Math.random() * alvos.length)],
    prioridade: Number(g.prioridade || 0),
    velocidade: window.velocidadeEfetivaPokemon
      ? window.velocidadeEfetivaPokemon(bot)
      : Number(bot.velocidade || 0),
    desempate: Math.random(),
  };
}

// Aplica a ação de um bot, incluindo cura, drenagem e golpes de área com dano aliado quando aplicável.
function aplicarAcaoBot(acao) {
  const bot = acao.ator,
    g = acao.golpe,
    recuperacao = efeitoDeRecuperacao(g);
  // O bot também aplica buffs em si mesmo sem escolher um Pokémon-alvo.
  if (ehBuffDireto(g)) {
    const efeitos = aplicarEfeitoGolpeCompetitivo(
      bot,
      bot,
      g,
      0,
      equipes.bots[acao.indice],
      acao.indice,
    );
    atualizarArena();
    destacarBuff("combatente-bot-" + (acao.indice + 1));
    msg.textContent =
      bot.nome +
      " usou " +
      g.nome +
      " em si mesmo." +
      (efeitos.length ? " " + efeitos.join("; ") + "." : "");
    return;
  }
  if (ehCuraDireta(g)) {
    const cura =
        recuperacao.cura <= 1
          ? Math.floor(bot.hpMax * recuperacao.cura)
          : Math.floor(recuperacao.cura),
      antes = bot.hp;
    bot.hp = Math.min(bot.hpMax, bot.hp + cura);
    const efeitosCura = aplicarEfeitoGolpeCompetitivo(
      bot,
      bot,
      g,
      0,
      equipes.bots[acao.indice],
      acao.indice,
      true,
    );
    atualizarArena();
    destacarAtaque("combatente-bot-" + (acao.indice + 1), [], true);
    msg.textContent =
      bot.nome +
      " usou " +
      g.nome +
      " e recuperou " +
      (bot.hp - antes) +
      " HP." +
      (efeitosCura.length ? " " + efeitosCura.join("; ") + "." : "");
    return;
  }
  let podeRetornar = false;
  const tipoArea = tipoAlvoArea(g),
    alvos = tipoArea
      ? [
          ...equipes.jogadores
            .map((_, i) => ({
              pokemon: pokemonAtivo("jogadores", i),
              nomeLado: "Jogador " + (i + 1),
              cardId: "combatente-jogador-" + (i + 1),
            }))
            .filter((x) => x.pokemon),
          ...(tipoArea === "todos"
            ? equipes.bots
                .map((_, i) =>
                  i === acao.indice
                    ? null
                    : {
                        pokemon: pokemonAtivo("bots", i),
                        nomeLado: "Bot " + (i + 1),
                        cardId: "combatente-bot-" + (i + 1),
                      },
                )
                .filter((x) => x && x.pokemon)
            : []),
        ]
      : [
          {
            pokemon: pokemonAtivo("jogadores", acao.alvo),
            nomeLado: "Jogador " + (acao.alvo + 1),
            cardId: "combatente-jogador-" + (acao.alvo + 1),
          },
        ].filter((x) => x.pokemon);
  const reducaoAlvo = tipoArea && alvos.length > 1 ? 0.75 : 1,
    resultados = [];
  let danoRealTotal = 0;
  alvos.forEach((alvo) => {
    const efBase = multiplicador(g.tipo || g.tipos || "Normal", alvo.pokemon.tipos),
      crit = Number(g.dano || 0) > 0 && Math.random() < 1 / 16,
      antes = alvo.pokemon.hp,
      acertou = golpeAcertaCompetitivo(g),
      bloqueio =
        acertou && window.bloqueioHabilidadePokemon
          ? window.bloqueioHabilidadePokemon(bot, alvo.pokemon, g, efBase)
          : null,
      ef = bloqueio ? 0 : efBase,
      poder = poderGolpeCompetitivo(g, bot),
      modHab =
        acertou && window.modificadorHabilidadePokemon
          ? window.modificadorHabilidadePokemon(bot, alvo.pokemon, g, efBase)
          : 1,
      dano =
        !acertou || ef === 0 || poder <= 0
          ? 0
          : Math.max(
              1,
              Math.floor(
                poder *
                  ef *
                  modificadorDanoCompetitivo(g, bot, alvo.pokemon, crit) *
                  modHab *
                  reducaoAlvo *
                  (crit ? 1.5 : 1),
              ),
            );
    alvo.pokemon.hp = Math.max(0, antes - dano);
    danoRealTotal += antes - alvo.pokemon.hp;
    if (acertou && ef > 0 && poder > 0 && ehGolpeDeRetorno(g)) podeRetornar = true;
    const efeitosHab =
        acertou && window.aplicarPosHabilidadePokemon
          ? window.aplicarPosHabilidadePokemon(bot, alvo.pokemon, g, antes - alvo.pokemon.hp, {
              bloqueio,
            })
          : [],
      efeitos =
        acertou && !bloqueio
          ? aplicarEfeitoGolpeCompetitivo(
              bot,
              alvo.pokemon,
              g,
              antes - alvo.pokemon.hp,
              equipes.bots[acao.indice],
              acao.indice,
              false,
              true,
            )
          : [];
    efeitos.push(...efeitosHab);
    if (alvo.pokemon.hp <= 0) {
      const ehBot = alvo.cardId.includes("bot-"),
        indiceSlot = Number(alvo.cardId.match(/(\d+)$/)?.[1]) - 1;
      removerDerrotado2vB(ehBot ? "bots" : "jogadores", indiceSlot, alvo.pokemon);
    }
    if (bot.hp <= 0) removerDerrotadoPorReferencia2vB(bot);
    resultados.push(
      alvo.nomeLado +
        " — " +
        alvo.pokemon.nome +
        ": " +
        dano +
        " de dano" +
        (crit ? " (crítico)" : "") +
        (ef === 0 ? " (sem efeito)" : "") +
        (!acertou ? " (errou)" : "") +
        (efeitos.length ? " — " + efeitos.join("; ") : ""),
    );
  });
  let curado = 0;
  if (recuperacao.drenagem > 0 && danoRealTotal > 0) {
    const antes = bot.hp;
    bot.hp = Math.min(
      bot.hpMax,
      bot.hp + Math.max(1, Math.floor(danoRealTotal * recuperacao.drenagem)),
    );
    curado = bot.hp - antes;
  }
  atualizarArena();
  destacarAtaque(
    "combatente-bot-" + (acao.indice + 1),
    alvos.map((alvo) => alvo.cardId),
  );
  msg.textContent =
    bot.nome +
    " usou " +
    g.nome +
    (tipoArea === "todos"
      ? " em todos os outros combatentes"
      : tipoArea === "adversarios"
        ? " nos adversários"
        : "") +
    "! " +
    resultados.join("; ") +
    (curado > 0 ? " " + bot.nome + " recuperou " + curado + " HP." : "");
  const reservas = equipes.bots[acao.indice]
    .map((p, i) => ({ p, i }))
    .filter((x) => x.p !== bot && x.p.hp > 0);
  if (podeRetornar && bot.hp > 0 && reservas.length) {
    const proximo = reservas[Math.floor(Math.random() * reservas.length)];
    indicesAtivos.bots[acao.indice] = proximo.i;
    atualizarArena();
    msg.textContent += " O bot enviou " + proximo.p.nome + " após o golpe.";
  }
}

// Passa do primeiro jogador para o segundo; após a escolha do segundo, prepara a fila de ações.
function selecionarProximaAcaoHumana() {
  if (partidaEncerrada) return;
  if (turno === 0) {
    turno = 1;
    mostrarTurno();
    return;
  }
  iniciarResolucaoRodada();
}

// Reúne as ações dos dois bots e ordena todas as ações por prioridade e velocidade.
function iniciarResolucaoRodada() {
  equipes.bots.forEach((_, i) => {
    const acao = criarAcaoBot(i);
    if (acao) acoesDaRodada.push(acao);
  });
  // Ordena os ataques registrados e os ataques dos bots por prioridade e velocidade.
  acoesPendentes = acoesDaRodada
    .slice()
    .sort(
      (a, b) =>
        b.prioridade - a.prioridade || b.velocidade - a.velocidade || a.desempate - b.desempate,
    );
  const ordem = acoesPendentes
    .map((a) => a.ator.nome + " (" + a.golpe.nome + ", velocidade " + a.velocidade + ")")
    .join(" → ");
  msg.textContent = "Ordem de ataque (maior velocidade primeiro): " + (ordem || "sem ataques");
  setTimeout(resolverProximaAcao, 700);
}

// Solicita uma escolha obrigatória se um Pokémon de jogador caiu e ainda há reservas vivas.
function pedirSubstituicaoSeNecessario() {
  if (verificarFim()) return true;
  for (let i = 0; i < 2; i++) {
    const equipe = equipes.jogadores[i];
    if (nocautePendenteJogadores[i] && equipe.length) {
      turno = i;
      abrirTroca(true);
      return true;
    }
  }
  return false;
}

// Resolve a fila em ordem; ações de Pokémon derrotados são ignoradas e as substituições pausam a fila.
function resolverProximaAcao() {
  if (partidaEncerrada || verificarFim()) return;
  if (pedirSubstituicaoSeNecessario()) return;
  const acao = acoesPendentes.shift();
  if (!acao) {
    iniciarRodada();
    return;
  }
  const ativo = pokemonAtivo(acao.lado, acao.indice);
  if (!ativo || ativo !== acao.ator) {
    setTimeout(resolverProximaAcao, 150);
    return;
  }
  if (acao.tipo === "ataque" && !golpePodeAgir(ativo)) {
    atualizarArena();
    msg.textContent = ativo.nome + " não conseguiu agir por causa da sua condição de status.";
    setTimeout(resolverProximaAcao, 150);
    return;
  }
  if (acao.tipo === "troca") {
    indicesAtivos.jogadores[acao.indice] = acao.novoIndice;
    atualizarArena();
    msg.textContent =
      "Jogador " +
      (acao.indice + 1) +
      " enviou " +
      pokemonAtivo("jogadores", acao.indice).nome +
      " para o campo.";
  } else if (acao.lado === "jogadores") {
    turno = acao.indice;
    jogadorDaAcao = acao.indice;
    golpeEscolhido = acao.golpe;
    alvoEscolhido = acao.alvo;
    aplicarGolpe();
    if (
      ultimoGolpePodeRetornar &&
      pokemonAtivo("jogadores", acao.indice)?.hp > 0 &&
      equipes.jogadores[acao.indice].some(
        (p) => p.hp > 0 && p !== pokemonAtivo("jogadores", acao.indice),
      )
    ) {
      abrirTroca(true, true);
      return;
    }
  } else {
    aplicarAcaoBot(acao);
  }
  setTimeout(resolverProximaAcao, 1800);
}

// Começa uma nova rodada com escolhas dos jogadores antes da execução dos ataques.
function iniciarRodada() {
  if (verificarFim()) return;
  acoesDaRodada = [];
  acoesPendentes = [];
  turno = 0;
  mostrarTurno();
}
function mostrarTurno() {
  if (partidaEncerrada) return;
  $("area-questao").style.display = "none";
  $("menu-golpes").style.display = "none";
  $("area-troca").style.display = "none";
  $("menu-acoes").style.display = "grid";
  msg.textContent =
    "Rodada nova: Jogador " + (turno + 1) + ", escolha seu ataque ou troque Pokémon.";
}
// Liga os controles da batalha e permite encerrar a partida pelo botão correspondente.
$("btn-lutar").addEventListener("click", mostrarGolpes);
$("btn-pokemon").addEventListener("click", abrirTroca);
$("btn-cancelar-troca").addEventListener("click", () => {
  $("area-troca").style.display = "none";
  $("menu-acoes").style.display = "grid";
});
$("btn-voltar").addEventListener("click", () => {
  $("menu-golpes").style.display = "none";
  $("menu-acoes").style.display = "grid";
});
$("btn-fugir").addEventListener("click", () =>
  encerrar("Recarregue a pagina se desejar lutar novamente"),
);

// Restaura e salva o tema visual claro/escuro entre visitas.
const botaoModo = $("modo");
try {
  if (localStorage.getItem("modo") === "noturno") document.body.classList.add("dark");
} catch (e) {
  console.warn("Preferência de tema indisponível.", e);
}
function atualizarBotaoModo() {
  const escuro = document.body.classList.contains("dark");
  botaoModo.textContent = escuro ? "☀️ Modo diurno" : "🌙 Modo noturno";
  botaoModo.setAttribute("aria-pressed", String(escuro));
}
atualizarBotaoModo();
botaoModo.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("dark");
  try {
    localStorage.setItem("modo", escuro ? "noturno" : "diurno");
  } catch (e) {
    console.warn("Não foi possível salvar o tema.", e);
  }
  atualizarBotaoModo();
});

// Inicialização: monta os Pokémon disponíveis e apresenta as escolhas do Jogador 1.
montarCatalogo();
atualizarPreparacao();
