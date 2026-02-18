"use client";

import React from "react";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Heart, Globe, Shield } from "lucide-react";

const ICT4D = () => {
  return (
    <Section id="ict4d">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
          ICT4D & <span className="text-fih-impact-teal">Advocacy</span>
        </h2>
        <p className="text-fih-silver max-w-2xl mx-auto">
          Leveraging technology to solve critical challenges in health, education, and governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-8 rounded-2xl hover:border-fih-impact-teal/50 transition-colors">
           <div className="w-14 h-14 bg-fih-impact-teal/20 rounded-full flex items-center justify-center text-fih-impact-teal mb-6">
             <Heart size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-3">Digital Health</h3>
           <p className="text-fih-silver leading-relaxed">
             Developing telemedicine solutions and health data systems for rural communities. Partnering with WHO and UNFPA.
           </p>
        </div>

        <div className="glass-card p-8 rounded-2xl hover:border-fih-impact-teal/50 transition-colors">
           <div className="w-14 h-14 bg-fih-impact-teal/20 rounded-full flex items-center justify-center text-fih-impact-teal mb-6">
             <Globe size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-3">Education Access</h3>
           <p className="text-fih-silver leading-relaxed">
             Building e-learning platforms to democratize access to quality education for out-of-school children.
           </p>
        </div>

        <div className="glass-card p-8 rounded-2xl hover:border-fih-impact-teal/50 transition-colors">
           <div className="w-14 h-14 bg-fih-impact-teal/20 rounded-full flex items-center justify-center text-fih-impact-teal mb-6">
             <Shield size={32} />
           </div>
           <h3 className="text-xl font-bold text-white mb-3">Gender Advocacy</h3>
           <p className="text-fih-silver leading-relaxed">
             Using data storytelling and digital campaigns to advocate for women's rights and inclusion in policy.
           </p>
        </div>
      </div>
    </Section>
  );
};

export default ICT4D;
