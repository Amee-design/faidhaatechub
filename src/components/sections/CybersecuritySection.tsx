"use client";

import React from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import {
  Bug,
  ClipboardCheck,
  Cloud,
  Fingerprint,
  GitBranch,
  HardDrive,
  Lock,
  Monitor,
  Network,
  Radar,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Terminal,
} from "lucide-react";

const coreCybersecurity = [
  { title: "Cybersecurity Risk Assessment & Auditing", icon: <ClipboardCheck size={22} /> },
  { title: "Penetration Testing (Web, Mobile, Cloud, API)", icon: <Terminal size={22} /> },
  { title: "Vulnerability Scanning & Threat Detection", icon: <ScanSearch size={22} /> },
  { title: "Network Security Architecture & Monitoring", icon: <Network size={22} /> },
  { title: "Data Protection & Encryption Systems", icon: <Lock size={22} /> },
  { title: "Identity & Access Management (IAM)", icon: <Fingerprint size={22} /> },
  { title: "Zero-Trust Security Implementation", icon: <ShieldCheck size={22} /> },
  { title: "Incident Response & Cyber Threat Recovery", icon: <Siren size={22} /> },
  { title: "Security Compliance (ISO 27001, GDPR-Ready)", icon: <ClipboardCheck size={22} /> },
  { title: "Firewall Configuration & IPS/IDS", icon: <ShieldAlert size={22} /> },
];

const cyberDefense = [
  { title: "AI-Based Threat Detection Systems", icon: <Radar size={22} /> },
  { title: "Real-Time Security Monitoring Dashboards", icon: <Monitor size={22} /> },
  { title: "Malware, Ransomware & Phishing Protection", icon: <Bug size={22} /> },
  { title: "Secure Cloud Infrastructure Design", icon: <Cloud size={22} /> },
  { title: "Secure DevOps (DevSecOps) Integration", icon: <GitBranch size={22} /> },
  { title: "Endpoint Security Management", icon: <HardDrive size={22} /> },
];

const CybersecuritySection = () => {
  return (
    <Section id="cybersecurity">
      <SectionHeading
        icon={<ShieldCheck size={18} />}
        eyebrow="Advanced Cybersecurity"
        title="Secure by Design, Not Just After Deployment"
        subtitle="End-to-end cybersecurity solutions to protect digital infrastructure, data, applications, and users from modern cyber threats."
      />

      <div className="mb-16">
        <h3 className="text-xl font-bold text-white mb-6">Core Cybersecurity Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCybersecurity.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              index={index}
              accentClassName="bg-fih-impact-teal/20 text-fih-impact-teal"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6">Cyber Defense & Protection Systems</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberDefense.map((item, index) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              index={index}
              accentClassName="bg-fih-hub-blue/20 text-fih-hub-blue"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CybersecuritySection;
