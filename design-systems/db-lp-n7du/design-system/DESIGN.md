---
name: Design Builder (DB)

colors:
  primary: "#9333ea"        # from --color-purple; cor de identidade da marca, logo, links ativos na nav
  secondary: "#9810fa"      # from --color-purple-vivid; CTA hero shimmer, gradient midpoint
  tertiary: "#ac4bff"       # from --color-purple-light; gradient start, badge border hover
  neutral: "#9e9e9e"        # from --color-text-muted; texto secundário, placeholders, labels
  surface: "#0d0d0e"        # from --color-surface; fundo de cards, feature grid, testimonials
  text: "#ffffff"           # from --color-text; texto primário, botão CTA (branco sobre preto)
  text-muted: "#9e9e9e"     # from --color-text-muted; descrições, captions, nav links inativos
  border: "#ffffff0d"       # from --color-border; rgba(255,255,255,0.05) — bordas sutis de cards
  error: "#ef4444"          # inferred from Tailwind red-500; não explícito no CSS
  success: "#22c55e"        # inferred from Tailwind green-500; não explícito no CSS

typography:
  display-hero:
    fontFamily: "Inter"
    fontSize: "48px"           # from --font-size-2xl; md:text-[2.5rem]~lg:text-[3rem]
    fontWeight: 300            # from --font-weight-light; .text-hero font-weight
    lineHeight: "1.25"         # from --line-height-tight
    letterSpacing: "-0.025em"  # from --letter-spacing-tight; tracking-tight
  section-heading:
    fontFamily: "Inter"
    fontSize: "48px"           # from --font-size-2xl; .text-section-title (bold variant)
    fontWeight: 700            # from --font-weight-bold
    lineHeight: "1.25"         # from --line-height-tight
    letterSpacing: "-0.025em"  # from --letter-spacing-tight
  body:
    fontFamily: "Inter"
    fontSize: "18px"           # from --font-size-md; md:text-[18px] in section descriptions
    fontWeight: 400            # from --font-weight-regular
    lineHeight: "1.625"        # from --line-height-base; leading-relaxed
  ui-label:
    fontFamily: "Inter"
    fontSize: "15px"           # from --font-size-base; nav links, buttons
    fontWeight: 500            # from --font-weight-medium; nav links
    lineHeight: "1.5"          # inferred from base body
  caption:
    fontFamily: "Inter"
    fontSize: "13px"           # from --font-size-xs; badges, card roles, feature items
    fontWeight: 600            # from --font-weight-semibold; .text-label uppercase caps
    lineHeight: "1.4"          # inferred for compact badge/label contexts

rounded:
  none: "0px"
  sm: "8px"      # from --radius-sm; rounded-lg
  md: "12px"     # from --radius-md; rounded-xl; card-image border-radius
  lg: "16px"     # from --radius-lg; rounded-2xl; card-feature, card-builder, card-testimonial
  xl: "20px"     # from --radius-xl; nav bar, hero image cards outer wrapper
  full: "9999px" # from --radius-full; pills, buttons, badges, inputs, nav-links container

spacing:
  xs: "4px"    # from --space-1
  sm: "8px"    # from --space-2; nav padding, gap in nav-links
  md: "16px"   # from --space-4; card-feature-icon margin, body padding
  lg: "24px"   # from --space-6; card padding, section inner gaps
  xl: "48px"   # from --space-12; section vertical spacing

preview_tokens:
  button_primary_bg: "#ffffff"      # from --color-text used as btn-primary background
  button_primary_text: "#000000"    # hardcoded in buttons.css .btn-primary color
  button_primary_border: "#ffffff"  # no border on primary; same as bg for reference
  button_secondary_bg: "transparent"
  button_secondary_text: "#ffffff"  # from --color-text in btn-outline
  button_secondary_border: "#ffffff1a" # from --color-border-soft rgba(255,255,255,0.10)
  surface_bg: "#0d0d0e"             # from --color-surface
  card_bg: "#0d0d0e"                # from --color-surface used in all card variants
  text: "#ffffff"                   # from --color-text
  text_muted: "#9e9e9e"             # from --color-text-muted
  border: "#ffffff0d"               # from --color-border rgba(255,255,255,0.05)
  accent: "#9333ea"                 # from --color-purple
  button_radius: "9999px"           # from --radius-full used in all .btn
  card_radius: "20px"               # from --radius-xl; nav and outer wrapper cards
  input_radius: "9999px"            # from --radius-full used in .form-input

components:
  button-primary:
    bg: "#ffffff"
    text: "#000000"
    border: "#ffffff"        # no border; bg = border for token completeness
    radius: "9999px"         # from --radius-full
    padding: "14px 24px"     # from .btn-md: 14px var(--space-6)
    font: "15px Inter weight 600"   # from --font-size-base + --font-weight-semibold
    hover_bg: "#f3f4f6"      # hardcoded in buttons.css .btn-primary:hover
  button-secondary:
    bg: "transparent"
    text: "#ffffff"           # from --color-text
    border: "#ffffff1a"       # from --color-border-soft
    radius: "9999px"
    padding: "14px 24px"
  card:
    bg: "#0d0d0e"             # from --color-surface
    border: "#ffffff0d"       # from --color-border
    radius: "16px"            # from --radius-lg used in card-feature, card-builder, card-testimonial
    shadow: "0 25px 50px -12px rgba(0,0,0,0.4)"  # from --shadow-card
    padding: "24px"           # from --space-6
  input-text:
    bg: "#ffffff0d"           # rgba(255,255,255,0.05) hardcoded in forms.css
    text: "#ffffff"           # from --color-text
    border: "#ffffff1a"       # from --color-border-soft
    radius: "9999px"          # from --radius-full
    padding: "14px 20px"      # from forms.css: 14px var(--space-5)
    focus_border: "#9333ea"   # from --color-purple in forms.css :focus
  badge-default:
    bg: "#ffffff08"           # rgba(255,255,255,0.03) from badges.css
    text: "#9e9e9e"           # from --color-text-muted
    border: "#ffffff1a"       # from --color-border-soft
    radius: "9999px"          # from --radius-full
    padding: "6px 14px"       # hardcoded in badges.css
    font: "13px weight 500"   # from --font-size-xs + --font-weight-medium
  nav-header:
    bg: "#00000080"           # rgba(0,0,0,0.5) from nav.css
    text: "#9e9e9e"           # from --color-text-muted; nav links default state
    backdrop_filter: "blur(20px)"  # from --blur-glass
    height: "64px"            # inferred from padding 8px + logo 40px + borders
---

## 1. Visual Theme & Atmosphere

Design Builder existe no espaço entre produto SaaS premium e manifesto criativo. O fundo é quase-preto — `#05000a`, um preto com inflexão violeta que estabelece profundidade antes de qualquer elemento ser renderizado. Não é o preto genérico de um dark mode; é uma escolha de identidade que diz que cada pixel de luz é intencional.

O roxo `#9333ea` funciona como a única âncora cromática da marca. Ele não compete com nada — existe em campo limpo, seja como fundo sólido de um link ativo na nav, como glow difuso de 300px filtrado a `blur(80px)`, ou como midpoint de um gradiente que começa em `#ac4bff` e termina em `#6e11b0`. Essa disciplina de usar uma única cor de acento em múltiplas intensidades é o que dá coerência ao sistema sem torná-lo monótono.

A tipografia escolhe Inter em peso 300 para os títulos hero — uma decisão anti-intuitiva para uma marca que precisa vender. O peso leve cria elegância e confiança; o impacto vem do tamanho (48px+) e do volume do layout, não da grossura da letra. Quando a marca quer força, usa `font-weight: 700` nos números de stat combinados com gradient text — mas mantém o 300 para tudo que precisa soar premium.

A superfície é tratada em camadas: fundo global em `#05000a`, cards em `#0d0d0e`, nav em `rgba(0,0,0,0.5)` com `backdrop-filter: blur(20px)`. Cada nível tem exatamente 1-2 passos de elevação, criando hierarquia sem noise. O efeito de maior impacto visual do sistema — as colunas de imagens em parallax — é técnico mas serve à narrativa: mostra que o produto gera volume de trabalho visual de qualidade.

**Key Characteristics:**
- Dark background quase-preto com inflexão violeta (`#05000a`), não preto absoluto
- Roxo `#9333ea` como único acento cromático — sem azuis, verdes ou laranjas
- Gradient text `#ac4bff → #9810fa → #6e11b0` aplicado exclusivamente em números de impacto
- Inter weight 300 em hero headings — leveza como sinal de premium
- Glassmorphism na nav: `rgba(0,0,0,0.5)` + `blur(20px)` + `border-radius: 20px`
- Todos os botões e inputs são pills (`border-radius: 9999px`) — zero ângulos retos nos interativos
- Cards com sombra `0 25px 50px -12px rgba(0,0,0,0.4)` e hover `translateY(-6px)` + glow roxo
- Parallax de imagens em duas velocidades (0.6× e 0.3×) como signature do hero
- Scrollbar completamente oculta em todos os navegadores
- Seleção de texto em roxo `#a855f7` — até o highlight é branded

## 2. Color Palette & Roles

### Primary
- **Purple** (`#9333ea`): `--color-purple`. Cor de identidade. Nav link ativo (fundo sólido), ícones de card-feature, hover de card-image border, focus state de inputs, btn-purple background. É a única cor quente no sistema.

### Accent Colors
- **Purple Light** (`#ac4bff`): `--color-purple-light`. Início do gradient text. Cor de hover em btn-outline. Badge purple border `rgba(172,75,255,0.30)`.
- **Purple Vivid** (`#9810fa`): `--color-purple-vivid`. Midpoint do gradient text. Hover do btn-purple. Fundo do badge-purple `rgba(152,16,250,0.15)`.
- **Purple Dark** (`#6e11b0`): `--color-purple-dark`. Fim do gradient text. Shadow glow background em seções.
- **Purple 400** (`#c07eff`): `--color-purple-400`. Gradient alt `#ffffff → #c07eff` usado em headings de impacto secundário.
- **Fuchsia** (`#c600db`): `--color-fuchsia`. Acento extremo disponível para highlights especiais — usado com moderação.

### Interactive
- **Purple** (`#9333ea`): estado ativo em nav links, focus border em inputs
- **Purple Vivid** (`#9810fa`): hover de btn-purple
- **Purple Light** (`#ac4bff`): hover de nav links e btn-outline
- **White hover** (`#f3f4f6`): hover de btn-primary e nav-cta — redução sutil de luminosidade
- **White translúcido** (`rgba(255,255,255,0.08)`): hover background de nav-link inativo

### Neutral Scale
- **White** (`#ffffff`): `--color-text`. Texto primário, botão CTA (fundo branco, texto preto — inversão intencional)
- **Gray muted** (`#9e9e9e`): `--color-text-muted`. Descrições, placeholders, nav links inativos, card subtítulos
- **Gray muted alt** (`#71717a`): `--color-text-muted-alt`. Variante mais escura para contextos de contraste menor

### Surface & Borders
- **Background** (`#05000a`): `--color-bg`. Superfície raiz — o chão de tudo
- **Surface** (`#0d0d0e`): `--color-surface`. Cards, feature grid, testimonials
- **Surface Alt** (`#111111`): `--color-surface-alt`. Fundo de código, alternâncias de zebra
- **Zinc 900** (`#18181b`): `--color-zinc-900`. Camada intermediária ocasional
- **Indigo Dark** (`#312c85`): `--color-indigo-dark`. Glow de fundo em seções de destaque
- **Border** (`rgba(255,255,255,0.05)`): `--color-border`. Bordas default de cards
- **Border Soft** (`rgba(255,255,255,0.10)`): `--color-border-soft`. Hover states, nav-links container, badge borders
- **Border Medium** (`rgba(255,255,255,0.20)`): `--color-border-medium`. Bordas de maior destaque em elementos focados

### Color Philosophy
A paleta de Design Builder é uma paleta de subtração: começa com preto absoluto, adiciona apenas um acento cromático (roxo) e usa somente branco como contraste forte. Qualquer outra cor que apareça é uma variação tonal desse roxo ou um translúcido do branco. Essa restrição não é limitação — é a razão pela qual o sistema parece premium: não há decisão cromática acidental, porque não há cor suficiente para fazer um acidente.

## 3. Typography Rules

### Font Family
Inter (Google Fonts / arquivo local `s.p.0q-301v4kxxnr.woff2`). Carregada nos pesos 300, 400, 500, 600, 700. O `@font-face` local usa `unicode-range` restrito ao Latin para evitar latência em glyphs não utilizados. Sem fonte secundária de display — Inter cobre todo o espectro tipográfico do sistema.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 48px (clamp 2.5rem–3rem md) | 300 | 1.25 | -0.025em | `.text-hero`; `text-wrap: balance` |
| Section Title | Inter | 48px (clamp 2rem–3rem md) | 700 | 1.25 | -0.025em | `.text-section-title`; mesma escala, peso oposto |
| Body Large | Inter | 18px | 400 | 1.625 | 0 | `.text-body`; descrições de seção |
| UI Label / Nav | Inter | 15px | 500 | 1.5 | 0 | `.nav-link`, `.btn-md`; texto interativo |
| Badge / Caption | Inter | 13px | 500–600 | 1.4 | +0.05em | `.badge`, `.text-label`; uppercase em labels |
| Card Title | Inter | 24px | 600 | 1.25 | 0 | `.card-feature-title` |
| Stat Number | Inter | 48px | 700 | 1 | 0 | `.card-stat-number`; gradient text aplicado |
| Code / Mono | Fira Code | inherit | inherit | inherit | 0 | `--font-mono`; blocos de código na documentação |

### Principles
1. **Peso como voz**: 300 = voz premium e editorial; 700 = impacto e prova social. Evite 400 em headings — parece indecisão.
2. **Gradient text é reservado**: `.text-gradient` só aparece em números de impacto (stats) e no logo. Aplicar em parágrafos destrói a hierarquia.
3. **Tracking negativo em grandes escalas**: Todo texto acima de 32px usa `letter-spacing: -0.025em` — Inter em tamanhos grandes abre demais sem ajuste.
4. **`text-wrap: balance`** em todos os headings multi-linha — elimina widows e cria blocos de texto mais equilibrados visualmente.
5. **Nenhuma fonte serifada, nenhuma fonte de display alternativa**: Inter é a única face tipográfica do sistema. A personalidade vem do peso e do tamanho, não de mixing de fontes.

## 4. Components

### Buttons

**Primary** (`btn-primary` + `btn-md` ou `btn-lg`)
- Background: `#ffffff`
- Text: `#000000`
- Padding: `14px 24px` (md) / `16px 32px` (lg)
- Radius: `9999px`
- Font: Inter 15px (md) / 18px (lg), weight 600
- Hover: `#f3f4f6` background + `scale(1.02)` + white glow `0 0 40px -10px rgba(255,255,255,0.4)`
- Uso: CTA principal em hero, nav CTA, formulários de waitlist

**Shimmer** (`btn-shimmer`)
- Background: `#ffffff`; Text: `#000000`; font-weight: 700; uppercase
- Efeito: pseudo-elemento `::after` com `linear-gradient(105deg, transparent, rgba(255,255,255,0.15), transparent)` animado em loop de 2.4s, `skewX(-25deg)`
- Hover: `scale(1.02)` + white glow
- Uso: CTA de conversão principal onde o shimmer sinaliza urgência/destaque

**Purple** (`btn-purple`)
- Background: `#9333ea`; Text: `#ffffff`
- Hover: `#9810fa` + `scale(1.02)`
- Uso: ações secundárias de alto contraste, CTA alternativo

**Outline** (`btn-outline`)
- Background: `transparent`; Text: `#ffffff`; Border: `1px solid rgba(255,255,255,0.10)`
- Hover: border `#ac4bff`, text `#ac4bff`
- Uso: ações terciárias, "saiba mais", links de navegação

### Cards

**Image** (`card-image`)
- Aspect ratio: 3/4 (portrait)
- Border-radius: `12px` (`--radius-md`)
- Border: `1px solid rgba(255,255,255,0.05)`
- Shadow: `0 25px 50px -12px rgba(0,0,0,0.4)`
- Hover: `translateY(-6px)` + border `#9333ea`
- Uso: colunas de imagens no hero em parallax

**Feature** (`card-feature`)
- Background: `#0d0d0e`; Border: `1px solid rgba(255,255,255,0.05)`; Radius: `16px`; Padding: `24px`
- Hover: border `rgba(255,255,255,0.10)` + glow `0 0 40px rgba(147,51,234,0.3)`
- Contém: ícone `24px` em `#9333ea` + título `24px/600` + descrição `14px/muted`
- Uso: grid de funcionalidades

**Builder / Person** (`card-builder`)
- Background: `#0d0d0e`; Radius: `16px`; Padding: `24px`; alinhamento central
- Avatar: `80px × 80px`, `border-radius: 9999px`, border `rgba(255,255,255,0.10)`
- Hover: border soft + glow roxo
- Uso: seção de comunidade/builders

**Stat** (`card-stat`)
- Sem background — número flutuante sobre a página
- Número: `48px`, `font-weight: 700`, gradient text `#ac4bff → #9810fa → #6e11b0`
- Label: `14px`, `#9e9e9e`, weight 400
- Uso: seção de prova social / resultados

**Testimonial** (`card-testimonial`)
- Background: `#0d0d0e`; Radius: `16px`; Padding: `24px`; gap `16px` entre quote e autor
- Quote: `14px`, `#ffffff`, `line-height: 1.7`
- Avatar: `40px`, pill, border soft
- Hover: border soft
- Uso: seção de depoimentos

### Badges

**Default** (`badge`)
- Background: `rgba(255,255,255,0.03)`; Border: `rgba(255,255,255,0.10)`; Radius: `9999px`
- Padding: `6px 14px`; Font: `13px`, weight 500; Text: `#9e9e9e`
- Uso: tags de funcionalidade, labels informativos

**Purple** (`badge-purple`)
- Background: `rgba(152,16,250,0.15)`; Border: `rgba(172,75,255,0.30)`; Text: `#ac4bff`
- Uso: status "em breve", destaques de feature premium

### Nav

**Nav** (`.nav`)
- Position: `fixed`; Top: `24px`; centrada horizontalmente
- Width: `95%`; Max-width: `1400px`
- Background: `rgba(0,0,0,0.5)`; `backdrop-filter: blur(20px)`
- Radius: `20px`; Shadow: `0 25px 50px -12px rgba(0,0,0,0.4)`
- Entry animation: `navSlideDown` 0.6s cubic-bezier

**Nav Link** (`.nav-link`)
- Padding: `8px 20px`; Radius: `9999px`; Font: `15px`, weight 500; Color: `#9e9e9e`
- Hover: text `#ffffff` + background `rgba(255,255,255,0.08)`
- Active: background `#9333ea` + text `#ffffff`

### Form Input

**Input** (`.form-input`)
- Background: `rgba(255,255,255,0.05)`; Border: `rgba(255,255,255,0.10)`
- Radius: `9999px`; Padding: `14px 20px`; Font: `15px`, weight 400
- Focus: border `#9333ea` + background `rgba(255,255,255,0.07)`
- Placeholder: `#9e9e9e`
- Uso: formulário de waitlist inline com botão CTA

## 5. Layout Principles

### Spacing System
Unidade base: `4px`. Escala multiplicativa:
- `4px` (xs / --space-1): gaps internos de badge, ícone em linha
- `8px` (sm / --space-2): padding nav, gaps de nav-link container
- `12px` (--space-3): avatar gap, col-fast/col-slow gap mobile
- `16px` (md / --space-4): padding interno de cards pequenos
- `20px` (--space-5): padding horizontal de inputs e nav links
- `24px` (lg / --space-6): padding padrão de todos os cards
- `32px` (--space-8): padding de botão hero (lg)
- `48px` (xl / --space-12): espaçamento vertical entre seções
- `64px` (--space-16): padding de seção em desktop
- `80px` (--space-20): padding de seção hero
- `96px` (--space-24): espaçamento máximo em seções de maior respiro

### Grid & Container
- Max-width: `1400px` para a nav
- Hero: layout de duas colunas assimétricas (conteúdo + parallax de imagens)
- Feature grid: `grid-cols-2` mobile → `grid-cols-3` ou `grid-cols-4` desktop
- Sections: padding horizontal responsivo usando Tailwind (`px-4` → `px-6` → `px-8`)
- Nenhum container rígido de largura fixa para seções — usam `max-w-*` de Tailwind

### Whitespace Philosophy
Design Builder usa espaço como luxo. Seções têm respiro generoso — nunca parecem comprimidas. O parallax hero funciona porque as imagens têm espaço para se mover. Cards têm `padding: 24px` mesmo sendo pequenos. Essa generosidade com espaço é parte da identidade premium: produtos caros não economizam em espaço.

### Border Radius Scale
- `8px` (`--radius-sm`): elementos de UI internos, ícone containers
- `12px` (`--radius-md`): card-image, elementos de media
- `16px` (`--radius-lg`): todos os cards de conteúdo (feature, builder, testimonial)
- `20px` (`--radius-xl`): nav bar, wrappers externos de hero
- `24px` (`--radius-2xl`): elementos de destaque máximo
- `9999px` (`--radius-full`): TODOS os elementos interativos (botões, inputs, badges, nav pills) — zero exceção

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | Sem sombra, background `#05000a` | Corpo da página, textos soltos |
| Ambient | `filter: blur(80px)` em orbs `rgba(147,51,234,0.25)` | Glow de seção, profundidade de fundo |
| Standard | `border: 1px solid rgba(255,255,255,0.05)` | Cards default, sem sombra adicional |
| Elevated | `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4)` | Nav, card-image, elementos que flutuam |
| Deep | `backdrop-filter: blur(20px)` + `rgba(0,0,0,0.5)` | Nav glassmorphism — camada de maior profundidade visual |
| Focus Ring | `border-color: #9333ea` | Input em focus; único uso de cor sem sombra para foco |
| Glow Hover | `box-shadow: 0 0 40px rgba(147,51,234,0.3)` | Card-feature e card-builder em hover |
| White Glow | `box-shadow: 0 0 40px -10px rgba(255,255,255,0.4)` | Btn-primary em hover — sinaliza clicabilidade |

### Shadow Philosophy
Sombras em Design Builder são sempre escuras e profundas — nunca coloridas, exceto o glow roxo intencional. A lógica é: superfícies escuras não precisam de sombra cinza (invisível em dark mode); precisam ou de profundidade cromática (glow roxo) ou de sombra preta extrema (`rgba(0,0,0,0.4)`) que cria contraste de elevação real. O glow roxo nos hovers não é decoração — é feedback de interatividade.

## 7. Do's and Don'ts

### Do's

1. **Use Inter weight 300 em hero headings** — é a voz da marca. Peso 400 ou acima destrói o caráter editorial que diferencia DB de um SaaS genérico.
2. **Use `border-radius: 9999px` em TODOS os elementos interativos** — botões, inputs, badges, nav pills. É a regra mais rígida do sistema. Qualquer ângulo reto em interativos é uma violação.
3. **Use gradient text (`#ac4bff → #9810fa → #6e11b0`) exclusivamente em números de impacto** — stat numbers, métricas de resultado. Em headlines ou body text parece spam visual.
4. **Use o roxo `#9333ea` como único acento cromático** — quando precisar de "destaque", o roxo já faz esse trabalho. Não introduza azuis, verdes ou laranjas sem justificativa estrutural.
5. **Aplique `backdrop-filter: blur(20px)` na nav e em overlays modais** — o glassmorphism é parte da assinatura visual. Use `rgba(0,0,0,0.5)` como background, não branco ou superfície sólida.
6. **Mantenha hierarquia de superfície em 3 níveis**: `#05000a` (fundo) → `#0d0d0e` (cards) → `rgba(0,0,0,0.5)` (glass). Não adicione um quarto nível sem necessidade.

### Don'ts

1. **Não use peso 600 ou 700 em hero headings** — a força do hero de DB vem do contraste entre texto leve e layout generoso, não de tipografia pesada. Peso alto em hero parece uma landing page de curso online.
2. **Não aplique gradient text em parágrafos ou descrições** — gradient text é exclusivo de números e elementos únicos de destaque. Em textos longos torna-se ilegível e destrói a hierarquia.
3. **Não use cores fora da paleta roxa** — sem teals, sem âmbars, sem verdes de sucesso vistosos. Se precisar de estado de sucesso, use verde com baixa saturação ou branco, nunca verde vibrante.
4. **Não use `border-radius` abaixo de `9999px` em botões e inputs** — nem `border-radius: 8px` em CTA. O sistema é fundado em pills. Um botão retangular quebra o contrato visual inteiro.
5. **Não exiba scrollbar** — o sistema oculta scrollbars em todos os navegadores intencionalmente (`scrollbar-width: none`). Mostrar scrollbar (mesmo por reset de CSS) destrói a experiência de scroll imersivo.
6. **Não misture fontes** — Inter é a única face tipográfica. Não adicione uma fonte de display para headings especiais. Se precisar de mais expressividade, use tamanho e peso de Inter.
7. **Não use sombras coloridas fora do roxo** — sombras azuis, verdes ou multicoloridas são fora de sistema. Apenas `rgba(0,0,0,*)` para elevação e `rgba(147,51,234,*)` para glow de acento.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 540px | Form-group empilha verticalmente; botão de form ocupa largura total |
| Mobile L | < 768px | Nav links ocultos; nav-cta menor (`12px 18px`, `14px`); logo menor (`26px`); hero stack vertical |
| Tablet | 768px+ | Nav links visíveis; hero two-column layout ativado; text-hero escala para `clamp(2.5rem, 5vw, 3rem)`; text-section-title escala para `clamp(2rem, 4vw, 3rem)`; badge-check sobe para `13.5px` |
| Desktop | 1024px+ | Nav links forçados visíveis (`display: flex !important`); parallax colunas lado a lado em largura total |
| Wide | 1400px | Nav atinge max-width e para de crescer |

### Touch Targets
- Botões (`btn-md`): `14px 24px` padding → altura mínima de ~44px com `font-size: 15px` e `line-height: 1` — no limite do mínimo recomendado de 44px
- Nav CTA mobile: `12px 18px` padding → ~38px — abaixo do ideal; compensa pelo espaçamento generoso ao redor
- Nav links (mobile ocultos): não aplicável
- Badges: não são interativos — padding de `6px 14px` é apenas estético
- Form input: `14px 20px` padding → altura de ~44px — adequado para touch

### Collapsing Strategy
- **Nav**: Links desaparecem em mobile (`display: none`); apenas logo + CTA restam. A nav mantém glassmorphism e pill shape mesmo em mobile.
- **Hero**: Em mobile, as colunas de parallax colapsam para uma única coluna ou são substituídas por imagem estática — o scroll-jacking não funciona bem em touch.
- **Feature grid**: `grid-cols-1` mobile → `grid-cols-2` tablet → `grid-cols-3`/`4` desktop.
- **Form group**: `flex-direction: column` em mobile (< 540px), botão ocupa 100% de largura.
- **Tipografia**: escalas via `clamp()` — não há quebra abrupta, é suave e proporcional ao viewport.

## 9. Agent Prompt Guide

### Quick Color Reference

| Role | Hex | Uso |
|------|-----|-----|
| Background | `#05000a` | Fundo global da página |
| Surface / Card | `#0d0d0e` | Fundo de cards, feature grid |
| Primary Accent | `#9333ea` | Roxo de identidade, ativo, focus |
| Accent Light | `#ac4bff` | Início do gradient, hover outline |
| Accent Vivid | `#9810fa` | Hover btn-purple, gradient mid |
| Accent Dark | `#6e11b0` | Fim do gradient, glow background |
| Text Primary | `#ffffff` | Texto principal |
| Text Muted | `#9e9e9e` | Descrições, placeholders, labels |
| Border | `rgba(255,255,255,0.05)` | Bordas padrão de card |
| Border Soft | `rgba(255,255,255,0.10)` | Hover borders, nav container |
| CTA bg | `#ffffff` | Botão primário — fundo branco |
| CTA text | `#000000` | Botão primário — texto preto |

### Example Component Prompts

**1. Botão CTA principal:**
> Crie um botão pill (`border-radius: 9999px`) com background `#ffffff`, text `#000000`, padding `14px 24px`, font Inter 15px weight 600. No hover: background `#f3f4f6`, `transform: scale(1.02)`, `box-shadow: 0 0 40px -10px rgba(255,255,255,0.4)`. Adicione um pseudo-elemento `::after` com shimmer animado: `linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)`, `skewX(-25deg)`, loop de 2.4s.

**2. Card de funcionalidade:**
> Card com `background: #0d0d0e`, `border: 1px solid rgba(255,255,255,0.05)`, `border-radius: 16px`, `padding: 24px`. Ícone Lucide 24px em `#9333ea` com `margin-bottom: 16px`. Título `24px`, Inter weight 600, `#ffffff`. Descrição `14px`, Inter weight 400, `#9e9e9e`, `line-height: 1.625`. Hover: `border-color: rgba(255,255,255,0.10)`, `box-shadow: 0 0 40px rgba(147,51,234,0.3)`, `transition: all 0.3s ease`.

**3. Navbar glassmorphism:**
> Nav `position: fixed`, `top: 24px`, `left: 50%`, `transform: translateX(-50%)`, `width: 95%`, `max-width: 1400px`, `border-radius: 20px`, `background: rgba(0,0,0,0.5)`, `backdrop-filter: blur(20px)`, `box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4)`. Links em pill container: `background: rgba(28,28,28,0.5)`, `border: 1px solid rgba(255,255,255,0.05)`, `border-radius: 9999px`, `padding: 6px`. Link ativo: `background: #9333ea`, `color: #ffffff`.

**4. Badge roxo:**
> `display: inline-flex`, `border-radius: 9999px`, `padding: 6px 14px`, `background: rgba(152,16,250,0.15)`, `border: 1px solid rgba(172,75,255,0.30)`, `color: #ac4bff`, font Inter 13px weight 500. Sem hover — é estático.

**5. Input de email dark:**
> `border-radius: 9999px`, `padding: 14px 20px`, `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.10)`, `color: #ffffff`, font Inter 15px weight 400. Placeholder `#9e9e9e`. Focus: `border-color: #9333ea`, `background: rgba(255,255,255,0.07)`.

**6. Número de stat com gradient:**
> `font-size: 48px`, Inter weight 700, `line-height: 1`. Aplicar: `background: linear-gradient(135deg, #ac4bff 0%, #9810fa 50%, #6e11b0 100%)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`, `background-clip: text`. Label abaixo: `font-size: 14px`, `color: #9e9e9e`, weight 400.

**7. Seção com glow orb de fundo:**
> Container com `position: relative`, `isolation: isolate`. Pseudo-elemento `::before`: `position: absolute`, `width: 300px`, `height: 300px`, `background: rgba(147,51,234,0.25)`, `border-radius: 9999px`, `filter: blur(80px)`, `top: 50%`, `left: 50%`, `transform: translate(-50%,-50%)`, `z-index: -1`.

### Iteration Guide

1. **Adicionar uma nova seção**: Use `background: #05000a` como fundo, `padding: 80px 0` vertical, e coloque conteúdo em um container com `max-width: 1200px` e padding horizontal de `24px`. Títulos em Inter 300 (editorial) ou 700 (impacto) — escolha com intenção.

2. **Criar uma nova variante de card**: Herde de `card-feature` — `background: #0d0d0e`, `border: 1px solid rgba(255,255,255,0.05)`, `border-radius: 16px`, `padding: 24px`. Adicione hover com glow roxo `box-shadow: 0 0 40px rgba(147,51,234,0.3)` e `border-color: rgba(255,255,255,0.10)`.

3. **Adicionar um novo estado de botão**: Mantenha `border-radius: 9999px` obrigatório. Para variantes escuras, use `#9333ea` ou transparente. Para variantes claras, use `#ffffff`. Nunca cinza médio como fundo de botão.

4. **Implementar um modal/drawer**: Use glassmorphism — `background: rgba(5,0,10,0.85)`, `backdrop-filter: blur(20px)`. Border em `rgba(255,255,255,0.10)`. Border-radius `20px` ou `16px`. Nunca `border-radius: 0`.

5. **Adicionar uma animação de entrada**: Padrão do sistema é `opacity: 0` + `translateY(24px)` → `opacity: 1` + `translateY(0)` em `0.7s ease`. Use `IntersectionObserver` para trigger. Stagger de `80ms` entre elementos em grupo.

6. **Escalar para nova página**: O fundo sempre começa em `#05000a`. A nav sempre existe com glassmorphism. O roxo `#9333ea` é o único acento disponível. Qualquer nova página construída com esses três invariantes automaticamente se encaixa na identidade DB.

7. **Testar dark mode**: O sistema JÁ é dark mode. Se precisar de um modo claro alternativo, inverta: fundo `#ffffff`, texto `#05000a`, mantenha o roxo `#9333ea` como acento — ele funciona em ambos os fundos.

8. **Adicionar ícones**: Use Lucide Icons. Tamanho padrão `24px`, cor `#9333ea` em destaque ou `#9e9e9e` em contextos neutros. Nunca ícones coloridos além do roxo de acento.
