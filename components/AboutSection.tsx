"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  "Registered Psychologists (RPsy)",
  "Pioneer service provider since 2015",
  "APA & PAP Member Practitioners",
];

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-60px" });
  const imgInView = useInView(imgRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image collage */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -32 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1 grid grid-cols-2 gap-4"
          >
            {/* Column 1 */}
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 hover:scale-[1.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0iLyzI_6k17ZqyrdPKkTRFaEuk_xvejZlqBsCXWlhpo-X0CMvlBpmJj-zUgy6Os_ipB3GqYmtnvHyKRiU6LMhD0SVx2TEmtYVePHmW14oymNLCuVUnLMA35LSA6TqrF_oDO44g7U9np-ApPbflkqSTVmnKKn0-NiLefvThpWMsmb2KNh_BfJoPFmGeBnTI9Cncrb4XQ9VjQj0c41dTP5K_aHT2I6GngXk1qrTCpFSoMAye_DcVNyrh1-rJ5EoFEfBd9nLlqTdJU"
                  alt="Professional counseling session — two people talking in a comfortable setting"
                />
              </div>
              <div className="bg-primary text-white p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <h4 className="text-3xl font-bold mb-2 font-headline">9+</h4>
                <p className="text-sm font-medium opacity-80 uppercase tracking-tighter">
                  Years of Service
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <div className="bg-secondary-container p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-2 block">
                  verified
                </span>
                <p className="text-on-secondary-container font-bold">
                  Licensed Professionals
                </p>
              </div>
              <div className="aspect-[3/5] rounded-2xl overflow-hidden shadow-lg transition-transform duration-700 hover:scale-[1.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB1rxtvUAnW5Fa9jAFzCRCV6_3IY89DPzt7bgY-zpli1uyZFN_JTS1-PrGeUCcFKneRS3r1_1nuXt_nAuVlhuizgZGElj5apElrWCQYqHiBAmv_D2pm2LKktHoEIiZit8uWNG7P0J_r6IfMRU-bz9VcuBPmMWWj8TqHyP5WvkHciBHKKvQyWX6d1ofvuvnKn8PLwK8UDhL6PsqdwvVvseXp4JXtxUtY89Y_OwC61DuKmBF5ws5tPckPnGlXHVBq2JxSlytMoDMOW8"
                  alt="Warm modern reception area of a mental health clinic with soft textures and neutral tones"
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 32 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 font-headline">
              Pioneering Professional Psychology in Dumaguete
            </h2>
            <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
              Established in 2015, iMind Psychological Services was founded with
              a mission to bridge the gap in mental health access in Negros
              Oriental. Our founder, a highly credentialed professional,
              envisioned a sanctuary where clinical expertise meets genuine
              empathy.
            </p>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              We pride ourselves on our evidence-based practices and strict
              adherence to professional ethics, making us one of the most
              trusted psychological centers in the region.
            </p>

            <div className="space-y-4">
              {credentials.map((cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-4 transition-transform hover:translate-x-2 duration-300"
                >
                  <span className="material-symbols-outlined text-tertiary">
                    check_circle
                  </span>
                  <span className="font-semibold text-on-surface">{cred}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
