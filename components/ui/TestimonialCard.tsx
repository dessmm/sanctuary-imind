"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarBg: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  avatarBg,
  delay = 0,
}: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white p-8 rounded-3xl border border-outline-variant/10 shadow-sm italic text-on-surface-variant hover-lift"
    >
      <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block not-italic">
        format_quote
      </span>
      <p className="leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
      <div className="mt-auto flex items-center gap-4 not-italic">
        <div className={`w-10 h-10 rounded-full ${avatarBg}`} />
        <div>
          <p className="font-bold text-on-surface">{name}</p>
          <p className="text-xs text-on-surface-variant">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
