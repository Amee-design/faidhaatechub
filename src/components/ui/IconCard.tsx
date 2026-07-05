"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  accentClassName?: string;
  index?: number;
  className?: string;
  light?: boolean;
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  accentClassName = "bg-fih-hub-blue/20 text-fih-hub-blue",
  index = 0,
  className,
  light = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 6) * 0.05, duration: 0.5 }}
      className={cn(
        light
          ? "bg-white border border-black/5 shadow-sm"
          : "glass-card hover:border-white/20",
        "p-6 rounded-2xl transition-colors",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          accentClassName
        )}
      >
        {icon}
      </div>
      <h4 className={cn("font-bold mb-2", light ? "text-fih-deep-black" : "text-white")}>
        {title}
      </h4>
      {description && (
        <p className={cn("text-sm leading-relaxed", light ? "text-fih-charcoal" : "text-fih-silver")}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default IconCard;
