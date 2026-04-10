# Orações Latinas

Site estático com as 14 orações essenciais da tradição católica em Latim e Português, com pinturas clássicas, leitor de áudio e exportação para PDF.

## Requisitos

- Node.js 20+
- npm

## Desenvolvimento local

```bash
npm ci
npm run dev
# → http://localhost:3000
```

## Adicionar gravações de áudio

Coloca os ficheiros MP3 em `public/audio/` com os seguintes nomes:

| Oração | Ficheiro |
|--------|----------|
| Signum Crucis | `signum-crucis.mp3` |
| Gloria Patri | `gloria-patri.mp3` |
| Pater Noster | `pater-noster.mp3` |
| Ave Maria | `ave-maria.mp3` |
| Salve Regina | `salve-regina.mp3` |
| Sancte Michael | `sancte-michael.mp3` |
| Credo | `credo.mp3` |
| Actus Contritionis | `actus-contritionis.mp3` |
| Memorare | `memorare.mp3` |
| Anima Christi | `anima-christi.mp3` |
| Angelus Domini | `angelus.mp3` |
| Regina Caeli | `regina-caeli.mp3` |
| Angele Dei | `angele-dei.mp3` |
| Benedictio Mensae | `benedictio-mensae.mp3` |

O botão de áudio só aparece se o ficheiro existir. Se não existir, o botão é ocultado automaticamente.

## Deploy no Vercel

1. Cria uma conta em [vercel.com](https://vercel.com)
2. Clica em **Add New Project** → importa o repositório `arturarede/oracoeslatim`
3. O Vercel detecta automaticamente o Next.js — clica **Deploy**

## Domínio personalizado (`oracoeslatim.pt`)

1. Regista o domínio num registrar (ex: [PTisp](https://www.ptisp.pt), GoDaddy, Namecheap)
2. No Vercel: **Project Settings → Domains → Add Domain** → escreve `oracoeslatim.pt`
3. O Vercel mostra os registos DNS a configurar (tipicamente dois registos `A` ou um `CNAME`)
4. Vai ao painel do registar e adiciona esses registos DNS
5. Aguarda propagação (até 48h, normalmente minutos)

## Pinturas

Todas as pinturas são de domínio público, servidas a partir da Wikimedia Commons.
