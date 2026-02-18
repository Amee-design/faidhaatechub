import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: "default" | "light" | "custom";
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  background = "default",
}) => {
  const backgrounds = {
    default: "bg-fih-deep-black",
    light: "bg-fih-breathable-gray text-fih-deep-black",
    custom: "",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32 w-full overflow-hidden relative",
        backgrounds[background],
        className
      )}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
