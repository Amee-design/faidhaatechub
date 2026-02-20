"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const JourneyTimeline = () => {
  const milestones = [
    { year: "2018", title: "Inception", desc: "Faidhaa Innovation Hub was founded with a mission to bridge the digital divide in Kaduna, Lagos, Kano, Abuja & Ilorin." },
    { year: "2020", title: "First Cohort", desc: "Graduated the first set of 500 students in Basic Digital Literacy and Coding." },
    { year: "2022", title: "Strategic Partnership", desc: "Secured partnership with UNIGO,UNIFPA, International IDEA, WHO, NITDA, UN Human Right to expand training facilities." },
    { year: "2023", title: "Animation Studio", desc: "Launched the Creative Studio to produce indigenous 3D content." },
    { year: "2024", title: "Impact Expansion", desc: "Reached 25,000+ youth across 12 states through hybrid programs." },
    { year: "2026", title: "The Future", desc: "Becoming the premier hub for inclusive innovation in West Africa." },
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          The Faidhaa <span className="text-fih-hub-blue">Journey</span>
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/20 md:-translate-x-1/2" />

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[11px] md:left-1/2 w-5 h-5 bg-fih-hub-blue rounded-full border-4 border-fih-deep-black z-10 md:-translate-x-1/2 mt-1 md:mt-0" />

              {/* Content Box */}
              <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-8">
                 <div className={`glass-card p-6 rounded-xl border border-white/10 hover:border-fih-hub-blue/50 transition-colors ${
                   index % 2 === 0 ? "md:text-left" : "md:text-right"
                 }`}>
                   <span className="text-fih-hub-blue font-bold text-xl mb-1 block">{milestone.year}</span>
                   <h3 className="text-white font-bold text-lg mb-2">{milestone.title}</h3>
                   <p className="text-fih-silver text-sm">{milestone.desc}</p>
                 </div>
              </div>

               {/* Empty Space for the other side */}
               <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default JourneyTimeline;
