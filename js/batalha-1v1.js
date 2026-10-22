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
      pergunta: "A principal ideia defendida pelo texto sobre a tecnologia é que:",
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
        "Em 'Os estudantes que estudaram durante todo o semestre apresentaram melhores resultados.', o trecho destacado:",
      alternativas: [
        "Indica uma característica atribuída aos estudantes.",
        "Indica uma consequência causada pelos resultados.",
        "Expressa uma ordem.",
        "Estabelece uma comparação.",
      ],
      resposta: "Indica uma característica atribuída aos estudantes.",
    },

    {
      pergunta:
        "No anúncio 'Você ainda joga fora o que poderia transformar?', o uso da pergunta tem principalmente a função de:",
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
        "Além dos animais citados no texto, muitos grupos indígenas ainda consideram águias, corujas, sabiás, raposas, cobras e tartarugas como animais sagrados, sendo a onça um símbolo cultural e espiritual, vista como a guardiã da floresta. Sobre os animais citados, é correto afirmar que.",
      alternativas: [
        "as aves se caracterizam por serem animais carnívoros, dotados de bico forte e curvo, com garras afiadas, com pelos e escamas no corpo e nas patas.",
        "os xerimbabos são muito queridos pelos indígenas e,  apesar de estarem em cativeiro, são cuidados com muito respeito e soltos na floresta quando em perigo de extinção.",
        "a onça é considerada a guardiã da floresta, ocupa o topo da cadeia alimentar por se alimentar de herbívoros maiores e de predadores menores, mantendo dessa forma o equilíbrio ambiental.",
        "os animais considerados sagrados pelos indígenas se caracterizam por serem carnívoros e por conseguirem manter a temperatura corporal constante, independentemente da temperatura do ambiente.",
      ],
      resposta:
        "a onça é considerada a guardiã da floresta, ocupa o topo da cadeia alimentar por se alimentar de herbívoros maiores e de predadores menores, mantendo dessa forma o equilíbrio ambiental.",
    },

    {
      pergunta:
        "Na passagem “quando cresceu, ficou livre e acabou indo com o seu bando”, a expressão “acabou indo” aponta",

      alternativas: [
        "uma ação inacabada que é realizada recorrentemente.",
        "uma ação inacabada que se prolonga infinitamente.",
        "uma ação finalizada que é enfatizada ao terminar.",
        "o desenvolvimento de uma ação que não se concretiza.",
      ],
      resposta: "uma ação finalizada que é enfatizada ao terminar.",
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
      pergunta: "O que o comando 'Var' e 'Const' faz?",
      alternativas: [
        "'var' cria uma variavel e 'Const' cria uma constante",
        "'var'cria uma constante 'Const' cria uma variavel",
        "'var' faz o mesmo que 'Const'",
        "'var' atribui valor e 'Const' compara valores",
      ],
      resposta: "'var' cria uma variavel e 'Const' cria uma constante",
    },
    {
      pergunta: "Qual apresenta um laço de repetição funcional?",
      alternativas: [
        "for(let i = 0; i < 10; i+)",
        "for(let i = 1; i <= 10; i++)",
        "for(let i = 1; i == 5; i+",
        "for(let i = 0; i <= 10; i+",
      ],
      resposta: "for(let i = 1; i <= 10; i++)",
    },
    {
      pergunta: "Qual dessas 'tags' apresenta uma entrada de dados?",
      alternativas: ["prompt()", "const", "alert()", "let"],
      resposta: "prompt()",
    },
    {
      pergunta: "Qual destes 'Complementos' Faz com que um pormpt aceite apenas números?",
      alternativas: [
        "Number(prompt())",
        "prompt(Number())",
        "nomber(Prompt())",
        "Prompt(nomber())",
      ],
      resposta: "Number(prompt())",
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
      pergunta: "Quem criou este 'Jogo'?",
      alternativas: ["Pedro", "Enzo", "Lucas", "Carlos"],
      resposta: "Pedro",
    },
    {
      pergunta: "Qual a capital dos Estados Unidos?",
      alternativas: ["Nova York", "São Paulo", "Washington, D.C.", "Salvador"],
      resposta: "Washington, D.C.",
    },
  ],
  // ============================================================
  // Adicione novas questões dentro da chave do tema correspondente.
  // ============================================================
};

("use strict");
const equipes = { 1: [], 2: [] },
  ativos = { 1: null, 2: null };
let fase = "equipe1",
  vez = 1,
  pendente = null,
  acoesRodada = {},
  filaAtaques = [],
  resolucaoEmAndamento = false,
  trocaPivoPendente = null;
const temasPorJogador = { 1: null, 2: null },
  ultimaQuestaoPorTema = {};
// Efeitos de estágio usados por golpes de buff e redução de atributos.
const efeitosAtributosPorGolpe = {
  icywind: { debuff: { spe: -1 } },
  mysticalfire: { debuff: { spa: -1 } },
  overheat: { selfDebuff: { spa: -2 } },
  dracometeor: { selfDebuff: { spa: -2 } },
  leafstorm: { selfDebuff: { spa: -2 } },
  clangingscales: { selfDebuff: { def: -1 } },
  closecombat: { selfDebuff: { def: -1, spd: -1 } },
  dragonascent: { selfDebuff: { def: -1, spd: -1 } },
  crunch: { debuff: { def: -1 }, stageChance: 0.2 },
  irontail: { debuff: { def: -1 }, stageChance: 0.3 },
  moonblast: { debuff: { spa: -1 }, stageChance: 0.3 },
  psychic: { debuff: { spd: -1 }, stageChance: 0.1 },
  energyball: { debuff: { spd: -1 }, stageChance: 0.1 },
  shadowball: { debuff: { spd: -1 }, stageChance: 0.2 },
  meteormash: { buff: { atk: 1 }, stageChance: 0.2 },
  razorshell: { debuff: { def: -1 }, stageChance: 0.5 },
  clangoroussoul: {
    buff: { atk: 1, def: 1, spa: 1, spd: 1, spe: 1 },
    selfDebuff: { hp: 1 / 3 },
  },
  rapidspin: { buff: { spe: 1 } },
  swordsdance: { buff: { atk: 2 } },
  dragondance: { buff: { atk: 1, spe: 1 } },
  bulkup: { buff: { atk: 1, def: 1 } },
  calmind: { buff: { spa: 1, spd: 1 } },
  calmmind: { buff: { spa: 1, spd: 1 } },
  nastyplot: { buff: { spa: 2 } },
  geomancy: { buff: { spa: 2, spd: 2, spe: 2 } },
  shellsmash: {
    buff: { atk: 2, spa: 2, spe: 2 },
    selfDebuff: { def: -1, spd: -1 },
  },
  agility: { buff: { spe: 2 } },
  irondefense: { buff: { def: 2 } },
  amnesia: { buff: { spd: 2 } },
  workup: { buff: { atk: 1, spa: 1 } },
  growl: { debuff: { atk: -1 } },
  tailwhip: { debuff: { def: -1 } },
  screech: { debuff: { def: -2 } },
  drainpunch: { drain: 0.5 },
  leechlife: { drain: 0.5 },
  gigadrain: { drain: 0.5 },
  oblivionwing: { drain: 0.75 },
  bitterblade: { drain: 0.5 },
  recover: { heal: 0.5 },
  roost: { heal: 0.5 },
  synthesis: { heal: 0.5 },
  moonlight: { heal: 0.5 },
  softboiled: { heal: 0.5 },
  rest: { heal: 1 },
};

function estagiosZerados() {
  return { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
}

function normalizarNomeGolpe(nome) {
  return String(nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function multiplicadorEstagio(valor) {
  return valor >= 0 ? (2 + valor) / 2 : 2 / (2 - valor);
}

function aplicarEstagios(pokemon, alteracoes, causadoPorAdversario = false) {
  if (!alteracoes) return [];
  if (window.ajustarEstagiosHabilidadePokemon)
    alteracoes = window.ajustarEstagiosHabilidadePokemon(pokemon, alteracoes, {
      causadoPorAdversario,
    });
  pokemon.estagios ||= estagiosZerados();
  const mensagens = [];
  const nomes = {
    atk: "ataque",
    def: "defesa",
    spa: "ataque especial",
    spd: "defesa especial",
    spe: "velocidade",
  };

  for (const [atributo, mudanca] of Object.entries(alteracoes)) {
    if (!(atributo in nomes)) continue;
    const antes = pokemon.estagios[atributo] || 0;
    const depois = Math.max(-6, Math.min(6, antes + Number(mudanca || 0)));
    pokemon.estagios[atributo] = depois;
    if (depois !== antes) {
      mensagens.push(nomes[atributo] + (depois > antes ? " aumentou" : " diminuiu"));
    }
  }
  return mensagens;
}

function aplicarEfeitosAtributos(golpe, atacante, defensor) {
  const efeitos = efeitosAtributosPorGolpe[normalizarNomeGolpe(golpe.nome)] || {};
  const chance = Number(golpe.stageChance ?? efeitos.stageChance ?? 1);
  if (Math.random() >= chance) return [];

  const mensagens = [
    ...aplicarEstagios(atacante, golpe.buff || efeitos.buff),
    ...aplicarEstagios(defensor, golpe.debuff || efeitos.debuff, true),
    ...aplicarEstagios(atacante, golpe.selfDebuff || efeitos.selfDebuff),
  ];
  const custoHp = Number(golpe.selfDebuff?.hp ?? efeitos.selfDebuff?.hp ?? 0);
  if (custoHp > 0) {
    const perda = Math.min(
      Math.max(0, atacante.hp - 1),
      Math.max(1, Math.floor(atacante.hpMax * custoHp)),
    );
    atacante.hp -= perda;
    if (perda > 0) mensagens.push(atacante.nome + " sacrificou " + perda + " HP");
  }
  return mensagens;
}

function efeitoDeRecuperacaoGolpe(golpe) {
  const efeitos = efeitosAtributosPorGolpe[normalizarNomeGolpe(golpe.nome)] || {};
  return {
    cura: Number(golpe.cura ?? golpe.heal ?? efeitos.heal ?? 0),
    drenagem: Number(golpe.drain ?? efeitos.drain ?? 0),
  };
}

function aplicarCuraGolpe(golpe, atacante, danoReal = 0) {
  const recuperacao = efeitoDeRecuperacaoGolpe(golpe),
    mensagens = [];
  if (recuperacao.cura > 0) {
    const ganho = Math.floor(
        recuperacao.cura <= 1 ? atacante.hpMax * recuperacao.cura : recuperacao.cura,
      ),
      antes = atacante.hp;
    atacante.hp = Math.min(atacante.hpMax, atacante.hp + ganho);
    if (atacante.hp > antes)
      mensagens.push(atacante.nome + " recuperou " + (atacante.hp - antes) + " HP");
  }
  if (recuperacao.drenagem > 0 && danoReal > 0) {
    const antes = atacante.hp;
    atacante.hp = Math.min(
      atacante.hpMax,
      atacante.hp + Math.max(1, Math.floor(danoReal * recuperacao.drenagem)),
    );
    if (atacante.hp > antes) mensagens.push(atacante.nome + " recuperou HP com o golpe");
  }
  return mensagens;
}

function montarSelecaoPokemon() {
  const lista = document.querySelector(".lista-pokemon");
  if (!lista) return [];
  lista.replaceChildren();
  for (const pokemon of pokemons) {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "pokemon-opcao";
    botao.dataset.pokemon = pokemon.nome;
    const nome = document.createElement("span");
    nome.textContent = pokemon.nome;
    botao.appendChild(nome);
    const tags = pokemon.tags || [];
    if (tags.includes("lendario") || tags.includes("mega")) {
      const tag = document.createElement("small");
      tag.className = "tag-pokemon";
      tag.textContent =
        tags.includes("mega") && tags.includes("lendario")
          ? "Lendário · Mega"
          : tags.includes("mega")
            ? "Mega"
            : "Lendário";
      botao.appendChild(tag);
    }
    lista.appendChild(botao);
  }
  return [...lista.querySelectorAll("[data-pokemon]")];
}
const botoes = montarSelecaoPokemon();
const $ = (id) => document.getElementById(id),
  selecao = $("selecao-pokemon"),
  arena = $("arena-batalha"),
  passagem = $("tela-passagem"),
  confirmar = $("btn-iniciar-batalha"),
  btnRetornar = $("btn-retornar-batalha"),
  menu = document.querySelector(".menu-batalha"),
  golpes = $("menu-golpes"),
  questao = $("area-questao"),
  msg = $("mensagem-batalha");
const nome = (id) => "Jogador " + id;
const CHAVE_BANCO_LOCAL = "pokemonStudy:batalha1v1:v1";
function salvarSelecoes() {
  try {
    const banco = { versao: 1, atualizadoEm: new Date().toISOString(), jogadores: {} };
    [1, 2].forEach((id) => {
      banco.jogadores[id] = { pokemons: equipes[id].map((p) => p.nome), tema: temasPorJogador[id] };
    });
    localStorage.setItem(CHAVE_BANCO_LOCAL, JSON.stringify(banco));
  } catch (erro) {
    console.warn("Não foi possível salvar as equipes neste navegador.", erro);
  }
}
function restaurarSelecoes() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_BANCO_LOCAL) || "null");
    if (!salvo || salvo.versao !== 1 || !salvo.jogadores) return;
    [1, 2].forEach((id) => {
      const registro = salvo.jogadores[id] || {};
      equipes[id] = (Array.isArray(registro.pokemons) ? registro.pokemons : [])
        .map(
          (nomePokemon) =>
            pokemons.find((p) => p.nome === nomePokemon) ||
            pokemons.find(
              (p) =>
                p.nome ===
                { "Groudon Origem": "Groudon Primal", "Kyogre Origem": "Kyogre Primal" }[
                  nomePokemon
                ],
            ),
        )
        .filter(Boolean)
        .slice(0, 6)
        .map(clone);
      if (typeof registro.tema === "string" && questoes[registro.tema])
        temasPorJogador[id] = registro.tema;
    });
  } catch (erro) {
    console.warn("Os dados salvos das equipes não puderam ser lidos.", erro);
  }
}
function clone(p) {
  const copia = JSON.parse(JSON.stringify(p));
  copia.hpMax = Number(p.hpMax || p.hpmax || 100);
  copia.hp = copia.hpMax;
  copia.estagios = estagiosZerados();
  return copia;
}
function aviso(t) {
  msg.textContent = t;
}
function limpar() {
  botoes.forEach((b) => {
    b.disabled = false;
    b.style.opacity = "1";
    b.classList.remove(
      "pokemon-selecionado",
      "pokemon-da-equipe",
      "pokemon-em-campo",
      "pokemon-derrotado",
    );
  });
}
function selecaoTime(id) {
  fase = "equipe" + id;
  limpar();
  btnRetornar.style.display = "none";
  selecao.querySelector("h2").textContent = "Equipe do " + nome(id);
  selecao.querySelector(".texto-selecao").textContent =
    "Escolha um tema de estudos e seis Pokémon. Clique novamente em um Pokémon para removê-lo.";
  const painelTema = selecao.querySelector(".selecao-temas-estudo");
  painelTema.style.display = "flex";
  painelTema.querySelector("h3").textContent = nome(id) + ", escolha seu tema de estudos:";
  document.querySelectorAll(".TemaDeEstudos").forEach((b) => {
    b.classList.toggle("selecionado", b.id === temasPorJogador[id]);
    b.setAttribute("aria-pressed", String(b.id === temasPorJogador[id]));
  });
  equipes[id].forEach((p) => {
    const botao = botoes.find((b) => b.dataset.pokemon === p.nome);
    if (botao) botao.classList.add("pokemon-selecionado");
  });
  confirmar.style.display = "block";
  confirmar.disabled = equipes[id].length !== 6 || !temasPorJogador[id];
  confirmar.textContent = "Confirmar equipe (" + equipes[id].length + "/6)";
  selecao.style.display = "grid";
  arena.style.display = "none";
  passagem.style.display = "none";
  aviso(nome(id) + ": selecione um tema e seis Pokémon.");
}
function passar(id, titulo, equipe = false) {
  pendente = equipe ? "equipe2" : id;
  selecao.style.display = "none";
  arena.style.display = "none";
  passagem.style.display = "grid";
  $("titulo-passagem").textContent = titulo;
  $("texto-passagem").textContent = equipe
    ? "Passe o dispositivo ao Jogador 2 para escolher sua equipe."
    : "Passe o dispositivo para " + nome(id) + " e toque para iniciar o turno.";
  $("btn-passar").textContent = equipe
    ? "Começar equipe do Jogador 2"
    : "Continuar como " + nome(id);
}
function mult(tipo, tipos) {
  return (tipos || []).reduce((m, t) => m * (efetividadeTipos[tipo]?.[t] ?? 1), 1);
}
function atualizar() {
  for (let id = 1; id <= 2; id++) {
    let p = ativos[id],
      s = id === 1 ? "jogador" : "bot";
    $("nome-" + s).textContent = p.nome;
    $("nivel-" + s).textContent = "Lv. " + p.nivel;
    $("imagem-" + s).src = p.imagem;
    $("imagem-" + s).alt = p.nome;
    $("hp-" + s).style.width = Math.max(0, (p.hp / p.hpMax) * 100) + "%";
    $("texto-hp-" + s).textContent = Math.max(0, p.hp) + " / " + p.hpMax;
    if (window.atualizarIndicadoresPokemon) window.atualizarIndicadoresPokemon(p, s);
  }
  if (window.processarEntradasHabilidadePokemon)
    window.processarEntradasHabilidadePokemon([
      { chave: "1v1-jogador", pokemon: ativos[1], adversarios: [ativos[2]] },
      { chave: "1v1-bot", pokemon: ativos[2], adversarios: [ativos[1]] },
    ]);
}
function turno(id) {
  vez = id;
  pendente = null;
  passagem.style.display = "none";
  selecao.style.display = "none";
  arena.style.display = "flex";
  menu.style.display = "grid";
  golpes.style.display = "none";
  questao.style.display = "none";
  for (let i = 1; i <= 4; i++) {
    let g = ativos[id].golpes[i - 1],
      b = $("golpe-" + i);
    b.textContent = g?.nome || "";
    b.style.display = g ? "block" : "none";
  }
  aviso("Vez do " + nome(id) + ". Escolha uma ação.");
}
function inicio() {
  // O Pokémon ativo precisa ser a mesma referência guardada na equipe.
  // Assim, o nocaute remove o integrante correto e o Jogador 2 não recupera um reserva.
  ativos[1] = equipes[1][0];
  ativos[2] = equipes[2][0];
  ativos[1].estagios = estagiosZerados();
  ativos[2].estagios = estagiosZerados();
  fase = "batalha";
  confirmar.style.display = "none";
  selecao.querySelector(".selecao-temas-estudo").style.display = "none";
  selecao.style.display = "none";
  passagem.style.display = "none";
  arena.style.display = "flex";
  atualizar();
  acoesRodada = {};
  turno(1);
  aviso(
    "A batalha começou! Jogador 1 (" +
      temasPorJogador[1] +
      ") vs. Jogador 2 (" +
      temasPorJogador[2] +
      "). Vez do Jogador 1.",
  );
}
function semTime(id) {
  return equipes[id].every((p) => p.hp <= 0);
}
function removerDerrotadoDaEquipe(id, pokemon) {
  const equipe = equipes[id];
  const indice = equipe.indexOf(pokemon);
  if (indice >= 0) equipe.splice(indice, 1);
}
function troca(id, obrigatoria, retorno = false) {
  fase = retorno ? "retorno" + id : (obrigatoria ? "troca" : "manual") + id;
  btnRetornar.style.display = obrigatoria || retorno ? "none" : "block";
  selecao.querySelector(".selecao-temas-estudo").style.display = "none";
  limpar();
  botoes.forEach((botao) => {
    botao.disabled = true;
    botao.style.opacity = ".22";
  });
  equipes[id].forEach((p) => {
    const botao = botoes.find((x) => x.dataset.pokemon === p.nome);
    if (!botao) return;
    botao.classList.add("pokemon-da-equipe");
    if (p.hp <= 0) botao.classList.add("pokemon-derrotado");
    if (p === ativos[id]) botao.classList.add("pokemon-em-campo");
    botao.disabled = p.hp <= 0 || ((obrigatoria || retorno) && p === ativos[id]);
    botao.style.opacity = p === ativos[id] ? ".65" : p.hp <= 0 ? ".45" : "1";
  });
  selecao.querySelector("h2").textContent =
    (retorno ? "Escolha quem entra após o golpe" : obrigatoria ? "Escolha outro Pokémon" : "Troca de Pokémon") +
    " — " +
    nome(id);
  selecao.querySelector(".texto-selecao").textContent = retorno
    ? "O golpe de troca acertou. Escolha um integrante vivo para entrar em campo."
    : obrigatoria
      ? "Pokémon atual: " +
        ativos[id].nome +
        ". Ele foi derrotado; escolha outro integrante disponível."
      : "Pokémon atual: " +
        ativos[id].nome +
        ". Escolha um integrante da sua equipe. A troca consome o turno.";
  confirmar.style.display = "none";
  selecao.style.display = "grid";
  arena.style.display = "none";
  menu.style.display = "none";
}
function voltarDaTroca() {
  if (!fase.startsWith("manual")) return;
  const id = fase.endsWith("2") ? 2 : 1;
  fase = "batalha";
  btnRetornar.style.display = "none";
  selecao.style.display = "none";
  arena.style.display = "flex";
  menu.style.display = "grid";
  golpes.style.display = "none";
  aviso("Troca cancelada. " + nome(id) + " ainda pode escolher uma ação.");
}
function fim(id) {
  fase = "fim";
  menu.style.display = "none";
  golpes.style.display = "none";
  questao.style.display = "none";
  arena.style.display = "flex";
  aviso(nome(id) + " venceu a batalha! Recarregue a página para jogar novamente.");
}
function registrarAcao(id, acao) {
  acoesRodada[id] = { ...acao, desempate: Math.random() };
  if (id === 1) {
    passar(2, "Jogador 1 registrou sua ação");
    return;
  }
  resolverRodada();
}
function finalizarRodada() {
  resolucaoEmAndamento = false;
  filaAtaques = [];
  for (const id of [1, 2]) {
    if (semTime(id)) {
      fim(id === 1 ? 2 : 1);
      return;
    }
    if (ativos[id].hp <= 0) {
      troca(id, true);
      return;
    }
  }
  acoesRodada = {};
  passar(1, "Rodada concluída");
}
function resolverRodada() {
  filaAtaques = [1, 2]
    .filter((id) => acoesRodada[id]?.tipo === "ataque")
    .map((id) => ({ id, ...acoesRodada[id] }));
  filaAtaques.sort(
    (a, b) =>
      Number(b.golpe.prioridade || 0) - Number(a.golpe.prioridade || 0) ||
      (window.velocidadeEfetivaPokemon
        ? window.velocidadeEfetivaPokemon(ativos[b.id])
        : ativos[b.id].velocidade || 0) -
        (window.velocidadeEfetivaPokemon
          ? window.velocidadeEfetivaPokemon(ativos[a.id])
          : ativos[a.id].velocidade || 0) ||
      a.desempate - b.desempate,
  );
  resolucaoEmAndamento = true;
  menu.style.display = "none";
  golpes.style.display = "none";
  questao.style.display = "none";
  aviso(
    "Ambos registraram suas ações. Ordem: " +
      (filaAtaques
        .map(
          (a) =>
            nome(a.id) + " (" + a.golpe.nome + ", Vel. " + (ativos[a.id].velocidade || 0) + ")",
        )
        .join(" → ") || "nenhum ataque") +
      ".",
  );
  setTimeout(resolverProximoAtaque, 650);
}
function resolverProximoAtaque() {
  if (!resolucaoEmAndamento) return;
  const acao = filaAtaques.shift();
  if (!acao) {
    finalizarRodada();
    return;
  }
  if (ativos[acao.id] !== acao.pokemon || acao.pokemon.hp <= 0) {
    setTimeout(resolverProximoAtaque, 150);
    return;
  }
  const alvoId = acao.id === 1 ? 2 : 1;
  if (ativos[alvoId].hp <= 0) {
    removerDerrotadoDaEquipe(alvoId, ativos[alvoId]);
    if (semTime(alvoId)) {
      fim(acao.id);
      return;
    }
    troca(alvoId, true);
    return;
  }
  const status = window.processarStatusPokemon
    ? window.processarStatusPokemon(acao.pokemon)
    : { podeAgir: true, dano: 0, mensagem: "" };
  atualizar();
  if (acao.pokemon.hp <= 0) {
    removerDerrotadoDaEquipe(acao.id, acao.pokemon);
    aviso(status.mensagem || acao.pokemon.nome + " foi derrotado por uma condição de status.");
    if (semTime(acao.id)) {
      fim(alvoId);
      return;
    }
    setTimeout(() => troca(acao.id, true), 500);
    return;
  }
  if (!status.podeAgir) {
    aviso(status.mensagem || acao.pokemon.nome + " perdeu a vez por sua condição de status.");
    setTimeout(resolverProximoAtaque, 500);
    return;
  }
  if (status.mensagem) aviso(status.mensagem);
  atacar(acao.golpe, acao.id, alvoId);
}
function ehGolpeDeRetorno(golpe) {
  const nomeGolpe = String(golpe?.nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  return ["uturn", "voltswitch", "flipturn"].includes(nomeGolpe);
}
function atacar(g, idAtacante, idDefensor) {
  const a = ativos[idAtacante],
    d = ativos[idDefensor],
    tipo = g.tipo || g.tipos || "Normal";
  const recuperacao = efeitoDeRecuperacaoGolpe(g);
  if (Number(g.dano || 0) <= 0 && recuperacao.cura > 0) {
    const efeitosCura = aplicarCuraGolpe(g, a),
      efeitosStatus = window.aplicarEfeitoStatusPokemon
        ? window.aplicarEfeitoStatusPokemon(a, d, g, {
            acertou: true,
            efetividade: 1,
            efetividadePropria: 1,
            dano: 0,
            equipe: equipes[idAtacante],
          })
        : [];
    atualizar();
    aviso(
      a.nome +
        " usou " +
        g.nome +
        (efeitosCura.length ? ". " + efeitosCura.join("; ") + "." : ", mas já está com o HP cheio.") +
        (efeitosStatus.length ? " " + efeitosStatus.join("; ") + "." : ""),
    );
    setTimeout(resolverProximoAtaque, 650);
    return;
  }
  const efBase = mult(tipo, d.tipos),
    acertou = Math.random() * 100 < Number(g.precisao ?? 100);
  const crit = acertou && Number(g.dano || 0) > 0 && Math.random() < 1 / 16;
  const bloqueio =
    acertou && window.bloqueioHabilidadePokemon
      ? window.bloqueioHabilidadePokemon(a, d, g, efBase)
      : null;
  const ef = bloqueio ? 0 : efBase,
    categoria = String(g.categoria || g.classe || "").toLowerCase();
  const estA = a.estagios || estagiosZerados(),
    estD = d.estagios || estagiosZerados();
  const atk = categoria.includes("especial")
    ? estA.spa
    : categoria.includes("fisico")
      ? estA.atk
      : (estA.atk + estA.spa) / 2;
  const def = categoria.includes("especial")
    ? estD.spd
    : categoria.includes("fisico")
      ? estD.def
      : (estD.def + estD.spd) / 2;
  const modEstagio =
    multiplicadorEstagio(crit && atk < 0 ? 0 : atk) /
    multiplicadorEstagio(crit && def > 0 ? 0 : def);
  const modHab =
    acertou && window.modificadorHabilidadePokemon
      ? window.modificadorHabilidadePokemon(a, d, g, efBase)
      : 1;
  const modStatus = window.modificadorStatusPokemon ? window.modificadorStatusPokemon(a, g) : 1;
  const valor = acertou
    ? Math.floor(Number(g.dano || 0) * ef * modEstagio * modHab * (crit ? 1.5 : 1) * modStatus)
    : 0;
  const hpDefensorAntes = d.hp;
  d.hp = Math.max(0, d.hp - valor);
  const danoReal = hpDefensorAntes - d.hp;
  const efeitosCura = acertou && !bloqueio ? aplicarCuraGolpe(g, a, danoReal) : [];
  const efeitosHab =
    acertou && window.aplicarPosHabilidadePokemon
      ? window.aplicarPosHabilidadePokemon(a, d, g, danoReal, { bloqueio })
      : [];
  const efeitosRecuo =
    acertou && !bloqueio && window.aplicarRecuoGolpePokemon
      ? window.aplicarRecuoGolpePokemon(a, g, danoReal)
      : [];
  const efeitoAtributosPermitido = Number(g.dano || 0) === 0 || ef > 0;
  const efeitosAtributos =
    acertou && !bloqueio && efeitoAtributosPermitido ? aplicarEfeitosAtributos(g, a, d) : [];
  const efeitosStatus =
    acertou && !bloqueio && window.aplicarEfeitoStatusPokemon
      ? window.aplicarEfeitoStatusPokemon(a, d, g, {
          acertou,
          efetividade: ef,
          efetividadePropria: Number(g.dano || 0) <= 0 ? 1 : ef,
          dano: danoReal,
          equipe: equipes[idAtacante],
        })
      : [];
  if (d.hp <= 0) removerDerrotadoDaEquipe(idDefensor, d);
  if (a.hp <= 0) removerDerrotadoDaEquipe(idAtacante, a);
  atualizar();
  const texto =
    a.nome +
    " usou " +
    g.nome +
    "!" +
    (!acertou
      ? " O golpe errou."
      : bloqueio
        ? " " + bloqueio.mensagem
        : crit
          ? " Acerto crítico!"
          : "") +
    (acertou
      ? ef === 0
        ? " Não teve efeito!"
        : ef > 1
          ? " É super efetivo!"
          : ef < 1
            ? " Não é muito efetivo."
            : ""
      : "") +
    (efeitosHab.length ? " " + efeitosHab.join("; ") + "." : "") +
    (efeitosRecuo.length ? " " + efeitosRecuo.join("; ") + "." : "") +
    (efeitosCura.length ? " " + efeitosCura.join("; ") + "." : "") +
    (efeitosAtributos.length ? " " + efeitosAtributos.join("; ") + "." : "") +
    (efeitosStatus.length ? " " + efeitosStatus.join("; ") + "." : "");
  const retorno =
    acertou &&
    !bloqueio &&
    danoReal > 0 &&
    a.hp > 0 &&
    ehGolpeDeRetorno(g) &&
    equipes[idAtacante].some((pokemon) => pokemon !== a && pokemon.hp > 0);
  if (d.hp <= 0) {
    aviso(texto + " " + d.nome + " foi derrotado!");
    if (semTime(idDefensor)) {
      resolucaoEmAndamento = false;
      setTimeout(() => fim(idAtacante), 700);
      return;
    }
    if (retorno) trocaPivoPendente = idAtacante;
    setTimeout(() => troca(idDefensor, true), 700);
    return;
  }
  aviso(texto);
  if (retorno) {
    setTimeout(() => troca(idAtacante, false, true), 500);
    return;
  }
  setTimeout(resolverProximoAtaque, 650);
}
function perguntar(g) {
  const tema = temasPorJogador[vez],
    lista = questoes[tema] || [];
  if (!lista.length) {
    aviso("Não há perguntas cadastradas para o tema de " + nome(vez) + ".");
    return;
  }
  const chave = vez + ":" + tema;
  let i = Math.floor(Math.random() * lista.length);
  if (lista.length > 1 && i === ultimaQuestaoPorTema[chave]) i = (i + 1) % lista.length;
  ultimaQuestaoPorTema[chave] = i;
  let q = lista[i],
    op = q.alternativas.map((x) => ({ texto: String(x), ok: String(x) === String(q.resposta) }));
  for (let n = op.length - 1; n > 0; n--) {
    let j = Math.floor(Math.random() * (n + 1));
    [op[n], op[j]] = [op[j], op[n]];
  }
  $("texto-questao").textContent = q.pergunta;
  [...document.querySelectorAll(".alternativas button")].forEach((b, n) => {
    b.textContent = op[n]?.texto || "";
    b.disabled = !op[n];
    b.onclick = () => {
      questao.style.display = "none";
      if (op[n].ok) {
        aviso("Resposta correta. Ataque registrado para a rodada.");
        registrarAcao(vez, { tipo: "ataque", golpe: g, pokemon: ativos[vez] });
      } else {
        aviso("Resposta incorreta. O ataque foi perdido.");
        registrarAcao(vez, { tipo: "falha", pokemon: ativos[vez] });
      }
    };
  });
  menu.style.display = "none";
  golpes.style.display = "none";
  questao.style.display = "flex";
}
botoes.forEach((b) =>
  b.addEventListener("click", () => {
    let id = fase === "equipe2" || fase === "troca2" || fase === "manual2" || fase === "retorno2" ? 2 : 1,
      p = pokemons.find((x) => x.nome === b.dataset.pokemon);
    if (fase === "equipe1" || fase === "equipe2") {
      let e = equipes[id],
        i = e.findIndex((x) => x.nome === p.nome);
      if (i >= 0) e.splice(i, 1);
      else if (e.length < 6) e.push(clone(p));
      b.classList.toggle(
        "pokemon-selecionado",
        e.some((x) => x.nome === p.nome),
      );
      salvarSelecoes();
      confirmar.disabled = e.length !== 6 || !temasPorJogador[id];
      confirmar.textContent = "Confirmar equipe (" + e.length + "/6)";
      aviso(nome(id) + ": " + e.length + "/6 selecionados.");
      return;
    }
    if (fase.startsWith("troca") || fase.startsWith("manual") || fase.startsWith("retorno")) {
      let escolhido = equipes[id].find((x) => x.nome === p.nome);
      if (!escolhido || escolhido.hp <= 0) return;
      let manual = fase.startsWith("manual"),
        retorno = fase.startsWith("retorno");
      if (escolhido === ativos[id]) {
        if (retorno) return;
        voltarDaTroca();
        return;
      }
      ativos[id] = escolhido;
      escolhido.estagios = estagiosZerados();
      // Reexibe a arena antes de resolver a ação já registrada pelo outro jogador.
      arena.style.display = "flex";
      atualizar();
      selecao.style.display = "none";
      btnRetornar.style.display = "none";
      fase = "batalha";
      if (manual) registrarAcao(id, { tipo: "troca", pokemon: escolhido });
      else if (resolucaoEmAndamento) {
        if (trocaPivoPendente !== null && trocaPivoPendente !== id) {
          const idPivo = trocaPivoPendente;
          trocaPivoPendente = null;
          setTimeout(() => troca(idPivo, false, true), 100);
        } else setTimeout(resolverProximoAtaque, 100);
      } else finalizarRodada();
    }
  }),
);
confirmar.addEventListener("click", () => {
  if (fase === "equipe1" && equipes[1].length === 6 && temasPorJogador[1])
    passar(2, "Equipe do Jogador 1 confirmada", true);
  else if (fase === "equipe2" && equipes[2].length === 6 && temasPorJogador[2]) inicio();
});
$("btn-passar").addEventListener("click", () =>
  pendente === "equipe2" ? selecaoTime(2) : turno(pendente),
);
$("btn-lutar").addEventListener("click", () => {
  menu.style.display = "none";
  golpes.style.display = "grid";
});
$("btn-voltar").addEventListener("click", () => {
  golpes.style.display = "none";
  menu.style.display = "grid";
});
for (let i = 1; i <= 4; i++)
  $("golpe-" + i).addEventListener("click", () => {
    let g = ativos[vez]?.golpes[i - 1];
    if (g) perguntar(g);
  });
$("btn-pokemon").addEventListener("click", () => troca(vez, false));
btnRetornar.addEventListener("click", voltarDaTroca);
const btnMochila = $("btn-mochila");
if (btnMochila) {
  btnMochila.disabled = true;
  btnMochila.textContent = "Mochila indisponível";
  btnMochila.setAttribute("aria-label", "Mochila indisponível neste modo");
  btnMochila.title = "Itens ainda não implementados nesta batalha.";
}
$("btn-fugir").addEventListener("click", () => aviso("Não é possível fugir de uma batalha local."));
document.querySelectorAll(".TemaDeEstudos").forEach((b) =>
  b.addEventListener("click", () => {
    const id = fase === "equipe1" ? 1 : fase === "equipe2" ? 2 : null;
    if (id && questoes[b.id]) {
      temasPorJogador[id] = b.id;
      salvarSelecoes();
      document.querySelectorAll(".TemaDeEstudos").forEach((x) => {
        const ativo = x === b;
        x.classList.toggle("selecionado", ativo);
        x.setAttribute("aria-pressed", String(ativo));
      });
      const total = equipes[id].length;
      confirmar.disabled = total !== 6;
      confirmar.textContent = "Confirmar equipe (" + total + "/6)";
      aviso(nome(id) + " escolheu o tema " + b.textContent.trim() + ".");
    }
  }),
);
arena.style.display = "none";
passagem.style.display = "none";
menu.style.display = "none";
restaurarSelecoes();
selecaoTime(1);

// Alterna e restaura o modo de cores claro/escuro.
const botaoModo = $("modo");
function atualizarBotaoModo() {
  const noturno = document.body.classList.contains("dark");
  botaoModo.textContent = noturno ? "☀️ Modo diurno" : "🌙 Modo noturno";
  botaoModo.setAttribute("aria-label", noturno ? "Ativar modo diurno" : "Ativar modo noturno");
  botaoModo.setAttribute("aria-pressed", String(noturno));
}
try {
  if (localStorage.getItem("modo") === "noturno") document.body.classList.add("dark");
} catch (erro) {
  console.warn("Não foi possível ler a preferência de tema.", erro);
}
atualizarBotaoModo();
botaoModo.addEventListener("click", () => {
  const noturno = document.body.classList.toggle("dark");
  try {
    localStorage.setItem("modo", noturno ? "noturno" : "diurno");
  } catch (erro) {
    console.warn("Não foi possível salvar a preferência de tema.", erro);
  }
  atualizarBotaoModo();
});
