import PartnersGrid from "@/components/sections/PartnersGrid";
import SuccessCarousel from "@/components/sections/SuccessCarousel";

export default function PartnersPage() {
  return (
    <div className="bg-fih-white text-fih-black min-h-screen">
      <div className="py-24 text-center bg-fih-black text-fih-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            Our Ecosystem
          </h1>
          <p className="text-xl text-fih-silver max-w-2xl mx-auto">
            Collaborating with global leaders and local innovators to scale impact.
          </p>
        </div>
      </div>

      <PartnersGrid />
      
      <div className="py-24 bg-fih-silver/10">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Success Stories
        </h2>
        <SuccessCarousel />
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h2 className="text-3xl font-display font-bold mb-8">Join the Network</h2>
         <p className="max-w-2xl mx-auto text-fih-charcoal mb-8">
           Whether you are a donor, industry partner, or tech hub, let's build the future together.
         </p>
         <button className="px-8 py-4 bg-fih-black text-fih-white rounded-full font-bold text-lg hover:bg-fih-charcoal transition-all shadow-lg hover:shadow-xl">
           Partner With Us
         </button>
      </div>
    </div>
  );
}
