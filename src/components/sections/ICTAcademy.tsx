"use client";

import React from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Layout } from "lucide-react";

const ICTAcademy = () => {
  const courses = [
    { title: "Software Development", icon: <Code />, desc: "Full-stack web and mobile app development." },
    { title: "Data Science & AI", icon: <Database />, desc: "Python, Machine Learning, and Data Analytics." },
    { title: "Product Design", icon: <Layout />, desc: "UI/UX Design, Prototyping, and Design Thinking." },
    { title: "Computer Engineering", icon: <Cpu />, desc: "Hardware maintenance and networking." },
  ];

  return (
    <Section id="academy">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            ICT & <span className="text-fih-hub-blue">STEM Academy</span>
          </h2>
          <p className="text-fih-silver text-lg mb-8 leading-relaxed">
            Our academy is built to bridge the skills gap. We offer hands-on, project-based learning that prepares youth for the global job market.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="bg-fih-hub-blue/20 p-3 rounded-lg text-fih-hub-blue">
                  {course.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white">{course.title}</h4>
                  <p className="text-sm text-fih-silver">{course.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button href="/join" variant="primary">Apply Now</Button>
        </div>

        <div className="lg:w-1/2 relative">
           <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             <div className="absolute inset-0 bg-[url('https://placehold.co/800x600/1A1A1A/00AEEF?text=Coding+Class')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
             <div className="relative z-10 p-8 h-[400px] flex items-end bg-gradient-to-t from-black/90 to-transparent">
                <div className="bg-fih-deep-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <code className="text-green-400 text-sm">
                    {`const future = await train(youth);`} <br/>
                    {`if (future.isBright) {`} <br/>
                    {`  impact.scale();`} <br/>
                    {`}`}
                  </code>
                </div>
             </div>
           </div>
           
           {/* Floating elements */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-10 -right-10 bg-fih-deep-black p-4 rounded-xl shadow-xl border border-white/10 hidden md:block"
           >
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">95%</div>
               <div>
                 <p className="text-xs text-fih-silver">Employment Rate</p>
                 <p className="text-sm font-bold text-white">Post-Training</p>
               </div>
             </div>
           </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ICTAcademy;
