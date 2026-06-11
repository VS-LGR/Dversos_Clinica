# Clínica DVERSO — Site Institucional

Site institucional da Clínica DVERSO (Sorocaba e região): psicologia com ABA, terapias integradas, avaliação neuropsicológica, TAA, nutrição e atendimento neuroafirmativo.

**Domínio canônico:** https://dverso.com.br

## Stack

- **Next.js 14** (App Router)
- **TypeScript** + **Tailwind CSS**
- **Supabase** (blog e painel administrativo)
- **Vercel** (deploy)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Home — hero com vídeo, áreas, tour, processo de cuidado |
| `/sobre` | História e etapas do atendimento |
| `/areas` | Listagem das 16 áreas |
| `/areas/[slug]` | Detalhe por serviço (psicologia, fonoaudiologia, etc.) |
| `/espacos` | Galeria dos ambientes terapêuticos |
| `/liderancas` | Equipe de liderança |
| `/seja-colaborador` | Trabalhe conosco |
| `/blog` | Artigos educativos |
| `/admin` | Painel do blog (não indexado) |

## Estrutura principal

```text
src/
├── app/                    # Rotas e metadata
├── components/
│   ├── seo/                # JSON-LD (clínica e áreas)
│   ├── analytics/          # Google Tags (GA4 + Ads)
│   ├── home/ areas/ layout/ shared/ blog/
├── lib/
│   ├── seo/metadata.ts     # Títulos, OG, canonical
│   ├── analytics/gtag.ts   # Eventos de conversão
│   └── constants/          # Conteúdo, áreas, contato, mídia
docs/
├── RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md
└── GUIA_ENTREGA_TECNICA.md
public/images/              # Fotos e logos
public/video/hero-bg.webm   # Vídeo do hero
```

## Desenvolvimento

```bash
npm install
cp .env.example .env.local   # configurar Supabase (e GA/Ads se necessário)
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build e deploy

```bash
npm run lint
npm run build
npm run start
```

Na Vercel: conectar o repositório, cadastrar variáveis de ambiente (ver `.env.example`) e adicionar o domínio `dverso.com.br`.

## SEO e conversão

- Metadata, sitemap, robots e JSON-LD configurados
- Evento `generate_lead` nos cliques de WhatsApp
- Evento `click_to_call` na barra de contato mobile

**Relatório completo para o cliente:** [docs/RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md](docs/RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md)

**Guia técnico de entrega:** [docs/GUIA_ENTREGA_TECNICA.md](docs/GUIA_ENTREGA_TECNICA.md)

## Conteúdo e mídia

- Textos institucionais: `src/lib/constants/siteContent.ts`, `clinicAreas.ts`
- Fotos: `public/images/` (manifest em `clinicMedia.ts`)
- Tour em vídeo: embed YouTube (ID em `clinicMedia.ts`)
- MP4 local em `public/video/*.mp4` está no `.gitignore` (arquivos grandes)

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `npm run optimize:hero-video` | Otimizar vídeo do hero |

## Contato da clínica

- WhatsApp: (15) 99666-6866
- Endereço: R. Messías Pereira de Paula, 241 — Jardim Pires de Mello, Sorocaba/SP
- Instagram: [@clinica.dverso](https://www.instagram.com/clinica.dverso)
