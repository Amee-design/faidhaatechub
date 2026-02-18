"use client";

import React, { useState, useEffect } from "react";
import { MdAccessibility, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 p-4 glass-panel rounded-xl shadow-2xl min-w-[200px]"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-fih-hub-blue">Accessibility</h4>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-fih-hub-blue">
                <MdClose size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-fih-silver block mb-2">Font Size</label>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setFontSize(Math.max(12, fontSize - 1))}
                    className="p-1 bg-white/10 rounded hover:bg-fih-hub-blue transition-colors"
                  >
                    A-
                  </button>
                  <span className="flex-1 text-center">{fontSize}px</span>
                  <button 
                    onClick={() => setFontSize(Math.min(24, fontSize + 1))}
                    className="p-1 bg-white/10 rounded hover:bg-fih-hub-blue transition-colors"
                  >
                    A+
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={highContrast}
                    onChange={() => setHighContrast(!highContrast)}
                    className="rounded text-fih-hub-blue focus:ring-fih-hub-blue bg-white/10 border-white/20"
                  />
                  <span className="text-sm text-fih-silver">High Contrast</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-fih-hub-blue text-white p-3 rounded-full shadow-lg hover:bg-fih-impact-teal transition-all duration-300 transform hover:scale-110"
        aria-label="Accessibility Menu"
      >
        <MdAccessibility size={28} />
      </button>
    </div>
  );
};

export default AccessibilityWidget;
