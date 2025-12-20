
import React from 'react';

type Page = 'home' | 'about' | 'vision' | 'team' | 'products' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-[#e31e24] flex items-center justify-center font-bold text-white text-sm">R</div>
              <span className="font-bold tracking-widest text-sm uppercase">Radiant Labels & Packaging</span>
            </button>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-light">
              Providing precision labeling and packaging solutions for the world's most demanding lifestyle and fashion brands. Excellence in every stitch and print.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('about')} className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('vision')} className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">Mission & Vision</button></li>
              <li><button onClick={() => onNavigate('products')} className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">Portfolio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('contact')} className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">Contact Us</button></li>
              <li><button className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">Privacy Policy</button></li>
              <li><button className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#e31e24] transition-colors">Terms of Use</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8">
          <div className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-medium mb-4 md:mb-0">
            © 2025 Radiant Labels & Packaging. Crafted for Excellence.
          </div>

          <div className="flex space-x-6">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-[#e31e24] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
