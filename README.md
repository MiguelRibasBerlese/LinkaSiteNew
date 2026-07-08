# LINKA Comunicações — Site institucional

Site de marketing (landing page) da Linka Comunicações, agência de marketing e social media. SPA em React + Vite, com animações de entrada/scroll via `framer-motion` e visual system em Tailwind CSS.

**Produção:** https://linka-site-new.vercel.app

## Stack

- **React 18** + **TypeScript**
- **Vite 5** — build/dev server
- **Tailwind CSS 3** — estilização (tema custom, ver `tailwind.config.js`)
- **framer-motion** — animações de entrada (`whileInView`) e transições
- **lucide-react** — ícones
- Deploy: **Vercel** (auto-deploy no push para `master`)

## Rodando localmente

```bash
npm install
npm run dev       # dev server (Vite)
npm run build     # type-check (tsc -b) + build de produção
npm run preview   # preview do build de produção
npm run lint      # eslint
```

## Estrutura

```
src/
  pages/
    Home.tsx                 # monta a página, ordem das seções
  components/
    layout/
      Navbar.tsx              # navbar fixa, menu mobile
    sections/                 # uma seção da landing page por arquivo
      HeroSection.tsx
      ManifestoSection.tsx
      ServicosSection.tsx
      TrabalhoSection.tsx      # carrosséis de vídeo por categoria
      RedesSociaisSection.tsx  # cards de Instagram/TikTok/YouTube/LinkedIn
      DepoimentosSection.tsx
      ProvaSection.tsx         # métricas/prova social
      CTASection.tsx
    ui/
      footer-section.tsx
      FioLine.tsx              # linha guia animada ao longo do scroll
      spotlight-card.tsx
      zoom-parallax.tsx
```

Cada seção é um componente autocontido (dados + JSX no mesmo arquivo) montado em `src/pages/Home.tsx`, nessa ordem. Não há roteamento — é uma página única com âncoras (`#servicos`, `#trabalho`, etc).

## Convenções

- **Cores** do tema (`brand-primary`, `brand-border`, `brand-panel`, `brand-black`, `brand-dim`) ficam em `tailwind.config.js` — usar as classes, não hex direto.
- **Animação de entrada** padrão: fade + scale via `framer-motion` (`opacity 0→1`, `scale 0.96→1`, `viewport={{ once: true }}`), não slide-up.
- **Links de CTA/redes sociais** são constantes no topo de cada componente (`CTA_HREF`, `FORM_HREF`, `SOCIAL_LINKS`) — atualizar ali, não inline no JSX.
- Ícones de marca (Instagram/TikTok/YouTube/LinkedIn) são SVGs inline em `RedesSociaisSection.tsx` — `lucide-react` não inclui ícones de marca.

## Deploy

Projeto linkado ao Vercel (`miguel-ribas-projects/linka-site-new`), com integração GitHub: todo push em `master` no repositório dispara build e deploy automático em produção.
