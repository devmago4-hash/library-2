LIVRO.cap({
  area: "Matemática",
  titulo: "Funções",
  sub: "Afim, quadrática e exponencial aplicadas ao dia a dia",
  blocos: [
    ["h", "O que é uma função"],
    ["p", "Função é uma regra que associa cada valor de x a um único valor de y. Escrevemos y = f(x). No Enem, quase sempre ela aparece como um problema de contexto: preço, tempo, população, altura de um objeto."],

    ["h", "Função afim: f(x) = ax + b"],
    ["p", "É a função da reta. O coeficiente <b>a</b> é a taxa de variação (quanto y muda a cada 1 unidade de x). O coeficiente <b>b</b> é o valor inicial, ou seja, o valor de f quando x = 0."],
    ["ul", [
      "Se a > 0, a função é crescente. Se a < 0, é decrescente.",
      "A raiz (onde a reta cruza o eixo x) é x = −b/a.",
      "Dados dois pontos (x₁, y₁) e (x₂, y₂), a taxa é a = (y₂ − y₁) ÷ (x₂ − x₁)."
    ]],
    ["ex", "Uma assinatura custa R$ 20,00 fixos mais R$ 3,00 por filme. O custo é f(x) = 3x + 20. Com 5 filmes: 3 × 5 + 20 = R$ 35,00."],
    ["dica", "Em problemas de contexto, o valor fixo (taxa de entrada, bandeirada, mensalidade) é o b. O valor que se multiplica pela quantidade (por km, por hora, por unidade) é o a."],

    ["h", "Comparando duas funções afins"],
    ["p", "Para saber quando duas opções custam o mesmo, iguale as funções e resolva a equação. Antes desse ponto uma opção é mais barata, e depois dele a outra é."],

    ["h", "Função quadrática: f(x) = ax² + bx + c"],
    ["p", "O gráfico é uma parábola. Se a > 0, ela abre para cima e tem ponto de mínimo. Se a < 0, abre para baixo e tem ponto de máximo."],
    ["ul", [
      "<b>Raízes:</b> pela fórmula de Bhaskara, x = (−b ± √Δ) ÷ 2a, com Δ = b² − 4ac.",
      "Δ > 0: duas raízes reais. Δ = 0: uma raiz. Δ < 0: nenhuma raiz real.",
      "<b>Vértice (máximo ou mínimo):</b> xv = −b ÷ 2a, e depois yv = f(xv)."
    ]],
    ["ex", "A altura de uma bola é h(t) = −5t² + 20t, com h em metros e t em segundos. O vértice ocorre em t = −20 ÷ (2 × −5) = 2 s, e a altura máxima é h(2) = −20 + 40 = 20 m."],
    ["nota", "Problemas de \"máximo lucro\", \"menor custo\" e \"altura máxima\" quase sempre pedem o vértice da parábola."],

    ["h", "Função exponencial: f(x) = a · bˣ"],
    ["p", "Descreve crescimentos e decaimentos em que a quantidade é multiplicada pelo mesmo fator a cada período, como populações, juros compostos e meia-vida. Se b > 1, há crescimento. Se 0 < b < 1, há decaimento."],
    ["ex", "Um capital de R$ 1.000,00 rende 10% ao mês em juros compostos. Em 3 meses: 1.000 × 1,10³ = 1.000 × 1,331 = R$ 1.331,00."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Função afim",
      enun: "Um aplicativo de transporte cobra uma taxa fixa de R$ 5,00 mais R$ 2,50 por quilômetro rodado. Quanto custa uma corrida de 12 km?",
      alts: ["R$ 30,00", "R$ 32,50", "R$ 35,00", "R$ 42,50", "R$ 90,00"],
      gab: "C",
      res: "A função de custo é f(x) = 2,5x + 5. Para x = 12: 2,5 × 12 + 5 = 30 + 5 = 35. A alternativa A esquece a taxa fixa. A alternativa E vem de somar 5 + 2,5 antes de multiplicar por 12."
    }],

    ["q", {
      tag: "Comparando planos",
      enun: "O plano A cobra R$ 40,00 fixos mais R$ 0,50 por minuto de uso. O plano B cobra R$ 20,00 fixos mais R$ 1,00 por minuto. A partir de quantos minutos de uso o plano A passa a ser mais barato que o B?",
      alts: ["Mais de 20 minutos", "Mais de 30 minutos", "Mais de 40 minutos", "Mais de 60 minutos", "Mais de 80 minutos"],
      gab: "C",
      res: ["Os custos são A(x) = 40 + 0,5x e B(x) = 20 + x. Igualando: 40 + 0,5x = 20 + x, o que dá 20 = 0,5x e x = 40 minutos.", "Com 40 minutos os planos custam o mesmo (R$ 60,00). Acima disso, A cresce mais devagar e fica mais barato. Por exemplo, com 50 minutos A custa R$ 65,00 e B custa R$ 70,00."]
    }],

    ["q", {
      tag: "Taxa de variação",
      enun: "O gráfico de uma função afim f é uma reta que passa pelos pontos (0, 10) e (4, 22). Qual é o valor de f(10)?",
      alts: ["30", "34", "40", "43", "50"],
      gab: "C",
      res: ["O ponto (0, 10) mostra que b = 10. A taxa é a = (22 − 10) ÷ (4 − 0) = 12 ÷ 4 = 3. Então f(x) = 3x + 10.", "Portanto f(10) = 3 × 10 + 10 = 40."]
    }],

    ["q", {
      tag: "Máximo da parábola",
      enun: "Um projétil é lançado e sua altura, em metros, após t segundos é dada por h(t) = −5t² + 20t. Qual é a altura máxima atingida?",
      alts: ["10 m", "15 m", "18 m", "20 m", "40 m"],
      gab: "D",
      res: ["Como o coeficiente de t² é negativo, a parábola tem ponto de máximo no vértice. O tempo do vértice é t = −20 ÷ (2 × −5) = 2 s.", "A altura máxima é h(2) = −5 × 4 + 20 × 2 = −20 + 40 = 20 m. A alternativa E (40 m) é o valor de 20 × 2 sem descontar a parte negativa."]
    }],

    ["q", {
      tag: "Equação do 2º grau",
      enun: "Um terreno retangular tem um lado que mede 3 m a mais que o outro e área de 40 m². Quanto mede o lado menor?",
      alts: ["3 m", "4 m", "5 m", "8 m", "10 m"],
      gab: "C",
      res: ["Chamando o lado menor de x, o maior é x + 3, e a área é x(x + 3) = 40, o que dá x² + 3x − 40 = 0.", "Δ = 3² − 4 × 1 × (−40) = 9 + 160 = 169, e √169 = 13. Então x = (−3 ± 13) ÷ 2, que resulta em 5 ou −8. Como medida não pode ser negativa, x = 5 m. Os lados são 5 m e 8 m, e 5 × 8 = 40."]
    }],

    ["q", {
      tag: "Exponencial",
      enun: "Uma colônia de bactérias começa com 500 indivíduos e dobra de tamanho a cada hora. Quantas bactérias haverá depois de 4 horas?",
      alts: ["2.000", "4.000", "8.000", "10.000", "32.000"],
      gab: "C",
      res: ["A cada hora a população é multiplicada por 2, então depois de 4 horas ela foi multiplicada por 2⁴ = 16.", "A população é 500 × 16 = 8.000. Quem calcula 500 × 2 × 4 = 4.000 trata o crescimento como linear, mas ele é exponencial."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Função afim: f(x) = ax + b. O a é a taxa de variação e o b é o valor inicial.",
      "Para comparar duas funções afins, iguale-as e resolva.",
      "Função quadrática: o vértice dá o máximo (a < 0) ou o mínimo (a > 0).",
      "Bhaskara: x = (−b ± √Δ) ÷ 2a, com Δ = b² − 4ac.",
      "Exponencial: a quantidade é multiplicada pelo mesmo fator a cada período."
    ]]
  ]
});
