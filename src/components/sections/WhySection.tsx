"use client";

import React from "react";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Sparkles, MapPin } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const proofPoints = [
  {
    label: "Future Skills",
    detail: "6 hands-on tracks — from coding to 3D animation",
    icon: Sparkles,
    accent: "text-fih-hub-blue",
  },
  {
    label: "Real Impact",
    detail: "25,000+ youth trained across 12 Northern Nigerian states",
    icon: MapPin,
    accent: "text-fih-impact-teal",
  },
];

const WhySection = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content Side */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={item} className="flex items-center gap-2 mb-4">
            <div className="h-[2px] w-12 bg-fih-hub-blue" />
            <span className="text-fih-hub-blue uppercase tracking-widest text-sm font-bold">
              Why We Exist
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-6 leading-tight"
          >
            The Intersection of <span className="text-fih-hub-blue">STEM</span> &{" "}
            <span className="text-fih-impact-teal">Inclusion</span>
          </motion.h2>

          <motion.p variants={item} className="text-fih-silver text-lg mb-5 leading-relaxed">
            At Faidhaa Innovation Hub, we believe technology is the great equalizer.
            We are bridging the gap for women, people with disabilities, and
            underserved youth in Northern Nigeria.
          </motion.p>

          <motion.p variants={item} className="text-fih-silver text-lg mb-8 leading-relaxed">
            From 3D animation to data science, we provide the tools, mentorship,
            and platform to turn potential into impact.
          </motion.p>

          <motion.div variants={item} className="grid grid-cols-2 gap-4 mb-9">
            {proofPoints.map(({ label, detail, icon: Icon, accent }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className={`flex items-center gap-2 mb-2 ${accent}`}>
                  <Icon size={18} />
                  <span className="font-bold text-xs md:text-sm uppercase tracking-wide">
                    {label}
                  </span>
                </div>
                <p className="text-fih-silver text-sm leading-snug">{detail}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <Button href="/about" variant="outline">
              Read Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* Visual Side - Real Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[420px] md:h-[500px] w-full"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-tr from-fih-hub-blue to-fih-impact-teal rounded-3xl opacity-20 transform rotate-3" />

          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/company-images/OIP.webp"
              alt="Secondary school STEM sensitization workshop with students in Kaduna State, Nigeria"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block rounded-full border border-white/20 bg-black/40 backdrop-blur-sm px-4 py-1.5 text-xs md:text-sm text-white font-semibold">
                STEM Sensitization Workshop &mdash; Kaduna State
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default WhySection;
