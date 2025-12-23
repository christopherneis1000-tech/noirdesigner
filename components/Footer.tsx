
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-32 border-t-8 border-black py-16 bg-[#050507]">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
            <h4 className="font-noir-display text-2xl text-white mb-2 tracking-tighter">NOIR DESIGN STUDIO</h4>
            <p className="font-noir-voiceover text-slate-600 text-[10px] italic max-w-xs">
              "Ich schaltete das Licht aus. Die Stadt draußen brannte immer noch, aber in meinem Büro war es endlich ruhig."
            </p>
        </div>
        
        <div className="flex gap-10">
          <a href="#" className="font-noir-display text-xs text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-white">SOCIAL_CHANNELS</a>
          <a href="#" className="font-noir-display text-xs text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-white">ARCHIVE</a>
        </div>
        
        <div className="text-right">
            <p className="text-slate-800 text-[9px] uppercase font-mono tracking-[0.4em] mb-1">
                ENCRYPTED_CONNECTION_SECURED
            </p>
            <p className="text-slate-500 text-[10px] font-noir-voiceover uppercase">
                © 1954-2024 · THE GUMSHOE
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
