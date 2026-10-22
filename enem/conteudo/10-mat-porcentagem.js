LIVRO.cap({
  area: "Matemática",
  titulo: "Porcentagem",
  sub: "Descontos, aumentos, variações e as armadilhas mais comuns",
  blocos: [
    ["h", "O que é porcentagem"],
    ["p", "Porcentagem é uma razão com denominador 100. Dizer 25% é dizer 25/100, ou 0,25, ou 1/4. É a forma mais comum de comparar partes de um todo, e aparece em toda edição do Enem."],
    ["ul", ["25% = 25/100 = 0,25", "50% = 1/2 = 0,5", "10% = 1/10 = 0,1", "1% = 1/100 = 0,01"]],

    ["h", "Calculando a porcentagem de um valor"],
    ["p", "Para achar p% de um valor, multiplique o valor por p/100."],
    ["ex", "30% de 250 é 250 × 0,30 = 75."],
    ["dica", "Atalho de cabeça: 10% é dividir por 10. 5% é a metade de 10%. 20% é o dobro de 10%. Assim, 15% de 200: 10% = 20, 5% = 10, total 30."],

    ["h", "Aumento e desconto: o fator multiplicador"],
    ["p", "Aumentar um valor em p% é multiplicá-lo por (1 + p/100). Reduzir em p% é multiplicá-lo por (1 − p/100). Esse número é o fator multiplicador."],
    ["ul", [
      "Aumento de 20%: fator 1,20",
      "Aumento de 8%: fator 1,08",
      "Desconto de 20%: fator 0,80",
      "Desconto de 35%: fator 0,65",
      "Aumento de 100%: fator 2 (o valor dobra)"
    ]],
    ["ex", "Um produto de R$ 150,00 sofre aumento de 12%. O novo preço é 150 × 1,12 = R$ 168,00."],

    ["h", "Aumentos e descontos sucessivos"],
    ["p", "Quando há duas variações seguidas, os fatores se multiplicam. Nunca some as porcentagens."],
    ["ex", "Aumento de 10% seguido de desconto de 10% não volta ao valor inicial: 1,10 × 0,90 = 0,99. O valor final é 99% do inicial, ou seja, 1% menor."],
    ["nota", "Dois descontos de 20% não dão 40%. O fator é 0,80 × 0,80 = 0,64, então o desconto total é de 36%."],

    ["h", "Variação percentual"],
    ["p", "A variação percentual compara a diferença com o valor inicial: variação = (valor final − valor inicial) ÷ valor inicial. Se der positiva, foi aumento. Se der negativa, foi redução."],
    ["ex", "O preço foi de R$ 40,00 para R$ 46,00. Variação: (46 − 40) ÷ 40 = 6 ÷ 40 = 0,15, ou seja, aumento de 15%."],

    ["h", "Porcentagem de porcentagem"],
    ["p", "Para calcular porcentagem de uma porcentagem, multiplique os fatores. 20% de 50% é 0,20 × 0,50 = 0,10, ou seja, 10%."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver cada questão antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Desconto",
      enun: "Uma loja anuncia uma camiseta por R$ 60,00 e oferece 15% de desconto para pagamento à vista. Qual é o valor da camiseta à vista?",
      alts: ["R$ 9,00", "R$ 45,00", "R$ 51,00", "R$ 69,00", "R$ 75,00"],
      gab: "C",
      res: "Um desconto de 15% corresponde ao fator 0,85. Então 60 × 0,85 = 51. A alternativa A é a armadilha: 9 é o valor do desconto (60 × 0,15), não o preço final."
    }],

    ["q", {
      tag: "Sucessivos",
      enun: "O preço de um celular era R$ 2.000,00. Em novembro, subiu 20%. Em dezembro, a loja deu 20% de desconto sobre o preço de novembro. Qual era o preço em dezembro?",
      alts: ["R$ 1.600,00", "R$ 1.920,00", "R$ 2.000,00", "R$ 2.080,00", "R$ 2.400,00"],
      gab: "B",
      res: ["Os fatores se multiplicam: aumento de 20% é 1,20 e desconto de 20% é 0,80. Então 1,20 × 0,80 = 0,96.", "O preço final é 2.000 × 0,96 = 1.920. Ou seja, o preço ficou 4% abaixo do original. Quem responde R$ 2.000,00 (alternativa C) esqueceu que os 20% incidem sobre bases diferentes."]
    }],

    ["q", {
      tag: "Variação percentual",
      enun: "Em 2022, uma cidade tinha 80.000 habitantes. Em 2024, tinha 92.000. Qual foi o aumento percentual da população nesse período?",
      alts: ["12%", "13,04%", "15%", "20%", "115%"],
      gab: "C",
      res: "A variação é calculada sobre o valor inicial. O aumento foi de 92.000 − 80.000 = 12.000. Então 12.000 ÷ 80.000 = 0,15, ou 15%. A alternativa B vem de dividir por 92.000 (valor final), erro muito comum. A alternativa E é o valor final como porcentagem do inicial (115%), mas o aumento é só a parte acima de 100%."
    }],

    ["q", {
      tag: "Valor original",
      enun: "Após um desconto de 30%, uma geladeira passou a custar R$ 2.100,00. Qual era o preço original?",
      alts: ["R$ 2.730,00", "R$ 2.800,00", "R$ 3.000,00", "R$ 3.100,00", "R$ 3.150,00"],
      gab: "C",
      res: ["Se o desconto foi de 30%, o preço atual é 70% do original: 0,70 × x = 2.100.", "Logo x = 2.100 ÷ 0,70 = 3.000. Conferindo: 3.000 × 0,70 = 2.100. A alternativa A é a armadilha de somar 30% ao preço atual (2.100 × 1,30), mas os 30% incidiram sobre o preço original, não sobre o atual."]
    }],

    ["q", {
      tag: "Porcentagem de porcentagem",
      enun: "Em uma escola, 60% dos alunos são do ensino médio. Desses, 25% fazem parte do grupo de teatro. Que porcentagem de todos os alunos da escola são alunos do ensino médio que fazem teatro?",
      alts: ["15%", "25%", "35%", "60%", "85%"],
      gab: "A",
      res: "O grupo de teatro corresponde a 25% de 60% dos alunos. Multiplicando os fatores: 0,60 × 0,25 = 0,15, ou seja, 15% de todos os alunos da escola."
    }],

    ["q", {
      tag: "Lucro",
      enun: "Uma empresa teve lucro de R$ 400 mil em 2023. Em 2024, o lucro caiu 25% em relação a 2023. Em 2025, o lucro subiu 40% em relação a 2024. Qual foi o lucro em 2025?",
      alts: ["R$ 410 mil", "R$ 420 mil", "R$ 440 mil", "R$ 460 mil", "R$ 500 mil"],
      gab: "B",
      res: ["Em 2024: 400 × 0,75 = 300 mil. Em 2025: 300 × 1,40 = 420 mil.", "Quem soma as porcentagens (−25% + 40% = +15%) chega a 400 × 1,15 = 460 mil, que é a alternativa D. Está errado, porque o aumento de 40% incide sobre o lucro de 2024, que já era menor."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Porcentagem é uma fração de denominador 100.",
      "Aumento de p% multiplica por (1 + p/100). Desconto de p% multiplica por (1 − p/100).",
      "Variações sucessivas: multiplique os fatores, nunca some as porcentagens.",
      "Variação percentual = diferença ÷ valor inicial.",
      "Para achar o valor original, divida pelo fator."
    ]]
  ]
});
