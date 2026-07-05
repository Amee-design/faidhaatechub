"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import {
  Bot,
  Brain,
  Building2,
  ChartNoAxesColumn,
  Eye,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  WandSparkles,
  Globe,
} from "lucide-react";

const whatWeBuild = [
  { title: "AI Chatbots & Virtual Assistants", icon: <Bot size={22} /> },
  { title: "Predictive Analytics Systems", icon: <ChartNoAxesColumn size={22} /> },
  { title: "Recommendation Engines", icon: <Sparkles size={22} /> },
  { title: "Computer Vision Applications", icon: <Eye size={22} /> },
  { title: "Natural Language Processing (NLP) Solutions", icon: <MessageSquare size={22} /> },
  { title: "Generative AI Tools (Text, Image, Video, Audio)", icon: <WandSparkles size={22} /> },
  { title: "AI Dashboards & Automation Platforms", icon: <LayoutDashboard size={22} /> },
  { title: "SaaS AI Products", icon: <Rocket size={22} /> },
  { title: "Enterprise AI Integrations", icon: <Building2 size={22} /> },
];

const productDevelopment = [
  { title: "iOS & Android Mobile Applications", icon: <Smartphone size={22} /> },
  { title: "Web Applications (SaaS, Dashboards, Portals)", icon: <Globe size={22} /> },
  { title: "Learning Management Systems (LMS)", icon: <GraduationCap size={22} /> },
  { title: "E-Commerce Platforms", icon: <ShoppingCart size={22} /> },
  { title: "Government & Enterprise Digital Systems", icon: <Landmark size={22} /> },
  { title: "API-Driven Backend Infrastructures", icon: <Server size={22} /> },
  { title: "MVP Development & Product Scaling", icon: <Rocket size={22} /> },
];

const AIProductsSection = () => {
  return (
    <Section background="light">
      <SectionHeading
        icon={<Brain size={18} />}
        eyebrow="AI Development & Intelligent Systems"
        title="Products That Think & Scale"
        subtitle="We design and build AI-powered digital products and intelligent platforms."
        light
      />

      <div className="mb-16">
        <h3 className="text-xl font-bold text-fih-deep-black mb-6">What We Build</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeBuild.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              index={index}
              light
              accentClassName="bg-fih-hub-blue/10 text-fih-hub-blue"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-fih-deep-black mb-6">Product Development</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productDevelopment.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              index={index}
              light
              accentClassName="bg-fih-impact-teal/10 text-fih-impact-teal"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AIProductsSection;
