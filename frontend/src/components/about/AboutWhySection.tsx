"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutWhySection() {
  const { lang } = useLang();
  const isSpanish = lang === "es";
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

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

  const content = isSpanish
    ? {
        eyebrow: "POR QUÉ MIAMI CUSTOM PATIOS",
        title: "Una forma más sencilla de",
        accent: "gestionar tu proyecto.",
        description:
          "En lugar de coordinar varias empresas, presupuestos y equipos por tu cuenta, tendrás un punto de contacto central que coordina una red de profesionales autorizados y asegurados.",
        without: "SIN COORDINACIÓN CENTRALIZADA",
        with: "CON MIAMI CUSTOM PATIOS",
        problems: [
          "Múltiples llamadas",
          "Varios presupuestos",
          "Múltiples contratistas",
          "Próximos pasos poco claros",
          "Coordinación de horarios entre equipos",
        ],
        benefits: [
          "Un solo punto de contacto",
          "Proceso coordinado",
          "Red de contratistas de confianza",
          "Próximos pasos claros",
          "Comunicación centralizada",
        ],
        footer: "Menos complicaciones. Un proceso mejor coordinado.",
        cta: "Hablemos de tu proyecto",
      }
    : {
        eyebrow: "WHY MIAMI CUSTOM PATIOS",
        title: "A Simpler Way to",
        accent: "Manage Your Project.",
        description:
          "Instead of coordinating multiple companies, quotes, and crews on your own, you get one central point of contact coordinating a trusted network of licensed and insured professionals.",
        without: "WITHOUT CENTRAL COORDINATION",
        with: "WITH MIAMI CUSTOM PATIOS",
        problems: [
          "Multiple calls",
          "Multiple quotes",
          "Multiple contractors",
          "Unclear next steps",
          "Scheduling between crews",
        ],
        benefits: [
          "One point of contact",
          "Coordinated project process",
          "Trusted contractor network",
          "Clear next steps",
          "Centralized communication",
        ],
        footer: "Less hassle. A more coordinated process.",
        cta: "Let's discuss your project",
      };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#110c0d] py-10 text-white sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_20%,rgba(199,137,81,0.10),transparent_38%)]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#c78951]/[0.07] blur-[100px]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div
          className={`why-reveal grid gap-8 transition-all duration-700 ease-out lg:grid-cols-12 lg:items-end lg:gap-12 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.25em] text-[#d39a67] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[3.4rem]">
              {content.title}
              <span className="mt-1 block text-[#d39a67]">
                {content.accent}
              </span>
            </h2>
          </div>

          <p className="max-w-2xl font-manrope text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:col-span-5">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          <article
            className={`why-reveal group relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] sm:p-8 lg:p-10 ${
              visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.035] to-transparent" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="font-sora text-[10px] font-bold uppercase tracking-[0.19em] text-white/45">
                  {content.without}
                </p>
                <h3 className="mt-3 font-sora text-xl font-semibold tracking-[-0.025em] text-white/80 sm:text-2xl">
                  {isSpanish ? "Por tu cuenta" : "Going it alone"}
                </h3>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 text-white/40">
                <MinusIcon />
              </span>
            </div>

            <div className="mt-7 border-t border-white/10">
              {content.problems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >
                  <span className="font-sora text-[10px] tabular-nums text-white/30">
                    0{index + 1}
                  </span>
                  <span className="font-manrope text-sm text-white/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 font-manrope text-xs leading-6 text-white/40">
              {isSpanish
                ? "Coordinar cada detalle puede llevar tiempo y esfuerzo."
                : "Coordinating every detail can take time and effort."}
            </p>
          </article>

          <article
            className={`why-reveal group relative overflow-hidden border border-[#c78951]/50 bg-[#1a1210] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all duration-500 hover:border-[#d9a06e] hover:shadow-[0_25px_80px_rgba(199,137,81,0.09)] sm:p-8 lg:p-10 ${
              visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "260ms" }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#c78951]/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-gradient-to-bl from-[#c78951]/[0.12] to-transparent" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="font-sora text-[10px] font-bold uppercase tracking-[0.19em] text-[#d39a67]">
                  {content.with}
                </p>
                <h3 className="mt-3 font-sora text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                  {isSpanish ? "Un proceso coordinado" : "A coordinated process"}
                </h3>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#c78951]/50 bg-[#c78951]/10 text-[#d9a06e] transition-all duration-300 group-hover:bg-[#c78951] group-hover:text-white">
                <CheckIcon />
              </span>
            </div>

            <div className="relative mt-7 border-t border-[#c78951]/25">
              {content.benefits.map((item, index) => (
                <div
                  key={item}
                  className="why-benefit flex items-center gap-4 border-b border-white/[0.08] py-4"
                  style={{ transitionDelay: `${350 + index * 90}ms` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#c78951]/35 text-[#d39a67]">
                    <span className="scale-75">
                      <CheckIcon />
                    </span>
                  </span>
                  <span className="font-manrope text-sm font-medium text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="relative mt-6 font-manrope text-xs leading-6 text-[#d9a06e]/80">
              {isSpanish
                ? "Un equipo coordinador. Profesionales autorizados y asegurados para construir."
                : "One coordinating team. Licensed and insured professionals doing the building."}
            </p>
          </article>
        </div>

        <div
          className={`why-reveal mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between ${
            visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "380ms" }}
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c78951]" />
            <p className="font-manrope text-sm text-white/65">
              {content.footer}
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 self-start font-sora text-[10px] font-bold uppercase tracking-[0.13em] text-[#d39a67] transition-colors hover:text-white sm:self-auto"
          >
            {content.cta}
            <ArrowIcon />
          </a>
        </div>
      </div>

      <style jsx>{`
        .why-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .why-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .why-benefit {
          opacity: 0.65;
          transform: translateX(8px);
          transition:
            opacity 500ms ease,
            transform 500ms ease;
        }

        .why-reveal.is-visible .why-benefit {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .why-reveal,
          .why-reveal.is-visible,
          .why-benefit,
          .why-reveal.is-visible .why-benefit {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}