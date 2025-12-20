
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-50 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=1000" 
              alt="Close up of fabric labels"
              className="w-full h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute bottom-10 -right-10 bg-[#e31e24] p-10 hidden md:block">
              <span className="text-white text-4xl font-serif italic">Quality first.</span>
            </div>
          </div>
          
          <div>
            <div className="mb-12">
              <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">The Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Dedicated to Detail.</h3>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p>
                Radiant Labels & Packaging is a premier provider of branding solutions, offering comprehensive support for global fashion and lifestyle entities. Since our inception, we have stood at the intersection of craftsmanship and industrial capability.
              </p>
              <p>
                Our specialized facilities produce high-definition <span className="text-gray-900 font-medium">woven labels, precision printed labels, luxury hang tags, and sustainable packaging</span>. Each product is a testament to our rigorous quality standards and aesthetic commitment.
              </p>
              <p>
                By working as a strategic partner rather than just a vendor, we ensure that our labeling and packaging align perfectly with our clients' brand narratives, compliance needs, and logistics timelines.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-100 pt-12">
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900">100%</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">In-house QC</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gray-900">Global</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">Standard Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
