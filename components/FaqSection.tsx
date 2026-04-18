"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FaqAccordion from "./ui/FaqAccordion";

export default function FaqSection() {
  const faqRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-surface-container-low/50" id="faq">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* FAQ Column */}
        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 32 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl font-bold mb-8 font-headline">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />

          {/* Emergency Notice */}
          <div className="mt-12 p-8 bg-error-container/20 rounded-3xl border border-error-container/30 transition-transform hover:scale-[1.01] duration-300">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-error flex-shrink-0 mt-0.5">
                emergency
              </span>
              <div>
                <p className="font-bold text-on-error-container mb-1">
                  Emergency Notice
                </p>
                <p className="text-sm text-on-error-container/80 leading-relaxed">
                  If you are experiencing a mental health emergency, please
                  contact national hotlines or proceed to the nearest hospital
                  immediately. We are not an emergency crisis center.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Column */}
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 32 }}
          animate={mapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl font-bold mb-8 font-headline">Locate Us</h2>

          <div className="aspect-video rounded-[2rem] overflow-hidden shadow-inner bg-surface-container-highest relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN1pgtv-uxbYBu7ebSk1v0BVLD_KlSBGm2_hT3-Xn3hWATf4Do4ts4U7aiZ8Ec2inkQ6mxbuESj38kxDJFfMxsim5fZAj4QlgZXwmf4gVahOkKjkvYAj5e1HM6E0NhSS6g6BC_ZjQS_ajHa3kpCyxX27HZ8UtYRBUKPK1mUrpG4ifNLLgSrpHYZe4TT9Ghgx2BdysCGuWBvm267TouULSYWXg-rVjIanl4oPwtN3KC9-0xkBvc1LTOkY-trefD515TGbIwzkBwHeE"
              alt="Map of Dumaguete City, Negros Oriental showing iMind clinic location"
              aria-label="Map view of Dumaguete City"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs transition-transform duration-500 group-hover:-translate-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">
                  location_on
                </span>
                <div>
                  <p className="font-bold text-on-surface">iMind Clinic</p>
                  <p className="text-xs text-on-surface-variant">
                    Dumaguete City, Negros Oriental, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <a
              href="mailto:contact@imindps.com"
              className="group cursor-pointer"
              aria-label="Send email to iMind"
            >
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform duration-200">
                Email Us
              </p>
              <p className="text-on-surface font-medium">contact@imindps.com</p>
            </a>
            <a
              href="tel:+6303542200"
              className="group cursor-pointer"
              aria-label="Call iMind clinic"
            >
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform duration-200">
                Call Us
              </p>
              <p className="text-on-surface font-medium">+63 (035) 422-xxxx</p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
