"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

function ManagementIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="6" y="5" width="28" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13h14M13 19h14M13 25h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="m24 29 3 3 6-7" stroke="#c78951" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConstructionIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8" aria-hidden="true">
      <path d="M4 18 20 5l16 13M8 16v19h24V16M16 35V23h8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m25 10 5-5M29 13l5-5" stroke="#c78951" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutTransparencySection() {
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
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const content = isSpanish
    ? {
        eyebrow: "CLARIDAD Y TRANSPARENCIA",
        title: "Siempre sabrás",
        accent: "quién hace qué.",
        description:
          "Creemos que cada propietario merece saber cómo se gestiona su proyecto y quién realiza el trabajo. Sin confusiones, sin dudas sobre las responsabilidades.",
        firstNumber: "01",
        firstLabel: "GESTIÓN DEL PROYECTO",
        firstTitle: "Nosotros coordinamos.",
        firstDescription:
          "Miami Custom Patios gestiona la atención al cliente, las operaciones y la coordinación del proyecto desde el primer contacto hasta el recorrido final.",
        secondNumber: "02",
        secondLabel: "CONSTRUCCIÓN E INSTALACIÓN",
        secondTitle: "Nuestros socios construyen.",
        secondDescription:
          "Los contratistas generales y subcontratistas autorizados y asegurados de nuestra red realizan los trabajos de construcción e instalación.",
        footerEyebrow: "UN PROCESO CLARO",
        footer: "Un punto de contacto. Responsabilidades definidas. Comunicación transparente.",
      }
    : {
        eyebrow: "CLARITY & TRANSPARENCY",
        title: "You'll always know",
        accent: "who does what.",
        description:
          "We believe every homeowner deserves to understand how their project is managed and who performs the work. No confusion, no uncertainty about responsibilities.",
        firstNumber: "01",
        firstLabel: "PROJECT MANAGEMENT",
        firstTitle: "We coordinate.",
        firstDescription:
          "Miami Custom Patios manages the customer-facing experience, operations, and project coordination from the first conversation through the final walkthrough.",
        secondNumber: "02",
        secondLabel: "CONSTRUCTION & INSTALLATION",
        secondTitle: "Our partners build.",
        secondDescription:
          "Licensed and insured general contractors and subcontractors within our network perform the construction and installation work.",
        footerEyebrow: "A CLEAR PROCESS",
        footer: "One point of contact. Defined responsibilities. Transparent communication.",
      };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#110c0d] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[55%] bg-[radial-gradient(ellipse_at_80%_35%,rgba(199,137,81,0.09),transparent_65%)]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div
            className={`transparency-reveal lg:col-span-5 ${
              visible ? "is-visible" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.25em] text-[#d39a67]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-7 font-sora text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">
              {content.title}
              <span className="mt-2 block text-[#d39a67]">
                {content.accent}
              </span>
            </h2>

            <p className="mt-7 max-w-md font-manrope text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              {content.description}
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c78951]/40 text-[#d39a67]">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="max-w-xs font-sora text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-white/75">
                {content.footerEyebrow}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute bottom-10 left-[27px] top-10 w-px bg-gradient-to-b from-[#c78951] via-[#c78951]/50 to-transparent sm:left-[35px]" />

              <article
                className={`transparency-reveal relative pb-8 sm:pb-10 ${
                  visible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[#c78951]/60 bg-[#110c0d] text-[#d39a67] sm:h-[72px] sm:w-[72px]">
                    <ManagementIcon />
                  </div>

                  <div className="min-w-0 flex-1 border-b border-white/10 pb-8 sm:pb-10">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-sora text-[10px] font-bold tracking-[0.16em] text-[#d39a67]">
                        {content.firstNumber}
                      </span>
                      <span className="h-px w-5 bg-[#c78951]/60" />
                      <p className="font-sora text-[9px] font-semibold uppercase tracking-[0.17em] text-white/45 sm:text-[10px]">
                        {content.firstLabel}
                      </p>
                    </div>

                    <h3 className="mt-4 font-sora text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {content.firstTitle}
                    </h3>

                    <p className="mt-4 max-w-xl font-manrope text-sm leading-7 text-white/60 sm:text-[15px] sm:leading-8">
                      {content.firstDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(isSpanish
                        ? ["Atención al cliente", "Operaciones", "Coordinación"]
                        : ["Customer experience", "Operations", "Coordination"]
                      ).map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 bg-white/[0.025] px-3 py-2 font-sora text-[9px] font-medium uppercase tracking-[0.08em] text-white/55"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article
                className={`transparency-reveal relative ${
                  visible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: "320ms" }}
              >
                <div className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-[#c78951]/60 bg-[#1c1511] text-[#d39a67] sm:h-[72px] sm:w-[72px]">
                    <ConstructionIcon />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-sora text-[10px] font-bold tracking-[0.16em] text-[#d39a67]">
                        {content.secondNumber}
                      </span>
                      <span className="h-px w-5 bg-[#c78951]/60" />
                      <p className="font-sora text-[9px] font-semibold uppercase tracking-[0.17em] text-white/45 sm:text-[10px]">
                        {content.secondLabel}
                      </p>
                    </div>

                    <h3 className="mt-4 font-sora text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                      {content.secondTitle}
                    </h3>

                    <p className="mt-4 max-w-xl font-manrope text-sm leading-7 text-white/60 sm:text-[15px] sm:leading-8">
                      {content.secondDescription}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {(isSpanish
                        ? ["Contratistas autorizados", "Profesionales asegurados"]
                        : ["Licensed contractors", "Insured professionals"]
                      ).map((item) => (
                        <span
                          key={item}
                          className="border border-[#c78951]/25 bg-[#c78951]/[0.06] px-3 py-2 font-sora text-[9px] font-medium uppercase tracking-[0.08em] text-[#d9a06e]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div
          className={`transparency-reveal mt-14 flex flex-col gap-4 border-t border-[#c78951]/30 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between ${
            visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <p className="max-w-2xl font-manrope text-sm leading-7 text-white/55">
            {content.footer}
          </p>

          <a
            href="/contact"
            className="group inline-flex items-center gap-3 self-start font-sora text-[10px] font-bold uppercase tracking-[0.13em] text-[#d39a67] transition-colors duration-300 hover:text-white sm:self-auto"
          >
            {isSpanish ? "Hablemos de tu proyecto" : "Let's discuss your project"}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .transparency-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 800ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 800ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .transparency-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .transparency-reveal,
          .transparency-reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}