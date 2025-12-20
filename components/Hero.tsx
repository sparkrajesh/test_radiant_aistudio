
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="banner.png" 
          className="w-full h-full object-cover opacity-70 scale-100"
          alt="Radiant Labels & Packaging Banner"
          onError={(e) => {
            // Fallback in case the file path or name is incorrect
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl text-white">
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-[1px] w-16 bg-[#e31e24]"></span>
            <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#e31e24]">Global Standards</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif font-bold mb-10 leading-[1.05] tracking-tight">
            Crafting <br />
            <span className="italic font-light opacity-90">Distinction.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl font-light leading-relaxed mb-12 tracking-wide">
            End-to-end branding solutions for the world's leading apparel and lifestyle brands, combining technical precision with aesthetic refinement.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#products" className="bg-[#e31e24] text-white text-center px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500">
              View Portfolio
            </a>
            <a href="#contact" className="border border-white/40 text-white text-center px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-500">
              Inquire Now
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical line and text */}
      <div className="absolute right-12 bottom-0 w-[1px] h-48 bg-white/20 hidden md:block"></div>
      <div className="absolute right-9 bottom-12 text-white/30 text-[9px] tracking-[0.6em] uppercase vertical-text hidden md:block select-none">
        Excellence in Packaging
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
