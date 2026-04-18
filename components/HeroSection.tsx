"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="z-10">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-highest/80 backdrop-blur-sm text-primary font-medium text-xs mb-6 uppercase tracking-widest border border-white/40"
          >
            iMind Psychological Services
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-tight tracking-tight mb-8 font-headline"
          >
            Finding Your Path to{" "}
            <span className="text-primary italic">Peace</span> and Emotional
            Relief
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl"
          >
            Licensed psychologists in Dumaguete providing professional
            counseling, psychotherapy, and assessments since 2015.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToBooking}
              aria-label="Book an appointment"
              className="gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 duration-200"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToServices}
              aria-label="View services"
              className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-surface-variant hover:shadow-md duration-200"
            >
              View Services
            </button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center border-2 border-white shadow-sm">
                <span className="material-symbols-outlined text-sm text-on-secondary-container">
                  verified_user
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center border-2 border-white text-xs font-bold text-on-tertiary-container shadow-sm">
                9Y+
              </div>
            </div>
            <p className="text-sm text-on-surface-variant font-medium">
              Serving the Dumaguete community since 2015
            </p>
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary-container/20 rounded-3xl blur-3xl -rotate-6 transform transition-transform duration-700 hover:rotate-0" />
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl hero-img-tilt">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS9jTPOP5Ztdwg-57knWOgQpmd0sV-FhInobzdgxeLy6o95cECicP3zYTu1q4bSYlGTJ3tykC-WIZcI-dC33HdQBczncjcKWr8zVpWFNw1mMSSCyuKGv-LtUTB1nS8Jpfpeqo_Ijz5MMRUWLy4t1cirmImHhjXr-k7WwU4smPILIdjd6cIuUhnfQHxiEMu1j__KvoyTYETg9SlQV6fzyFlNXBnjdHUpppKmrvXZ6tjI1RU-rb1tcfJxd9KA3qw1GoeV0J6E9bMt_g"
              alt="Calm bright therapeutic office with soft natural lighting, comfortable armchairs, and lush green indoor plants"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
