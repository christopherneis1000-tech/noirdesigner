import React from 'react';
import { ArrowRight, FolderOpen } from 'lucide-react';

/**
 * AIButton - Tech-Noir Edition
 * 
 * Features:
 * - Rectangular sharp-edged design
 * - Rotating conic-gradient "scanner" effect
 * - Glassmorphism inner layer with backdrop-blur
 * - Monospaced (IBM Plex Mono) uppercase typography
 */

interface AIButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const AIButton: React.FC<AIButtonProps> = ({ href, onClick, children, className = '' }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonContent = (
    <>
      {/* Moving Background Gradient */}
      <div className="ai-button__rotating-gradient" />

      {/* Glassmorphism Content Layer */}
      <div className="ai-button__glass">
        <div className="ai-button__content">
          <FolderOpen className="ai-button__icon" size={18} />
          <span className="ai-button__text">{children}</span>
          <ArrowRight className="ai-button__icon" size={18} />
        </div>
      </div>
      
      {/* Subtle Hover Overlay */}
      <div className="ai-button__hover-overlay" />
    </>
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`ai-button ${isHovered ? 'ai-button--hovered' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`ai-button ${isHovered ? 'ai-button--hovered' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
    </button>
  );
};

export default AIButton;
