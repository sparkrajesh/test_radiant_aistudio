
import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      name: "John George",
      role: "Chief Operation Officer",
      bio: "An industry veteran with over 20 years of experience in textile manufacturing and operation management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Benjamin Wilson",
      role: "General Manager",
      bio: "Overseeing day-to-day strategic initiatives and ensuring the highest standards of production efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-[#e31e24] mb-4">Our Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">The Organization.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-full aspect-[4/5] overflow-hidden mb-8">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2 uppercase tracking-widest">{member.name}</h4>
              <p className="text-[#e31e24] text-xs uppercase tracking-[0.3em] font-bold mb-6">{member.role}</p>
              <p className="text-gray-500 font-light max-w-xs leading-relaxed italic">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
