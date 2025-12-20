
import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">Our Purpose</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Mission & Vision.</h3>
          <div className="w-24 h-px bg-gray-200 mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-12 md:p-16 shadow-sm group hover:shadow-xl transition-shadow duration-500">
            <div className="mb-10 w-16 h-16 bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#e31e24] transition-colors duration-500">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-8 text-gray-900">Our Mission</h4>
            <ul className="space-y-6">
              {[
                "To grow from a strong domestic label and packaging partner into a globally recognized company.",
                "To deliver premium labeling and packaging solutions that enhance brand value.",
                "To meet and exceed global market expectations through consistent innovation."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="w-1.5 h-1.5 bg-[#e31e24] mt-2 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white p-12 md:p-16 shadow-sm group hover:shadow-xl transition-shadow duration-500">
            <div className="mb-10 w-16 h-16 bg-gray-900 text-white flex items-center justify-center group-hover:bg-[#e31e24] transition-colors duration-500">
              <Eye size={32} />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-8 text-gray-900">Our Vision</h4>
            <ul className="space-y-6">
              {[
                "To consistently manufacture premium-quality labels and packaging by adopting international best practices.",
                "To strengthen our capabilities and processes to serve international customers.",
                "Building long-term relationships through reliability, transparency, and customer-focused service."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <span className="w-1.5 h-1.5 bg-[#e31e24] mt-2 rounded-full flex-shrink-0"></span>
                  <span className="text-gray-600 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
