LIVRO.cap({
  area: "Matemática",
  titulo: "Análise combinatória",
  sub: "Princípio multiplicativo, permutações, arranjos e combinações",
  blocos: [
    ["h", "Para que serve"],
    ["p", "A análise combinatória ensina a contar possibilidades sem precisar listar todas. Ela aparece em senhas, placas, filas, comissões e sorteios, e é a base para calcular probabilidades."],

    ["h", "Princípio multiplicativo"],
    ["p", "Se uma escolha pode ser feita de m modos e, para cada uma delas, outra escolha pode ser feita de n modos, o total é m × n. Vale para qualquer número de etapas."],
    ["ex", "Um cardápio tem 3 entradas, 4 pratos principais e 2 sobremesas. Montar uma refeição completa dá 3 × 4 × 2 = 24 combinações."],
    ["dica", "Quando a pergunta tem etapas (\"primeiro escolho..., depois escolho...\"), pense em multiplicar. Quando tem alternativas excludentes (\"ou uma coisa, ou outra\"), pense em somar."],

    ["h", "Fatorial"],
    ["p", "n! é o produto de todos os inteiros de 1 até n. Por exemplo, 5! = 5 × 4 × 3 × 2 × 1 = 120. Por definição, 0! = 1."],

    ["h", "Permutação"],
    ["p", "É o número de formas de ordenar n elementos diferentes: n!. Para três pessoas em fila existem 3! = 6 ordens possíveis."],
    ["p", "Quando há elementos repetidos, divide-se pelo fatorial de cada repetição. É o caso dos anagramas."],
    ["ex", "Os anagramas da palavra ARARA, com 3 letras A e 2 letras R, são 5! ÷ (3! × 2!) = 120 ÷ 12 = 10."],

    ["h", "Arranjo e combinação"],
    ["p", "Ambos escolhem k elementos entre n. A diferença está em saber se a <b>ordem importa</b>."],
    ["ul", [
      "<b>Arranjo (a ordem importa):</b> A(n, k) = n! ÷ (n − k)!. Exemplo: pódio com 1º, 2º e 3º lugar.",
      "<b>Combinação (a ordem não importa):</b> C(n, k) = n! ÷ [k! × (n − k)!]. Exemplo: escolher um grupo de pessoas."
    ]],
    ["ex", "Entre 5 pessoas, formar uma dupla de representantes: C(5, 2) = 5 × 4 ÷ 2 = 10. Escolher um presidente e um vice, nessa ordem, é A(5, 2) = 5 × 4 = 20."],
    ["nota", "Teste de ordem: se trocar a ordem dos escolhidos gera uma situação diferente, é arranjo. Se gera a mesma situação, é combinação."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Princípio multiplicativo",
      enun: "Uma pessoa tem 3 camisas, 4 calças e 2 pares de sapatos. De quantas maneiras diferentes ela pode se vestir usando uma peça de cada tipo?",
      alts: ["9", "12", "18", "24", "36"],
      gab: "D",
      res: "São três etapas independentes: 3 camisas × 4 calças × 2 sapatos = 24 maneiras. Somar (3 + 4 + 2 = 9) seria correto só se ela fosse escolher uma única peça entre todas."
    }],

    ["q", {
      tag: "Permutação com restrição",
      enun: "Cinco amigos vão se sentar em fila para uma foto. Ana e Bia querem ficar sempre juntas, uma ao lado da outra, em qualquer ordem entre elas. De quantas maneiras a fila pode ser formada?",
      alts: ["24", "48", "60", "96", "120"],
      gab: "B",
      res: ["Trate Ana e Bia como um único bloco. Com o bloco e os outros 3 amigos, há 4 elementos para permutar: 4! = 24.", "Dentro do bloco, Ana e Bia podem trocar de lugar de 2 modos. Total: 24 × 2 = 48. A alternativa E (120) ignora a restrição."]
    }],

    ["q", {
      tag: "Anagramas",
      enun: "Quantos anagramas distintos (com ou sem sentido) podem ser formados com as letras da palavra BANANA?",
      alts: ["30", "60", "120", "360", "720"],
      gab: "B",
      res: ["A palavra tem 6 letras, com A repetido 3 vezes e N repetido 2 vezes. O B aparece uma vez.", "Total: 6! ÷ (3! × 2!) = 720 ÷ 12 = 60. Se todas as letras fossem diferentes seriam 720, mas as repetições fazem trocas que não geram anagramas novos."]
    }],

    ["q", {
      tag: "Combinação",
      enun: "Em um grupo de 8 pessoas, será formada uma comissão com 3 membros, sem funções distintas. Quantas comissões diferentes são possíveis?",
      alts: ["24", "56", "112", "168", "336"],
      gab: "B",
      res: ["Como a comissão não tem funções distintas, a ordem não importa, e a conta é uma combinação: C(8, 3) = (8 × 7 × 6) ÷ (3 × 2 × 1) = 336 ÷ 6 = 56.", "A alternativa E (336) é o arranjo A(8, 3), que contaria a mesma comissão várias vezes, uma para cada ordem dos três membros."]
    }],

    ["q", {
      tag: "Senhas",
      enun: "Uma senha é formada por 4 dígitos, todos diferentes entre si (de 0 a 9), e a ordem dos dígitos importa. Quantas senhas são possíveis?",
      alts: ["210", "720", "5.040", "6.561", "10.000"],
      gab: "C",
      res: ["Primeiro dígito: 10 opções. Segundo: 9 (não pode repetir). Terceiro: 8. Quarto: 7. Multiplicando: 10 × 9 × 8 × 7 = 5.040.", "A alternativa A (210) é C(10, 4), que ignora a ordem. A alternativa E (10.000) seria o caso em que os dígitos podem se repetir."]
    }],

    ["q", {
      tag: "Combinação e multiplicação",
      enun: "Em uma turma há 6 meninos e 4 meninas. Quantas comissões podem ser formadas com exatamente 2 meninos e 1 menina?",
      alts: ["24", "36", "48", "60", "90"],
      gab: "D",
      res: ["Escolhem-se os meninos: C(6, 2) = (6 × 5) ÷ 2 = 15. Escolhe-se a menina: C(4, 1) = 4.", "As escolhas são etapas independentes, então se multiplica: 15 × 4 = 60 comissões."]
    }],

    ["q", {
      tag: "Probabilidade com contagem",
      enun: "Entre 10 pessoas (6 mulheres e 4 homens), duas são sorteadas ao acaso para representar o grupo. Qual é a probabilidade de as duas sorteadas serem mulheres?",
      alts: ["1/3", "2/5", "3/5", "6/10", "36/100"],
      gab: "A",
      res: ["Casos possíveis: C(10, 2) = 45 duplas. Casos favoráveis (duas mulheres): C(6, 2) = 15.", "P = 15/45 = 1/3. Outra forma: 6/10 × 5/9 = 30/90 = 1/3, lembrando que, sem reposição, a segunda escolha muda de 6/10 para 5/9. A alternativa E (36/100) trata as escolhas como independentes."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Etapas multiplicam. Alternativas excludentes somam.",
      "Permutação de n elementos diferentes: n!. Com repetição, divida pelo fatorial das repetições.",
      "Pergunte sempre: a ordem importa? Se sim, arranjo. Se não, combinação.",
      "C(n, k) = A(n, k) ÷ k!.",
      "Probabilidade com sorteio: combine contagem e a razão favoráveis ÷ possíveis."
    ]]
  ]
});
