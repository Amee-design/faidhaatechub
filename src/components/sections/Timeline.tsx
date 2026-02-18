import { Users, BookOpen, Briefcase, Award } from "lucide-react";

export default function Timeline() {
  const steps = [
    {
      title: "Mobilize",
      description: "Recruiting talents from across 36 states.",
      icon: Users,
    },
    {
      title: "Skill",
      description: "Training in industry-relevant competencies.",
      icon: BookOpen,
    },
    {
      title: "Place",
      description: "Connecting graduates with top employers.",
      icon: Briefcase,
    },
    {
      title: "Mentor",
      description: "Providing ongoing career guidance and support.",
      icon: Award,
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto py-16">
      {/* Central Silver Thread */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-fih-silver transform -translate-x-1/2" />

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-fih-white border-4 border-fih-charcoal rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-fih-silver/30 hover:shadow-md transition-shadow">
                <div className={`flex items-center gap-4 mb-2 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="p-2 bg-fih-charcoal text-white rounded-lg">
                    <step.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-fih-black">{step.title}</h3>
                </div>
                <p className="text-sm text-fih-charcoal/70">{step.description}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
