"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";

const ProjectPortfolio = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const projects = [
    {
      id: 1,
      title: "Digital Health Initiative",
      client: "WHO / UNFPA",
      desc: "A telemedicine platform connecting rural health workers with specialists.",
      image: "https://placehold.co/800x600/1A1A1A/00AEEF?text=Digital+Health",
      color: "border-fih-hub-blue",
    },
    {
      id: 2,
      title: "Pharma Tech Transformation",
      client: "UNIDO",
      desc: "Digitizing pharmaceutical production lines for local manufacturers.",
      image: "https://placehold.co/800x600/1A1A1A/008080?text=Pharma+Tech",
      color: "border-fih-impact-teal",
    },
    {
      id: 3,
      title: "Inclusive STEM Fellowship",
      client: "Faidhaa Internal",
      desc: "A 6-month intensive bootcamp for women and PWDs in Data Science.",
      image: "https://placehold.co/800x600/1A1A1A/FFD700?text=STEM+Fellowship",
      color: "border-fih-action-gold",
    },
    {
       id: 4,
       title: "Agro-Tech Solutions",
       client: "Local Farmers Co-op",
       desc: "IoT sensors for soil monitoring and crop yield optimization.",
       image: "https://placehold.co/800x600/1A1A1A/4ADE80?text=Agro+Tech",
       color: "border-green-400",
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-fih-deep-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-16">
           {/* Intro Card */}
           <div className="min-w-[400px] md:min-w-[600px] flex flex-col justify-center">
             <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
               Our <br/> <span className="text-fih-impact-teal">Impact</span> <br/> Projects
             </h2>
             <p className="text-fih-silver text-xl mb-8">
               Scroll to explore how we are changing lives through technology.
             </p>
             <div className="flex gap-2">
               <div className="w-12 h-1 bg-white/20 rounded-full animate-pulse" />
               <div className="w-4 h-1 bg-white/20 rounded-full" />
               <div className="w-4 h-1 bg-white/20 rounded-full" />
             </div>
           </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-3xl border-2 ${project.color} bg-fih-charcoal`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                <span className="text-fih-silver uppercase tracking-widest text-sm font-bold mb-2">
                  {project.client}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/80 text-lg max-w-xl mb-8">
                  {project.desc}
                </p>
                <Button href={`/projects/${project.id}`} variant="outline" className="w-fit">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
