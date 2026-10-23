LIVRO.cap({
  area: "Biologia",
  titulo: "Microbiologia e saúde pública",
  sub: "Vírus, bactérias, protozoários, vermes, vacinas e saneamento",
  blocos: [
    ["h", "Os micro-organismos e a saúde"],
    ["p", "A maioria dos micro-organismos é inofensiva ou até benéfica: bactérias da flora intestinal ajudam a digestão, e fungos e bactérias fabricam pão, queijo, iogurte e antibióticos. Só alguns causam doenças. Entender quem causa cada doença, como ela se transmite e como se previne é a base da saúde pública."],

    ["h", "Vírus"],
    ["ul", [
      "Não são células. São formados por um material genético (DNA ou RNA) envolvido por uma cápsula de proteína (capsídeo).",
      "Só se multiplicam dentro de células vivas: são <b>parasitas intracelulares obrigatórios</b>.",
      "Antibióticos <b>não</b> agem sobre vírus. Como tratamento, existem antivirais específicos e, para muitos vírus, a vacina é a melhor proteção.",
      "Doenças virais: gripe, dengue, zika, chikungunya, febre amarela, sarampo, catapora, hepatites (A, B, C), AIDS (HIV), COVID-19, raiva, poliomielite."
    ]],

    ["h", "Bactérias"],
    ["ul", [
      "São seres unicelulares procariontes, sem núcleo organizado. Reproduzem-se por divisão binária e trocam material genético, o que acelera a adaptação.",
      "Antibióticos agem sobre bactérias, não sobre vírus.",
      "Doenças bacterianas: tuberculose, cólera, leptospirose, tétano, coqueluche, meningites bacterianas, sífilis, gonorreia, febre tifoide."
    ]],
    ["nota", "O uso inadequado de antibióticos (sem receita, em doses erradas, interrompidos antes do fim) seleciona as bactérias mais resistentes. Elas sobrevivem, se reproduzem e passam a resistência adiante. É seleção natural em ação, e hoje é um grande problema de saúde mundial."],

    ["h", "Fungos, protozoários e vermes"],
    ["ul", [
      "<b>Fungos:</b> causam micoses (pé de atleta, candidíase). Leveduras fazem fermentação para pão e bebidas.",
      "<b>Protozoários:</b> seres unicelulares eucariontes. Causam malária (<i>Plasmodium</i>, pelo mosquito <i>Anopheles</i>), doença de Chagas (<i>Trypanosoma cruzi</i>, ligada ao barbeiro), leishmaniose (flebotomíneo, o \"mosquito-palha\"), toxoplasmose, amebíase e giardíase.",
      "<b>Vermes (helmintos):</b> esquistossomose (<i>Schistosoma</i>, com caramujo como hospedeiro intermediário), teníase e cisticercose, ascaridíase, ancilostomose (\"amarelão\") e filariose."
    ]],

    ["h", "Doenças transmitidas por mosquitos"],
    ["p", "Dengue, zika, chikungunya e febre amarela urbana são transmitidas pela fêmea do mosquito <i>Aedes aegypti</i>. A malária é transmitida pela fêmea do <i>Anopheles</i>. O Aedes se reproduz em água parada limpa, como em pneus, vasos, caixas-d'água destampadas e calhas."],
    ["dica", "A medida mais eficiente de prevenção contra a dengue é eliminar os criadouros: não deixar água parada em recipientes, tampar caixas-d'água e limpar calhas."],

    ["h", "Imunidade, vacinas e soros"],
    ["p", "O sistema imunológico reconhece agentes estranhos (antígenos) e produz anticorpos. Parte das células guarda a \"memória\" do agente, e na próxima exposição a resposta é mais rápida e forte."],
    ["ul", [
      "<b>Vacina:</b> contém o agente enfraquecido, morto ou apenas fragmentos (ou instruções para fabricá-los). Estimula o organismo a produzir os próprios anticorpos e a memória imunológica. A proteção demora a se formar, mas é duradoura. É <b>preventiva</b> e é chamada de imunização ativa.",
      "<b>Soro:</b> contém anticorpos prontos, obtidos de outro organismo. Age imediatamente, mas por pouco tempo, e não gera memória. É usado no tratamento, depois do contato com o agente ou da picada, e é chamado de imunização passiva. Exemplo: soro antiofídico, contra picada de cobra."
    ]],
    ["p", "Quando grande parte da população está vacinada, o agente circula menos, e até quem não pode se vacinar fica mais protegido. É a <b>imunidade de rebanho</b>."],

    ["h", "Saneamento básico"],
    ["p", "Muitas doenças se transmitem pela água ou pelo solo contaminados com fezes, como cólera, hepatite A, amebíase, giardíase e verminoses. O saneamento básico (água tratada, coleta e tratamento de esgoto, coleta de lixo e drenagem) reduz drasticamente esses casos, e é uma das medidas de saúde pública mais eficazes."],
    ["ul", [
      "<b>Leptospirose:</b> bactéria presente na urina de ratos, que contamina a água de enchentes.",
      "<b>Esquistossomose:</b> o contato com água de lagoas contaminadas e a falta de esgoto mantêm o ciclo.",
      "<b>Doença de Chagas:</b> a prevenção inclui moradias de alvenaria, sem frestas onde o barbeiro se esconde."
    ]],

    ["h", "HIV e hepatites"],
    ["p", "O HIV ataca células de defesa e, sem tratamento, leva à AIDS. Transmite-se por relações sexuais sem preservativo, por sangue contaminado e da mãe para o filho na gestação, parto ou amamentação. Não se transmite por abraço, beijo, talheres ou picada de mosquito. No Brasil, o SUS oferece tratamento antirretroviral gratuito, que controla o vírus. O preservativo é a principal forma de prevenção das ISTs."],
    ["p", "A hepatite A se transmite por água e alimentos contaminados. A hepatite B, por sangue e relações sexuais, e existe vacina contra as duas."],

    ["h", "Termos de epidemiologia"],
    ["ul", [
      "<b>Surto:</b> aumento de casos em um local e período restritos.",
      "<b>Endemia:</b> doença presente de forma habitual em uma região, com casos esperados.",
      "<b>Epidemia:</b> aumento muito acima do esperado em uma região.",
      "<b>Pandemia:</b> epidemia que se espalha por vários continentes."
    ]],

    ["h", "Questões resolvidas"],
    ["p", "Tente resolver antes de ler a resolução. Toque em uma alternativa para conferir."],

    ["q", {
      tag: "Antibióticos",
      enun: "Uma pessoa com gripe procura um posto de saúde e pede antibióticos. Por que eles não são indicados nesse caso?",
      alts: [
        "Porque a gripe é causada por um fungo.",
        "Porque a gripe é causada por um vírus, e antibióticos agem sobre bactérias.",
        "Porque a gripe é uma doença genética, sem causa externa.",
        "Porque antibióticos só funcionam por via intravenosa.",
        "Porque a gripe é causada por um protozoário."
      ],
      gab: "B",
      res: "A gripe é causada por vírus. Antibióticos atuam sobre estruturas e processos de bactérias, que os vírus não têm. Usá-los sem necessidade não ajuda e ainda favorece a seleção de bactérias resistentes."
    }],

    ["q", {
      tag: "Vacina e soro",
      enun: "Uma pessoa foi picada por uma cobra peçonhenta e levada a um hospital. Qual tratamento é indicado e por quê?",
      alts: [
        "Vacina, porque estimula a produção de anticorpos e dá proteção em poucos minutos.",
        "Antibiótico, porque o veneno é causado por bactérias.",
        "Soro antiofídico, porque fornece anticorpos prontos que neutralizam o veneno imediatamente.",
        "Vacina, porque o soro não contém anticorpos.",
        "Apenas repouso, porque o organismo produz anticorpos rapidamente."
      ],
      gab: "C",
      res: "Em uma emergência, não há tempo de esperar o organismo produzir anticorpos. O soro contém anticorpos prontos e age de imediato, embora por pouco tempo. A vacina é preventiva: ela estimula a produção própria de anticorpos e memória, mas leva dias a semanas para fazer efeito."
    }],

    ["q", {
      tag: "Resistência bacteriana",
      enun: "O uso excessivo e inadequado de antibióticos tem levado ao surgimento de bactérias resistentes. Qual é a explicação evolutiva para esse fenômeno?",
      alts: [
        "Os antibióticos induzem mutações que dão resistência de propósito.",
        "As bactérias aprendem a resistir durante a vida e transmitem esse aprendizado.",
        "Os antibióticos eliminam as bactérias sensíveis, e as resistentes, que já existiam na população, sobrevivem e se multiplicam.",
        "As bactérias resistentes surgem por geração espontânea.",
        "Os antibióticos transformam bactérias em vírus."
      ],
      gab: "C",
      res: "Em uma população de bactérias há variação genética. Quando o antibiótico é usado, elimina as sensíveis e deixa as raras que já eram resistentes, que se reproduzem e passam a ser maioria. É seleção natural. O antibiótico não cria a resistência, ele seleciona quem já a tinha."
    }],

    ["q", {
      tag: "Dengue",
      enun: "Durante uma epidemia de dengue, o poder público recomenda aos moradores que eliminem recipientes com água parada, como pneus e pratos de vasos. Qual é o objetivo dessa medida?",
      alts: [
        "Evitar que a água parada contamine o solo com bactérias.",
        "Eliminar os locais onde o mosquito Aedes aegypti deposita ovos e se desenvolve.",
        "Impedir que o vírus se reproduza na água.",
        "Evitar a proliferação do barbeiro.",
        "Reduzir a umidade do ar para que o vírus morra."
      ],
      gab: "B",
      res: "A dengue é uma doença viral transmitida pela fêmea do Aedes aegypti. O mosquito deposita ovos em água parada, e as larvas se desenvolvem ali. Eliminar os criadouros interrompe o ciclo do mosquito e é a medida mais eficaz de prevenção. O barbeiro transmite a doença de Chagas, e o vírus da dengue se multiplica em humanos e no mosquito, não na água."
    }],

    ["q", {
      tag: "Malária",
      enun: "A malária é uma doença grave, comum em regiões tropicais. Qual alternativa descreve corretamente seu agente e sua transmissão?",
      alts: [
        "Vírus, transmitido pela picada do Aedes aegypti.",
        "Bactéria, transmitida pela água contaminada.",
        "Protozoário do gênero Plasmodium, transmitido pela picada da fêmea do Anopheles.",
        "Verme, transmitido pelo contato com água de lagoas.",
        "Fungo, transmitido pelo ar."
      ],
      gab: "C",
      res: "A malária é causada por protozoários do gênero Plasmodium e transmitida pela picada da fêmea do mosquito Anopheles. A alternativa A descreve a dengue, a D descreve a esquistossomose e a B se aproxima do cólera."
    }],

    ["q", {
      tag: "Esquistossomose",
      enun: "A esquistossomose é frequente em locais sem saneamento básico, onde as pessoas têm contato com água de lagoas e rios. Qual ação contribui diretamente para interromper o ciclo dessa doença?",
      alts: [
        "Usar repelente contra mosquitos.",
        "Tratar o esgoto e evitar o contato com água de coleções contaminadas, para impedir que os ovos do verme cheguem aos caramujos hospedeiros.",
        "Vacinar toda a população com a vacina contra a esquistossomose.",
        "Cozinhar bem a carne de porco.",
        "Usar cortinas e mosquiteiros nas janelas."
      ],
      gab: "B",
      res: "O verme Schistosoma tem como hospedeiro intermediário um caramujo de água doce. Os ovos chegam à água pelas fezes humanas. Tratar o esgoto e evitar o banho em água suspeita quebram o ciclo. Repelentes e mosquiteiros são medidas contra doenças transmitidas por mosquitos, e o cozimento da carne previne a teníase."
    }],

    ["q", {
      tag: "Saneamento",
      enun: "Um município investe em água tratada e rede de esgoto. Qual conjunto de doenças tende a ter sua incidência reduzida de forma mais direta por essa medida?",
      alts: [
        "Gripe, sarampo e catapora.",
        "Cólera, hepatite A, amebíase e giardíase.",
        "AIDS, sífilis e gonorreia.",
        "Dengue, zika e chikungunya.",
        "Tétano, raiva e coqueluche."
      ],
      gab: "B",
      res: "Cólera, hepatite A, amebíase e giardíase são transmitidas por água e alimentos contaminados com fezes (via fecal-oral), e o saneamento atua exatamente nesse caminho. Gripe, sarampo e catapora se transmitem pelo ar. AIDS, sífilis e gonorreia são ISTs. Dengue, zika e chikungunya dependem de mosquitos."
    }],

    ["q", {
      tag: "Epidemiologia",
      enun: "Uma doença está presente de forma contínua em determinada região, com número de casos relativamente estável ao longo dos anos. Como se classifica esse padrão?",
      alts: ["Pandemia", "Epidemia", "Surto", "Endemia", "Erradicação"],
      gab: "D",
      res: "Endemia é a presença habitual de uma doença em uma região, com casos dentro do esperado. Epidemia é o aumento acima do esperado, surto é um aumento localizado e restrito, e pandemia é a epidemia que atinge vários continentes."
    }],

    ["h", "Resumo do capítulo"],
    ["ul", [
      "Vírus não são células e só se multiplicam em células vivas. Antibióticos agem só sobre bactérias.",
      "Uso inadequado de antibióticos seleciona bactérias resistentes (seleção natural).",
      "Vacina é preventiva e gera memória. Soro dá anticorpos prontos e age de imediato.",
      "Aedes aegypti: dengue, zika, chikungunya. Anopheles: malária. Eliminar criadouros é a melhor prevenção.",
      "Saneamento básico reduz doenças de veiculação hídrica e verminoses."
    ]]
  ]
});
