"use client";

import { useLang } from "@/lib/lang";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactCtaSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "¿TIENE PREGUNTAS?",
          title: "Hablemos de su proyecto.",
          description:
            "¿Prefiere hablar directamente con nuestro equipo? Estamos aquí para ayudarle a definir el próximo paso.",
          action: "LLAMAR AHORA",
          phoneLabel: "Llámenos directamente",
          phone: "(305) 563-4756",
          area: "MIAMI-DADE · BROWARD · SOUTH FLORIDA",
        }
      : {
          eyebrow: "HAVE QUESTIONS?",
          title: "Let's talk about your project.",
          description:
            "Prefer to speak with our team directly? We're here to help you figure out the right next step.",
          action: "CALL NOW",
          phoneLabel: "Call us directly",
          phone: "(305) 563-4756",
          area: "MIAMI-DADE · BROWARD · SOUTH FLORIDA",
        };

  return (
    <section className="relative overflow-hidden border-t border-black/10 bg-[#f0ebe3]">
      <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-[#110c0d]/[0.06]" />

      <div className="pointer-events-none absolute right-[-45px] top-1/2 h-[210px] w-[210px] -translate-y-1/2 rounded-full border border-[#110c0d]/[0.06]" />

      <div className="relative mx-auto max-w-[1380px] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#c78951]" />

              <p className="font-sora text-[9px] font-bold uppercase tracking-[0.24em] text-[#c78951]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-5 font-sora text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#110c0d] sm:text-4xl lg:text-[48px]">
              {content.title}
            </h2>

            <p className="mt-4 max-w-xl font-manrope text-sm leading-7 text-[#71696a]">
              {content.description}
            </p>

            <p className="mt-7 font-sora text-[9px] font-bold uppercase tracking-[0.18em] text-[#110c0d]/40">
              {content.area}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center lg:flex-col lg:items-end lg:text-right">
            <a
              href="tel:+13055634756"
              className="group flex items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#110c0d] text-[#c78951] transition-transform duration-300 group-hover:scale-105">
                <PhoneIcon />
              </span>

              <span>
                <span className="block font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-[#71696a]">
                  {content.phoneLabel}
                </span>

                <span className="mt-1 block font-sora text-2xl font-semibold tracking-[-0.035em] text-[#110c0d] sm:text-3xl">
                  {content.phone}
                </span>
              </span>
            </a>

            <a
              href="tel:+13055634756"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-3 bg-[#c78951] px-7 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#110c0d] transition-colors duration-300 hover:bg-[#110c0d] hover:text-white"
            >
              {content.action}

              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}