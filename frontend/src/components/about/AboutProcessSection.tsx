"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoordinationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <rect x="5" y="7" width="25" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 15h11M12 21h11M12 27h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="32" r="9" fill="#c78951" />
      <path d="m30 32 3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContractorIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="M5 22 24 7l19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v21h28V20M19 41V28h10v13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m31 15 4-4" stroke="#c78951" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProcessIcon({ type }: { type: string }) {
  if (type === "design") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M5 26 21 10l5 5L10 31H5v-5ZM19 12l4-4a3.5 3.5 0 0 1 5 5l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "schedule") {
    return (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="4" y="7" width="24" height="21" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 4v6M22 4v6M4 13h24M10 19h4M10 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M16 4 27 9v7c0 6-4.7 10.3-11 13-6.3-2.7-11-7-11-13V9l11-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m11 16 3.5 3.5 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutProcessSection() {
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
        eyebrow: "CÓMO TRABAJAMOS",
        title: "Nosotros coordinamos.",
        accent: "Los profesionales construyen.",
        intro:
          "Un proceso claro, un punto de contacto y profesionales de confianza. Coordinamos cada etapa para que tu proyecto avance con menos complicaciones.",
        companyLabel: "01 / MIAMI CUSTOM PATIOS",
        companyTitle: "Tu proyecto. Un equipo coordinador.",
        companyDescription:
          "Ventas, operaciones, marketing y coordinación del proyecto bajo un mismo equipo.",
        partnerLabel: "02 / NUESTROS SOCIOS",
        partnerTitle: "Construcción a cargo de profesionales.",
        partnerDescription:
          "Nuestros contratistas generales y subcontratistas autorizados y asegurados realizan la construcción y la instalación.",
        processTitle: "Del primer contacto a los últimos detalles.",
        processIntro:
          "Nos encargamos de coordinar las etapas principales para que sepas qué sigue.",
        steps: [
          {
            number: "01",
            title: "Planificación y diseño",
            description: "Definimos tus objetivos, alcance y próximos pasos.",
            icon: "design",
          },
          {
            number: "02",
            title: "Permisos y programación",
            description: "Coordinamos los requisitos y el calendario del proyecto.",
            icon: "schedule",
          },
          {
            number: "03",
            title: "Construcción y revisión",
            description: "Nuestros socios realizan el trabajo y coordinamos el seguimiento hasta el recorrido final.",
            icon: "quality",
          },
        ],
        note: "Un punto de contacto. Un plan claro. Un proceso coordinado.",
      }
    : {
        eyebrow: "HOW WE WORK",
        title: "We Manage the Process.",
        accent: "Licensed Professionals Do the Building.",
        intro:
          "One clear process, one point of contact, and trusted professionals. We coordinate every stage to make your project easier to navigate.",
        companyLabel: "01 / MIAMI CUSTOM PATIOS",
        companyTitle: "Your project. One coordinating team.",
        companyDescription:
          "Sales, operations, marketing, and project coordination brought together under one team.",
        partnerLabel: "02 / OUR CONTRACTOR PARTNERS",
        partnerTitle: "Construction by licensed professionals.",
        partnerDescription:
          "Our network of licensed and insured general contractors and subcontractors performs the construction and installation.",
        processTitle: "From the first conversation to the final details.",
        processIntro:
          "We coordinate the key stages so you know what comes next.",
        steps: [
          {
            number: "01",
            title: "Planning & Design",
            description: "We clarify your goals, project scope, and next steps.",
            icon: "design",
          },
          {
            number: "02",
            title: "Permits & Scheduling",
            description: "We coordinate project requirements, permits, and scheduling.",
            icon: "schedule",
          },
          {
            number: "03",
            title: "Construction & Review",
            description: "Our partners perform the work, and we coordinate follow-through toward the final walkthrough.",
            icon: "quality",
          },
        ],
        note: "One point of contact. One clear plan. A coordinated process.",
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f7f4ef] py-10 text-[#211a17] sm:py-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#c78951]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-[#c78951]/[0.06] blur-[100px]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div
          className={`about-process-reveal grid gap-8 transition-all duration-700 ease-out lg:grid-cols-12 lg:items-end lg:gap-12 ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-11 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.24em] text-[#a96e3d] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 max-w-3xl font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[3.25rem]">
              {content.title}
              <span className="mt-1 block text-[#a96e3d]">
                {content.accent}
              </span>
            </h2>
          </div>

          <p className="max-w-2xl font-manrope text-sm leading-7 text-[#746b64] sm:text-base sm:leading-8 lg:col-span-5 lg:pb-1">
            {content.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
          <article
            className={`about-process-reveal group relative overflow-hidden border border-[#e5ddd3] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#c78951]/60 hover:shadow-[0_22px_60px_rgba(48,34,22,0.08)] sm:p-9 lg:p-11 ${
              visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "120ms" }}
          >
            <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-[#c78951]/[0.10] to-transparent" />

            <div className="relative flex items-start justify-between gap-5">
              <div className="flex h-16 w-16 items-center justify-center bg-[#f7f0e7] text-[#a96e3d] transition-colors duration-300 group-hover:bg-[#c78951] group-hover:text-white">
                <CoordinationIcon />
              </div>
              <span className="font-sora text-[10px] font-bold tracking-[0.2em] text-[#a96e3d]">
                01
              </span>
            </div>

            <p className="mt-8 font-sora text-[10px] font-bold uppercase tracking-[0.19em] text-[#a96e3d]">
              {content.companyLabel}
            </p>

            <h3 className="mt-4 max-w-md font-sora text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
              {content.companyTitle}
            </h3>

            <p className="mt-4 max-w-lg font-manrope text-sm leading-7 text-[#746b64]">
              {content.companyDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {(isSpanish
                ? ["Ventas", "Operaciones", "Marketing", "Coordinación"]
                : ["Sales", "Operations", "Marketing", "Coordination"]
              ).map((item) => (
                <span
                  key={item}
                  className="border border-[#e9e0d6] px-3 py-2 font-sora text-[9px] font-semibold uppercase tracking-[0.08em] text-[#665b52]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#eee7df] pt-5">
              <span className="font-manrope text-xs text-[#85786d]">
                {isSpanish ? "Coordinación integral" : "End-to-end coordination"}
              </span>
              <span className="text-[#c78951] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </div>
          </article>

          <article
            className={`about-process-reveal group relative overflow-hidden border border-[#e5ddd3] bg-[#f0e9df] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#c78951]/60 hover:shadow-[0_22px_60px_rgba(48,34,22,0.08)] sm:p-9 lg:p-11 ${
              visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#c78951]/15 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex items-start justify-between gap-5">
              <div className="flex h-16 w-16 items-center justify-center bg-white/75 text-[#a96e3d] transition-colors duration-300 group-hover:bg-[#c78951] group-hover:text-white">
                <ContractorIcon />
              </div>
              <span className="font-sora text-[10px] font-bold tracking-[0.2em] text-[#a96e3d]">
                02
              </span>
            </div>

            <p className="mt-8 font-sora text-[10px] font-bold uppercase tracking-[0.19em] text-[#a96e3d]">
              {content.partnerLabel}
            </p>

            <h3 className="mt-4 max-w-md font-sora text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
              {content.partnerTitle}
            </h3>

            <p className="mt-4 max-w-lg font-manrope text-sm leading-7 text-[#746b64]">
              {content.partnerDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {(isSpanish
                ? ["Autorizados", "Asegurados", "Construcción", "Instalación"]
                : ["Licensed", "Insured", "Construction", "Installation"]
              ).map((item) => (
                <span
                  key={item}
                  className="border border-[#ded2c4] bg-white/50 px-3 py-2 font-sora text-[9px] font-semibold uppercase tracking-[0.08em] text-[#665b52]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#ded2c4] pt-5">
              <span className="font-manrope text-xs text-[#85786d]">
                {isSpanish ? "Construcción e instalación" : "Construction & installation"}
              </span>
              <span className="text-[#c78951] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </div>
          </article>
        </div>

        <div className="mt-20 sm:mt-24">
          <div
            className={`about-process-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
              visible ? "is-visible" : ""
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div>
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.23em] text-[#a96e3d]">
                {isSpanish ? "EL PROCESO" : "THE PROCESS"}
              </p>
              <h3 className="mt-4 max-w-2xl font-sora text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                {content.processTitle}
              </h3>
            </div>

            <p className="max-w-md font-manrope text-sm leading-7 text-[#746b64]">
              {content.processIntro}
            </p>
          </div>

          <div className="relative mt-9 grid gap-0 border-y border-[#e3d9ce] sm:grid-cols-3">

            {content.steps.map((step, index) => (
              <article
                key={step.number}
                className={`about-process-reveal group relative border-b border-[#e3d9ce] py-7 sm:border-b-0 sm:px-6 sm:py-8 ${
                  index > 0 ? "sm:border-l sm:border-[#e3d9ce]" : "sm:pl-0"
                } ${visible ? "is-visible" : ""}`}
                style={{ transitionDelay: `${360 + index * 130}ms` }}
              >
                <div className="relative z-10 flex h-[70px] w-[70px] items-center justify-center border border-[#ddc9b5] bg-[#f7f4ef] text-[#a96e3d] transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951] group-hover:text-white">
                  <ProcessIcon type={step.icon} />
                </div>

                <p className="mt-6 font-sora text-[10px] font-bold tracking-[0.18em] text-[#a96e3d]">
                  {step.number} / 03
                </p>

                <h4 className="mt-3 font-sora text-lg font-semibold tracking-[-0.02em]">
                  {step.title}
                </h4>

                <p className="mt-3 max-w-sm font-manrope text-sm leading-7 text-[#746b64]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className={`about-process-reveal mt-8 flex flex-col gap-4 border border-[#e5ddd3] bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
            visible ? "is-visible" : ""
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#c78951]" />
            <p className="font-manrope text-sm font-medium text-[#51473f]">
              {content.note}
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 self-start font-sora text-[10px] font-bold uppercase tracking-[0.13em] text-[#a96e3d] transition-colors hover:text-[#754523] sm:self-auto"
          >
            {isSpanish ? "Hablemos de tu proyecto" : "Let's discuss your project"}
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .about-process-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .about-process-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-process-reveal,
          .about-process-reveal.is-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}