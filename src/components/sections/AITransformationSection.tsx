"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import Chip from "@/components/ui/Chip";
import {
  Bot,
  Building2,
  Cloud,
  Cpu,
  Database,
  Gauge,
  Layout,
  Network,
  RefreshCw,
  TrendingUp,
  Workflow,
} from "lucide-react";
import {
  SiAngular,
  SiCodeigniter,
  SiCplusplus,
  SiDotnet,
  SiExpress,
  SiFlutter,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRuby,
  SiShopify,
  SiSwift,
  SiSymfony,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

const coreServices = [
  { title: "Digital Transformation Strategy & Execution", icon: <Workflow size={22} /> },
  { title: "Enterprise System Modernization", icon: <Building2 size={22} /> },
  { title: "Cloud Infrastructure Management (AWS, Azure, GCP)", icon: <Cloud size={22} /> },
  { title: "API Integration & System Architecture Redesign", icon: <Network size={22} /> },
  { title: "Business Process Automation (AI + RPA)", icon: <Bot size={22} /> },
  { title: "Legacy System Upgrade & Migration", icon: <RefreshCw size={22} /> },
  { title: "Software Performance Optimization", icon: <Gauge size={22} /> },
  { title: "Continuous System Improvement & Scaling", icon: <TrendingUp size={22} /> },
];

const techStack = [
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "Python", icon: <SiPython /> },
  { label: "Java", icon: <SiOpenjdk /> },
  { label: "PHP", icon: <SiPhp /> },
  { label: "Laravel", icon: <SiLaravel /> },
  { label: "Symfony", icon: <SiSymfony /> },
  { label: "CodeIgniter", icon: <SiCodeigniter /> },
  { label: "Oracle (PL/SQL, Apex, Forms)", icon: <SiOracle /> },
  { label: "C# / .NET Core", icon: <SiDotnet /> },
  { label: "C++", icon: <SiCplusplus /> },
  { label: "Ruby", icon: <SiRuby /> },
  { label: "Go (Golang)", icon: <SiGo /> },
  { label: "Swift (iOS)", icon: <SiSwift /> },
  { label: "Kotlin (Android)", icon: <SiKotlin /> },
  { label: "React", icon: <SiReact /> },
  { label: "Next.js", icon: <SiNextdotjs /> },
  { label: "Vue.js", icon: <SiVuedotjs /> },
  { label: "Angular", icon: <SiAngular /> },
  { label: "Node.js", icon: <SiNodedotjs /> },
  { label: "Express.js", icon: <SiExpress /> },
  { label: "Flutter", icon: <SiFlutter /> },
  { label: "React Native", icon: <SiReact /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "PostgreSQL", icon: <SiPostgresql /> },
  { label: "MSSQL", icon: <Database size={16} /> },
  { label: "MongoDB", icon: <SiMongodb /> },
  { label: "WordPress", icon: <SiWordpress /> },
  { label: "Shopify", icon: <SiShopify /> },
  { label: "CMS Platforms", icon: <Layout size={16} /> },
  { label: "RESTful APIs", icon: <Network size={16} /> },
  { label: "GraphQL", icon: <SiGraphql /> },
];

const AITransformationSection = () => {
  return (
    <Section id="digital-transformation">
      <SectionHeading
        icon={<Cpu size={18} />}
        eyebrow="AI-Powered Digital Transformation"
        title="Managed Technology Services"
        subtitle="We help organizations transition into intelligent, automated, and scalable digital systems."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {coreServices.map((service, index) => (
          <IconCard key={service.title} icon={service.icon} title={service.title} index={index} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-2">
          Supported Technologies & Programming Languages
        </h3>
        <p className="text-fih-silver mb-6 max-w-2xl">
          We develop, troubleshoot, and maintain systems built with the stacks
          below &mdash; specializing in bug fixing, system debugging,
          optimization, and enterprise-grade software maintenance.
        </p>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <Chip key={tech.label} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AITransformationSection;
