LIVRO.cap({
  area: "Matemática",
  titulo: "Geometria plana e espacial",
  sub: "Áreas, volumes, Pitágoras e semelhança",
  blocos: [
    ["h", "Áreas das figuras planas"],
    ["ul", [
      "<b>Retângulo:</b> base × altura",
      "<b>Quadrado:</b> lado × lado",
      "<b>Triângulo:</b> base × altura ÷ 2",
      "<b>Trapézio:</b> (base maior + base menor) × altura ÷ 2",
      "<b>Círculo:</b> π × r², com r o raio (metade do diâmetro)"
    ]],
    ["p", "O comprimento da circunferência é 2 × π × r. Quando a questão não informar o valor de π, ela costuma pedir uma aproximação, como 3 ou 3,14."],
    ["nota", "O erro clássico é usar o diâmetro no lugar do raio. Leia o enunciado com atenção: se ele dá o diâmetro, divida por 2."],

    ["h", "Teorema de Pitágoras"],
    ["p", "Em um triângulo retângulo, o quadrado da hipotenusa (lado oposto ao ângulo reto) é igual à soma dos quadrados dos catetos: a² = b² + c²."],
    ["ex", "Catetos 6 e 8. Hipotenusa: 6² + 8² = 36 + 64 = 100, logo a hipotenusa é 10. Trincas muito comuns: 3-4-5, 5-12-13 e 8-15-17."],

    ["h", "Semelhança"],
    ["p", "Figuras semelhantes têm a mesma forma e tamanhos proporcionais. Se dois triângulos são semelhantes, a razão entre lados correspondentes é constante. É assim que se calcula a altura de um prédio pela sua sombra."],
    ["ex", "Uma vara de 2 m projeta uma sombra de 1,5 m. No mesmo instante, uma árvore projeta uma sombra de 6 m. Como 2/1,5 = h/6, a altura é h = 8 m."],
    ["nota", "Se as medidas lineares de uma figura são multiplicadas por k, a área é multiplicada por k² e o volume por k³. Dobrar o lado de um quadrado multiplica a área por 4. Dobrar a aresta de um cubo multiplica o volume por 8."],

    ["h", "Volumes dos sólidos"],
    ["ul", [
      "<b>Prisma ou paralelepípedo:</b> área da base × altura",
      "<b>Cilindro:</b> π × r² × h",
      "<b>Pirâmide:</b> (área da base × altura) ÷ 3",
      "<b>Cone:</b> π × r² × h ÷ 3",
      "<b>Esfera:</b> (4/3) × π × r³"
    ]],
    ["dica", "Pirâmide e cone ocupam um terço do volume do prisma e do cilindro com a mesma base e a mesma altura."],

    ["h", "Conversões de unidades"],
    ["ul", [
      "1 m = 100 cm, mas 1 m² = 10.000 cm² e 1 m³ = 1.000.000 cm³",
      "1 m³ = 1.000 litros",
      "1 L = 1.000 mL = 1.000 cm³"
    ]],
    ["ex", "Uma caixa de 50 cm × 40 cm × 30 cm tem volume 60.000 cm³, que equivalem a 60 litros."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Pitágoras",
      enun: "Uma escada de 13 m de comprimento está apoiada em uma parede vertical, com o pé a 5 m da base da parede. A que altura da parede a escada toca?",
      alts: ["8 m", "10 m", "12 m", "14 m", "18 m"],
      gab: "C",
      res: "A escada é a hipotenusa. Os catetos são a distância ao pé da parede (5 m) e a altura h. Então 13² = 5² + h², ou 169 = 25 + h², o que dá h² = 144 e h = 12 m. É a trinca 5-12-13."
    }],

    ["q", {
      tag: "Área e porcentagem",
      enun: "Uma sala retangular de 5 m por 4 m será revestida com peças quadradas de 50 cm de lado. Pensando nas perdas, comprou-se 10% a mais de peças do que o necessário. Quantas peças foram compradas?",
      alts: ["80", "84", "88", "90", "100"],
      gab: "C",
      res: ["Área da sala: 5 × 4 = 20 m². Cada peça tem 0,5 × 0,5 = 0,25 m². Então o necessário é 20 ÷ 0,25 = 80 peças.", "Com 10% a mais: 80 × 1,10 = 88 peças."]
    }],

    ["q", {
      tag: "Círculo",
      enun: "Uma pizzaria vende uma pizza grande de 30 cm de diâmetro por um preço, e uma pizza média de 20 cm de diâmetro. Considerando duas pizzas médias, em quanto a área de uma pizza grande é maior que a soma das áreas das duas médias?",
      alts: ["5%", "10%", "12,5%", "25%", "50%"],
      gab: "C",
      res: ["Raios: grande 15 cm e média 10 cm. Área da grande: π × 15² = 225π. Área de uma média: π × 10² = 100π, e de duas, 200π.", "A diferença é 225π − 200π = 25π, e 25π ÷ 200π = 0,125, ou 12,5%. Como o π aparece nos dois lados, ele se cancela."]
    }],

    ["q", {
      tag: "Volume do cilindro",
      enun: "Uma caixa-d'água tem formato de cilindro com 2 m de diâmetro e 2 m de altura. Adotando π = 3, quantos litros de água ela comporta quando está cheia?",
      alts: ["3.000", "6.000", "12.000", "18.000", "24.000"],
      gab: "B",
      res: ["O diâmetro é 2 m, então o raio é 1 m. Volume: π × r² × h = 3 × 1² × 2 = 6 m³.", "Como 1 m³ equivale a 1.000 litros, a caixa comporta 6.000 litros. Quem usa 2 como raio chega a 3 × 4 × 2 = 24 m³ (alternativa E)."]
    }],

    ["q", {
      tag: "Semelhança",
      enun: "Em um mesmo instante, um poste de 6 m projeta uma sombra de 4 m, e um prédio projeta uma sombra de 30 m. Qual é a altura do prédio?",
      alts: ["20 m", "36 m", "40 m", "45 m", "50 m"],
      gab: "D",
      res: "Os raios de sol formam triângulos semelhantes. A razão entre a altura e a sombra é a mesma: 6/4 = h/30. Então h = 6 × 30 ÷ 4 = 45 m."
    }],

    ["q", {
      tag: "Volume da esfera",
      enun: "Uma bola esférica tem raio de 3 cm. Adotando π = 3, qual é o seu volume?",
      alts: ["27 cm³", "36 cm³", "54 cm³", "108 cm³", "324 cm³"],
      gab: "D",
      res: "V = (4/3) × π × r³ = (4/3) × 3 × 3³ = 4 × 27 = 108 cm³. Na conta, o 3 do π cancela com o denominador 3 da fórmula."
    }],

    ["q", {
      tag: "Fator de escala",
      enun: "Um modelo reduzido de um reservatório cúbico tem aresta 5 vezes menor que a do reservatório real. Se o modelo comporta 2 litros, quantos litros comporta o reservatório real?",
      alts: ["10", "25", "50", "250", "1.250"],
      gab: "D",
      res: ["Se as medidas lineares são 5 vezes maiores, o volume é 5³ = 125 vezes maior. Então o reservatório real comporta 2 × 125 = 250 litros.", "Multiplicar por 5 (alternativa A) ou por 25 (alternativa B) é esquecer que o volume cresce com o cubo da razão de semelhança."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Confira se o enunciado dá raio ou diâmetro.",
      "Pitágoras: hipotenusa² = cateto² + cateto². Decore 3-4-5 e 5-12-13.",
      "Semelhança: razões entre lados correspondentes são iguais. Área vai com k², volume com k³.",
      "Pirâmide e cone valem 1/3 de prisma e cilindro de mesma base e altura.",
      "1 m³ = 1.000 litros."
    ]]
  ]
});
