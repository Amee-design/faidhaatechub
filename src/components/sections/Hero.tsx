"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";

const h1Lines = [
  "Bridging Technology,",
  "Innovation, and Inclusive",
  "Economic Empowerment.",
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-fih-deep-black py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/company-images/ict-and-computer-empowerment-training-for-women-in-Abuja-Nigeria.png.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-fih-deep-black/70" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/hero-pattern.svg')",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fih-deep-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fih-hub-blue/20 rounded-full blur-[128px] animate-pulse-slow" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 relative z-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fih-hub-blue/30 bg-fih-hub-blue/10 text-fih-hub-blue text-xs md:text-sm uppercase tracking-widest font-bold mb-6"
          >
            Faidhaa Innovation Hub
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
            {h1Lines.map((line, i) => (
              <motion.span key={line} variants={item} className="block">
                {i === 0 ? (
                  <>
                    Bridging{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fih-hub-blue to-sky-300">
                      Technology
                    </span>
                    ,
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-fih-silver mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering Nigeria&apos;s youth through cutting-edge STEM education, creative industries, and sustainable development.
          </motion.p>

          <motion.div variants={item} className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/join" size="lg" className="w-full md:w-auto shadow-neon">
              Join Our Programs
            </Button>
            <Button href="/about" variant="ghost" size="lg" className="w-full md:w-auto">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-fih-silver">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-fih-hub-blue to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
