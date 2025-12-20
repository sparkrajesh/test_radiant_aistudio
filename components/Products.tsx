
import React from 'react';

const Products: React.FC = () => {
  const products = [
    { title: "Woven Labels", desc: "High-definition weave with premium finish.", img: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&q=80&w=800" },
    { title: "Printed Labels", desc: "Vibrant colors on cotton, satin, and taffeta.", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800" },
    { title: "Hang Tags", desc: "Custom shapes and premium cardstock options.", img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800" },
    { title: "Packaging", desc: "Bespoke boxes and sustainable polybags.", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" },
    { title: "Stickers", desc: "Branded decals for versatile applications.", img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800" },
    { title: "Care Labels", desc: "Durable prints with clear wash instructions.", img: "https://images.unsplash.com/photo-1529139572765-397437ef19b2?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">Our Products.</h3>
          </div>
          <div className="max-w-md text-gray-400 text-sm font-light">
            Explore our comprehensive range of branding components designed for global durability and aesthetic appeal.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-white/40 transition-colors duration-500 m-4"></div>
              </div>
              <h4 className="text-xl font-serif font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm font-light tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
