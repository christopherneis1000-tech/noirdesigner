import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Background Image - Noir Illustration */}
      <div 
        className="hero__background"
        style={{ 
          backgroundImage: "url('assets/hero.png')",
        }}
      ></div>
      
      {/* Vignette and Spotlight Effects */}
      <div className="hero__vignette vignette"></div>
      <div className="hero__gradient"></div>
      
      {/* Grain/Noise Overlay */}
      <div className="hero__grain" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}></div>

      {/* Centered Content */}
      <div className="hero__content">
        {/* Small Tag */}
        <span className="hero__tag">
          Digital Noir Portfolio
        </span>
        
        {/* H1 Title */}
        <h1 className="hero__title">
          CASE FILES OF A <br/>
          <span className="hero__title-accent">NOIR DESIGNER</span>
        </h1>
        
        {/* Subline (Voiceover) */}
        <p className="hero__subtitle">
          „In einer Stadt voller schlechtem Design braucht jemand ein Auge für Kontrast und Klarheit."
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="hero__buttons">
          <a 
            href="#cases" 
            className="hero__button-primary"
          >
            View the Case Files
          </a>
          <a 
            href="#" 
            className="hero__button-secondary"
          >
            Download Dossier (CV)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
