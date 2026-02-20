"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import AccessibilityWidget from "@/components/ui/AccessibilityWidget";
import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Globe } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const stats = [
    { number: "15+", label: "Active Projects", icon: Globe },
    { number: "10k+", label: "Lives Impacted", icon: Users },
    { number: "4", label: "Program Areas", icon: Zap },
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Health Initiative",
      client: "WHO / UNFPA",
      category: "healthcare",
      desc: "A telemedicine platform connecting rural health workers with specialists in underserved areas.",
      impact: "Connected 500+ rural clinics",
      image: "/company-images/R.jpeg",
      color: "from-fih-hub-blue/30 to-fih-hub-blue/10",
      status: "Active",
      year: "2024",
    },
    {
      id: 2,
      title: "Pharma Tech Transformation",
      client: "UNIDO",
      category: "technology",
      desc: "Digitizing pharmaceutical production lines for local manufacturers to improve quality control.",
      impact: "Supported 12 manufacturers",
      image: "/company-images/OIP%20(1).webp",
      color: "from-fih-impact-teal/30 to-fih-impact-teal/10",
      status: "Active",
      year: "2023",
    },
    {
      id: 3,
      title: "Inclusive STEM Fellowship",
      client: "Faidhaa Internal",
      category: "education",
      desc: "A 6-month intensive bootcamp for women and persons with disabilities in Data Science.",
      impact: "80% job placement rate",
      image:
        "/company-images/ict-and-computer-empowerment-training-for-women-in-Abuja-Nigeria.png.webp",
      color: "from-fih-action-gold/30 to-fih-action-gold/10",
      status: "Active",
      year: "2024",
    },
    {
      id: 4,
      title: "Agro-Tech Solutions",
      client: "Local Farmers Co-op",
      category: "agriculture",
      desc: "IoT sensors for soil monitoring and crop yield optimization for smallholder farmers.",
      impact: "Increased yields by 45%",
      image: "/company-images/OIP%20(2).webp",
      color: "from-green-400/30 to-green-400/10",
      status: "Active",
      year: "2024",
    },
    {
      id: 5,
      title: "Creative Studio Training",
      client: "Faidhaa Internal",
      category: "creative",
      desc: "World-class animation and 3D content production training for African animators.",
      impact: "Trained 50+ animators",
      image:
        "/company-images/WhatsApp%20Image%202026-02-19%20at%2011.43.12.jpeg",
      color: "from-fih-hub-blue/30 to-fih-action-gold/10",
      status: "Active",
      year: "2024",
    },
    {
      id: 6,
      title: "Community Tech Hub",
      client: "Faidhaa Internal",
      category: "community",
      desc: "Establishing digital access centers in underserved communities across Northern Nigeria.",
      impact: "2 hubs operational",
      image: "/company-images/OIP.webp",
      color: "from-fih-impact-teal/30 to-fih-hub-blue/10",
      status: "In Planning",
      year: "2025",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: 6 },
    { id: "healthcare", label: "Healthcare", count: 1 },
    { id: "technology", label: "Technology", count: 2 },
    { id: "education", label: "Education", count: 1 },
    { id: "agriculture", label: "Agriculture", count: 1 },
    { id: "creative", label: "Creative", count: 1 },
    { id: "community", label: "Community", count: 1 },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="py-20 md:py-32 bg-fih-deep-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fih-hub-blue rounded-full blur-[128px] animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-fih-impact-teal rounded-full blur-[128px] animate-pulse-slow delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fih-hub-blue to-fih-impact-teal">
                Impact
              </span>{" "}
              Projects
            </h1>
            <p className="text-fih-silver text-xl md:text-2xl mb-8 leading-relaxed">
              Transforming lives across healthcare, technology, education, and
              agriculture through innovative solutions.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="py-16 bg-fih-charcoal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-fih-hub-blue/50 transition-colors"
              >
                <Icon className="w-8 h-8 text-fih-hub-blue mx-auto mb-3" />
                <p className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-fih-silver text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Category Filter */}
      <Section className="py-12 bg-fih-deep-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-fih-hub-blue to-fih-impact-teal text-white shadow-lg shadow-fih-hub-blue/50"
                    : "bg-white/10 text-fih-silver border border-white/20 hover:border-fih-hub-blue/50"
                }`}
              >
                {cat.label}{" "}
                <span className="ml-2 text-sm opacity-70">({cat.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="py-20 bg-fih-charcoal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="relative overflow-hidden rounded-2xl h-[400px] bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-fih-hub-blue/20">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${project.color} group-hover:opacity-80 opacity-60 transition-opacity`}
                  />

                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        project.status === "Active"
                          ? "bg-green-500/30 text-green-300 border border-green-400"
                          : "bg-yellow-500/30 text-yellow-300 border border-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="mb-3">
                      <p className="text-fih-silver text-xs uppercase tracking-widest font-bold mb-1">
                        {project.client}
                      </p>
                      <p className="text-white/60 text-xs">{project.year}</p>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-fih-hub-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-4 line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="mb-4 p-3 bg-white/10 rounded-lg border border-white/20">
                      <p className="text-fih-action-gold text-xs font-bold uppercase tracking-wider">
                        Impact: {project.impact}
                      </p>
                    </div>

                    <Button
                      href={`/projects/${project.id}`}
                      variant="outline"
                      className="w-full justify-center text-xs group/btn"
                    >
                      View Case Study{" "}
                      <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-fih-silver text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-fih-deep-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-fih-hub-blue rounded-full blur-[128px] animate-pulse-slow" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-fih-silver text-lg mb-8 leading-relaxed">
              Partner with us to bring your innovation to life. From concept to
              implementation, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/join" size="lg" className="shadow-neon">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button href="/join?tab=contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      <AccessibilityWidget />
    </div>
  );
}
