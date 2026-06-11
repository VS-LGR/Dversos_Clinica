# Guia de entrega técnica — Clínica DVERSO

Documentação para desenvolvedores e equipe de deploy.

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript** + **Tailwind CSS**
- **Supabase** (blog + painel admin)
- **Vercel** (hospedagem recomendada)

---

## Estrutura do projeto

```text
src/
├── app/
│   ├── layout.tsx              # Layout global, metadata, JSON-LD, analytics
│   ├── page.tsx                # Home
│   ├── icon.webp               # Favicon (gerado do logo)
│   ├── manifest.ts             # Web manifest
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── robots.ts               # Robots.txt
│   ├── areas/
│   │   ├── page.tsx            # Listagem
│   │   └── [slug]/page.tsx     # Páginas de área (16 slugs)
│   ├── sobre/ espacos/ liderancas/ seja-colaborador/
│   ├── blog/                   # Blog público
│   └── admin/                  # Painel (não indexado)
├── components/
│   ├── seo/                    # LocalBusinessJsonLd, AreaServiceJsonLd
│   ├── analytics/              # GoogleTags
│   └── ...
├── lib/
│   ├── seo/metadata.ts         # Helpers de metadata e OG image
│   ├── analytics/gtag.ts       # Eventos de conversão
│   └── constants/              # Conteúdo, áreas, contato, mídia
docs/
├── RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md
└── GUIA_ENTREGA_TECNICA.md
public/
├── images/                     # Fotos e logos da clínica
└── video/hero-bg.webm          # Vídeo do hero (MP4 local gitignored)
```

---

## Domínio canônico

Fonte única: `src/lib/constants/siteContact.ts`

```ts
export const SITE_URL = "https://dverso.com.br";
```

Usado em: `layout.tsx` (via metadata), `sitemap.ts`, `robots.ts`, JSON-LD e blog.

**Antes de ir ao ar:** conectar `dverso.com.br` na Vercel e configurar redirect www ↔ apex conforme estratégia escolhida.

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` em desenvolvimento.

| Variável | Ambiente | Descrição |
|----------|----------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Todos | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Todos | Chave publishable do Supabase |
| `NEXT_PUBLIC_GA_ID` | Produção | Google Analytics 4 (`G-...`) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Produção | Google Ads (`AW-...`) |

`GoogleTags.tsx` não renderiza scripts se GA e Ads estiverem vazios — seguro para preview sem tracking.

---

## SEO

### Metadata

- Global: `src/lib/seo/metadata.ts` → `DEFAULT_METADATA`
- Por página: `buildPageMetadata({ title, description, path })`
- Por área: `buildAreaMetadata(slug)` em `areas/[slug]/page.tsx`

### Sitemap e robots

- `/sitemap.xml` — rotas estáticas + 16 áreas + posts publicados do blog
- `/robots.txt` — `Allow: /`, `Disallow: /admin`

### JSON-LD

- `MedicalBusiness` — layout global (`LocalBusinessJsonLd.tsx`)
- `MedicalTherapy` — cada página de área (`AreaServiceJsonLd.tsx`)

---

## Analytics e conversão

### Eventos (`src/lib/analytics/gtag.ts`)

| Função | Evento GA4 |
|--------|--------------|
| `trackLead({ method, content_name })` | `generate_lead` |
| `trackContactClick("phone", label)` | `click_to_call` |
| `trackContactClick("whatsapp", label)` | `generate_lead` |
| `trackContactClick("map" \| "instagram" \| "facebook")` | `select_content` |

### Pontos instrumentados

- `WhatsAppButton` — todos os botões WhatsApp do site
- `ContactStrip` — barra mobile (mapa, redes, telefone, WhatsApp)

---

## Mídia e vídeos

- Tour da clínica: embed YouTube (`CLINIC_TOUR_YOUTUBE_ID` em `clinicMedia.ts`)
- Hero: `public/video/hero-bg.webm`
- MP4 em `public/video/*.mp4` está no `.gitignore` (arquivos grandes)

Script opcional para otimizar vídeo do hero:

```bash
npm run optimize:hero-video
```

---

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # servidor após build
npm run lint     # ESLint
```

---

## Deploy na Vercel

1. Conectar repositório Git.
2. Framework Preset: **Next.js** (detectado automaticamente).
3. Build Command: `npm run build`
4. Cadastrar variáveis de ambiente (ver tabela acima).
5. Adicionar domínio `dverso.com.br`.
6. Redeploy após alterar env vars.

---

## Painel admin (blog)

- URL: `/admin/login`
- Autenticação via Supabase Auth
- Rotas admin bloqueadas em `robots.txt`

---

## Checklist pós-deploy

- [ ] `https://dverso.com.br` responde com HTTPS
- [ ] `/sitemap.xml` lista URLs corretas
- [ ] `/robots.txt` bloqueia `/admin`
- [ ] View-source: JSON-LD presente na home
- [ ] Tag Assistant detecta GA4 (se configurado)
- [ ] Clique WhatsApp dispara `generate_lead` no DebugView
- [ ] Rich Results Test sem erros críticos

---

## Relatório ao cliente

Entregar junto com o projeto: [RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md](./RELATORIO_SEO_GOOGLE_ADS_CLIENTE.md)
