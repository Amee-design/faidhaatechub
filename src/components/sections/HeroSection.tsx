import Link from "next/link";
import StatsGrid from "./StatsGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-fih-black text-fih-white">
      {/* Background Image Placeholder - to be replaced with generated asset */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-fih-black via-fih-black/80 to-transparent z-10" />
        {/* <img src="/assets/hero-bg.jpg" alt="Inclusive STEM Lab" className="w-full h-full object-cover" /> */}
        <div className="w-full h-full bg-[url('/hero-pattern.svg')] bg-cover bg-center" /> 
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter">
              Empowering <span className="text-fih-silver">Youth</span>,<br />
              Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-fih-white to-fih-silver">Nigeria’s Future.</span>
            </h1>
            <p className="text-lg text-fih-silver max-w-xl text-balance border-l-2 border-fih-silver pl-6">
              A nationally scalable, inclusive innovation hub aligned with UNICEF and manufacturing ecosystems to bridge the skills gap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="px-8 py-4 bg-fih-white text-fih-black rounded-full font-bold text-lg hover:bg-fih-silver transition-colors duration-200"
              >
                Explore Programs
              </Link>
              <Link
                href="/partners"
                className="px-8 py-4 border border-fih-silver text-fih-silver rounded-full font-bold text-lg hover:bg-fih-silver/10 transition-colors duration-200"
              >
                Our Partners
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <StatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
