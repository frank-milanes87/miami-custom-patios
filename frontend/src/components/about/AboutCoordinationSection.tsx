"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

export default function AboutCoordinationSection() {
  const { lang } = useLang();
  const isSpanish = lang === "es";
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#110c0d] px-5 py-14 text-[#f7f4ef] sm:px-8 sm:py-18 lg:px-10 lg:py-26"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(199,137,81,0.10),transparent_58%)]" />

      <div className="pointer-events-none absolute -left-40 top-[-8rem] -z-10 size-[350px] rounded-full border border-[#c78951]/25 sm:size-[500px] lg:-left-56 lg:size-[650px]" />

      <div className="pointer-events-none absolute -left-28 top-[-4rem] -z-10 size-[250px] rounded-full border border-[#c78951]/10 sm:size-[390px] lg:-left-40 lg:size-[510px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-12rem] -z-10 size-[350px] rounded-full border border-[#c78951]/25 sm:size-[500px] lg:-right-52 lg:size-[650px]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#c78951]/50 to-transparent" />

      <div
        className={`mx-auto w-full max-w-[1440px] transition-all duration-1000 ease-out motion-reduce:transition-none ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
            <span className="h-px w-7 bg-[#c78951] sm:w-12" />

            <span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#d6a06e] sm:text-[10px] sm:tracking-[0.28em]">
              {isSpanish
                ? "UN PROCESO BIEN COORDINADO"
                : "A BETTER WAY TO BUILD"}
            </span>

            <span className="h-px w-7 bg-[#c78951] sm:w-12" />
          </div>

          <div className="group mx-auto mb-7 flex size-14 items-center justify-center rounded-full border border-[#c78951]/50 bg-[#c78951]/[0.06] text-[#d6a06e] shadow-[0_0_35px_rgba(199,137,81,0.08)] transition-all duration-500 hover:border-[#d6a06e] hover:bg-[#c78951]/[0.12] sm:mb-9 sm:size-16">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:-translate-y-1"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9v11h14V9" />
              <path d="M9 20v-6h6v6" />
              <path d="M9 10h.01M15 10h.01" />
            </svg>
          </div>

          <h2 className="mx-auto max-w-5xl text-balance font-sora text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.12] tracking-[-0.055em]">
            {isSpanish ? (
              <>
                Los buenos proyectos
                <br className="hidden sm:block" /> comienzan con una{" "}
                <span className="bg-gradient-to-r from-[#d6a06e] via-[#f0c69c] to-[#b87945] bg-clip-text text-transparent">
                  buena coordinación.
                </span>
              </>
            ) : (
              <>
                Good Projects Start
                <br className="hidden sm:block" /> With{" "}
                <span className="bg-gradient-to-r from-[#d6a06e] via-[#f0c69c] to-[#b87945] bg-clip-text text-transparent">
                  Good Coordination.
                </span>
              </>
            )}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-pretty text-sm leading-7 text-[#c4b9b0] sm:mt-8 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            {isSpanish
              ? "Todo buen proyecto comienza por comprender la propiedad, los objetivos del propietario y el trabajo necesario. Reunimos a las personas y los procesos adecuados para avanzar con un plan claro."
              : "The right project starts with understanding the property, the homeowner's goals, and the work required. We bring the right people and processes together so your project can move forward with a clear plan."}
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-2 sm:mt-10">
            <span className="size-1.5 rounded-full bg-[#c78951]" />
            <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[#a86d3d] to-[#e0b183] sm:w-14" />
            <span className="size-1.5 rounded-full bg-[#c78951]" />
          </div>

          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/[0.08] pt-6 sm:mt-10 sm:gap-x-8 sm:pt-8">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a99d93] sm:text-[10px] sm:tracking-[0.2em]">
              {isSpanish ? "PLANIFICACIÓN CUIDADOSA" : "THOUGHTFUL PLANNING"}
            </span>

            <span className="hidden size-1 rounded-full bg-[#c78951] sm:block" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a99d93] sm:text-[10px] sm:tracking-[0.2em]">
              {isSpanish ? "SOCIOS DE CONFIANZA" : "TRUSTED PARTNERS"}
            </span>

            <span className="hidden size-1 rounded-full bg-[#c78951] sm:block" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#a99d93] sm:text-[10px] sm:tracking-[0.2em]">
              {isSpanish ? "PROCESO CLARO" : "A CLEAR PROCESS"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}