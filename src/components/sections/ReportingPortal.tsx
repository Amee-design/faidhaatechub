"use client";

import { useState } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";

export default function ReportingPortal() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="bg-fih-white p-8 rounded-3xl border border-fih-silver shadow-lg text-center max-w-2xl mx-auto">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600 mb-4" />
        <h3 className="text-2xl font-bold mb-2">Report Submitted Securely</h3>
        <p className="text-fih-charcoal">
          Thank you. Your report has been encrypted and sent to our safeguarding team.
          You will receive a reference number shortly if you provided contact details.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 bg-fih-black text-fih-white rounded-full font-bold hover:bg-fih-charcoal transition-colors"
        >
          Submit Another Report
        </button>
      </div>
    );
  }

  return (
    <section className="bg-fih-silver/10 py-16 px-4 rounded-3xl border border-fih-silver/20 max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-fih-charcoal" />
        <h2 className="text-3xl font-display font-bold text-fih-black text-center">
          Secure Reporting Portal
        </h2>
      </div>
      
      <p className="text-center max-w-2xl mx-auto mb-10 text-fih-charcoal">
        We are committed to a safe, inclusive environment. Use this encrypted form to report 
        any incidents of harassment, discrimination, or exploitation (PSEA).
        <br />
        <span className="font-bold">Your safety is our priority.</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-fih-silver/50 space-y-6">
        <div>
          <label className="block text-sm font-bold text-fih-black mb-2">
            Nature of Incident <span className="text-red-500">*</span>
          </label>
          <select className="w-full p-4 rounded-xl border border-fih-silver bg-fih-white focus:ring-2 focus:ring-fih-black focus:border-transparent transition-all" required>
            <option value="">Select a category...</option>
            <option value="harassment">Harassment / Bullying</option>
            <option value="discrimination">Discrimination (Gender, Disability, etc.)</option>
            <option value="exploitation">Sexual Exploitation or Abuse</option>
            <option value="safety">Safety / Physical Hazard</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-fih-black mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full p-4 rounded-xl border border-fih-silver bg-fih-white focus:ring-2 focus:ring-fih-black focus:border-transparent transition-all h-32"
            placeholder="Please describe what happened, where, and who was involved..."
            required
          />
        </div>

        <div>
           <label className="block text-sm font-bold text-fih-black mb-2">
            Contact Information (Optional)
          </label>
          <div className="flex items-center gap-2 mb-2 text-xs text-fih-charcoal/70">
             <Lock size={12} />
             <span>Leave blank for anonymous reporting.</span>
          </div>
          <input
            type="email"
            placeholder="Email address (securely stored)"
            className="w-full p-4 rounded-xl border border-fih-silver bg-fih-white focus:ring-2 focus:ring-fih-black focus:border-transparent transition-all"
          />
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3 border border-yellow-200">
           <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
           <p className="text-xs text-yellow-800">
             If you or someone else is in immediate danger, please contact local emergency services immediately.
           </p>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-fih-black text-fih-white font-bold rounded-xl hover:bg-fih-charcoal transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Lock size={18} />
          Submit Secure Report
        </button>
      </form>
    </section>
  );
}
