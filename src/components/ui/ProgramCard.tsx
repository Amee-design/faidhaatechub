import { LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProgramCard({ title, description, icon: Icon }: ProgramCardProps) {
  return (
    <div className="group relative bg-white p-8 rounded-3xl border border-fih-silver hover:border-fih-charcoal transition-all duration-300 hover:shadow-xl overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={120} className="text-fih-charcoal" />
      </div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-fih-charcoal text-white rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
          <Icon size={24} />
        </div>
        <h3 className="text-2xl font-display font-bold text-fih-black mb-3">{title}</h3>
        <p className="text-fih-charcoal/80 text-sm leading-relaxed text-balance">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-fih-silver to-fih-charcoal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
}
