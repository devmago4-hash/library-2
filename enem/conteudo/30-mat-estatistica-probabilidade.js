LIVRO.cap({
  area: "Matemática",
  titulo: "Estatística e probabilidade",
  sub: "Média, mediana, moda, desvio e as regras do acaso",
  blocos: [
    ["h", "Medidas de posição"],
    ["p", "Resumem um conjunto de dados em um único número. As três mais cobradas são a média, a mediana e a moda."],
    ["ul", [
      "<b>Média:</b> soma de todos os valores ÷ quantidade de valores.",
      "<b>Mediana:</b> valor central dos dados em ordem crescente. Se a quantidade for par, é a média dos dois valores do meio.",
      "<b>Moda:</b> valor que mais se repete. Pode não existir ou haver mais de uma."
    ]],
    ["ex", "Dados: 2, 3, 5, 7, 8, 10. A média é 35 ÷ 6 ≈ 5,83. Como há 6 valores (par), a mediana é a média dos dois centrais: (5 + 7) ÷ 2 = 6. Não há moda, porque nenhum valor se repete."],
    ["nota", "Ordene os dados antes de achar a mediana. É o erro mais comum nessa conta."],

    ["h", "Média ponderada"],
    ["p", "Quando os valores têm pesos diferentes, multiplique cada valor pelo seu peso, some tudo e divida pela soma dos pesos."],
    ["ex", "Notas 8 (peso 1) e 6 (peso 3): (8 × 1 + 6 × 3) ÷ (1 + 3) = 26 ÷ 4 = 6,5. A média simples seria 7, mas a nota de peso maior puxa o resultado para perto de 6."],

    ["h", "Medidas de dispersão"],
    ["p", "Mostram o quanto os dados se espalham. A amplitude é a diferença entre o maior e o menor valor. O desvio padrão mede, em média, a distância dos valores até a média: quanto menor, mais homogêneos são os dados."],
    ["dica", "No Enem você raramente precisa calcular o desvio padrão. O mais comum é comparar conjuntos: o que tem valores mais agrupados em torno da média tem desvio menor."],

    ["h", "Probabilidade"],
    ["p", "Probabilidade de um evento = número de casos favoráveis ÷ número de casos possíveis, quando todos os resultados são igualmente prováveis. O valor fica entre 0 (impossível) e 1 (certo), e pode ser escrito como fração, decimal ou porcentagem."],
    ["ex", "Em um dado comum, a probabilidade de sair um número maior que 4 é 2/6 = 1/3, porque os casos favoráveis são 5 e 6."],

    ["h", "Regras úteis"],
    ["ul", [
      "<b>Evento complementar:</b> P(não ocorrer) = 1 − P(ocorrer). Ótimo para problemas com a expressão \"pelo menos um\".",
      "<b>Eventos que não podem ocorrer juntos (ou):</b> some as probabilidades.",
      "<b>Eventos independentes (e):</b> multiplique as probabilidades.",
      "<b>Probabilidade condicional:</b> refaça a contagem considerando apenas o que já se sabe que aconteceu."
    ]],
    ["ex", "Uma moeda é lançada duas vezes. A probabilidade de dar duas caras é 1/2 × 1/2 = 1/4, porque os lançamentos são independentes."],
    ["nota", "Sem reposição, os eventos deixam de ser independentes. Se você tira uma bola da urna e não a devolve, as chances da segunda retirada mudam."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Média, mediana e moda",
      enun: "Os números de livros lidos por sete alunos durante o ano foram 4, 5, 5, 7, 9, 12 e 14. Quais são, respectivamente, a moda, a mediana e a média desse conjunto?",
      alts: ["5, 7 e 8", "5, 8 e 7", "7, 5 e 8", "5, 7 e 9", "7, 7 e 8"],
      gab: "A",
      res: "A moda é o valor que mais aparece: 5. Os dados já estão em ordem e são 7 valores, então a mediana é o quarto: 7. A soma é 4 + 5 + 5 + 7 + 9 + 12 + 14 = 56, e 56 ÷ 7 = 8. A resposta é 5, 7 e 8."
    }],

    ["q", {
      tag: "Média ponderada",
      enun: "Em uma disciplina, a nota final é calculada com a prova 1 (peso 2), a prova 2 (peso 3) e um trabalho (peso 5). Um aluno tirou 6 na prova 1, 7 na prova 2 e 9 no trabalho. Qual foi a nota final?",
      alts: ["7,3", "7,5", "7,8", "8,0", "8,2"],
      gab: "C",
      res: ["A soma dos pesos é 2 + 3 + 5 = 10. A soma ponderada é 6 × 2 + 7 × 3 + 9 × 5 = 12 + 21 + 45 = 78.", "Nota final: 78 ÷ 10 = 7,8. A alternativa A (7,3) é a média simples (22 ÷ 3), que ignora os pesos."]
    }],

    ["q", {
      tag: "Mediana",
      enun: "Seis amigos mediram o tempo, em minutos, que levam para chegar ao trabalho: 25, 10, 15, 30, 20 e 40. Qual é a mediana desses tempos?",
      alts: ["20 min", "22,5 min", "23 min", "25 min", "30 min"],
      gab: "B",
      res: "Em ordem crescente: 10, 15, 20, 25, 30, 40. Como são 6 valores (quantidade par), a mediana é a média dos dois centrais: (20 + 25) ÷ 2 = 22,5. A média aritmética é 140 ÷ 6 ≈ 23,3, valor diferente."
    }],

    ["q", {
      tag: "Probabilidade simples",
      enun: "Uma urna tem 5 bolas vermelhas, 3 azuis e 2 verdes, todas iguais no tato. Retirando uma bola ao acaso, qual é a probabilidade de ela ser azul ou verde?",
      alts: ["30%", "40%", "50%", "60%", "80%"],
      gab: "C",
      res: "Há 5 + 3 + 2 = 10 bolas. Os casos favoráveis são 3 + 2 = 5, porque não existe bola azul e verde ao mesmo tempo, então se somam. P = 5/10 = 50%. Também dá para usar o complementar: 1 − 5/10 = 50%."
    }],

    ["q", {
      tag: "Dois dados",
      enun: "Dois dados comuns e honestos são lançados juntos. Qual é a probabilidade de que a soma dos resultados seja 7?",
      alts: ["1/12", "1/9", "1/6", "1/4", "7/36"],
      gab: "C",
      res: ["Há 6 × 6 = 36 resultados possíveis. As somas 7 ocorrem em (1,6), (2,5), (3,4), (4,3), (5,2) e (6,1), ou seja, 6 casos favoráveis.", "P = 6/36 = 1/6. Quem conta só 3 casos esquece que (1,6) e (6,1) são resultados diferentes."]
    }],

    ["q", {
      tag: "Pelo menos um",
      enun: "A previsão indica 30% de chance de chuva no sábado e 30% no domingo, de forma independente. Qual é a probabilidade de chover em pelo menos um dos dois dias?",
      alts: ["9%", "30%", "51%", "60%", "90%"],
      gab: "C",
      res: ["É mais fácil calcular o complementar: não chover nenhum dos dois dias. A chance de não chover em um dia é 0,70, e como os dias são independentes, 0,70 × 0,70 = 0,49.", "Então P(pelo menos um dia de chuva) = 1 − 0,49 = 0,51, ou 51%. Somar 30% + 30% = 60% está errado porque conta duas vezes o caso em que chove nos dois dias."]
    }],

    ["q", {
      tag: "Desvio padrão",
      enun: "Dois times de revezamento têm a mesma média de 7 segundos por atleta. As marcas do time X são 7, 7, 7 e 7, e as do time Y são 4, 6, 8 e 10. Qual afirmação está correta?",
      alts: [
        "O desvio padrão do time Y é menor, pois ele tem o atleta mais rápido.",
        "Os dois times têm o mesmo desvio padrão, pois têm a mesma média.",
        "O desvio padrão do time X é zero, e o do time Y é maior que zero.",
        "O desvio padrão do time X é maior, pois todos os valores são iguais.",
        "Não é possível comparar sem calcular a mediana."
      ],
      gab: "C",
      res: "O desvio padrão mede a dispersão em relação à média. No time X todos os valores são iguais à média, então não há dispersão e o desvio é zero. No time Y os valores se afastam da média 7, então o desvio é maior que zero. Média igual não significa dispersão igual."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Média soma e divide, mediana é o valor central (com os dados em ordem) e moda é o mais frequente.",
      "Média ponderada: multiplique pelos pesos e divida pela soma dos pesos.",
      "Desvio padrão pequeno significa dados mais agrupados em torno da média.",
      "Probabilidade = favoráveis ÷ possíveis.",
      "\"Ou\" soma, \"e\" multiplica (eventos independentes), \"pelo menos um\" pede o complementar."
    ]]
  ]
});
