
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Cases from './components/Cases';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="w-full max-w-[1100px] px-4 md:px-8 py-12 space-y-24">
        <Hero />
        <About />
        <Cases />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
