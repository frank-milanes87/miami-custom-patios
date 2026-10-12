"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewsFinalCTA() {
  const { lang } = useLang();
  const isSpanish = lang === "es";

  const content = isSpanish
    ? {
        eyebrow: "HAGAMOS REALIDAD SU PROYECTO",
        title: "¿Listo para hablar",
        accent: "de su proyecto?",
        description:
          "Cuéntenos qué tiene en mente para su propiedad. Le ayudaremos a encontrar el siguiente paso adecuado.",
        estimate: "Obtenga una estimación virtual gratis",
        call: "Llamar al (305) 563-4756",
        note: "Una llamada. Un equipo. Cada detalle atendido.",
        pricingLabel: "COSTOS DE ESTIMACIÓN",
        virtual: "Estimación virtual",
        home: "Estimación en persona",
        free: "Gratis",
        fee: "$75",
        disclaimer:
          "La tarifa de $75 por la estimación en persona se reembolsa si continúa con el proyecto dentro de los 30 días posteriores a recibir la estimación.",
        emailSubject: "Estimación virtual gratis",
      }
    : {
        eyebrow: "LET'S BRING YOUR VISION TO LIFE",
        title: "Ready to talk about",
        accent: "your project?",
        description:
          "Tell us what you're planning for your property. We'll help you explore the right next step.",
        estimate: "Get a free virtual estimate",
        call: "Call (305) 563-4756",
        note: "One call. One team. Every detail handled.",
        pricingLabel: "ESTIMATE OPTIONS",
        virtual: "Virtual estimate",
        home: "In-home estimate",
        free: "Free",
        fee: "$75",
        disclaimer:
          "The $75 in-home estimate fee is reimbursed if you proceed with the project within 30 days of receiving the estimate.",
        emailSubject: "Free virtual estimate",
      };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--light-bg)] py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-[#c78951]/10 blur-[130px]" />
        <div className="absolute -bottom-56 left-[15%] h-[450px] w-[450px] rounded-full bg-[#c78951]/[0.06] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-7 max-w-3xl font-sora text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              {content.title}
              <br />
              <span className="text-[#c78951]">{content.accent}</span>
            </h2>

            <p className="mt-7 max-w-xl font-manrope text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
              {content.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="font-manrope group inline-flex min-h-[48px] items-center justify-between gap-2 bg-[#c78951] px-6 py-4 font-sora text-[12px] font-bold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-[#b47742] sm:justify-center sm:px-7"
              >
                <span>{content.estimate}</span>
                <ArrowUpRight />
              </Link>

              <a
                href="tel:+13055634756"
                className="group inline-flex min-h-[48px] items-center gap-3 border border-black/15  px-7 font-manrope text-[12px] font-bold uppercase tracking-[0.13em] text-[var(--black)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              >
                <PhoneIcon />
                <span>{content.call}</span>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c78951] shadow-[0_0_12px_rgba(199,137,81,0.7)]" />
              <p className="font-manrope text-xs tracking-wide text-black/45 sm:text-sm">
                {content.note}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <div className="relative border border-black/10 bg-white/[0.025] p-6 transition-colors duration-500 hover:border-[#c78951]/40 sm:p-8">
              <div className="absolute left-0 top-0 h-px w-16 bg-[#c78951]" />

              <p className="mb-6 font-sora text-[10px] font-bold uppercase tracking-[0.22em] text-[#c78951]">
                {content.pricingLabel}
              </p>

              <dl>
                <div className="flex items-center justify-between gap-4 border-t border-black/10 py-5">
                  <dt className="font-manrope text-sm text-black/60">
                    {content.virtual}
                  </dt>
                  <dd className="font-sora text-sm font-semibold text-[#d9a574]">
                    {content.free}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-black/10 py-5">
                  <dt className="font-manrope text-sm text-black/60">
                    {content.home}
                  </dt>
                  <dd className="font-sora text-sm font-semibold text-black">
                    {content.fee}
                  </dd>
                </div>
              </dl>

              <p className="border-t border-white/10 pt-5 font-manrope text-xs leading-6 text-black/45">
                {content.disclaimer}
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#c78951]">
                <span className="h-px w-6 bg-[#c78951]/60" />
                <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Miami Custom Patios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}