"use client";

import React from "react";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowRight, Code, Video, Users, Globe } from "lucide-react";

const Competencies = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          Core <span className="text-fih-hub-blue">Competencies</span>
        </h2>
        <p className="text-fih-silver max-w-2xl mx-auto">
          Our multifaceted approach to innovation and development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Large Item - ICT Academy */}
        <motion.div 
          className="md:col-span-2 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-fih-hub-blue/50 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="bg-fih-hub-blue/20 w-12 h-12 rounded-xl flex items-center justify-center text-fih-hub-blue mb-4">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">ICT & STEM Academy</h3>
              <p className="text-fih-silver mb-4">Comprehensive training in Coding, Data Science, and Hardware.</p>
              <Button href="/services" variant="ghost" size="sm" className="pl-0 gap-2 hover:bg-transparent hover:text-white">
                Explore Academy <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
             <div className="w-full h-full bg-gradient-to-l from-fih-hub-blue/20 to-transparent" />
             {/* Abstract Code graphic placeholder */}
          </div>
        </motion.div>

        {/* Tall Item - Creative Studio */}
        <motion.div 
          className="md:col-span-1 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-fih-action-gold/50 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-0" />
           {/* Background Image Placeholder */}
           <div className="absolute inset-0 bg-[url('https://placehold.co/400x800/1A1A1A/FFD700?text=Animation')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
           
           <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="bg-fih-action-gold/20 w-12 h-12 rounded-xl flex items-center justify-center text-fih-action-gold mb-4">
              <Video size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Creative Studio</h3>
            <p className="text-fih-silver mb-4">2D/3D Animation & Visual Storytelling.</p>
             <Button href="/services" variant="ghost" size="sm" className="pl-0 gap-2 hover:bg-transparent hover:text-white text-fih-action-gold">
                View Gallery <ArrowRight size={16} />
              </Button>
          </div>
        </motion.div>

        {/* Medium Item - ICT4D */}
        <motion.div 
          className="md:col-span-1 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-fih-impact-teal/50 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="bg-fih-impact-teal/20 w-12 h-12 rounded-xl flex items-center justify-center text-fih-impact-teal mb-4">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">ICT4D & Advocacy</h3>
              <p className="text-fih-silver mb-4">Technology for social good.</p>
            </div>
          </div>
        </motion.div>

        {/* Medium Item - Inclusion */}
        <motion.div 
          className="md:col-span-1 row-span-1 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/50 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Inclusion First</h3>
              <p className="text-fih-silver mb-4">Empowering women & PWDs.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

export default Competencies;
