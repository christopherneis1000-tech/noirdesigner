
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Zap, Code2, Award, Gauge, Eye, Wrench } from 'lucide-react';

const ToothFairy: React.FC = () => {
  const overview = {
    intro: "A high-end, cinematic single-page portfolio experience featuring fluid parallax scrolling, WebP image sequences, and premium brutalist design. CN PERSONAL showcases advanced web development capabilities through a fully custom-built parallax scrolling experience that demonstrates mastery of performance optimization, modern frontend architecture, and premium UI/UX design principles."
  };

  const corePhilosophy = {
    tagline: "Calm Thinking. Clear Direction.",
    description: "This portfolio embodies a minimalist yet impactful approach to web design, where every pixel serves a purpose and every interaction tells a story."
  };

  const keyAchievements = [
    "Performance-First: 98/100 Lighthouse Performance Score with 0.8s First Contentful Paint",
    "Canvas Innovation: Custom-built parallax renderer with 192-frame WebP sequences at 60 FPS",
    "Optimization Mastery: -66% initial load time through progressive loading strategy",
    "Bundle Efficiency: -95% CSS bundle size (400KB → 20KB) with custom CSS vs Tailwind CDN",
    "Resource Optimization: -50% CPU usage through RAF-based scroll throttling",
    "Perfect SEO: 100/100 SEO score with comprehensive meta tags and structured data"
  ];

  const performanceMetrics = {
    lighthouse: [
      { metric: "Performance", score: "98/100" },
      { metric: "Accessibility", score: "96/100" },
      { metric: "Best Practices", score: "95/100" },
      { metric: "SEO", score: "100/100" }
    ],
    coreWebVitals: [
      { metric: "First Contentful Paint (FCP)", value: "0.8s", status: "Excellent" },
      { metric: "Largest Contentful Paint (LCP)", value: "1.2s", status: "Good" },
      { metric: "Time to Interactive (TTI)", value: "1.5s", status: "Fast" },
      { metric: "Cumulative Layout Shift (CLS)", value: "0.001", status: "Excellent" },
      { metric: "Total Blocking Time (TBT)", value: "50ms", status: "Fast" },
      { metric: "Speed Index", value: "1.3s", status: "Good" }
    ]
  };

  const designFeatures = [
    {
      title: "Parallax Storytelling",
      details: "192-frame WebP sequences synchronized with scroll position, creating cinematic narrative flow. Each frame meticulously timed for smooth 60 FPS animation with intelligent preloading."
    },
    {
      title: "Brutalist Typography",
      details: "Custom serif and sans-serif font stack using Georgia and -apple-system for instant rendering. Bold, uppercase headlines with generous whitespace for premium aesthetic."
    },
    {
      title: "Premium Color Palette",
      details: "Charcoal (#1a1614), olive, and ivory tones create sophisticated atmosphere. Strategic use of color contrast for accessibility and visual hierarchy."
    },
    {
      title: "Micro-interactions",
      details: "Hover effects, shimmer animations, and floating elements add premium polish. Smooth transitions with cubic-bezier easing functions for natural feel."
    },
    {
      title: "Responsive Design",
      details: "Mobile-first approach with adaptive layouts. Seamless experience from mobile to 4K displays with dynamic viewport calculations."
    }
  ];

  const technicalArchitecture = [
    {
      category: "Canvas-Based Rendering",
      items: [
        "Hardware-accelerated 2D graphics context",
        "Frame interpolation for missing frames",
        "Smart image reference management",
        "Dynamic section progress algorithms",
        "RequestAnimationFrame optimization"
      ]
    },
    {
      category: "Performance Optimizations",
      items: [
        "Progressive image loading (hero sequence first for 66% faster load)",
        "Code splitting with React.lazy() and Suspense",
        "RAF-based scroll throttling (50-70% less CPU)",
        "Custom CSS eliminating CDN overhead (95% smaller bundle)",
        "WebP format with CDN delivery (25-35% smaller files)",
        "System fonts for instant rendering"
      ]
    },
    {
      category: "State Management",
      items: [
        "React hooks for scroll progress tracking",
        "useRef for canvas element management",
        "useEffect for lifecycle management",
        "Memory-efficient image reference handling",
        "Viewport-based scroll detection"
      ]
    }
  ];

  const optimizationTechniques = [
    {
      category: "Progressive Loading Strategy",
      techniques: "Hero sequence loads first (frames 1-192), subsequent sections load on-demand, intelligent preloading based on scroll velocity, fallback for network issues"
    },
    {
      category: "Code Splitting",
      techniques: "React.lazy() for dynamic component imports, route-based automatic splitting, Suspense boundaries with loading states, tree-shaking of unused code"
    },
    {
      category: "Scroll Optimization",
      techniques: "RequestAnimationFrame throttling, passive event listeners, intersection observer for viewport detection, debounced resize handlers"
    },
    {
      category: "Asset Optimization",
      techniques: "WebP image format (25-35% smaller), Supabase CDN delivery, resource hints (preconnect, dns-prefetch), cache-control headers"
    }
  ];

  const seoAccessibility = [
    {
      aspect: "Comprehensive Meta Tags",
      details: "Open Graph for social sharing, Twitter Cards for rich previews, Schema.org JSON-LD structured data, canonical URLs"
    },
    {
      aspect: "Semantic HTML5",
      details: "Proper heading hierarchy (h1-h6), semantic landmarks (nav, main, footer), descriptive section elements"
    },
    {
      aspect: "ARIA Labels",
      details: "Full screen reader support, aria-label attributes, role definitions, accessible button labels"
    },
    {
      aspect: "Sitemap & Robots",
      details: "XML sitemap for search engines, robots.txt configuration, complete discoverability, meta descriptions"
    },
    {
      aspect: "Keyboard Navigation",
      details: "Full keyboard accessibility, focus indicators, logical tab order, skip-to-content links"
    }
  ];

  const techStack = [
    { name: 'React 19', category: 'Frontend', reason: 'Latest React with concurrent features and improved performance' },
    { name: 'TypeScript', category: 'Language', reason: 'Type-safe development with enhanced IDE support' },
    { name: 'Vite', category: 'Build Tool', reason: 'Lightning-fast build tool and dev server with HMR' },
    { name: 'Custom CSS', category: 'Styling', reason: 'Hand-crafted stylesheets with CSS variables, 95% smaller than frameworks' },
    { name: 'System Fonts', category: 'Typography', reason: 'Georgia (serif), -apple-system (sans-serif) for instant rendering' },
    { name: 'WebP Images', category: 'Assets', reason: 'Modern format for 25-35% smaller file sizes' },
    { name: 'Supabase Storage', category: 'CDN', reason: 'CDN-backed image delivery with global distribution' },
    { name: 'Cloudflare Workers', category: 'Edge Computing', reason: 'Ultra-low latency with edge computing' },
    { name: 'Cloudflare Pages', category: 'Hosting', reason: 'Global CDN distribution with automatic optimization' },
  ];

  const features = [
    {
      title: "Custom Canvas Renderer",
      tech: "Built from scratch for pixel-perfect control, 2D rendering context, image manipulation APIs, frame-by-frame animation loop",
      value: "Complete control over rendering pipeline, 60 FPS performance, hardware acceleration"
    },
    {
      title: "Frame Interpolation Algorithm",
      tech: "Intelligent fallback for network issues, smooth transitions between frames, dynamic frame calculation, error boundary handling",
      value: "Graceful degradation under poor network conditions, seamless user experience"
    },
    {
      title: "Dynamic Section Detection",
      tech: "Viewport-based scroll progress calculation, intersection observer API, percentage-based frame selection, smooth transitions",
      value: "Accurate scroll-to-frame synchronization, responsive to viewport changes"
    },
    {
      title: "Memory Management",
      tech: "Smart reference handling, garbage collection optimization, image cleanup on unmount, efficient data structures",
      value: "Prevents memory leaks, maintains performance over time"
    }
  ];

  const cssArchitecture = [
    {
      category: "Design System",
      details: "CSS custom properties for theming, spacing scale (8px base unit), color tokens, component-level variables"
    },
    {
      category: "Animation Library",
      details: "Shimmer effects with keyframe animations, floating animations for visual interest, vignette overlays, fade-in entrances"
    },
    {
      category: "Responsive Strategy",
      details: "Mobile-first base styles, min-width media queries, fluid typography with clamp(), CSS Grid for layouts"
    }
  ];

  const learningOutcomes = [
    'Advanced React Patterns: Hooks, lazy loading, Suspense, refs, context',
    'Canvas API Mastery: 2D rendering, image manipulation, animations',
    'Performance Engineering: Code splitting, throttling, optimization strategies',
    'Modern CSS: Variables, animations, responsive design without frameworks',
    'TypeScript: Type safety, interfaces, generics, strict mode',
    'SEO & Accessibility: Meta tags, ARIA, semantic HTML, structured data',
    'Build Tools: Vite configuration, bundling, optimization',
    'Edge Computing: Cloudflare Workers/Pages, CDN strategies',
    'Progressive Enhancement: Graceful degradation, fallback strategies',
    'Memory Management: Efficient data structures, cleanup patterns',
    'Animation Timing: RAF optimization, scroll throttling, cubic-bezier easing',
    'Asset Pipeline: WebP conversion, CDN integration, cache strategies'
  ];

  const browserSupport = [
    { browser: 'Chrome 90+', status: '✅ Full Support' },
    { browser: 'Firefox 88+', status: '✅ Full Support' },
    { browser: 'Safari 14+', status: '✅ Full Support' },
    { browser: 'Edge 90+', status: '✅ Full Support' },
    { browser: 'Mobile Safari 14+', status: '✅ Full Support' },
    { browser: 'Chrome Android 90+', status: '✅ Full Support' },
  ];

  return (
    <div className="evidence-page">
      {/* Background Effects */}
      <div className="contact-spotlight"></div>
      <div className="contact-grain" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}>
      </div>

      <div className="evidence-container">
        {/* Header */}
        <div className="evidence-header">
          <Link to="/" className="evidence-back">
            <ArrowLeft size={20} />
            <span>Back to Case Files</span>
          </Link>
          
          <h1 className="evidence-title">
            CASE #03 – <span className="evidence-title-accent">THE HUNGARIAN TOOTHFAIRY</span>
          </h1>
          <p className="evidence-subtitle">
            CN PERSONAL - Premium Parallax Portfolio
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>React 19</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>TypeScript</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Canvas API</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Vite</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Cloudflare</span>
          </div>
        </div>

        {/* Screenshot Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Palette size={24} />
              Application Screenshot
            </h2>
            <p className="evidence-section-subtitle">The portfolio in cinematic motion</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="/assets/toothfairy.webp" 
              alt="CN PERSONAL Portfolio Interface" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Eye size={24} />
              Project Overview
            </h2>
            <p className="evidence-section-subtitle">Proof of concept for on-scroll parallax animation</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <p className="evidence-card-text" style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              {overview.intro}
            </p>
            <div style={{ borderLeft: '3px solid var(--accent-red)', paddingLeft: '1rem', marginTop: '1rem' }}>
              <p style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                "{corePhilosophy.tagline}"
              </p>
              <p className="evidence-card-text" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                {corePhilosophy.description}
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Award size={24} />
              Key Achievements
            </h2>
            <p className="evidence-section-subtitle">Measurable impact and technical excellence</p>
          </div>
          
          <div className="evidence-skills">
            {keyAchievements.map((achievement, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{achievement}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Gauge size={24} />
              Performance Metrics
            </h2>
            <p className="evidence-section-subtitle">Lighthouse scores and Core Web Vitals</p>
          </div>
          
          <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
            Lighthouse Scores
          </h3>
          <div className="evidence-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {performanceMetrics.lighthouse.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{item.metric}</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-red)', margin: '0.5rem 0' }}>
                  {item.score}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
            Core Web Vitals
          </h3>
          <div className="evidence-grid">
            {performanceMetrics.coreWebVitals.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{item.metric}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-red)', margin: '0.5rem 0' }}>
                  {item.value}
                </p>
                <p className="evidence-card-text">Status: {item.status}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Features */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Zap size={24} />
              Design Features
            </h2>
            <p className="evidence-section-subtitle">Cinematic UX and premium interactions</p>
          </div>
          
          <div className="evidence-grid">
            {designFeatures.map((feature, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{feature.title}</h3>
                <p className="evidence-card-text">{feature.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Code2 size={24} />
              Technical Architecture
            </h2>
            <p className="evidence-section-subtitle">Advanced implementation patterns</p>
          </div>
          
          {technicalArchitecture.map((section, idx) => (
            <div key={idx}>
              <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', marginTop: idx > 0 ? 'var(--spacing-lg)' : '0' }}>
                {section.category}
              </h3>
              <div className="evidence-skills">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="evidence-skill">
                    <span className="evidence-skill-bullet">▸</span>
                    <span className="evidence-skill-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Optimization Techniques */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Wrench size={24} />
              Optimization Techniques
            </h2>
            <p className="evidence-section-subtitle">Performance engineering strategies</p>
          </div>
          
          <div className="evidence-grid">
            {optimizationTechniques.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Optimization</span>
                </div>
                <h3 className="evidence-card-title">{item.category}</h3>
                <p className="evidence-card-text">{item.techniques}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Code2 size={24} />
              Technical Stack
            </h2>
            <p className="evidence-section-subtitle">Modern tooling and architecture</p>
          </div>
          
          <div className="evidence-grid">
            {techStack.map((tech, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">{tech.category}</span>
                </div>
                <h3 className="evidence-card-title">{tech.name}</h3>
                <p className="evidence-card-text">{tech.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Zap size={24} />
              Technical Innovations
            </h2>
            <p className="evidence-section-subtitle">Custom-built solutions</p>
          </div>
          
          <div className="evidence-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{feature.title}</h3>
                <p className="evidence-card-text" style={{ marginBottom: '0.75rem', fontSize: '0.875rem', opacity: 0.8 }}>
                  {feature.tech}
                </p>
                <p className="evidence-card-text" style={{ borderTop: '1px solid rgba(255,77,77,0.2)', paddingTop: '0.75rem', color: 'var(--accent-red)' }}>
                  <strong>Value:</strong> {feature.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO & Accessibility */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Eye size={24} />
              SEO & Accessibility
            </h2>
            <p className="evidence-section-subtitle">Inclusive and discoverable</p>
          </div>
          
          <div className="evidence-grid">
            {seoAccessibility.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{item.aspect}</h3>
                <p className="evidence-card-text">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Architecture */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Wrench size={24} />
              CSS Architecture
            </h2>
            <p className="evidence-section-subtitle">Modern styling approach</p>
          </div>
          
          <div className="evidence-grid">
            {cssArchitecture.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{item.category}</h3>
                <p className="evidence-card-text">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Browser Support */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Eye size={24} />
              Browser Support
            </h2>
            <p className="evidence-section-subtitle">Graceful degradation and progressive enhancement</p>
          </div>
          
          <div className="evidence-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {browserSupport.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{item.browser}</h3>
                <p style={{ fontSize: '1.125rem', color: 'var(--accent-red)', fontWeight: 'bold' }}>{item.status}</p>
              </div>
            ))}
          </div>
          
          <div className="evidence-card comic-panel" style={{ marginTop: 'var(--spacing-md)' }}>
            <h3 className="evidence-card-title">Graceful Degradation Strategy</h3>
            <div className="evidence-skills">
              <div className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">Canvas fallback for older browsers</span>
              </div>
              <div className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">System font stack for immediate rendering</span>
              </div>
              <div className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">Progressive enhancement approach</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Demonstrated */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Award size={24} />
              Skills Demonstrated
            </h2>
            <p className="evidence-section-subtitle">Comprehensive capabilities showcase</p>
          </div>
          
          <div className="evidence-skills">
            {learningOutcomes.map((skill, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Quote */}
        <div className="evidence-footer-quote">
          <div className="evidence-footer-quote-mark">"</div>
          <p className="evidence-footer-quote-text">
            This portfolio demonstrates not just technical capability, but the art of performance engineering. From custom canvas rendering to meticulous optimization, every detail serves the goal of creating an unforgettable user experience. It's proof that with calm thinking and clear direction, even the most complex challenges can be elegantly solved.
          </p>
          <p className="evidence-footer-signature">— Built with precision, optimized for perfection</p>
        </div>
      </div>
    </div>
  );
};

export default ToothFairy;
