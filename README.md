# Clínica Dverso — Site Institucional

Site institucional da Clínica Dverso (Sorocaba e região): psicologia, neurodivergência, psicoterapia musical, nutrição e terapia assistida por cão.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global (Header, Footer, fonte, skip link)
│   ├── page.tsx            # Página inicial (hero, áreas, neurodivergência, dog therapy, fundadoras)
│   ├── not-found.tsx       # 404
│   └── areas/
│       ├── page.tsx        # Listagem de áreas
│       ├── psychology/page.tsx
│       ├── neurodiversity/page.tsx
│       ├── music-therapy/page.tsx
│       ├── nutrition/page.tsx
│       └── dog-therapy/page.tsx
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # OpeningAnimation, HeroSection, AreasGrid, NeurodiversityHighlight, DogTherapyBand, FoundersSection
│   ├── shared/             # WhatsAppButton, SectionTitle, GothicFrame
│   └── areas/              # AreaHero, AreaPageContent, ProfessionalsList, LocationGallery
├── lib/constants/
│   ├── clinicAreas.ts      # Áreas de atuação (slug, textos, mensagem WhatsApp)
│   ├── founders.ts         # Dados das fundadoras
│   └── professionals.ts    # Profissionais por área
└── styles/
    └── globals.css         # Tailwind + variáveis de cor e animações
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build e deploy (Vercel)

```bash
npm run build
npm run start
```

Para deploy na Vercel: conecte o repositório Git e use o build command `npm run build` e output directory padrão (Next.js).

## Pontos de atenção / melhorias futuras

- **Número de WhatsApp**: alterar `DEFAULT_WHATSAPP_NUMBER` em `src/lib/constants/clinicAreas.ts` para o número real (com DDI e DDD, sem formatação).
- **Textos**: revisar e substituir textos sugestivos em `clinicAreas.ts`, `founders.ts` e `professionals.ts` pelo conteúdo oficial da clínica.
- **Fotos**: substituir placeholders por fotos reais do espaço e dos profissionais (ajustar `imageUrl` nos constants e adicionar arquivos em `public/` ou usar URLs).
- **Imagens externas**: as imagens de stickers e moldura gótica vêm de links (Imgur). Para produção, considere hospedar localmente em `public/` para maior controle e performance.
- **Depoimentos / blog**: adicionar seção de depoimentos ou blog educativo, se desejado.
- **Agendamento**: integrar com sistema de agendamento online no futuro, se a clínica adotar algum.

## Design

- Paleta: branco e `#1a2b56` (primary) com tons complementares (`primary-pale`, `primary-light`, `accent`).
- Moldura gótica e stickers de cachorro/criança usados com parcimônia conforme definido no plano.
- Layout responsivo (mobile-first) e acessível (skip link, landmarks, aria-labels em CTAs).
