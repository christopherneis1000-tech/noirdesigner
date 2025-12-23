import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden comic-panel rounded-none bg-black border-none shadow-none">
      {/* Background Image - Noir Illustration */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: "url('assets/hero.png')",
        }}
      ></div>
      
      {/* Vignette and Spotlight Effects */}
      <div className="absolute inset-0 vignette pointer-events-none z-10 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70 z-10"></div>
      
      {/* Grain/Noise Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}></div>

      {/* Centered Content */}
      <div className="relative z-20 text-center px-8 max-w-5xl">
        {/* Small Tag */}
        <span className="inline-block font-noir-display text-[10px] tracking-[0.2em] text-slate-400 mb-6 uppercase border border-slate-700 px-4 py-2 bg-black/40 backdrop-blur-sm">
          Digital Noir Portfolio
        </span>
        
        {/* H1 Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-noir-display text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          CASE FILES OF A <br/>
          <span className="text-[#ff3b3b]">NOIR DESIGNER</span>
        </h1>
        
        {/* Subline (Voiceover) */}
        <p className="font-noir-voiceover text-slate-200 text-base md:text-lg mb-12 max-w-2xl mx-auto italic bg-black/50 p-4 backdrop-blur-sm inline-block">
          „In einer Stadt voller schlechtem Design braucht jemand ein Auge für Kontrast und Klarheit."
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#cases" 
            className="bg-white text-black font-noir-display px-10 py-5 hover:bg-slate-200 transition-all text-lg border-b-8 border-slate-500 active:border-b-0 active:translate-y-2 uppercase tracking-tighter text-center"
          >
            View the Case Files
          </a>
          <a 
            href="#" 
            className="border-4 border-slate-400 text-white font-noir-display px-10 py-5 hover:bg-white/10 transition-all text-lg uppercase tracking-tighter backdrop-blur-sm text-center"
          >
            Download Dossier (CV)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;