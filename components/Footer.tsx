
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div>
            <h4 className="footer__brand-title">NOIR DESIGN STUDIO</h4>
            <p className="footer__brand-quote">
              "Ich schaltete das Licht aus. Die Stadt draußen brannte immer noch, aber in meinem Büro war es endlich ruhig."
            </p>
        </div>
        
        <div className="footer__links">
          <a href="#" className="footer__link">SOCIAL_CHANNELS</a>
          <a href="#" className="footer__link">ARCHIVE</a>
        </div>
        
        <div className="footer__credits">
            <p className="footer__encrypted">
                ENCRYPTED_CONNECTION_SECURED
            </p>
            <p className="footer__copyright">
                © 1954-2024 · THE GUMSHOE
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

