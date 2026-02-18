import Image from "next/image";

const partners = [
  { name: "UNICEF", logo: "/partners/unicef.png" },
  { name: "UNIDO", logo: "/partners/unido.png" },
  { name: "NITDA", logo: "/partners/nitda.png" },
  { name: "WHO", logo: "/partners/who.png" },
  { name: "World Bank", logo: "/partners/worldbank.png" },
  { name: "FGN", logo: "/partners/fgn.png" },
  { name: "GIZ", logo: "/partners/giz.png" },
  { name: "Mastercard Foundation", logo: "/partners/mastercard.png" },
];

export default function PartnersGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-fih-black">
          Trusted by Global Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center p-4 hover:bg-fih-silver/10 rounded-xl transition-colors">
              {/* Placeholder for logos */}
              <div className="h-16 w-32 bg-fih-silver/30 flex items-center justify-center rounded text-xs font-bold text-fih-charcoal">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
