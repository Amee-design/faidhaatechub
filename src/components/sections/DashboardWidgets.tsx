"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
  RadialLinearScale,
} from "chart.js";
import { Line,  Radar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function DashboardWidgets() {
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { color: "#D3D3D3" },
      },
      title: {
        display: true,
        text: "Youth Impact Growth",
        color: "#FFFFFF",
      },
    },
    scales: {
      y: {
        ticks: { color: "#D3D3D3" },
        grid: { color: "rgba(211, 211, 211, 0.1)" },
      },
      x: {
        ticks: { color: "#D3D3D3" },
        grid: { color: "rgba(211, 211, 211, 0.1)" },
      },
    },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Youth Trained",
        data: [65, 59, 80, 81, 56, 55, 120],
        fill: true,
        borderColor: "#D3D3D3", // Silver
        backgroundColor: "rgba(211, 211, 211, 0.2)",
        tension: 0.4,
      },
      {
        label: "Placements",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        borderColor: "#FFFFFF", // White
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const radarData = {
    labels: ["Coding", "Design", "Robotics", "Soft Skills", "Data Analysis", "Manufacturing"],
    datasets: [
      {
        label: "Average Skill Profile",
        data: [85, 90, 70, 80, 85, 60],
        backgroundColor: "rgba(211, 211, 211, 0.2)",
        borderColor: "#D3D3D3",
        borderWidth: 1,
      },
      {
        label: "Target Profile",
        data: [90, 85, 80, 90, 90, 80],
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "#FFFFFF",
        borderWidth: 1,
      },
    ],
  };

   const radarOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#D3D3D3" } },
    },
    scales: {
      r: {
        angleLines: { color: "rgba(211, 211, 211, 0.1)" },
        grid: { color: "rgba(211, 211, 211, 0.1)" },
        pointLabels: { color: "#D3D3D3" },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto p-6">
      {/* Glassmorphic Widget 1: Impact Line Chart */}
      <div className="bg-fih-charcoal/30 backdrop-blur-md border border-fih-silver/20 rounded-3xl p-6 shadow-xl">
        <Line options={lineOptions} data={lineData} />
      </div>

      {/* Glassmorphic Widget 2: Skill Profile Radar */}
      <div className="bg-fih-charcoal/30 backdrop-blur-md border border-fih-silver/20 rounded-3xl p-6 shadow-xl flex items-center justify-center">
        <div className="w-full max-w-md">
           <Radar data={radarData} options={radarOptions} />
        </div>
      </div>

      {/* Glassmorphic Widget 3: Heatmap Placeholder */}
      <div className="col-span-1 md:col-span-2 bg-fih-charcoal/30 backdrop-blur-md border border-fih-silver/20 rounded-3xl p-6 shadow-xl">
        <h3 className="text-fih-white font-bold mb-4">Regional Reach Heatmap</h3>
        <div className="h-64 rounded-xl bg-gradient-to-br from-fih-charcoal to-black relative overflow-hidden flex items-center justify-center">
           {/* Abstract Heatmap Representation */}
           <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.4),_transparent_40%),_radial-gradient(circle_at_70%_80%,_rgba(211,211,211,0.4),_transparent_30%)]" />
           <p className="text-fih-silver/50 z-10 font-mono text-sm">Interactive Map Visualization Component</p>
        </div>
        <div className="flex justify-between mt-4 text-xs text-fih-silver">
             <span>Lagos: 12 Hubs</span>
             <span>Kano: 8 Hubs</span>
             <span>Abuja: 10 Hubs</span>
             <span>Enugu: 5 Hubs</span>
        </div>
      </div>
    </div>
  );
}
