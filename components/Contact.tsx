
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      {/* Spotlight Effect */}
      <div className="contact-spotlight"></div>
      <div className="contact-grain" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}>
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            GOT A <span className="contact-title-accent">CASE</span> FOR ME?
          </h2>
          <p className="contact-subtitle">
            „Neue Brand, verwirrende App oder düsterer Funnel? Schick mir deine Akte."
          </p>
        </div>

        {/* Contact Form Panel */}
        <div className="contact-panel comic-panel">
          <div className="contact-panel__header">
            <span className="contact-panel__title">Open Case File</span>
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__fields">
                <div className="contact-form__field">
                  <label className="contact-form__label">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="contact-form__input"
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Email</label>
                  <input 
                    type="email" 
                    placeholder="your.email@domain.com"
                    className="contact-form__input"
                  />
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell me about your case..."
                    className="contact-form__textarea"
                  ></textarea>
                </div>
              </div>
              
              <button className="contact-form__submit">
                Submit Case
              </button>
            </form>

            {/* Direct Links */}
            <div className="contact-links">
              <p className="contact-links__title">Direct Contact</p>
              <div className="contact-links__list">
                <a 
                  href="mailto:your.email@domain.com" 
                  className="contact-link"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Comic Strip */}
        <div className="contact-footer">
          <div className="contact-footer__content">
            <div className="contact-footer__dot"></div>
            <p className="contact-footer__text">
              "Last seen designing at 3:47 AM."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
