"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import SanctuaryProgressBar from "./ui/SanctuaryProgressBar";

const serviceSchema = z.object({
  service: z.string().min(1, "Please select a session type"),
});

const detailsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  notes: z.string().optional(),
});

type ServiceFormData = z.infer<typeof serviceSchema>;
type DetailsFormData = z.infer<typeof detailsSchema>;

const sessionTypes = [
  {
    id: "individual",
    label: "Individual Therapy",
    duration: "60 Minute Session",
  },
  {
    id: "testing",
    label: "Psychological Testing",
    duration: "Evaluation Intake",
  },
  {
    id: "couples",
    label: "Couples Counseling",
    duration: "90 Minute Session",
  },
  {
    id: "online",
    label: "Online Session",
    duration: "Virtual Consultation",
  },
];

const pageVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("individual");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const detailsForm = useForm<DetailsFormData>({
    resolver: zodResolver(detailsSchema),
  });

  const handleStep1Continue = () => {
    if (selectedService) setStep(2);
  };

  const handleStep2Submit = async (data: DetailsFormData) => {
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: selectedService, ...data }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStep(3);
      setSubmitted(true);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 bg-surface-container relative overflow-hidden"
      id="booking"
    >
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-headline">
            Start Your Journey
          </h2>
          <p className="text-on-surface-variant">
            Simple three-step process to secure your first session.
          </p>
        </motion.div>

        <SanctuaryProgressBar currentStep={step} />

        <div className="bg-surface-container-lowest/80 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-xl shadow-sky-900/5 border border-white/50">
          <AnimatePresence mode="wait">
            {/* ── STEP 1: Choose Service ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <h3 className="text-2xl font-bold mb-8 font-headline">
                  Select Session Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {sessionTypes.map((type) => {
                    const isSelected = selectedService === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedService(type.id)}
                        aria-pressed={isSelected}
                        className={`border-2 p-6 rounded-2xl flex items-center justify-between cursor-pointer hover-lift group text-left transition-all duration-200 ${
                          isSelected
                            ? "border-primary bg-primary-container/10"
                            : "border-outline-variant/30 hover:border-primary-container hover:bg-white"
                        }`}
                      >
                        <div>
                          <p className="font-bold text-on-surface">
                            {type.label}
                          </p>
                          <p className="text-sm text-on-surface-variant">
                            {type.duration}
                          </p>
                        </div>
                        <span
                          className={`material-symbols-outlined transition-colors ${
                            isSelected
                              ? "text-primary"
                              : "text-outline-variant group-hover:text-primary"
                          }`}
                        >
                          {isSelected
                            ? "radio_button_checked"
                            : "radio_button_unchecked"}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={handleStep1Continue}
                  className="w-full gradient-primary text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 active:scale-[0.98]"
                  aria-label="Continue to schedule"
                >
                  Continue to Schedule
                </button>
              </motion.div>
            )}

            {/* ── STEP 2: Your Details ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold font-headline">
                    Your Details
                  </h3>
                  <button
                    onClick={() => setStep(1)}
                    className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                    Back
                  </button>
                </div>

                <div className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low">
                  <span className="material-symbols-outlined text-primary">
                    confirmation_number
                  </span>
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                      Selected Service
                    </p>
                    <p className="font-bold text-on-surface capitalize">
                      {sessionTypes.find((s) => s.id === selectedService)
                        ?.label ?? selectedService}
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={detailsForm.handleSubmit(handleStep2Submit)}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-semibold text-on-surface mb-1.5"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      {...detailsForm.register("name")}
                      className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-on-surface placeholder-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all"
                      aria-invalid={
                        !!detailsForm.formState.errors.name
                      }
                      aria-describedby={
                        detailsForm.formState.errors.name
                          ? "name-error"
                          : undefined
                      }
                    />
                    {detailsForm.formState.errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="text-error text-xs mt-1.5"
                      >
                        {detailsForm.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block text-sm font-semibold text-on-surface mb-1.5"
                      >
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        {...detailsForm.register("email")}
                        className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-on-surface placeholder-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all"
                        aria-invalid={!!detailsForm.formState.errors.email}
                        aria-describedby={
                          detailsForm.formState.errors.email
                            ? "email-error"
                            : undefined
                        }
                      />
                      {detailsForm.formState.errors.email && (
                        <p
                          id="email-error"
                          role="alert"
                          className="text-error text-xs mt-1.5"
                        >
                          {detailsForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block text-sm font-semibold text-on-surface mb-1.5"
                      >
                        Phone Number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+63 XXX XXX XXXX"
                        {...detailsForm.register("phone")}
                        className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-on-surface placeholder-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all"
                        aria-invalid={!!detailsForm.formState.errors.phone}
                        aria-describedby={
                          detailsForm.formState.errors.phone
                            ? "phone-error"
                            : undefined
                        }
                      />
                      {detailsForm.formState.errors.phone && (
                        <p
                          id="phone-error"
                          role="alert"
                          className="text-error text-xs mt-1.5"
                        >
                          {detailsForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-sm font-semibold text-on-surface mb-1.5"
                    >
                      Preferred Date <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      {...detailsForm.register("preferredDate")}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all"
                      aria-invalid={!!detailsForm.formState.errors.preferredDate}
                      aria-describedby={
                        detailsForm.formState.errors.preferredDate
                          ? "date-error"
                          : undefined
                      }
                    />
                    {detailsForm.formState.errors.preferredDate && (
                      <p
                        id="date-error"
                        role="alert"
                        className="text-error text-xs mt-1.5"
                      >
                        {detailsForm.formState.errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="block text-sm font-semibold text-on-surface mb-1.5"
                    >
                      Additional Notes{" "}
                      <span className="text-outline font-normal text-xs">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Any concerns or context you'd like us to know…"
                      {...detailsForm.register("notes")}
                      className="w-full bg-surface-container-high rounded-xl px-4 py-3 text-on-surface placeholder-outline/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="flex items-center gap-3 p-4 rounded-2xl bg-error-container/30 text-on-error-container"
                    >
                      <span className="material-symbols-outlined text-error">
                        error
                      </span>
                      <p className="text-sm font-medium">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-primary text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label="Submit booking request"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined animate-spin text-sm">
                          autorenew
                        </span>
                        Submitting…
                      </span>
                    ) : (
                      "Confirm Booking Request"
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── STEP 3: Confirmation ── */}
            {step === 3 && submitted && (
              <motion.div
                key="step3"
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-tertiary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-tertiary text-4xl">
                    check_circle
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 font-headline">
                  Request Received!
                </h3>
                <p className="text-on-surface-variant mb-8 max-w-sm mx-auto">
                  Thank you for reaching out. Our team will contact you within
                  1–2 business days to confirm your appointment.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setSubmitted(false);
                    detailsForm.reset();
                    setSelectedService("individual");
                  }}
                  className="gradient-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  Book Another Session
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
