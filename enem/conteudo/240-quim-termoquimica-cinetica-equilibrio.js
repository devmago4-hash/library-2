LIVRO.cap({
  area: "Química",
  titulo: "Termoquímica, cinética e equilíbrio",
  sub: "Energia das reações, velocidade, catalisadores e o princípio de Le Chatelier",
  blocos: [
    ["h", "Energia nas reações"],
    ["p", "Toda reação química envolve troca de energia, geralmente na forma de calor. A termoquímica estuda essas trocas. A grandeza usada é a variação de entalpia (ΔH), que representa o calor trocado a pressão constante, em kJ/mol."],
    ["ul", [
      "<b>Reação exotérmica:</b> libera calor para o ambiente. ΔH é negativo. O recipiente esquenta. Exemplos: combustão, neutralização.",
      "<b>Reação endotérmica:</b> absorve calor do ambiente. ΔH é positivo. O recipiente esfria. Exemplo: bolsas de gelo instantâneas e fotossíntese."
    ]],
    ["nota", "ΔH negativo não significa \"pouca energia\". Significa que os produtos têm menos energia que os reagentes, e a diferença foi liberada."],

    ["h", "Entalpia de combustão e de formação"],
    ["p", "A entalpia de combustão é o calor liberado na queima completa de 1 mol de uma substância. Ela permite comparar combustíveis e calcular a energia obtida por massa queimada, bastando converter a massa em mols."],
    ["ex", "Se a combustão do etanol libera cerca de 1.360 kJ por mol (massa molar 46 g/mol), queimar 23 g (meio mol) libera aproximadamente 680 kJ."],

    ["h", "Lei de Hess"],
    ["p", "A variação de entalpia de uma reação não depende do caminho, só do estado inicial e do final. Assim, é possível somar equações químicas conhecidas e somar também os seus ΔH para obter o de uma reação desejada. Ao inverter uma equação, o sinal do ΔH inverte. Ao multiplicar os coeficientes, o ΔH multiplica."],
    ["ex", "C + O₂ → CO₂, ΔH = −394 kJ. CO + ½ O₂ → CO₂, ΔH = −283 kJ. Queremos C + ½ O₂ → CO. Mantemos a primeira e invertemos a segunda (ΔH = +283), e ao somar: ΔH = −394 + 283 = −111 kJ."],

    ["h", "Cinética química: a velocidade das reações"],
    ["p", "A cinética estuda a rapidez com que reagentes viram produtos. Para reagir, as partículas precisam colidir com orientação adequada e energia suficiente, a chamada <b>energia de ativação</b> (Ea). Quanto mais colisões eficazes por segundo, mais rápida é a reação."],
    ["ul", [
      "<b>Temperatura:</b> aumentá-la deixa as partículas mais energéticas e aumenta muito a velocidade. Uma regra aproximada diz que a cada 10 °C a mais a velocidade costuma dobrar. É por isso que os alimentos são refrigerados.",
      "<b>Concentração:</b> mais partículas por volume significam mais colisões. Em gases, o mesmo vale para a pressão.",
      "<b>Superfície de contato:</b> triturar um sólido expõe mais partículas. Um comprimido em pó dissolve mais rápido que inteiro.",
      "<b>Catalisador:</b> uma substância que acelera a reação sem ser consumida, porque oferece um caminho com menor energia de ativação."
    ]],
    ["nota", "O catalisador não altera o ΔH, nem a quantidade final de produto. Ele só faz a reação chegar lá mais rápido. Enzimas são catalisadores biológicos. Os catalisadores dos escapamentos dos carros ajudam a converter gases poluentes em substâncias menos nocivas."],

    ["h", "Equilíbrio químico"],
    ["p", "Muitas reações são reversíveis: os produtos também podem voltar a reagentes. Com o tempo, a velocidade da reação direta se iguala à da inversa, e as concentrações param de variar. Isso é o <b>equilíbrio químico</b>. Ele é dinâmico, porque as duas reações continuam acontecendo, só que em ritmos iguais."],
    ["p", "A constante de equilíbrio (K) relaciona as concentrações de produtos e reagentes, cada uma elevada ao seu coeficiente. Um K grande indica que, no equilíbrio, há muito mais produto que reagente."],

    ["h", "Princípio de Le Chatelier"],
    ["p", "Quando se perturba um sistema em equilíbrio, ele reage no sentido de minimizar a perturbação."],
    ["ul", [
      "<b>Adicionar um reagente</b> desloca o equilíbrio para os produtos. Retirar um produto também.",
      "<b>Aumentar a pressão</b> desloca o equilíbrio para o lado com menos mols de gás.",
      "<b>Aumentar a temperatura</b> favorece a reação endotérmica. Diminuí-la favorece a exotérmica.",
      "<b>Catalisador</b> não desloca o equilíbrio. Só faz atingi-lo mais depressa."
    ]],
    ["ex", "Na síntese da amônia, N₂ + 3 H₂ ⇌ 2 NH₃, há 4 mols de gás à esquerda e 2 à direita. Aumentar a pressão favorece a amônia. Como a reação direta é exotérmica, baixas temperaturas também favorecem a amônia, mas deixam a reação lenta. Na indústria, usam-se um catalisador e uma temperatura intermediária."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Endotérmica ou exotérmica",
      enun: "Ao misturar duas substâncias em um frasco, observa-se que a temperatura do frasco diminui. Essa transformação é:",
      alts: [
        "exotérmica, com ΔH positivo.",
        "exotérmica, com ΔH negativo.",
        "endotérmica, com ΔH negativo.",
        "endotérmica, com ΔH positivo.",
        "isotérmica, com ΔH nulo."
      ],
      gab: "D",
      res: "Se o frasco esfria, o sistema está absorvendo calor do ambiente: o processo é endotérmico e o ΔH é positivo. É o princípio das bolsas de gelo instantâneas, que esfriam ao dissolver certos sais."
    }],

    ["q", {
      tag: "Lei de Hess",
      enun: "São dadas as reações: (I) C + O₂ → CO₂, ΔH = −394 kJ; (II) CO + ½ O₂ → CO₂, ΔH = −283 kJ. Qual é o ΔH da reação C + ½ O₂ → CO?",
      alts: ["−677 kJ", "−394 kJ", "−283 kJ", "−111 kJ", "+111 kJ"],
      gab: "D",
      res: "Mantém-se (I) e inverte-se (II): CO₂ → CO + ½ O₂, ΔH = +283 kJ. Somando, o CO₂ se cancela e resulta em C + ½ O₂ → CO, com ΔH = −394 + 283 = −111 kJ. A alternativa A (−677) soma sem inverter, e a E erra o sinal."
    }],

    ["q", {
      tag: "Calor de combustão",
      enun: "A combustão de 1 mol de etanol (46 g) libera cerca de 1.360 kJ. Qual é a quantidade aproximada de calor liberada na queima completa de 23 g de etanol?",
      alts: ["340 kJ", "680 kJ", "1.360 kJ", "2.720 kJ", "31.280 kJ"],
      gab: "B",
      res: "23 g são 23 ÷ 46 = 0,5 mol. O calor liberado é metade do valor de 1 mol: 0,5 × 1.360 = 680 kJ. A alternativa E (31.280) resulta de multiplicar 1.360 por 23, esquecendo de converter a massa em mols."
    }],

    ["q", {
      tag: "Superfície de contato",
      enun: "Um comprimido efervescente se dissolve na água mais rapidamente quando é triturado antes de ser colocado no copo. Qual fator cinético explica essa diferença?",
      alts: [
        "O aumento da superfície de contato entre o comprimido e a água.",
        "A diminuição da energia de ativação, como em um catalisador.",
        "O aumento da concentração de um dos reagentes gasosos.",
        "A redução da temperatura do sistema.",
        "A alteração da posição do equilíbrio químico."
      ],
      gab: "A",
      res: "Ao triturar, o sólido se divide em partículas menores e expõe mais superfície à água, o que aumenta as colisões por segundo. Nenhuma substância nova foi adicionada, então não há catalisador. A temperatura e a posição do equilíbrio não mudaram."
    }],

    ["q", {
      tag: "Catalisador",
      enun: "Um catalisador é adicionado a uma reação exotérmica que ocorre lentamente. Qual é o efeito esperado?",
      alts: [
        "Aumenta o ΔH, liberando mais calor.",
        "Diminui a energia de ativação e acelera a reação, sem alterar o ΔH.",
        "Aumenta a quantidade final de produto no equilíbrio.",
        "É consumido durante a reação e precisa ser reposto.",
        "Torna a reação endotérmica."
      ],
      gab: "B",
      res: "O catalisador oferece um caminho alternativo, com menor energia de ativação, e a reação fica mais rápida. Ele não é consumido, não altera o ΔH e não desloca o equilíbrio, de modo que a quantidade final de produto é a mesma."
    }],

    ["q", {
      tag: "Temperatura e velocidade",
      enun: "Admita que a velocidade de certa reação dobre a cada 10 °C de aumento na temperatura. Se a reação leva 40 minutos a 20 °C, quanto tempo levará a 40 °C?",
      alts: ["5 min", "10 min", "20 min", "30 min", "80 min"],
      gab: "B",
      res: "De 20 °C para 40 °C são dois aumentos de 10 °C, e a velocidade dobra duas vezes: fica 2 × 2 = 4 vezes maior. O tempo é 4 vezes menor: 40 ÷ 4 = 10 min. A alternativa C (20 min) considera só um aumento de 10 °C."
    }],

    ["q", {
      tag: "Le Chatelier",
      enun: "Considere o equilíbrio N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), cuja reação direta é exotérmica. Qual alteração aumenta a quantidade de NH₃ no equilíbrio?",
      alts: [
        "Diminuir a pressão total do sistema.",
        "Aumentar a temperatura do sistema.",
        "Aumentar a pressão total do sistema, por compressão.",
        "Retirar parte do H₂ do sistema.",
        "Adicionar um catalisador."
      ],
      gab: "C",
      res: ["Há 4 mols de gás nos reagentes e 2 nos produtos. Aumentar a pressão desloca o equilíbrio para o lado com menos mols de gás, isto é, para a formação de NH₃.", "Diminuir a pressão (A), aumentar a temperatura (B, que favorece o sentido endotérmico) e retirar H₂ (D) deslocam o equilíbrio para a esquerda. O catalisador (E) não desloca o equilíbrio."]
    }],

    ["q", {
      tag: "Refrigerante",
      enun: "Em um refrigerante fechado, o gás carbônico está dissolvido sob pressão: CO₂(g) ⇌ CO₂(aq). Ao abrir a garrafa, a pressão sobre o líquido diminui e bolhas se formam. Isso ocorre porque:",
      alts: [
        "o equilíbrio se desloca no sentido da dissolução do gás.",
        "o equilíbrio se desloca no sentido de liberar CO₂ gasoso.",
        "a reação deixa de ser reversível.",
        "o catalisador da garrafa é removido.",
        "a temperatura do líquido aumenta bruscamente."
      ],
      gab: "B",
      res: "Pelo princípio de Le Chatelier, diminuir a pressão desloca o equilíbrio para o lado com mais mols de gás, e o CO₂ dissolvido escapa na forma de bolhas. Por isso o refrigerante aberto perde o gás com o tempo."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Exotérmica: ΔH negativo, libera calor. Endotérmica: ΔH positivo, absorve calor.",
      "Lei de Hess: some as equações e os ΔH. Inverter troca o sinal. Multiplicar multiplica o ΔH.",
      "A velocidade aumenta com temperatura, concentração, superfície de contato e catalisador.",
      "O catalisador reduz a energia de ativação e não muda o ΔH nem o equilíbrio.",
      "Le Chatelier: o sistema reage para minimizar a perturbação (concentração, pressão e temperatura)."
    ]]
  ]
});
