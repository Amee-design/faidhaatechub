"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import Chip from "@/components/ui/Chip";
import { Cpu, Globe, MapPin, Rocket } from "lucide-react";

const pillars = [
  {
    title: "How We Work",
    icon: <Cpu size={24} />,
    description:
      "We combine artificial intelligence, machine learning, data analytics, workflow automation, cloud technologies, and user-centered design to simplify complex processes, cut operational costs, and increase productivity.",
  },
  {
    title: "What Sets Us Apart",
    icon: <MapPin size={24} />,
    description:
      "We build affordable, scalable, and locally relevant AI solutions for African markets while maintaining global standards — practical technology grounded in the operational realities of emerging economies.",
  },
  {
    title: "Our Vision",
    icon: <Rocket size={24} />,
    description:
      "To become Africa's leading AI technology company, deploying a suite of AI-powered products that accelerate digital transformation and contribute to sustainable economic development.",
  },
];

const sectors = [
  "Enterprise",
  "Healthcare",
  "Education",
  "Agriculture",
  "Finance",
  "Governance",
  "Logistics",
  "Climate Innovation",
];

const CompanyOverview = () => {
  return (
    <Section>
      <SectionHeading
        icon={<Globe size={18} />}
        eyebrow="Who We Are"
        title="An AI-Powered Innovation Company"
        subtitle="Faidhaa Innovation Hub develops intelligent software, automation tools, and digital platforms that help businesses, governments, startups, NGOs, and educational institutions operate more efficiently, make smarter decisions, and scale sustainably — with practical AI systems customized to each client, not one-size-fits-all solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {pillars.map((pillar, index) => (
          <IconCard
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
            index={index}
            accentClassName="bg-fih-hub-blue/20 text-fih-hub-blue"
          />
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-sm font-bold text-fih-hub-blue uppercase tracking-widest mb-4">
          Sectors We Serve
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector) => (
            <Chip key={sector} label={sector} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CompanyOverview;
