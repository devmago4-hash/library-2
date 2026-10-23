LIVRO.cap({
  area: "Física",
  titulo: "Termologia",
  sub: "Temperatura, calor, dilatação, gases e máquinas térmicas",
  blocos: [
    ["h", "Temperatura e calor não são a mesma coisa"],
    ["p", "<b>Temperatura</b> mede o grau de agitação das partículas de um corpo. <b>Calor</b> é a energia que passa de um corpo para outro por causa de uma diferença de temperatura, sempre do mais quente para o mais frio. Dois corpos em equilíbrio térmico têm a mesma temperatura e deixam de trocar calor."],

    ["h", "Escalas de temperatura"],
    ["ul", [
      "<b>Celsius (°C):</b> 0 °C é o ponto de fusão do gelo e 100 °C é o de ebulição da água, ao nível do mar.",
      "<b>Kelvin (K):</b> escala absoluta do SI. T(K) = T(°C) + 273.",
      "<b>Fahrenheit (°F):</b> °F = 1,8 × °C + 32."
    ]],
    ["ex", "Para converter 86 °F em Celsius: (86 − 32) ÷ 1,8 = 54 ÷ 1,8 = 30 °C. E 25 °C valem 25 + 273 = 298 K."],
    ["nota", "Variações de temperatura valem o mesmo número em °C e em K. Uma variação de 10 °C é uma variação de 10 K."],

    ["h", "Calor sensível"],
    ["p", "É o calor que muda a temperatura sem mudar o estado físico: Q = m · c · ΔT, em que c é o calor específico da substância. Para a água, c = 1 cal/(g·°C), o que equivale a cerca de 4,2 J/(g·°C). A água tem calor específico alto, e por isso demora a esquentar e a esfriar. Isso explica o clima ameno em regiões litorâneas."],
    ["ex", "Esquentar 200 g de água de 20 °C a 70 °C exige Q = 200 × 1 × 50 = 10.000 cal."],

    ["h", "Equilíbrio térmico"],
    ["p", "Quando corpos trocam calor em um sistema isolado, a soma dos calores trocados é zero: o que um perde, outro ganha. Para quantidades de água misturadas, a temperatura final é a média ponderada pelas massas."],
    ["ex", "Misturando 300 g de água a 80 °C com 100 g de água a 20 °C: T = (300 × 80 + 100 × 20) ÷ 400 = 26.000 ÷ 400 = 65 °C."],

    ["h", "Calor latente: mudança de estado"],
    ["p", "Durante uma mudança de estado, a substância recebe ou cede calor sem variar a temperatura: Q = m · L. O calor latente de fusão do gelo é 80 cal/g, e o de vaporização da água é 540 cal/g."],
    ["ex", "Derreter 500 g de gelo a 0 °C exige Q = 500 × 80 = 40.000 cal, e o resultado é água a 0 °C."],

    ["h", "Propagação do calor"],
    ["ul", [
      "<b>Condução:</b> o calor passa de partícula a partícula, sem transporte de matéria, nos sólidos principalmente. Metais conduzem bem. Madeira, isopor e ar parado são isolantes.",
      "<b>Convecção:</b> o calor é transportado pelo movimento do próprio fluido, porque o quente (menos denso) sobe e o frio desce. Explica as brisas, o ar-condicionado no alto e a geladeira com o congelador na parte de cima.",
      "<b>Irradiação:</b> propagação por ondas eletromagnéticas, que não precisa de meio material. É como o calor do Sol chega à Terra."
    ]],
    ["dica", "A garrafa térmica combina três soluções: vácuo entre as paredes (reduz condução e convecção), paredes espelhadas (refletem a irradiação) e tampa vedada."],

    ["h", "Dilatação térmica"],
    ["p", "Os materiais, em geral, se dilatam quando aquecidos. Para a dilatação linear de uma barra: ΔL = α · L₀ · ΔT, em que α é o coeficiente de dilatação do material. É por isso que pontes, trilhos e calçadas têm juntas de dilatação."],

    ["h", "Gases e a equação geral"],
    ["p", "Para uma quantidade fixa de gás ideal, P · V ÷ T é constante, com T em kelvin. Daí a equação geral: P₁ · V₁ ÷ T₁ = P₂ · V₂ ÷ T₂. Casos particulares: com volume constante, a pressão é proporcional à temperatura; com temperatura constante, P · V é constante."],
    ["nota", "A temperatura nas equações de gases deve estar sempre em kelvin. Usar graus Celsius dá resultados errados."],

    ["h", "Leis da termodinâmica"],
    ["ul", [
      "<b>Primeira lei:</b> conservação da energia. ΔU = Q − W, em que Q é o calor recebido pelo gás e W é o trabalho que ele realiza.",
      "<b>Segunda lei:</b> o calor flui espontaneamente do corpo quente para o frio, e nenhuma máquina térmica converte todo o calor em trabalho. Por isso, o rendimento é sempre menor que 100%."
    ]],
    ["p", "O rendimento máximo de uma máquina operando entre uma fonte quente (T<sub>q</sub>) e uma fria (T<sub>f</sub>), em kelvin, é o de Carnot: η = 1 − T<sub>f</sub> ÷ T<sub>q</sub>. Para melhorar o rendimento, é preciso aumentar a diferença entre as temperaturas."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Escalas",
      enun: "A previsão do tempo em uma cidade americana indica 86 °F. Qual é essa temperatura na escala Celsius?",
      alts: ["20 °C", "25 °C", "30 °C", "35 °C", "40 °C"],
      gab: "C",
      res: "°C = (°F − 32) ÷ 1,8 = (86 − 32) ÷ 1,8 = 54 ÷ 1,8 = 30 °C. O erro mais comum é esquecer de dividir por 1,8 depois de subtrair 32."
    }],

    ["q", {
      tag: "Calor sensível",
      enun: "Quantas calorias são necessárias para aquecer 200 g de água de 20 °C até 70 °C? (Calor específico da água: 1 cal/g·°C.)",
      alts: ["1.000 cal", "4.000 cal", "10.000 cal", "14.000 cal", "20.000 cal"],
      gab: "C",
      res: "Q = m · c · ΔT = 200 × 1 × (70 − 20) = 200 × 50 = 10.000 cal. A alternativa D (14.000) usa a temperatura final (70) no lugar da variação."
    }],

    ["q", {
      tag: "Equilíbrio térmico",
      enun: "Misturam-se 300 g de água a 80 °C com 100 g de água a 20 °C, em um recipiente isolado. Qual é a temperatura final de equilíbrio?",
      alts: ["40 °C", "50 °C", "60 °C", "65 °C", "70 °C"],
      gab: "D",
      res: ["Como é o mesmo líquido, o calor específico se cancela. O calor perdido pela água quente é igual ao ganho pela fria: 300 · (80 − T) = 100 · (T − 20).", "Resolvendo: 24.000 − 300T = 100T − 2.000, então 400T = 26.000 e T = 65 °C. A alternativa B (50 °C) é a média simples dos extremos, que só vale se as massas fossem iguais."]
    }],

    ["q", {
      tag: "Calor latente",
      enun: "Qual é a quantidade de calor necessária para derreter completamente 500 g de gelo que já está a 0 °C? (Calor latente de fusão do gelo: 80 cal/g.)",
      alts: ["4.000 cal", "40.000 cal", "400.000 cal", "8.000 cal", "80 cal"],
      gab: "B",
      res: "Q = m · L = 500 × 80 = 40.000 cal. Durante a fusão a temperatura permanece em 0 °C, e por isso não se usa a fórmula do calor sensível."
    }],

    ["q", {
      tag: "Dilatação",
      enun: "Uma barra de aço de 10 m a 20 °C é aquecida até 70 °C. O coeficiente de dilatação linear do aço é 1,2 × 10⁻⁵ °C⁻¹. Qual é o aumento do comprimento da barra?",
      alts: ["0,6 mm", "1,2 mm", "6 mm", "12 mm", "60 mm"],
      gab: "C",
      res: "ΔL = α · L₀ · ΔT = 1,2 × 10⁻⁵ × 10 × 50 = 6 × 10⁻³ m = 6 mm. Por menor que pareça, essa dilatação em um trecho longo de trilho ou ponte precisa ser prevista com juntas."
    }],

    ["q", {
      tag: "Transformação gasosa",
      enun: "Um gás está a 300 K, com pressão de 2 atm, em um recipiente rígido de volume constante. Se a temperatura for elevada para 600 K, qual será a nova pressão?",
      alts: ["1 atm", "2 atm", "3 atm", "4 atm", "8 atm"],
      gab: "D",
      res: "Com volume constante, P₁ ÷ T₁ = P₂ ÷ T₂. Então 2 ÷ 300 = P₂ ÷ 600, e P₂ = 4 atm. A temperatura em kelvin dobrou, então a pressão também dobra. Se usássemos graus Celsius, o resultado seria absurdo."
    }],

    ["q", {
      tag: "Primeira lei",
      enun: "Um gás recebe 500 J de calor e, durante a expansão, realiza 200 J de trabalho. Qual é a variação da sua energia interna?",
      alts: ["200 J", "300 J", "500 J", "700 J", "−300 J"],
      gab: "B",
      res: "Pela primeira lei, ΔU = Q − W = 500 − 200 = 300 J. A energia interna aumenta, porque o gás recebeu mais energia do que entregou em forma de trabalho. A alternativa D soma em vez de subtrair."
    }],

    ["q", {
      tag: "Máquina térmica",
      enun: "Uma máquina térmica ideal opera entre uma fonte quente a 600 K e uma fonte fria a 300 K. Qual é o seu rendimento máximo?",
      alts: ["25%", "33%", "50%", "60%", "100%"],
      gab: "C",
      res: "O rendimento de Carnot é η = 1 − T_f ÷ T_q = 1 − 300 ÷ 600 = 0,5, ou 50%. Nenhuma máquina real chega a esse valor, e 100% é impossível pela segunda lei."
    }],

    ["q", {
      tag: "Condução",
      enun: "Em um ambiente à mesma temperatura, uma pessoa toca uma maçaneta de metal e uma porta de madeira. O metal parece mais frio, embora ambos estejam à mesma temperatura. Qual é a explicação correta?",
      alts: [
        "O metal está de fato a uma temperatura menor que a madeira.",
        "O metal conduz o calor da mão com mais rapidez, e a pele sente a perda de calor.",
        "A madeira produz calor por si mesma, aquecendo a mão.",
        "O metal tem menor calor específico, por isso gela a mão.",
        "O calor passa da maçaneta de metal para a mão."
      ],
      gab: "B",
      res: "A sensação de frio vem da rapidez com que o calor sai da mão, não da temperatura do objeto. O metal é um bom condutor e retira calor da pele rapidamente. A madeira, um isolante, retira pouco. A alternativa E inverte o sentido do fluxo: o calor vai da mão (mais quente) para o metal."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Temperatura mede agitação. Calor é energia em trânsito por diferença de temperatura.",
      "K = °C + 273. °F = 1,8 · °C + 32.",
      "Q = m · c · ΔT (calor sensível). Q = m · L (mudança de estado, sem variar a temperatura).",
      "Condução, convecção e irradiação são as três formas de propagação do calor.",
      "Gases: use sempre kelvin. Primeira lei: ΔU = Q − W. Carnot: η = 1 − T_f ÷ T_q."
    ]]
  ]
});
