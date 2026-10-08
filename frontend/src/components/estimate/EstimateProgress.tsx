"use client";

import type { FC } from "react";

type EstimateProgressProps = {
  step: number;
  lang: "en" | "es";
  hasDetailedService?: boolean;
};

type ProgressStep = {
  number: number;
  actualStep: number;
  en: string;
  es: string;
};

const EstimateProgress: FC<EstimateProgressProps> = ({
  step,
  lang,
  hasDetailedService = true,
}) => {
  const steps: ProgressStep[] = hasDetailedService
    ? [
        {
          number: 1,
          actualStep: 1,
          en: "Contact",
          es: "Contacto",
        },
        {
          number: 2,
          actualStep: 2,
          en: "Details",
          es: "Detalles",
        },
        {
          number: 3,
          actualStep: 3,
          en: "Property",
          es: "Propiedad",
        },
        {
          number: 4,
          actualStep: 4,
          en: "Review",
          es: "Revisión",
        },
      ]
    : [
        {
          number: 1,
          actualStep: 1,
          en: "Contact",
          es: "Contacto",
        },
        {
          number: 2,
          actualStep: 3,
          en: "Property",
          es: "Propiedad",
        },
        {
          number: 3,
          actualStep: 4,
          en: "Review",
          es: "Revisión",
        },
      ];

  const currentIndex = Math.max(
    0,
    steps.findIndex((item) => item.actualStep === step),
  );

  const progress =
    steps.length === 3
      ? currentIndex === 0
        ? "0%"
        : currentIndex === 1
          ? "50%"
          : "100%"
      : currentIndex === 0
        ? "0%"
        : currentIndex === 1
          ? "33.333%"
          : currentIndex === 2
            ? "66.666%"
            : "100%";

  return (
    <div className="relative mb-8 mt-7 px-2 sm:px-5">
      <div className="absolute left-[16.666%] right-[16.666%] top-4 h-px bg-black/10" />

      <div
        className="absolute left-[16.666%] top-4 h-px bg-[var(--accent)] transition-all duration-700 ease-out"
        style={{
          width:
            steps.length === 3
              ? `calc(${progress} * 0.6667)`
              : `calc(${progress} * 0.75)`,
        }}
      />

      <div
        className={`relative grid ${
          steps.length === 3
            ? "grid-cols-3"
            : "grid-cols-4"
        }`}
      >
        {steps.map((item, index) => {
          const active = currentIndex === index;
          const completed = currentIndex > index;

          return (
            <div
              key={item.actualStep}
              className="flex flex-col items-center"
            >
              <div
                className={`
                  relative
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border
                  transition-all
                  duration-500
                  ${
                    active
                      ? "scale-110 border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_0_0_6px_rgba(197,133,76,0.12)]"
                      : completed
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-black/15 bg-white text-black/35"
                  }
                `}
              >
                {completed ? (
                  <svg
                    width="13"
                    height="13"
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
                  <span className="text-[10px] font-bold">
                    {item.number}
                  </span>
                )}

                {active && (
                  <span className="absolute inset-[-5px] animate-ping rounded-full border border-[var(--accent)]/20" />
                )}
              </div>

              <span
                className={`
                  mt-3
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  transition-colors
                  duration-500
                  sm:text-[9px]
                  ${
                    active || completed
                      ? "text-[var(--accent)]"
                      : "text-black/30"
                  }
                `}
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