import React from 'react';

const About: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
      {/* Detective Portrait Panel */}
      <div className="md:col-span-5 comic-panel min-h-[500px] flex flex-col bg-slate-950 border-4 border-black">
        <div className="bg-black p-3 border-b-4 border-black flex justify-between items-center">
            <span className="font-noir-display text-[10px] text-slate-500 uppercase tracking-widest">ID_NO: 7749-B // EVIDENCE_A</span>
            <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#ff3b3b] animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
            </div>
        </div>
        <div className="relative flex-grow overflow-hidden bg-black">
            <img 
              src="assets/about.png" 
              alt="The Detective at Work" 
              className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]"
            />
            {/* Soft shadow to blend image into the frame */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
                <div className="monologue-box text-xs py-2 px-4 shadow-none bg-white/95 border-2 border-black">
                    "Manchmal starrt der Monitor zurück. Und er blinzelt nie."
                </div>
            </div>
        </div>
      </div>

      {/* Narrative Content - File Dossier Style */}
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="relative bg-[#f5f1e8] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
            {/* Paper clips in corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-slate-400 rotate-45 shadow-md"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-400 -rotate-45 shadow-md"></div>
            
            {/* Case File Label */}
            <div className="mb-6">
                <span className="inline-block bg-[#ff3b3b] text-white px-4 py-2 font-noir-display text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Case File #00
                </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-noir-display text-black mb-6 leading-none border-b-4 border-black pb-4">
                THE DETECTIVE
            </h2>
            
            {/* About Text */}
            <div className="mb-8 space-y-4">
                <p className="font-noir-voiceover text-base text-black leading-relaxed">
                    Ich jage keine Geister. Ich jage tote Links, gebrochene Layouts und User, die sich im Dunkeln verloren haben. Designer, Entwickler, Problem-Solver – mit einem Auge für Details und einem zweiten für das große Ganze.
                </p>
                <p className="font-noir-voiceover text-base text-black leading-relaxed">
                    Mein Werkzeug? Klarheit. Mein Ziel? Die absolute Wahrheit des Nutzers. Jedes Projekt ist ein Tatort, den ich säubern muss.
                </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t-2 border-black/20">
                <div>
                    <h4 className="font-noir-display text-[10px] text-black uppercase mb-3 tracking-widest border-b border-black/30 pb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="font-noir-voiceover text-xs text-black bg-white border border-black px-2 py-1">Figma</span>
                        <span className="font-noir-voiceover text-xs text-black bg-white border border-black px-2 py-1">React</span>
                        <span className="font-noir-voiceover text-xs text-black bg-white border border-black px-2 py-1">Tailwind</span>
                        <span className="font-noir-voiceover text-xs text-black bg-white border border-black px-2 py-1">AI</span>
                    </div>
                </div>
                <div>
                    <h4 className="font-noir-display text-[10px] text-black uppercase mb-3 tracking-widest border-b border-black/30 pb-2">Location</h4>
                    <p className="font-noir-voiceover text-sm text-black">Mallorca, Night Shift</p>
                </div>
                <div>
                    <h4 className="font-noir-display text-[10px] text-black uppercase mb-3 tracking-widest border-b border-black/30 pb-2">Focus</h4>
                    <p className="font-noir-voiceover text-sm text-black leading-relaxed">UI/UX, Visual Design, AI-Enhanced Workflows</p>
                </div>
            </div>
            
            {/* Rough edges effect */}
            <div className="absolute inset-0 border-2 border-black/10 pointer-events-none" style={{ clipPath: "polygon(0 2px, 2px 0, 100% 0, 100% calc(100% - 2px), calc(100% - 2px) 100%, 0 100%)" }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;