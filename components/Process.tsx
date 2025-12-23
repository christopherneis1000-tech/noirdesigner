
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
    <section className="w-full">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-noir-display text-white tracking-tighter mb-4">
          HOW THE <span className="text-slate-800 uppercase">Detective Works</span>
        </h2>
        <p className="font-noir-voiceover text-slate-400 text-base italic max-w-2xl">
          "Jeder Fall folgt dem gleichen Muster. Nur wer die Schritte kennt, findet die Wahrheit."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="comic-panel border-black bg-[#08080a] flex flex-col">
            {/* Header */}
            <div className="bg-black p-4 border-b-4 border-black">
              <span className="font-noir-display text-[10px] text-slate-600 block mb-1 uppercase tracking-widest">Phase {step.number}</span>
              <h3 className="font-noir-display text-xl text-white leading-tight mb-1">{step.title}</h3>
              <p className="font-noir-voiceover text-[10px] text-slate-500 italic">{step.subtitle}</p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden bg-black h-[200px]">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover brightness-75" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <p className="font-noir-voiceover text-xs text-slate-400 leading-relaxed italic mb-6">
                  "{step.desc}"
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2">
                  {step.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-2">
                      <span className="text-[#ff3b3b] mt-1">▸</span>
                      <span className="font-noir-voiceover text-[11px] text-slate-300 leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Decoration */}
              <div className="mt-6 pt-4 border-t border-slate-900 flex justify-end">
                <div className="w-8 h-1 bg-slate-800"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
