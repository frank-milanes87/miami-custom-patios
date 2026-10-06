"use client";

import { useLang } from "@/lib/lang";

const steps = [
  {
    number: "01",
    en: {
      title: "The property",
      description:
        "We consider the existing architecture, layout and surroundings.",
    },
    es: {
      title: "La propiedad",
      description:
        "Consideramos la arquitectura, distribución y entorno existentes.",
    },
  },
  {
    number: "02",
    en: {
      title: "The purpose",
      description:
        "We design around how the outdoor space will actually be used.",
    },
    es: {
      title: "El propósito",
      description:
        "Diseñamos pensando en cómo se utilizará realmente el espacio exterior.",
    },
  },
  {
    number: "03",
    en: {
      title: "The details",
      description:
        "Materials, finishes and design decisions come together to create a cohesive result.",
    },
    es: {
      title: "Los detalles",
      description:
        "Los materiales, acabados y decisiones de diseño se combinan para crear un resultado coherente.",
    },
  },
];

export default function ProjectsApproach() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden border-t border-black/10 bg-[#f5f2ed] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-3xl" />

      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {lang === "en"
                  ? "Our approach"
                  : "Nuestro enfoque"}
              </p>
            </div>

            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.8rem]">
              {lang === "en" ? (
                <>
                  Every Property
                  <br />
                  Is Different.
                </>
              ) : (
                <>
                  Cada Propiedad
                  <br />
                  Es Diferente.
                </>
              )}
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-black/55 sm:text-base">
            {lang === "en"
              ? "No two South Florida properties are exactly alike. Our projects are planned around the property's layout, architecture, outdoor environment and the way the space is meant to be used."
              : "No hay dos propiedades del Sur de Florida exactamente iguales. Nuestros proyectos se planifican alrededor de la distribución, arquitectura, entorno exterior y la manera en que se utilizará el espacio."}
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10 lg:mt-16 lg:gap-12">
          {steps.map((step, index) => {
            const content = step[lang];

            return (
              <li
                key={step.number}
                className="group relative border-t border-black/15 pt-6 opacity-0 animate-[approachIn_700ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)]">
                    {step.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center border border-black/10 text-black/25 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 15L15 5M7 5H15V13"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.14em]">
                  {content.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-black/50">
                  {content.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <style jsx>{`
        @keyframes approachIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}