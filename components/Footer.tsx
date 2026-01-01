
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

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
        
        <Link to="/evidence" className="footer__evidence-link">
          <Code2 size={16} />
          <span>View the Evidence</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

