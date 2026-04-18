"use client";

interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: "Choose Service" },
  { number: 2, label: "Pick Schedule" },
  { number: 3, label: "Confirmation" },
];

interface SanctuaryProgressBarProps {
  currentStep: number;
}

export default function SanctuaryProgressBar({
  currentStep,
}: SanctuaryProgressBarProps) {
  return (
    <div className="flex items-center justify-center gap-8 mb-16" role="list" aria-label="Booking steps">
      {steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isComplete = step.number < currentStep;

        return (
          <div key={step.number} className="flex items-center gap-8">
            <div
              role="listitem"
              aria-current={isActive ? "step" : undefined}
              className="flex flex-col items-center gap-3 group"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110 ${
                  isActive
                    ? "gradient-primary text-white step-active-glow"
                    : isComplete
                    ? "bg-tertiary text-white"
                    : "bg-white text-outline border border-outline-variant/30"
                }`}
              >
                {isComplete ? (
                  <span className="material-symbols-outlined text-sm">
                    check
                  </span>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`text-xs font-bold ${
                  isActive ? "text-primary" : "text-outline"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-outline-variant/30" />
            )}
          </div>
        );
      })}
    </div>
  );
}
