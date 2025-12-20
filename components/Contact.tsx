
import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10">Get in Touch.</h3>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="mt-1 bg-gray-100 p-4 text-[#e31e24]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Location</h4>
                  <p className="text-xl text-gray-900 font-light">Tirupur, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1 bg-gray-100 p-4 text-[#e31e24]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Phone</h4>
                  <p className="text-xl text-gray-900 font-light">+91 97890 66552</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1 bg-gray-100 p-4 text-[#e31e24]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Email</h4>
                  <p className="text-xl text-gray-900 font-light">radiantlabels@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="mt-1 bg-gray-100 p-4 text-[#e31e24]">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Web</h4>
                  <p className="text-xl text-gray-900 font-light">www.radiantlabels.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 md:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#e31e24] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#e31e24] transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Company</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#e31e24] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 outline-none focus:border-[#e31e24] transition-colors resize-none"></textarea>
              </div>
              <button className="bg-gray-900 text-white w-full py-5 text-xs uppercase tracking-[0.3em] font-bold hover:bg-[#e31e24] transition-all duration-300">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
