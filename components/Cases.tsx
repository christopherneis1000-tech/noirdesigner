
import React from 'react';
import AIButton from './AIButton';
import { Search } from 'lucide-react';

interface CaseItemProps {
  caseNumber: string;
  title: string;
  category: string;
  year: string;
  image: string;
  voiceover: string;
  role: string;
  stack: string;
  mission?: string;
  liveLink?: string;
  evidenceLink?: string;
}

const CaseItem: React.FC<CaseItemProps> = ({ 
  caseNumber, 
  title, 
  category, 
  year, 
  image, 
  voiceover, 
  role, 
  stack, 
  mission,
  liveLink,
  evidenceLink 
}) => {
  return (
    <div className="case-item">
      {/* Header */}
      <div className="case-item__header">
        <h3 className="case-item__title">
          CASE #{caseNumber} – {title}
        </h3>
        <span className="case-item__meta">
          {category} · {year}
        </span>
      </div>

      {/* Main Content */}
      <div className="case-item__content">
        {/* Left: Project Image */}
        <div className="case-item__image-wrapper">
          <img 
            src={image} 
            alt={`${title} - ${category} project showcasing ${role}`}
            className="case-item__image"
          />
          {/* Evidence Stamp */}
          <div className="case-item__evidence">
            Evidence A
          </div>
          
          {/* Yellow box for case 03 */}
          {caseNumber === "03" && (
            <div className="about-portrait__monologue">
              <div className="monologue-box">
                "Wieviele Zähne hast du, Batman?"
              </div>
            </div>
          )}
          
          <div className="case-item__image-shadow"></div>
        </div>

        {/* Right: Case Details */}
        <div className="case-item__details">
          <div>
            {/* Voiceover */}
            <div className="case-item__voiceover">
              <p className="case-item__voiceover-text">
                "{voiceover}"
              </p>
            </div>
            
            {/* Details List */}
            <div className="case-item__info">
              <div className="case-item__info-item">
                <span className="case-item__info-label">Role</span>
                <span className="case-item__info-value">{role}</span>
              </div>
              
              <div className="case-item__info-item">
                <span className="case-item__info-label">Stack</span>
                <span className="case-item__info-value">{stack}</span>
              </div>
              
              {mission && (
                <div className="case-item__info-item case-item__impact">
                  <span className="case-item__info-label">Mission</span>
                  <span className="case-item__impact-value">{mission}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="case-item__buttons">
            {liveLink && (
              <AIButton href={liveLink}>
                Open Case
              </AIButton>
            )}
            {evidenceLink && (
              <a 
                href={evidenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="case-item__secondary-button"
              >
                <Search size={14} />
                More Evidence
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const cases: CaseItemProps[] = [
    {
      caseNumber: "01",
      title: "THE MISSING CAT MANAGER",
      category: "UI/UX",
      year: "2025",
      image: "assets/catmanager.webp",
      voiceover: "Die Katzen waren verloren im Labyrinth der Buttons, bis ich die Spuren neu ordnete und ihnen einen Weg durch die Dunkelheit zeigte.",
      role: "UI/UX, Visual Design",
      stack: "React, Firebase",
      mission: "Multiuser-Verwaltung für ein Tierheim",
      liveLink: "https://catmanager.vercel.app/",
      evidenceLink: "#"
    },
    {
      caseNumber: "02",
      title: "THE CRAZY PAINTER",
      category: "Brand Design",
      year: "2025",
      image: "assets/crazypainter.webp",
      voiceover: "Ein kreativer Auftritt ist wie ein Name. Wenn er nichts bedeutet, bist du so gut wie tot. Ich gab dieser Marke eine Show, die man nicht vergisst.",
      role: "Brand Identity, Visual Design",
      stack: "Next.js, Supabase",
      mission: "Showcase der Bilder einer Malerin mit Backend zur Selbstverwaltung",
      liveLink: "https://painter-bice.vercel.app/",
      evidenceLink: "#"
    },
    {
      caseNumber: "03",
      title: "THE HUNGARIAN TOOTHFAIRY",
      category: "Animation",
      year: "2025",
      image: "assets/toothfairy.webp",
      voiceover: "Immer in Bewegung bleiben. Sonst kann es dich mehr kosten als nur ein paar Zähne.",
      role: "Web Design, Animation",
      stack: "React, FireBase, Scroll Animation",
      mission: "Proof of concept OnScroll Parallax Animation",
      liveLink: "https://cnpersonal.christopherneis1000.workers.dev/",
      evidenceLink: "#"
    }
  ];

  return (
    <section id="cases" className="cases-section">
      <div className="cases-header">
        <h2 className="cases-title">
          THE <span className="cases-title-accent">Case Files</span>
        </h2>
        <div className="cases-divider"></div>
      </div>
      <div>
        {cases.map((c) => (
          <CaseItem key={c.caseNumber} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Cases;
