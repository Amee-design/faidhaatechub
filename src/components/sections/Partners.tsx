"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";

const partners = [
  { name: "UNICEF", src: "/partners/unicef.svg" },
  { name: "NITDA", src: "/partners/nitda.png" },
  { name: "WHO", src: "/partners/who.svg" },
  { name: "UNIDO", src: "/partners/unido.svg" },
  { name: "UNFPA", src: "/partners/unfpa.svg" },
  { name: "Federal Ministry of Education", src: "/partners/fme.png" },
  { name: "Google", src: "/partners/google.svg" },
  { name: "Microsoft", src: "/partners/microsoft.svg" },
];

const SPEED_PX_PER_SEC = 40;

const Partners = () => {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (isPaused || shouldReduceMotion) return;

    const trackWidth = trackRef.current?.scrollWidth ?? 0;
    const halfWidth = trackWidth / 2;
    if (!halfWidth) return;

    let next = x.get() - (SPEED_PX_PER_SEC * delta) / 1000;
    if (next <= -halfWidth) next += halfWidth;
    x.set(next);
  });

  return (
    <Section className="py-12 border-y border-white/5 bg-black/40">
      <div className="text-center mb-8">
        <p className="text-fih-silver uppercase tracking-widest text-sm font-bold">
          Trusted by Global Partners
        </p>
      </div>

      <div
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div ref={trackRef} className="flex gap-6 py-2" style={{ x }}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center h-16 w-36 md:w-44 shrink-0 rounded-xl bg-white/95 p-3 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-fih-deep-black to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-fih-deep-black to-transparent z-10" />
      </div>
    </Section>
  );
};

export default Partners;
