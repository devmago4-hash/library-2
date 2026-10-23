LIVRO.cap({
  area: "SAT",
  titulo: "SAT: o que cai e como treinar",
  sub: "Estrutura do teste, estratégias e questões resolvidas",
  blocos: [
    ["h", "O que é o SAT"],
    ["p", "O SAT é um teste padronizado criado pelo College Board e usado na admissão de universidades americanas. Hoje ele é feito em computador. A pontuação total vai de 400 a 1600, somando duas áreas: Leitura e Escrita, e Matemática, cada uma de 200 a 800."],
    ["nota", "Detalhes como número de questões, tempo e regras de uso de calculadora podem mudar. Confirme no site do College Board antes de se inscrever."],

    ["h", "Como o teste é organizado"],
    ["ul", [
      "<b>Leitura e Escrita:</b> textos curtos, cada um com uma questão. Os temas se dividem em ideias e informações, estrutura e recursos do texto, convenções do inglês padrão e expressão das ideias.",
      "<b>Matemática:</b> álgebra, matemática avançada, resolução de problemas e análise de dados, e geometria e trigonometria.",
      "Cada área tem dois blocos. O teste é <b>adaptativo</b>: o segundo bloco fica mais fácil ou mais difícil conforme o seu desempenho no primeiro."
    ]],
    ["p", "Em Matemática, o teste permite o uso de calculadora. Mesmo assim, resolver de cabeça ou com poucos passos poupa tempo, e é isso que as questões de álgebra abaixo treinam."],

    ["h", "Matemática: o que revisar"],
    ["ul", [
      "Equações e sistemas lineares. Funções lineares e a interpretação de seus coeficientes.",
      "Equações do 2º grau, funções exponenciais e manipulação de expressões.",
      "Porcentagem, razão, proporção e unidades.",
      "Estatística básica: média, mediana, desvio e leitura de tabelas e gráficos.",
      "Geometria: triângulos, círculos, ângulos e trigonometria básica (seno, cosseno, tangente no triângulo retângulo)."
    ]],
    ["dica", "Se você já estudou os capítulos de Matemática do livro do Enem, boa parte da base já está pronta. A diferença é o inglês dos enunciados."],

    ["h", "Leitura e Escrita: o que treinar"],
    ["ul", [
      "Concordância verbal e nominal, pronomes, pontuação e uso de vírgula, ponto e vírgula e dois pontos.",
      "Vocabulário em contexto: o que a palavra significa <i>naquela</i> frase.",
      "Ideia central, inferência e uso de evidências em textos curtos.",
      "Transições entre frases e organização do parágrafo."
    ]],
    ["p", "A melhor preparação é ler muito em inglês, com atenção. Leia artigos de divulgação científica, notícias e ensaios, e pergunte-se sempre: qual é a ideia principal, e por que o autor usou esta palavra e não outra?"],

    ["h", "Estratégia de prova"],
    ["ul", [
      "Responda tudo. Não há desconto por erro, então não deixe questão em branco.",
      "Comece pelas questões que você resolve rápido e volte depois às demais.",
      "Nas de múltipla escolha, elimine alternativas e teste as opções restantes na própria questão.",
      "Treine em condições reais: no computador, com cronômetro, sem pausas extras."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "As questões abaixo são originais e seguem o estilo do teste. Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Equação linear",
      enun: "Se 3(x − 2) + 5 = 2x + 9, qual é o valor de x?",
      alts: ["6", "8", "10", "12", "14"],
      gab: "C",
      res: "Distribuindo, 3x − 6 + 5 = 2x + 9, ou seja, 3x − 1 = 2x + 9. Passando 2x para a esquerda e 1 para a direita: x = 10. Conferindo: 3(10 − 2) + 5 = 29 e 2 × 10 + 9 = 29."
    }],

    ["q", {
      tag: "Sistema linear",
      enun: "Se x + y = 14 e 2x − y = 4, qual é o valor de x · y?",
      alts: ["36", "42", "45", "48", "56"],
      gab: "D",
      res: ["Somando as duas equações, o y se cancela: 3x = 18, então x = 6. Voltando na primeira, y = 14 − 6 = 8.", "O produto é 6 × 8 = 48. Quem acha só x (6) ou só y (8) respondeu uma parte do que foi pedido."]
    }],

    ["q", {
      tag: "Porcentagem",
      enun: "Um produto custa 50 dólares. Ele recebe 20% de desconto e, sobre o preço com desconto, é cobrado um imposto de 10%. Qual é o preço final?",
      alts: ["40 dólares", "44 dólares", "45 dólares", "55 dólares", "60 dólares"],
      gab: "B",
      res: "Os fatores se multiplicam: 0,80 × 1,10 = 0,88. Então 50 × 0,88 = 44. A alternativa C (45) vem de somar −20% com +10% e achar −10%, o que ignora que o imposto incide sobre o preço já reduzido."
    }],

    ["q", {
      tag: "Equação do 2º grau",
      enun: "Qual é a soma das soluções da equação x² − 5x + 6 = 0?",
      alts: ["1", "5", "6", "−5", "−6"],
      gab: "B",
      res: "Fatorando, (x − 2)(x − 3) = 0, então as soluções são 2 e 3, e a soma é 5. Também dá para usar a relação soma = −b/a = −(−5)/1 = 5. A alternativa C (6) é o produto das raízes."
    }],

    ["q", {
      tag: "Função linear",
      enun: "Uma aula particular custa C = 25h + 40 dólares, em que h é o número de horas e 40 é uma taxa fixa de material. Se uma pessoa pagou 215 dólares, quantas horas de aula ela teve?",
      alts: ["4", "5", "6", "7", "8"],
      gab: "D",
      res: "Igualando, 25h + 40 = 215, então 25h = 175 e h = 7. O erro típico é esquecer de tirar a taxa fixa antes de dividir: 215 ÷ 25 = 8,6."
    }],

    ["q", {
      tag: "Trigonometria",
      enun: "Um triângulo retângulo tem catetos de 9 e 12. Qual é o seno do menor ângulo agudo?",
      alts: ["3/4", "3/5", "4/5", "4/3", "5/3"],
      gab: "B",
      res: ["A hipotenusa é √(9² + 12²) = √225 = 15. O menor ângulo fica oposto ao menor cateto (9).", "Seno = cateto oposto ÷ hipotenusa = 9/15 = 3/5. A alternativa C (4/5) é o seno do ângulo maior."]
    }],

    ["q", {
      tag: "Média",
      enun: "A média de cinco números é 12. Quando um sexto número, 24, é incluído, qual passa a ser a média dos seis números?",
      alts: ["14", "12", "13", "15", "18"],
      gab: "A",
      res: "A soma dos cinco números é 5 × 12 = 60. Com o 24, a soma passa a ser 84 e a média é 84 ÷ 6 = 14. Fazer (12 + 24) ÷ 2 = 18 ignora que a média 12 representa cinco números, não um."
    }],

    ["q", {
      tag: "Crescimento exponencial",
      enun: "Uma cidade tinha 2.000 habitantes em 2020 e a população cresce 5% ao ano. Qual será a população em 2022?",
      alts: ["2.050", "2.100", "2.200", "2.205", "2.400"],
      gab: "D",
      res: "Cada ano multiplica por 1,05. Em dois anos: 2.000 × 1,05² = 2.000 × 1,1025 = 2.205. A alternativa B (2.100) soma 5% duas vezes sobre 2.000, ou seja, 2 × 100 = 200, ignorando o juro sobre juro."
    }],

    ["q", {
      tag: "Escrita: concordância",
      enun: "Choose the option that completes the sentence correctly: \"Neither the coach nor the players ____ ready for the game.\"",
      alts: ["is", "are", "has been", "was", "being"],
      gab: "B",
      res: "Com \"neither... nor\", o verbo concorda com o sujeito mais próximo. Aqui é \"the players\" (plural), então o verbo deve estar no plural: <i>are</i>. As opções \"is\", \"has been\" e \"was\" são singulares, e \"being\" não forma uma frase completa."
    }],

    ["q", {
      tag: "Escrita: its ou it's",
      enun: "Choose the option that completes the sentence correctly: \"The company announced that ____ profits rose last year.\"",
      alts: ["it's", "its'", "its", "it", "they're"],
      gab: "C",
      res: "O espaço pede um pronome possessivo, que vem antes do substantivo \"profits\". A forma correta é <i>its</i>, sem apóstrofo. <i>It's</i> é a contração de \"it is\" ou \"it has\", e <i>its'</i> não existe em inglês."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "O SAT vai de 400 a 1600 e tem duas áreas: Leitura e Escrita, e Matemática.",
      "Cada área tem dois blocos, e o teste se adapta ao seu desempenho.",
      "Não há desconto por erro: responda tudo.",
      "A base de Matemática é a mesma do Enem: equações, funções, porcentagem, estatística e geometria.",
      "Em Leitura e Escrita, leia muito em inglês e treine concordância, pontuação e vocabulário em contexto."
    ]]
  ]
});
