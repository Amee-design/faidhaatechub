import Timeline from "@/components/sections/Timeline";
import ProgramCard from "@/components/ui/ProgramCard";
import { Pill, Cpu } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="bg-fih-white text-fih-black min-h-screen">
      <div className="py-24 bg-fih-black text-fih-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            The ETPA™ Pipeline
          </h1>
          <p className="text-xl text-fih-silver max-w-2xl mx-auto">
            From mobilization to mentorship, we build the workforce of tomorrow through a structured, data-driven approach.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Timeline />

        <div className="mt-32">
          <h2 className="text-3xl font-display font-bold text-center mb-16">
            Core Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProgramCard
              title="Pharma Manufacturing"
              description="A specialized curriculum designed with industry giants to train technicians in GMP, quality control, and automated production lines."
              icon={Pill} // Using Pill icon as proxy for Pharma
            />
            <ProgramCard
              title="Health Digital Systems"
              description="Equipping youth with skills in health informatics, telemedicine infrastructure, and cybersecurity for medical data."
              icon={Cpu} // Using CPU icon for Digital Systems
            />
          </div>
        </div>
      </div>
    </div>
  );
}
