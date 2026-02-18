"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, PenTool, BarChart, ChevronDown } from "lucide-react";

const Organogram = () => {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const keyRoles = [
    {
      id: "ceo",
      title: "Founder & CEO",
      name: "Ameerah Muhammad Ashir",
      icon: <User className="w-6 h-6" />,
      desc: "Sets the vision, drives strategic partnerships, and advocates for inclusive tech policies.",
      color: "bg-fih-hub-blue",
    },
    {
      id: "cto",
      title: "Tech Lead / CTO",
      name: "Ibrahim Sani",
      icon: <Code className="w-6 h-6" />,
      desc: "Oversees technical curriculum, software development projects, and infrastructure.",
      color: "bg-fih-impact-teal",
    },
    {
      id: "creative",
      title: "Creative Director",
      name: "Fatima Aliyu",
      icon: <PenTool className="w-6 h-6" />,
      desc: "Leads the animation studio, visual storytelling, and brand identity projects.",
      color: "bg-fih-action-gold",
    },
    {
      id: "program",
      title: "Program Manager",
      name: "Musa Kabir",
      icon: <BarChart className="w-6 h-6" />,
      desc: "Manages day-to-day operations, student cohorts, and impact monitoring.",
      color: "bg-purple-500",
    },
  ];

  return (
    <Section background="light" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-fih-deep-black mb-4">
          Our Leadership
        </h2>
        <p className="text-fih-charcoal max-w-2xl mx-auto">
          The team driving the vision forward. Click to learn more about each role.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {keyRoles.map((role) => (
          <motion.div
            key={role.id}
            layout
            onClick={() => setActiveRole(activeRole === role.id ? null : role.id)}
            className={`cursor-pointer bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
              activeRole === role.id ? "w-full md:w-[600px] ring-2 ring-fih-hub-blue" : "w-64 hover:-translate-y-2 h-80"
            }`}
          >
            <div className={`h-2 ${role.color}`} />
            <div className="p-6 flex flex-col items-center text-center h-full">
               <div className={`w-16 h-16 rounded-full ${role.color}/10 flex items-center justify-center text-fih-deep-black mb-4`}>
                 {role.icon}
               </div>
               <h3 className="font-bold text-xl text-fih-deep-black mb-1">{role.title}</h3>
               <p className="text-fih-charcoal text-sm mb-4">{role.name}</p>
               
               <AnimatePresence>
                 {activeRole === role.id && (
                   <motion.div
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: "auto" }}
                     exit={{ opacity: 0, height: 0 }}
                     className="text-fih-charcoal text-sm mt-4 pt-4 border-t border-gray-100"
                   >
                     <p>{role.desc}</p>
                   </motion.div>
                 )}
               </AnimatePresence>

               {activeRole !== role.id && (
                 <motion.div 
                   animate={{ y: [0, 5, 0] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="mt-auto text-gray-400"
                 >
                   <ChevronDown size={20} />
                 </motion.div>
               )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Organogram;
