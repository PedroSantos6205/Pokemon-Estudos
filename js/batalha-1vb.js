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
    {
      pergunta: "No código 'let equipeJogador = [];', o que os colchetes [] representam?",
      alternativas: [
        "Uma variável que só pode guardar números.",
        "Um objeto vazio.",
        "Um array vazio.",
        "Uma função vazia.",
      ],
      resposta: "Um array vazio.",
    },

    {
      pergunta:
        "No código 'let pokemonAtualJogador = null;', qual é a função do null nesse momento?",
      alternativas: [
        "Indicar que o Pokémon está com 0 HP.",
        "Indicar que ainda não existe um Pokémon atualmente selecionado.",
        "Criar um Pokémon automaticamente.",
        "Apagar todos os Pokémon da equipe.",
      ],
      resposta: "Indicar que ainda não existe um Pokémon atualmente selecionado.",
    },

    {
      pergunta:
        "Considerando o código 'let quantidadeEscolhida = 0; quantidadeEscolhida++; quantidadeEscolhida++;', qual será o valor final de quantidadeEscolhida?",
      alternativas: ["0", "1", "2", "3"],
      resposta: "2",
    },

    {
      pergunta: "No código 'if (pokemon.hp <= 0)', o que o operador <= significa?",
      alternativas: ["Menor que.", "Maior que.", "Menor ou igual a.", "Maior ou igual a."],
      resposta: "Menor ou igual a.",
    },

    {
      pergunta:
        "Observe o código 'let hp = 50; if (hp <= 0) { console.log(\"Pokémon derrotado\"); }'. O que será mostrado no console?",
      alternativas: ["Pokémon derrotado.", "50.", "Nada.", "false."],
      resposta: "Nada.",
    },

    {
      pergunta:
        "No nosso sistema, qual é a principal função do método 'push()' usado em um array como equipeJogador?",
      alternativas: [
        "Remover um Pokémon da equipe.",
        "Adicionar um elemento ao final do array.",
        "Procurar um Pokémon dentro do array.",
        "Copiar todo o array.",
      ],
      resposta: "Adicionar um elemento ao final do array.",
    },

    {
      pergunta:
        'Considerando \'let equipeJogador = []; equipeJogador.push("Pikachu"); equipeJogador.push("Charizard"); equipeJogador.push("Garchomp");\', qual será o conteúdo final do array?',
      alternativas: [
        '["Garchomp", "Charizard", "Pikachu"]',
        '["Pikachu", "Charizard", "Garchomp"]',
        "3",
        '["Pikachu"]',
      ],
      resposta: '["Pikachu", "Charizard", "Garchomp"]',
    },

    {
      pergunta:
        'Considerando \'let equipeJogador = ["Pikachu", "Charizard", "Garchomp"]; console.log(equipeJogador[0]);\', o que será exibido?',
      alternativas: ["Pikachu", "Charizard", "Garchomp", "0"],
      resposta: "Pikachu",
    },

    {
      pergunta: "No código 'if (equipeJogador.length > 0)', o que a propriedade length representa?",
      alternativas: [
        "O HP do Pokémon.",
        "A quantidade de elementos presentes no array.",
        "O tamanho da imagem do Pokémon.",
        "A quantidade de ataques disponíveis.",
      ],
      resposta: "A quantidade de elementos presentes no array.",
    },

    {
      pergunta: "No código 'function verificarDerrotaJogador() { }', o que está sendo criado?",
      alternativas: ["Um array.", "Uma variável.", "Uma função.", "Um objeto."],
      resposta: "Uma função.",
    },

    {
      pergunta: "No JavaScript, o que acontece quando escrevemos 'verificarDerrotaJogador();'?",
      alternativas: [
        "A função é transformada em uma variável.",
        "A função é chamada e executada.",
        "Um novo array é criado.",
        "A função é apagada.",
      ],
      resposta: "A função é chamada e executada.",
    },

    {
      pergunta:
        "Na função 'function calcularEfetividade(tipoAtaque, tipoDefesa) {}', o que são tipoAtaque e tipoDefesa?",
      alternativas: ["Arrays.", "Parâmetros da função.", "Operadores matemáticos.", "Objetos."],
      resposta: "Parâmetros da função.",
    },

    {
      pergunta:
        'Se executarmos \'calcularEfetividade("Fogo", "Grama");\', qual valor será recebido pelo parâmetro tipoAtaque?',
      alternativas: ['"Grama"', '"Fogo"', '"Fogo" e "Grama" ao mesmo tempo.', "undefined"],
      resposta: '"Fogo"',
    },

    {
      pergunta: "No sistema de batalha, por que verificamos 'if (pokemonAtualJogador.hp <= 0)'?",
      alternativas: [
        "Para verificar se o Pokémon foi derrotado.",
        "Para aumentar o HP do Pokémon.",
        "Para escolher automaticamente um ataque.",
        "Para criar uma nova equipe.",
      ],
      resposta: "Para verificar se o Pokémon foi derrotado.",
    },

    {
      pergunta:
        "Se o Pokémon atual do jogador estiver com 0 HP e ainda existirem Pokémon disponíveis na equipe, qual ação deve acontecer no nosso sistema?",
      alternativas: [
        "O jogador perde imediatamente.",
        "O jogo reinicia.",
        "A seleção de Pokémon é aberta para escolher outro.",
        "O Bot escolhe o próximo Pokémon do jogador.",
      ],
      resposta: "A seleção de Pokémon é aberta para escolher outro.",
    },

    {
      pergunta:
        "Se pokemonAtualJogador.hp <= 0 e equipeJogador.length == 0, qual deve ser o resultado no sistema?",
      alternativas: [
        "Abrir a seleção de Pokémon.",
        "Finalizar a derrota do jogador.",
        "Calcular novamente a efetividade.",
        "Clonar um novo Pokémon.",
      ],
      resposta: "Finalizar a derrota do jogador.",
    },

    {
      pergunta:
        'Observe o código \'let equipeJogador = ["Pikachu", "Lucario", "Garchomp"]; equipeJogador.pop();\'. O que o método pop() faz?',
      alternativas: [
        "Adiciona um Pokémon ao início da equipe.",
        "Remove o último elemento do array.",
        "Remove o primeiro elemento do array.",
        "Duplica o último Pokémon.",
      ],
      resposta: "Remove o último elemento do array.",
    },

    {
      pergunta:
        'Considerando \'let equipeJogador = ["Pikachu", "Lucario", "Garchomp"]; equipeJogador.pop(); console.log(equipeJogador.length);\', qual será o resultado?',
      alternativas: ["0", "1", "2", "3"],
      resposta: "2",
    },

    {
      pergunta:
        "No sistema de batalha 6v6, por que é importante controlar quais Pokémon já foram derrotados?",
      alternativas: [
        "Para impedir que o mesmo Pokémon derrotado seja escolhido novamente.",
        "Para aumentar automaticamente o nível dos Pokémon.",
        "Para modificar os tipos dos Pokémon.",
        "Para aumentar o número de ataques disponíveis.",
      ],
      resposta: "Para impedir que o mesmo Pokémon derrotado seja escolhido novamente.",
    },

    {
      pergunta: "Qual é a principal função da variável pokemonAtualJogador no nosso sistema?",
      alternativas: [
        "Guardar todos os Pokémon disponíveis no jogo.",
        "Representar o Pokémon que está atualmente em batalha pelo jogador.",
        "Guardar apenas os Pokémon derrotados.",
        "Contar as vitórias consecutivas.",
      ],
      resposta: "Representar o Pokémon que está atualmente em batalha pelo jogador.",
    },

    {
      pergunta: "Qual é a principal diferença entre equipeJogador e pokemonAtualJogador?",
      alternativas: [
        "equipeJogador guarda a equipe, enquanto pokemonAtualJogador representa o Pokémon atualmente em batalha.",
        "equipeJogador guarda apenas o HP, enquanto pokemonAtualJogador guarda os ataques.",
        "As duas variáveis possuem exatamente a mesma função.",
        "pokemonAtualJogador sempre representa os seis Pokémon da equipe.",
      ],
      resposta:
        "equipeJogador guarda a equipe, enquanto pokemonAtualJogador representa o Pokémon atualmente em batalha.",
    },

    {
      pergunta:
        "No nosso sistema, por que usamos uma condição como 'if (equipeJogador.length > 0)' depois que um Pokémon é derrotado?",
      alternativas: [
        "Para verificar se ainda existem Pokémon disponíveis para continuar a batalha.",
        "Para verificar se o Bot venceu a batalha.",
        "Para aumentar o HP do Pokémon derrotado.",
        "Para descobrir o tipo do próximo Pokémon.",
      ],
      resposta: "Para verificar se ainda existem Pokémon disponíveis para continuar a batalha.",
    },

    {
      pergunta:
        "Qual estrutura é responsável por executar um bloco de código somente quando uma condição é verdadeira?",
      alternativas: ["if", "array", "push", "function"],
      resposta: "if",
    },

    {
      pergunta:
        "No nosso sistema, qual é a finalidade de uma função como 'clonarPokemon(pokemon)'?",
      alternativas: [
        "Criar uma cópia de um Pokémon sem alterar diretamente o Pokémon original.",
        "Excluir o Pokémon original.",
        "Mudar o tipo do Pokémon automaticamente.",
        "Aumentar permanentemente o HP de todos os Pokémon.",
      ],
      resposta: "Criar uma cópia de um Pokémon sem alterar diretamente o Pokémon original.",
    },

    {
      pergunta: "Por que clonar um Pokémon pode ser importante no sistema de batalha?",
      alternativas: [
        "Para que cada Pokémon da batalha possa possuir seus próprios valores de HP e estado.",
        "Para transformar todos os Pokémon em lendários.",
        "Para impedir que ataques sejam utilizados.",
        "Para eliminar a necessidade de arrays.",
      ],
      resposta:
        "Para que cada Pokémon da batalha possa possuir seus próprios valores de HP e estado.",
    },

    {
      pergunta:
        "No sistema de batalha, o que deve acontecer quando o HP do Pokémon atual chega a 0?",
      alternativas: [
        "O Pokémon deve continuar atacando normalmente.",
        "O sistema deve verificar se existe outro Pokémon disponível.",
        "O HP deve voltar automaticamente para o valor máximo.",
        "A equipe inteira deve ser apagada.",
      ],
      resposta: "O sistema deve verificar se existe outro Pokémon disponível.",
    },

    {
      pergunta: "Qual é a finalidade de manter uma variável como derrotadosJogador no sistema 6v6?",
      alternativas: [
        "Registrar os Pokémon que já foram derrotados pelo jogador.",
        "Registrar apenas os ataques utilizados.",
        "Guardar os Pokémon que ainda podem ser escolhidos.",
        "Contar somente as vitórias do Bot.",
      ],
      resposta: "Registrar os Pokémon que já foram derrotados pelo jogador.",
    },

    {
      pergunta:
        "Em uma batalha 6v6, por que precisamos de um loop ou lógica de continuidade após a derrota de um Pokémon?",
      alternativas: [
        "Para permitir que a batalha continue enquanto ainda houver Pokémon disponíveis.",
        "Para reiniciar a página após cada ataque.",
        "Para aumentar infinitamente o HP dos Pokémon.",
        "Para impedir qualquer troca de Pokémon.",
      ],
      resposta: "Para permitir que a batalha continue enquanto ainda houver Pokémon disponíveis.",
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
  filaAcoesVelocidade = [],
  resolvendoTurnoVelocidade = false;
const temasPorJogador = { 1: null },
  ultimaQuestaoPorTema = {};
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
  confirmar = $("btn-iniciar-batalha"),
  btnRetornar = $("btn-retornar-batalha"),
  menu = document.querySelector(".menu-batalha"),
  golpes = $("menu-golpes"),
  questao = $("area-questao"),
  msg = $("mensagem-batalha");
const nome = (id) => (id === 1 ? "Jogador" : "Bot");
const CHAVE_BANCO_LOCAL = "pokemonStudy:batalha1vBot:v1";
function salvarSelecoes() {
  try {
    localStorage.setItem(
      CHAVE_BANCO_LOCAL,
      JSON.stringify({
        versao: 1,
        pokemons: equipes[1].map((p) => p.nome),
        tema: temasPorJogador[1],
      }),
    );
  } catch (e) {
    console.warn("Não foi possível salvar a equipe.", e);
  }
}
function restaurarSelecoes() {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE_BANCO_LOCAL) || "null");
    if (!salvo || salvo.versao !== 1) return;
    equipes[1] = (Array.isArray(salvo.pokemons) ? salvo.pokemons : [])
      .map(
        (n) =>
          pokemons.find((p) => p.nome === n) ||
          pokemons.find(
            (p) =>
              p.nome ===
              { "Groudon Origem": "Groudon Primal", "Kyogre Origem": "Kyogre Primal" }[n],
          ),
      )
      .filter(Boolean)
      .slice(0, 6)
      .map(clone);
    if (typeof salvo.tema === "string" && questoes[salvo.tema]) temasPorJogador[1] = salvo.tema;
  } catch (e) {
    console.warn("As escolhas salvas não puderam ser lidas.", e);
  }
}
function clone(p) {
  const c = JSON.parse(JSON.stringify(p));
  c.hpMax = Number(p.hpMax || p.hpmax || 100);
  c.hp = c.hpMax;
  c.status = c.status || null;
  c.statusTurns = Number(c.statusTurns || 0);
  c.estagios = { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
  (c.golpes || []).forEach((g) => {
    g.bpMax = Math.max(1, Number(g.bpMax || g.ppMax || g.pp || g.bp || 10));
    g.bp = Number.isFinite(Number(g.bp)) ? Math.max(0, Math.min(g.bpMax, Number(g.bp))) : g.bpMax;
  });
  return c;
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
function selecaoTime() {
  fase = "equipe1";
  limpar();
  btnRetornar.style.display = "none";
  selecao.querySelector("h2").textContent = "Escolha seu time Pokémon";
  selecao.querySelector(".texto-selecao").textContent =
    "Escolha um tema de estudos e seis Pokémon para enfrentar o bot.";
  const painel = selecao.querySelector(".selecao-temas-estudo");
  painel.style.display = "flex";
  painel.querySelector("h3").textContent = "Escolha seu tema de estudos:";
  document.querySelectorAll(".TemaDeEstudos").forEach((b) => {
    b.classList.toggle("selecionado", b.id === temasPorJogador[1]);
    b.setAttribute("aria-pressed", String(b.id === temasPorJogador[1]));
  });
  equipes[1].forEach((p) => {
    const b = botoes.find((x) => x.dataset.pokemon === p.nome);
    if (b) b.classList.add("pokemon-selecionado");
  });
  confirmar.style.display = "block";
  confirmar.disabled = equipes[1].length !== 6 || !temasPorJogador[1];
  confirmar.textContent = "Iniciar batalha (" + equipes[1].length + "/6)";
  selecao.style.display = "grid";
  arena.style.display = "none";
  aviso("Escolha um tema e seis Pokémon para começar.");
}
function mult(tipo, tipos) {
  return (tipos || []).reduce((m, t) => m * (efetividadeTipos[tipo]?.[t] ?? 1), 1);
}
function estagiosZerados() {
  return { atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
}
function nomeEstado(status) {
  return window.nomeStatusPokemon ? window.nomeStatusPokemon(status) : "Normal";
}
function mostrarDetalhes(p) {
  const efeitos = Object.entries(p.estagios || {})
    .filter(([, v]) => v !== 0)
    .map(
      ([k, v]) =>
        ({ atk: "ATQ", def: "DEF", spa: "ATQ ESP", spd: "DEF ESP", spe: "VEL" })[k] +
        (v > 0 ? " +" : " ") +
        v,
    );
  return efeitos.join(" | ");
}
function multiplicadorEstagio(valor) {
  return valor >= 0 ? (2 + valor) / 2 : 2 / (2 - valor);
}
function normalizarGolpe(nome) {
  return String(nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}
const efeitosPorGolpe = {
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
  bulkup: { buff: { atk: 1, def: 1 } },
  swordsdance: { buff: { atk: 2 } },
  dragondance: { buff: { atk: 1, spe: 1 } },
  calmmind: { buff: { spa: 1, spd: 1 } },
  nastyplot: { buff: { spa: 2 } },
  geomancy: { buff: { spa: 2, spd: 2, spe: 2 } },
  shellsmash: {
    buff: { atk: 2, spa: 2, spe: 2 },
    selfDebuff: { def: -1, spd: -1 },
  },
  clangoroussoul: {
    buff: { atk: 1, def: 1, spa: 1, spd: 1, spe: 1 },
    selfDebuff: { hp: 1 / 3 },
  },
  rapidspin: { buff: { spe: 1 } },
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
function aplicarEstagios(p, mudancas) {
  if (!mudancas) return [];
  const textos = [];
  for (const [stat, deltaRaw] of Object.entries(mudancas)) {
    const delta = Number(deltaRaw) || 0;
    if (!(stat in p.estagios)) continue;
    const antes = p.estagios[stat];
    p.estagios[stat] = Math.max(-6, Math.min(6, antes + delta));
    const aplicado = p.estagios[stat] - antes;
    if (aplicado)
      textos.push(
        {
          atk: "ataque",
          def: "defesa",
          spa: "ataque especial",
          spd: "defesa especial",
          spe: "velocidade",
        }[stat] + (aplicado > 0 ? " aumentou" : " diminuiu"),
      );
  }
  return textos;
}
function aplicarEfeitoDoGolpe(g, a, d, dano, atacante, ef = 1, acertou = true) {
  const chave = normalizarGolpe(g.nome),
    fx = efeitosPorGolpe[chave] || {},
    mensagens = [],
    efetivo = Number(g.dano || 0) <= 0 || ef > 0;
  const cura = Number(g.cura || g.heal || fx.heal || 0);
  if (cura > 0) {
    const ganho = Math.floor(cura <= 1 ? a.hpMax * cura : cura),
      antes = a.hp;
    a.hp = Math.min(a.hpMax, a.hp + ganho);
    if (a.hp > antes) mensagens.push(a.nome + " recuperou " + (a.hp - antes) + " HP");
  }
  const drenagem = Number(g.drain || fx.drain || 0);
  if (drenagem > 0 && dano > 0) {
    const antes = a.hp;
    a.hp = Math.min(a.hpMax, a.hp + Math.max(1, Math.floor(dano * drenagem)));
    if (a.hp > antes) mensagens.push(a.nome + " recuperou HP com o golpe");
  }
  const custoHp = Number(g.selfDebuff?.hp ?? fx.selfDebuff?.hp ?? 0);
  if (custoHp > 0) {
    const perda = Math.min(
      Math.max(0, a.hp - 1),
      Math.max(1, Math.floor(a.hpMax * custoHp)),
    );
    a.hp -= perda;
    if (perda > 0) mensagens.push(a.nome + " sacrificou " + perda + " HP");
  }
  const buff = efetivo ? g.buff || fx.buff : null,
    debuff = efetivo ? g.debuff || fx.debuff : null,
    selfDebuff = efetivo ? g.selfDebuff || fx.selfDebuff : null;
  if (Math.random() < Number(g.stageChance ?? fx.stageChance ?? 1))
    mensagens.push(
      ...aplicarEstagios(a, buff),
      ...aplicarEstagios(d, debuff),
      ...aplicarEstagios(a, selfDebuff),
    );
  if (window.aplicarEfeitoStatusPokemon)
    mensagens.push(
      ...window.aplicarEfeitoStatusPokemon(a, d, g, {
        acertou,
        efetividade: ef,
        efetividadePropria: Number(g.dano || 0) <= 0 ? 1 : ef,
        dano,
        equipe: equipes[atacante],
      }),
    );
  return mensagens;
}
function removerDerrotadoDaEquipe(id, p) {
  const i = equipes[id].indexOf(p);
  if (i >= 0) equipes[id].splice(i, 1);
}
function resolverNocautePorStatus(id, p) {
  removerDerrotadoDaEquipe(id, p);
  atualizar();
  if (timeDerrotado(id)) {
    setTimeout(() => fim(id === 1 ? 2 : 1), DURACAO_KO_MS);
  } else if (id === 1) {
    setTimeout(() => trocaJogador(true), DURACAO_KO_MS);
  } else
    setTimeout(() => {
      const proximo = trocarBotAutomaticamente();
      if (proximo)
        turnoJogador(
          p.nome +
            " foi derrotado por uma condição de status. O bot enviou " +
            proximo.nome +
            ". Sua vez!",
        );
      else fim(1);
    }, DURACAO_KO_MS);
}
function prepararAcao(id) {
  const p = ativos[id];
  if (!p) return false;
  const resultado = window.processarStatusPokemon
    ? window.processarStatusPokemon(p)
    : { podeAgir: true, dano: 0, mensagem: "" };
  atualizar();
  if (p.hp <= 0) {
    aviso(resultado.mensagem || p.nome + " foi derrotado por uma condição de status.");
    resolverNocautePorStatus(id, p);
    return false;
  }
  if (resultado.mensagem) aviso(resultado.mensagem);
  if (!resultado.podeAgir) {
    menu.style.display = "none";
    golpes.style.display = "none";
    if (!resolvendoTurnoVelocidade)
      setTimeout(
        () => (id === 1 ? acaoBot() : turnoJogador("O bot não conseguiu agir. Sua vez!")),
        700,
      );
    return false;
  }
  return true;
}
function atualizar() {
  for (let id = 1; id <= 2; id++) {
    const p = ativos[id],
      lado = id === 1 ? "jogador" : "bot";
    $("nome-" + lado).textContent = p.nome;
    $("nivel-" + lado).textContent = "Lv. " + p.nivel;
    $("imagem-" + lado).src = p.imagem;
    $("imagem-" + lado).alt = p.nome;
    const barra = $("hp-" + lado);
    barra.style.transitionDuration = p.hp <= 0 ? "1.15s" : "";
    barra.style.width = Math.max(0, (p.hp / p.hpMax) * 100) + "%";
    $("texto-hp-" + lado).textContent = Math.max(0, p.hp) + " / " + p.hpMax;
    const detalhes = $("detalhes-" + lado);
    if (detalhes) detalhes.textContent = mostrarDetalhes(p);
    if (window.atualizarIndicadoresPokemon) window.atualizarIndicadoresPokemon(p, lado);
  }
  if (window.processarEntradasHabilidadePokemon)
    window.processarEntradasHabilidadePokemon([
      { chave: "1vB-jogador", pokemon: ativos[1], adversarios: [ativos[2]] },
      { chave: "1vB-bot", pokemon: ativos[2], adversarios: [ativos[1]] },
    ]);
  const contador = $("contador-time-bot");
  if (contador)
    contador.textContent = "Pokémon restantes: " + equipes[2].filter((p) => p.hp > 0).length + "/6";
}
function inicio() {
  const candidatos = pokemons.filter(
    (p) => !equipes[1].some((escolhido) => escolhido.nome === p.nome),
  );
  for (let i = candidatos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidatos[i], candidatos[j]] = [candidatos[j], candidatos[i]];
  }
  equipes[2] = candidatos.slice(0, 6).map(clone);
  ativos[1] = equipes[1][0];
  ativos[2] = equipes[2][0];
  fase = "batalha";
  confirmar.style.display = "none";
  selecao.querySelector(".selecao-temas-estudo").style.display = "none";
  selecao.style.display = "none";
  arena.style.display = "flex";
  atualizar();
  turnoJogador("A batalha começou! Seu time enfrenta o bot.");
}
function turnoJogador(texto = "Sua vez. Escolha uma ação.") {
  vez = 1;
  fase = "batalha";
  selecao.style.display = "none";
  arena.style.display = "flex";
  menu.style.display = "grid";
  golpes.style.display = "none";
  questao.style.display = "none";
  for (let i = 1; i <= 4; i++) {
    const g = ativos[1].golpes[i - 1],
      b = $("golpe-" + i);
    b.textContent = g ? g.nome + " • BP " + g.bp + "/" + g.bpMax : "";
    b.style.display = g ? "block" : "none";
    b.disabled = !g || g.bp <= 0;
  }
  const semBP = ativos[1].golpes.every((g) => !g || g.bp <= 0),
    struggle = $("golpe-5");
  struggle.textContent = "Struggle (sem BP)";
  struggle.style.display = semBP ? "block" : "none";
  struggle.disabled = !semBP;
  aviso(texto);
}
function timeDerrotado(id) {
  return equipes[id].every((p) => p.hp <= 0);
}
function fim(vencedor) {
  fase = "fim";
  menu.style.display = "none";
  golpes.style.display = "none";
  questao.style.display = "none";
  selecao.style.display = "none";
  arena.style.display = "flex";
  aviso(
    vencedor === 1
      ? "Você venceu a batalha! Recarregue a página para jogar novamente."
      : "O bot venceu a batalha. Recarregue a página para jogar novamente.",
  );
}
function trocaJogador(obrigatoria, retorno = false) {
  fase = obrigatoria ? "troca1" : retorno ? "retorno1" : "manual1";
  btnRetornar.style.display = obrigatoria || retorno ? "none" : "block";
  selecao.querySelector(".selecao-temas-estudo").style.display = "none";
  limpar();
  botoes.forEach((b) => {
    b.disabled = true;
    b.style.opacity = ".22";
  });
  equipes[1].forEach((p) => {
    const b = botoes.find((x) => x.dataset.pokemon === p.nome);
    if (!b) return;
    b.classList.add("pokemon-da-equipe");
    if (p.hp <= 0) b.classList.add("pokemon-derrotado");
    if (p === ativos[1]) b.classList.add("pokemon-em-campo");
    b.disabled = p.hp <= 0 || ((obrigatoria || retorno) && p === ativos[1]);
    b.style.opacity = p === ativos[1] ? ".65" : p.hp <= 0 ? ".45" : "1";
  });
  selecao.querySelector("h2").textContent = obrigatoria
    ? "Escolha outro Pokémon"
    : retorno
      ? "Escolha quem entra após o golpe"
      : "Troca de Pokémon";
  selecao.querySelector(".texto-selecao").textContent = obrigatoria
    ? "Seu Pokémon foi derrotado. Escolha quem continuará a batalha."
    : retorno
      ? "O golpe permitiu uma troca. Escolha um Pokémon disponível."
      : "Escolha um integrante da equipe. A troca consome seu turno.";
  confirmar.style.display = "none";
  selecao.style.display = "grid";
  arena.style.display = "none";
  menu.style.display = "none";
  aviso("Escolha um Pokémon disponível.");
}
function voltarDaTroca() {
  if (fase !== "manual1") return;
  fase = "batalha";
  btnRetornar.style.display = "none";
  selecao.style.display = "none";
  arena.style.display = "flex";
  menu.style.display = "grid";
  golpes.style.display = "none";
  aviso("Troca cancelada. Sua vez continua.");
}
function prepararAtaqueBot(nomePokemon) {
  aviso(nomePokemon + " entrou em campo. Carregando o Pokémon...");
  const imagem = $("imagem-jogador");
  let finalizado = false;
  const seguir = () => {
    if (finalizado) return;
    finalizado = true;
    imagem.removeEventListener("load", seguir);
    imagem.removeEventListener("error", seguir);
    setTimeout(acaoBot, 800);
  };
  if (imagem.complete && imagem.naturalWidth > 0) {
    setTimeout(seguir, 1300);
    return;
  }
  imagem.addEventListener("load", seguir, { once: true });
  imagem.addEventListener("error", seguir, { once: true });
  setTimeout(seguir, 2500);
}
function acaoBot() {
  if (fase === "fim" || !prepararAcao(2)) return;
  const disponiveis = (ativos[2].golpes || []).filter((g) => g && g.bp > 0);
  let g;
  if (disponiveis.length) {
    g = disponiveis[Math.floor(Math.random() * disponiveis.length)];
    g.bp--;
  } else g = { nome: "Struggle", dano: 50, tipo: "Normal" };
  aviso("O bot está escolhendo um ataque...");
  setTimeout(() => atacar(g, 2), 650);
}
function escolherGolpeBotParaRodada() {
  const disponiveis = (ativos[2].golpes || []).filter((g) => g && g.bp > 0);
  if (!disponiveis.length) return { nome: "Struggle", dano: 50, tipo: "Normal" };
  const g = disponiveis[Math.floor(Math.random() * disponiveis.length)];
  g.bp--;
  return g;
}
function resolverTurnoPorVelocidade(golpeJogador) {
  const golpeBot = escolherGolpeBotParaRodada();
  filaAcoesVelocidade = [
    ...(golpeJogador
      ? [{ id: 1, golpe: golpeJogador, pokemon: ativos[1], desempate: Math.random() }]
      : []),
    { id: 2, golpe: golpeBot, pokemon: ativos[2], desempate: Math.random() },
  ];
  filaAcoesVelocidade.sort(
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
  resolvendoTurnoVelocidade = true;
  aviso(
    "Ações registradas. Ordem por prioridade e velocidade: " +
      filaAcoesVelocidade
        .map(
          (a) => nome(a.id) + " — " + a.golpe.nome + " (Vel. " + (a.pokemon.velocidade || 0) + ")",
        )
        .join(" → ") +
      ".",
  );
  setTimeout(resolverProximaAcaoOrdenada, 500);
}
function resolverProximaAcaoOrdenada() {
  if (!resolvendoTurnoVelocidade) return;
  const acao = filaAcoesVelocidade.shift();
  if (!acao) {
    resolvendoTurnoVelocidade = false;
    turnoJogador("Turno concluído. Sua vez!");
    return;
  }
  if (ativos[acao.id] !== acao.pokemon || acao.pokemon.hp <= 0) {
    setTimeout(resolverProximaAcaoOrdenada, 150);
    return;
  }
  if (acao.id === 2 && !prepararAcao(2)) {
    setTimeout(resolverProximaAcaoOrdenada, 150);
    return;
  }
  setTimeout(() => atacar(acao.golpe, acao.id, true), 350);
}
function ehGolpeDeRetorno(g) {
  const nomeGolpe = String(g?.nome || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
  return ["uturn", "voltswitch", "flipturn"].includes(nomeGolpe);
}
function trocarBotAutomaticamente() {
  const opcoes = equipes[2].filter((p) => p.hp > 0 && p !== ativos[2]);
  if (!opcoes.length) return null;
  const proximo = opcoes[Math.floor(Math.random() * opcoes.length)];
  ativos[2] = proximo;
  proximo.estagios = estagiosZerados();
  atualizar();
  return proximo;
}
const DURACAO_KO_MS = 1250;
function atacar(g, atacante, emFila = false) {
  const alvo = atacante === 1 ? 2 : 1,
    a = ativos[atacante],
    d = ativos[alvo],
    tipo = g.tipo || g.tipos || "Normal",
    ef = mult(tipo, d.tipos),
    acertou = Math.random() * 100 < Number(g.precisao ?? 100),
    crit = acertou && Number(g.dano || 0) > 0 && Math.random() < 1 / 16;
  const categoria = String(g.categoria || g.classe || "").toLowerCase(),
    estAtaque = categoria.includes("especial")
      ? a.estagios.spa
      : categoria.includes("fisico")
        ? a.estagios.atk
        : (a.estagios.atk + a.estagios.spa) / 2,
    estDefesa = categoria.includes("especial")
      ? d.estagios.spd
      : categoria.includes("fisico")
        ? d.estagios.def
        : (d.estagios.def + d.estagios.spd) / 2;
  let modificador = multiplicadorEstagio(estAtaque || 0) / multiplicadorEstagio(estDefesa || 0);
  if (window.modificadorStatusPokemon) modificador *= window.modificadorStatusPokemon(a, g);
  const base = Number(g.dano || 0),
    valor =
      acertou && base > 0 && ef > 0
        ? Math.max(1, Math.floor(base * ef * modificador * (crit ? 1.5 : 1)))
        : 0;
  const hpDefensorAntes = d.hp;
  d.hp = Math.max(0, d.hp - valor);
  const danoReal = hpDefensorAntes - d.hp;
  const mensagensEfeito = acertou ? aplicarEfeitoDoGolpe(g, a, d, danoReal, atacante, ef) : [];
  if (acertou && window.aplicarPosHabilidadePokemon)
    mensagensEfeito.push(...window.aplicarPosHabilidadePokemon(a, d, g, danoReal));
  if (acertou && window.aplicarRecuoGolpePokemon)
    mensagensEfeito.push(...window.aplicarRecuoGolpePokemon(a, g, danoReal));
  atualizar();
  const texto =
    a.nome +
    " usou " +
    g.nome +
    "!" +
    (!acertou ? " O golpe errou." : crit ? " Acerto crítico!" : "") +
    (acertou
      ? ef === 0
        ? " Não teve efeito!"
        : ef > 1
          ? " É super efetivo!"
          : ef < 1
            ? " Não é muito efetivo!"
            : ""
      : "") +
    (mensagensEfeito.length ? " " + mensagensEfeito.join("; ") + "." : "");
  if (d.hp <= 0) removerDerrotadoDaEquipe(alvo, d);
  if (a.hp <= 0) removerDerrotadoDaEquipe(atacante, a);
  const temReserva = equipes[atacante].some((p) => p !== a && p.hp > 0);
  const retorno = acertou && a.hp > 0 && ehGolpeDeRetorno(g) && ef > 0 && temReserva;
  menu.style.display = "none";
  golpes.style.display = "none";
  if (d.hp <= 0) {
    if (timeDerrotado(alvo)) {
      resolvendoTurnoVelocidade = false;
      aviso(texto + " " + d.nome + " foi derrotado!");
      setTimeout(() => fim(atacante), DURACAO_KO_MS);
      return;
    }
    if (timeDerrotado(atacante)) {
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      aviso(texto + " " + a.nome + " foi derrotado e sua equipe ficou sem Pokémon.");
      setTimeout(() => fim(alvo), DURACAO_KO_MS);
      return;
    }
    if (a.hp <= 0 && atacante === 2) trocarBotAutomaticamente();
    if (alvo === 1) {
      // O nocaute encerra a fila do turno. A troca abre um novo turno do jogador.
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      if (retorno) trocarBotAutomaticamente();
      aviso(texto + " " + d.nome + " foi derrotado!");
      setTimeout(() => trocaJogador(true), DURACAO_KO_MS);
      return;
    }
    setTimeout(() => {
      const proximo = trocarBotAutomaticamente();
      if (a.hp <= 0 && atacante === 1) {
        resolvendoTurnoVelocidade = false;
        filaAcoesVelocidade = [];
        aviso(texto + " " + a.nome + " foi derrotado pelo recuo ou pela habilidade adversária.");
        trocaJogador(true);
        return;
      }
      if (retorno) {
        aviso(texto + " " + d.nome + " do bot foi derrotado! O bot enviou " + proximo.nome + ".");
        trocaJogador(false, true);
      } else if (emFila) {
        aviso(texto + " " + d.nome + " do bot foi derrotado! O bot enviou " + proximo.nome + ".");
        resolverProximaAcaoOrdenada();
      } else
        turnoJogador(
          texto +
            " " +
            d.nome +
            " do bot foi derrotado! O bot enviou " +
            proximo.nome +
            ". Sua vez!",
        );
    }, DURACAO_KO_MS);
    return;
  }
  // Efeitos de contato podem derrotar o atacante depois que ele acerta.
  if (a.hp <= 0) {
    aviso(texto + " " + a.nome + " foi derrotado!");
    if (timeDerrotado(atacante)) {
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      setTimeout(() => fim(atacante === 1 ? 2 : 1), DURACAO_KO_MS);
      return;
    }
    if (atacante === 1) {
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      setTimeout(() => trocaJogador(true), DURACAO_KO_MS);
      return;
    }
    const proximo = trocarBotAutomaticamente();
    if (!proximo) {
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      setTimeout(() => fim(1), DURACAO_KO_MS);
      return;
    }
    if (emFila)
      setTimeout(() => {
        aviso(texto + " " + a.nome + " foi derrotado. O bot enviou " + proximo.nome + ".");
        resolverProximaAcaoOrdenada();
      }, DURACAO_KO_MS);
    else {
      resolvendoTurnoVelocidade = false;
      filaAcoesVelocidade = [];
      setTimeout(
        () => turnoJogador(texto + " O bot enviou " + proximo.nome + ". Sua vez!"),
        DURACAO_KO_MS,
      );
    }
    return;
  }
  aviso(texto);
  if (retorno) {
    if (atacante === 1) {
      setTimeout(() => trocaJogador(false, true), 500);
    } else {
      const proximo = trocarBotAutomaticamente();
      if (emFila) {
        aviso(texto + " O bot trocou para " + proximo.nome + ".");
        resolverProximaAcaoOrdenada();
      } else turnoJogador(texto + " O bot trocou para " + proximo.nome + ". Sua vez!");
    }
    return;
  }
  if (emFila) setTimeout(resolverProximaAcaoOrdenada, 700);
  else if (atacante === 1) setTimeout(acaoBot, 700);
  else setTimeout(() => turnoJogador("O bot atacou. Sua vez!"), 700);
}
function perguntar(g) {
  const lista = questoes[temasPorJogador[1]] || [];
  if (!lista.length) {
    aviso("Não há perguntas cadastradas para o tema escolhido.");
    return;
  }
  const chave = "1:" + temasPorJogador[1];
  let i = Math.floor(Math.random() * lista.length);
  if (lista.length > 1 && i === ultimaQuestaoPorTema[chave]) i = (i + 1) % lista.length;
  ultimaQuestaoPorTema[chave] = i;
  const q = lista[i],
    op = q.alternativas.map((x) => ({ texto: String(x), ok: String(x) === String(q.resposta) }));
  for (let n = op.length - 1; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    [op[n], op[j]] = [op[j], op[n]];
  }
  $("texto-questao").textContent = q.pergunta;
  [...document.querySelectorAll(".alternativas button")].forEach((b, n) => {
    b.textContent = op[n]?.texto || "";
    b.disabled = !op[n];
    b.onclick = () => {
      questao.style.display = "none";
      if (op[n].ok) {
        aviso("Resposta correta. Você ganhou a chance de atacar.");
        resolverTurnoPorVelocidade(g);
      } else {
        aviso("Resposta incorreta. Você perdeu a chance de atacar.");
        resolverTurnoPorVelocidade(null);
      }
    };
  });
  menu.style.display = "none";
  golpes.style.display = "none";
  questao.style.display = "flex";
}
botoes.forEach((b) =>
  b.addEventListener("click", () => {
    const p = pokemons.find((x) => x.nome === b.dataset.pokemon);
    if (!p) return;
    if (fase === "equipe1") {
      const i = equipes[1].findIndex((x) => x.nome === p.nome);
      if (i >= 0) equipes[1].splice(i, 1);
      else if (equipes[1].length < 6) equipes[1].push(clone(p));
      b.classList.toggle(
        "pokemon-selecionado",
        equipes[1].some((x) => x.nome === p.nome),
      );
      salvarSelecoes();
      confirmar.disabled = equipes[1].length !== 6 || !temasPorJogador[1];
      confirmar.textContent = "Iniciar batalha (" + equipes[1].length + "/6)";
      aviso(equipes[1].length + "/6 Pokémon selecionados.");
      return;
    }
    if (fase === "troca1" || fase === "manual1" || fase === "retorno1") {
      const escolhido = equipes[1].find((x) => x.nome === p.nome);
      if (!escolhido || escolhido.hp <= 0) return;
      const manual = fase === "manual1",
        retorno = fase === "retorno1";
      ativos[1] = escolhido;
      escolhido.estagios = estagiosZerados();
      arena.style.display = "flex";
      menu.style.display = "none";
      golpes.style.display = "none";
      atualizar();
      btnRetornar.style.display = "none";
      selecao.style.display = "none";
      fase = "batalha";
      if (resolvendoTurnoVelocidade) setTimeout(resolverProximaAcaoOrdenada, 150);
      else if (manual || retorno) prepararAtaqueBot(escolhido.nome);
      else turnoJogador("Você enviou " + escolhido.nome + ". Sua vez!");
    }
  }),
);
confirmar.addEventListener("click", () => {
  if (fase === "equipe1" && equipes[1].length === 6 && temasPorJogador[1]) inicio();
});
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
    const g = ativos[1]?.golpes[i - 1];
    if (g && g.bp > 0 && prepararAcao(1)) {
      g.bp--;
      perguntar(g);
    }
  });
$("golpe-5").addEventListener("click", () => {
  if (ativos[1]?.golpes.every((g) => !g || g.bp <= 0) && prepararAcao(1))
    perguntar({ nome: "Struggle", dano: 50, tipo: "Normal" });
});
$("btn-pokemon").addEventListener("click", () => trocaJogador(false));
btnRetornar.addEventListener("click", voltarDaTroca);
const btnMochila = $("btn-mochila");
if (btnMochila) {
  btnMochila.disabled = true;
  btnMochila.textContent = "Mochila indisponível";
  btnMochila.setAttribute("aria-label", "Mochila indisponível neste modo");
  btnMochila.title = "Itens ainda não implementados nesta batalha.";
}
$("btn-fugir").addEventListener("click", () => aviso("Não é possível fugir da batalha."));
document.querySelectorAll(".TemaDeEstudos").forEach((b) =>
  b.addEventListener("click", () => {
    if (fase !== "equipe1" || !questoes[b.id]) return;
    temasPorJogador[1] = b.id;
    salvarSelecoes();
    document.querySelectorAll(".TemaDeEstudos").forEach((x) => {
      const ativo = x === b;
      x.classList.toggle("selecionado", ativo);
      x.setAttribute("aria-pressed", String(ativo));
    });
    confirmar.disabled = equipes[1].length !== 6;
    confirmar.textContent = "Iniciar batalha (" + equipes[1].length + "/6)";
    aviso("Tema escolhido: " + b.textContent.trim() + ".");
  }),
);
arena.style.display = "none";
menu.style.display = "none";
restaurarSelecoes();
selecaoTime();

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
