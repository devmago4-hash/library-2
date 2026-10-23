LIVRO.cap({
  area: "Física",
  titulo: "Cinemática",
  sub: "Como descrever o movimento: posição, velocidade, aceleração e gráficos",
  blocos: [
    ["h", "Do que trata a cinemática"],
    ["p", "A cinemática descreve o movimento sem se preocupar com a causa dele. Ela responde a perguntas como: onde o corpo está, com que rapidez se move e como essa rapidez muda ao longo do tempo. As causas (as forças) ficam para o próximo capítulo."],
    ["p", "Todo movimento é descrito em relação a um <b>referencial</b>, isto é, um ponto ou corpo que tomamos como parado. Um passageiro sentado em um ônibus está em repouso em relação ao ônibus e em movimento em relação à calçada. Repouso e movimento dependem do referencial."],
    ["ul", [
      "<b>Posição (s):</b> onde o corpo está sobre a trajetória, medida em metros.",
      "<b>Deslocamento (Δs):</b> variação de posição, ou seja, posição final menos posição inicial.",
      "<b>Intervalo de tempo (Δt):</b> tempo final menos tempo inicial.",
      "<b>Trajetória:</b> linha que o corpo descreve. Ela também depende do referencial."
    ]],

    ["h", "Velocidade média"],
    ["p", "A velocidade média é o deslocamento dividido pelo tempo gasto: v<sub>m</sub> = Δs ÷ Δt. Ela diz quanto o corpo avançou, em média, a cada unidade de tempo. As unidades mais comuns são m/s e km/h."],
    ["nota", "Velocidade média não é a média das velocidades. Se você percorre metade do caminho a 60 km/h e a outra metade a 30 km/h, a média não é 45 km/h, porque você passa mais tempo na parte lenta. Calcule sempre o deslocamento total dividido pelo tempo total."],
    ["ex", "Um carro anda 60 km a 60 km/h, o que leva 1 hora, e depois mais 60 km a 30 km/h, o que leva 2 horas. Total: 120 km em 3 horas, então v<sub>m</sub> = 120 ÷ 3 = 40 km/h."],

    ["h", "Conversão entre km/h e m/s"],
    ["p", "Como 1 km = 1.000 m e 1 h = 3.600 s, temos 1 km/h = 1.000 ÷ 3.600 = 1 ÷ 3,6 m/s. Para passar de km/h para m/s, divida por 3,6. Para passar de m/s para km/h, multiplique por 3,6."],
    ["ul", [
      "36 km/h = 10 m/s",
      "72 km/h = 20 m/s",
      "108 km/h = 30 m/s",
      "1 m/s = 3,6 km/h"
    ]],
    ["dica", "Decore o par 36 km/h = 10 m/s. Todos os outros valores saem dele por proporção: 72 km/h é o dobro, logo 20 m/s."],

    ["h", "Movimento uniforme (MU)"],
    ["p", "No movimento uniforme a velocidade é constante, ou seja, o corpo percorre distâncias iguais em tempos iguais. A aceleração é zero. A função horária da posição é uma reta:"],
    ["ex", "s = s<sub>0</sub> + v · t, em que s<sub>0</sub> é a posição inicial. Um ciclista parte da posição 100 m com 5 m/s. Depois de 20 s ele está em 100 + 5 × 20 = 200 m."],
    ["p", "No gráfico da posição pelo tempo (s × t), o MU é uma reta inclinada, e a inclinação da reta é a velocidade. No gráfico da velocidade pelo tempo (v × t), o MU é uma reta horizontal, e a área sob ela é o deslocamento."],

    ["h", "Encontro e ultrapassagem"],
    ["p", "Para saber quando dois corpos se encontram, escreva a posição de cada um em função do tempo e iguale as duas equações. Se eles andam em sentidos opostos, as velocidades se somam na aproximação. Se andam no mesmo sentido, usa-se a diferença das velocidades."],
    ["ex", "Duas cidades distam 120 km. Dois ciclistas saem ao mesmo tempo, um em direção ao outro, a 20 km/h e 40 km/h. Eles se aproximam a 20 + 40 = 60 km/h, então se encontram depois de 120 ÷ 60 = 2 horas."],
    ["nota", "Na ultrapassagem e na travessia de pontes e túneis, o comprimento do veículo conta. Um trem só termina de atravessar uma ponte quando o <i>fim</i> do último vagão sai dela. O espaço total percorrido é o comprimento do trem somado ao comprimento da ponte."],

    ["h", "Movimento uniformemente variado (MUV)"],
    ["p", "No MUV a aceleração é constante. Aceleração é a variação da velocidade por unidade de tempo: a = Δv ÷ Δt, medida em m/s². Uma aceleração de 2 m/s² significa que a velocidade aumenta 2 m/s a cada segundo. Se a velocidade diminui, a aceleração tem sinal oposto ao do movimento, e dizemos que o corpo freia."],
    ["ul", [
      "<b>Velocidade:</b> v = v<sub>0</sub> + a · t",
      "<b>Posição:</b> s = s<sub>0</sub> + v<sub>0</sub> · t + (a · t²) ÷ 2",
      "<b>Equação de Torricelli:</b> v² = v<sub>0</sub>² + 2 · a · Δs"
    ]],
    ["p", "A equação de Torricelli é a mais útil quando o problema não informa o tempo, como nas questões de frenagem. Ela liga velocidade inicial, velocidade final, aceleração e distância."],
    ["ex", "Um veículo parte do repouso com a = 2 m/s². Depois de 10 s, a velocidade é v = 0 + 2 × 10 = 20 m/s, e o espaço percorrido é (2 × 10²) ÷ 2 = 100 m."],
    ["nota", "Distância de frenagem cresce com o <b>quadrado</b> da velocidade. Dobrar a velocidade quadruplica a distância necessária para parar. É por isso que andar rápido demais é tão perigoso."],

    ["h", "Gráficos do movimento"],
    ["ul", [
      "<b>MU, gráfico s × t:</b> reta inclinada. Quanto mais inclinada, maior a velocidade.",
      "<b>MUV, gráfico s × t:</b> parábola.",
      "<b>MU, gráfico v × t:</b> reta horizontal.",
      "<b>MUV, gráfico v × t:</b> reta inclinada. A inclinação é a aceleração.",
      "<b>Em qualquer gráfico v × t:</b> a área entre a curva e o eixo do tempo é o deslocamento."
    ]],
    ["dica", "Em questões com gráfico de velocidade, divida a figura em triângulos e retângulos, calcule cada área e some. É o caminho mais seguro para obter a distância percorrida."],

    ["h", "Queda livre e lançamento vertical"],
    ["p", "Perto da superfície da Terra, um corpo solto, sem resistência do ar, cai com aceleração constante chamada aceleração da gravidade, g ≈ 10 m/s² (o valor mais preciso é 9,8 m/s²). A queda livre é um MUV em que a velocidade inicial é zero. Corpos leves e pesados caem juntos quando a resistência do ar é desprezível."],
    ["ul", [
      "<b>Velocidade de queda:</b> v = g · t",
      "<b>Altura percorrida:</b> h = (g · t²) ÷ 2",
      "<b>Sem o tempo:</b> v² = 2 · g · h"
    ]],
    ["p", "No lançamento vertical para cima, o corpo sobe com movimento retardado, para por um instante no ponto mais alto (velocidade zero, mas a aceleração continua sendo g, para baixo) e depois desce. Sem resistência do ar, o tempo de subida é igual ao tempo de descida."],
    ["ex", "Uma bola é lançada para cima com 20 m/s. O tempo de subida é 20 ÷ 10 = 2 s, e a altura máxima é 20² ÷ (2 × 10) = 20 m. O tempo total no ar até voltar à mão é 2 + 2 = 4 s."],

    ["h", "Lançamento horizontal e oblíquo"],
    ["p", "Quando um corpo é lançado com velocidade horizontal, os dois movimentos acontecem ao mesmo tempo e de forma independente. Na horizontal há MU, porque nenhuma força o acelera nessa direção. Na vertical há queda livre. Por isso uma bola lançada horizontalmente e outra solta da mesma altura chegam ao chão juntas."],
    ["p", "No lançamento oblíquo, a velocidade inicial tem uma componente horizontal, que permanece constante, e uma vertical, que sobe e desce como no lançamento vertical. O alcance horizontal depende da velocidade e do tempo de voo, e este depende só do movimento vertical."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Velocidade média",
      enun: "Um motorista percorre os primeiros 60 km de uma viagem a 60 km/h e os 60 km seguintes, em um trecho de obras, a 30 km/h. Qual foi a velocidade média no percurso total de 120 km?",
      alts: ["40 km/h", "45 km/h", "50 km/h", "55 km/h", "60 km/h"],
      gab: "A",
      res: ["A velocidade média é o deslocamento total dividido pelo tempo total. O primeiro trecho leva 60 ÷ 60 = 1 hora, e o segundo leva 60 ÷ 30 = 2 horas. O tempo total é 3 horas.", "Então v<sub>m</sub> = 120 ÷ 3 = 40 km/h. A alternativa B (45 km/h) é a média aritmética das duas velocidades, o erro mais comum. Ela só valeria se o motorista passasse o mesmo <i>tempo</i> em cada velocidade, e não a mesma distância."]
    }],

    ["q", {
      tag: "Encontro",
      enun: "Duas cidades estão a 120 km uma da outra. No mesmo instante, dois ciclistas saem delas, um em direção ao outro, mantendo velocidades constantes de 20 km/h e 40 km/h. Quando se encontram, qual é a distância percorrida pelo ciclista mais rápido?",
      alts: ["20 km", "80 km", "40 km", "60 km", "120 km"],
      gab: "B",
      res: ["Como andam em sentidos opostos, a distância entre eles diminui a 20 + 40 = 60 km/h. O encontro ocorre depois de 120 ÷ 60 = 2 horas.", "Nesse tempo, o mais rápido percorre 40 × 2 = 80 km, e o mais lento percorre 20 × 2 = 40 km. A soma é 120 km, como esperado. A alternativa C (40 km) é a distância do mais lento, e a E é a distância total entre as cidades."]
    }],

    ["q", {
      tag: "Travessia de túnel",
      enun: "Um trem de 200 m de comprimento atravessa um túnel de 600 m de comprimento com velocidade constante de 72 km/h. Quanto tempo se passa entre o instante em que a frente do trem entra no túnel e o instante em que o fim do trem sai dele?",
      alts: ["10 s", "30 s", "40 s", "60 s", "800 s"],
      gab: "C",
      res: ["Primeiro, converta a velocidade: 72 ÷ 3,6 = 20 m/s. A frente do trem entra, e o trem só termina de sair quando o último vagão deixa o túnel, então o espaço percorrido é 200 + 600 = 800 m.", "Tempo: 800 ÷ 20 = 40 s. A alternativa B (30 s) esquece o comprimento do trem, e a E (800 s) usa 800 m dividido por 1 m/s, sem converter a unidade corretamente."]
    }],

    ["q", {
      tag: "Frenagem",
      enun: "Um carro viaja a 72 km/h em linha reta e o motorista freia, produzindo uma desaceleração constante de 5 m/s². Qual é a distância percorrida até o carro parar?",
      alts: ["20 m", "30 m", "36 m", "40 m", "80 m"],
      gab: "D",
      res: ["Converta a velocidade: 72 km/h = 20 m/s. Como o tempo não é pedido, use a equação de Torricelli com velocidade final zero: 0 = 20² − 2 × 5 × Δs.", "Então 400 = 10 × Δs e Δs = 40 m. A alternativa E (80 m) vem de esquecer o fator 2 na fórmula, e a A (20 m) é só o valor da velocidade em m/s, sem relação com a distância."]
    }],

    ["q", {
      tag: "Queda livre",
      enun: "Um vaso cai da sacada de um prédio, a 45 m do solo, a partir do repouso. Desprezando a resistência do ar e adotando g = 10 m/s², qual é a velocidade do vaso ao atingir o solo?",
      alts: ["10 m/s", "15 m/s", "20 m/s", "25 m/s", "30 m/s"],
      gab: "E",
      res: ["Use v² = 2 · g · h = 2 × 10 × 45 = 900, então v = 30 m/s. Outra forma: o tempo de queda é h = (g · t²) ÷ 2, logo 45 = 5 · t², t = 3 s, e v = g · t = 10 × 3 = 30 m/s.", "Convertendo, 30 m/s equivalem a 108 km/h, a velocidade de um carro em rodovia. A alternativa B (15 m/s) resulta de dividir 45 por 3, uma conta sem fundamento físico."]
    }],

    ["q", {
      tag: "Gráfico velocidade × tempo",
      enun: "O gráfico da velocidade de um carro em função do tempo mostra três etapas. Nos primeiros 5 s a velocidade cresce de 0 até 20 m/s em linha reta. Nos 10 s seguintes ela permanece constante em 20 m/s. Nos últimos 5 s ela diminui em linha reta de 20 m/s até zero. Qual é a distância total percorrida?",
      alts: ["200 m", "250 m", "300 m", "400 m", "600 m"],
      gab: "C",
      res: ["A distância é a área sob o gráfico. Primeira etapa: triângulo de base 5 e altura 20, com área (5 × 20) ÷ 2 = 50 m. Segunda etapa: retângulo de 10 × 20 = 200 m. Terceira etapa: outro triângulo, com 50 m.", "Total: 50 + 200 + 50 = 300 m. Quem calcula só o retângulo obtém 200 m (alternativa A). A alternativa E (600 m) vem de multiplicar 20 m/s pelos 20 s totais, o que só valeria se o carro mantivesse 20 m/s o tempo todo."]
    }],

    ["q", {
      tag: "Lançamento vertical",
      enun: "Uma bola é lançada verticalmente para cima com velocidade de 20 m/s a partir do solo. Desprezando a resistência do ar e adotando g = 10 m/s², quanto tempo ela leva para voltar ao ponto de lançamento?",
      alts: ["2 s", "4 s", "6 s", "8 s", "10 s"],
      gab: "B",
      res: ["Na subida a velocidade cai de 20 m/s até zero com desaceleração de 10 m/s², o que leva 20 ÷ 10 = 2 s. Sem resistência do ar, a descida leva o mesmo tempo, também 2 s.", "O tempo total é 4 s. A alternativa A (2 s) é só o tempo de subida. Perceba que a altura máxima, 20 m, não é pedida e não entra na resposta."]
    }],

    ["q", {
      tag: "Lançamento horizontal",
      enun: "Do alto de um penhasco de 80 m de altura, uma pedra é lançada horizontalmente com velocidade de 15 m/s. Desprezando a resistência do ar e adotando g = 10 m/s², a que distância horizontal da base do penhasco a pedra atinge o solo?",
      alts: ["60 m", "80 m", "120 m", "240 m", "300 m"],
      gab: "A",
      res: ["Os movimentos são independentes. Na vertical há queda livre: 80 = (10 × t²) ÷ 2, logo t² = 16 e t = 4 s. Na horizontal há MU com 15 m/s.", "O alcance é 15 × 4 = 60 m. A alternativa B (80 m) confunde alcance com altura. A velocidade horizontal não altera o tempo de queda: uma pedra solta do mesmo ponto também cairia em 4 s."]
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Movimento depende do referencial. Velocidade média = deslocamento total ÷ tempo total.",
      "Para converter, divida km/h por 3,6 para obter m/s. Lembre que 36 km/h = 10 m/s.",
      "MU: s = s<sub>0</sub> + v · t. Encontros: iguale as posições. Em túneis e pontes, some o comprimento do veículo.",
      "MUV: v = v<sub>0</sub> + a · t, e Torricelli v² = v<sub>0</sub>² + 2 · a · Δs. A distância de frenagem cresce com o quadrado da velocidade.",
      "Em gráficos v × t, a inclinação é a aceleração e a área é o deslocamento.",
      "Queda livre: v = g · t e h = (g · t²) ÷ 2. No lançamento horizontal, MU na horizontal e queda livre na vertical."
    ]]
  ]
});
