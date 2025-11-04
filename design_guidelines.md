# ProjetoCel NGO Landing Page - Design Guidelines

## Design Approach & Philosophy

**Selected Approach:** Reference-Based Design inspired by successful nonprofit organizations (charity: water, WWF, ASPCA) combined with minimalist e-commerce patterns for the animal gallery.

**Core Principles:**
- Emotional connection through impactful imagery
- Trust-building through transparency and clear information
- Minimalist design that doesn't compete with animal photos
- Strong, clear calls-to-action for donations and adoptions
- Mobile-first approach for the target demographic

---

## Typography System

**Primary Font:** Inter or Poppins (via Google Fonts CDN)
- **Hero Headings:** 3xl to 5xl, font-bold (700), leading-tight
- **Section Headings:** 2xl to 3xl, font-semibold (600)
- **Subsection Titles:** xl to 2xl, font-medium (500)
- **Body Text:** base to lg, font-normal (400), leading-relaxed
- **Small Print/Captions:** sm, font-normal (400)
- **CTAs/Buttons:** base to lg, font-semibold (600), uppercase tracking-wide

**Text Hierarchy:**
- Emotional headlines use larger sizes with generous line-height
- Body content maintains comfortable reading width (max-w-2xl)
- Number displays (300 animals, 21 years) use bold weights for emphasis

---

## Layout System

**Spacing Units:** Tailwind spacing with focus on 4, 6, 8, 12, 16, 20, 24, 32
- **Section Padding:** py-16 md:py-24 lg:py-32 for major sections
- **Container Max-Width:** max-w-7xl for full sections, max-w-4xl for text-heavy content
- **Grid Gaps:** gap-6 md:gap-8 for card layouts
- **Element Spacing:** mb-4, mb-6, mb-8 for vertical rhythm

**Responsive Breakpoints:**
- Mobile-first approach
- md: (768px) for tablet adjustments
- lg: (1024px) for desktop layouts

---

## Component Library

### Header (Sticky Navigation)
- Fixed position with backdrop-blur effect when scrolled
- Logo (left), horizontal navigation menu (center), dual CTAs (right)
- Navigation items: Início, Quem Somos, Adoção, Apadrinhamento, Contato
- Mobile: Hamburger menu with slide-out drawer
- Two prominent CTAs: WhatsApp button (primary) + Instagram icon (secondary)

### Hero Section
- **Layout:** Full-width with large hero image (one of the provided animal photos showing warmth/connection)
- **Height:** 70vh to 85vh on desktop, 60vh on mobile
- **Content Overlay:** Centered text with semi-transparent gradient overlay for readability
- **Elements:**
  - Compelling headline about giving adult animals a second chance
  - Subheadline with mission statement (21 years, 300 animals)
  - Two CTAs: "Conheça Nossos Animais" (primary) + "Seja um Padrinho" (secondary)
  - Buttons with backdrop-blur-md background for visibility over image

### Section: Quem Somos (About)
- **Layout:** Two-column on desktop (60% text, 40% image collage)
- **Content:**
  - Left: Mission text, founding year (2003), current impact numbers
  - Right: Grid of 2-3 photos showing shelter activities
- **Stats Display:** Three key metrics in large numbers with icons (300 animais, 21 anos, meta de padrinhos)

### Section: Campanha Adoção Adultos (Featured Campaign)
- **Layout:** Full-width with contrasting background treatment
- **Structure:** 
  - Centered headline emphasizing importance of adult animal adoption
  - Three-column benefit cards explaining why adult animals are great companions
  - Each card: Icon + title + description
  - Large CTA button below cards

### Section: Animais para Adoção (Gallery)
- **Layout:** Masonry-style or standard grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Animal Cards:**
  - Large photo (aspect-ratio-square or 4:3)
  - Overlay with name/basic info on hover
  - "Quero Adotar" button that links to WhatsApp with pre-filled message
- **Filter Options:** Simple toggle for "Adultos" / "Todos" above grid

### Section: Programa de Apadrinhamento
- **Layout:** Centered content with visual progress indicator
- **Elements:**
  - Headline explaining monthly goal (200 padrinhos × R$50)
  - Visual progress bar showing current vs. goal
  - Benefits of sponsorship in bullet points
  - Banking details in clearly formatted box (Bradesco info + CNPJ)
  - Prominent "Quero Ajudar" CTA

### Section: Como Funciona (Process)
- **Layout:** Horizontal stepper on desktop, vertical on mobile
- **Steps:** 4-5 steps from initial contact to adoption completion
- **Design:** Numbered circles connected by lines, each with icon + title + brief description

### Section: Contato
- **Layout:** Two-column (50/50 split)
- **Left Column:**
  - Contact form (Nome, Email, Telefone, Mensagem)
  - Single "Enviar Mensagem" button (submits to WhatsApp)
- **Right Column:**
  - Contact information card with WhatsApp, Instagram, hours (8h-18h)
  - Optional map placeholder or additional shelter photo

### Footer
- **Structure:** Four-column layout on desktop, stacked on mobile
- **Columns:**
  1. Logo + brief mission statement
  2. Links Rápidos (navigation menu items)
  3. Doações (banking details + CNPJ)
  4. Redes Sociais + Horários
- **Bottom Bar:** Copyright, privacy policy link, developed by credit
- **Design:** Substantial padding (py-12), organized with clear hierarchy

---

## Iconography

**Icon Library:** Heroicons (via CDN)
- Navigation: outline icons
- Feature cards: solid icons
- CTAs: mini icons for WhatsApp/Instagram
- Process steps: custom numbered circles with outline icons inside

**Common Icons:**
- Heart (adoption/love)
- Users (community/sponsorship)
- Clock (process/timeline)
- Phone/WhatsApp (contact)
- Instagram logo
- Paw print (animals)

---

## Buttons & CTAs

**Primary CTA:**
- Rounded-lg, px-8 py-3, font-semibold
- Large touch targets (min 44px height)
- Icon + text combination where appropriate

**Secondary CTA:**
- Outlined variant or ghost style
- Same size/padding as primary

**Floating WhatsApp Button:**
- Fixed bottom-right position
- Round button with WhatsApp icon
- Pulse animation to draw attention

**Button Treatments on Images:**
- backdrop-blur-md with semi-transparent background
- No hover state changes (buttons handle their own states)

---

## Images

**Hero Section:** 
- Large emotional hero image showing human-animal connection or happy adopted animal
- Suggested: Use foto7.webp or foto8.webp for emotional impact
- Overlay gradient from bottom for text readability

**Section Images:**
- About Us: Use foto2.webp, foto4.webp in collage format
- Animal Gallery: All provided photos (foto5.webp, foto6.webp, foto9.webp, foto10.webp) as individual animal cards
- Sponsorship section: Background image with transparency or sidebar image showing shelter activities

**Image Treatment:**
- Rounded corners (rounded-lg to rounded-xl) for all photos
- Subtle shadow on cards (shadow-md)
- Aspect ratios: 4:3 for animal portraits, 16:9 for landscape scenes

---

## Animations & Interactions

**Minimal Approach:**
- Scroll-triggered fade-in for sections (subtle, once)
- Smooth scrolling for anchor links
- Card hover: slight scale (scale-105) + shadow increase
- CTA hover: subtle brightness increase
- No distracting animations that compete with content

---

## Special Considerations

**Emotional Design Elements:**
- Use testimonial-style quotes from fictional adopters (if no real testimonials) or impactful statistics
- Numbers section with animated count-up on scroll (300 animais, 21 anos, etc.)
- Social proof: "Junte-se a XX pessoas que já apadrinham"

**Trust Signals:**
- Display CNPJ prominently in footer
- Clear banking information
- Transparent about monthly costs and goals
- Professional photography of actual shelter animals

**Conversion Optimization:**
- Multiple WhatsApp CTAs throughout page
- Clear donor path (Apadrinhamento section early in flow)
- Low-friction adoption interest (direct WhatsApp link)
- Mobile-optimized contact methods (click-to-call, click-to-WhatsApp)

---

**Final Note:** This design balances emotional appeal with practical functionality, ensuring the NGO's mission shines through while making donation and adoption pathways crystal clear. The minimalist approach keeps focus on the animals while building trust through transparency.