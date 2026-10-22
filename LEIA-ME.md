# LIBRARY — Guia de padrões

Biblioteca digital gratuita no GitHub Pages. A página inicial (`index.html`) é uma estante de madeira que desenha os livros sozinha a partir do arquivo `livros.js`.

## Estrutura

```
index.html      estante (não precisa mexer)
livros.js       catálogo: paleta, tamanhos e lista de livros
LEIA-ME.md      este guia
enem/index.html um livro (cada livro tem a sua pasta)
```

## Como adicionar um livro (3 passos)

1. Crie a pasta do livro, por exemplo `usp/`, com um `index.html` dentro. Copie `enem/index.html` como ponto de partida.
2. Em `livros.js`, copie o bloco MODELO dentro de `LIVROS` e preencha os campos.
3. Faça commit. A estante mostra o livro novo sozinha.

Não edite o `index.html` da raiz para adicionar livros.

## Campos de cada livro

| Campo | Valores |
|---|---|
| `id` | texto curto, sem espaços nem acentos (igual ao nome da pasta) |
| `titulo` | nome da lombada, até 20 letras |
| `serie` | nome da série; cada série ganha uma placa dourada na estante |
| `pasta` | nome da pasta do livro |
| `cor` | `verde`, `vinho`, `azul`, `mostarda`, `grafite`, `roxo`, `oliva`, `creme` |
| `altura` | `p` (150), `m` (180) ou `g` (210) |
| `espessura` | `fina` (34), `media` (46) ou `grossa` (60) |
| `status` | `disponivel` ou `em-breve` |
| `descricao` | uma frase curta |

Dica de espessura: quanto mais conteúdo, mais grossa a lombada. Livros `em-breve` aparecem apagados e mostram um aviso ao tocar.

## Prateleiras e séries

- Livros da mesma `serie` ficam juntos, sob a mesma placa.
- Quando a série não cabe mais na largura da prateleira, uma nova prateleira abre automaticamente.
- Para criar uma série nova, basta usar um nome de `serie` diferente.

## Paleta do site

| Uso | Cor |
|---|---|
| Parede | `#18211f` |
| Madeira (clara, média, escura) | `#8a5d3a`, `#6a452a`, `#4a2f1c` |
| Fundo da prateleira | `#2b1c12` |
| Ouro (títulos, placas, detalhes) | `#e0b85c` |
| Papel | `#f8f4ea` |
| Tinta (texto no papel) | `#22262b` |
| Destaque dos títulos nas páginas | `#9a3b2e` |

Fonte: serifada do sistema (`"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif`). Não use fontes externas.

## Regras para a página de cada livro

- `<html lang="pt-BR">`, `<title>` com o nome do livro e `<meta name="description">` própria (ajuda o Google).
- Incluir o link de volta: `<a class="voltar" href="../">‹ Estante</a>` (veja o `enem/index.html`).
- Cada página do livro é um `<article class="face">`, em ordem. O total de páginas deve ser PAR (frente e verso de cada folha). A página 0 é a capa.
- Capa e contracapa usam `class="face cover nopg"`. A segunda página usa `class="face endp nopg"`.
- Textos curtos: cerca de 600 caracteres por página, para caber sem rolar.
- Tudo em um único `index.html`, sem imagens nem scripts externos.

## Conteúdo e direitos autorais

- Use apenas texto próprio, material de licença livre (Creative Commons) ou provas oficiais públicas.
- Não copie apostilas, aulas ou questões comerciais de terceiros.
- Confira a resolução de questões de exatas antes de publicar. Explicações geradas por IA podem ter erros.

## Publicação

GitHub Pages: *Settings → Pages → branch `main`, pasta `/root`*. Depois cadastre o site no Google Search Console.
