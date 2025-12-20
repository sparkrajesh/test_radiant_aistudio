
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Team from './components/Team';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'vision' | 'team' | 'products' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Re-initialize animations for the new page content
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in duration-700">
            <Hero />
            <div className="py-20 bg-white text-center container mx-auto px-6 reveal">
               <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">Welcome</h2>
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">World-Class Labeling Solutions.</h3>
               <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                 Radiant Labels & Packaging provides high-quality, end-to-end branding support for the global apparel industry. We combine technical precision with aesthetic excellence.
               </p>
               <button 
                 onClick={() => setCurrentPage('about')}
                 className="inline-block border border-gray-900 text-gray-900 px-10 py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
               >
                 Explore Our Story
               </button>
            </div>
          </div>
        );
      case 'about':
        return <div className="pt-20 reveal"><About /></div>;
      case 'vision':
        return <div className="pt-20 reveal"><MissionVision /></div>;
      case 'team':
        return <div className="pt-20 reveal"><Team /></div>;
      case 'products':
        return <div className="pt-20 reveal"><Products /></div>;
      case 'contact':
        return <div className="pt-20 reveal"><Contact /></div>;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
