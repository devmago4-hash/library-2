LIVRO.cap({
  area: "Física",
  titulo: "Hidrostática",
  sub: "Densidade, pressão, Stevin, Pascal e empuxo",
  blocos: [
    ["h", "Densidade"],
    ["p", "Densidade (ou massa específica) é a razão entre a massa e o volume de um material: d = m ÷ V. Ela diz o quanto de massa cabe em cada unidade de volume. A água tem densidade de 1 g/cm³, que equivale a 1.000 kg/m³."],
    ["ul", [
      "1 g/cm³ = 1.000 kg/m³",
      "1 m³ = 1.000 L = 1.000.000 cm³",
      "Materiais mais densos que a água afundam. Os menos densos flutuam."
    ]],
    ["nota", "Não confunda densidade com massa. Um grande bloco de isopor pesa pouco, porque sua densidade é baixa. Uma pequena bola de chumbo pesa muito, porque sua densidade é alta."],

    ["h", "Pressão"],
    ["p", "Pressão é a força aplicada por unidade de área, perpendicularmente à superfície: P = F ÷ A. A unidade no SI é o <b>pascal (Pa)</b>, que é 1 N/m²."],
    ["ex", "Uma pessoa de 60 kg pesa 600 N (com g = 10). Se apoiada em uma área de 0,04 m², exerce uma pressão de 600 ÷ 0,04 = 15.000 Pa."],
    ["p", "Isso explica por que a faca afiada corta (pouca área, muita pressão), por que o salto fino afunda no gramado e por que os tratores usam esteiras largas (muita área, pouca pressão)."],

    ["h", "Pressão atmosférica"],
    ["p", "O ar tem peso, e a camada de atmosfera sobre nós exerce pressão. Ao nível do mar, ela vale cerca de 1 atm, ou aproximadamente 10⁵ Pa. Quanto maior a altitude, menor a pressão. Uma coluna de água de cerca de 10 m produz uma pressão aproximadamente igual a 1 atm."],

    ["h", "Teorema de Stevin"],
    ["p", "Em um líquido em equilíbrio, a pressão aumenta com a profundidade: P = P₀ + d · g · h, em que P₀ é a pressão na superfície (normalmente a atmosférica), d é a densidade do líquido e h é a profundidade."],
    ["ul", [
      "Pontos na mesma profundidade, no mesmo líquido, têm a mesma pressão.",
      "A pressão não depende do formato do recipiente, só da altura da coluna de líquido.",
      "Por isso, em <b>vasos comunicantes</b> com o mesmo líquido, o nível é o mesmo em todos os ramos."
    ]],
    ["ex", "A 20 m de profundidade na água (d = 1.000 kg/m³, g = 10 m/s²), a pressão devida à água é 1.000 × 10 × 20 = 200.000 Pa. Somando a pressão atmosférica de 100.000 Pa, a pressão total é 300.000 Pa, ou 3 atm."],

    ["h", "Princípio de Pascal e a prensa hidráulica"],
    ["p", "Uma variação de pressão em um ponto de um líquido em equilíbrio se transmite integralmente a todos os pontos do líquido. Na prensa hidráulica, isso permite multiplicar a força: F₁ ÷ A₁ = F₂ ÷ A₂. Quanto maior a área do pistão, maior a força obtida."],
    ["dica", "Freios hidráulicos e elevadores de oficina funcionam assim. O que se ganha em força, perde-se em deslocamento: o pistão menor percorre uma distância maior que o maior, e a energia (trabalho) se conserva."],

    ["h", "Empuxo e o princípio de Arquimedes"],
    ["p", "Todo corpo mergulhado em um fluido recebe uma força vertical, para cima, igual ao peso do fluido que ele desloca: E = d_fluido · V_deslocado · g. Essa força é o empuxo."],
    ["ul", [
      "Se o peso do corpo é maior que o empuxo, ele afunda.",
      "Se o peso é menor que o empuxo, ele sobe até flutuar.",
      "Em equilíbrio flutuando, E = P. A fração submersa é d_corpo ÷ d_fluido."
    ]],
    ["p", "O <b>peso aparente</b> de um corpo dentro do fluido é o peso real menos o empuxo. É por isso que sentimos um objeto mais leve na água."],
    ["ex", "Um cubo de madeira com densidade de 0,6 g/cm³ flutua na água (1 g/cm³). A fração submersa é 0,6 ÷ 1 = 60%. Os outros 40% ficam fora d'água."],
    ["p", "Navios flutuam porque, apesar de feitos de aço, têm grande parte oca. A densidade média do conjunto (aço mais ar) é menor que a da água. Submarinos controlam a densidade enchendo ou esvaziando tanques com água."],

    ["h", "Questões resolvidas"],
    ["p", "Considere g = 10 m/s², água com 1.000 kg/m³ e pressão atmosférica de 10⁵ Pa. Tente resolver antes de ler a resolução."],

    ["q", {
      tag: "Densidade",
      enun: "Um bloco maciço tem massa de 600 g e volume de 200 cm³. Qual é a sua densidade?",
      alts: ["0,33 g/cm³", "3 g/cm³", "30 g/cm³", "120 g/cm³", "800 g/cm³"],
      gab: "B",
      res: "d = m ÷ V = 600 ÷ 200 = 3 g/cm³. A alternativa A (0,33) inverte a divisão. Como a densidade é maior que 1 g/cm³, o bloco afundaria na água."
    }],

    ["q", {
      tag: "Pressão",
      enun: "Uma pessoa de 60 kg está em pé, com os dois pés apoiados em uma área total de 0,04 m². Qual é a pressão que ela exerce sobre o chão?",
      alts: ["24 Pa", "1.500 Pa", "15.000 Pa", "24.000 Pa", "150.000 Pa"],
      gab: "C",
      res: ["O peso é P = m · g = 60 × 10 = 600 N, e a força sobre o chão tem esse valor.", "A pressão é F ÷ A = 600 ÷ 0,04 = 15.000 Pa. Quem usa a massa (60) no lugar do peso chega a 1.500 Pa, que é a alternativa B."]
    }],

    ["q", {
      tag: "Stevin",
      enun: "Um mergulhador está a 20 m de profundidade no mar, cuja água tem densidade de 1.000 kg/m³. Qual é a pressão total sobre ele, em atmosferas (1 atm = 10⁵ Pa)?",
      alts: ["2 atm", "3 atm", "4 atm", "20 atm", "21 atm"],
      gab: "B",
      res: ["A pressão devida à água é d · g · h = 1.000 × 10 × 20 = 2 × 10⁵ Pa = 2 atm.", "É preciso somar a pressão atmosférica, que atua sobre a superfície: 1 + 2 = 3 atm. A alternativa A esquece a atmosfera."]
    }],

    ["q", {
      tag: "Prensa hidráulica",
      enun: "Em uma prensa hidráulica, o pistão menor tem área de 10 cm² e o maior, de 200 cm². Se uma força de 50 N é aplicada ao pistão menor, qual é a força exercida pelo pistão maior?",
      alts: ["100 N", "500 N", "1.000 N", "2.500 N", "10.000 N"],
      gab: "C",
      res: "Pelo princípio de Pascal, F₁ ÷ A₁ = F₂ ÷ A₂. Então 50 ÷ 10 = F₂ ÷ 200, e F₂ = 50 × 200 ÷ 10 = 1.000 N. A área é 20 vezes maior, e a força também."
    }],

    ["q", {
      tag: "Empuxo",
      enun: "Um objeto de volume 0,002 m³ está totalmente mergulhado em água. Qual é o empuxo que ele recebe?",
      alts: ["2 N", "20 N", "200 N", "2.000 N", "20.000 N"],
      gab: "B",
      res: "E = d · V · g = 1.000 × 0,002 × 10 = 20 N. O empuxo depende do volume deslocado e da densidade do líquido, e não da massa do objeto."
    }],

    ["q", {
      tag: "Flutuação",
      enun: "Um cubo de madeira de densidade 0,6 g/cm³ flutua em água pura. Que fração do volume do cubo fica submersa?",
      alts: ["40%", "50%", "60%", "80%", "100%"],
      gab: "C",
      res: "Em equilíbrio, empuxo e peso são iguais: d_água · V_sub · g = d_madeira · V · g. Logo V_sub ÷ V = d_madeira ÷ d_água = 0,6 ÷ 1 = 60%. A alternativa A (40%) é a parte que fica para fora."
    }],

    ["q", {
      tag: "Peso aparente",
      enun: "Uma pedra pesa 30 N no ar e, quando totalmente mergulhada na água, seu peso aparente é de 20 N. Qual é a densidade da pedra?",
      alts: ["1.000 kg/m³", "1.500 kg/m³", "2.000 kg/m³", "2.500 kg/m³", "3.000 kg/m³"],
      gab: "E",
      res: ["O empuxo é a diferença entre o peso real e o aparente: E = 30 − 20 = 10 N. Como E = d_água · V · g, V = 10 ÷ (1.000 × 10) = 0,001 m³.", "A massa da pedra é 30 ÷ 10 = 3 kg. A densidade é 3 ÷ 0,001 = 3.000 kg/m³."]
    }],

    ["q", {
      tag: "Iceberg",
      enun: "Um iceberg tem densidade de 0,9 g/cm³ e flutua em água de densidade 1,0 g/cm³ (valor aproximado, tomado só para simplificar). Que porcentagem do volume do iceberg fica abaixo da superfície?",
      alts: ["10%", "50%", "81%", "90%", "100%"],
      gab: "D",
      res: "A fração submersa é a razão das densidades: 0,9 ÷ 1,0 = 0,9, ou 90%. Isso explica a expressão \"ponta do iceberg\": só cerca de 10% aparece acima da água."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Densidade: d = m ÷ V. 1 g/cm³ = 1.000 kg/m³.",
      "Pressão: P = F ÷ A. Em líquidos, P = P₀ + d · g · h (Stevin).",
      "Pascal: a variação de pressão se transmite integralmente. Prensa: F₁ ÷ A₁ = F₂ ÷ A₂.",
      "Empuxo: E = d_fluido · V_deslocado · g. Peso aparente = peso − empuxo.",
      "Fração submersa de um corpo que flutua = d_corpo ÷ d_fluido."
    ]]
  ]
});
