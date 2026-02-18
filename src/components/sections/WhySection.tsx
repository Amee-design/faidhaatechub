"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const WhySection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-12 bg-fih-hub-blue" />
            <span className="text-fih-hub-blue uppercase tracking-widest text-sm font-bold">Why We Exist</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            The Intersection of <span className="text-fih-impact-teal">STEM</span> & <span className="text-fih-action-gold">Inclusion</span>
          </h2>
          <p className="text-fih-silver text-lg mb-6 leading-relaxed">
            At Faidhaa Innovation Hub, we believe that technology is the great equalizer. We are bridging the gap for women, people with disabilities, and underserved youth in Northern Nigeria.
          </p>
          <p className="text-fih-silver text-lg mb-8 leading-relaxed">
            From 3D animation to data science, we provide the tools, mentorship, and platform to turn potential into impact.
          </p>
          <Button href="/about" variant="secondary">
            Read Our Story
          </Button>
        </motion.div>

        {/* Visual Side - Split Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-fih-hub-blue to-fih-impact-teal rounded-3xl opacity-20 transform rotate-3" />
          
          <div className="absolute inset-0 flex rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-fih-deep-black">
            {/* Left Half - 3D Character (Placeholder) */}
            <div className="w-1/2 relative bg-fih-deep-black flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://placehold.co/600x800/1A1A1A/00AEEF?text=3D+Model')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                 <span className="text-white font-bold">Future Skills</span>
               </div>
            </div>

            {/* Right Half - Real Photo (Placeholder) */}
            <div className="w-1/2 relative bg-gray-800 flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://placehold.co/600x800/2F2F2F/FFFFFF?text=Real+Impact')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                 <span className="text-white font-bold">Real Impact</span>
               </div>
            </div>
            
            {/* Center Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20 transform -translate-x-1/2 z-10" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-fih-deep-black rounded-full p-3 z-20 shadow-xl">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default WhySection;
