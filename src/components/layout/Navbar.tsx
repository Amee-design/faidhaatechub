"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects & Impact", href: "/projects" },
    // Join Us is a button
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-fih-deep-black/80 backdrop-blur-md py-4 shadow-glass" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          {/* Placeholder for Logo Image */}
          <div className="w-10 h-10 bg-fih-hub-blue rounded-full flex items-center justify-center font-bold text-white">
            FH
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wide">
            FAIDHAA <span className="text-fih-hub-blue">HUB</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-fih-hub-blue ${
                pathname === link.href ? "text-fih-hub-blue" : "text-fih-inclusive-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button href="/join" size="sm" variant="primary">
            Join Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-fih-deep-black/95 backdrop-blur-xl p-8 flex flex-col gap-6 shadow-2xl md:hidden"
            >
              <div className="mt-16 flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-fih-hub-blue ${
                      pathname === link.href ? "text-fih-hub-blue" : "text-fih-inclusive-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div onClick={() => setIsOpen(false)}>
                  <Button href="/join" className="w-full">
                    Join Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
