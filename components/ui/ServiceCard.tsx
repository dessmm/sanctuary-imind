"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  gridColumn?: string; // e.g. "span 8 / span 8"
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  iconBg,
  iconColor,
  gridColumn,
  delay = 0,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={gridColumn ? { gridColumn } : undefined}
      className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl flex flex-col justify-between group hover-lift border border-white/50"
    >
      <div>
        <div className="icon-3d-wrapper">
          <div
            className={`w-14 h-14 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center mb-8 icon-3d shadow-sm`}
          >
            <span className="material-symbols-outlined text-3xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 font-headline">{title}</h3>
        <p className="text-on-surface-variant mb-8 max-w-md">{description}</p>
      </div>
      <div className="mt-auto">
        <a
          href="#booking"
          className="inline-flex items-center font-bold text-primary gap-2 group-hover:gap-4 transition-all duration-300"
          aria-label={`Learn more about ${title}`}
        >
          Learn More{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </motion.div>
  );
}
