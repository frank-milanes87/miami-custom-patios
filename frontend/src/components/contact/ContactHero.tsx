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

export default function ContactHero() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "CONTÁCTENOS",
          title: "Hablemos de Su Proyecto",
          accent: "Estamos Aquí Para Ayudar",
          description:
            "Cuéntenos sobre su proyecto y nuestro equipo le ayudará a encontrar el mejor camino para transformar su espacio.",
          location: "Sirviendo Miami-Dade y Broward",
          estimate: "Solicitar un Estimado Gratis",
          call: "Llamar al (305) 563-4756",
          virtual: "Estimados virtuales gratuitos",
          trust:
            "Construcción e instalación realizadas por profesionales licenciados y asegurados.",
        }
      : {
          eyebrow: "CONTACT US",
          title: "Let's Talk About Your Project",
          accent: "We're Here To Help",
          description:
            "Tell us about your project and our team will help you find the right path to transform your space.",
          location: "Serving Miami-Dade & Broward",
          estimate: "Request a Free Estimate",
          call: "Call (305) 563-4756",
          virtual: "Free virtual estimates",
          trust:
            "Construction and installation performed by licensed and insured professionals.",
        };

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#110c0d] text-white sm:min-h-[680px] lg:min-h-[720px]">
      <img
        src="/assets/images/roof.webp"
        alt={
          lang === "es"
            ? "Proyecto exterior personalizado de Miami Custom Patios"
            : "Custom outdoor living project by Miami Custom Patios"
        }
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,12,13,0.96)_0%,rgba(17,12,13,0.82)_38%,rgba(17,12,13,0.45)_68%,rgba(17,12,13,0.18)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(17,12,13,0.78)_0%,rgba(17,12,13,0.05)_55%,rgba(17,12,13,0.35)_100%)]"
      />


      <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-4 pt-30 pb-18 sm:min-h-[680px] sm:px-6 lg:min-h-[720px] lg:px-6 xl:px-12">
        <div className="w-full max-w-[680px]">
          <div className="animate-[contactFade_.8s_ease-out_both]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c78951] sm:w-10" />

              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h1 className="mt-6 max-w-[650px] font-sora text-[2.4rem] font-semibold uppercase leading-[0.96] tracking-[-0.04em] sm:text-[4rem] lg:text-[4.6rem]">
              {content.title}
              <br />
              <span className="text-[#c78951]">{content.accent}</span>
            </h1>

            <p className="mt-7 max-w-[560px] font-manrope text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {content.description}
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-7 bg-[#c78951]" />

              <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-white/75 sm:text-xs">
                {content.location}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#estimate"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#c78951] px-6 font-sora text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#b47742] hover:shadow-[0_12px_30px_rgba(199,137,81,0.25)]"
              >
                {content.estimate}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </Link>

              <a
                href="tel:+13055634756"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 border border-white/25 bg-black/10 px-6 font-sora text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:bg-white/10"
              >
                <PhoneIcon />
                {content.call}
              </a>
            </div>

            <div className="mt-10 flex max-w-[580px] flex-col border-t border-white/15 pt-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4 sm:pr-8">
                <div>
                  <p className="font-sora text-2xl font-semibold text-[#c78951]">
                    FREE
                  </p>

                  <p className="mt-1 font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                    {content.virtual}
                  </p>
                </div>
              </div>

              <div className="my-4 h-px w-full bg-white/10 sm:mx-8 sm:my-0 sm:h-9 sm:w-px" />

              <p className="max-w-[330px] font-manrope text-xs leading-5 text-white/55">
                {content.trust}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden border border-white/15 bg-black/30 px-5 py-3 backdrop-blur-md sm:block">
        <p className="font-sora text-[9px] font-bold uppercase tracking-[0.2em] text-[#c78951]">
          Miami Custom Patios
        </p>

        <p className="mt-1 font-manrope text-[10px] text-white/60">
          {content.location}
        </p>
      </div>

      <style jsx>{`
        @keyframes contactFade {
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
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}