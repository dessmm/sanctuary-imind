"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TestimonialCard from "./ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "iMind helped me navigate a very difficult career transition. The psychologist was incredibly patient and provided practical tools that I still use daily.",
    name: "Client A.",
    role: "Counseling Patient",
    avatarBg: "bg-primary-container/20",
    delay: 0,
  },
  {
    quote:
      "Highly professional and confidential. The assessments were thorough and provided a clear roadmap for my child's educational needs.",
    name: "Client M.",
    role: "Parent",
    avatarBg: "bg-secondary-container/20",
    delay: 0.1,
  },
  {
    quote:
      "A sanctuary in the heart of Dumaguete. I felt heard and supported from the very first intake session.",
    name: "Client J.",
    role: "Therapy Patient",
    avatarBg: "bg-tertiary-fixed/20",
    delay: 0.2,
  },
];

export default function TestimonialsSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl font-bold text-center mb-16 font-headline"
        >
          Voices of Peace
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
