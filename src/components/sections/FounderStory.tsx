"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const FounderStory = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-fih-hub-blue uppercase tracking-widest mb-2">The Visionary</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Ameerah Muhammad Ashir</h3>
          <div className="space-y-6 text-fih-silver text-lg leading-relaxed">
            <p>
              Ameerah is not just a tech leader; she is a catalyst for change. With a deep-rooted passion for inclusivity, she founded Faidhaa Innovation Hub to dismantle barriers in the tech ecosystem.
            </p>
            <p>
              Recognized for her award-winning work in animation and digital advocacy, Ameerah visions a Nigeria where a young girl in Kano has the same opportunities as a developer in Silicon Valley.
            </p>
            <blockquote className="border-l-4 border-fih-action-gold pl-6 py-2 italic text-white/90">
              "Innovation without inclusion is just progress for the privileged. We are building for everyone."
            </blockquote>
          </div>
        </motion.div>

        {/* Story Grid Visuals */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
           <motion.div 
             className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="absolute inset-0 bg-[url('https://placehold.co/800x400/1A1A1A/00AEEF?text=UN+Summit')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                 <span className="text-white font-bold text-sm">Speaking at UN Summit</span>
              </div>
           </motion.div>
           
           <motion.div 
             className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
           >
              <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/1A1A1A/008080?text=Mentorship')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                 <span className="text-white font-bold text-sm">Mentoring Youth</span>
              </div>
           </motion.div>

           <motion.div 
             className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
              <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/1A1A1A/FFD700?text=Awards')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                 <span className="text-white font-bold text-sm">Award Winning</span>
              </div>
           </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FounderStory;
