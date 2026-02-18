"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const stories = [
  {
    name: "Amina Yusuf",
    role: "Data Analyst at Paystack",
    location: "Kano",
    quote: "FIH didn't just teach me Python; they gave me the confidence to compete globally. Now I build financial models for Africa's biggest fintech.",
    image: "/stories/amina.jpg",
  },
  {
    name: "Chinedu Okeke",
    role: "Robotics Engineer",
    location: "Enugu",
    quote: "The manufacturing lab gave me hands-on access to CNC machines I only saw on YouTube. I'm now prototyping prosthetics for local hospitals.",
    image: "/stories/chinedu.jpg",
  },
  {
    name: "Fatima Ibrahim",
    role: "Product Designer",
    location: "Lagos",
    quote: "As a woman in tech, I felt isolated until I joined the FIH mentorship circle. The support system is unmatched.",
    image: "/stories/fatima.jpg",
  },
];

export default function SuccessCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr + 1) % stories.length);
  const prev = () => setCurrent((curr) => (curr - 1 + stories.length) % stories.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-16 bg-fih-black text-fih-white rounded-3xl overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-auto bg-fih-charcoal">
           {/* Placeholder for portrait */}
           <div className="w-full h-full bg-fih-charcoal flex items-center justify-center text-fih-silver">
              Portrait of {stories[current].name}
           </div>
        </div>
        
        <div className="p-12 flex flex-col justify-center relative">
          <Quote className="absolute top-8 left-8 text-fih-silver/20 h-16 w-16" />
          
          <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 relative z-10 text-balance">
            "{stories[current].quote}"
          </p>
          
          <div>
            <h4 className="text-2xl font-display font-bold text-fih-white">{stories[current].name}</h4>
            <p className="text-fih-silver">{stories[current].role}</p>
            <p className="text-fih-silver/60 text-sm mt-1">{stories[current].location}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-fih-silver hover:bg-fih-white hover:text-fih-black transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-fih-silver hover:bg-fih-white hover:text-fih-black transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
