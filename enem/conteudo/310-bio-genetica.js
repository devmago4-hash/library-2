LIVRO.cap({
  area: "Biologia",
  titulo: "Genética",
  sub: "Das ervilhas de Mendel ao DNA em investigações",
  blocos: [
    ["h", "Vocabulário essencial"],
    ["ul", [
      "<b>Gene:</b> trecho do DNA que contém instruções para uma característica.",
      "<b>Alelos:</b> formas diferentes de um mesmo gene. Representam-se por letras: A (dominante) e a (recessivo).",
      "<b>Genótipo:</b> combinação de alelos (AA, Aa, aa). <b>Fenótipo:</b> característica observável.",
      "<b>Homozigoto:</b> alelos iguais (AA ou aa). <b>Heterozigoto:</b> alelos diferentes (Aa).",
      "<b>Dominante:</b> aparece mesmo em heterozigose. <b>Recessivo:</b> só aparece em homozigose."
    ]],

    ["h", "Primeira lei de Mendel"],
    ["p", "Cada característica é determinada por um par de fatores (alelos), que se separam na formação dos gametas. Cada gameta recebe apenas um alelo de cada par. É a lei da segregação."],
    ["ex", "Cruzando dois heterozigotos (Aa × Aa), os gametas são A ou a em cada pai. Os filhos esperados são 1/4 AA, 1/2 Aa e 1/4 aa, ou seja, 3/4 com o fenótipo dominante e 1/4 com o recessivo (proporção 3:1)."],
    ["dica", "Casal sem uma característica que tem um filho com ela indica que a característica é recessiva e que os pais são heterozigotos. Essa é a pista mais usada nos heredogramas."],

    ["h", "Probabilidade na genética"],
    ["p", "Cada nascimento é um evento independente: o resultado de um filho não altera a chance do seguinte. Para eventos combinados, multiplique as probabilidades, como na matemática."],
    ["ex", "A chance de uma criança ser menina é 1/2. A chance de um casal Aa × Aa ter um filho aa é 1/4. A chance de ser menina e aa é 1/2 × 1/4 = 1/8."],

    ["h", "Segunda lei de Mendel"],
    ["p", "Genes localizados em cromossomos diferentes segregam de forma independente na formação dos gametas. Cruzando dois duplo-heterozigotos (AaBb × AaBb), a proporção fenotípica esperada é 9 : 3 : 3 : 1."],
    ["ul", [
      "9/16 com os dois caracteres dominantes",
      "3/16 com o primeiro dominante e o segundo recessivo",
      "3/16 com o primeiro recessivo e o segundo dominante",
      "1/16 com os dois recessivos"
    ]],
    ["dica", "Quando os genes são independentes, resolva cada um separadamente e multiplique. Para ser A_ e B_ o cálculo é 3/4 × 3/4 = 9/16."],

    ["h", "Variações da herança"],
    ["ul", [
      "<b>Dominância incompleta:</b> o heterozigoto tem fenótipo intermediário. Em flores, vermelha × branca pode dar rosa, e rosa × rosa dá 1/4 vermelha, 1/2 rosa e 1/4 branca.",
      "<b>Codominância:</b> os dois alelos se expressam por completo no heterozigoto. É o caso do grupo sanguíneo AB.",
      "<b>Alelos múltiplos:</b> mais de dois alelos para um mesmo gene, como no sistema ABO."
    ]],

    ["h", "Grupos sanguíneos"],
    ["p", "No sistema ABO existem três alelos: I<sup>A</sup>, I<sup>B</sup> e i. Os alelos I<sup>A</sup> e I<sup>B</sup> são codominantes entre si e dominantes sobre i."],
    ["ul", [
      "Tipo A: I<sup>A</sup>I<sup>A</sup> ou I<sup>A</sup>i",
      "Tipo B: I<sup>B</sup>I<sup>B</sup> ou I<sup>B</sup>i",
      "Tipo AB: I<sup>A</sup>I<sup>B</sup>",
      "Tipo O: ii"
    ]],
    ["p", "O fator Rh é determinado por outro gene: Rh<sup>+</sup> é dominante e Rh<sup>−</sup> é recessivo. A <b>eritroblastose fetal</b> pode ocorrer quando uma mãe Rh<sup>−</sup> espera um bebê Rh<sup>+</sup>. No parto, o sangue do bebê pode entrar em contato com o da mãe, que passa a produzir anticorpos anti-Rh e guarda a memória imunológica. Em uma gestação seguinte de bebê Rh<sup>+</sup>, esses anticorpos atravessam a placenta e destroem as hemácias do feto. A prevenção é feita com a aplicação de uma imunoglobulina anti-Rh na mãe logo após o primeiro parto."],

    ["h", "Herança ligada ao sexo"],
    ["p", "Alguns genes ficam no cromossomo X. Mulheres têm dois X (XX) e homens têm um X e um Y (XY). Como o homem tem só um X, um alelo recessivo ligado ao X se manifesta nele sempre que presente. É o caso do daltonismo e da hemofilia."],
    ["nota", "O homem recebe o X da mãe e o Y do pai. Por isso, um filho homem nunca herda de seu pai uma condição ligada ao X."],

    ["h", "Mutações"],
    ["p", "Mutação é uma alteração no DNA. Ela pode não ter efeito (mutação silenciosa, favorecida pela degeneração do código genético), pode causar doença ou, às vezes, pode ser vantajosa. Só passam à descendência as mutações que ocorrem nas células que originam os gametas."],

    ["h", "Biotecnologia"],
    ["ul", [
      "<b>Transgênicos:</b> organismos que receberam um gene de outra espécie. Por exemplo, bactérias que produzem insulina humana.",
      "<b>Clonagem:</b> produção de organismos geneticamente idênticos ao doador. A ovelha Dolly, nascida em 1996, foi obtida transferindo o núcleo de uma célula do corpo para um óvulo sem núcleo.",
      "<b>CRISPR:</b> técnica de edição de genes. Uma proteína (Cas9), guiada por uma molécula de RNA, corta o DNA em um ponto específico, onde o gene pode ser desligado ou corrigido.",
      "<b>DNA forense:</b> compara trechos repetitivos do DNA, que variam muito entre pessoas, para identificar suspeitos e confirmar paternidade."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Probabilidade",
      enun: "Um casal com pigmentação normal da pele tem um filho albino. O albinismo é uma condição recessiva e autossômica. Qual é a probabilidade de o casal ter, em uma próxima gestação, uma menina albina?",
      alts: ["1/2", "1/4", "1/8", "1/16", "3/8"],
      gab: "C",
      res: ["Pais normais com um filho albino são heterozigotos (Aa × Aa). A chance de um filho ser aa é 1/4. A chance de ser menina é 1/2.", "Os eventos são independentes, então se multiplica: 1/4 × 1/2 = 1/8. O fato de já terem tido um filho albino não altera a chance dos próximos."]
    }],

    ["q", {
      tag: "Heredograma",
      enun: "Em uma família, um casal sem uma doença rara teve três filhos. Uma das filhas apresenta a doença, e os outros dois filhos não. Qual é a conclusão correta sobre o tipo de herança da doença?",
      alts: [
        "Autossômica dominante, pois a doença afeta uma mulher.",
        "Recessiva ligada ao X, pois a doença apareceu em uma filha.",
        "Dominante ligada ao X, pois os pais não têm a doença.",
        "Autossômica recessiva, e os pais são heterozigotos.",
        "Autossômica recessiva, e os pais são homozigotos dominantes."
      ],
      gab: "D",
      res: ["Pais sem a doença que têm uma filha com ela indicam que a doença é recessiva (se fosse dominante, um dos pais teria de tê-la). Como uma menina é afetada e o pai não é, a doença não pode ser ligada ao X: para ser afetada, ela teria de receber um X com o alelo do pai, e o pai não tem a doença.", "Portanto, a herança é autossômica recessiva. A filha é aa e recebeu um alelo a de cada genitor, que, sem terem a doença, são Aa. Pais AA não poderiam ter uma filha aa."]
    }],

    ["q", {
      tag: "Sistema ABO",
      enun: "Um homem do grupo sanguíneo B e uma mulher do grupo A têm um filho do grupo O. Qual é a probabilidade de que o próximo filho do casal seja do grupo AB?",
      alts: ["0", "1/4", "1/8", "1/2", "3/4"],
      gab: "B",
      res: ["O filho do grupo O é ii, então recebeu um alelo i de cada genitor. Logo, o pai é I<sup>B</sup>i e a mãe é I<sup>A</sup>i.", "Cruzando I<sup>A</sup>i × I<sup>B</sup>i, os filhos possíveis são I<sup>A</sup>I<sup>B</sup> (AB), I<sup>A</sup>i (A), I<sup>B</sup>i (B) e ii (O), cada um com 1/4. A chance de ser AB é 1/4."]
    }],

    ["q", {
      tag: "Fator Rh",
      enun: "Uma mulher Rh negativo teve seu primeiro filho, Rh positivo, sem complicações. Na segunda gestação, o bebê também é Rh positivo, e há risco de eritroblastose fetal. Esse risco existe porque",
      alts: [
        "o bebê Rh positivo produz anticorpos contra as hemácias da mãe.",
        "a mãe herdou o gene da doença do primeiro filho.",
        "o primeiro filho transmitiu um vírus à mãe durante o parto.",
        "o pai Rh positivo tem anticorpos que atravessam a placenta.",
        "a mãe se sensibilizou no primeiro parto, produziu anticorpos anti-Rh e células de memória, e eles atacam as hemácias do segundo bebê."
      ],
      gab: "E",
      res: "A mãe Rh negativo não tem o antígeno Rh. Quando o sangue do primeiro bebê entra em contato com o dela no parto, o sistema imunitário se sensibiliza e produz anticorpos e células de memória. Na gestação seguinte, esses anticorpos atravessam a placenta e destroem as hemácias do bebê Rh positivo. A aplicação de imunoglobulina anti-Rh após o primeiro parto evita essa sensibilização."
    }],

    ["q", {
      tag: "Herança ligada ao X",
      enun: "O daltonismo é determinado por um alelo recessivo ligado ao cromossomo X. Uma mulher portadora do alelo (heterozigota) tem filhos com um homem de visão normal. Qual é a probabilidade de eles terem uma criança do sexo masculino e daltônica?",
      alts: ["1/4", "0", "1/2", "1/8", "3/4"],
      gab: "A",
      res: ["Mulher: X<sup>D</sup>X<sup>d</sup>. Homem: X<sup>D</sup>Y. Os filhos possíveis são X<sup>D</sup>X<sup>D</sup>, X<sup>D</sup>X<sup>d</sup>, X<sup>D</sup>Y e X<sup>d</sup>Y, cada um com 1/4.", "Só X<sup>d</sup>Y é menino daltônico: 1/4. Atenção ao enunciado: entre os meninos, a chance de daltonismo seria 1/2, mas a pergunta pede a chance entre todas as crianças."]
    }],

    ["q", {
      tag: "Segunda lei de Mendel",
      enun: "Em ervilhas, semente amarela (V) é dominante sobre verde (v) e semente lisa (R) é dominante sobre rugosa (r). Os genes estão em cromossomos diferentes. Do cruzamento VvRr × VvRr, qual é a probabilidade de nascer uma planta com semente verde e lisa?",
      alts: ["1/16", "1/4", "9/16", "3/16", "3/4"],
      gab: "D",
      res: ["Resolvendo cada gene: verde (vv) tem probabilidade 1/4, e lisa (R_) tem probabilidade 3/4. Como são independentes, 1/4 × 3/4 = 3/16.", "Na proporção 9:3:3:1, os 3/16 são as sementes verdes e lisas. A alternativa A (1/16) é a verde e rugosa, e a C (9/16) é a amarela e lisa."]
    }],

    ["q", {
      tag: "Mutação",
      enun: "Uma mutação trocou uma base no DNA, e o códon GAA passou a ser GAG. A análise mostrou que a proteína produzida continuou idêntica, pois os dois códons codificam o mesmo aminoácido. Esse resultado se explica porque",
      alts: [
        "o código genético é degenerado, ou seja, aminoácidos podem ser codificados por mais de um códon.",
        "o RNA mensageiro corrige sozinho os erros do DNA.",
        "a mutação ocorreu em uma célula somática e não alterou nenhum gene.",
        "os ribossomos ignoram a terceira base de todos os códons.",
        "a mutação foi eliminada na replicação do DNA."
      ],
      gab: "A",
      res: "O código genético é degenerado: vários códons correspondem ao mesmo aminoácido, e a troca de uma base nem sempre muda a proteína. É a chamada mutação silenciosa. A alternativa D é um exagero: em muitos códons a terceira base importa, e apenas em certos casos ela pode variar sem mudar o aminoácido."
    }],

    ["q", {
      tag: "DNA forense",
      enun: "Em uma investigação, o DNA de uma amostra de sangue da cena do crime é comparado ao de um suspeito. O método se baseia na análise de trechos do DNA que variam muito de pessoa para pessoa. A comparação pode identificar o suspeito porque",
      alts: [
        "todas as pessoas têm exatamente o mesmo DNA, e a diferença está nas proteínas.",
        "o DNA muda de acordo com os alimentos ingeridos nos últimos dias.",
        "o padrão desses trechos é único para cada pessoa, exceto gêmeos idênticos, e é o mesmo em todas as suas células.",
        "o sangue contém DNA somente nas hemácias, o que permite comparar o tipo sanguíneo.",
        "o DNA só pode ser comparado entre parentes."
      ],
      gab: "C",
      res: "O DNA de cada pessoa tem trechos repetitivos que variam bastante entre indivíduos. O padrão de uma pessoa é o mesmo em todas as suas células e permanece ao longo da vida. Gêmeos idênticos são a exceção, pois têm o mesmo DNA. Hemácias maduras humanas não têm núcleo, e o DNA do sangue vem principalmente dos leucócitos."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Dois pais sem uma característica com um filho que a tem: ela é recessiva e os pais são Aa.",
      "Aa × Aa dá 1/4 AA, 1/2 Aa, 1/4 aa. Para eventos combinados, multiplique.",
      "Genes independentes: resolva um de cada vez. AaBb × AaBb dá 9:3:3:1.",
      "ABO: I<sup>A</sup> e I<sup>B</sup> são codominantes e dominam i. Tipo O é ii.",
      "Mãe Rh negativo com bebê Rh positivo: sensibilização no primeiro parto, risco no seguinte.",
      "Herança ligada ao X: o homem tem só um X, então o alelo recessivo aparece com mais frequência nele.",
      "Código genético degenerado: algumas mutações não mudam a proteína."
    ]]
  ]
});
