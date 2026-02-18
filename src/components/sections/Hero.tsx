"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-fih-deep-black">
      {/* Background - Video Placeholder / Tech Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fih-deep-black z-10" />
        {/* Abstract Tech Background */}
        <div className="w-full h-full bg-[url('/grid-pattern.svg')] bg-cover bg-center" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fih-hub-blue/30 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fih-impact-teal/30 rounded-full blur-[128px] animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-fih-hub-blue to-fih-impact-teal">Technology</span>, <br />
            Innovation, and Inclusive <br />
            Economic Empowerment.
          </h1>
          
          <p className="text-lg md:text-xl text-fih-silver mb-10 max-w-2xl mx-auto leading-relaxed">
            Empowering Nigeria's youth through cutting-edge STEM education, creative industries, and sustainable development.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/join" size="lg" className="shadow-neon">
              Join Our Programs
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-fih-silver">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fih-hub-blue to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
