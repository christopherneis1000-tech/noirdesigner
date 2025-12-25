
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "INTERROGATION",
      subtitle: "User-Research, Interviews",
      desc: "Die Stakeholder lügen immer. Ich schaue hinter die Worte, um die wahre Motivation zu finden.",
      image: "/assets/interrogation.png",
      points: [
        "Stakeholder & User Interviews",
        "Pain Point Analysis",
        "Goal Definition & Success Metrics"
      ]
    },
    {
      number: "02",
      title: "CRIME SCENE",
      subtitle: "Audit der aktuellen UI",
      desc: "Ich untersuche die Datenreste. Wo sind die User abgesprungen? Wo liegt die Leiche im Keller?",
      image: "/assets/crimescene.png",
      points: [
        "Heuristic Evaluation",
        "User Flow Analysis",
        "Competitive Benchmarking"
      ]
    },
    {
      number: "03",
      title: "EVIDENCE BOARD",
      subtitle: "Wireframes, Flows",
      desc: "Ich erstelle ein Bild des Täters – äh, des Users. Was treibt ihn an? Was sind seine Ängste?",
      image: "/assets/evidenceboard.png",
      points: [
        "Information Architecture",
        "Low-Fidelity Wireframes",
        "User Flow Mapping"
      ]
    },
    {
      number: "04",
      title: "CLEAN GETAWAY",
      subtitle: "Final Design, Handover",
      desc: "Keine Gnade für schlechte Pixel. Am Ende steht ein Design, das keine Fragen offen lässt.",
      image: "/assets/getaway.png",
      points: [
        "High-Fidelity UI Design",
        "Design System Documentation",
        "Developer Handover & QA"
      ]
    }
  ];

  return (
    <section className="process-section">
      <div className="process-header">
        <h2 className="process-title">
          HOW THE <span className="process-title-accent">Detective Works</span>
        </h2>
        <p className="process-subtitle">
          "Jeder Fall folgt dem gleichen Muster. Nur wer die Schritte kennt, findet die Wahrheit."
        </p>
      </div>

      <div className="process-grid">
        {steps.map((step, idx) => (
          <div key={idx} className="process-step comic-panel">
            {/* Header */}
            <div className="process-step__header">
              <span className="process-step__phase">Phase {step.number}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__subtitle">{step.subtitle}</p>
            </div>

            {/* Image */}
            <div className="process-step__image">
              <img src={step.image} alt={step.title} className="process-step__img" />
              <div className="process-step__image-shadow"></div>
            </div>

            {/* Content */}
            <div className="process-step__content">
              <div>
                <p className="process-step__description">
                  "{step.desc}"
                </p>
                
                {/* Bullet Points */}
                <ul className="process-step__list">
                  {step.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="process-step__item">
                      <span className="process-step__bullet">▸</span>
                      <span className="process-step__text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Decoration */}
              <div className="process-step__footer">
                <div className="process-step__decoration"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

