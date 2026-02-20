"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

import { Play } from "lucide-react";

const CreativeStudio = () => {
  return (
    <Section id="studio" background="light">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-fih-deep-black mb-6">
            Creative <span className="text-fih-action-gold">Studio</span>
          </h2>
          <p className="text-fih-charcoal text-lg mb-8 leading-relaxed">
            We tell authentic African stories through world-class animation. Our
            studio produces high-quality 2D/3D content while training the next
            generation of animators.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-fih-charcoal">
              <span className="w-2 h-2 rounded-full bg-fih-action-gold" />
              Tv Commercials & Explainers
            </li>
            <li className="flex items-center gap-3 text-fih-charcoal">
              <span className="w-2 h-2 rounded-full bg-fih-action-gold" />
              3D Character Animation
            </li>
            <li className="flex items-center gap-3 text-fih-charcoal">
              <span className="w-2 h-2 rounded-full bg-fih-action-gold" />
              Visual Effects (VFX)
            </li>
          </ul>

          <Button
            href="/contact"
            variant="outline"
            className="border-fih-deep-black text-fih-deep-black hover:bg-fih-deep-black hover:text-white"
          >
            Hire Our Studio
          </Button>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            {/* Main Video Preview */}
            <div className="col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-[url('/company-images/WhatsApp%20Image%202026-02-19%20at%2011.43.12.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-current" />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="col-span-1 h-40 bg-[url('/company-images/OIP%20(1).webp')] bg-cover bg-center rounded-xl shadow-lg" />
            <div className="col-span-1 h-40 bg-[url('/company-images/OIP%20(2).webp')] bg-cover bg-center rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CreativeStudio;
