# Design System — Stack & Reference

## 1. Tecnologias do produto original

| Tecnologia | Versão / detalhe | Evidência no snapshot |
|---|---|---|
| Next.js | 15 (App Router) | Script chunk names, `self.__next_f.push`, `ClientPageRoot` |
| Turbopack | Bundler ativo | `turbopack-17znpcw_gu12h.js` no importmap |
| React | 18+ (RSC + hidratação) | `BAILOUT_TO_CLIENT_SIDE_RENDERING` templates, `$L` server-stream |
| Tailwind CSS | v4 (compilado) | Classes Tailwind no CSS fonte, `@layer theme`, `@layer base`, `@layer utilities` |
| Lenis | @studio-freight/lenis@1 | Classes `.lenis.lenis-smooth`, `lenis.lenis-stopped`, `lenis.lenis-scrolling` no CSS |
| Lucide Icons | React variant | `data-lucide` attrs + `class="lucide lucide-*"` no HTML |
| Inter (fonte) | Variable 400-700 | `@font-face` em `0vp63g-w75z_t.css` apontando `s.p.0q-301v4kxxnr.woff2` |
| Vercel | Hosting + Analytics | `vercel.live/_next-live/feedback`, `db-lp-n7du.vercel.app` |
| TypeScript | Implícito | Padrão Next.js 15 com Turbopack |

---

## 2. Tecnologias do design system gerado

| Tecnologia | Escolha e motivo |
|---|---|
| CSS puro com custom properties | Zero build step. Tokens em `tokens.css` propagam para todos os arquivos. Compatível com qualquer stack (Next, Astro, HTML puro). |
| Vanilla JS (ES5 compatível) | Sem bundler necessário. Funciona via `<script src>`. Cada utilitário é independente e tem API simples (`initX()`). |
| Lenis CDN | Mantém o mesmo scroll behavior do produto original. Integração via `window.__lenis`. |
| Lucide (CDN unpkg) | Mesmos ícones do produto original, sem build step. |
| Inter (Google Fonts CDN) | Mesma família tipográfica, fallback imediato sem depender do woff2 local. |
| IntersectionObserver | API nativa — sem polyfill necessário para os alvos modernos. |
| Fira Code (monospace) | Legibilidade de código nos blocos de documentação. |

---

## 3. Tokens CSS — referência completa

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#05000a` | Fundo base de toda a página |
| `--color-surface` | `#0d0d0e` | Fundo de cards e superfícies elevadas |
| `--color-surface-alt` | `#111111` | Variante de surface para contraste mínimo |
| `--color-purple` | `#9333ea` | Accent principal (nav ativo, botão roxo) |
| `--color-purple-light` | `#ac4bff` | Tailwind `purple-500`. Gradiente texto início |
| `--color-purple-dark` | `#6e11b0` | Tailwind `purple-800`. Gradiente texto fim |
| `--color-purple-vivid` | `#9810fa` | Tailwind `purple-600`. Hover de botões roxos |
| `--color-purple-400` | `#c07eff` | Tailwind `purple-400`. Gradiente alt início |
| `--color-fuchsia` | `#c600db` | Tailwind `fuchsia-600`. Accent secundário |
| `--color-indigo-dark` | `#312c85` | Tailwind `indigo-900`. Usado em gradientes |
| `--color-text` | `#ffffff` | Texto primário |
| `--color-text-muted` | `#9e9e9e` | Texto secundário, placeholders |
| `--color-text-muted-alt` | `#71717a` | Tailwind `zinc-500`. Alternativa muted |
| `--color-border` | `rgba(255,255,255,0.05)` | Bordas sutis (cards, nav links container) |
| `--color-border-soft` | `rgba(255,255,255,0.10)` | Bordas de inputs, hover states |
| `--color-border-medium` | `rgba(255,255,255,0.20)` | Bordas com maior contraste |
| `--color-zinc-900` | `#18181b` | Tailwind `zinc-900`. Fundo alternativo |

### Tipografia

| Token | Valor | Uso |
|---|---|---|
| `--font-family` | `'Inter', system-ui, sans-serif` | Fonte universal do produto |
| `--font-mono` | `'Fira Code', 'Courier New', monospace` | Blocos de código |
| `--font-size-xs` | `13px` | Badges, labels uppercase, feature tags |
| `--font-size-sm` | `14px` | Captions, card descriptions, secundário |
| `--font-size-base` | `15px` | Nav links, botões, texto geral |
| `--font-size-md` | `18px` | Body text de seções (`md:text-[18px]`) |
| `--font-size-lg` | `24px` | Card titles (`text-2xl`) |
| `--font-size-xl` | `32px` | Títulos de seção médios |
| `--font-size-2xl` | `48px` | Hero heading (`lg:text-[3rem]`) |
| `--font-weight-light` | `300` | Hero heading variante clara |
| `--font-weight-regular` | `400` | Body text |
| `--font-weight-medium` | `500` | Nav links, texto de apoio |
| `--font-weight-semibold` | `600` | Card titles, labels |
| `--font-weight-bold` | `700` | CTAs, hero bold spans, stat numbers |
| `--line-height-tight` | `1.25` | Headings (`leading-tight`) |
| `--line-height-base` | `1.625` | Body (`leading-relaxed`) |
| `--line-height-body` | `1.7` | Parágrafos longos (`leading-[1.7]`) |
| `--letter-spacing-tight` | `-0.025em` | Headings (`tracking-tight`) |
| `--letter-spacing-tighter` | `-0.05em` | Hero (`tracking-tighter`) |
| `--letter-spacing-wide` | `0.025em` | |
| `--letter-spacing-wider` | `0.05em` | Labels uppercase |

### Espaçamento

| Token | Valor |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |

### Border Radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | `8px` | `rounded-lg`. Botões copy, blocos menores |
| `--radius-md` | `12px` | `rounded-xl`. Cards de imagem |
| `--radius-lg` | `16px` | `rounded-2xl`. Cards feature, testimonial |
| `--radius-xl` | `20px` | Nav bar, glassmorphism containers |
| `--radius-2xl` | `24px` | `rounded-3xl`. Grandes containers |
| `--radius-full` | `9999px` | Pills: badges, botões, inputs, nav links |

### Efeitos

| Token | Valor | Uso |
|---|---|---|
| `--blur-glass` | `blur(20px)` | backdrop-filter do nav |
| `--blur-glow` | `blur(80px)` | Orbs de luz ambiente nos fundos |
| `--shadow-card` | `0 25px 50px -12px rgba(0,0,0,0.4)` | `shadow-2xl` — cards de imagem |
| `--shadow-sm` | `0 0 10px rgba(0,0,0,0.5)` | Sombra leve |
| `--shadow-glow` | `0 0 40px rgba(147,51,234,0.3)` | Glow roxo nos hovers |
| `--shadow-glow-white` | `0 0 40px -10px rgba(255,255,255,0.4)` | Glow branco no CTA hero |
| `--shadow-btn` | `0 4px 6px -1px rgba(0,0,0,0.1)` | Sombra do link ativo no nav |
| `--gradient-text` | `linear-gradient(135deg, #ac4bff, #9810fa, #6e11b0)` | Gradiente nos stat numbers |
| `--gradient-text-alt` | `linear-gradient(135deg, #fff, #c07eff)` | Gradiente heading alternativo |
| `--gradient-shimmer` | `linear-gradient(105deg, transparent, rgba(255,255,255,0.15), transparent)` | Animação shimmer do CTA |
| `--transition-base` | `all 0.3s ease` | Hover padrão |
| `--transition-smooth` | `transform 0.6s cubic-bezier(0.25,1,0.30,1), opacity 0.6s ...` | Nav hide/show, hero entry |
| `--transition-reveal` | `opacity 0.7s ease, transform 0.7s ease` | `.reveal` → `.visible` |

---

## 4. Componentes — classes e variantes

### Navbar (`css/nav.css`)
| Classe | Função |
|---|---|
| `.nav` | Container principal — glass, fixed, z-9999 |
| `.nav-logo-wrap` | Wrapper do logo com padding |
| `.nav-logo` | Imagem do logo (40px height) |
| `.nav-links` | Pill container dos links |
| `.nav-link` | Link individual — estado normal |
| `.nav-link.active` | Link ativo — fundo `--color-purple` |
| `.nav-link:hover` | Fundo `rgba(255,255,255,0.08)` |
| `.nav-cta` | Botão CTA branco com texto preto |

### Botões (`css/buttons.css`)
| Classe | Função |
|---|---|
| `.btn` | Base: inline-flex, rounded-full, transition |
| `.btn-lg` | `padding: 16px 32px` · `font-size: 18px` |
| `.btn-md` | `padding: 14px 24px` · `font-size: 15px` |
| `.btn-sm` | `padding: 10px 18px` · `font-size: 14px` |
| `.btn-primary` | Branco / preto — hover: #f3f4f6 + scale |
| `.btn-purple` | Roxo accent — hover: purple-vivid + scale |
| `.btn-outline` | Transparente com border — hover: purple |
| `.btn-shimmer` | CTA hero com animação diagonal de brilho |

### Cards (`css/cards.css`)
| Classe | Função |
|---|---|
| `.card-image` | Aspect 3/4, img cover, hover elevação |
| `.card-feature` | Surface + border + padding, ícone roxo |
| `.card-feature-icon` | `color: --color-purple`, 24×24 |
| `.card-feature-title` | `24px / semibold` |
| `.card-feature-desc` | `14px / muted / leading-relaxed` |
| `.card-builder` | Perfil centralizado, avatar circular |
| `.card-builder-avatar` | 80px circular, border sutil |
| `.card-builder-name` | `15px / semibold` |
| `.card-builder-role` | `14px / muted` |
| `.card-stat` | Stat numérico centrado |
| `.card-stat-number` | `48px / bold / gradient-text` |
| `.card-stat-label` | `14px / muted` |
| `.card-testimonial` | Quote + author na base |
| `.card-testimonial-quote` | `14px / leading-1.7` |
| `.card-testimonial-avatar` | 40px circular |
| `.col-fast` | Coluna parallax rápida (0.6×) |
| `.col-slow` | Coluna parallax lenta (0.3×) |

### Badges (`css/badges.css`)
| Classe | Função |
|---|---|
| `.badge` | Base: pill, border sutil, muted |
| `.badge-purple` | Fundo roxo 15%, border roxo 30% |
| `.badge-outline` | Transparente, border sutil |
| `.badge-white` | Fundo branco/5, texto branco |
| `.badge-check` | Hero feature item com checkmark |
| `.badge-dot` | Ponto colorido de status |

### Forms (`css/forms.css`)
| Classe | Função |
|---|---|
| `.form-group` | Flex row: input + button |
| `.form-group-stack` | Flex column para empilhar campos |
| `.form-input` | Input dark, rounded-full, focus roxo |
| `.form-textarea` | Textarea dark, rounded-md, resize vertical |
| `.form-label` | Label `14px / medium / muted` |

### Efeitos (`css/effects.css`)
| Classe | Função |
|---|---|
| `.glass` | `background: rgba(0,0,0,0.5) + blur(20px)` |
| `.glass-light` | `background: rgba(255,255,255,0.02) + blur(20px)` |
| `.glow-purple` | `::before` orb roxo blur(80px) |
| `.gradient-mask-bottom` | Fade para transparente no bottom |
| `.gradient-mask-top` | Fade para transparente no top |
| `.grid-pattern` | Grade de linhas com radial mask |
| `.reveal` | Estado inicial: `opacity:0, translateY(24px)` |
| `.reveal.visible` | `opacity:1, translateY(0)` — adicionado pelo JS |
| `.reveal-delay-1/2/3/4` | 80/160/240/320ms delay |
| `.pulse-glow` | Shadow roxo animado infinito |
| `.hover-lift` | translateY(-6px) + shadow no hover |
| `.hover-scale` | scale(1.02) no hover |
| `.scale-left/right/center-bottom/center` | transform-origin helpers |

---

## 5. Utilitários JS — assinaturas e dependências

### `js/smooth-scroll.js`
```
initSmoothScroll(options?) → Lenis | null

options: {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 2
}

Dependência: <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js">
Expõe: window.__lenis (consumido por parallax.js e nav-behavior.js)
```

### `js/parallax.js`
```
initParallax(options?)

options: {
  fastSelector: '.col-fast',   // move 0.6× do scrollY (invertido)
  fastSpeed: 0.6,
  slowSelector: '.col-slow',   // move 0.3× do scrollY (invertido)
  slowSpeed: 0.3,
  enabled: true
}

Dependência: nenhuma obrigatória
Integração Lenis: usa window.__lenis.on('scroll') se disponível
Desativa: em viewport < 768px (media query)
```

### `js/scroll-reveal.js`
```
initScrollReveal(options?) → { observe(el), refresh() }

options: {
  selector: '.reveal',
  staggerDelay: 80,       // ms entre irmãos no mesmo pai
  threshold: 0.15,        // % do elemento visível para trigger
  rootMargin: '0px 0px -40px 0px'
}

Dependência: IntersectionObserver (nativo)
CSS necessário: effects.css (define .reveal e .reveal.visible)
Override manual: data-reveal-delay="ms" no elemento HTML
```

### `js/nav-behavior.js`
```
initNavBehavior(options?)

options: {
  navSelector: '.nav',
  linkSelector: '.nav-link',
  hideThreshold: 100,         // px de scroll para esconder nav
  sectionThreshold: 0.5       // % de seção visível para ativar link
}

Dependência: nenhuma obrigatória
Integração Lenis: usa window.__lenis se disponível
Comportamentos:
  - Scroll DOWN > hideThreshold: transform translate(-50%, -120%)
  - Scroll UP: transform translate(-50%, 0)
  - Seção em view: .nav-link.active aplicado ao link correspondente
  - Click em link #hash: scrollIntoView smooth (ou lenis.scrollTo)
```

---

## 6. Ordem de carregamento recomendada

```html
<!-- 1. Fontes -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

<!-- 2. Ícones -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- 3. Lenis (antes dos scripts que dependem dele) -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js"></script>

<!-- 4. Tokens primeiro (todos os outros dependem dele) -->
<link rel="stylesheet" href="design-system/tokens.css"/>
<link rel="stylesheet" href="design-system/css/base.css"/>
<link rel="stylesheet" href="design-system/css/typography.css"/>
<link rel="stylesheet" href="design-system/css/effects.css"/>
<link rel="stylesheet" href="design-system/css/nav.css"/>
<link rel="stylesheet" href="design-system/css/buttons.css"/>
<link rel="stylesheet" href="design-system/css/cards.css"/>
<link rel="stylesheet" href="design-system/css/badges.css"/>
<link rel="stylesheet" href="design-system/css/forms.css"/>

<!-- 5. JS no final do body (após DOM pronto) -->
<script src="design-system/js/smooth-scroll.js"></script>
<script src="design-system/js/parallax.js"></script>
<script src="design-system/js/scroll-reveal.js"></script>
<script src="design-system/js/nav-behavior.js"></script>
<script>
  initSmoothScroll();
  initParallax();
  initScrollReveal({ staggerDelay: 80 });
  initNavBehavior();
  lucide.createIcons();
</script>
```
