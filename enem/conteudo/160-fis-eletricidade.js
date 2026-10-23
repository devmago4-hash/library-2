LIVRO.cap({
  area: "Física",
  titulo: "Eletricidade e magnetismo",
  sub: "Corrente, Ohm, circuitos, consumo, ímãs e indução eletromagnética",
  blocos: [
    ["h", "Carga e corrente elétrica"],
    ["p", "A matéria é feita de partículas com carga elétrica. Cargas de mesmo sinal se repelem e de sinais opostos se atraem. Corrente elétrica é o movimento ordenado de cargas, e a sua intensidade mede quanta carga passa por segundo: i = Q ÷ Δt. A unidade é o ampère (A), que é 1 coulomb por segundo."],
    ["ex", "Se 120 C de carga atravessam um fio em 1 minuto (60 s), a corrente é i = 120 ÷ 60 = 2 A."],

    ["h", "Tensão e resistência"],
    ["ul", [
      "<b>Tensão (ou diferença de potencial), em volts (V):</b> é o que \"empurra\" as cargas. Uma pilha ou a tomada fornece a tensão.",
      "<b>Resistência, em ohms (Ω):</b> a dificuldade que o material impõe à passagem da corrente."
    ]],
    ["p", "A <b>primeira lei de Ohm</b> relaciona as três grandezas: V = R · i. Para um resistor de 20 Ω percorrido por 5 A, a tensão é 20 × 5 = 100 V."],
    ["p", "A <b>segunda lei de Ohm</b> diz que a resistência de um fio cresce com o comprimento e diminui com a área da seção: R = ρ · L ÷ A. Um fio fino e comprido resiste mais que um grosso e curto, e é por isso que fios de extensões e instalações têm bitolas adequadas."],

    ["h", "Potência elétrica"],
    ["p", "P = V · i. Combinando com a lei de Ohm, também P = R · i² e P = V² ÷ R. A potência é a energia por segundo, em watts."],
    ["ul", [
      "Com a tensão fixa (a da tomada), <b>menor resistência significa maior corrente e maior potência</b>.",
      "Por isso, o chuveiro na posição \"inverno\" tem resistência menor que na posição \"verão\", e esquenta mais a água.",
      "Para calcular a corrente de um aparelho: i = P ÷ V."
    ]],
    ["ex", "Uma lâmpada de 60 W ligada em 120 V tem corrente i = 60 ÷ 120 = 0,5 A e resistência R = V² ÷ P = 14.400 ÷ 60 = 240 Ω."],

    ["h", "Consumo de energia"],
    ["p", "Energia (kWh) = potência (kW) × tempo (h). Para estimar a conta, multiplique o resultado pelo preço do kWh. O capítulo de energia traz exemplos completos."],
    ["dica", "Os aparelhos que mais pesam na conta são os de resistência (chuveiro, ferro, secador, forno elétrico, aquecedor), porque têm alta potência. Trocar lâmpadas por LED reduz muito o consumo da iluminação."],

    ["h", "Associação de resistores"],
    ["ul", [
      "<b>Em série:</b> os resistores ficam um depois do outro. A corrente é a mesma em todos e a resistência equivalente é a soma: R<sub>eq</sub> = R₁ + R₂ + R₃. Se um queima, o circuito inteiro abre (como nas luzes de enfeite antigas).",
      "<b>Em paralelo:</b> os resistores ficam em ramos separados. A tensão é a mesma em todos, e 1 ÷ R<sub>eq</sub> = 1 ÷ R₁ + 1 ÷ R₂. Para dois resistores, R<sub>eq</sub> = (R₁ · R₂) ÷ (R₁ + R₂). A resistência equivalente é menor que a menor das resistências. É assim a ligação das tomadas e lâmpadas de uma casa."
    ]],
    ["ex", "Resistores de 6 Ω e 3 Ω em paralelo: R<sub>eq</sub> = (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 Ω."],

    ["h", "Segurança elétrica"],
    ["ul", [
      "<b>Curto-circuito:</b> a resistência cai a quase zero, a corrente dispara e o fio superaquece.",
      "<b>Fusíveis e disjuntores</b> interrompem o circuito quando a corrente passa de um limite, evitando incêndios.",
      "<b>Fio terra</b> leva a corrente de falhas para o solo, protegendo quem toca na carcaça do aparelho.",
      "O choque ocorre quando o corpo, ao fechar um circuito, é percorrido pela corrente. A água e a pele molhada diminuem a resistência do corpo e aumentam o perigo."
    ]],

    ["h", "Magnetismo"],
    ["p", "Ímãs têm dois polos, norte e sul. Polos iguais se repelem e polos diferentes se atraem. Um ímã partido ao meio não separa os polos: cada pedaço passa a ter o seu próprio par de polos. A Terra se comporta como um grande ímã, e por isso a bússola aponta para o norte."],

    ["h", "Eletromagnetismo e indução"],
    ["ul", [
      "<b>Oersted:</b> uma corrente elétrica cria campo magnético ao redor do fio. É o princípio dos eletroímãs e dos motores elétricos.",
      "<b>Faraday (indução):</b> a variação do fluxo magnético através de uma espira induz uma corrente. É o princípio dos geradores, que transformam energia mecânica de rotação em energia elétrica, nas usinas e nos dínamos.",
      "<b>Transformador:</b> altera a tensão alternada. A razão das tensões é igual à razão do número de espiras: V₂ ÷ V₁ = N₂ ÷ N₁. Só funciona com corrente que varia."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Corrente",
      enun: "Por um fio condutor passam 120 C de carga elétrica em 1 minuto. Qual é a intensidade média da corrente?",
      alts: ["0,5 A", "2 A", "20 A", "60 A", "7.200 A"],
      gab: "B",
      res: "i = Q ÷ Δt = 120 ÷ 60 = 2 A. O tempo deve estar em segundos. A alternativa A (0,5 A) vem de inverter a divisão (60 ÷ 120)."
    }],

    ["q", {
      tag: "Lei de Ohm",
      enun: "Um resistor de 20 Ω é percorrido por uma corrente de 5 A. Qual é a tensão entre seus terminais?",
      alts: ["4 V", "15 V", "25 V", "100 V", "400 V"],
      gab: "D",
      res: "V = R · i = 20 × 5 = 100 V. A alternativa A (4) vem de dividir 20 por 5, que seria o caminho para achar outra grandeza, não a tensão."
    }],

    ["q", {
      tag: "Potência e resistência",
      enun: "Uma lâmpada tem especificações de 60 W e 120 V. Qual é a resistência elétrica do filamento quando ela funciona nessas condições?",
      alts: ["120 Ω", "240 Ω", "480 Ω", "720 Ω", "7.200 Ω"],
      gab: "B",
      res: "Usando P = V² ÷ R, temos R = V² ÷ P = 120² ÷ 60 = 14.400 ÷ 60 = 240 Ω. Outro caminho: i = 60 ÷ 120 = 0,5 A, e R = V ÷ i = 120 ÷ 0,5 = 240 Ω."
    }],

    ["q", {
      tag: "Resistores em série",
      enun: "Três resistores de 2 Ω, 3 Ω e 5 Ω são ligados em série a uma fonte de 20 V. Qual é a corrente no circuito?",
      alts: ["1 A", "2 A", "4 A", "10 A", "20 A"],
      gab: "B",
      res: "Em série, R_eq = 2 + 3 + 5 = 10 Ω. A corrente é i = V ÷ R_eq = 20 ÷ 10 = 2 A, e é a mesma nos três resistores."
    }],

    ["q", {
      tag: "Resistores em paralelo",
      enun: "Dois resistores, de 6 Ω e 3 Ω, são ligados em paralelo. Qual é a resistência equivalente?",
      alts: ["2 Ω", "4,5 Ω", "6 Ω", "9 Ω", "18 Ω"],
      gab: "A",
      res: "R_eq = (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 Ω. Em paralelo, o resultado é sempre menor que a menor resistência. A alternativa D (9 Ω) é a soma, que vale para a ligação em série."
    }],

    ["q", {
      tag: "Consumo",
      enun: "Um ferro de passar de 1.000 W é usado 2 horas por dia, durante 30 dias. Sendo o preço do kWh igual a R$ 0,90, qual é o custo da energia consumida pelo ferro no mês?",
      alts: ["R$ 18,00", "R$ 54,00", "R$ 60,00", "R$ 108,00", "R$ 540,00"],
      gab: "B",
      res: ["A potência é 1 kW. A energia no mês é 1 × 2 × 30 = 60 kWh.", "O custo é 60 × 0,90 = R$ 54,00. A alternativa C (R$ 60,00) é a energia em kWh, sem multiplicar pelo preço."]
    }],

    ["q", {
      tag: "Chuveiro",
      enun: "Ao girar o seletor de um chuveiro elétrico da posição \"verão\" para \"inverno\", a água sai mais quente. Mantida a tensão da rede constante, o que acontece com o circuito do chuveiro?",
      alts: [
        "A resistência aumenta e a potência diminui.",
        "A resistência aumenta e a potência aumenta.",
        "A resistência diminui e a potência aumenta.",
        "A resistência diminui e a potência diminui.",
        "A resistência e a potência não se alteram."
      ],
      gab: "C",
      res: "Com a tensão fixa, P = V² ÷ R. Diminuindo a resistência, a potência aumenta, e mais energia por segundo vira calor na água. A corrente também aumenta, e por isso o chuveiro precisa de um fio mais grosso e de um disjuntor adequado."
    }],

    ["q", {
      tag: "Indução eletromagnética",
      enun: "Em uma usina, o movimento giratório de uma turbina move ímãs próximos de bobinas de fio, e surge corrente elétrica nas bobinas. Qual princípio físico explica a geração de corrente?",
      alts: [
        "Lei de Ohm, pela qual a resistência define a corrente.",
        "Princípio de Arquimedes, pelo qual o empuxo gera energia.",
        "Efeito Doppler, pela mudança de frequência da onda.",
        "Indução eletromagnética, pela variação do fluxo magnético nas bobinas.",
        "Dilatação térmica, pelo aquecimento do fio."
      ],
      gab: "D",
      res: "A variação do fluxo magnético através das bobinas, causada pelo movimento relativo entre ímãs e fio, induz uma tensão e uma corrente (lei de Faraday). É o princípio de praticamente todos os geradores de usinas e de dínamos."
    }],

    ["q", {
      tag: "Transformador",
      enun: "Um transformador tem 1.000 espiras no enrolamento primário, ligado a 220 V alternados, e 100 espiras no secundário. Qual é a tensão no secundário?",
      alts: ["2 V", "22 V", "220 V", "2.200 V", "22.000 V"],
      gab: "B",
      res: "V₂ ÷ V₁ = N₂ ÷ N₁, então V₂ = 220 × 100 ÷ 1.000 = 22 V. Como o secundário tem menos espiras, o transformador reduz a tensão. É o caso de carregadores de celular."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Corrente: i = Q ÷ Δt. Lei de Ohm: V = R · i. Potência: P = V · i = V² ÷ R.",
      "Série: soma as resistências, mesma corrente. Paralelo: mesma tensão, resistência equivalente menor que a menor.",
      "Chuveiro: menor resistência com tensão fixa significa maior potência.",
      "Faraday: variar o fluxo magnético induz corrente. É o princípio de geradores e transformadores.",
      "Fusíveis, disjuntores e fio terra existem para proteger pessoas e instalações."
    ]]
  ]
});
