LIVRO.cap({
  area: "Física",
  titulo: "Dinâmica",
  sub: "Forças, leis de Newton, atrito, gravitação e colisões",
  blocos: [
    ["h", "Por que as coisas se movem"],
    ["p", "A dinâmica estuda as causas do movimento. A grande ideia, vinda de Isaac Newton, é que o que muda o movimento de um corpo é a <b>força</b> aplicada sobre ele. Força é uma interação entre corpos, medida em newtons (N). Ela é uma grandeza vetorial: além do valor, tem direção e sentido. Por isso, forças em sentidos opostos se subtraem e forças no mesmo sentido se somam."],
    ["p", "A <b>força resultante</b> é a soma (vetorial) de todas as forças que agem sobre o corpo. É ela, e não uma força isolada, que determina como o corpo se move."],

    ["h", "Primeira lei de Newton: a inércia"],
    ["p", "Todo corpo permanece em repouso ou em movimento retilíneo uniforme enquanto a força resultante sobre ele for nula. Essa tendência de manter o estado de movimento chama-se <b>inércia</b>. Quanto maior a massa, maior a inércia."],
    ["p", "Quando um ônibus freia de repente, o ônibus desacelera, mas os passageiros tendem a continuar com a velocidade que tinham. Por isso são jogados para a frente em relação ao veículo. Nenhuma força \"empurra\" os passageiros para a frente: falta uma força que os desacelere junto. O cinto de segurança e o encosto de cabeça fornecem essa força."],
    ["nota", "Velocidade constante não exige força. O que exige força é <i>mudar</i> a velocidade. Um carro que anda a 80 km/h em linha reta e em velocidade constante tem força resultante nula: a força do motor é equilibrada pelas resistências."],

    ["h", "Segunda lei de Newton: F = m · a"],
    ["p", "A força resultante é igual à massa vezes a aceleração: F<sub>R</sub> = m · a. Para a mesma força, quanto maior a massa, menor a aceleração. A aceleração tem sempre a direção e o sentido da força resultante."],
    ["ex", "Um carro de 1.000 kg recebe do motor uma força de 5.000 N e sofre resistências de 2.000 N. A resultante é 5.000 − 2.000 = 3.000 N, e a aceleração é 3.000 ÷ 1.000 = 3 m/s²."],
    ["dica", "Em problemas de dinâmica, o primeiro passo é desenhar o corpo e todas as forças que agem sobre ele. O segundo é escolher um sentido positivo e escrever a resultante naquele sentido."],

    ["h", "Terceira lei de Newton: ação e reação"],
    ["p", "Quando um corpo A exerce uma força sobre um corpo B, B exerce sobre A uma força de mesmo valor, mesma direção e sentido oposto. As duas forças formam um par ação e reação."],
    ["nota", "Ação e reação nunca se anulam, porque agem em corpos <b>diferentes</b>. Só se anulam forças aplicadas no mesmo corpo. Um nadador empurra a água para trás, e a água empurra o nadador para a frente: a força que o faz avançar atua nele, e a outra atua na água."],

    ["h", "Peso, massa e força normal"],
    ["p", "<b>Massa</b> é a quantidade de matéria e mede a inércia. É a mesma em qualquer lugar e é medida em quilogramas. <b>Peso</b> é a força com que um astro atrai o corpo: P = m · g. É medido em newtons e muda conforme o local, porque g muda."],
    ["ul", [
      "Na Terra, g ≈ 10 m/s² (mais precisamente 9,8 m/s²).",
      "Na Lua, g ≈ 1,6 m/s², cerca de um sexto do valor terrestre.",
      "Uma pessoa de 70 kg pesa 700 N na Terra e 112 N na Lua, mas continua com 70 kg."
    ]],
    ["p", "A <b>força normal</b> é a força de contato que uma superfície exerce sobre um corpo, perpendicular a ela. Em uma superfície horizontal parada, a normal equilibra o peso. Mas nem sempre normal e peso são iguais: dentro de um elevador acelerado para cima, o piso empurra a pessoa com uma força maior que o peso. Essa normal é o que a balança mede, e é o que chamamos de <i>peso aparente</i>."],
    ["ex", "Uma pessoa de 60 kg está em um elevador que sobe acelerando a 2 m/s². Sobre ela agem a normal para cima e o peso (600 N) para baixo. Então N − 600 = 60 × 2, o que dá N = 720 N. A balança marcaria o equivalente a 72 kg."],

    ["h", "Força de atrito"],
    ["p", "O atrito é uma força de contato que se opõe ao deslizamento (ou à tendência de deslizar) entre duas superfícies. Seu valor máximo é proporcional à força normal: F<sub>at</sub> = μ · N, em que μ é o coeficiente de atrito, que depende dos materiais em contato."],
    ["ul", [
      "<b>Atrito estático:</b> age quando o corpo ainda não desliza. Cresce junto com a força aplicada até um valor máximo, μ<sub>e</sub> · N.",
      "<b>Atrito cinético (ou dinâmico):</b> age quando já há deslizamento. Vale μ<sub>c</sub> · N e, em geral, é um pouco menor que o máximo estático."
    ]],
    ["p", "Por isso é mais difícil começar a empurrar um móvel pesado do que continuar empurrando. O atrito também é o que permite andar, pois o pé empurra o chão para trás e o atrito empurra a pessoa para a frente, e é o que faz os pneus freiarem o carro."],
    ["ex", "Uma caixa de 20 kg é arrastada com velocidade constante em piso horizontal com μ<sub>c</sub> = 0,3. A normal é igual ao peso, 200 N, então o atrito é 0,3 × 200 = 60 N. Como a velocidade é constante, a força aplicada também é 60 N."],

    ["h", "Plano inclinado"],
    ["p", "Em um plano inclinado de ângulo θ, o peso se decompõe em duas componentes. A componente <b>paralela</b> ao plano, P · sen θ, puxa o corpo para baixo ao longo do plano. A componente <b>perpendicular</b>, P · cos θ, é equilibrada pela normal."],
    ["ul", [
      "Sem atrito, a aceleração ao longo do plano é a = g · sen θ.",
      "Valores úteis: sen 30° = 0,5, sen 45° ≈ 0,7, sen 60° ≈ 0,87.",
      "Com atrito, a resultante ao longo do plano é P · sen θ − μ · P · cos θ."
    ]],
    ["dica", "Quanto mais inclinado o plano, maior a aceleração. Em θ = 90° (queda vertical), sen 90° = 1 e a = g, como na queda livre."],

    ["h", "Tração e blocos ligados"],
    ["p", "A tração é a força que um fio esticado exerce. Em um fio ideal (sem massa e que não estica), a tração tem o mesmo valor ao longo de todo o fio. Para blocos ligados, escreva a segunda lei para cada bloco separadamente e depois resolva as equações juntas. Se os blocos se movem juntos, eles têm a mesma aceleração."],

    ["h", "Resistência do ar e velocidade limite"],
    ["p", "Quando um corpo cai no ar, a força de resistência cresce com a velocidade. No início o peso é maior, e o corpo acelera. Conforme a velocidade aumenta, a resistência aumenta até igualar o peso. Nesse instante a resultante é nula, a aceleração é zero e o corpo cai com velocidade constante, chamada <b>velocidade limite</b> (ou terminal)."],
    ["p", "É por isso que gotas de chuva, que caem de milhares de metros, chegam ao solo sem causar dano, e que um paraquedas, ao aumentar a área e a resistência, reduz bastante a velocidade limite do paraquedista."],

    ["h", "Gravitação e movimento circular"],
    ["p", "Newton mostrou que dois corpos se atraem com uma força proporcional ao produto das massas e inversamente proporcional ao <b>quadrado da distância</b> entre eles: F = G · M · m ÷ d². Se a distância dobra, a força cai para um quarto."],
    ["p", "Para um corpo descrever uma circunferência, deve haver uma força resultante apontando para o centro, a <b>força centrípeta</b>. Ela produz a aceleração centrípeta a = v² ÷ r. Na Lua e nos satélites, essa força é a gravidade. Em um carro numa curva, é o atrito dos pneus com a pista. Se o atrito for insuficiente (pista molhada), o carro segue em linha reta, tangente à curva, por inércia."],
    ["nota", "Astronautas em órbita parecem flutuar não porque a gravidade é nula lá (ela vale cerca de 90% da terrestre na altitude da Estação Espacial), mas porque eles e a nave estão em queda livre contínua em volta da Terra."],

    ["h", "Quantidade de movimento e impulso"],
    ["p", "A quantidade de movimento (ou momento linear) é o produto da massa pela velocidade: p = m · v, em kg · m/s. O <b>impulso</b> de uma força é o produto da força pelo tempo em que ela age: I = F · Δt. O teorema do impulso diz que o impulso é igual à variação da quantidade de movimento: F · Δt = Δp."],
    ["p", "Isso explica por que o airbag, o cinto e a flexão dos joelhos ao aterrissar protegem. A variação de quantidade de movimento é a mesma, mas, ao aumentar o tempo da parada, a força média diminui."],
    ["ex", "Uma bola de 0,5 kg bate na parede a 10 m/s e volta com 10 m/s, ficando 0,02 s em contato. Escolhendo o sentido de volta como positivo, Δp = 0,5 × 10 − 0,5 × (−10) = 10 kg · m/s. A força média é 10 ÷ 0,02 = 500 N."],

    ["h", "Conservação da quantidade de movimento e colisões"],
    ["p", "Em um sistema isolado (sem forças externas, ou com forças externas desprezíveis durante a colisão), a quantidade de movimento total antes é igual à de depois. Nas colisões:"],
    ["ul", [
      "<b>Elástica:</b> conserva também a energia cinética. É um caso ideal.",
      "<b>Inelástica:</b> parte da energia cinética vira calor, som e deformação.",
      "<b>Perfeitamente inelástica:</b> os corpos saem juntos, com a mesma velocidade, e é onde mais energia cinética se perde."
    ]],
    ["ex", "Um carrinho de 2 kg a 3 m/s bate em outro de 1 kg parado, e eles ficam grudados. Antes: 2 × 3 + 1 × 0 = 6 kg · m/s. Depois: (2 + 1) × v = 6, então v = 2 m/s."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Inércia",
      enun: "Um ônibus que anda em linha reta freia bruscamente, e os passageiros em pé são lançados para a frente em relação ao veículo. Qual é a melhor explicação para o fenômeno?",
      alts: [
        "O ônibus empurra os passageiros para a frente com a força de frenagem.",
        "Os passageiros tendem a manter a velocidade que já tinham, por inércia, enquanto o ônibus diminui a sua.",
        "Surge uma força para a frente que atua sobre os passageiros e anula o peso deles.",
        "A energia do ônibus é transferida para os passageiros, que ganham velocidade.",
        "A massa dos passageiros aumenta durante a frenagem."
      ],
      gab: "B",
      res: "Pela primeira lei de Newton, um corpo tende a manter seu estado de movimento se nenhuma força resultante age sobre ele. O ônibus é desacelerado pelos freios, mas os passageiros em pé só seriam desacelerados se houvesse uma força para isso, e o piso e o atrito com os sapatos são insuficientes. A alternativa A inventa uma força para a frente que não existe. A E é falsa, pois a massa não muda com o movimento nessas velocidades."
    }],

    ["q", {
      tag: "Segunda lei",
      enun: "Um carro de 1.000 kg recebe do motor uma força de 5.000 N no sentido do movimento e sofre resistências (atrito e ar) que totalizam 2.000 N em sentido contrário. Qual é a aceleração do carro?",
      alts: ["0,3 m/s²", "2 m/s²", "2,5 m/s²", "3 m/s²", "7 m/s²"],
      gab: "D",
      res: ["A resultante é a diferença das forças: 5.000 − 2.000 = 3.000 N. Pela segunda lei, a = F<sub>R</sub> ÷ m = 3.000 ÷ 1.000 = 3 m/s².", "A alternativa E (7 m/s²) soma as forças em vez de subtrair. A alternativa B (2 m/s²) usa só a resistência, 2.000 ÷ 1.000."]
    }],

    ["q", {
      tag: "Peso e massa",
      enun: "Um astronauta tem peso de 700 N na Terra, onde g = 10 m/s². Na Lua, a aceleração da gravidade é 1,6 m/s². Qual é o peso e qual é a massa desse astronauta na Lua?",
      alts: [
        "Peso de 112 N e massa de 70 kg",
        "Peso de 700 N e massa de 11,2 kg",
        "Peso de 112 N e massa de 11,2 kg",
        "Peso de 700 N e massa de 70 kg",
        "Peso de 70 N e massa de 7 kg"
      ],
      gab: "A",
      res: ["Na Terra, 700 = m × 10, logo m = 70 kg. A massa é uma propriedade do corpo e não muda de lugar para lugar, então na Lua continua 70 kg.", "O peso na Lua é P = m · g = 70 × 1,6 = 112 N. Quem acha que o peso é o mesmo (alternativa D) confunde peso com massa, e quem altera a massa (alternativas B, C e E) trata a massa como se fosse peso."]
    }],

    ["q", {
      tag: "Plano inclinado",
      enun: "Um bloco desliza, a partir do repouso, por um plano inclinado de 30° com a horizontal. O atrito é desprezível. Adote g = 10 m/s², sen 30° = 0,5 e cos 30° ≈ 0,87. Qual é a aceleração do bloco ao longo do plano?",
      alts: ["0,5 m/s²", "2,5 m/s²", "5 m/s²", "8,7 m/s²", "10 m/s²"],
      gab: "C",
      res: ["Sem atrito, a única força ao longo do plano é a componente do peso, P · sen θ = m · g · sen θ. Pela segunda lei, m · a = m · g · sen θ, e a massa se cancela: a = g · sen θ = 10 × 0,5 = 5 m/s².", "A alternativa D (8,7 m/s²) usa o cosseno, que é a componente perpendicular ao plano e equilibrada pela normal. A alternativa E ignoraria a inclinação, o que só vale para queda vertical."]
    }],

    ["q", {
      tag: "Atrito",
      enun: "Uma caixa de 20 kg é arrastada com velocidade constante sobre um piso horizontal. O coeficiente de atrito cinético entre a caixa e o piso é 0,3. Adotando g = 10 m/s², qual é o valor da força horizontal aplicada à caixa?",
      alts: ["0,6 N", "6 N", "20 N", "30 N", "60 N"],
      gab: "E",
      res: ["Em piso horizontal, a normal é igual ao peso: N = 20 × 10 = 200 N. O atrito cinético é 0,3 × 200 = 60 N.", "Como a velocidade é constante, a resultante é zero, e a força aplicada equilibra exatamente o atrito: 60 N. A alternativa B (6 N) usa 0,3 × 20, ou seja, a massa em vez do peso. A alternativa C (20 N) é o valor da massa, sem relação com a força."]
    }],

    ["q", {
      tag: "Peso aparente",
      enun: "Uma pessoa de 60 kg está sobre uma balança dentro de um elevador que sobe com aceleração de 2 m/s² para cima. Adotando g = 10 m/s², qual é o valor da força que a balança exerce sobre a pessoa, que é a leitura da balança em newtons?",
      alts: ["480 N", "720 N", "600 N", "1.200 N", "120 N"],
      gab: "B",
      res: ["Sobre a pessoa agem a normal N (para cima) e o peso P = 600 N (para baixo). Como a aceleração é para cima, N − P = m · a, então N = 600 + 60 × 2 = 720 N.", "A alternativa C (600 N) vale só se o elevador estiver parado ou em velocidade constante. A alternativa A (480 N) seria a leitura se a aceleração fosse para baixo, 600 − 120. A alternativa E (120 N) é só o produto m · a, sem somar o peso."]
    }],

    ["q", {
      tag: "Colisão",
      enun: "Um carrinho de 2 kg move-se a 3 m/s e colide com outro carrinho, de 1 kg, que estava parado. Após o choque, os dois ficam unidos e se movem juntos. Qual é a velocidade do conjunto logo após a colisão?",
      alts: ["0,5 m/s", "1 m/s", "1,5 m/s", "2 m/s", "3 m/s"],
      gab: "D",
      res: ["A quantidade de movimento total se conserva. Antes: 2 × 3 + 1 × 0 = 6 kg · m/s. Depois: (2 + 1) × v = 3v. Então 3v = 6 e v = 2 m/s.", "A alternativa C (1,5 m/s) é a média entre 3 e 0, que ignora as massas. A alternativa E ignora que a massa em movimento aumentou. Note que a energia cinética não se conserva: antes era 9 J e depois é 6 J, e os 3 J restantes viram calor e deformação."]
    }],

    ["q", {
      tag: "Impulso e força média",
      enun: "Uma bola de 0,5 kg atinge uma parede com velocidade de 10 m/s, perpendicular a ela, e volta com velocidade de 10 m/s no sentido contrário. O contato entre a bola e a parede dura 0,02 s. Qual é a intensidade da força média que a parede exerce sobre a bola?",
      alts: ["10 N", "250 N", "500 N", "1.000 N", "10.000 N"],
      gab: "C",
      res: ["A variação da quantidade de movimento é Δp = m · (v<sub>final</sub> − v<sub>inicial</sub>) = 0,5 × (10 − (−10)) = 10 kg · m/s, porque a velocidade inverte de sentido. Pelo teorema do impulso, F = Δp ÷ Δt = 10 ÷ 0,02 = 500 N.", "A alternativa A (10 N) é o valor do impulso, não da força. A alternativa B (250 N) esquece que o sentido se inverte e usa Δp = 5. A alternativa D (1.000 N) esquece de multiplicar pela massa e usa Δv = 20 no lugar de Δp."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Primeira lei: sem resultante, o corpo mantém repouso ou MRU. Inércia aumenta com a massa.",
      "Segunda lei: F<sub>R</sub> = m · a. Desenhe as forças antes de calcular.",
      "Terceira lei: ação e reação têm o mesmo valor, sentidos opostos e agem em corpos diferentes.",
      "Peso = m · g muda com o local, massa não. A normal nem sempre é igual ao peso.",
      "Atrito: F<sub>at</sub> = μ · N. No plano inclinado, a = g · sen θ sem atrito.",
      "Velocidade limite: peso igual à resistência do ar e aceleração nula.",
      "Gravitação: F = G · M · m ÷ d². Curva exige força centrípeta, com a = v² ÷ r.",
      "Impulso: F · Δt = Δp. Em colisões isoladas, a quantidade de movimento total se conserva."
    ]]
  ]
});
