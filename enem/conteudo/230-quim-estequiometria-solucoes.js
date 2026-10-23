LIVRO.cap({
  area: "Química",
  titulo: "Estequiometria e soluções",
  sub: "Mol, massa molar, cálculos de reações, rendimento e concentração",
  blocos: [
    ["h", "O mol e a massa molar"],
    ["p", "Átomos e moléculas são pequenos demais para contar um a um. Por isso a Química usa o <b>mol</b>, uma quantidade de matéria que equivale a 6,0 × 10²³ partículas. Esse número é a constante de Avogadro. Um mol de qualquer substância contém, portanto, 6,0 × 10²³ unidades dela."],
    ["p", "A <b>massa molar</b> é a massa de 1 mol, em g/mol, e coincide numericamente com a massa molecular da substância. Ela se obtém somando as massas atômicas dos átomos da fórmula."],
    ["ul", [
      "Massas atômicas usadas neste capítulo: H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35,5, Ca = 40.",
      "Água (H₂O): 2 × 1 + 16 = 18 g/mol.",
      "Gás carbônico (CO₂): 12 + 2 × 16 = 44 g/mol.",
      "Número de mols: n = massa ÷ massa molar."
    ]],
    ["ex", "Em 88 g de CO₂ há 88 ÷ 44 = 2 mol, o que equivale a 2 × 6,0 × 10²³ = 1,2 × 10²⁴ moléculas."],

    ["h", "Balanceamento"],
    ["p", "Uma equação química balanceada mostra que os átomos se conservam: o número de átomos de cada elemento é o mesmo nos reagentes e nos produtos. Isso é a lei de Lavoisier (conservação da massa). Os coeficientes indicam a proporção em mols."],
    ["ex", "2 H₂ + O₂ → 2 H₂O. Isso significa que 2 mol de H₂ reagem com 1 mol de O₂ e formam 2 mol de H₂O."],

    ["h", "Cálculo estequiométrico em quatro passos"],
    ["ol", [
      "Escreva a equação e <b>balanceie</b>.",
      "Converta o dado em mols (massa ÷ massa molar).",
      "Use a <b>proporção entre os coeficientes</b> para achar os mols do que se pede.",
      "Converta de volta para a unidade pedida (massa, número de moléculas)."
    ]],
    ["ex", "Quantos gramas de CO₂ se formam na queima completa de 8 g de metano? CH₄ + 2 O₂ → CO₂ + 2 H₂O. A massa molar do CH₄ é 16, então 8 g são 0,5 mol. A proporção CH₄ : CO₂ é 1 : 1, logo se formam 0,5 mol de CO₂, isto é, 0,5 × 44 = 22 g."],

    ["h", "Rendimento e pureza"],
    ["ul", [
      "<b>Rendimento:</b> a quantidade realmente obtida costuma ser menor que a prevista pela equação. Rendimento = (obtido ÷ teórico) × 100%.",
      "<b>Pureza:</b> amostras reais vêm com impurezas. Se uma amostra tem 90% de pureza, só 90% da massa participa da reação."
    ]],

    ["h", "Reagente limitante"],
    ["p", "Quando os reagentes não estão na proporção exata, um deles acaba primeiro e determina a quantidade de produto. É o <b>reagente limitante</b>. O outro está em excesso. Para descobrir qual é, calcule quantos mols de cada um existem e compare com a proporção da equação."],
    ["dica", "É como fazer sanduíches com 10 fatias de pão e 3 fatias de queijo, precisando de 2 de pão e 1 de queijo por sanduíche. O queijo limita: só saem 3 sanduíches, mesmo sobrando pão."],

    ["h", "Concentração das soluções"],
    ["p", "Solução é uma mistura homogênea, com soluto dissolvido em solvente. A concentração diz quanto soluto há para cada quantidade de solução."],
    ["ul", [
      "<b>Concentração comum:</b> C = massa do soluto (g) ÷ volume da solução (L), em g/L.",
      "<b>Concentração em mol/L (molaridade):</b> M = n ÷ V, com n em mols e V em litros.",
      "<b>Porcentagem em massa ou massa/volume:</b> um soro de 0,9% (m/V) tem 0,9 g de sal em cada 100 mL.",
      "<b>ppm (partes por milhão):</b> 1 ppm é 1 mg de soluto por kg (ou por litro, em soluções aquosas diluídas) de solução."
    ]],
    ["nota", "Atenção ao volume: use sempre litros em g/L e mol/L. Um erro frequente é usar o volume em mL sem converter."],

    ["h", "Diluição e mistura"],
    ["p", "Ao diluir (adicionar solvente), a quantidade de soluto não muda, mas o volume cresce e a concentração cai: M₁ · V₁ = M₂ · V₂. Ao misturar duas soluções do mesmo soluto, somam-se os mols e os volumes: M = (M₁V₁ + M₂V₂) ÷ (V₁ + V₂)."],

    ["h", "Questões resolvidas"],
    ["p", "Massas atômicas: H = 1, C = 12, N = 14, O = 16, Na = 23, Cl = 35,5, Ca = 40. Constante de Avogadro: 6,0 × 10²³. Tente resolver antes de ler a resolução."],

    ["q", {
      tag: "Mol",
      enun: "Quantos mols de moléculas de CO₂ existem em 88 g dessa substância?",
      alts: ["1", "2", "4", "8", "44"],
      gab: "B",
      res: "A massa molar do CO₂ é 12 + 2 × 16 = 44 g/mol. Então n = 88 ÷ 44 = 2 mol. A alternativa E (44) é a própria massa molar, e não o número de mols."
    }],

    ["q", {
      tag: "Constante de Avogadro",
      enun: "Quantas moléculas de água existem em 0,5 mol de H₂O? (Constante de Avogadro: 6,0 × 10²³.)",
      alts: ["3,0 × 10²²", "1,5 × 10²³", "3,0 × 10²³", "6,0 × 10²³", "1,2 × 10²⁴"],
      gab: "C",
      res: "Um mol tem 6,0 × 10²³ moléculas, então meio mol tem metade disso: 0,5 × 6,0 × 10²³ = 3,0 × 10²³ moléculas."
    }],

    ["q", {
      tag: "Estequiometria",
      enun: "O metano (CH₄), principal componente do gás natural, queima completamente segundo a equação CH₄ + 2 O₂ → CO₂ + 2 H₂O. Que massa de CO₂ é liberada na queima de 8 g de metano? (Massa molar do CH₄: 16 g/mol.)",
      alts: ["11 g", "22 g", "44 g", "88 g", "8 g"],
      gab: "B",
      res: "8 g de CH₄ correspondem a 8 ÷ 16 = 0,5 mol. Como a proporção entre CH₄ e CO₂ é 1 : 1, formam-se 0,5 mol de CO₂, o que dá 0,5 × 44 = 22 g. A alternativa C (44 g) corresponderia a 1 mol, ou seja, a 16 g de metano."
    }],

    ["q", {
      tag: "Rendimento",
      enun: "A decomposição do calcário segue a reação CaCO₃ → CaO + CO₂. A partir de 100 g de CaCO₃ (massa molar 100 g/mol), qual é a massa de CaO obtida se o rendimento da reação for de 90%? (Massa molar do CaO: 56 g/mol.)",
      alts: ["40,0 g", "46,0 g", "50,4 g", "56,0 g", "62,2 g"],
      gab: "C",
      res: ["100 g de CaCO₃ são 1 mol, e a proporção com o CaO é 1 : 1. O rendimento teórico é 1 mol de CaO, ou seja, 56 g.", "Com rendimento de 90%, obtém-se 0,90 × 56 = 50,4 g. A alternativa D (56 g) ignora o rendimento."]
    }],

    ["q", {
      tag: "Reagente limitante",
      enun: "A síntese da amônia ocorre pela reação N₂ + 3 H₂ → 2 NH₃. Reagem 28 g de N₂ com 3 g de H₂. Qual é a massa máxima de NH₃ que pode ser formada? (Massas molares: N₂ = 28 g/mol, H₂ = 2 g/mol, NH₃ = 17 g/mol.)",
      alts: ["6 g", "17 g", "31 g", "34 g", "51 g"],
      gab: "B",
      res: ["28 g de N₂ são 1 mol, e 3 g de H₂ são 1,5 mol. Para 1 mol de N₂ seriam necessários 3 mol de H₂, mas só há 1,5 mol. O H₂ é o reagente limitante.", "Com 1,5 mol de H₂, formam-se 1,5 × 2 ÷ 3 = 1 mol de NH₃, ou seja, 17 g. A alternativa D (34 g) seria o resultado se o N₂ fosse limitante e o H₂ sobrasse: não é o caso."]
    }],

    ["q", {
      tag: "Concentração comum",
      enun: "Dissolvem-se 20 g de cloreto de sódio em água até completar 500 mL de solução. Qual é a concentração dessa solução, em g/L?",
      alts: ["10 g/L", "20 g/L", "40 g/L", "400 g/L", "10.000 g/L"],
      gab: "C",
      res: "O volume deve estar em litros: 500 mL = 0,5 L. Então C = 20 ÷ 0,5 = 40 g/L. A alternativa B (20 g/L) é o erro de usar 1 L no cálculo."
    }],

    ["q", {
      tag: "Soro fisiológico",
      enun: "O soro fisiológico é uma solução de cloreto de sódio a 0,9% (massa/volume). Que massa de sal há em uma bolsa de 500 mL de soro?",
      alts: ["0,45 g", "2,25 g", "4,5 g", "9 g", "45 g"],
      gab: "C",
      res: "0,9% (m/V) significa 0,9 g em cada 100 mL. Em 500 mL, que são 5 × 100 mL, há 5 × 0,9 = 4,5 g de sal. A alternativa D (9 g) corresponde a 1 L de soro."
    }],

    ["q", {
      tag: "Diluição",
      enun: "Um laboratório dilui 100 mL de uma solução de concentração 2,0 mol/L adicionando água até um volume final de 500 mL. Qual é a concentração final?",
      alts: ["0,2 mol/L", "0,4 mol/L", "1,0 mol/L", "2,0 mol/L", "10 mol/L"],
      gab: "B",
      res: "Na diluição, a quantidade de soluto se mantém: M₁V₁ = M₂V₂. Então 2,0 × 100 = M₂ × 500, e M₂ = 0,4 mol/L. O volume ficou 5 vezes maior, e a concentração, 5 vezes menor."
    }],

    ["q", {
      tag: "Mistura de soluções",
      enun: "Misturam-se 200 mL de uma solução 1,0 mol/L de NaCl com 300 mL de uma solução 2,0 mol/L do mesmo sal. Qual é a concentração final da mistura?",
      alts: ["1,2 mol/L", "1,5 mol/L", "1,6 mol/L", "1,8 mol/L", "3,0 mol/L"],
      gab: "C",
      res: ["Mols de cada solução: 0,2 L × 1,0 = 0,2 mol e 0,3 L × 2,0 = 0,6 mol. Total: 0,8 mol.", "O volume final é 0,5 L, então M = 0,8 ÷ 0,5 = 1,6 mol/L. A alternativa B (1,5) é a média simples das concentrações, que só valeria com volumes iguais."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "1 mol = 6,0 × 10²³ partículas. n = massa ÷ massa molar.",
      "Os coeficientes da equação balanceada dão a proporção em mols.",
      "Passos: balancear, converter para mols, usar a proporção, converter de volta.",
      "Rendimento e pureza reduzem o que se obtém. O reagente limitante define o produto máximo.",
      "Concentração: g/L = massa ÷ volume em litros. Diluição: M₁V₁ = M₂V₂."
    ]]
  ]
});
