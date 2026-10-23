LIVRO.cap({
  area: "Física",
  titulo: "Ondas e óptica",
  sub: "Som, luz, espectro eletromagnético, espelhos, refração e visão",
  blocos: [
    ["h", "O que é uma onda"],
    ["p", "Uma onda é uma perturbação que transporta energia sem transportar matéria. Uma folha numa poça sobe e desce quando a onda passa, mas não é levada junto. As grandezas básicas são:"],
    ["ul", [
      "<b>Amplitude:</b> a altura da onda. Quanto maior, mais energia.",
      "<b>Comprimento de onda (λ):</b> distância entre duas cristas seguidas.",
      "<b>Frequência (f):</b> número de oscilações por segundo, em hertz (Hz).",
      "<b>Velocidade (v):</b> relaciona-se pelas duas anteriores: v = λ · f."
    ]],
    ["ex", "Uma onda sonora de frequência 500 Hz e comprimento de onda 0,68 m se propaga a v = 0,68 × 500 = 340 m/s."],
    ["p", "Quando uma onda passa de um meio para outro, a frequência não muda (ela é da fonte), mas a velocidade e o comprimento de onda mudam."],

    ["h", "Tipos de onda"],
    ["ul", [
      "<b>Mecânicas:</b> precisam de um meio material (som, ondas na água, ondas em cordas). Não se propagam no vácuo.",
      "<b>Eletromagnéticas:</b> não precisam de meio e se propagam no vácuo (luz, rádio, raios X). No vácuo, todas têm a velocidade c = 3 × 10⁸ m/s.",
      "<b>Transversais:</b> a oscilação é perpendicular à propagação (luz, ondas em cordas).",
      "<b>Longitudinais:</b> a oscilação é paralela à propagação (som no ar)."
    ]],

    ["h", "Som"],
    ["p", "O som é uma onda mecânica longitudinal. No ar, a cerca de 20 °C, a velocidade é aproximadamente 340 m/s, e é maior em líquidos e sólidos. As qualidades do som são:"],
    ["ul", [
      "<b>Altura:</b> grave ou agudo, ligada à frequência. Quanto maior a frequência, mais agudo.",
      "<b>Intensidade:</b> forte ou fraco (volume), ligada à amplitude.",
      "<b>Timbre:</b> o que distingue dois instrumentos tocando a mesma nota."
    ]],
    ["p", "O <b>eco</b> é a reflexão do som que volta ao ouvinte com um atraso suficiente para ser percebido como som separado, cerca de 0,1 s ou mais. O <b>efeito Doppler</b> é a mudança da frequência percebida quando a fonte e o observador se aproximam ou se afastam, e explica por que a sirene muda de tom ao passar por você."],
    ["ex", "Você vê o relâmpago e ouve o trovão 6 s depois. A luz chega quase instantaneamente, então a distância é d = 340 × 6 = 2.040 m, ou cerca de 2 km."],

    ["h", "O espectro eletromagnético"],
    ["p", "Luz visível é só uma faixa pequena de um conjunto maior de ondas eletromagnéticas. Em ordem crescente de frequência (e decrescente de comprimento de onda):"],
    ["ol", [
      "ondas de rádio (comunicação, rádio e TV);",
      "micro-ondas (fornos e telecomunicação);",
      "infravermelho (calor, controle remoto);",
      "luz visível (do vermelho ao violeta);",
      "ultravioleta (bronzeamento, esterilização, e danos à pele em excesso);",
      "raios X (diagnóstico por imagem);",
      "raios gama (originados em núcleos atômicos)."
    ]],
    ["nota", "Quanto maior a frequência, maior a energia de cada fóton e maior o poder de penetração e de dano às células. Por isso os raios X e gama exigem proteção."],

    ["h", "Reflexão da luz"],
    ["p", "Na reflexão, o ângulo de incidência é igual ao de reflexão. Em um espelho plano, a imagem é virtual, do mesmo tamanho do objeto e fica à mesma distância do espelho que o objeto, porém do lado de trás."],
    ["ex", "Uma pessoa a 2 m de um espelho plano vê sua imagem a 2 m atrás dele. A distância entre ela e a própria imagem é 4 m."],

    ["h", "Refração da luz"],
    ["p", "É a mudança de velocidade (e, em geral, de direção) da luz ao passar de um meio para outro. O índice de refração é n = c ÷ v, e a lei de Snell diz que n₁ · sen θ₁ = n₂ · sen θ₂. Ao entrar em um meio com maior índice (mais \"lento\"), o raio se aproxima da normal."],
    ["ul", [
      "Explica a ilusão de um canudo \"quebrado\" na água.",
      "A <b>reflexão total interna</b> ocorre quando a luz tenta passar de um meio mais refringente para outro menos refringente, com ângulo grande o bastante. É o princípio das <b>fibras ópticas</b>, que levam internet por pulsos de luz.",
      "A <b>dispersão</b> separa a luz branca em cores, como no arco-íris e em um prisma."
    ]],

    ["h", "Lentes e a visão"],
    ["ul", [
      "<b>Lente convergente:</b> reúne os raios de luz. É mais grossa no centro.",
      "<b>Lente divergente:</b> espalha os raios. É mais fina no centro."
    ]],
    ["p", "No olho, o cristalino funciona como uma lente convergente e forma a imagem na retina. Dois defeitos comuns da visão:"],
    ["ul", [
      "<b>Miopia:</b> a imagem se forma antes da retina, e a pessoa enxerga mal de longe. Corrige-se com lente divergente.",
      "<b>Hipermetropia:</b> a imagem se forma depois da retina, e a pessoa enxerga mal de perto. Corrige-se com lente convergente."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "Considere a velocidade do som no ar de 340 m/s e a da luz no vácuo de 3 × 10⁸ m/s. Tente resolver antes de ler a resolução."],

    ["q", {
      tag: "Equação fundamental",
      enun: "Uma onda sonora se propaga no ar a 340 m/s, com comprimento de onda de 0,5 m. Qual é a sua frequência?",
      alts: ["170 Hz", "340 Hz", "510 Hz", "680 Hz", "1.700 Hz"],
      gab: "D",
      res: "De v = λ · f, temos f = v ÷ λ = 340 ÷ 0,5 = 680 Hz. A alternativa A (170) vem de multiplicar 340 por 0,5."
    }],

    ["q", {
      tag: "Eco",
      enun: "Uma pessoa grita de frente para um paredão e ouve o eco 0,4 s depois. Qual é a distância entre ela e o paredão?",
      alts: ["34 m", "68 m", "136 m", "170 m", "272 m"],
      gab: "B",
      res: "Nesses 0,4 s o som vai até a parede e volta, percorrendo duas vezes a distância: 2d = 340 × 0,4 = 136 m. Portanto d = 68 m. A alternativa C (136 m) esquece de dividir por dois."
    }],

    ["q", {
      tag: "Relâmpago e trovão",
      enun: "Uma pessoa vê um relâmpago e, 6 segundos depois, ouve o trovão. Considerando o tempo de propagação da luz desprezível, a que distância aproximada ocorreu a descarga?",
      alts: ["0,34 km", "1,02 km", "1,7 km", "2,04 km", "6 km"],
      gab: "D",
      res: "A luz chega praticamente de imediato, e o intervalo é todo o tempo do som: d = 340 × 6 = 2.040 m = 2,04 km."
    }],

    ["q", {
      tag: "Espectro",
      enun: "Entre as radiações a seguir, qual possui a maior frequência?",
      alts: ["Ondas de rádio", "Micro-ondas", "Infravermelho", "Luz visível", "Raios X"],
      gab: "E",
      res: "Na ordem crescente de frequência: rádio, micro-ondas, infravermelho, luz visível, ultravioleta, raios X e raios gama. Entre as alternativas, os raios X têm a maior frequência e, por isso, maior energia."
    }],

    ["q", {
      tag: "Espelho plano",
      enun: "Uma pessoa está parada a 2 m de um espelho plano vertical. Qual é a distância entre ela e a sua imagem?",
      alts: ["1 m", "2 m", "3 m", "4 m", "8 m"],
      gab: "D",
      res: "A imagem se forma atrás do espelho, à mesma distância que o objeto está na frente: 2 m. A distância total entre a pessoa e a imagem é 2 + 2 = 4 m. A alternativa B é só a distância até o espelho."
    }],

    ["q", {
      tag: "Refração",
      enun: "Um raio de luz passa do ar (n = 1) para o vidro (n = 1,5) com ângulo de incidência de 30° em relação à normal. Qual é o valor do seno do ângulo de refração? (Dado: sen 30° = 0,5.)",
      alts: ["1/6", "1/3", "1/2", "2/3", "3/4"],
      gab: "B",
      res: ["Pela lei de Snell, 1 × 0,5 = 1,5 × sen θ₂, então sen θ₂ = 0,5 ÷ 1,5 = 1/3.", "Como o seno diminuiu, o ângulo também diminuiu: o raio se aproxima da normal ao entrar em um meio de maior índice de refração."]
    }],

    ["q", {
      tag: "Visão",
      enun: "Uma pessoa míope enxerga mal objetos distantes porque a imagem se forma antes da retina. Qual lente corrige esse defeito?",
      alts: [
        "Convergente, que antecipa ainda mais a imagem.",
        "Divergente, que afasta a imagem em direção à retina.",
        "Convergente, que afasta a imagem em direção à retina.",
        "Divergente, que aproxima a imagem do cristalino.",
        "Plana, que não altera o caminho dos raios."
      ],
      gab: "B",
      res: "Na miopia o olho converge demais os raios, e a imagem cai antes da retina. A lente divergente espalha os raios antes de entrarem no olho, empurrando a imagem para trás, sobre a retina. A convergente corrige a hipermetropia, em que a imagem se forma depois da retina."
    }],

    ["q", {
      tag: "Velocidade da luz",
      enun: "A distância média entre o Sol e a Terra é de cerca de 1,5 × 10¹¹ m. Quanto tempo, aproximadamente, a luz do Sol leva para chegar até nós?",
      alts: ["8 segundos", "50 segundos", "8 minutos", "50 minutos", "8 horas"],
      gab: "C",
      res: "t = d ÷ c = 1,5 × 10¹¹ ÷ 3 × 10⁸ = 500 s. Dividindo por 60, são cerca de 8,3 minutos, ou seja, aproximadamente 8 minutos. A luz que vemos do Sol saiu dele há 8 minutos."
    }],

    ["q", {
      tag: "Fibra óptica",
      enun: "A internet em fibra óptica transmite dados por pulsos de luz que viajam por um fio fino de vidro, sem que a luz escape pelas paredes. Qual fenômeno físico torna isso possível?",
      alts: [
        "Dispersão da luz em várias cores.",
        "Difração em torno das bordas da fibra.",
        "Reflexão total interna.",
        "Interferência destrutiva.",
        "Efeito Doppler."
      ],
      gab: "C",
      res: "Dentro da fibra, a luz incide nas paredes com um ângulo grande o bastante para sofrer reflexão total interna, e por isso fica confinada, seguindo o fio mesmo em curvas. As demais alternativas são fenômenos ondulatórios reais, mas não explicam o confinamento da luz."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "v = λ · f. A frequência é da fonte, e a velocidade depende do meio.",
      "Som: onda mecânica longitudinal, cerca de 340 m/s no ar. Eco exige ida e volta.",
      "Espectro: rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X e gama (frequência crescente).",
      "Espelho plano: imagem virtual, simétrica e à mesma distância. Snell: n₁ · sen θ₁ = n₂ · sen θ₂.",
      "Miopia corrige-se com lente divergente, hipermetropia com convergente."
    ]]
  ]
});
