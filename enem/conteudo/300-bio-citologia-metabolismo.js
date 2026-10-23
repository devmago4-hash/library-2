LIVRO.cap({
  area: "Biologia",
  titulo: "Citologia e metabolismo",
  sub: "Da estrutura da célula à energia que mantém a vida",
  blocos: [
    ["h", "A célula: unidade da vida"],
    ["p", "Todos os seres vivos são formados por células. Existem dois grandes tipos: a célula procarionte, sem núcleo delimitado por membrana, e a célula eucarionte, com núcleo organizado e organelas membranosas."],
    ["ul", [
      "<b>Procariontes:</b> bactérias e arqueias. O DNA fica solto no citoplasma, em uma região chamada nucleoide, e as únicas organelas são os ribossomos.",
      "<b>Eucariontes:</b> animais, plantas, fungos e protistas. Têm núcleo, mitocôndrias, retículos, complexo golgiense e outras organelas."
    ]],

    ["h", "Organelas e suas funções"],
    ["ul", [
      "<b>Núcleo:</b> guarda o DNA e comanda a atividade da célula.",
      "<b>Ribossomos:</b> constroem proteínas, lendo o RNA mensageiro.",
      "<b>Retículo endoplasmático rugoso:</b> tem ribossomos aderidos e participa da produção de proteínas. O liso produz lipídios e participa da desintoxicação.",
      "<b>Complexo golgiense:</b> modifica, empacota e distribui substâncias, que saem em vesículas.",
      "<b>Mitocôndrias:</b> realizam a respiração celular e produzem a maior parte do ATP.",
      "<b>Cloroplastos:</b> presentes em plantas e algas, realizam a fotossíntese.",
      "<b>Lisossomos:</b> contêm enzimas digestivas que degradam materiais dentro da célula.",
      "<b>Vacúolo:</b> nas células vegetais, armazena água e substâncias e ajuda a manter a pressão interna."
    ]],
    ["dica", "Para associar estrutura e função, pergunte o que a célula faz em grande quantidade. Célula que secreta enzimas tem retículo rugoso e Golgi desenvolvidos. Célula muscular, que gasta muita energia, tem muitas mitocôndrias."],

    ["h", "Membrana plasmática e transporte"],
    ["p", "A membrana é formada por uma bicamada de fosfolipídios com proteínas inseridas, o chamado modelo do mosaico fluido. Ela é seletiva: controla o que entra e o que sai."],
    ["ul", [
      "<b>Difusão simples:</b> passagem de moléculas pequenas a favor do gradiente de concentração, sem gasto de energia.",
      "<b>Difusão facilitada:</b> também a favor do gradiente, mas com ajuda de proteínas transportadoras.",
      "<b>Osmose:</b> passagem de água através da membrana, do meio menos concentrado em solutos para o mais concentrado.",
      "<b>Transporte ativo:</b> contra o gradiente, com gasto de ATP. O exemplo clássico é a bomba de sódio e potássio.",
      "<b>Endocitose e exocitose:</b> entrada e saída de grandes partículas por vesículas."
    ]],
    ["ex", "Uma hemácia colocada em água pura (meio hipotônico) recebe água por osmose, incha e pode estourar. Em uma solução muito concentrada (hipertônica), perde água e murcha. Na célula vegetal, a perda de água faz a membrana se descolar da parede celular, o que se chama plasmólise."],

    ["h", "DNA, RNA e a síntese de proteínas"],
    ["p", "O DNA tem as bases adenina, timina, citosina e guanina. O RNA tem uracila no lugar da timina. As informações do DNA são usadas para fabricar proteínas em duas etapas."],
    ["ol", [
      "<b>Transcrição:</b> no núcleo, uma fita de DNA serve de molde para a produção de um RNA mensageiro (mRNA). As bases se pareiam assim: A com U, T com A, C com G, G com C.",
      "<b>Tradução:</b> nos ribossomos, o mRNA é lido de três em três bases. Cada trinca, chamada códon, corresponde a um aminoácido, levado até lá pelo RNA transportador."
    ]],
    ["p", "O código genético é <i>degenerado</i>: mais de um códon pode codificar o mesmo aminoácido. Por isso certas mudanças no DNA não alteram a proteína."],
    ["p", "Na replicação, o DNA se duplica de forma semiconservativa: cada nova molécula tem uma fita antiga e uma fita nova."],

    ["h", "Divisão celular"],
    ["p", "A <b>mitose</b> origina duas células geneticamente idênticas à original, com o mesmo número de cromossomos. Ela serve ao crescimento, à regeneração e à reposição de células."],
    ["p", "A <b>meiose</b> ocorre na formação dos gametas e reduz o número de cromossomos à metade. Em dois ciclos de divisão, uma célula diploide (2n) origina quatro células haploides (n)."],
    ["nota", "Na meiose há troca de pedaços entre cromossomos homólogos (<i>crossing-over</i>) e distribuição aleatória dos cromossomos. Isso gera variabilidade genética, base da evolução. Na mitose, não."],

    ["h", "Fotossíntese"],
    ["p", "Plantas, algas e cianobactérias transformam energia luminosa em energia química armazenada em glicose. A equação resumida é: 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + luz → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>."],
    ["ul", [
      "<b>Fase clara</b> (tilacoides do cloroplasto): a luz quebra moléculas de água, o que libera O<sub>2</sub> e produz ATP e NADPH.",
      "<b>Fase escura ou ciclo de Calvin</b> (estroma): usa ATP e NADPH para fixar o CO<sub>2</sub> e construir glicose."
    ]],
    ["nota", "O oxigênio liberado na fotossíntese vem da água, e não do gás carbônico."],

    ["h", "Respiração celular e fermentação"],
    ["p", "A respiração aeróbia degrada a glicose na presença de oxigênio e libera energia em forma de ATP. Tem três etapas."],
    ["ol", [
      "<b>Glicólise</b> (citoplasma): a glicose é quebrada em duas moléculas de piruvato, com saldo de 2 ATP.",
      "<b>Ciclo de Krebs</b> (matriz da mitocôndria): completa a degradação e libera CO<sub>2</sub>.",
      "<b>Cadeia respiratória</b> (membrana interna da mitocôndria): o oxigênio é o aceptor final de elétrons, forma água e rende a maior parte do ATP."
    ]],
    ["p", "Sem oxigênio, só a glicólise rende energia, e o piruvato segue para a <b>fermentação</b>, que rende apenas 2 ATP por glicose. Na fermentação alcoólica (leveduras), os produtos são etanol e CO<sub>2</sub>. Na fermentação lática (bactérias do iogurte e células musculares em esforço intenso), o produto é o ácido lático."],
    ["ex", "A massa de pão cresce porque as leveduras fermentam o açúcar e liberam CO<sub>2</sub>, que forma bolhas na massa. O álcool evapora no forno."],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Organelas",
      enun: "As células do pâncreas que produzem enzimas digestivas e as lançam para fora da célula apresentam retículo endoplasmático rugoso e complexo golgiense muito desenvolvidos. Essa característica se explica porque",
      alts: [
        "essas células realizam fotossíntese para obter energia.",
        "as enzimas são proteínas, produzidas nos ribossomos do retículo e depois modificadas e empacotadas no Golgi para secreção.",
        "as enzimas são lipídios, fabricados no retículo liso e armazenados no Golgi.",
        "essas células precisam de grande número de lisossomos para digerir a si mesmas.",
        "o Golgi produz o ATP necessário para a secreção."
      ],
      gab: "B",
      res: "Enzimas são proteínas. O retículo rugoso, com ribossomos, participa da sua síntese, e o complexo golgiense as modifica, empacota e distribui em vesículas que saem por exocitose. Não há fotossíntese em células animais, o ATP é produzido principalmente nas mitocôndrias, e as enzimas não são lipídios."
    }],

    ["q", {
      tag: "Osmose",
      enun: "Um estudante colocou hemácias humanas em um recipiente com água destilada. Após alguns minutos, observou ao microscópio que muitas células haviam estourado. Esse resultado se explica por",
      alts: [
        "transporte ativo de sais para fora das hemácias.",
        "difusão de hemoglobina para a água por transporte facilitado.",
        "perda de água das hemácias para o meio, por osmose.",
        "entrada de água nas hemácias, por osmose, pois o meio externo era hipotônico.",
        "fagocitose da água pela membrana das hemácias."
      ],
      gab: "D",
      res: "Água destilada não tem solutos, então é hipotônica em relação ao interior da hemácia. A água atravessa a membrana por osmose, em direção ao meio mais concentrado (o interior da célula). A hemácia incha e se rompe. A alternativa C descreve o contrário, o que ocorreria em meio hipertônico."
    }],

    ["q", {
      tag: "Transcrição",
      enun: "Um segmento da fita molde de DNA tem a sequência de bases TAC CGA. Qual é a sequência do RNA mensageiro formado a partir dela?",
      alts: ["ATG GCT", "UAC CGA", "AUG GCU", "AUG CGA", "TAC CGA"],
      gab: "C",
      res: "O RNA se forma pelo pareamento com a fita molde: T pareia com A, A com U, C com G, C com G, G com C, A com U. Resultado: AUG GCU. As alternativas A e E trazem timina, base que não existe no RNA. A alternativa B é a cópia da fita molde com U no lugar de T, sem pareamento, e a D mistura as duas coisas."
    }],

    ["q", {
      tag: "Mitose e meiose",
      enun: "Uma espécie animal tem 12 cromossomos em suas células somáticas (2n = 12). Quantos cromossomos terá cada célula-filha ao fim de uma mitose e ao fim de uma meiose, respectivamente?",
      alts: ["12 e 6", "6 e 12", "6 e 6", "12 e 12", "24 e 12"],
      gab: "A",
      res: "A mitose mantém o número de cromossomos: as células-filhas têm 12. A meiose reduz à metade: os gametas têm n = 6. Por isso, quando gametas se unem na fecundação, a espécie recupera o número 2n = 12."
    }],

    ["q", {
      tag: "Fotossíntese",
      enun: "Em um experimento, uma planta aquática foi mantida em água marcada com um isótopo do oxigênio, enquanto o gás carbônico utilizado não era marcado. Ao final, o oxigênio gasoso liberado pela planta apresentava a marcação. Esse resultado indica que o oxigênio liberado na fotossíntese tem origem",
      alts: [
        "no gás carbônico, que é quebrado na fase escura.",
        "na glicose, que é degradada no cloroplasto.",
        "no ATP, produzido nas mitocôndrias.",
        "no NADPH, que libera oxigênio ao ser oxidado.",
        "na água, que é quebrada na fase clara pela ação da luz."
      ],
      gab: "E",
      res: "Se só a água estava marcada e o O<sub>2</sub> saiu marcado, o oxigênio veio da água. Isso acontece na fase clara, em que a luz promove a quebra da molécula de água. O gás carbônico é usado na fase escura para construir glicose, e o oxigênio dele permanece em compostos orgânicos e na água formada."
    }],

    ["q", {
      tag: "Fermentação",
      enun: "Ao preparar pães, a massa é deixada em repouso e, depois de algum tempo, aumenta de volume. Esse crescimento ocorre porque",
      alts: [
        "as leveduras realizam fotossíntese, liberando oxigênio na massa.",
        "as leveduras fermentam o açúcar, produzindo CO<sub>2</sub> que forma bolhas na massa.",
        "as bactérias do trigo produzem ácido lático, que incha o glúten.",
        "a água da massa se transforma em gás por osmose.",
        "as leveduras respiram aerobiamente, liberando etanol e O<sub>2</sub>."
      ],
      gab: "B",
      res: "As leveduras são fungos que, sem muito oxigênio, fazem fermentação alcoólica: transformam o açúcar em etanol e CO<sub>2</sub>. O gás fica retido na rede de glúten e faz a massa crescer. Leveduras não fazem fotossíntese, e o etanol não é produto da respiração aeróbia."
    }],

    ["q", {
      tag: "Respiração celular",
      enun: "Durante uma corrida de velocidade, as células musculares de um atleta recebem menos oxigênio do que precisam. Nessa situação, é correto afirmar que elas",
      alts: [
        "param de produzir ATP, pois a glicólise depende do oxigênio.",
        "passam a produzir mais ATP que na respiração aeróbia, graças à fermentação.",
        "continuam obtendo ATP pela glicólise e pela fermentação lática, que rende pouca energia e acumula ácido lático.",
        "realizam fermentação alcoólica, com liberação de etanol no músculo.",
        "fazem fotossíntese para compensar a falta de oxigênio."
      ],
      gab: "C",
      res: "A glicólise não depende de oxigênio e continua rendendo 2 ATP por glicose. Para que ela siga ocorrendo, o piruvato é convertido em ácido lático (fermentação lática), que se acumula e está associado à fadiga muscular. A fermentação rende muito menos energia que a respiração aeróbia, e a fermentação alcoólica não ocorre em músculos humanos."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Procariontes não têm núcleo definido. Eucariontes têm núcleo e organelas membranosas.",
      "Associe organelas a funções: ribossomos fazem proteínas, mitocôndrias fazem ATP, cloroplastos fazem fotossíntese.",
      "Osmose é a passagem de água para o meio mais concentrado. Transporte ativo gasta ATP.",
      "DNA é transcrito em RNA, e o RNA é traduzido em proteína. O código é degenerado.",
      "Mitose gera células idênticas. Meiose gera gametas com metade dos cromossomos e variabilidade.",
      "O O<sub>2</sub> da fotossíntese vem da água. Sem oxigênio, só há glicólise e fermentação, com saldo de 2 ATP."
    ]]
  ]
});
