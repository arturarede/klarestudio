# Plano — oracoeslatim.pt

Site de orações católicas em Latim com tradução em Português.

---

## Stack

| Tecnologia | Versão | Motivo |
|---|---|---|
| Next.js | 15.3 | SSG, App Router, `next/image` |
| TypeScript | 5 | Tipagem dos dados das orações |
| Tailwind CSS | 4 | Utilitários base |
| html2canvas + jsPDF | latest | Export PDF client-side |
| Google Fonts (via `<link>`) | — | UnifrakturMaguntia + EB Garamond |

**Deploy:** Vercel (free tier)
**Domínio:** `oracoeslatim.pt`
**Repositório:** `arturarede/oracoeslatim`

---

## Estrutura de ficheiros

```
oracoeslatim/
├── .github/
│   └── workflows/ci.yml          # lint + build em cada push
├── public/
│   ├── site.webmanifest
│   └── audio/                    # MP3s das orações (adicionar manualmente)
│       ├── signum-crucis.mp3
│       ├── gloria-patri.mp3
│       ├── pater-noster.mp3
│       ├── ave-maria.mp3
│       ├── salve-regina.mp3
│       ├── sancte-michael.mp3
│       ├── credo.mp3
│       ├── actus-contritionis.mp3
│       ├── memorare.mp3
│       ├── anima-christi.mp3
│       ├── angelus.mp3
│       ├── regina-caeli.mp3
│       ├── angele-dei.mp3
│       └── benedictio-mensae.mp3
├── src/
│   ├── app/
│   │   ├── fonts.ts              # Referências às classes de fonte
│   │   ├── globals.css           # Design system completo
│   │   ├── layout.tsx            # Root layout + SEO + Google Fonts
│   │   └── page.tsx              # Página principal (SSG)
│   ├── components/
│   │   ├── AudioPlayer.tsx       # Player HTML5 com scrubber
│   │   ├── NavIndex.tsx          # Índice de navegação 2 colunas
│   │   ├── PageHeader.tsx        # Cabeçalho em Fraktur
│   │   ├── PdfButton.tsx         # Export PDF via html2canvas
│   │   └── PrayerCard.tsx        # Cartão de oração com pintura
│   └── data/
│       ├── prayers.ts            # 14 orações com texto e pinturas
│       └── types.ts              # Interfaces TypeScript
├── .gitignore
├── eslint.config.mjs
├── next.config.ts                # remote patterns para Wikimedia
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vercel.json
```

---

## Design system

### Paleta de cores
```css
--bg:           #d6cfc0   /* fundo pergaminho */
--card-bg:      #f5f0e8   /* cartão */
--nav-bg:       #f0ebe0   /* índice */
--border:       #c8bfa8
--border-light: #ddd6c4
--ink:          #1a1208   /* texto principal */
--ruby:         #8b1a10   /* destaques, links */
--muted:        #6b5a3e   /* texto secundário */
--muted-light:  #9e8c72   /* atribuições, labels */
```

### Tipografia
- **Títulos de orações + cabeçalho:** `UnifrakturMaguntia` (Fraktur)
- **Corpo, legendas, botões:** `EB Garamond` 400/500/italic
- **Carregamento:** via `<link>` Google Fonts no `<head>` (sem fetch no build)

### Textura
Noise SVG via `data:` URI em `::before` — aplicado ao `body` e a cada `.prayer-card`.

---

## Componentes

### `PrayerCard`
- Recebe um objecto `Prayer`
- Renderiza: label romano · título Fraktur · subtítulo em itálico · divisor · pintura · texto · botões
- Suporta `stanzas` (lista plana) e `sections` (sub-secções com label, ex: Angelus, Benedictio)

### `AudioPlayer` (`'use client'`)
- `<audio>` HTML5 escondido, controlado por React state
- Botão play/pause com ícone SVG
- Scrubber (`<input type="range">`) + tempo decorrido/total
- **Graceful degradation:** se o MP3 não existir (erro 404), o componente retorna `null`

### `PdfButton` (`'use client'`)
- Clique → esconde `.card-actions` → `html2canvas` captura o cartão a 2× DPI → `jsPDF` cria PDF
- Tamanho do PDF = dimensões do cartão (portrait)
- Spinner animado durante a geração
- Ficheiro guardado como `{título}.pdf`

### `NavIndex`
- Grelha CSS de 2 colunas
- Links âncora `href="#${prayer.id}"`

---

## Dados — 14 orações

| # | ID | Título | Pintura |
|---|---|---|---|
| I | `signum-crucis` | Signum Crucis | Rafael — Mond Crucifixion, 1503 |
| II | `gloria-patri` | Gloria Patri | Dürer — Adoração da Trindade, 1511 |
| III | `pater-noster` | Pater Noster | Carl Bloch — Sermão da Montanha, 1877 |
| IV | `ave-maria` | Ave Maria | Fra Angelico — A Anunciação, c. 1440 |
| V | `salve-regina` | Salve Regina | Piero della Francesca — Madonna della Misericordia |
| VI | `sancte-michael` | Sancte Michael | Rafael — São Miguel Arcanjo, c. 1505 |
| VII | `credo` | Credo | El Greco — O Pentecostes, c. 1600 |
| VIII | `actus-contritionis` | Actus Contritionis | Rembrandt — O Filho Pródigo, c. 1669 |
| IX | `memorare` | Memorare | Murillo — Imaculada Conceição, c. 1678 |
| X | `anima-christi` | Anima Christi | Leonardo da Vinci — A Última Ceia, c. 1497 |
| XI | `angelus` | Angelus Domini | Millet — L'Angélus, 1857–1859 |
| XII | `regina-caeli` | Regina Caeli | Ticiano — Assunção da Virgem, 1516–1518 |
| XIII | `angele-dei` | Angele Dei | Guercino — O Anjo da Guarda, 1656 |
| XIV | `benedictio-mensae` | Benedictio Mensae | Chardin — Le Bénédicité, c. 1740 |

Todas as pinturas são de domínio público, servidas via Wikimedia Commons (`upload.wikimedia.org`).

---

## Áudio

Os ficheiros MP3 devem ser colocados em `public/audio/` com os nomes da tabela acima.  
O botão **Ouvir** só aparece se o ficheiro existir — não há erros visíveis se faltar.

Formato recomendado: MP3, 128 kbps, mono ou stereo, voz humana gravada.

---

## Deploy

### Vercel (recomendado)
1. Importar `arturarede/oracoeslatim` no [vercel.com](https://vercel.com)
2. Vercel detecta Next.js automaticamente
3. Clicar **Deploy**

### Domínio `oracoeslatim.pt`
1. Registar em [PTisp](https://www.ptisp.pt), GoDaddy ou Namecheap
2. No Vercel: **Project Settings → Domains → Add** → `oracoeslatim.pt`
3. Configurar os registos DNS indicados pelo Vercel no painel do registar
4. Propagação: normalmente minutos, máximo 48h

---

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) corre em cada push para `main`:
1. `npm ci`
2. `npm run lint`
3. `npm run build`

O Vercel faz deploy automático em cada push para `main`.

---

## Decisões técnicas

| Decisão | Alternativa considerada | Motivo |
|---|---|---|
| Fontes via `<link>` | `next/font/google` | `next/font` faz fetch ao Google no build — falha em ambientes sem internet |
| PDF via html2canvas | `@react-pdf/renderer` | html2canvas captura o CSS real (pergaminho, fontes) sem redefinir layout |
| Imagens Wikimedia | Imagens locais | Domínio público, CDN global, sem necessidade de armazenar binários no repo |
| Áudio estático em `public/` | TTS em runtime | Zero latência, sem chamadas a APIs externas, voz humana real |
