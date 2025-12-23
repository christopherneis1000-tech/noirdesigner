
import React from 'react';

interface CaseItemProps {
  caseNumber: string;
  title: string;
  category: string;
  year: string;
  image: string;
  voiceover: string;
  role: string;
  stack: string;
  impact?: string;
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
  impact,
  liveLink,
  evidenceLink 
}) => {
  return (
    <div className="w-full border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-16 bg-[#08080a]">
      {/* Header */}
      <div className="bg-black p-4 border-b-4 border-black flex justify-between items-center">
        <h3 className="font-noir-display text-xl md:text-2xl text-white uppercase tracking-tight">
          CASE #{caseNumber} – {title}
        </h3>
        <span className="font-noir-display text-[10px] text-slate-500 border border-slate-800 px-3 py-1 uppercase tracking-wider">
          {category} · {year}
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Project Image */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-black">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale contrast-[1.4] brightness-[0.6] hover:brightness-75 transition-all duration-700"
          />
          {/* Evidence Stamp */}
          <div className="absolute top-6 right-6 bg-[#ff3b3b] text-white font-noir-display text-xs px-4 py-2 rotate-12 shadow-lg border-2 border-black uppercase tracking-wider">
            Evidence A
          </div>
          
          <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] pointer-events-none"></div>
        </div>

        {/* Right: Case Details */}
        <div className="p-8 md:p-10 flex flex-col justify-between bg-[#0a0a0d] border-l-4 border-black">
          <div>
            {/* Voiceover */}
            <div className="mb-8">
              <p className="font-noir-voiceover text-base md:text-lg text-slate-300 leading-relaxed italic">
                "{voiceover}"
              </p>
            </div>
            
            {/* Details List */}
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-slate-800 pl-4">
                <span className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-1">Role</span>
                <span className="font-noir-voiceover text-sm text-white">{role}</span>
              </div>
              
              <div className="border-l-4 border-slate-800 pl-4">
                <span className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-1">Stack</span>
                <span className="font-noir-voiceover text-sm text-white">{stack}</span>
              </div>
              
              {impact && (
                <div className="border-l-4 border-[#ff3b3b] pl-4 bg-black/40 py-3">
                  <span className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-1">Impact</span>
                  <span className="font-noir-voiceover text-sm text-white font-bold">{impact}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white text-black font-noir-display py-4 text-center text-sm hover:bg-slate-200 transition-all border-b-4 border-slate-500 active:border-b-0 active:translate-y-1 uppercase tracking-tight"
              >
                Open Case
              </a>
            )}
            {evidenceLink && (
              <a 
                href={evidenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-4 border-slate-600 text-white font-noir-display py-4 text-center text-sm hover:bg-white/10 transition-all uppercase tracking-tight"
              >
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
      year: "2024",
      image: "assets/catmanager.png",
      voiceover: "Die Katzen waren verloren im Labyrinth der Buttons, bis ich die Spuren neu ordnete und ihnen einen Weg durch die Dunkelheit zeigte.",
      role: "UI/UX, Visual Design",
      stack: "React, Firebase",
      impact: "+35% Conversion / Time-on-page +18%",
      liveLink: "#",
      evidenceLink: "#"
    },
    {
      caseNumber: "02",
      title: "THE CRAZY PAINTER",
      category: "Brand Design",
      year: "2023",
      image: "assets/painter.png",
      voiceover: "Ein kreativer Auftritt ist wie ein Name. Wenn er nichts bedeutet, bist du so gut wie tot. Ich gab dieser Marke eine Show, die man nicht vergisst.",
      role: "Brand Identity, Visual Design",
      stack: "Next.js, Supabase",
      impact: "Brand Recognition +42%",
      liveLink: "#",
      evidenceLink: "#"
    }
  ];

  return (
    <section id="cases" className="w-full">
      <div className="mb-16 flex items-end gap-4">
        <h2 className="text-5xl md:text-6xl font-noir-display text-white tracking-tighter">
          THE <span className="text-slate-800 uppercase">Case Files</span>
        </h2>
        <div className="h-[2px] flex-grow bg-slate-900 mb-2"></div>
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