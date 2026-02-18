import ReportingPortal from "@/components/sections/ReportingPortal";

export default function InclusionPage() {
  return (
    <div className="bg-fih-white text-fih-black min-h-screen">
      <div className="py-24 bg-fih-silver/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="font-display font-bold text-5xl mb-6">
              Inclusion & Safeguarding
            </h1>
            <p className="text-lg text-fih-charcoal leading-relaxed max-w-xl">
              At FIH, we believe innovation flourishes only in safe, inclusive environments. 
              We are dedicated to the Protection from Sexual Exploitation and Abuse (PSEA) 
              and ensuring full accessibility for Persons with Disabilities (PWDs).
            </p>
          </div>
          <div className="flex-1 relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
             {/* Placeholder for inclusive workshop image */}
             <div className="absolute inset-0 bg-fih-charcoal flex items-center justify-center text-fih-silver">
                <span className="font-bold text-xl">Accessible Workshop Image Placeholder</span>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-fih-black text-fih-white p-8 rounded-3xl">
                <h3 className="font-bold text-2xl mb-4">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-fih-silver" />
                    <span>Zero tolerance for harassment</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-fih-silver" />
                    <span>Full PWD accessibility in all hubs</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-fih-silver" />
                    <span>Women-led mentorship circles</span>
                  </li>
                </ul>
             </div>
          </div>
          <div className="lg:col-span-2">
             <ReportingPortal />
          </div>
        </div>
      </div>
    </div>
  );
}
