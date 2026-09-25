"use client";

import EstimateForm from "@/components/EstimateForm";
import { useLang } from "@/lib/lang";

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
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
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const { lang, t } = useLang();

  const imageAlt =
    lang === "es"
      ? "Pérgola moderna junto a una piscina de Miami Custom Patios"
      : "Modern poolside pergola by Miami Custom Patios";

  const title =
    lang === "es"
      ? "Vida Exterior de Lujo"
      : "Luxury Outdoor Living";

  const titleAccent =
    lang === "es"
      ? "Construida para South Florida"
      : "Built For South Florida";

  const description =
    lang === "es"
      ? "Pérgolas, cubiertas para patios, cocinas exteriores, cercas, productos de impacto y soluciones completas para espacios exteriores diseñadas para hogares del Sur de Florida."
      : "Custom pergolas, patio covers, outdoor kitchens, fencing, impact products, and complete outdoor living solutions designed for South Florida homes.";

  const virtual =
    lang === "es" ? "Cotizaciones Virtuales" : "Virtual Estimates";

  const free = lang === "es" ? "GRATIS" : "FREE";

  const inHome =
    lang === "es" ? "Cotizaciones en Casa" : "In-Home Estimates";

  const reimbursement =
    lang === "es"
      ? "Se reembolsa completamente al avanzar con el proyecto dentro de 30 días."
      : "Fully reimbursed when you move forward within 30 days.";

  return (
    <section
      id="home"
      className="
        relative isolate overflow-hidden
        bg-[#110c0d] text-white
        pt-[72px]
        min-h-[940px]
        lg:min-h-[820px]
      "
    >
      {/* Background Image */}
      <img
        src="/assets/images/pergola-project-pool.webp"
        alt={imageAlt}
        className="
          absolute inset-0 -z-20
          h-full w-full
          object-cover object-center
        "
      />

      {/* Dark Gradient Overlay */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0 -z-10
          bg-[linear-gradient(90deg,rgba(17,12,13,0.96)_0%,rgba(17,12,13,0.72)_48%,rgba(17,12,13,0.30)_100%)]
        "
      />

      {/* Content Container */}
      <div
        className="
          mx-auto grid w-full
          min-h-[820px]
          max-w-[1440px]
          items-center
          gap-10
          px-6
          py-12
          lg:grid-cols-[minmax(0,1fr)_540px]
          lg:px-10
          lg:py-[72px]
        "
      >
        {/* Left Content */}
        <div className="max-w-3xl pt-8 lg:pt-0">
          {/* Eyebrow */}
          <p
            className="
              font-sora
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#c78951]
            "
          >
            {t.home.eyebrow}
          </p>

          {/* Heading */}
          <h1
            className="
              mt-6
              max-w-3xl
              font-sora
              text-5xl
              font-semibold
              uppercase
              leading-[0.98]
              tracking-[-0.035em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            {title}
            <br />

            <span className="text-[#c78951]">{titleAccent}</span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              font-manrope
              text-base
              leading-7
              text-[#a9a3a4]
              sm:text-lg
            "
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#estimate"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                gap-2
                bg-[#c78951]
                px-7
                font-sora
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-white
                transition-colors
                hover:bg-[#b47742]
                focus:outline-none
                focus:ring-2
                focus:ring-[#c78951]
                focus:ring-offset-2
                focus:ring-offset-[#110c0d]
              "
            >
              {t.home.estimate}
              <ArrowRightIcon />
            </a>

            <a
              href="tel:+13055634756"
              className="
                inline-flex
                h-[52px]
                items-center
                justify-center
                gap-2
                border
                border-white/20
                bg-transparent
                px-7
                font-sora
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-white
                transition-colors
                hover:bg-white/10
                hover:border-white/40
                focus:outline-none
                focus:ring-2
                focus:ring-white/40
              "
            >
              <PhoneIcon />
              {lang === "es"
                ? "Llamar al (305) 563-4756"
                : "Call (305) 563-4756"}
            </a>
          </div>

          {/* Estimate Pricing */}
          <div
            className="
              mt-8
              grid
              max-w-xl
              grid-cols-2
              border-y
              border-white/15
              py-4
            "
          >
            {/* Virtual */}
            <div className="pr-4">
              <p
                className="
                  font-manrope
                  text-sm
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                {virtual}
              </p>

              <p
                className="
                  mt-1
                  font-sora
                  text-2xl
                  font-semibold
                  text-[#c78951]
                "
              >
                {free}
              </p>
            </div>

            {/* In Home */}
            <div
              className="
                border-l
                border-white/15
                pl-4
              "
            >
              <p
                className="
                  font-manrope
                  text-sm
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                {inHome}
              </p>

              <p
                className="
                  mt-1
                  font-sora
                  text-2xl
                  font-semibold
                "
              >
                $75
              </p>

              <p
                className="
                  mt-1
                  max-w-[220px]
                  font-manrope
                  text-[11px]
                  leading-4
                  text-[#a9a3a4]
                "
              >
                {reimbursement}
              </p>
            </div>
          </div>
        </div>

        {/* Right - Estimate Form */}
        <div
          id="estimate"
          className="
            w-full
            lg:pt-4
          "
        >
          <div id="estimate">
      <EstimateForm />
   </div>
        
        </div>
      </div>
    </section>
  );
}