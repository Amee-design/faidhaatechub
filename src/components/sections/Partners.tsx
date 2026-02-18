"use client";

import React from "react";
import Section from "@/components/ui/Section";

const Partners = () => {
  const partners = [
    "UNICEF", "NITDA", "WHO", "UNIDO", "UNFPA", "Federal Ministry of Education", "Google", "Microsoft"
  ];

  return (
    <Section className="py-12 border-y border-white/5 bg-black/40">
      <div className="text-center mb-8">
        <p className="text-fih-silver uppercase tracking-widest text-sm font-bold">Trusted by Global Partners</p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-16 py-4">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div key={`p1-${index}`} className="flex items-center justify-center min-w-[150px]">
              <span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer font-display">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div key={`p2-${index}`} className="flex items-center justify-center min-w-[150px]">
              <span className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-pointer font-display">
                {partner}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-fih-deep-black to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-fih-deep-black to-transparent z-10" />
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
};

export default Partners;
