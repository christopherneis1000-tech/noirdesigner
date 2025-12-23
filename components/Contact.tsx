
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="w-full relative bg-black py-20 overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-900/50 via-black to-black pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}>
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-noir-display text-white mb-6 tracking-tighter leading-none">
            GOT A <span className="text-[#ff3b3b]">CASE</span> FOR ME?
          </h2>
          <p className="font-noir-voiceover text-slate-400 text-lg italic max-w-xl mx-auto">
            „Neue Brand, verwirrende App oder düsterer Funnel? Schick mir deine Akte."
          </p>
        </div>

        {/* Contact Form Panel */}
        <div className="comic-panel border-black bg-[#0a0a0d] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-black p-4 border-b-4 border-black">
            <span className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest">Open Case File</span>
          </div>

          <div className="p-8 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div>
                  <label className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-black border-2 border-slate-800 p-4 text-sm focus:border-slate-600 outline-none text-slate-300 font-noir-voiceover transition-colors"
                  />
                </div>
                <div>
                  <label className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@domain.com"
                    className="w-full bg-black border-2 border-slate-800 p-4 text-sm focus:border-slate-600 outline-none text-slate-300 font-noir-voiceover transition-colors"
                  />
                </div>
                <div>
                  <label className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest block mb-2">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell me about your case..."
                    className="w-full bg-black border-2 border-slate-800 p-4 text-sm focus:border-slate-600 outline-none text-slate-300 font-noir-voiceover resize-none transition-colors"
                  ></textarea>
                </div>
              </div>
              
              <button className="w-full bg-white text-black font-noir-display py-5 text-lg hover:bg-slate-200 transition-all border-b-8 border-slate-500 active:border-b-0 active:translate-y-2 uppercase tracking-tight">
                Submit Case
              </button>
            </form>

            {/* Direct Links */}
            <div className="mt-10 pt-8 border-t-2 border-slate-900">
              <p className="font-noir-display text-[10px] text-slate-600 uppercase tracking-widest mb-4">Direct Contact</p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:your.email@domain.com" 
                  className="border-2 border-slate-700 text-slate-300 font-noir-voiceover text-sm px-4 py-2 hover:bg-white/10 transition-all"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-700 text-slate-300 font-noir-voiceover text-sm px-4 py-2 hover:bg-white/10 transition-all"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-slate-700 text-slate-300 font-noir-voiceover text-sm px-4 py-2 hover:bg-white/10 transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Comic Strip */}
        <div className="mt-12 border-4 border-black bg-[#f5d25f] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#ff3b3b] animate-pulse"></div>
            <p className="font-noir-voiceover text-black text-xs italic">
              "Last seen designing at 3:47 AM."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;