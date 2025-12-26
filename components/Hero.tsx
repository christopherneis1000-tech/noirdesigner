import React, { useEffect, useRef } from 'react';

interface Raindrop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetRef = useRef({ x: 50, y: 50, radius: 256 });
  const currentRef = useRef({ x: 50, y: 50, radius: 256 });
  const animationFrameRef = useRef<number>();
  const raindropsRef = useRef<Raindrop[]>([]);
  const mousePixelRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize raindrops (fewer for performance)
    const initRaindrops = () => {
      raindropsRef.current = [];
      const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
      for (let i = 0; i < count; i++) {
        raindropsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 3 + Math.random() * 5,
          length: 15 + Math.random() * 25,
          opacity: 0.15 + Math.random() * 0.25
        });
      }
    };
    initRaindrops();

    const animateRain = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spotlightX = mousePixelRef.current.x;
      const spotlightY = mousePixelRef.current.y;
      const spotlightRadius = currentRef.current.radius;

      raindropsRef.current.forEach((drop) => {
        // Update position
        drop.y += drop.speed;
        
        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }

        // Calculate distance to spotlight
        const dx = drop.x - spotlightX;
        const dy = drop.y - spotlightY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Illuminate drops within spotlight radius
        let brightness = drop.opacity;
        if (distance < spotlightRadius) {
          const illumination = 1 - (distance / spotlightRadius);
          brightness = drop.opacity + (illumination * 0.6);
        }

        // Draw raindrop
        ctx.strokeStyle = `rgba(200, 220, 255, ${brightness})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
      });
    };

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Store pixel coordinates for rain illumination
      mousePixelRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button');
      const radius = isInteractive ? 320 : 256;
      
      targetRef.current = { x, y, radius };
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!heroRef.current) return;
      
      // Update current position with lerping
      currentRef.current = {
        x: lerp(currentRef.current.x, targetRef.current.x, 0.1),
        y: lerp(currentRef.current.y, targetRef.current.y, 0.1),
        radius: lerp(currentRef.current.radius, targetRef.current.radius, 0.15)
      };
      
      // Update CSS variables directly on DOM element (no React re-render)
      heroRef.current.style.setProperty('--spotlight-x', `${currentRef.current.x}%`);
      heroRef.current.style.setProperty('--spotlight-y', `${currentRef.current.y}%`);
      heroRef.current.style.setProperty('--spotlight-radius', `${currentRef.current.radius}px`);
      
      // Animate rain on canvas
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d', { alpha: true });
        if (ctx) {
          const canvas = canvasRef.current;
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const spotlightX = mousePixelRef.current.x;
          const spotlightY = mousePixelRef.current.y;
          const spotlightRadius = currentRef.current.radius;

          raindropsRef.current.forEach((drop) => {
            // Update position
            drop.y += drop.speed;
            
            // Reset if off screen
            if (drop.y > canvas.height) {
              drop.y = -drop.length;
              drop.x = Math.random() * canvas.width;
            }

            // Calculate distance to spotlight
            const dx = drop.x - spotlightX;
            const dy = drop.y - spotlightY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Illuminate drops within spotlight radius
            let brightness = drop.opacity;
            if (distance < spotlightRadius) {
              const illumination = 1 - (distance / spotlightRadius);
              brightness = drop.opacity + (illumination * 0.6);
            }

            // Draw raindrop
            ctx.strokeStyle = `rgba(200, 220, 255, ${brightness})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();
          });
        }
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero"
    >
      {/* Background Image - Noir Illustration */}
      <div 
        className="hero__background"
        style={{ 
          backgroundImage: "url('assets/hero.png')",
        }}
      ></div>
      
      {/* Rain Canvas - in front of background, behind text */}
      <canvas 
        ref={canvasRef}
        className="hero__rain"
      />
      
      {/* Vignette and Spotlight Effects */}
      <div className="hero__vignette vignette"></div>
      <div className="hero__gradient"></div>
      
      {/* SVG Light Beam */}
      <svg className="hero__beam" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ff4d4d', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#ff4d4d', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <polygon 
          className="hero__beam-polygon"
          points="50,0 40,100 60,100"
          fill="url(#beamGradient)"
        />
      </svg>
      
      {/* Scanline Overlay */}
      <div className="hero__scanlines"></div>
      
      {/* Grain/Noise Overlay */}
      <div className="hero__grain" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}></div>

      {/* DIM LAYER - Bottom content with reduced opacity */}
      <div className="hero__content hero__content--dim">
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

      {/* BRIGHT LAYER - Top content with mask */}
      <div className="hero__content hero__content--bright">
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
