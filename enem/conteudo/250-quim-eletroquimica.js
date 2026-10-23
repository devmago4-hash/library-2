LIVRO.cap({
  area: "Química",
  titulo: "Eletroquímica",
  sub: "Oxirredução, pilhas, eletrólise, corrosão e baterias",
  blocos: [
    ["h", "Oxidação e redução"],
    ["p", "Reações de oxirredução são aquelas em que há transferência de elétrons. O átomo que <b>perde</b> elétrons sofre <b>oxidação</b>. O que <b>ganha</b> elétrons sofre <b>redução</b>. As duas coisas acontecem juntas, porque os elétrons que um perde, outro ganha."],
    ["ul", [
      "<b>Agente redutor:</b> a espécie que se oxida (ela provoca a redução de outra).",
      "<b>Agente oxidante:</b> a espécie que se reduz (ela provoca a oxidação de outra).",
      "Dica de memória: oxidação, perda de elétrons (OIL RIG, em inglês: Oxidation Is Loss, Reduction Is Gain)."
    ]],

    ["h", "Número de oxidação (Nox)"],
    ["p", "O Nox é a carga que um átomo teria se os elétrons fossem totalmente transferidos. Regras principais:"],
    ["ul", [
      "Substâncias simples (Fe, O₂, H₂) têm Nox zero.",
      "Íons simples têm Nox igual à carga (Na⁺ = +1, Cl⁻ = −1, Ca²⁺ = +2).",
      "O hidrogênio é +1 (exceto nos hidretos metálicos) e o oxigênio é −2 (exceto nos peróxidos).",
      "A soma dos Nox em uma molécula é zero. Em um íon, é igual à carga do íon."
    ]],
    ["ex", "No KMnO₄: K = +1, O = −2 (quatro átomos somam −8). Para a soma ser zero: +1 + Mn − 8 = 0, então Mn = +7."],
    ["p", "Uma reação é de oxirredução quando o Nox de algum elemento varia. Em Zn + Cu²⁺ → Zn²⁺ + Cu, o zinco vai de 0 a +2 (oxidação) e o cobre de +2 a 0 (redução). O zinco é o agente redutor e o íon Cu²⁺ é o agente oxidante."],

    ["h", "Pilhas: energia química em energia elétrica"],
    ["p", "Uma pilha usa uma reação de oxirredução espontânea para gerar corrente elétrica. Os dois processos acontecem em eletrodos separados, ligados por um fio externo, por onde circulam os elétrons, e por uma <b>ponte salina</b>, que fecha o circuito com o movimento dos íons e mantém as soluções neutras."],
    ["ul", [
      "<b>Ânodo:</b> eletrodo onde ocorre a <b>oxidação</b>. Na pilha, é o polo <b>negativo</b>.",
      "<b>Cátodo:</b> eletrodo onde ocorre a <b>redução</b>. Na pilha, é o polo <b>positivo</b>.",
      "Os elétrons vão do ânodo para o cátodo, pelo fio externo."
    ]],
    ["p", "Na pilha de Daniell, o zinco (que se oxida mais facilmente) é o ânodo, e o cobre é o cátodo. A diferença de potencial (ddp, em volts) é calculada com os potenciais padrão de redução: ddp = E°(cátodo) − E°(ânodo). O eletrodo com maior potencial de redução é o que se reduz."],
    ["ex", "Potenciais de redução: Cu²⁺/Cu = +0,34 V e Zn²⁺/Zn = −0,76 V. A ddp da pilha é 0,34 − (−0,76) = 1,10 V."],

    ["h", "Eletrólise: eletricidade em energia química"],
    ["p", "É o processo inverso: uma fonte externa de corrente força uma reação que não é espontânea. Na eletrólise, o ânodo é o polo positivo e o cátodo é o negativo (o contrário da pilha), mas a definição se mantém: oxidação no ânodo, redução no cátodo."],
    ["ul", [
      "<b>Galvanoplastia:</b> cobre uma peça com uma camada de metal (cromagem, niquelagem, douração). A peça a ser revestida deve ser o <b>cátodo</b>, porque é onde o metal se deposita.",
      "<b>Produção de metais e do cloro:</b> o alumínio e o sódio, por exemplo, são obtidos por eletrólise.",
      "<b>Carregar uma bateria</b> recarregável é fazer eletrólise."
    ]],
    ["p", "A quantidade de substância produzida é proporcional à carga elétrica que passa: Q = i · t. Um mol de elétrons tem carga de cerca de 96.500 C."],

    ["h", "Corrosão"],
    ["p", "A ferrugem é uma oxirredução em que o ferro reage com o oxigênio e a água. É mais rápida em ambientes úmidos e salinos, como o litoral. Formas de proteção:"],
    ["ul", [
      "<b>Pintura e revestimento:</b> isolam o metal do ar e da água.",
      "<b>Galvanização:</b> cobre o ferro com zinco.",
      "<b>Metal de sacrifício:</b> liga-se ao ferro um metal que se oxida mais facilmente (como zinco ou magnésio). Ele se desgasta no lugar do ferro."
    ]],

    ["h", "Pilhas, baterias e o meio ambiente"],
    ["p", "Pilhas e baterias comuns podem conter metais pesados, como chumbo, cádmio e mercúrio, que contaminam o solo e a água e se acumulam na cadeia alimentar. Elas não devem ir para o lixo comum. Devem ser levadas a pontos de coleta. As baterias de íons de lítio, usadas em celulares e carros elétricos, são recarregáveis e têm grande densidade de energia, mas também exigem descarte e reciclagem adequados."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Número de oxidação",
      enun: "No permanganato de potássio (KMnO₄), o potássio tem Nox +1 e o oxigênio tem Nox −2. Qual é o Nox do manganês?",
      alts: ["+1", "+2", "+5", "+7", "+8"],
      gab: "D",
      res: "A soma dos Nox em um composto neutro é zero: (+1) + Mn + 4 × (−2) = 0, então Mn − 7 = 0 e Mn = +7. Esse alto Nox torna o permanganato um forte agente oxidante."
    }],

    ["q", {
      tag: "Agente redutor",
      enun: "Na reação Zn + Cu²⁺ → Zn²⁺ + Cu, qual das afirmações está correta?",
      alts: [
        "O Zn é reduzido e é o agente oxidante.",
        "O Cu²⁺ é oxidado e é o agente redutor.",
        "O Zn é oxidado e é o agente redutor.",
        "O Cu²⁺ perde elétrons para o Zn.",
        "Não houve transferência de elétrons."
      ],
      gab: "C",
      res: "O Nox do zinco aumenta de 0 para +2: ele perde elétrons, sofre oxidação e é o agente redutor, pois reduz o Cu²⁺. O cobre vai de +2 a 0: ganha elétrons e se reduz, sendo o agente oxidante."
    }],

    ["q", {
      tag: "Pilha",
      enun: "Uma pilha é montada com eletrodos de zinco e de cobre. Dados: E°(Zn²⁺/Zn) = −0,76 V e E°(Cu²⁺/Cu) = +0,34 V. Qual é a diferença de potencial (ddp) padrão dessa pilha?",
      alts: ["0,42 V", "0,76 V", "1,10 V", "−1,10 V", "0,34 V"],
      gab: "C",
      res: "O cobre tem maior potencial de redução, então é o cátodo e o zinco é o ânodo. ddp = E°cátodo − E°ânodo = 0,34 − (−0,76) = 1,10 V. A ddp de uma pilha que funciona é sempre positiva."
    }],

    ["q", {
      tag: "Polaridade dos eletrodos",
      enun: "Em uma pilha em funcionamento, o eletrodo onde ocorre a oxidação é chamado de:",
      alts: [
        "cátodo, polo positivo, para onde fluem os elétrons.",
        "cátodo, polo negativo, de onde saem os elétrons.",
        "ânodo, polo positivo, para onde fluem os elétrons.",
        "ânodo, polo negativo, de onde saem os elétrons.",
        "ponte salina, polo neutro."
      ],
      gab: "D",
      res: "A oxidação ocorre no ânodo, que libera elétrons. Na pilha, esses elétrons saem do ânodo (polo negativo) e vão pelo fio externo até o cátodo (polo positivo), onde ocorre a redução."
    }],

    ["q", {
      tag: "Metal de sacrifício",
      enun: "Deseja-se proteger uma tubulação de ferro enterrada contra a corrosão, fixando nela um pedaço de outro metal. São dados os potenciais de redução: Fe²⁺/Fe = −0,44 V; Zn²⁺/Zn = −0,76 V; Sn²⁺/Sn = −0,14 V; Cu²⁺/Cu = +0,34 V; Ag⁺/Ag = +0,80 V. Qual metal protegeria o ferro?",
      alts: ["Zinco", "Estanho", "Cobre", "Prata", "Nenhum deles"],
      gab: "A",
      res: "O metal de sacrifício precisa ter menor potencial de redução que o ferro, ou seja, oxidar-se com mais facilidade que ele. Só o zinco (−0,76 V) atende. Estanho, cobre e prata têm potenciais maiores que o do ferro: nesse caso, o ferro é que se oxidaria e a corrosão até aceleraria."
    }],

    ["q", {
      tag: "Eletrólise",
      enun: "Uma corrente de 5 A passa por 1.930 s em uma solução de Cu²⁺, depositando cobre metálico (Cu²⁺ + 2 e⁻ → Cu). Qual é a massa aproximada de cobre depositada? (1 mol de elétrons = 96.500 C; massa molar do Cu = 63,5 g/mol.)",
      alts: ["0,635 g", "1,59 g", "3,175 g", "6,35 g", "63,5 g"],
      gab: "C",
      res: ["A carga é Q = i · t = 5 × 1.930 = 9.650 C, que equivale a 9.650 ÷ 96.500 = 0,1 mol de elétrons.", "Cada mol de Cu consome 2 mol de elétrons, então se depositam 0,05 mol de Cu: 0,05 × 63,5 = 3,175 g. A alternativa D (6,35 g) esquece que são 2 elétrons por átomo de cobre."]
    }],

    ["q", {
      tag: "Galvanoplastia",
      enun: "Para cobrir uma peça de aço com uma camada de níquel por galvanoplastia, a peça deve ser ligada ao:",
      alts: [
        "polo positivo, funcionando como ânodo.",
        "polo negativo, funcionando como cátodo.",
        "polo positivo, funcionando como cátodo.",
        "polo negativo, funcionando como ânodo.",
        "polo neutro da fonte."
      ],
      gab: "B",
      res: "Os íons Ni²⁺ da solução precisam se reduzir e se depositar como níquel metálico sobre a peça. A redução ocorre no cátodo, que na eletrólise é o polo negativo. Por isso a peça é ligada ao polo negativo."
    }],

    ["q", {
      tag: "Meio ambiente",
      enun: "Por que o descarte de pilhas e baterias usadas no lixo comum é um problema ambiental?",
      alts: [
        "Elas liberam oxigênio em excesso, que queima o solo.",
        "Podem conter metais pesados, como chumbo e cádmio, que contaminam o solo e a água e se acumulam nos seres vivos.",
        "São feitas de materiais que se transformam em gases de efeito estufa de imediato.",
        "O plástico das pilhas é o único componente tóxico, e ele é facilmente reciclado.",
        "Elas absorvem a umidade do solo e causam seca."
      ],
      gab: "B",
      res: "Metais pesados como chumbo, cádmio e mercúrio são tóxicos e não se degradam. Ao vazarem no solo e na água, entram na cadeia alimentar e se acumulam nos organismos. Por isso pilhas e baterias devem ser levadas a pontos de coleta."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Oxidação perde elétrons (agente redutor). Redução ganha elétrons (agente oxidante).",
      "Pilha: reação espontânea que gera corrente. Ânodo (oxidação, polo negativo) e cátodo (redução, polo positivo).",
      "ddp = E°cátodo − E°ânodo. O maior potencial de redução é o que se reduz.",
      "Eletrólise: a corrente força uma reação não espontânea. Na galvanoplastia, a peça é o cátodo.",
      "Metal de sacrifício: um metal que oxida mais fácil que o ferro protege contra a ferrugem."
    ]]
  ]
});
