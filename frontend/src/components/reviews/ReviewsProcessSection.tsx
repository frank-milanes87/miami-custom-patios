"use client";

import { useLang } from "@/lib/lang";

export default function ReviewsProcessSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "LA EXPERIENCIA",
          title: "Mucho Más Que",
          accent: "El Resultado Final.",
          description:
            "Un proyecto exitoso es mucho más que el resultado final. También significa comprender la propiedad, mantener una comunicación clara y crear un proceso organizado desde la primera conversación hasta la finalización del proyecto.",
          steps: [
            {
              number: "01",
              title: "Comprender",
              description:
                "Comenzamos por comprender la propiedad, sus objetivos y las necesidades del proyecto.",
            },
            {
              number: "02",
              title: "Planificar",
              description:
                "Consideramos el espacio, los materiales, la funcionalidad y la visión general.",
            },
            {
              number: "03",
              title: "Realizar",
              description:
                "Coordinamos el proyecto prestando atención a cada detalle importante.",
            },
          ],
          footer: "De la primera conversación al resultado final",
        }
      : {
          eyebrow: "THE EXPERIENCE",
          title: "More Than the",
          accent: "Finished Space.",
          description:
            "A successful project is about more than the final result. It is also about understanding the property, communicating clearly and creating a process that feels organized from the first conversation through the finished project.",
          steps: [
            {
              number: "01",
              title: "Understand",
              description:
                "Start by understanding the property, goals and project needs.",
            },
            {
              number: "02",
              title: "Plan",
              description:
                "Consider the space, materials, function and overall direction.",
            },
            {
              number: "03",
              title: "Deliver",
              description:
                "Bring the project together with attention to the details that matter.",
            },
          ],
          footer: "From the first conversation to the finished project",
        };

  return (
    <section className="relative isolate overflow-hidden bg-[#110c0d] py-20 text-[#f7f4ef] sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#c78951]/[0.08] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#c78951]/[0.05] blur-[110px]"
      />

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#c78951]" />

            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951] sm:text-[11px]">
              {content.eyebrow}
            </p>
          </div>

          <h2 className="mt-7 font-sora text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            {content.title}
            <br />
            <span className="text-[#c78951]">{content.accent}</span>
          </h2>

          <p className="mt-7 max-w-lg font-manrope text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            {content.description}
          </p>

          <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-6">
            <span className="h-10 w-1 shrink-0 bg-[#c78951]" />

            <p className="font-manrope text-xs leading-6 text-white/50 sm:text-sm">
              {content.footer}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="border-t border-white/15">
            {content.steps.map((step, index) => (
              <li
                key={step.number}
                className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-white/15 py-7 transition-colors duration-300 hover:border-[#c78951]/60 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-9"
                style={{
                  animation: `processReveal .75s ease-out ${index * 150}ms both`,
                }}
              >
                <span className="pt-0.5 font-sora text-sm font-semibold tracking-[0.12em] text-[#c78951] transition-transform duration-300 group-hover:translate-x-1 sm:text-base">
                  {step.number}
                </span>

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-sora text-lg font-semibold uppercase tracking-[0.035em] text-[#f7f4ef] sm:text-xl">
                      {step.title}
                    </h3>

                    <span className="flex h-8 w-8 items-center justify-center border border-white/15 text-[#c78951] transition-all duration-300 group-hover:border-[#c78951]/60 group-hover:bg-[#c78951]/10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>

                  <p className="mt-3 max-w-md font-manrope text-sm leading-7 text-white/55 sm:text-base">
                    {step.description}
                  </p>

                  <div className="mt-5 h-px w-0 bg-[#c78951]/70 transition-all duration-500 group-hover:w-16" />
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex items-center justify-between gap-4">
            <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35 sm:text-[10px]">
              MIAMI CUSTOM PATIOS
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span className="font-sora text-[9px] uppercase tracking-[0.16em] text-[#c78951] sm:text-[10px]">
              01 — 03
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes processReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          li {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}