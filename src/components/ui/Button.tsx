"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const variants = {
      primary: "bg-fih-hub-blue text-white hover:bg-white hover:text-fih-hub-blue border border-transparent hover:border-fih-hub-blue",
      secondary: "bg-fih-impact-teal text-white hover:bg-white hover:text-fih-impact-teal border border-transparent hover:border-fih-impact-teal",
      outline: "bg-transparent border border-fih-hub-blue text-fih-hub-blue hover:bg-fih-hub-blue hover:text-white",
      ghost: "bg-transparent text-fih-inclusive-white hover:text-fih-hub-blue hover:bg-white/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 shadow-md",
      variants[variant],
      sizes[size],
      className
    );

    const MotionComponent = motion.button;
    // Simplify for now, just basic button with framer motion wrapper if needed, but for standard button use standard HTML
    // Integrating Link if href is present

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
