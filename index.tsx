
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ThankYou from './components/ThankYou';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thankyou" element={
          <div className="app">
            <div className="app__grain" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }}></div>
            <main className="app__main">
              <section className="contact-section">
                <div className="contact-spotlight"></div>
                <div className="contact-grain" 
                     style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E')" }}>
                </div>
                <div className="contact-container">
                  <ThankYou />
                </div>
              </section>
            </main>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);