"use client";

import Link from "next/link";
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
        strokeWidth="1.8"
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

export default function ReviewsHero() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "Experiencias de nuestros clientes",
          title: "Lo que dicen",
          highlight: "nuestros clientes",
          description:
            "Experiencias reales de propietarios que han trabajado con Miami Custom Patios en proyectos de espacios exteriores y mejoras residenciales en el sur de Florida.",
          tagline:
            "Detalles cuidados. Calidad artesanal. Espacios exteriores para disfrutar.",
          imageAlt: "Pérgola de lujo y patio exterior en el sur de Florida",
          primaryCta: "Solicitar un estimado gratis",
          secondaryCta: "Llamar al (305) 563-4756",
        }
      : {
          eyebrow: "Customer experiences",
          title: "What Our",
          highlight: "Customers Say",
          description:
            "Real experiences from homeowners who have worked with Miami Custom Patios on outdoor living and exterior improvement projects across South Florida.",
          tagline:
            "Thoughtful details. Quality craftsmanship. Outdoor spaces made for living.",
          imageAlt: "Luxury pergola and outdoor patio in South Florida",
          primaryCta: "Get Your Free Estimate",
          secondaryCta: "Call (305) 563-4756",
        };

  const text = content;

  return (
    <section
      id="reviews-hero"
      aria-labelledby="reviews-hero-title"
      className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#110c0d] text-white md:min-h-[680px]"
    >
      <div
        role="img"
        aria-label={text.imageAlt}
        className="absolute inset-0 -z-20 animate-hero-zoom bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/review-banner.webp')",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#110c0d]/95 via-[#110c0d]/75 to-[#110c0d]/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#110c0d]/65 via-transparent to-black/20"
      />

      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-[#c78951]/15 blur-[100px]" />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex animate-fade-up items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-[#c78951]" />

            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951] sm:text-[11px]">
              {text.eyebrow}
            </p>
          </div>

          <h1
            id="reviews-hero-title"
            className="mt-6 max-w-[650px] font-sora text-[2.4rem] font-semibold uppercase leading-[0.96] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[4.6rem]"
          >
            {text.title}
            <br />
            <span className="relative inline-block text-[#c78951]">
              {text.highlight}
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 animate-line-reveal bg-[#d49a68]" />
            </span>
          </h1>

          <p className="mt-7 max-w-xl animate-fade-up font-manrope text-base leading-8 text-white/75 [animation-delay:240ms] sm:text-lg">
            {text.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#c78951] px-6 font-sora text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#b47742] hover:shadow-[0_12px_30px_rgba(199,137,81,0.25)]"
            >
              {text.primaryCta}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </Link>

            <a
              href="tel:+13055634756"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/25 bg-black/10 px-6 font-sora text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
            >
              <PhoneIcon />
              {text.secondaryCta}
            </a>
          </div>

          <div className="mt-9 flex animate-fade-up items-center gap-4 [animation-delay:400ms]">
            <div className="h-12 w-1 shrink-0 bg-[#c78951]" />

            <p className="max-w-sm font-manrope text-xs leading-6 tracking-wide text-white/65 sm:text-sm">
              {text.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c78951]/70 to-transparent" />
    </section>
  );
}