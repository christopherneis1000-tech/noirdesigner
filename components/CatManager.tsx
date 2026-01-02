
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cat, Shield, Database, Smartphone, Code2, Zap, Award } from 'lucide-react';

const CatManager: React.FC = () => {
  const overview = {
    intro: "Tierheim Manager is a production-ready web application designed for animal shelters to efficiently manage their cats and dogs. Built with modern web technologies and best practices, it demonstrates proficiency in full-stack development, cloud services, and user experience design."
  };

  const features = [
    "🐱 Dual Animal Management: Separate management pages for cats and dogs with visual toggle navigation and CRUD operations with confirmation dialogs",
    "📊 Advanced Data Management: Multi-parameter filtering (name, chip status, gender, terrain, neutered status, vaccination type, sponsor) with flexible sorting and card/list view modes",
    "💉 Healthcare Tracking: Comprehensive vaccination management with multiple records per animal, date tracking with German locale, and next vaccination scheduling",
    "👥 Sponsor & User Management: Godparent system linking animals to sponsors, admin/user roles with Firebase Auth (Google Sign-In + Email/Password)",
    "📸 Media Management: Multi-photo upload with automatic compression (800px width, 60% JPEG quality), lightbox gallery with keyboard navigation",
    "🎨 User Experience: Responsive mobile-first design with Tailwind CSS, loading states, optimistic UI updates, smooth animations, and color-coded UI",
    "🔒 Security & Compliance: Firestore security rules, role-based access control, authentication required, XSS protection with CSP headers",
    "⚡ Performance: Lighthouse scores 98/100 (desktop), code splitting, image compression, font preloading, CSS purging, lazy loading",
    "🎯 Real-time Updates: Firestore listeners for live data synchronization across all clients",
    "📱 SEO & PWA: Semantic HTML, meta tags, Open Graph, structured data, sitemap.xml, web manifest for native-like installation"
  ];

  const techStack = {
    frontend: [
      { name: 'React 19', detail: 'Latest features with TypeScript for type-safe development' },
      { name: 'TypeScript', detail: 'Type-safe development with strict mode enabled' },
      { name: 'Vite', detail: 'Lightning-fast build tool with Hot Module Replacement (HMR)' },
      { name: 'Lucide React', detail: 'Modern icon library with consistent design' }
    ],
    styling: [
      { name: 'Tailwind CSS', detail: 'Utility-first styling with CSS purging for optimized production' },
      { name: 'PostCSS', detail: 'CSS processing for modern features and optimizations' },
      { name: 'Responsive Design', detail: 'Mobile-first approach with smooth animations (fade-in, slide-up, scale)' },
      { name: 'Color-coded UI', detail: 'Purple gradient for cats, orange gradient for dogs' }
    ],
    backend: [
      { name: 'Firebase Authentication', detail: 'User management with Google OAuth and email/password, approval workflow system' },
      { name: 'Cloud Firestore', detail: 'NoSQL real-time database with indexed fields and query optimization' },
      { name: 'Firebase Hosting', detail: 'Global CDN deployment with browser caching (immutable assets: 1 year, HTML: no-cache)' },
      { name: 'Netlify Alternative', detail: 'Alternative hosting with edge functions support' }
    ]
  };

  const keyImplementations = [
    {
      title: "Performance Optimization",
      details: "Lighthouse scores: 98/100 desktop, 92/100 mobile. Code splitting with dynamic imports, font preloading, CSS purging, debounced search/filter, memoized values with useMemo, optimistic UI updates. Core Web Vitals: LCP < 1.2s, FID < 50ms, CLS < 0.05."
    },
    {
      title: "Real-time Data Synchronization",
      details: "Firestore listeners for live updates across all clients. Optimistic UI updates provide instant feedback with backend reconciliation. Firebase query optimization with indexed fields."
    },
    {
      title: "Advanced Filtering System",
      details: "Multi-dimensional filtering with 7 parameters: name dropdown (autocomplete), chip status, gender, terrain (T1/T2), neutered status, vaccination type, and sponsor. Flexible sorting by name, admission date, or next vaccination."
    },
    {
      title: "Image Optimization Pipeline",
      details: "Multi-photo upload with automatic compression. Auto-resize to 800px width, 60% JPEG quality reducing storage by ~80%. Lightbox gallery with keyboard navigation (arrows, ESC), thumbnail preview strip, and avatar generation for missing photos."
    },
    {
      title: "Design Patterns & Architecture",
      details: "React patterns: Composition over inheritance, render props, controlled components. TypeScript strict mode with interface-first design, type guards, generic types. Code quality: DRY principle, single responsibility, separation of concerns, defensive programming."
    },
    {
      title: "SEO & PWA Features",
      details: "100/100 Lighthouse SEO score. Semantic HTML, meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), sitemap.xml, robots.txt, canonical URLs. Web manifest for native-like installation, responsive design with 44px touch targets, < 3s loading on 3G."
    }
  ];

  const developmentGuidelines = [
    'React 19 with TypeScript strict mode - No implicit any, 100% type coverage',
    'Composition over Inheritance - Reusable Card/Row components with render props',
    'Custom Hooks potential - Filter/sort logic ready for extraction',
    'Controlled Components - All forms with comprehensive validation',
    'Interface-First Design - Clear contracts between components with type guards',
    'Generic Types - Reusable utility types and discriminated unions for type-safe state',
    'DRY Principle - Shared database utilities with consistent naming conventions',
    'Single Responsibility - Each component has one clear job with separation of concerns',
    'Semantic Commits - feat:, fix:, refactor: with atomic, focused commits',
    'Defensive Programming - Input validation, null checks, error boundaries ready'
  ];

  const security = [
    'Firestore Security Rules - Role-based access control with granular permissions',
    'Firebase Authentication - Google Sign-In and Email/Password with session management',
    'User Approval Workflow - First user becomes admin, others require approval',
    'Authentication Required - All operations protected, no anonymous access',
    'XSS Protection - Content Security Policy headers with React built-in escaping',
    'Input Validation - Client and server-side validation on all forms',
    'HTTPS Enforced - Secure connections in production with environment variable protection'
  ];

  const browserSupport = [
    'Chrome/Edge 90+',
    'Firefox 88+',
    'Safari 14+',
    'Mobile browsers (iOS Safari, Chrome Mobile)'
  ];

  const responsiveBreakpoints = [
    'Mobile: < 768px',
    'Tablet: 768px - 1024px',
    'Desktop: > 1024px'
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
            CASE #01 – <span className="evidence-title-accent">THE CATMANAGER</span>
          </h1>
          <p className="evidence-subtitle">
            Tierheim Manager - Professional Animal Shelter Management System
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>React 19</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>TypeScript</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Firebase</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Vite</span>
            <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,77,77,0.1)', color: 'var(--accent-red)', fontSize: '0.875rem', borderRadius: '0.25rem' }}>Tailwind</span>
          </div>
        </div>

        {/* Screenshot Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Cat size={24} />
              Application Screenshot
            </h2>
            <p className="evidence-section-subtitle">The interface in action</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
            <img 
              src="/assets/screenshot_catmanager.JPG" 
              alt="PurrfectManager Application Interface" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="about-portrait__monologue">
              <div className="monologue-box">
                "Tierheim Manager is a production-ready web application designed for animal shelters to efficiently manage their cats and dogs. Built with modern web technologies and best practices, it demonstrates proficiency in full-stack development, cloud services, and user experience design. With Lighthouse scores of 98/100 (desktop) and 92/100 (mobile), it delivers exceptional performance and user experience."
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Zap size={24} />
              Features
            </h2>
            <p className="evidence-section-subtitle">Complete shelter management capabilities</p>
          </div>
          
          <div className="evidence-card comic-panel">
            <div className="evidence-skills">
              {features.map((feature, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Code2 size={24} />
              Technology Stack
            </h2>
            <p className="evidence-section-subtitle">Modern technologies for a robust application</p>
          </div>
          
          <div className="evidence-card comic-panel">
            <h3 className="evidence-card-title" style={{ marginBottom: 'var(--spacing-md)' }}>Frontend Framework</h3>
            <div className="evidence-skills">
              {techStack.frontend.map((tech, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text"><strong>{tech.name}</strong> - {tech.detail}</span>
                </div>
              ))}
            </div>

            <h3 className="evidence-card-title" style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>Styling & UI</h3>
            <div className="evidence-skills">
              {techStack.styling.map((tech, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text"><strong>{tech.name}</strong> - {tech.detail}</span>
                </div>
              ))}
            </div>

            <h3 className="evidence-card-title" style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-md)' }}>Backend & Database</h3>
            <div className="evidence-skills">
              {techStack.backend.map((tech, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text"><strong>{tech.name}</strong> - {tech.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Implementation */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Smartphone size={24} />
              Key Technical Achievements
            </h2>
            <p className="evidence-section-subtitle">Production-ready architecture and optimization</p>
          </div>
          
          <div className="evidence-card comic-panel">
            <div className="evidence-skills">
              {keyImplementations.map((feature, idx) => (
                <div key={idx} className="evidence-skill" style={{ marginBottom: 'var(--spacing-md)' }}>
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text"><strong>{feature.title}:</strong> {feature.details}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Guidelines */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Award size={24} />
              Development Guidelines
            </h2>
            <p className="evidence-section-subtitle">Code quality and best practices</p>
          </div>
          
          <div className="evidence-card comic-panel">
            <div className="evidence-skills">
              {developmentGuidelines.map((guideline, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Considerations */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Shield size={24} />
              Security Considerations
            </h2>
            <p className="evidence-section-subtitle">Protecting data and ensuring safe operations</p>
          </div>
          
          <div className="evidence-card comic-panel">
            <div className="evidence-skills">
              {security.map((item, idx) => (
                <div key={idx} className="evidence-skill">
                  <span className="evidence-skill-bullet">▸</span>
                  <span className="evidence-skill-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browser Compatibility & Responsive Design */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Smartphone size={24} />
              Browser Compatibility & Responsive Design
            </h2>
            <p className="evidence-section-subtitle">Cross-platform support</p>
          </div>
          
          <div className="evidence-grid">
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Browser Support</h3>
              <div className="evidence-skills">
                {browserSupport.map((browser, idx) => (
                  <div key={idx} className="evidence-skill">
                    <span className="evidence-skill-bullet">▸</span>
                    <span className="evidence-skill-text">{browser}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="evidence-card comic-panel">
              <h3 className="evidence-card-title">Responsive Breakpoints</h3>
              <div className="evidence-skills">
                {responsiveBreakpoints.map((breakpoint, idx) => (
                  <div key={idx} className="evidence-skill">
                    <span className="evidence-skill-bullet">▸</span>
                    <span className="evidence-skill-text">{breakpoint}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <div className="evidence-footer-quote">
          <div className="evidence-footer-quote-mark">"</div>
          <p className="evidence-footer-quote-text">
            Die Katzen waren verloren im Labyrinth der Buttons, bis ich die Spuren neu ordnete und ihnen einen Weg durch die Dunkelheit zeigte. Tierheim Manager vereint moderne Webtechnologie mit durchdachtem UX-Design für eine intuitive Tierheimdaten-Verwaltung - ein production-ready System mit Real-time Synchronization, Advanced Filtering, und Type-safe Codebase.
          </p>
          <p className="evidence-footer-signature">— A production-ready solution demonstrating full-stack development excellence</p>
        </div>
      </div>
    </div>
  );
};

export default CatManager;
