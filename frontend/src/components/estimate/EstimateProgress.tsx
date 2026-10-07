"use client";

import type { FC } from "react";

type EstimateProgressProps = {
  step: number;
  lang: "en" | "es";
};

const steps = [
  {
    number: 1,
    en: "Contact",
    es: "Contacto",
  },
  {
    number: 2,
    en: "Details",
    es: "Detalles",
  },
  {
    number: 3,
    en: "Property",
    es: "Propiedad",
  },
  {
    number: 4,
    en: "Review",
    es: "Revisión",
  },
];

const EstimateProgress: FC<EstimateProgressProps> = ({
  step,
  lang,
}) => {
  const progressWidth = `${((step - 1) / 3) * 75}%`;

  return (
    <div className="relative mb-7 mt-6">
      {/* Background line */}
      <div className="absolute left-[12.5%] right-[12.5%] top-4 h-px bg-black/10" />

      {/* Animated progress line */}
      <div
        className="absolute left-[12.5%] top-4 h-px bg-[var(--accent)] transition-all duration-700 ease-out"
        style={{
          width: progressWidth,
        }}
      />

      <div className="relative grid grid-cols-4">
        {steps.map((item) => {
          const active = step === item.number;
          const completed = step > item.number;

          return (
            <div
              key={item.number}
              className="flex flex-col items-center"
            >
              {/* Number circle */}
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
                  active
                    ? "scale-110 border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_5px_rgba(197,133,76,0.12)]"
                    : completed
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-black/15 bg-white text-black/35"
                }`}
              >
                {completed ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m2.2 6.2 2.2 2.2L9.8 3.5" />
                  </svg>
                ) : (
                  <span className="text-[9px] font-bold">
                    {item.number}
                  </span>
                )}

                {/* Active pulse */}
                {active && (
                  <span className="absolute inset-[-5px] animate-ping rounded-full border border-[var(--accent)]/25" />
                )}
              </div>

              {/* Step label */}
              <span
                className={`mt-2 text-[8px] font-bold uppercase tracking-[0.12em] transition-all duration-500 sm:text-[9px] ${
                  active
                    ? "text-[var(--accent)]"
                    : completed
                      ? "text-[var(--accent)]"
                      : "text-black/30"
                }`}
              >
                {lang === "es" ? item.es : item.en}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EstimateProgress;