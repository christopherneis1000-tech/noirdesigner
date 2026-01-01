
import React from 'react';
import { CheckCircle, Folder, Clock } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-panel comic-panel">
        {/* Header */}
        <div className="thankyou-header">
          <div className="thankyou-icon-wrapper">
            <CheckCircle className="thankyou-icon" size={64} />
            <div className="thankyou-icon-glow"></div>
          </div>
          <h2 className="thankyou-title">
            CASE <span className="thankyou-title-accent">RECEIVED</span>
          </h2>
        </div>

        {/* Content */}
        <div className="thankyou-content">
          <p className="thankyou-message">
            "Deine Akte ist bei mir eingegangen. Ich gehe jetzt die Beweise durch und melde mich innerhalb von 48 Stunden."
          </p>

          <div className="thankyou-details">
            <div className="thankyou-detail">
              <Folder className="thankyou-detail-icon" size={20} />
              <div className="thankyou-detail-text">
                <span className="thankyou-detail-label">Status</span>
                <span className="thankyou-detail-value">Under Investigation</span>
              </div>
            </div>

            <div className="thankyou-detail">
              <Clock className="thankyou-detail-icon" size={20} />
              <div className="thankyou-detail-text">
                <span className="thankyou-detail-label">Response Time</span>
                <span className="thankyou-detail-value">24-48 Hours</span>
              </div>
            </div>
          </div>

          <div className="thankyou-quote">
            <div className="thankyou-quote-mark">"</div>
            <p className="thankyou-quote-text">
              Jeder Fall erzählt eine Geschichte. Und ich höre zu, bis ich die Wahrheit kenne.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="thankyou-footer">
          <div className="thankyou-stamp">
            <span className="thankyou-stamp-text">CASE FILED</span>
            <span className="thankyou-stamp-date">{new Date().toLocaleDateString('de-DE')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
