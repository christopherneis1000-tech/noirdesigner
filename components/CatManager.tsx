
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cat, Shield, Database, Smartphone, Code2, Zap, Award } from 'lucide-react';

const CatManager: React.FC = () => {
  const overview = {
    intro: "PurrfectManager is a modern, full-featured web application designed to help animal shelters manage their cat inventory, track medical records, handle sponsor relationships, and maintain detailed records. The application provides an intuitive interface with real-time data synchronization and responsive design for desktop and mobile use."
  };

  const features = [
    "🐱 Cat Management: Complete profile management including photos, medical records, and personal information",
    "💉 Vaccination Tracking: Record vaccination history and schedule upcoming vaccinations",
    "💝 Sponsor/Godparent Management: Track sponsor information and relationships with cats",
    "📊 Database Export: Export complete database to JSON format",
    "🔍 Advanced Filtering: Filter cats by terrain, gender, chip status, neutered status, and more",
    "📱 Responsive Design: Fully responsive interface optimized for desktop, tablet, and mobile",
    "🔐 Multi-User Authentication: Secure user authentication system supporting multiple users with individual accounts, session management, and role-based access control for team collaboration",
    "🖼️ Image Management: Upload and compress cat photos with automatic optimization",
    "📅 Date Tracking: Track admission dates, birth dates, and other important dates",
    "🔔 Vaccination Reminders: Visual indicators for upcoming vaccinations"
  ];

  const techStack = {
    frontend: [
      { name: 'React 18.2', detail: 'Modern UI library with hooks and functional components' },
      { name: 'TypeScript 5.2', detail: 'Type-safe JavaScript for improved developer experience and code reliability' },
      { name: 'Vite 5.1', detail: 'Next-generation frontend build tool for fast development and optimized production builds' }
    ],
    styling: [
      { name: 'Tailwind CSS 3.4', detail: 'Utility-first CSS framework for rapid UI development' },
      { name: 'PostCSS 8.4', detail: 'CSS transformations and optimizations' },
      { name: 'Autoprefixer 10.4', detail: 'Automatic CSS vendor prefixing for browser compatibility' },
      { name: 'Lucide React 0.344', detail: 'Beautiful, consistent icon library with 1000+ icons' }
    ],
    backend: [
      { name: 'Back4App', detail: 'Backend-as-a-Service platform built on Parse Server' },
      { name: 'Parse SDK 8.0', detail: 'Real-time database with NoSQL structure, user authentication, cloud functions, file storage, and RESTful/GraphQL APIs' }
    ]
  };

  const keyImplementations = [
    {
      title: "Image Compression",
      details: "Automatic image compression to 800px width, JPEG format with 0.6 quality ratio, Base64 encoding for storage. Reduces storage costs and improves load times."
    },
    {
      title: "Real-time Synchronization",
      details: "Instant updates across all connected clients, Parse Live Query support for real-time data, automatic conflict resolution."
    },
    {
      title: "Filter System",
      details: "Multi-criteria filtering (terrain, gender, chip status, etc.), text search across names and notes, sort by multiple fields (name, admission date, etc.)."
    },
    {
      title: "Export Functionality",
      details: "Complete database export to JSON, includes all cats and sponsors, formatted for easy backup and migration."
    },
    {
      title: "SEO Optimization",
      details: "Comprehensive meta tags (title, description, keywords), Open Graph tags for Facebook sharing, Twitter Card tags, structured data (JSON-LD) for rich search results, robots.txt for search engine crawling, sitemap.xml for better indexing, canonical URLs to prevent duplicate content, PWA manifest for app-like experience."
    }
  ];

  const developmentGuidelines = [
    'Use functional components with React Hooks',
    'TypeScript strict mode enabled',
    'Tailwind CSS for all styling',
    'React useState for local component state',
    'Parse SDK for backend state synchronization',
    'All components are fully typed',
    'Interface definitions in types.ts',
    'Strict TypeScript configuration'
  ];

  const security = [
    'Authentication required for all operations',
    'Parse ACL (Access Control Lists) for data security',
    'Environment variables for sensitive credentials',
    'HTTPS enforced in production',
    'Input validation on all forms',
    'XSS protection through React\'s built-in escaping'
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
            PurrfectManager - Tierheim Management System
          </p>
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
                "PurrfectManager is a modern, full-featured web application designed to help animal shelters manage their cat inventory, track medical records, handle sponsor relationships, and maintain detailed records. The application provides an intuitive interface with real-time data synchronization and responsive design for desktop and mobile use."
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
          
          <div className="evidence-skills">
            {features.map((feature, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{feature}</span>
              </div>
            ))}
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
          
          <div className="evidence-grid">
            {techStack.frontend.map((tech, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Frontend Framework</span>
                </div>
                <h3 className="evidence-card-title">{tech.name}</h3>
                <p className="evidence-card-text">{tech.detail}</p>
              </div>
            ))}
          </div>

          <div className="evidence-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
            {techStack.styling.map((tech, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Styling & UI</span>
                </div>
                <h3 className="evidence-card-title">{tech.name}</h3>
                <p className="evidence-card-text">{tech.detail}</p>
              </div>
            ))}
          </div>

          <div className="evidence-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
            {techStack.backend.map((tech, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Backend & Database</span>
                </div>
                <h3 className="evidence-card-title">{tech.name}</h3>
                <p className="evidence-card-text">{tech.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features Implementation */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Smartphone size={24} />
              Key Features Implementation
            </h2>
            <p className="evidence-section-subtitle">Technical details of core functionality</p>
          </div>
          
          <div className="evidence-grid">
            {keyImplementations.map((feature, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{feature.title}</h3>
                <p className="evidence-card-text">{feature.details}</p>
              </div>
            ))}
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
          
          <div className="evidence-skills">
            {developmentGuidelines.map((guideline, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{guideline}</span>
              </div>
            ))}
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
          
          <div className="evidence-skills">
            {security.map((item, idx) => (
              <div key={idx} className="evidence-skill">
                <span className="evidence-skill-bullet">▸</span>
                <span className="evidence-skill-text">{item}</span>
              </div>
            ))}
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
            Die Katzen waren verloren im Labyrinth der Buttons, bis ich die Spuren neu ordnete und ihnen einen Weg durch die Dunkelheit zeigte. PurrfectManager vereint moderne Webtechnologie mit durchdachtem UX-Design für eine intuitive Tierheimdaten-Verwaltung.
          </p>
          <p className="evidence-footer-signature">— A comprehensive solution for animal shelter management</p>
        </div>
      </div>
    </div>
  );
};

export default CatManager;
