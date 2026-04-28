# Auditoria SEO + Google Ads + Analytics (Vercel)

## 1) Diagnóstico atual do projeto

### SEO técnico
- `metadata` global configurado em `src/app/layout.tsx`.
- `openGraph`, `twitter`, `canonical` e `robots` adicionados no layout.
- `robots.txt` dinâmico implementado em `src/app/robots.ts`.
- `sitemap.xml` dinâmico implementado em `src/app/sitemap.ts` com áreas da clínica.
- Sem erros de build e tipagem após ajustes.

### Pontos ainda recomendados
- Definir imagem OG oficial (`openGraph.images`) para compartilhamento social.
- Criar `generateMetadata` por página de área para títulos/descrições específicos por serviço.
- Validar domínio canônico final (o arquivo usa `https://www.clinicadverso.com.br`).

## 2) Plano de implantação de Google Analytics 4 e Google Ads

## 2.1 O que já ficou pronto no código
- Componente `src/components/analytics/GoogleTags.tsx`:
  - Carrega `gtag.js` apenas se houver ID configurado.
  - Suporta GA4 (`NEXT_PUBLIC_GA_ID`) e Google Ads (`NEXT_PUBLIC_GOOGLE_ADS_ID`) em conjunto.
  - Inicializa com `anonymize_ip: true`.
- Injeção do script feita no `src/app/layout.tsx` com `strategy="afterInteractive"`.

## 2.2 Configuração no Vercel (produção e preview)
No painel da Vercel:
1. Acesse **Project > Settings > Environment Variables**.
2. Cadastre:
   - `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-XXXXXXXXX`
3. Aplique em `Production` e `Preview` (se desejar validar antes de publicar).
4. Faça novo deploy.

## 2.3 Checklist de validação pós-deploy
- Abrir o site em produção e validar tag com:
  - [Tag Assistant](https://tagassistant.google.com/)
  - DebugView do GA4.
- Conferir se existem hits de `page_view` no GA4.
- Confirmar se o ID Ads também foi carregado no `gtag('config', 'AW-...')`.

## 3) Recomendação de eventos para campanhas (fase 2)

## Eventos mínimos
- Clique em WhatsApp (principal conversão).
- Clique em “Saiba mais” nas áreas.
- Envio de formulário (quando existir).
- Scroll de engajamento (ex.: 75% da página).

## Convenção sugerida
- `generate_lead` (WhatsApp/formulário)
- `view_item` (visualização de área)
- `select_content` (clique em CTA)

## 4) Estrutura recomendada para Google Ads

## Conversões prioritárias
- Conversão primária: clique no botão WhatsApp.
- Conversão secundária: visita a páginas de área com alto interesse (ex.: ABA, Avaliação Neuropsicológica).

## Público e segmentação inicial
- Região: Sorocaba e raio de atendimento da clínica.
- Estratégia:
  - Campanha Search por intenção (termos de terapia/psicologia local).
  - Remarketing (fase 2) com base em visitantes de áreas.

## 5) Boas práticas SEO para manter
- Título e descrição únicos por página de serviço.
- H1 único por página.
- Conteúdo local consistente (Sorocaba e região).
- Performance de imagens (WebP quando possível, tamanho responsivo).
- Atualização recorrente do conteúdo institucional e áreas.

## 6) Riscos e mitigação
- **Risco:** domínio canônico diferente do domínio real em produção.  
  **Mitigação:** ajustar `metadataBase`, `robots.ts` e `sitemap.ts` para o domínio final.

- **Risco:** tags instaladas mas sem eventos de conversão.  
  **Mitigação:** implementar evento de clique no WhatsApp e validar com Tag Assistant.

- **Risco:** tráfego pago sem estrutura de medição.  
  **Mitigação:** validar GA4/Ads antes de iniciar orçamento.
