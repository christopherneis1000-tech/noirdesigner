import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about-section">
      {/* Detective Portrait Panel */}
      <div className="about-portrait comic-panel">
        <div className="about-portrait__header">
            <span className="about-portrait__header-text">ID_NO: 7749-B // EVIDENCE_A</span>
            <div className="about-portrait__header-dots">
                <div className="about-portrait__dot about-portrait__dot--active"></div>
                <div className="about-portrait__dot about-portrait__dot--inactive"></div>
            </div>
        </div>
        <div className="about-portrait__image-wrapper">
            <img 
              src="assets/about.webp" 
              alt="Christopher Neis - UI/UX Designer and Full-Stack Developer working at desk" 
              className="about-portrait__image"
            />
            {/* Soft shadow to blend image into the frame */}
            <div className="about-portrait__shadow"></div>
            
            <div className="about-portrait__monologue">
                <div className="monologue-box">
                    "Manchmal starrt der Monitor zurück. Und er blinzelt nie."
                </div>
            </div>
        </div>
      </div>

      {/* Narrative Content - File Dossier Style */}
      <div className="about-narrative">
        <div className="about-dossier">
            {/* Paper clips in corners */}
            <div className="about-dossier__clip about-dossier__clip--left"></div>
            <div className="about-dossier__clip about-dossier__clip--right"></div>
            
            {/* Case File Label */}
            <div className="about-dossier__label">
                <span className="about-dossier__tag">
                    Case File #00
                </span>
            </div>
            
            {/* Heading */}
            <h2 className="about-dossier__heading">
                THE DETECTIVE
            </h2>
            
            {/* About Text */}
            <div className="about-dossier__text">
                <p className="about-dossier__paragraph">
                    Ich jage keine Geister. Ich jage tote Links, gebrochene Layouts und User, die sich im Dunkeln verloren haben. Designer, Entwickler, Problem-Solver – mit einem Auge für Details und einem zweiten für das große Ganze.
                </p>
                
            </div>

            {/* Stats Section */}
            <div className="about-dossier__stats">
                <div>
                    <h4 className="about-dossier__stat-title">Tools</h4>
                    <div className="about-dossier__tools">
                        <span className="about-dossier__tool">Figma</span>
                        <span className="about-dossier__tool">Javascript</span>
                        <span className="about-dossier__tool">React</span>
                        <span className="about-dossier__tool">Datenbanken</span>
                        <span className="about-dossier__tool">AI</span>
                    </div>
                </div>
                <div>
                    <h4 className="about-dossier__stat-title">Location</h4>
                    <p className="about-dossier__stat-content">Mallorca, Night Shift</p>
                </div>
                <div>
                    <h4 className="about-dossier__stat-title">Focus</h4>
                    <p className="about-dossier__stat-content">UI/UX, Visual Design, AI-Enhanced Workflows, Databases, Performance, SEO</p>
                </div>
            </div>
            
            {/* Rough edges effect */}
            <div className="about-dossier__edge"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
