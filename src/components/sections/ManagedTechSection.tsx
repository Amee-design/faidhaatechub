"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import Button from "@/components/ui/Button";
import {
  Activity,
  Cloud,
  Database,
  Gauge,
  GitBranch,
  RefreshCw,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const services = [
  { title: "24/7 System Monitoring & Support", icon: <Activity size={22} /> },
  { title: "Software Maintenance & Updates", icon: <RefreshCw size={22} /> },
  { title: "Bug Fixing & Performance Optimization", icon: <Wrench size={22} /> },
  { title: "Security Patching & Vulnerability Management", icon: <ShieldAlert size={22} /> },
  { title: "Database Optimization & Administration", icon: <Database size={22} /> },
  { title: "DevOps & CI/CD Pipeline Management", icon: <GitBranch size={22} /> },
  { title: "Cloud Infrastructure Management", icon: <Cloud size={22} /> },
  { title: "System Scaling & Uptime Reliability", icon: <Gauge size={22} /> },
];

const ManagedTechSection = () => {
  return (
    <Section background="light" id="managed-tech">
      <SectionHeading
        icon={<Wrench size={18} />}
        eyebrow="Managed Technology & Maintenance"
        title="A Long-Term Technology Operations Partner"
        subtitle="We act as a long-term technology operations partner for organizations, keeping systems secure, current, and reliable."
        light
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <IconCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            index={index}
            light
            accentClassName="bg-fih-hub-blue/10 text-fih-hub-blue"
          />
        ))}
      </div>

      <div className="text-center">
        <Button href="/join" variant="primary" size="lg">
          Partner With Us
        </Button>
      </div>
    </Section>
  );
};

export default ManagedTechSection;
