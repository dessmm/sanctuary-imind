"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What can I expect during my first session?",
    answer:
      "The initial intake involves understanding your history, current concerns, and goals for seeking psychological services. Your psychologist will create a comfortable, non-judgmental space for you to share at your own pace.",
  },
  {
    question: "How long is a typical therapy session?",
    answer:
      "Individual counseling sessions typically last 45 to 60 minutes, while assessments and workshops vary depending on the scope. Your psychologist will discuss the recommended format during your intake.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Yes, confidentiality is a cornerstone of our practice. All information shared is protected by professional ethics and relevant laws in the Philippines. Exceptions only apply in specific legal situations which your psychologist will explain.",
  },
  {
    question: "Do you offer online or telehealth sessions?",
    answer:
      "Yes, we offer virtual consultation sessions for clients who prefer remote access. Online sessions follow the same professional standards as in-person appointments.",
  },
];

interface FaqAccordionProps {
  item: FaqItem;
  index: number;
}

function FaqAccordionItem({ item, index }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl px-6 transition-all border border-outline-variant/10 hover:shadow-md overflow-hidden"
      role="group"
    >
      <button
        className="w-full flex items-center justify-between font-bold text-on-surface py-6 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span>{item.question}</span>
        <span
          className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-on-surface-variant leading-relaxed pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqAccordionItem key={faq.question} item={faq} index={index} />
      ))}
    </div>
  );
}
