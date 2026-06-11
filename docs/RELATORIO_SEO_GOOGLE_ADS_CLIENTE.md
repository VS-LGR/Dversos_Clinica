# Relatório SEO e Google Ads — Clínica DVERSO

**Data:** maio de 2026  
**Site:** https://dverso.com.br (domínio configurado no código; publicação DNS pendente)  
**Público:** gestão da clínica e equipe de marketing  

---

## 1. Resumo executivo

O site institucional da Clínica DVERSO foi finalizado com estrutura técnica de SEO, rastreamento de conversões e documentação para os próximos passos de visibilidade orgânica e mídia paga.

**O que já está pronto no site:**

- Títulos e descrições únicos por página (home, institucionais, 16 áreas de atendimento e blog).
- URLs canônicas, sitemap automático e robots.txt.
- Dados estruturados (JSON-LD) da clínica e de cada área de atendimento.
- Favicon e manifest do navegador.
- Rastreamento de cliques no WhatsApp e contatos (quando GA4/Ads estiverem configurados).
- Blog com painel administrativo para conteúdo contínuo.

**O que depende da clínica:**

1. Publicar o domínio **dverso.com.br** na Vercel (DNS).
2. Criar e vincular **Google Search Console**.
3. Criar **Google Analytics 4** e cadastrar o ID na Vercel.
4. (Opcional) Criar **Google Ads** e importar conversões do GA4.

Nenhuma alteração visual foi feita nesta etapa — apenas otimizações técnicas invisíveis ao visitante.

---

## 2. Inventário do site

### Páginas principais (indexáveis)

| URL | Finalidade |
|-----|------------|
| `/` | Página inicial — apresentação, áreas, tour, CTAs |
| `/sobre` | História, missão e processo de atendimento |
| `/areas` | Listagem de todas as áreas |
| `/espacos` | Galeria dos ambientes terapêuticos |
| `/liderancas` | Equipe de liderança |
| `/seja-colaborador` | Recrutamento |
| `/blog` | Artigos educativos |
| `/blog/[slug]` | Artigos individuais (dinâmicos) |

### 16 páginas de área (SEO local por serviço)

| URL | Serviço |
|-----|---------|
| `/areas/psychology` | Psicologia |
| `/areas/therapeutic-companion` | Acompanhante Terapêutico |
| `/areas/speech-therapy` | Fonoaudiologia |
| `/areas/occupational-therapy` | Terapia Ocupacional |
| `/areas/sensory-integration` | Integração Sensorial |
| `/areas/music-therapy` | Musicoterapia |
| `/areas/physiotherapy` | Fisioterapia |
| `/areas/psychomotricity` | Psicomotricidade |
| `/areas/nutrition` | Nutrição |
| `/areas/feeding-therapy` | Terapia Alimentar |
| `/areas/psychopedagogy` | Psicopedagogia |
| `/areas/neuropsychological-assessment` | Avaliação Neuropsicológica |
| `/areas/animal-assisted-therapy` | Terapia Assistida por Animais |
| `/areas/neurodiversity` | Neurodiversidade |
| `/areas/art-therapy` | Arteterapia |
| `/areas/dog-therapy` | Cão de Terapia (TAA) |

### Páginas não indexadas

- `/admin/*` — painel do blog (bloqueado em `robots.txt`).

---

## 3. SEO técnico implementado

| Item | Status | Detalhe |
|------|--------|---------|
| Idioma | OK | `lang="pt-BR"` em todo o site |
| Metadata (title/description) | OK | Único por página |
| Canonical | OK | Aponta para `https://dverso.com.br/...` |
| Open Graph | OK | Título, descrição e imagem para redes sociais |
| Twitter Card | OK | `summary_large_image` |
| Sitemap | OK | `https://dverso.com.br/sitemap.xml` |
| Robots | OK | `https://dverso.com.br/robots.txt` |
| JSON-LD clínica | OK | `MedicalBusiness` com endereço, telefone, redes |
| JSON-LD por área | OK | `MedicalTherapy` em cada página de serviço |
| Favicon | OK | Logo da clínica na aba do navegador |
| H1 único | OK | Uma tag H1 por página |
| Acessibilidade base | OK | Skip link, landmarks, aria-labels em CTAs |

### Imagem para compartilhamento (Open Graph)

Imagem padrão: foto institucional do site (`/images/hero-poster.webp`).

**Recomendação pós-deploy:** validar no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) e no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). Se a prévia não ficar ideal, substituir por imagem 1200×630 px com logo e texto da clínica.

---

## 4. Checklist de metadata por página

Domínio canônico: **https://dverso.com.br**

### Institucionais

| Página | Título (resumo) | Canonical |
|--------|------------------|-----------|
| Home | Clínica DVERSO \| Saúde Integrada em Sorocaba | `/` |
| Sobre | Sobre a Clínica DVERSO \| Atendimento neuroatípico em Sorocaba | `/sobre` |
| Áreas | Áreas de atuação | `/areas` |
| Espaços | Nossos espaços \| Clínica DVERSO Sorocaba | `/espacos` |
| Lideranças | Lideranças DVERSO \| Clínica de saúde integrada | `/liderancas` |
| Seja colaborador | Seja colaborador \| Clínica DVERSO | `/seja-colaborador` |
| Blog | (layout do blog) | `/blog` |

### Áreas (padrão)

Cada área segue o formato:

- **Título:** `[Nome da área] em Sorocaba | Clínica DVERSO`
- **Descrição:** texto da área + "Agende na Clínica DVERSO."
- **Canonical:** `/areas/[slug]`

Exemplo — Psicologia:

- Título: *Psicologia em Sorocaba*
- Canonical: `https://dverso.com.br/areas/psychology`

---

## 5. Pontos de atenção

### Domínio ainda não publicado

O código está preparado para **https://dverso.com.br**, mas o domínio precisa ser conectado na Vercel antes de:

- Enviar o sitemap ao Google Search Console.
- Iniciar campanhas de Google Ads com URL final estável.
- Compartilhar links canônicos em materiais impressos ou redes sociais.

**Passos resumidos:**

1. Na Vercel: Project → Settings → Domains → adicionar `dverso.com.br`.
2. No registrador do domínio: apontar DNS conforme instruções da Vercel (geralmente registro A ou CNAME).
3. Definir redirecionamento `www` → sem `www` (ou o inverso), mantendo **um único** domínio canônico.
4. Aguardar propagação DNS (até 48 h) e testar `https://dverso.com.br`.

### Imagens externas (Imgur)

Alguns elementos decorativos ainda usam imagens hospedadas no Imgur. Não afetam SEO diretamente, mas migrar para `public/images/` no futuro melhora performance e controle.

### Blog e conteúdo contínuo

Publicar artigos regularmente no blog (`/blog`) fortalece SEO de longo prazo com palavras-chave educativas (ABA, neurodiversidade, TAA, etc.).

---

## 6. Google Search Console — passo a passo

1. Acesse [Google Search Console](https://search.google.com/search-console).
2. Clique em **Adicionar propriedade**.
3. Escolha **Prefixo do URL** e informe: `https://dverso.com.br`
4. Verifique a propriedade (métodos comuns):
   - **Registro DNS** (recomendado para domínio próprio), ou
   - **Tag HTML** via Vercel (variável temporária), ou
   - **Google Analytics** (se GA4 já estiver instalado).
5. Após verificação, vá em **Sitemaps** e envie: `https://dverso.com.br/sitemap.xml`
6. Use **Inspeção de URL** nas páginas principais (`/`, `/sobre`, `/areas/psychology`) e solicite indexação.
7. Monitore semanalmente: cobertura, Core Web Vitals e consultas de pesquisa.

---

## 7. Google Analytics 4 — passo a passo

### Criar propriedade

1. Acesse [Google Analytics](https://analytics.google.com/).
2. Admin → **Criar** → Propriedade → nome: *Clínica DVERSO*.
3. Fluxo de dados → **Web** → URL: `https://dverso.com.br`.
4. Copie o **ID de medição** (formato `G-XXXXXXXXXX`).

### Configurar no site (Vercel)

1. Vercel → Project → Settings → **Environment Variables**.
2. Adicione: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
3. Ambiente: **Production** (e Preview, se quiser testar).
4. Faça **Redeploy** do projeto.

### Validar instalação

1. Instale a extensão [Tag Assistant](https://tagassistant.google.com/).
2. Acesse o site em produção e confirme o carregamento do GA4.
3. No GA4: Admin → **DebugView** (ou Relatórios em tempo real).
4. Navegue no site e verifique eventos `page_view`.

### Eventos de conversão já preparados no site

| Evento | Quando dispara | Uso |
|--------|----------------|-----|
| `generate_lead` | Clique em botão ou link WhatsApp | **Conversão primária** |
| `click_to_call` | Clique em "Ligar" (barra mobile) | Conversão secundária |
| `select_content` | Mapa, Instagram, Facebook | Engajamento |

### Marcar conversão no GA4

1. GA4 → Admin → **Eventos**.
2. Localize `generate_lead` (pode levar 24 h após primeiros cliques).
3. Ative **Marcar como conversão**.
4. Opcional: marque `click_to_call` como conversão secundária.

---

## 8. Google Ads — passo a passo

### Pré-requisitos

- Domínio `dverso.com.br` publicado e funcionando.
- GA4 instalado e recebendo dados há pelo menos alguns dias.
- Conta Google Ads (pode ser a mesma conta Google da clínica).

### Criar conta e vincular GA4

1. Acesse [Google Ads](https://ads.google.com/) e crie a conta.
2. Ferramentas → **Vinculações de conta** → Google Analytics → vincule a propriedade DVERSO.
3. Em **Conversões**, clique em **Nova ação de conversão** → **Importar** → **Google Analytics 4**.
4. Selecione `generate_lead` como conversão **primária**.
5. Opcional: importe `click_to_call` como secundária.

### ID do Google Ads no site (opcional, recomendado)

1. No Google Ads: Ferramentas → **Configuração da tag** → copie o ID `AW-XXXXXXXXX`.
2. Na Vercel, adicione: `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-XXXXXXXXX`
3. Redeploy.

O site carrega GA4 e Ads no mesmo `gtag.js` quando ambos os IDs estão configurados.

### Estrutura de campanha sugerida (fase inicial)

**Campanha 1 — Pesquisa local (Search)**

- Objetivo: Leads (conversões).
- Rede: Pesquisa Google.
- Localização: Sorocaba + raio de 30–50 km (ajustar conforme atendimento).
- Idioma: Português.
- Orçamento diário inicial: conservador (ex.: R$ 30–80/dia — ajustar com gestor).
- Palavras-chave sugeridas (frase e correspondência ampla restrita):
  - clínica ABA sorocaba
  - psicologia infantil autismo sorocaba
  - terapia ocupacional autismo sorocaba
  - avaliação neuropsicológica sorocaba
  - fonoaudiologia TEA sorocaba
  - acompanhante terapêutico sorocaba
- URLs finais por grupo de anúncios:
  - Grupo ABA/Psicologia → `/areas/psychology`
  - Grupo Avaliação → `/areas/neuropsychological-assessment`
  - Grupo Terapias → `/areas` ou área específica
  - Grupo institucional → `/` ou `/sobre`

**Campanha 2 — Remarketing (fase 2, após tráfego)**

- Público: visitantes de `/areas/*` que não converteram.
- Anúncios display ou Performance Max com foco em WhatsApp.

### Boas práticas para anúncios

- Use extensões: telefone, local, sitelinks (`/sobre`, `/espacos`, `/areas`).
- Texto do anúncio alinhado à página de destino (relevância = menor custo por clique).
- Não iniciar orçamento alto antes de validar conversões no GA4 por 1–2 semanas.

---

## 9. Mapa de conversões

```text
Visitante chega ao site
        │
        ├── Clica WhatsApp (header, hero, área, footer)
        │         └── Evento: generate_lead  →  Conversão PRIMÁRIA
        │
        ├── Clica Ligar (barra mobile)
        │         └── Evento: click_to_call  →  Conversão SECUNDÁRIA
        │
        ├── Visita página de área (/areas/*)
        │         └── Micro-conversão (interesse) — remarketing futuro
        │
        └── Lê blog / institucional
                  └── Topo de funil — nutrição de marca
```

**Contato principal da clínica:**

- WhatsApp: (15) 99666-6866
- Endereço: R. Messías Pereira de Paula, 241 — Jardim Pires de Mello, Sorocaba/SP

---

## 10. Próximos passos recomendados (30 / 60 / 90 dias)

### 30 dias

- [ ] Publicar domínio `dverso.com.br`
- [ ] Verificar Search Console e enviar sitemap
- [ ] Instalar GA4 e validar eventos de WhatsApp
- [ ] Solicitar avaliações no Google Meu Negócio (perfil já vinculado ao endereço)
- [ ] Publicar 2–4 artigos no blog

### 60 dias

- [ ] Analisar consultas orgânicas no Search Console
- [ ] Iniciar campanha Search local (orçamento controlado)
- [ ] Ajustar títulos/descrições se alguma página tiver baixo CTR
- [ ] Validar imagem OG nas redes sociais

### 90 dias

- [ ] Remarketing para visitantes de áreas
- [ ] Expandir palavras-chave com base em dados reais
- [ ] Revisar Core Web Vitals e performance de imagens
- [ ] Planejar landing pages sazonais (volta às aulas, etc.) se desejado

---

## 11. Anexo técnico

### Variáveis de ambiente (Vercel)

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Sim (blog) | URL do Supabase |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Sim (blog) | Chave pública Supabase |
| `NEXT_PUBLIC_GA_ID` | Recomendada | ID GA4 (`G-...`) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Opcional | ID Google Ads (`AW-...`) |

### URLs de validação

| Ferramenta | URL |
|------------|-----|
| Sitemap | https://dverso.com.br/sitemap.xml |
| Robots | https://dverso.com.br/robots.txt |
| Rich Results (JSON-LD) | https://search.google.com/test/rich-results |
| Tag Assistant | https://tagassistant.google.com/ |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ |

### Contato técnico do projeto

Para alterações de conteúdo, textos e imagens: editar arquivos em `src/lib/constants/` ou usar o painel `/admin/blog` para artigos.

Documentação técnica completa: [GUIA_ENTREGA_TECNICA.md](./GUIA_ENTREGA_TECNICA.md)

---

*Relatório gerado na entrega final do site institucional Clínica DVERSO.*
