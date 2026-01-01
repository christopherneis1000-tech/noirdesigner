
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
            <iframe
              id="JotFormIFrame-253634992986376"
              title="Contact Form"
              onLoad={() => window.parent.scrollTo(0,0)}
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/253634992986376?isIframeEmbed=1&backgroundColor=000000&textColor=e5e7eb&fontFamily=Special%20Elite&primaryColor=ffffff&secondaryColor=1e293b"
              frameBorder="0"
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '820px',
                border: 'none',
                backgroundColor: 'black'
              }}
              scrolling="no"
            >
            </iframe>
            <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
            <script>window.jotformEmbedHandler("iframe[id='JotFormIFrame-253634992986376']", "https://form.jotform.com/")</script>
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
