## INPUT
$SOURCE

## OUTPUT
Cria uma pasta `design-system/` relativa ao INPUT.
Não modifica o INPUT nem nenhum arquivo existente.

---

Você é um Design System Builder.

Seu trabalho é analisar profundamente o INPUT (snapshot HTML de uma página real),
extrair sua identidade visual e comportamentos interativos, e construir um
design system verdadeiro — não uma réplica da página, mas um sistema de
componentes reutilizáveis que permite construir novas páginas com a mesma
identidade visual.

Execute os passos abaixo em ordem.
Conclua cada passo completamente antes de avançar para o próximo.

---

## CONTEXTO TÉCNICO IMPORTANTE

O INPUT é um snapshot HTML de uma aplicação Next.js.
Isso significa:

- O CSS já está em arquivo externo (não há `<style>` inline com lógica de componentes)
- O JS original são bundles minificados e ofuscados — **não tente extraí-los**
- Os efeitos visuais (parallax, scroll-jacking, reveals) estão **embutidos nos bundles**
  e não podem ser lidos. Devem ser **reconstruídos** a partir do comportamento observável
  no HTML/CSS estático
- O conteúdo das seções está presente no HTML porque é um snapshot capturado
  após a hidratação do React — use esse conteúdo como fonte de verdade

---

## PASSO 1 — ANALISE

Leia o HTML inteiro. Memorize:

**Identidade visual:**
- Todas as cores, gradientes, sombras e superfícies
- Família tipográfica, tamanhos, pesos, espaçamentos entre letras e linhas
- Valores de border-radius, padding, margin e gap recorrentes
- Efeitos visuais: glassmorphism, glow, shimmer, gradientes de texto

**Componentes:**
- Cada componente de UI presente: nav, botões, cards, badges, inputs, seções CTA
- Estados: default, hover, active, disabled
- Variantes de cada componente (ex: botão primário, botão roxo, botão outline)

**Comportamentos JS (observar no HTML/CSS estático):**
- Classes que indicam animação: `col-fast`, `col-slow`, `reveal`, `lenis`, etc.
- Atributos `data-*` que sugerem comportamento interativo
- Padrões de estrutura que indicam parallax, sticky, scroll-driven

**Assets:**
- Fontes utilizadas e seus pesos
- Ícones (Lucide ou custom)
- Imagens referenciadas e seus padrões de uso

Não escreva nenhum arquivo antes de concluir este passo.

---

## PASSO 2 — TOKENS CSS

Crie `design-system/tokens.css`.

Extraia TODOS os valores recorrentes como variáveis CSS:

```css
:root {
  /* Colors */
  --color-bg:            #05000a;
  --color-surface:       #0d0d0e;
  --color-purple:        #9333ea;
  --color-purple-light:  #ac4bff;
  --color-purple-dark:   #6e11b0;
  --color-purple-vivid:  #9810fa;
  --color-fuchsia:       #c600db;
  --color-text:          #ffffff;
  --color-text-muted:    #9e9e9e;
  --color-border:        rgba(255, 255, 255, 0.05);
  --color-border-soft:   rgba(255, 255, 255, 0.10);

  /* Typography */
  --font-family:         'Inter', system-ui, sans-serif;
  --font-size-xs:        13px;
  --font-size-sm:        14px;
  --font-size-base:      15px;
  --font-size-md:        18px;
  --font-size-lg:        24px;
  --font-size-xl:        32px;
  --font-size-2xl:       48px;
  --font-weight-light:   300;
  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-semibold:600;
  --font-weight-bold:    700;
  --line-height-tight:   1.2;
  --line-height-base:    1.625;

  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border radius */
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   20px;
  --radius-full: 9999px;

  /* Effects */
  --blur-glass:     blur(20px);
  --shadow-card:    0 25px 50px -12px rgba(0, 0, 0, 0.4);
  --shadow-glow:    0 0 40px rgba(147, 51, 234, 0.3);
  --gradient-text:  linear-gradient(135deg, #ac4bff 0%, #9810fa 50%, #6e11b0 100%);
  --gradient-text-2:linear-gradient(135deg, #fff 0%, #c07eff 100%);
  --transition-base:all 0.3s ease;
  --transition-smooth: transform 0.6s cubic-bezier(0.25, 1, 0.30, 1),
                       opacity  0.6s cubic-bezier(0.25, 1, 0.30, 1);
}
```

Ajuste os valores conforme o que encontrar no INPUT.
Adicione qualquer token relevante que esteja faltando.

---

## PASSO 3 — CSS DOS COMPONENTES

Crie um arquivo CSS por componente, em `design-system/css/`.
Cada arquivo usa apenas variáveis de `tokens.css` — sem valores hardcoded.

Arquivos a criar:

**`css/base.css`**
- Reset mínimo (box-sizing, margin 0, scroll-behavior)
- `@font-face` local para o arquivo woff2
- Estilos globais: seleção de texto, scrollbar oculta, antialiasing

**`css/typography.css`**
- Classes de texto reutilizáveis: `.text-hero`, `.text-section-title`,
  `.text-body`, `.text-muted`, `.text-gradient`, `.text-gradient-2`
- Baseadas nos tokens de font-size e font-weight

**`css/nav.css`**
- `.nav` — container fixo, glassmorphism, z-index
- `.nav-logo` — logo responsivo
- `.nav-links` — container dos links desktop
- `.nav-link` — link padrão
- `.nav-link.active` — link ativo (fundo roxo)
- `.nav-cta` — botão CTA da nav
- Responsivo: breakpoints para mobile

**`css/buttons.css`**
- `.btn` — base compartilhada
- `.btn-primary` — branco, texto preto (CTA principal)
- `.btn-purple` — roxo sólido
- `.btn-outline` — borda sutil, fundo transparente
- Hover states para cada variante
- `.btn-shimmer` — efeito shimmer animado (keyframe CSS puro)

**`css/cards.css`**
- `.card-image` — card de imagem com aspect-ratio 3/4, border, shadow
- `.card-feature` — card de funcionalidade com ícone, título, descrição
- `.card-builder` — card de pessoa/builder com foto, nome, cargo
- `.card-stat` — número grande + label (para seção de resultados)
- `.card-testimonial` — depoimento com avatar, nome, texto
- Hover states: translateY(-6px), border glow roxo

**`css/badges.css`**
- `.badge` — pill com border e texto pequeno
- `.badge-purple` — variante com fundo roxo sutil

**`css/forms.css`**
- `.form-input` — input de email dark, border sutil
- `.form-group` — wrapper input + botão
- Focus states

**`css/effects.css`**
- `.glass` — glassmorphism reutilizável
- `.glow-purple` — blob de glow roxo (pseudo-elemento)
- `.gradient-mask-bottom` — fade para preto na base
- `.reveal` — estado inicial para animação de entrada (opacity 0, translateY 24px)
- `.reveal.visible` — estado final (opacity 1, translateY 0)
- Keyframes: `@keyframes fadeInUp`, `@keyframes shimmer`, `@keyframes pulseGlow`

---

## PASSO 4 — JAVASCRIPT COMO UTILITÁRIOS

O JS original está em bundles minificados ilegíveis.
**Não tente extraí-lo.**

Reconstrua cada comportamento observável como um utilitário vanilla JS independente,
em `design-system/js/`. Cada arquivo deve:
- Funcionar sem dependências dos outros arquivos
- Ser configurável via parâmetros ou `data-*` attributes
- Ter comentários explicando o comportamento e como usar

**`js/smooth-scroll.js`**
Integra Lenis (biblioteca de smooth scroll usada no original).
Inicializa via CDN. Exporta função `initSmoothScroll()`.
```js
// Uso: initSmoothScroll()
// Depende de: <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js">
```

**`js/parallax.js`**
Anima colunas de imagens em velocidades diferentes durante o scroll.
Comportamento do original: `.col-fast` move a 0.6× da velocidade de scroll,
`.col-slow` move a 0.3× — criando profundidade de parallax.
Usa `requestAnimationFrame` para performance.
```js
// Uso: initParallax({ fastSelector: '.col-fast', fastSpeed: 0.6,
//                      slowSelector: '.col-slow', slowSpeed: 0.3 })
```

**`js/scroll-reveal.js`**
Usa IntersectionObserver para revelar elementos com `.reveal`
quando entram no viewport. Suporta stagger em grupos.
```js
// Uso: initScrollReveal({ selector: '.reveal', staggerDelay: 80 })
```

**`js/nav-behavior.js`**
Dois comportamentos:
1. Detecta seção ativa por scroll e aplica `.active` no link correspondente
2. Esconde/mostra a nav baseado na direção do scroll
```js
// Uso: initNavBehavior({ navSelector: '.nav', linkSelector: '.nav-link' })
```

---

## PASSO 5 — PÁGINA DE DOCUMENTAÇÃO

Crie `design-system/design-system.html`.

Esta é a página central do design system — não é uma réplica da landing page.
É uma página de documentação com preview ao vivo de cada componente.

**Estrutura da `<head>`:**
```html
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Design Builder — Design System</title>
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
  <!-- Lenis smooth scroll -->
  <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js"></script>
  <!-- Lucide icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Design System CSS -->
  <link rel="stylesheet" href="css/base.css"/>
  <link rel="stylesheet" href="css/typography.css"/>
  <link rel="stylesheet" href="css/effects.css"/>
  <link rel="stylesheet" href="css/nav.css"/>
  <link rel="stylesheet" href="css/buttons.css"/>
  <link rel="stylesheet" href="css/cards.css"/>
  <link rel="stylesheet" href="css/badges.css"/>
  <link rel="stylesheet" href="css/forms.css"/>
  <link rel="stylesheet" href="tokens.css"/>
</head>
```

**Seções da documentação (em ordem):**

### 1. Cores
Grid de swatches. Para cada cor do `tokens.css`:
- Swatch visual (quadrado colorido)
- Nome do token: `--color-purple`
- Valor hex: `#9333ea`
- Uso: "Accent principal, botões, links ativos"

### 2. Tipografia
Para cada escala tipográfica:
- Texto ao vivo renderizado no tamanho real
- Nome do token: `--font-size-2xl`
- Valor: `48px`
- Peso e uso sugerido

### 3. Espaçamento
Régua visual com os tokens de espaçamento.
Barra colorida proporcional ao valor + label do token + valor em px.

### 4. Componentes
Para cada componente, um bloco com:

```
┌─────────────────────────────────────────────┐
│  Preview ao vivo (fundo escuro)             │
│  [componente renderizado aqui]              │
├─────────────────────────────────────────────┤
│  <código HTML copiável>                     │
└─────────────────────────────────────────────┘
```

Componentes a documentar (nesta ordem):
- Navbar (preview em largura total)
- Badges
- Botões (todas as variantes lado a lado)
- Cards de imagem
- Cards de feature
- Cards de builder
- Cards de stat
- Cards de testimonial
- Form input + group

### 5. Efeitos CSS
Para cada efeito:
- Preview ao vivo
- Classe CSS a aplicar
- Descrição do comportamento

Efeitos: `.glass`, `.glow-purple`, `.btn-shimmer`, `.reveal → .visible`

### 6. Efeitos JS
Para cada utilitário JS:
- Demo interativa simples
- Nome do arquivo: `js/parallax.js`
- Assinatura da função: `initParallax({ fastSelector, fastSpeed, slowSelector, slowSpeed })`
- Exemplo de uso em código

**Estilo da página de documentação:**
- Fundo: `var(--color-bg)` — segue a identidade dark do produto
- Sidebar de navegação fixa à esquerda com links para cada seção
- Conteúdo à direita com scroll
- Seções separadas por `<hr>` sutil
- Labels em `--color-text-muted`, código em fundo `#111` com fonte monospace

---

## PASSO 7 — GERE O DESIGN.md (Google Design Spec)

Crie `design-system/DESIGN.md` seguindo o formato Google Design Spec:
YAML frontmatter com tokens extraídos + 9 seções de prosa numeradas.

Este arquivo serve como:
- Fonte de verdade legível por máquinas (tokens com provenance)
- Input reutilizável para prompts futuros ("use o DESIGN.md desta marca para criar X")
- Spec de referência para qualquer LLM gerar UI consistente com a identidade da marca

### Frontmatter YAML (entre delimitadores ---)

Extraia estes campos com valores EXATOS encontrados no CSS/HTML. Sem invenção.

```yaml
---
name: [nome da marca/produto]

colors:
  primary: "#hex"        # cor de identidade da marca (logo, hero, CTA principal)
  secondary: "#hex"      # cor de ação secundária
  tertiary: "#hex"       # accent terciário
  neutral: "#hex"        # cinza neutro principal
  surface: "#hex"        # fundo de cards/superfícies elevadas
  text: "#hex"           # texto primário
  text-muted: "#hex"     # texto secundário/muted
  border: "#hex"         # bordas e divisores
  error: "#hex"          # estado de erro (inferir se não existir)
  success: "#hex"        # estado de sucesso (inferir se não existir)

typography:
  display-hero:
    fontFamily: "nome exato da fonte"
    fontSize: "48px"
    fontWeight: 300
    lineHeight: "1.25"
    letterSpacing: "-1.2px"
  section-heading:
    fontFamily: "..."
    fontSize: "32px"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.8px"
  body:
    fontFamily: "..."
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "1.625"
  ui-label:
    fontFamily: "..."
    fontSize: "15px"
    fontWeight: 500
    lineHeight: "1.5"
  caption:
    fontFamily: "..."
    fontSize: "13px"
    fontWeight: 600
    lineHeight: "1.4"

rounded:
  none: "0px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"

preview_tokens:
  button_primary_bg: "#hex"
  button_primary_text: "#hex"
  button_primary_border: "#hex"
  button_secondary_bg: "transparent"
  button_secondary_text: "#hex"
  button_secondary_border: "#hex"
  surface_bg: "#hex"
  card_bg: "#hex"
  text: "#hex"
  text_muted: "#hex"
  border: "#hex"
  accent: "#hex"
  button_radius: "9999px"
  card_radius: "20px"
  input_radius: "9999px"

components:
  button-primary:
    bg: "#hex"
    text: "#hex"
    border: "#hex"
    radius: "9999px"
    padding: "14px 24px"
    font: "15px Inter weight 600"
    hover_bg: "#hex"
  button-secondary:
    bg: "transparent"
    text: "#hex"
    border: "#hex"
    radius: "9999px"
    padding: "14px 24px"
  card:
    bg: "#hex"
    border: "#hex"
    radius: "20px"
    shadow: "0 25px 50px -12px rgba(0,0,0,0.4)"
    padding: "24px"
  input-text:
    bg: "#hex"
    text: "#hex"
    border: "#hex"
    radius: "9999px"
    padding: "14px 20px"
    focus_border: "#hex"
  badge-default:
    bg: "transparent"
    text: "#hex"
    border: "#hex"
    radius: "9999px"
    padding: "6px 14px"
    font: "13px weight 600"
  nav-header:
    bg: "rgba(0,0,0,0.5)"
    text: "#hex"
    backdrop_filter: "blur(20px)"
    height: "64px"
---
```

Regras obrigatórias do frontmatter:
- Todos os valores de cor: hex de 6 dígitos APENAS (sem rgba, sem 8 dígitos)
- Dimensões SEMPRE com unidade (0px, não 0)
- Provenance: adicione comentário `# from --var-name` ou `# inferred from X` em cada token
- NUNCA use sintaxe de referência como `{colors.primary}` nos valores — apenas hex literal

### 9 Seções de Prosa (após o frontmatter)

#### ## 1. Visual Theme & Atmosphere
2-4 parágrafos descrevendo a estética da marca:
- Cor âncora da paleta + paleta de suporte
- Caráter tipográfico (peso como personalidade)
- Tratamento de superfície (flat / layered / glassy)
- A escolha visual mais distintiva

Termine com `**Key Characteristics:**` — lista de 6-10 itens de uma linha cada.

#### ## 2. Color Palette & Roles
Subseções por grupo de papel (NÃO por valor hex):
- `### Primary` — cor de identidade com papel semântico
- `### Accent Colors` — gradientes, glows
- `### Interactive` — hover, active, focus
- `### Neutral Scale` — hierarquia de texto
- `### Surface & Borders`
- `### Color Philosophy` — 1 parágrafo explicando o POR QUÊ da paleta

Formato de cada linha: `- **Nome** (\`#hex\`): \`--css-var\`. Descrição do papel.`

#### ## 3. Typography Rules
- `### Font Family` — fonte primária, features OpenType
- `### Hierarchy` — tabela markdown: `Role | Font | Size | Weight | Line Height | Letter Spacing | Notes`
- `### Principles` — 4-6 claims tipográficos específicos desta marca

#### ## 4. Components
Para cada atom no YAML `components:`, prosa em formato:
```
### Buttons
**Primary** (`button-primary`)
- Background: `#hex`
- Text: `#hex`
- Padding: X
- Radius: X
- Font: X
- Hover: X background
- Uso: CTAs principais
```

#### ## 5. Layout Principles
- `### Spacing System` — unidade base + escala
- `### Grid & Container` — largura máxima, padrão hero
- `### Whitespace Philosophy` — narrativa
- `### Border Radius Scale` — lista com papel semântico

#### ## 6. Depth & Elevation
Tabela: `Level | Treatment | Use`
Cobrir: Flat → Ambient → Standard → Elevated → Deep → Focus Ring
Termine com `### Shadow Philosophy`

#### ## 7. Do's and Don'ts
OBRIGATÓRIO ser específico desta marca — nunca genérico.

✅ BOM: "Não use peso 600 em headings — peso 300 é a voz da marca"
❌ RUIM: "Mantenha consistência"

Mínimo 5 Do's e 5 Don'ts específicos.

#### ## 8. Responsive Behavior
- `### Breakpoints` — tabela: `Name | Width | Key Changes`
- `### Touch Targets` — tamanhos mínimos
- `### Collapsing Strategy` — o que muda desktop → mobile

#### ## 9. Agent Prompt Guide
A seção de maior valor para consumidores de IA.

**Quick Color Reference** — uma linha por papel com hex canônico
**Example Component Prompts** — 5+ prompts prontos para colar em LLMs, com hex, tamanhos e fontes concretos
**Iteration Guide** — 6-8 dicas numeradas específicas desta marca

---

## PASSO 8 — STACK.md

Crie `design-system/STACK.md`.

Documente:
1. Tecnologias do original (Next.js, Turbopack, Lenis, Tailwind compilado, Vercel)
2. Tecnologias do design system gerado
3. Tokens: lista completa de variáveis com valores e uso
4. Componentes: lista de todos os componentes com classes e variantes
5. JS: lista de utilitários com assinatura e dependências

---

## QUALIDADE — VERIFIQUE ANTES DE SALVAR

- [ ] `tokens.css` usa apenas valores encontrados no INPUT, sem invenção
- [ ] Cada arquivo CSS usa apenas variáveis de `tokens.css`, sem valores hardcoded
- [ ] Cada arquivo JS é independente e funciona isoladamente
- [ ] A página de documentação tem preview ao vivo de todos os componentes
- [ ] Os efeitos JS têm demos interativas funcionando
- [ ] Nenhum componente depende de Next.js, React ou dos bundles originais
- [ ] A estrutura de pastas está correta e todos os links relativos resolvem

---

## ESTRUTURA FINAL ESPERADA

```
design-system/
├── design-system.html     ← página de documentação
├── tokens.css             ← variáveis CSS globais
├── DESIGN.md              ← Google Design Spec (frontmatter + 9 seções)
├── STACK.md               ← documentação de tecnologias e decisões
├── css/
│   ├── base.css
│   ├── typography.css
│   ├── nav.css
│   ├── buttons.css
│   ├── cards.css
│   ├── badges.css
│   ├── forms.css
│   └── effects.css
├── js/
│   ├── smooth-scroll.js
│   ├── parallax.js
│   ├── scroll-reveal.js
│   └── nav-behavior.js
└── assets/
    ├── fonts/
    │   └── [woff2 copiado do INPUT]
    └── icons/
        └── [logo svg copiado do INPUT]
```
