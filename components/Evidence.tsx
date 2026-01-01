
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, Code2, Zap, Target, Wrench, Award } from 'lucide-react';

const Evidence: React.FC = () => {
  const designPhilosophy = {
    intro: "The entire website is crafted around a film noir detective theme, transforming a typical portfolio into an immersive storytelling experience. Every design decision—from color choices to typography to micro-interactions—reinforces this narrative.",
    visualIdentity: [
      { aspect: "Color Palette", detail: "Deep blacks (#1a1614), dramatic reds (#ff4d4d), and vintage paper tones" },
      { aspect: "Typography", detail: "Oswald for bold, uppercase headlines (detective case files), Special Elite for typewriter-style narrative text, IBM Plex Mono for technical, code-like elements" },
      { aspect: "Visual Effects", detail: "Film grain overlay for vintage atmosphere, spotlight gradients creating dramatic lighting, comic panel borders with drop shadows (12px offset), rotated elements suggesting hastily assembled case files" }
    ]
  };

  const technologies = [
    { name: 'React 19.2', category: 'Frontend', reason: 'Component-based UI with latest features' },
    { name: 'TypeScript 5.8', category: 'Language', reason: 'Type-safe development' },
    { name: 'Vite 6.2', category: 'Build Tool', reason: 'Lightning-fast build tooling and HMR' },
    { name: 'React Router DOM', category: 'Routing', reason: 'Client-side routing for SPA' },
    { name: 'Pure CSS', category: 'Styling', reason: 'No framework dependencies, custom animations' },
    { name: 'Cloudflare Pages', category: 'Hosting', reason: 'Global CDN distribution' },
  ];

  const features = [
    { 
      title: "Animated Hero Section",
      details: "Parallax-style spotlight effect following scroll, grain texture overlay with blend modes, animated red dot pulse (2s cubic-bezier timing), dramatic entrance animations"
    },
    {
      title: "Interactive Case Studies",
      details: "Comic panel-style cards with hover transformations, scale and glow effects on interaction, glassmorphism overlays with backdrop-filter, organized metadata display (tools, impact, role)"
    },
    {
      title: "Process Timeline",
      details: "Mobile-optimized scroll animations, center-detection for card highlighting, four-phase investigation framework, evidence board aesthetic with pinned photos"
    },
    {
      title: "Dynamic Contact Form",
      details: "Embedded JotForm with custom styling, dark theme integration via URL parameters, mobile-responsive padding adjustments, custom thank you page with routing"
    },
    {
      title: "Animated CTA Button",
      details: "Rotating conic gradient border (2.5s animation), pulsing red glow effect (2s ease-in-out), scale transformation on hover (1.08x), glassmorphism inner content layer"
    },
    {
      title: "Responsive Design",
      details: "Mobile-first approach, breakpoints: 480px, 640px, 768px, 1024px, dynamic font sizing with rem units, touch-optimized interactions"
    }
  ];

  const challenges = [
    {
      problem: 'Form Integration: JotForm\'s default styling clashed with noir theme',
      solution: 'URL parameter injection + custom CSS targeting iframe, maintaining brand consistency across embedded content',
      impact: 'Seamless integration that appears native to the design system'
    },
    {
      problem: 'Button Visual Impact: CTA button not prominent enough',
      solution: 'Layered animation system (rotating gradient + pulsing glow + hover states) while controlling overflow to prevent layout shifts',
      impact: 'Eye-catching focal point that drives user action without jarring the experience'
    },
    {
      problem: 'Mobile Layout Density: Comic panel shadows and padding consumed too much mobile space',
      solution: 'Progressive reduction system - 12px→6px→4px shadows, 3rem→1rem→0.75rem padding across breakpoints',
      impact: 'More content visible on small screens while maintaining visual identity'
    },
    {
      problem: 'Text Readability: Low contrast gray text (#475569) on dark backgrounds',
      solution: 'Comprehensive color audit, upgrading to #a1afc1 and #cbd5e1, plus font size increases (10px→11px, 0.75rem→0.875rem)',
      impact: 'WCAG AA compliant readability without sacrificing aesthetic'
    },
    {
      problem: 'SPA Routing on Cloudflare: Direct URL access to /thankyou returned 404',
      solution: 'Configured not_found_handling: "single-page-application" in wrangler.jsonc for proper SPA fallback behavior',
      impact: 'Users can share and bookmark any route in the application'
    },
  ];

  const cssArchitecture = [
    { 
      category: "Design System", 
      details: "Color tokens (--bg-dark, --accent-red, --text-main), spacing scale (8px base, --spacing-xs to --spacing-6xl), component tokens" 
    },
    { 
      category: "Animation Library", 
      details: "pulse (dot animation), rotate-gradient (360deg border), pulse-glow (shadow intensity), fadeIn (entrance), checkPulse (success), glowPulse (radial glow)" 
    },
    { 
      category: "Component Patterns", 
      details: "Comic Panel base class for card styling, BEM methodology (Block__Element--Modifier), mobile-first (base + min-width queries), CSS Grid auto-fit layouts" 
    }
  ];

  const skills = [
    'Modern React patterns (hooks, composition)',
    'TypeScript for type safety',
    'Client-side routing implementation',
    'Form integration and state management',
    'Responsive design implementation',
    'Performance optimization',
    'Cohesive visual identity creation',
    'Thematic consistency across components',
    'Micro-interactions and animations',
    'Mobile-first responsive strategy',
    'Accessibility considerations (WCAG AA)',
    'Modern build tools (Vite)',
    'Cloudflare Workers/Pages deployment',
    'Git workflow and version control',
    'Asset optimization pipeline',
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
            THE <span className="evidence-title-accent">EVIDENCE</span>
          </h1>
          <p className="evidence-subtitle">
            A dark, atmospheric portfolio demonstrating advanced web development skills, attention to detail in design, and modern frontend architecture.
          </p>
        </div>

        {/* Design Philosophy Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Palette size={24} />
              Design Philosophy
            </h2>
            <p className="evidence-section-subtitle">The narrative behind every pixel</p>
          </div>
          
          <div className="evidence-card comic-panel" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <p className="evidence-card-text" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              {designPhilosophy.intro}
            </p>
          </div>

          <div className="evidence-grid">
            {designPhilosophy.visualIdentity.map((item, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <div className="evidence-card-header">
                  <span className="evidence-card-category">Visual Identity</span>
                </div>
                <h3 className="evidence-card-title">{item.aspect}</h3>
                <p className="evidence-card-text">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Code2 size={24} />
              Technical Stack
            </h2>
            <p className="evidence-section-subtitle">The tools of the trade</p>
          </div>
          
          <div className="evidence-grid">
            {technologies.map((tech, idx) => (
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

        {/* Key Features Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Zap size={24} />
              Key Features
            </h2>
            <p className="evidence-section-subtitle">Interactive elements and animations</p>
          </div>
          
          <div className="evidence-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="evidence-card comic-panel">
                <h3 className="evidence-card-title">{feature.title}</h3>
                <p className="evidence-card-text">{feature.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Target size={24} />
              Design Challenges Solved
            </h2>
            <p className="evidence-section-subtitle">Real problems with documented solutions</p>
          </div>
          
          <div className="evidence-challenges">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="evidence-challenge comic-panel">
                <div className="evidence-challenge-number">#{idx + 1}</div>
                <div className="evidence-challenge-content">
                  <div className="evidence-challenge-row">
                    <span className="evidence-challenge-label">Problem:</span>
                    <span className="evidence-challenge-value">{challenge.problem}</span>
                  </div>
                  <div className="evidence-challenge-row">
                    <span className="evidence-challenge-label">Solution:</span>
                    <span className="evidence-challenge-value">{challenge.solution}</span>
                  </div>
                  <div className="evidence-challenge-row">
                    <span className="evidence-challenge-label">Impact:</span>
                    <span className="evidence-challenge-value evidence-challenge-impact">{challenge.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Architecture Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Wrench size={24} />
              CSS Architecture
            </h2>
            <p className="evidence-section-subtitle">Design system structure</p>
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

        {/* Skills Section */}
        <section className="evidence-section">
          <div className="evidence-section-header">
            <h2 className="evidence-section-title">
              <Award size={24} />
              Skills Demonstrated
            </h2>
            <p className="evidence-section-subtitle">Comprehensive capabilities showcase</p>
          </div>
          
          <div className="evidence-skills">
            {skills.map((skill, idx) => (
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
            This portfolio demonstrates not just technical capability, but storytelling through design. Every element serves the noir narrative—from font choices to animation timing to color harmony. Attention to detail, problem-solving, user-centric thinking, and professional workflow.
          </p>
          <p className="evidence-footer-signature">— Built with pixel perfection and a love for noir aesthetics</p>
        </div>
      </div>
    </div>
  );
};

export default Evidence;
