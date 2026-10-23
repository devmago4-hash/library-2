/* ============================================================
   LIBRARY — CATÁLOGO DA ESTANTE
   Este é o ÚNICO arquivo que precisa mudar para adicionar um livro.
   Leia o LEIA-ME.md para as regras completas.
   ============================================================ */

/* Cores permitidas. "capa" = cor da lombada, "texto" = cor do título e das faixas. */
const PALETA = {
  verde:    { capa: "#1f4a45", texto: "#e0b85c" },
  vinho:    { capa: "#6b2737", texto: "#e8c98a" },
  azul:     { capa: "#1d3a5f", texto: "#e6d3a0" },
  mostarda: { capa: "#b8862b", texto: "#2a1d0c" },
  grafite:  { capa: "#2f3437", texto: "#e0b85c" },
  roxo:     { capa: "#4a2f5e", texto: "#e8d7a8" },
  oliva:    { capa: "#55612b", texto: "#f1e3b0" },
  creme:    { capa: "#e9dfc4", texto: "#3a2a1a" }
};

/* Tamanhos permitidos (em pixels). Use só estas chaves. */
const TAMANHOS = {
  altura:    { p: 150, m: 180, g: 210 },
  espessura: { fina: 34, media: 46, grossa: 60 }
};

/* Livros. A ordem das séries na estante segue a ordem em que aparecem aqui.
   Campos:
   id         texto curto, sem espaços nem acentos (igual ao nome da pasta)
   titulo     nome na lombada (ideal: até 20 letras)
   serie      nome da série; vira a placa da prateleira (ex.: "Vestibulares")
   pasta      pasta do livro, com um index.html dentro (ex.: "enem")
   cor        uma chave de PALETA
   altura     "p", "m" ou "g"
   espessura  "fina", "media" ou "grossa"
   status     "disponivel" ou "em-breve"
   descricao  uma frase curta */
const LIVROS = [
  {
    id: "enem",
    titulo: "Enem",
    serie: "Vestibulares",
    pasta: "enem",
    cor: "verde",
    altura: "g",
    espessura: "grossa",
    status: "disponivel",
    descricao: "Preparatório completo e gratuito para o Enem."
  },
  {
    id: "harvard",
    titulo: "Harvard",
    serie: "Universidades globais",
    pasta: "harvard",
    cor: "vinho",
    altura: "m",
    espessura: "fina",
    status: "disponivel",
    descricao: "Guia gratuito de candidatura, SAT e cursos abertos."
  }
  /* MODELO PARA O PRÓXIMO LIVRO (copie, tire os comentários e ponha vírgula acima):
  ,{
    id: "usp",
    titulo: "USP",
    serie: "Vestibulares",
    pasta: "usp",
    cor: "azul",
    altura: "m",
    espessura: "media",
    status: "em-breve",
    descricao: "Questões e redações para a Fuvest."
  }
  */
];
