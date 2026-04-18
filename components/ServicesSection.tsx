"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ui/ServiceCard";

const services = [
  {
    icon: "forum",
    title: "Counseling",
    description:
      "Professional support for personal growth, navigations of life transitions, and emotional regulation in a safe environment.",
    iconBg: "bg-primary-container/20",
    iconColor: "text-primary",
    gridColumn: "span 8 / span 8",
    delay: 0,
  },
  {
    icon: "psychology",
    title: "Psychotherapy",
    description:
      "Evidence-based therapy for clinical mental wellness concerns including anxiety and depression.",
    iconBg: "bg-secondary-container/30",
    iconColor: "text-secondary",
    gridColumn: "span 4 / span 4",
    delay: 0.1,
  },
  {
    icon: "clinical_notes",
    title: "Psychological Assessment",
    description:
      "Comprehensive testing and evaluation for academic, career, or clinical diagnostics.",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
    gridColumn: "span 5 / span 5",
    delay: 0.15,
  },
  {
    icon: "groups",
    title: "Workshops",
    description:
      "Interactive sessions for community mental health awareness and institutional wellness programs.",
    iconBg: "bg-primary-fixed",
    iconColor: "text-on-primary-fixed-variant",
    gridColumn: "span 7 / span 7",
    delay: 0.2,
  },
];

export default function ServicesSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-surface-container-low/50 relative" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6 font-headline">
            Compassionate Care
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Our evidence-based approaches are tailored to your unique journey
            toward mental wellness.
          </p>
        </motion.div>

        {/* Bento grid: 12 columns desktop, 1 column mobile */}
        <div className="services-bento-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBg={service.iconBg}
              iconColor={service.iconColor}
              gridColumn={service.gridColumn}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
