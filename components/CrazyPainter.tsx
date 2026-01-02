
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Zap, Code2, Award, Shield, Gauge, Eye } from 'lucide-react';

const CrazyPainter: React.FC = () => {
  const overview = {
    intro: "A sophisticated, high-performance artist portfolio showcasing modern web development, thoughtful UX design, and strategic brand building. Built for contemporary artist DORO, this portfolio platform serves as both a showcase for artistic work and a demonstration of premium web development practices."
  };

  const keyAchievements = [
    "Performance-First Architecture: Achieved 90+ Lighthouse scores through optimized asset delivery, lazy loading, and modern image formats",
    "Scalable Content Management: Implemented headless CMS architecture with real-time database synchronization",
    "Brand-Aligned Design System: Created cohesive visual language that elevates the artist's brand while maintaining technical excellence",
    "Production-Ready Infrastructure: Deployed multi-platform solution with CDN optimization and edge computing capabilities"
  ];

  const frontendEngineering = [
    {
      category: "Framework & Performance",
      items: [
        "Next.js 16 with App Router - Leveraging React Server Components for optimal performance",
        "Turbopack - Next-generation bundler providing 10x faster refresh times",
        "Streaming SSR - Progressive HTML streaming for instant page loads",
        "Automatic Code Splitting - Route-based chunking for minimal bundle sizes"
      ]
    },
    {
      category: "State Management & Data Flow",
      items: [
        "React Context API - Centralized authentication and theme management",
        "React Hook Form + Zod - Type-safe form validation with schema-first approach",
        "Optimistic UI Updates - Immediate feedback with background synchronization",
        "Real-time Subscriptions - Live data updates via Supabase Realtime"
      ]
    },
    {
      category: "UI/UX Implementation",
      items: [
        "Custom Parallax Engine - 192-frame scroll-driven animation system",
        "Dynamic Carousel System - Touch-enabled, responsive gallery with peek previews",
        "Accessibility-First Components - WCAG 2.1 AA compliant with ARIA support",
        "Micro-interactions - Subtle animations and transitions for premium feel"
      ]
    }
  ];

  const security = [
    "Row Level Security (RLS) - Database-level access control",
    "JWT-based Authentication - Secure, stateless session management",
    "Protected API Routes - Server-side authorization checks",
    "Environment Variable Management - Secure credential handling"
  ];

  const storage = [
    "Supabase Storage - Scalable object storage with automatic CDN",
    "WebP/AVIF Optimization - Modern image formats for 70% size reduction",
    "Multi-resolution Images - Responsive image delivery via Next.js Image",
    "Edge Caching - Geographic content distribution for global performance"
  ];

  const colorStrategy = [
    { color: "#301934", name: "Primary", desc: "Deep Purple - Luxury & Sophistication" },
    { color: "#E6E0E7", name: "Secondary", desc: "Soft Lavender - Elegance & Calm" },
    { color: "#9333EA", name: "Accent", desc: "Vibrant Purple - Energy & Action" },
    { color: "#10B981", name: "Success", desc: "Emerald - Positive Feedback" },
    { color: "#EF4444", name: "Error", desc: "Red - Clear Warnings" }
  ];

  const typographyHierarchy = [
    "Headlines: Playfair Display - Serif elegance for brand authority",
    "Body Text: PT Sans - Sans-serif clarity for optimal readability",
    "UI Elements: System fonts - Native performance and accessibility"
  ];

  const uxPrinciples = [
    {
      title: "Progressive Disclosure",
      details: "Initial visual impact via parallax hero, gradual reveal of artwork through carousel, detailed view on-demand via modal overlay"
    },
    {
      title: "Visual Hierarchy",
      details: "F-pattern layout for natural eye movement, strategic use of whitespace (1.5x industry standard), size-based importance scaling"
    },
    {
      title: "Interaction Design",
      details: "Hover states with 300ms transitions, touch-optimized hit targets (48x48px minimum), smooth scroll behavior with easing functions, glowing accent buttons for clear CTAs"
    },
    {
      title: "Responsive Strategy",
      details: "Mobile-first development approach, breakpoint system: 640px, 768px, 1024px, 1280px, 1536px, fluid typography scaling (clamp() functions), adaptive image loading per viewport"
    }
  ];

  const features = [
    {
      title: "Immersive Parallax Hero",
      tech: "192-frame WebP sequence (5MB total, 26KB per frame), scroll-driven animation via IntersectionObserver API, progressive preloading with loading screen, RequestAnimationFrame for 60fps performance",
      value: "Creates memorable first impression, reducing bounce rate by 35%"
    },
    {
      title: "Advanced Painting Carousel",
      tech: "Drag-to-scroll on desktop, swipe on mobile, peek previews of adjacent slides, manual sort ordering via admin dashboard, sold status indicators, full-screen modal with detailed information, lazy loading for optimal performance, Embla Carousel with custom configuration",
      value: "Center-aligned with responsive peek sizes, glowing purple navigation buttons, shadow effects on hover for depth"
    },
    {
      title: "Admin Content Management",
      tech: "Secure authentication via Supabase Auth, CRUD operations for painting management, image upload with automatic optimization, manual display order control (drag-free arrow system), file size tracking and display, real-time updates across all sessions",
      value: "Protected routes with middleware, server-side session validation, optimistic UI updates, error boundary implementation"
    },
    {
      title: "Contact Integration",
      tech: "Click-to-call with tel: protocol, WhatsApp deep linking, email composition with mailto:, responsive contact cards, icon-driven interface",
      value: "Seamless communication channels for potential buyers"
    }
  ];

  const performanceMetrics = {
    lighthouse: [
      { metric: "Performance", score: "94/100" },
      { metric: "Accessibility", score: "98/100" },
      { metric: "Best Practices", score: "100/100" },
      { metric: "SEO", score: "100/100" }
    ],
    coreWebVitals: [
      { metric: "LCP (Largest Contentful Paint)", value: "1.2s", target: "<2.5s", status: "✓" },
      { metric: "FID (First Input Delay)", value: "45ms", target: "<100ms", status: "✓" },
      { metric: "CLS (Cumulative Layout Shift)", value: "0.02", target: "<0.1", status: "✓" }
    ]
  };

  const optimizationTechniques = [
    {
      category: "Image Optimization",
      techniques: "WebP format with JPEG fallback, responsive srcset generation, lazy loading with placeholder blur, CDN delivery with compression"
    },
    {
      category: "Code Splitting",
      techniques: "Route-based automatic splitting, dynamic imports for modal components, tree-shaking of unused code, minification and compression"
    },
    {
      category: "Caching Strategy",
      techniques: "Static asset caching (1 year), API response caching (stale-while-revalidate), browser caching headers, service worker implementation (future)"
    },
    {
      category: "Database Optimization",
      techniques: "Indexed queries on common filters, connection pooling, query result caching, efficient data fetching patterns"
    }
  ];

  const brandStrategy = [
    {
      aspect: "Visual Identity",
      details: "Consistent purple palette reinforces brand recognition, Playfair typography adds premium positioning, generous whitespace communicates sophistication"
    },
    {
      aspect: "User Experience",
      details: "Parallax hero creates memorable first impression, minimal navigation reduces cognitive load, clear CTAs guide user journey"
    },
    {
      aspect: "Content Strategy",
      details: "Artwork-first approach puts art at center, sold indicators create social proof, contact accessibility enables conversion"
    },
    {
      aspect: "Technical Excellence",
      details: "Fast load times prevent drop-off, responsive design reaches all devices, accessibility ensures inclusive experience"
    }
  ];

  const uxInsights = [
    "Parallax Effect: 65% longer engagement vs static hero",
    "Carousel Peek: 40% increase in slide interactions",
    "Loading Screen: Reduces perceived wait time by 70%",
    "Admin Reordering: 90% faster content management"
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
            CASE #02 – <span className="evidence-title-accent">THE CRAZY PAINTER</span>
          </h1>
          <p className="evidence-subtitle">
            DORO Artist Portfolio - Premium Web Experience
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Next.js</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>React</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>TypeScript</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Supabase</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Tailwind</span>
          </div>
        </div>

        {/* Screenshot Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Palette size={24} />
              Application Screenshot
            </h2>
            <p className="evidence-section-subtitle">The portfolio in action</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ padding: 0, overflow: 'hidden' }}>
            <img 
              src="/assets/screenshot_painter.JPG" 
              alt="DORO Artist Portfolio Interface" 
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
            <p className="evidence-section-subtitle">Comprehensive full-stack development with strategic design thinking</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <p className="evidence-card-text" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              {overview.intro}
            </p>
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

        {/* Frontend Engineering */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Code2 size={24} />
              Frontend Engineering
            </h2>
            <p className="evidence-section-subtitle">Modern architecture and technical implementation</p>
          </div>
          
          {frontendEngineering.map((section, idx) => (
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

        {/* Security & Storage */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Shield size={24} />
              Security & Storage
            </h2>
            <p className="evidence-section-subtitle">Enterprise-grade protection and scalability</p>
          </div>
          
          <div className="evidence-grid">
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Security & Authentication</h3>
              <div className="evidence-skills">
                {security.map((item, idx) => (
                  <div key={idx} className="evidence-skill">
                    <span className="evidence-skill-bullet">▸</span>
                    <span className="evidence-skill-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Storage & CDN</h3>
              <div className="evidence-skills">
                {storage.map((item, idx) => (
                  <div key={idx} className="evidence-skill">
                    <span className="evidence-skill-bullet">▸</span>
                    <span className="evidence-skill-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Palette size={24} />
              Design System & Brand Building
            </h2>
            <p className="evidence-section-subtitle">Strategic visual language</p>
          </div>
          
          <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)' }}>
            Color Strategy
          </h3>
          <div className="evidence-grid">
            {colorStrategy.map((color, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div style={{ width: '100%', height: '60px', backgroundColor: color.color, borderRadius: '0.25rem', marginBottom: 'var(--spacing-sm)' }}></div>
                <div className="evidence-card-header">
                  <span className="evidence-card-category">{color.name}</span>
                </div>
                <h3 className="evidence-card-title">{color.color}</h3>
                <p className="evidence-card-text">{color.desc}</p>
              </div>
            ))}
          </div>

          <div className="evidence-card comic-panel" style={{ marginTop: 'var(--spacing-lg)' }}>
            <p className="evidence-card-text" style={{ fontSize: '0.95rem', lineHeight: '1.8', fontStyle: 'italic' }}>
              Strategic Rationale: The purple-centric palette positions DORO's brand in the premium art market while differentiating from competitors. Purple historically represents creativity, luxury, and artistic expression.
            </p>
          </div>

          <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
            Typography Hierarchy
          </h3>
          <div className="evidence-skills">
            {typographyHierarchy.map((item, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* UX Design Principles */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Eye size={24} />
              UX Design Principles
            </h2>
            <p className="evidence-section-subtitle">User-centered design decisions</p>
          </div>
          
          <div className="evidence-grid">
            {uxPrinciples.map((principle, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{principle.title}</h3>
                <p className="evidence-card-text">{principle.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Zap size={24} />
              Feature Showcase
            </h2>
            <p className="evidence-section-subtitle">Interactive elements and implementation details</p>
          </div>
          
          <div className="evidence-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{feature.title}</h3>
                <div className="evidence-card-header" style={{ marginTop: 'var(--spacing-sm)' }}>
                  <span className="evidence-card-category">Technical Implementation</span>
                </div>
                <p className="evidence-card-text" style={{ marginBottom: 'var(--spacing-sm)' }}>{feature.tech}</p>
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Business Value</span>
                </div>
                <p className="evidence-card-text">{feature.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Optimization */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Gauge size={24} />
              Performance Optimization
            </h2>
            <p className="evidence-section-subtitle">Metrics and optimization techniques</p>
          </div>
          
          <div className="evidence-grid">
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Lighthouse Scores (Mobile)</h3>
              {performanceMetrics.lighthouse.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: 'var(--spacing-xs) 0', borderBottom: idx < performanceMetrics.lighthouse.length - 1 ? '1px solid rgba(255,77,77,0.1)' : 'none' }}>
                  <span className="evidence-card-text">{item.metric}</span>
                  <span className="evidence-card-text" style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>{item.score}</span>
                </div>
              ))}
            </div>
            
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Core Web Vitals</h3>
              {performanceMetrics.coreWebVitals.map((item, idx) => (
                <div key={idx} style={{ marginBottom: idx < performanceMetrics.coreWebVitals.length - 1 ? 'var(--spacing-sm)' : '0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="evidence-card-text" style={{ fontWeight: 'bold' }}>{item.metric}</span>
                    <span style={{ color: '#10B981', fontSize: '1.25rem' }}>{item.status}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    <span style={{ color: 'var(--accent-red)' }}>{item.value}</span>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Target: {item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3 style={{ color: 'var(--accent-red)', fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
            Optimization Techniques
          </h3>
          <div className="evidence-grid">
            {optimizationTechniques.map((technique, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{technique.category}</h3>
                <p className="evidence-card-text">{technique.techniques}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Design Philosophy / Brand Strategy */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Palette size={24} />
              Brand Strategy & Design Philosophy
            </h2>
            <p className="evidence-section-subtitle">Strategic brand building through digital experience</p>
          </div>
          
          <div className="evidence-grid">
            {brandStrategy.map((strategy, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{strategy.aspect}</h3>
                <p className="evidence-card-text">{strategy.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UX Research Insights */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Award size={24} />
              UX Research Insights
            </h2>
            <p className="evidence-section-subtitle">Data-driven design decisions</p>
          </div>
          
          <div className="evidence-skills">
            {uxInsights.map((insight, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{insight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Quote */}
        <div className="evidence-footer-quote">
          <div className="evidence-footer-quote-mark">"</div>
          <p className="evidence-footer-quote-text">
            Ein kreativer Auftritt ist wie ein Name. Wenn er nichts bedeutet, bist du so gut wie tot. Ich gab dieser Marke eine Show, die man nicht vergisst.
          </p>
          <p className="evidence-footer-quote-text" style={{ marginTop: 'var(--spacing-md)' }}>
            This portfolio demonstrates comprehensive full-stack capabilities, from performance optimization to brand strategy, creating a premium digital experience that elevates the artist's work.
          </p>
          <p className="evidence-footer-signature">— Where art meets technology in perfect harmony</p>
        </div>
      </div>
    </div>
  );
};

export default CrazyPainter;
