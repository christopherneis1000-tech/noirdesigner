
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Cases from './components/Cases';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__grain" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')" }}></div>
      <main className="app__main">
        <div className="app__section">
          <Hero />
        </div>
        <div className="app__section">
          <About />
        </div>
        <div className="app__section">
          <Cases />
        </div>
        <div className="app__section">
          <Process />
        </div>
        <div className="app__section">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
