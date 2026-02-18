"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Join() {
  return (
    <div className="flex flex-col">
      <Section className="py-20 bg-fih-deep-black text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
          Join the <span className="text-fih-hub-blue">Innovation</span> Ecosystem
        </h1>
        <p className="text-fih-silver max-w-2xl mx-auto text-lg mb-12">
          Whether you want to learn, partner, or innovate, there is a place for you at Faidhaa Hub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-6">
           {/* Training Card */}
           <div className="glass-panel p-10 rounded-3xl text-left hover:border-fih-hub-blue transition-colors group">
             <h3 className="text-2xl font-bold text-white mb-4">Apply for Training</h3>
             <p className="text-fih-silver mb-8 min-h-[50px]">
               Join our next cohort of datascientists, developers, and creatives. Scholarships available for women and PWDs.
             </p>
             <Button href="https://forms.google.com/example" variant="primary" className="group-hover:px-8">
               Start Application <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </div>

           {/* Partner Card */}
           <div className="glass-panel p-10 rounded-3xl text-left hover:border-fih-action-gold transition-colors group">
             <h3 className="text-2xl font-bold text-white mb-4">Become a Partner</h3>
             <p className="text-fih-silver mb-8 min-h-[50px]">
               Collaborate with us to drive impact, sponsor a program, or hire our talent.
             </p>
             <Button href="mailto:partners@faidhaahub.com" variant="secondary" className="group-hover:px-8">
               Contact Partnership Team <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
           </div>
        </div>
      </Section>

      <Section background="light" id="contact" className="py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
               <h2 className="text-3xl font-bold font-display text-fih-deep-black mb-6">Get in Touch</h2>
               <p className="text-fih-charcoal mb-8">
                 Have questions? We'd love to hear from you. Visit our hub or send us a message.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4 text-fih-charcoal">
                    <div className="bg-fih-hub-blue/10 p-3 rounded-full text-fih-hub-blue">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Visit Us</h4>
                      <p>No. 5 Zoo Road, Kano State, Nigeria</p>
                    </div>
                 </div>
                 
                 <div className="flex items-start gap-4 text-fih-charcoal">
                    <div className="bg-fih-hub-blue/10 p-3 rounded-full text-fih-hub-blue">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Email Us</h4>
                      <p>hello@faidhaahub.com</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 text-fih-charcoal">
                    <div className="bg-fih-hub-blue/10 p-3 rounded-full text-fih-hub-blue">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Call Us</h4>
                      <p>+234 800 000 0000</p>
                    </div>
                 </div>
               </div>
            </div>

            <form className="bg-white p-8 rounded-2xl shadow-xl">
               <div className="space-y-4">
                 <div>
                   <label className="block text-sm font-bold text-fih-charcoal mb-2">Name</label>
                   <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-fih-hub-blue focus:border-transparent outline-none" placeholder="Your Name" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-fih-charcoal mb-2">Email</label>
                   <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-fih-hub-blue focus:border-transparent outline-none" placeholder="your@email.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-fih-charcoal mb-2">Message</label>
                   <textarea rows={4} className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-fih-hub-blue focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
                 </div>
                 <Button type="button" className="w-full justify-center">Send Message</Button>
               </div>
            </form>
         </div>
      </Section>
      <AccessibilityWidget />
    </div>
  );
}
