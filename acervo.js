/* ============================================================
   LIBRARY — ACERVO DIGITAL
   Catálogo de fontes abertas e gratuitas. Para adicionar uma fonte,
   copie um bloco, preencha e faça commit. Veja as regras no LEIA-ME.md.

   Campos:
   id         texto curto sem espaços
   livro      "enem" ou "harvard" (a que livro/estante pertence)
   area       texto livre usado para agrupar (ex.: "Física")
   nome       nome da fonte
   desc       uma frase curta
   url        endereço da fonte (abre em nova aba)
   licenca    licença REAL da fonte (obrigatório, confira no site da fonte)
   credito    texto de atribuição mostrado ao usuário
   embed      (opcional) endereço de iframe, só se a fonte PERMITE embutir
   ============================================================ */
const ACERVO = [
  /* ---------- Enem: oficiais e abertas ---------- */
  { id: "inep", livro: "enem", area: "Provas oficiais",
    nome: "Provas e gabaritos do Enem (Inep)",
    desc: "Todas as provas anteriores, com gabarito, no site oficial.",
    url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem/provas-e-gabaritos",
    licenca: "Documento oficial público", credito: "Inep / MEC" },
  { id: "wikipedia", livro: "enem", area: "Enciclopédia",
    nome: "Wikipédia em português",
    desc: "Verbetes de todas as áreas para aprofundar qualquer tema.",
    url: "https://pt.wikipedia.org",
    licenca: "CC BY-SA 4.0", credito: "Wikipédia e colaboradores" },
  { id: "wikilivros", livro: "enem", area: "Enciclopédia",
    nome: "Wikilivros",
    desc: "Livros didáticos abertos escritos por voluntários.",
    url: "https://pt.wikibooks.org",
    licenca: "CC BY-SA 4.0", credito: "Wikilivros e colaboradores" },
  { id: "dominio", livro: "enem", area: "Literatura",
    nome: "Domínio Público (MEC)",
    desc: "Obras literárias e didáticas de domínio público, para ler e baixar.",
    url: "http://www.dominiopublico.gov.br",
    licenca: "Domínio público ou uso autorizado", credito: "Portal Domínio Público / MEC" },
  { id: "khan", livro: "enem", area: "Videoaulas",
    nome: "Khan Academy em português",
    desc: "Videoaulas e exercícios gratuitos de Matemática e Ciências.",
    url: "https://pt.khanacademy.org",
    licenca: "Gratuito. Só link, o conteúdo não é copiado.", credito: "Khan Academy" },

  /* ---------- Enem: simulações PhET (podem ser embutidas) ---------- */
  ...[
    ["projectile-motion", "Física", "Movimento de projétil", "Lance projéteis e veja alcance e altura mudarem (Cinemática)."],
    ["forces-and-motion-basics", "Física", "Forças e movimento", "Empurre objetos e veja a força resultante e o atrito (Dinâmica)."],
    ["energy-skate-park-basics", "Física", "Parque de skate: energia", "Energia cinética e potencial se transformando (Energia)."],
    ["density", "Física", "Densidade", "Compare objetos que afundam ou flutuam (Hidrostática)."],
    ["buoyancy", "Física", "Empuxo", "Veja o empuxo atuando em objetos mergulhados (Hidrostática)."],
    ["wave-on-a-string", "Física", "Onda em uma corda", "Frequência, amplitude e velocidade de ondas (Ondas)."],
    ["circuit-construction-kit-dc", "Física", "Kit de circuitos", "Monte circuitos em série e paralelo e meça corrente (Eletricidade)."],
    ["ohms-law", "Física", "Lei de Ohm", "Relação entre tensão, corrente e resistência (Eletricidade)."],
    ["build-an-atom", "Química", "Monte um átomo", "Prótons, nêutrons e elétrons formando elementos e íons."],
    ["balancing-chemical-equations", "Química", "Balanceando equações", "Pratique balanceamento com feedback imediato."],
    ["ph-scale", "Química", "Escala de pH", "Veja o pH de líquidos do dia a dia."],
    ["states-of-matter-basics", "Química", "Estados da matéria", "Aqueça e resfrie moléculas e veja as mudanças de estado."],
    ["natural-selection", "Biologia", "Seleção natural", "Mutações e ambiente mudando uma população de coelhos."],
    ["gene-expression-basics", "Biologia", "Expressão gênica", "Do DNA à proteína, passo a passo."]
  ].map(([s, area, nome, desc]) => ({
    id: "phet-" + s, livro: "enem", area: "Simulações · " + area, nome, desc,
    url: "https://phet.colorado.edu/pt_BR/simulations/" + s,
    embed: "https://phet.colorado.edu/sims/html/" + s + "/latest/" + s + "_all.html?locale=pt_BR",
    licenca: "PhET: uso não comercial, com atribuição",
    credito: "PhET Interactive Simulations, Universidade do Colorado Boulder"
  })),

  /* ---------- Harvard (livro futuro) ---------- */
  { id: "cs50", livro: "harvard", area: "Computação",
    nome: "CS50: Introdução à Ciência da Computação",
    desc: "O curso mais famoso de Harvard, aberto e gratuito, com aulas e exercícios.",
    url: "https://cs50.harvard.edu/x/",
    licenca: "CC BY-NC-SA 4.0", credito: "CS50, Universidade de Harvard" },
  { id: "mit-ocw", livro: "harvard", area: "Cursos abertos",
    nome: "MIT OpenCourseWare",
    desc: "Aulas, listas e provas de centenas de cursos do MIT, de graça.",
    url: "https://ocw.mit.edu",
    licenca: "CC BY-NC-SA", credito: "MIT OpenCourseWare" }
];

const LIVROS_ACERVO = {
  enem: "Enem",
  harvard: "Harvard e universidades globais"
};
