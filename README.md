# 🕵️ Noir Designer Portfolio

A dark, atmospheric portfolio website inspired by film noir aesthetics and detective stories. This project demonstrates advanced web development skills, attention to detail in design, and modern frontend architecture.

[![Live Demo](https://img.shields.io/badge/demo-live-red.svg)](https://noirdesigner.pages.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)

![Noir Designer Preview](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## 🎨 Design Philosophy

The entire website is crafted around a **film noir detective theme**, transforming a typical portfolio into an immersive storytelling experience. Every design decision—from color choices to typography to micro-interactions—reinforces this narrative.

### Visual Identity
- **Color Palette**: Deep blacks (#1a1614), dramatic reds (#ff4d4d), and vintage paper tones
- **Typography**: 
  - `Oswald` for bold, uppercase headlines (detective case files)
  - `Special Elite` for typewriter-style narrative text
  - `IBM Plex Mono` for technical, code-like elements
- **Visual Effects**:
  - Film grain overlay for vintage atmosphere
  - Spotlight gradients creating dramatic lighting
  - Comic panel borders with drop shadows (12px offset)
  - Rotated elements suggesting hastily assembled case files

## 🛠️ Technical Stack

### Core Technologies
- **React 19.2** - Component-based UI with latest features
- **TypeScript 5.8** - Type-safe development
- **Vite 6.2** - Lightning-fast build tooling and HMR
- **React Router DOM** - Client-side routing for SPA

### Styling & Animation
- **Pure CSS** - No framework dependencies, custom animations
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Variables** - Consistent theming system
- **Keyframe Animations** - Smooth, performant transitions

### Deployment & Infrastructure
- **Cloudflare Pages** - Global CDN distribution
- **Cloudflare Workers** - Edge computing
- **GitHub Actions** - CI/CD automation
- **Wrangler** - Cloudflare development toolkit

## ✨ Key Features

### 1. Animated Hero Section
- Parallax-style spotlight effect following scroll
- Grain texture overlay with blend modes
- Animated red dot pulse (2s cubic-bezier timing)
- Dramatic entrance animations

### 2. Interactive Case Studies
- Comic panel-style cards with hover transformations
- Scale and glow effects on interaction
- Glassmorphism overlays with backdrop-filter
- Organized metadata display (tools, impact, role)

### 3. Process Timeline
- Mobile-optimized scroll animations
- Center-detection for card highlighting
- Four-phase investigation framework
- Evidence board aesthetic with pinned photos

### 4. Dynamic Contact Form
- Embedded JotForm with custom styling
- Dark theme integration via URL parameters
- Mobile-responsive padding adjustments
- Custom thank you page with routing

### 5. Animated CTA Button
- Rotating conic gradient border (2.5s animation)
- Pulsing red glow effect (2s ease-in-out)
- Scale transformation on hover (1.08x)
- Glassmorphism inner content layer

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 640px, 768px, 1024px
- Dynamic font sizing with rem units
- Touch-optimized interactions

## 🎯 Design Challenges Solved

### Challenge 1: Form Integration
**Problem**: JotForm's default styling clashed with noir theme  
**Solution**: URL parameter injection + custom CSS targeting iframe, maintaining brand consistency across embedded content

### Challenge 2: Button Visual Impact
**Problem**: CTA button not prominent enough  
**Solution**: Layered animation system (rotating gradient + pulsing glow + hover states) while controlling overflow to prevent layout shifts

### Challenge 3: Mobile Layout Density
**Problem**: Comic panel shadows and padding consumed too much mobile space  
**Solution**: Progressive reduction system - 12px→6px→4px shadows, 3rem→1rem→0.75rem padding across breakpoints

### Challenge 4: Text Readability
**Problem**: Low contrast gray text (#475569) on dark backgrounds  
**Solution**: Comprehensive color audit, upgrading to #a1afc1 and #cbd5e1, plus font size increases (10px→11px, 0.75rem→0.875rem)

### Challenge 5: SPA Routing on Cloudflare
**Problem**: Direct URL access to /thankyou returned 404  
**Solution**: Configured `not_found_handling: "single-page-application"` in wrangler.jsonc for proper SPA fallback behavior

## 📁 Project Structure

```
noirdesigner/
├── components/
│   ├── Hero.tsx          # Landing section with spotlight
│   ├── About.tsx         # Detective bio with portrait
│   ├── Cases.tsx         # Portfolio case studies
│   ├── Process.tsx       # 4-phase investigation workflow
│   ├── Contact.tsx       # Embedded form
│   ├── ThankYou.tsx      # Post-submission page
│   ├── Footer.tsx        # Site footer
│   └── AIButton.tsx      # Animated CTA component
├── public/
│   ├── assets/          # Case study images
│   ├── robots.txt       # SEO configuration
│   └── sitemap.xml      # Search engine sitemap
├── App.tsx              # Main app component
├── index.tsx            # Entry point + routing
├── styles.css           # Complete design system
├── vite.config.ts       # Build configuration
└── wrangler.jsonc       # Cloudflare deployment
```

## 🎨 CSS Architecture

### Design System Variables
```css
/* Color tokens */
--bg-dark: #1a1614;
--accent-red: #ff4d4d;
--text-main: #e5e7eb;

/* Spacing scale (8px base) */
--spacing-xs to --spacing-6xl

/* Component tokens */
--card-padding, --section-gap
```

### Animation Library
- `pulse` - Dot animation (opacity + scale)
- `rotate-gradient` - Border animation (360deg rotation)
- `pulse-glow` - Shadow intensity changes
- `fadeIn` - Component entrance
- `checkPulse` - Success indicator
- `glowPulse` - Radial glow effect

### Component Patterns
- **Comic Panel**: Base class for card styling
- **BEM Methodology**: Block__Element--Modifier naming
- **Mobile-First**: Base styles + min-width media queries
- **CSS Grid**: Auto-fit responsive layouts

## 🚀 Performance Optimizations

1. **Code Splitting**: React Router lazy loading
2. **Asset Optimization**: Vite automatic chunking
3. **CSS Performance**: 
   - Hardware-accelerated transforms
   - Will-change hints on animated elements
   - Efficient selectors (no deep nesting)
4. **Image Handling**: WebP format, optimized dimensions
5. **Font Loading**: Preconnect + display=swap strategy

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android 90+

**Modern CSS Features Used**:
- CSS Grid & Flexbox
- Custom Properties (variables)
- Backdrop-filter (glassmorphism)
- Conic gradients
- CSS transforms & animations

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Cloudflare
npx wrangler pages deploy dist
```

## 🌐 Deployment

The site is configured for **Cloudflare Pages** with automatic deployments:

1. Push to `main` branch triggers automatic build
2. Cloudflare Pages runs `npm run build`
3. Deploys `dist/` folder to global CDN
4. SPA routing configured via `wrangler.jsonc`

**Custom Domain Setup**: Configure in Cloudflare dashboard under Pages > Custom domains

## 📊 Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🎓 Skills Demonstrated

### Frontend Development
✅ Modern React patterns (hooks, composition)  
✅ TypeScript for type safety  
✅ Client-side routing implementation  
✅ Form integration and state management  
✅ Responsive design implementation  
✅ Performance optimization  

### Design & UX
✅ Cohesive visual identity creation  
✅ Thematic consistency across components  
✅ Micro-interactions and animations  
✅ Mobile-first responsive strategy  
✅ Accessibility considerations  
✅ User flow optimization  

### DevOps & Tooling
✅ Modern build tools (Vite)  
✅ Cloudflare Workers/Pages deployment  
✅ Git workflow and version control  
✅ CI/CD with GitHub integration  
✅ Asset optimization pipeline  

## 🎬 Project Highlights

This portfolio demonstrates not just technical capability, but also:

- **Storytelling Through Design** - Every element serves the noir narrative
- **Attention to Detail** - From font choices to animation timing to color harmony
- **Problem-Solving** - Documented solutions to real-world challenges
- **User-Centric Thinking** - Mobile-first, accessible, performant
- **Professional Workflow** - Version control, CI/CD, documentation

## 📝 License

© 2024-2026 Christopher Neis. All rights reserved.

---

**Built with attention to detail, pixel perfection, and a love for noir aesthetics.** 🕵️‍♂️
