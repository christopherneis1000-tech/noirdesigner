# 🕵️ Noir Designer Portfolio

A Film Noir-inspired portfolio website showcasing UX/UI design and full-stack development skills. This project demonstrates expertise in creating immersive, thematically-driven web experiences with advanced interactive features and performance optimization.

![Noir Designer](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## 🎯 Project Overview

This portfolio reimagines the traditional designer portfolio as a detective's case file, complete with noir aesthetics, interactive spotlight effects, and comic-book inspired UI panels. Every design decision reinforces the narrative theme while maintaining excellent UX principles.

**Live Demo:** [View Portfolio](https://noirdesigner.christopherneis1000.workers.dev/) *(update with your deployment URL)*

---

## 🛠️ Technologies & Skills Demonstrated

### **Frontend Development**
- **React 19.2.3** - Modern component architecture with hooks (`useRef`, `useEffect`)
- **TypeScript 5.8.2** - Type-safe development with strict typing
- **Vite 6.2.0** - Lightning-fast build tool and dev server
- **CSS3** - Advanced styling with custom properties, grid layouts, and animations

### **UI/UX Design**
- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Thematic Consistency** - Film noir aesthetic throughout (grayscale filters, vintage typography)
- **Accessibility** - Semantic HTML, proper contrast ratios, keyboard navigation support
- **Visual Design** - Custom comic panel layouts, evidence board styling, dossier effects

### **Advanced JavaScript Features**
- **Canvas API** - Real-time rain animation with spotlight illumination effects
- **Intersection Observer** - Scroll-based animations for process cards (mobile-centered effects)
- **SVG Manipulation** - Dynamic spotlight beam rendering with real-time polygon updates
- **Request Animation Frame** - Smooth 60fps animations with lerping for fluid transitions
- **Event Handling** - Mouse tracking, scroll detection, resize listeners with cleanup

### **Performance Optimization**
- **Efficient Rendering** - Direct DOM manipulation to avoid unnecessary React re-renders
- **Lazy Computation** - Conditional effects (mobile vs desktop spotlight behavior)
- **Memory Management** - Proper cleanup of event listeners and animation frames
- **Asset Optimization** - WebP images for faster loading

### **Form Integration**
- **JotForm Embedding** - Seamless third-party form integration with custom styling
- **Responsive iFrame** - Dynamic height adjustment for optimal display

### **Code Quality**
- **Component Architecture** - Modular, reusable React components
- **Custom Hooks** - Ref management for complex interactions
- **DRY Principles** - Efficient code reuse and abstraction
- **Clean Code** - Well-commented, maintainable codebase

---

## 📂 Project Structure

```
noirdesigner/
├── components/           # React components
│   ├── Hero.tsx         # Interactive spotlight with rain canvas
│   ├── About.tsx        # Detective dossier section
│   ├── Cases.tsx        # Portfolio case studies
│   ├── Process.tsx      # 4-phase workflow with scroll effects
│   ├── Contact.tsx      # JotForm integration
│   ├── Footer.tsx       # Site footer
│   └── AIButton.tsx     # Reusable button component
├── public/
│   └── assets/          # Images (hero, cases, process phases)
├── styles.css           # Global styles with CSS custom properties
├── App.tsx              # Main app component
├── index.tsx            # React entry point
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🎨 Key Features

### **Interactive Spotlight System**
- Mouse-tracking spotlight effect with radial gradient masking
- Dynamic SVG light beam that follows cursor and ends at spotlight position
- Real-time canvas rain animation with illumination within spotlight radius
- Smooth lerping for fluid motion (no jittery movement)
- Dual-layer text (dim + bright) for dramatic lighting effect

### **Scroll-Based Animations**
- Mobile-optimized: Process cards highlight when centered in viewport (±10% tolerance)
- Desktop hover effects with transform and shadow enhancements
- Phase indicators change color to accent red and increase size on focus

### **Noir Aesthetic Elements**
- Reduced grayscale (30%) to show sepia tones while maintaining noir feel
- Film grain and scanline overlays
- Comic panel borders and evidence stamps
- Typewriter fonts (Special Elite) and bold display fonts (Oswald)
- Vintage paper effects with torn edges and paper clips

### **Responsive Design**
- Mobile-first CSS with progressive enhancement
- Tablet breakpoints at 768px
- Desktop breakpoints at 1024px
- Adaptive spotlight visibility (more prominent on mobile)
- Grid layouts that stack on mobile, expand on desktop

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm/yarn

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/christopherneis1000-tech/noirdesigner.git
   cd noirdesigner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### **Build for Production**
```bash
npm run build
npm run preview  # Preview production build locally
```

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

✅ **Modern React Development** - Hooks, refs, component composition  
✅ **TypeScript** - Type safety and interface definitions  
✅ **Canvas API** - Custom rendering and animation  
✅ **Advanced CSS** - Custom properties, complex layouts, filters  
✅ **Performance Optimization** - RAF, direct DOM manipulation, event cleanup  
✅ **Responsive Design** - Mobile-first, breakpoints, adaptive UX  
✅ **UI/UX Design** - Thematic consistency, visual hierarchy, accessibility  
✅ **Third-Party Integrations** - JotForm embedding  
✅ **Build Tools** - Vite configuration and optimization  

---

## 📊 Technical Highlights

- **Pure Vanilla Interactions:** No animation libraries - all effects hand-coded for maximum control
- **60 FPS Animations:** Request Animation Frame with lerping for buttery-smooth motion
- **Zero Layout Shifts:** Careful use of CSS custom properties updated via JavaScript
- **Modular Architecture:** Reusable components and clean separation of concerns
- **Type Safety:** Full TypeScript implementation with strict mode
- **SEO Ready:** Semantic HTML and proper heading hierarchy

---

## 📬 Contact

**Christopher Neis**  
📍 Mallorca, Spain  
🔗 [LinkedIn](https://linkedin.com/in/yourprofile)  
🐙 [GitHub](https://github.com/christopherneis1000-tech)  
✉️ [Contact Form](https://form.jotform.com/253634992986376)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*"In einer Stadt voller schlechtem Design braucht jemand ein Auge für Kontrast und Klarheit."*
