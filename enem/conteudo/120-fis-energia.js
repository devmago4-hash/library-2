LIVRO.cap({
  area: "Física",
  titulo: "Energia, trabalho e potência",
  sub: "Conservação da energia, rendimento, conta de luz e fontes de energia",
  blocos: [
    ["h", "Energia: a grandeza que se transforma"],
    ["p", "Energia é a capacidade de realizar trabalho. Ela não é criada nem destruída, apenas transformada de uma forma em outra. Essa é a ideia central do capítulo, e ela explica desde uma queda d'água até a bateria do celular. No Sistema Internacional, a unidade de energia é o <b>joule (J)</b>."],

    ["h", "Trabalho de uma força"],
    ["p", "Quando uma força desloca um corpo, ela realiza trabalho. Se a força tem a mesma direção do deslocamento, W = F · d, com F em newtons (N) e d em metros (m). Se a força forma um ângulo θ com o deslocamento, W = F · d · cos θ."],
    ["ex", "Empurrar uma caixa com força de 50 N por 8 m, na direção do movimento, realiza W = 50 × 8 = 400 J."],
    ["nota", "Força perpendicular ao deslocamento não realiza trabalho. Carregar uma mala em linha reta e na horizontal, sem subir ou descer, não transfere energia à mala, pois o peso é perpendicular ao deslocamento."],

    ["h", "Energia cinética"],
    ["p", "É a energia do movimento: Ec = m · v² ÷ 2, com massa em kg e velocidade em m/s. Repare que a velocidade está ao quadrado: dobrar a velocidade multiplica a energia por 4."],
    ["ex", "Um carro de 1.000 kg a 20 m/s (72 km/h) tem Ec = 1.000 × 20² ÷ 2 = 200.000 J."],
    ["dica", "Para converter km/h em m/s, divida por 3,6. Para converter m/s em km/h, multiplique por 3,6."],

    ["h", "Energia potencial"],
    ["ul", [
      "<b>Gravitacional:</b> Ep = m · g · h, em que h é a altura em relação ao nível de referência. Neste livro, use g = 10 m/s², salvo aviso em contrário.",
      "<b>Elástica:</b> Ep = k · x² ÷ 2, em que k é a constante da mola e x é a deformação."
    ]],

    ["h", "Conservação da energia mecânica"],
    ["p", "Se não há atrito nem outras perdas, a soma da energia cinética com a potencial permanece constante. Um objeto abandonado de uma altura h troca energia potencial por cinética: m · g · h = m · v² ÷ 2. Note que a massa se cancela, e a velocidade ao chegar ao chão é v = √(2 · g · h)."],
    ["p", "Na vida real há atrito e resistência do ar, e parte da energia vira calor e som. Mesmo assim, a energia total do universo se conserva. Ela só deixa de ser aproveitável."],

    ["h", "Potência"],
    ["p", "Potência é a rapidez com que a energia é transferida: P = W ÷ Δt (ou E ÷ Δt). A unidade é o <b>watt (W)</b>, que é 1 joule por segundo. Também se usa o quilowatt (1 kW = 1.000 W) e o cavalo-vapor."],
    ["ex", "Um motor que eleva uma carga de 200 kg a 15 m em 30 s realiza W = 200 × 10 × 15 = 30.000 J. A potência é 30.000 ÷ 30 = 1.000 W."],

    ["h", "Rendimento"],
    ["p", "Nenhuma máquina converte toda a energia recebida em trabalho útil. O rendimento é a razão entre o que se aproveita e o que se gasta: η = energia útil ÷ energia total. Ele é sempre menor que 1 (ou menor que 100%)."],
    ["ex", "Um motor recebe 5.000 J e realiza 3.000 J de trabalho útil. η = 3.000 ÷ 5.000 = 0,6, ou 60%. Os outros 2.000 J se dissipam, principalmente como calor."],

    ["h", "A conta de luz: o quilowatt-hora"],
    ["p", "A energia elétrica é cobrada em quilowatt-hora (kWh). É a energia consumida por um aparelho de 1 kW ligado por 1 hora. Para calcular: energia (kWh) = potência (kW) × tempo (h). Depois, multiplique pelo preço do kWh."],
    ["nota", "Não confunda kW com kWh. O quilowatt é uma potência, o quilowatt-hora é uma energia. Quem usa kW para falar de consumo está misturando as duas ideias."],

    ["h", "Fontes de energia"],
    ["ul", [
      "<b>Hidrelétrica:</b> a água represada tem energia potencial. Ao cair, vira cinética, move a turbina e o gerador produz energia elétrica. No Brasil, é a fonte que mais produz eletricidade. Causa impacto ambiental por alagar grandes áreas.",
      "<b>Termelétrica:</b> queima de combustível (carvão, gás, óleo, biomassa) aquece água, e o vapor move a turbina. Emite gases de efeito estufa, exceto quando o combustível é renovável e o ciclo é equilibrado.",
      "<b>Nuclear:</b> a fissão do urânio libera calor. Não emite gases de efeito estufa na geração, mas gera rejeitos radioativos que precisam de armazenamento seguro.",
      "<b>Eólica e solar:</b> usam o vento e a luz do Sol. São renováveis, mas dependem do clima e do horário, o que exige formas de armazenar ou complementar a energia."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "Considere g = 10 m/s². Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Trabalho",
      enun: "Uma pessoa empurra uma caixa com uma força constante de 50 N, na mesma direção do deslocamento, por 8 m. Qual é o trabalho realizado por essa força?",
      alts: ["6,25 J", "58 J", "200 J", "400 J", "4.000 J"],
      gab: "D",
      res: "W = F · d = 50 × 8 = 400 J. A alternativa A é a divisão 50 ÷ 8, e B é a soma 50 + 8: nenhuma das duas representa a grandeza trabalho."
    }],

    ["q", {
      tag: "Energia cinética",
      enun: "Um carro de 1.000 kg se move a 72 km/h. Qual é a sua energia cinética?",
      alts: ["20 kJ", "100 kJ", "200 kJ", "400 kJ", "5.184 kJ"],
      gab: "C",
      res: ["Primeiro converta a velocidade: 72 km/h ÷ 3,6 = 20 m/s. Então Ec = 1.000 × 20² ÷ 2 = 200.000 J = 200 kJ.", "A alternativa E (5.184 kJ) vem de usar 72 no lugar de 20 e ainda esquecer de dividir por 2: 1.000 × 72² = 5.184.000 J."]
    }],

    ["q", {
      tag: "Conservação da energia",
      enun: "Uma bola é abandonada, a partir do repouso, de uma altura de 5 m. Desprezando a resistência do ar, com que velocidade ela chega ao chão?",
      alts: ["5 m/s", "7 m/s", "10 m/s", "50 m/s", "100 m/s"],
      gab: "C",
      res: "Pela conservação, m · g · h = m · v² ÷ 2, e a massa se cancela. Então v² = 2 · g · h = 2 × 10 × 5 = 100, e v = 10 m/s. Repare que não precisamos saber a massa da bola."
    }],

    ["q", {
      tag: "Potência",
      enun: "Um guindaste eleva uma carga de 200 kg a uma altura de 15 m em 30 s, com velocidade constante. Qual é a potência útil desenvolvida?",
      alts: ["100 W", "1.000 W", "3.000 W", "30.000 W", "90.000 W"],
      gab: "B",
      res: ["O trabalho para elevar a carga é igual à energia potencial ganha: W = m · g · h = 200 × 10 × 15 = 30.000 J.", "A potência é P = W ÷ Δt = 30.000 ÷ 30 = 1.000 W. A alternativa D (30.000) é o trabalho, em joules, sem dividir pelo tempo."]
    }],

    ["q", {
      tag: "Rendimento",
      enun: "Um motor elétrico recebe 5.000 J de energia e realiza 3.000 J de trabalho útil. Qual é o rendimento do motor?",
      alts: ["20%", "40%", "50%", "60%", "80%"],
      gab: "D",
      res: "O rendimento é útil ÷ total = 3.000 ÷ 5.000 = 0,6, ou 60%. A alternativa B (40%) é a fração de energia perdida (2.000 ÷ 5.000)."
    }],

    ["q", {
      tag: "Conta de luz",
      enun: "Um chuveiro elétrico de 5.000 W é usado por 20 minutos por dia, durante 30 dias. Sabendo que o kWh custa R$ 0,80, qual é o custo mensal da energia gasta por esse chuveiro?",
      alts: ["R$ 12,00", "R$ 25,00", "R$ 40,00", "R$ 50,00", "R$ 120,00"],
      gab: "C",
      res: ["A potência é 5 kW. O tempo diário é 20 min = 1/3 h. A energia por dia é 5 × 1/3 ≈ 1,67 kWh.", "Em 30 dias, são 5 × (1/3) × 30 = 50 kWh. O custo é 50 × 0,80 = R$ 40,00. A alternativa D (R$ 50,00) confunde os 50 kWh com reais, esquecendo de multiplicar pelo preço."]
    }],

    ["q", {
      tag: "Distância de frenagem",
      enun: "Um carro a 40 km/h, freando com a força de atrito constante, para depois de percorrer 10 m. Mantendo a mesma força de frenagem, qual será a distância percorrida até parar se a velocidade inicial for de 80 km/h?",
      alts: ["20 m", "30 m", "40 m", "80 m", "160 m"],
      gab: "C",
      res: ["A energia cinética inicial é dissipada pelo trabalho da força de atrito: Ec = F · d. Como Ec é proporcional a v², dobrar a velocidade multiplica a energia por 4, e a distância também.", "Logo d = 4 × 10 = 40 m. A alternativa A (20 m) supõe relação linear com a velocidade, o que ignora o quadrado na energia cinética. Esse é o motivo pelo qual excesso de velocidade é tão perigoso."]
    }],

    ["q", {
      tag: "Transformações de energia",
      enun: "Em uma usina hidrelétrica, a água armazenada em uma represa cai por um duto e move uma turbina ligada a um gerador. Qual é a sequência de transformações de energia nesse processo?",
      alts: [
        "Energia térmica, energia química e energia elétrica.",
        "Energia química, energia nuclear e energia elétrica.",
        "Energia potencial gravitacional, energia cinética e energia elétrica.",
        "Energia elétrica, energia cinética e energia potencial gravitacional.",
        "Energia solar, energia térmica e energia elétrica."
      ],
      gab: "C",
      res: "A água represada, em altura elevada, tem energia potencial gravitacional. Ao cair, essa energia vira energia cinética da água, que gira a turbina. O gerador, por sua vez, converte a energia cinética de rotação em energia elétrica. As demais alternativas descrevem outros tipos de usina ou invertem a ordem."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Trabalho: W = F · d · cos θ. Energia cinética: m · v² ÷ 2. Potencial gravitacional: m · g · h.",
      "Sem perdas, a energia mecânica se conserva. Com atrito, parte vira calor.",
      "Potência é energia ÷ tempo (watt). Rendimento é útil ÷ total.",
      "Conta de luz: kW × horas × preço do kWh.",
      "Dobrar a velocidade multiplica a energia cinética (e a distância de frenagem) por 4."
    ]]
  ]
});
