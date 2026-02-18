import DashboardWidgets from "@/components/sections/DashboardWidgets";

export default function InnovationPage() {
  return (
    <div className="bg-fih-black text-fih-white min-h-screen">
       <div className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
            YOMA+ AIM Dashboard
          </h1>
          <p className="text-xl text-fih-silver max-w-3xl mx-auto">
            Real-time data intelligence driving inclusive innovation and youth placement across Nigeria.
          </p>
        </div>
      </div>

      <div className="pb-24">
        <DashboardWidgets />
      </div>
    </div>
  );
}
