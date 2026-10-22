LIVRO.cap({
  area: "Matemática",
  titulo: "Razão, proporção e regra de três",
  sub: "Escalas, receitas, velocidade e divisão em partes proporcionais",
  blocos: [
    ["h", "Razão"],
    ["p", "Razão é a comparação entre duas grandezas por divisão. A razão entre a e b é a/b, com b diferente de zero. Ela aparece em escalas de mapa, densidade, velocidade média e consumo de combustível."],
    ["ul", [
      "<b>Velocidade média:</b> distância ÷ tempo (km/h)",
      "<b>Densidade:</b> massa ÷ volume (g/cm³)",
      "<b>Consumo:</b> distância ÷ combustível (km/L)",
      "<b>Escala:</b> medida no desenho ÷ medida real"
    ]],
    ["nota", "Antes de dividir, coloque as duas grandezas na mesma unidade. Comparar 2 m com 50 cm exige converter: 200 cm ÷ 50 cm = 4."],

    ["h", "Escala"],
    ["p", "Uma escala 1:500.000 significa que 1 cm no mapa representa 500.000 cm na realidade. Como 100.000 cm valem 1 km, então 500.000 cm valem 5 km."],
    ["ex", "No mapa, duas cidades estão a 3 cm uma da outra, em escala 1:200.000. Distância real: 3 × 200.000 = 600.000 cm = 6 km."],

    ["h", "Proporção"],
    ["p", "Proporção é a igualdade entre duas razões: a/b = c/d. A propriedade fundamental diz que o produto dos meios é igual ao produto dos extremos: a × d = b × c. É a ideia por trás da regra de três."],

    ["h", "Regra de três simples"],
    ["p", "Serve quando duas grandezas se relacionam e você conhece três valores e quer achar o quarto. O primeiro passo é decidir se elas são diretamente ou inversamente proporcionais."],
    ["ul", [
      "<b>Diretamente proporcionais:</b> quando uma aumenta, a outra aumenta na mesma proporção. Exemplo: quantidade de produto e preço.",
      "<b>Inversamente proporcionais:</b> quando uma aumenta, a outra diminui na mesma proporção. Exemplo: número de operários e dias de obra."
    ]],
    ["ex", "Direta: 3 kg de arroz custam R$ 21,00. Quanto custam 5 kg? Montando 3/21 = 5/x, temos x = 21 × 5 ÷ 3 = R$ 35,00."],
    ["ex", "Inversa: 6 torneiras enchem um tanque em 10 horas. Com 15 torneiras iguais, o tempo cai. Multiplica-se em linha: 6 × 10 = 15 × x, logo x = 4 horas."],
    ["dica", "Teste rápido: se o dobro de uma grandeza leva ao dobro da outra, é direta. Se leva à metade, é inversa."],

    ["h", "Regra de três composta"],
    ["p", "Envolve três ou mais grandezas. Compare cada uma com aquela que você quer descobrir, uma de cada vez, e decida se é direta ou inversa em relação a ela. Depois multiplique as razões."],
    ["ex", "Uma máquina produz 100 peças em 2 horas. Quantas peças produzem 3 máquinas iguais em 4 horas? A produção é direta ao número de máquinas e direta ao tempo: 100 × 3 × 2 = 600 peças."],

    ["h", "Divisão em partes proporcionais"],
    ["p", "Para dividir um valor em partes proporcionais a certos números, some esses números, ache o valor de cada parte e multiplique."],
    ["ex", "Dividir R$ 900,00 em partes proporcionais a 2, 3 e 4. A soma é 9, e cada parte vale 900 ÷ 9 = 100. Os valores são R$ 200,00, R$ 300,00 e R$ 400,00."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Escala",
      enun: "Em um mapa de escala 1:500.000, a distância entre duas cidades é de 4 cm. Qual é a distância real entre elas?",
      alts: ["2 km", "4 km", "20 km", "200 km", "2.000 km"],
      gab: "C",
      res: "Cada 1 cm do mapa vale 500.000 cm reais. Então 4 × 500.000 = 2.000.000 cm. Como 1 km tem 100.000 cm, divide-se por 100.000 e o resultado é 20 km. Erros comuns vêm de errar a conversão de centímetros para quilômetros."
    }],

    ["q", {
      tag: "Regra de três direta",
      enun: "Uma receita para 6 pessoas usa 450 g de farinha. Mantendo as proporções, quantos gramas de farinha são necessários para 10 pessoas?",
      alts: ["540 g", "600 g", "700 g", "750 g", "900 g"],
      gab: "D",
      res: "A quantidade de farinha é diretamente proporcional ao número de pessoas. Montando 450/6 = x/10, temos x = 450 × 10 ÷ 6 = 750. Outro caminho: cada pessoa usa 450 ÷ 6 = 75 g, e 10 pessoas usam 750 g."
    }],

    ["q", {
      tag: "Regra de três inversa",
      enun: "Quatro operários, trabalhando no mesmo ritmo, constroem um muro em 15 dias. Se forem 6 operários nesse mesmo ritmo, em quantos dias o muro ficará pronto?",
      alts: ["5 dias", "8 dias", "10 dias", "12 dias", "23 dias"],
      gab: "C",
      res: ["Mais operários significa menos dias, então as grandezas são inversamente proporcionais. Multiplica-se em linha: 4 × 15 = 6 × x.", "Logo x = 60 ÷ 6 = 10 dias. Quem faz 15 × 6 ÷ 4 = 22,5 tratou a relação como direta, o que daria um resultado maior que 15, impossível com mais gente trabalhando."]
    }],

    ["q", {
      tag: "Regra de três composta",
      enun: "Seis máquinas iguais, funcionando 8 horas por dia, produzem 1.440 peças em 5 dias. Quantas peças produzirão 10 dessas máquinas, funcionando 6 horas por dia, em 3 dias?",
      alts: ["810", "1.000", "1.080", "1.200", "1.440"],
      gab: "C",
      res: ["A produção é diretamente proporcional ao número de máquinas, às horas por dia e aos dias. Comparando com a situação inicial: 10/6 × 6/8 × 3/5 = 180/240 = 3/4.", "Então a produção é 3/4 de 1.440 = 1.080 peças. Conferindo por máquina-hora: 6 × 8 × 5 = 240 máquinas-hora geram 1.440 peças, ou seja, 6 peças por máquina-hora. Na nova situação são 10 × 6 × 3 = 180 máquinas-hora, e 180 × 6 = 1.080."]
    }],

    ["q", {
      tag: "Partes proporcionais",
      enun: "Dois sócios investiram R$ 3.000,00 e R$ 5.000,00 em um negócio. O lucro de R$ 12.000,00 será dividido em partes proporcionais ao investimento de cada um. Quanto receberá o sócio que investiu mais?",
      alts: ["R$ 5.000,00", "R$ 6.000,00", "R$ 7.000,00", "R$ 7.500,00", "R$ 8.000,00"],
      gab: "D",
      res: ["O investimento total é 3.000 + 5.000 = 8.000. O sócio que investiu mais tem 5/8 do total.", "Então ele recebe 5/8 de 12.000 = 7.500. O outro recebe 3/8 de 12.000 = 4.500, e a soma é 12.000. A alternativa B é a armadilha de dividir o lucro igualmente."]
    }],

    ["q", {
      tag: "Mistura",
      enun: "Um suco é preparado misturando 1 parte de concentrado para 4 partes de água. Para preparar 2 litros de suco pronto, quantos mililitros de concentrado são necessários?",
      alts: ["200 mL", "400 mL", "500 mL", "800 mL", "1.600 mL"],
      gab: "B",
      res: "O suco pronto tem 1 + 4 = 5 partes, e o concentrado é 1 dessas 5 partes. Como 2 litros são 2.000 mL, o concentrado é 2.000 ÷ 5 = 400 mL. Quem divide por 4 chega a 500 mL (alternativa C), mas esquece que o total inclui o concentrado. A alternativa E é a quantidade de água."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Razão é divisão. Converta as unidades antes de comparar.",
      "Escala: medida do mapa × denominador = medida real, e depois converta a unidade.",
      "Regra de três direta: multiplica em cruz. Inversa: multiplica em linha.",
      "Na composta, compare cada grandeza com a que você procura e multiplique as razões.",
      "Partes proporcionais: some as partes, ache o valor de uma parte e multiplique."
    ]]
  ]
});
