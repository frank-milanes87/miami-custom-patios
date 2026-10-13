"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M16 3 27 8v7c0 7-4.8 11.6-11 14-6.2-2.4-11-7-11-14V8l11-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m11 16 3.5 3.5 7-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutContractorNetwork() {
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
        eyebrow: "NUESTRA RED DE CONTRATISTAS",
        title: "Los profesionales",
        accent: "detrás de cada proyecto.",
        description:
          "Cada proyecto de construcción e instalación es realizado por contratistas generales y subcontratistas autorizados y asegurados de nuestra red de confianza en el sur de Florida.",
        detail:
          "Miami Custom Patios gestiona las ventas, las operaciones, el marketing y la coordinación del proyecto, mientras que nuestros socios cualificados se encargan de la construcción y la instalación.",
        badge: "PROFESIONALES AUTORIZADOS Y ASEGURADOS",
        imageAlt: "Pérgola personalizada en un patio residencial del sur de Florida",
        imageLabel: "CALIDAD EN CADA DETALLE",
        imageLocation: "SUR DE FLORIDA",
        point1: "Socios profesionales de confianza",
        point2: "Coordinación centralizada del proyecto",
        cta: "Conoce nuestro proceso",
      }
    : {
        eyebrow: "OUR CONTRACTOR NETWORK",
        title: "The Professionals",
        accent: "Behind the Work.",
        description:
          "Every construction and installation project is performed by licensed and insured general contractors and subcontractors within our trusted South Florida network.",
        detail:
          "Miami Custom Patios manages the sales, operations, marketing, and project coordination experience, while qualified contractor partners handle the construction and installation work.",
        badge: "LICENSED & INSURED PROFESSIONALS",
        imageAlt: "Custom pergola in a landscaped South Florida courtyard",
        imageLabel: "QUALITY IN EVERY DETAIL",
        imageLocation: "SOUTH FLORIDA",
        point1: "Trusted professional partners",
        point2: "Centralized project coordination",
        cta: "Discover Our Process",
      };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[#e7ded3] bg-[#f7f4ef] text-[#211a17]"
    >
      <div className="grid lg:min-h-[660px] lg:grid-cols-2">
        <div className="network-reveal relative min-h-[360px] overflow-hidden sm:min-h-[460px] lg:min-h-[660px]">
          <img
            src="/assets/images/artificial-turf.webp"
            alt={content.imageAlt}
            loading="lazy"
            className={`network-image absolute inset-0 h-full w-full object-cover ${
              visible ? "network-image-visible" : ""
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#110c0d]/75 via-transparent to-[#110c0d]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#110c0d]/10" />

          <div className="absolute inset-4 border border-white/35 sm:inset-6 lg:inset-8">
            <div className="absolute left-0 top-0 h-14 w-px bg-[#d39a67]" />
            <div className="absolute bottom-0 right-0 h-px w-20 bg-[#d39a67]" />
          </div>

          <div className="absolute bottom-9 left-8 right-8 flex items-end justify-between gap-4 sm:bottom-12 sm:left-12 sm:right-12 lg:bottom-14 lg:left-14 lg:right-14">
            <div>
              <p className="font-sora text-[9px] font-bold uppercase tracking-[0.2em] text-[#e7b98e]">
                {content.imageLocation}
              </p>
              <h3 className="mt-2 max-w-xs font-sora text-xl font-semibold uppercase leading-tight tracking-[0.02em] text-white sm:text-2xl">
                {content.imageLabel}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/50 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#d39a67] hover:bg-[#c78951]">
              <ArrowIcon />
            </div>
          </div>
        </div>

        <div className="relative flex items-center px-5 py-16 sm:px-10 sm:py-20 lg:px-10 lg:py-24 xl:px-14">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle,rgba(199,137,81,0.10),transparent_70%)]" />

          <div className="relative mx-auto w-full max-w-[680px]">
            <div
              className={`network-reveal flex items-center gap-3 ${
                visible ? "network-visible" : ""
              }`}
            >
              <span className="h-px w-11 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.23em] text-[#a96e3d] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2
              className={`network-reveal mt-6 font-sora text-3xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl lg:text-[3.25rem] ${
                visible ? "network-visible" : ""
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              {content.title}
              <span className="mt-1 block text-[#a96e3d]">
                {content.accent}
              </span>
            </h2>

            <p
              className={`network-reveal mt-6 font-manrope text-sm leading-7 text-[#71665d] sm:text-base sm:leading-8 ${
                visible ? "network-visible" : ""
              }`}
              style={{ transitionDelay: "220ms" }}
            >
              {content.description}
            </p>

            <div
              className={`network-reveal mt-7 flex gap-4 border-l-2 border-[#c78951] bg-white/65 p-5 sm:p-6 ${
                visible ? "network-visible" : ""
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <div className="shrink-0 text-[#a96e3d]">
                <ShieldIcon />
              </div>
              <div>
                <p className="font-sora text-[10px] font-bold uppercase leading-5 tracking-[0.14em] text-[#a96e3d]">
                  {content.badge}
                </p>
                <p className="mt-3 font-manrope text-sm leading-7 text-[#5f554d]">
                  {content.detail}
                </p>
              </div>
            </div>

            <div
              className={`network-reveal mt-7 space-y-4 ${
                visible ? "network-visible" : ""
              }`}
              style={{ transitionDelay: "420ms" }}
            >
              {[content.point1, content.point2].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-[#d9c4af] text-[#a96e3d]">
                    <span className="scale-[0.65]">
                      <ShieldIcon />
                    </span>
                  </span>
                  <span className="font-manrope text-sm font-medium text-[#51473f]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div
              className={`network-reveal mt-9 border-t border-[#e3d9ce] pt-6 ${
                visible ? "network-visible" : ""
              }`}
              style={{ transitionDelay: "520ms" }}
            >
              <a
                href="/contact"
                className="group inline-flex min-h-[50px] items-center gap-5 bg-[#c78951] px-6 py-4 font-sora text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#a96e3d]"
              >
                <span>{content.cta}</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .network-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 750ms cubic-bezier(0.2, 0.7, 0.2, 1),
            transform 750ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .network-reveal.network-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .network-image {
          transform: scale(1.06);
          transition: transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .network-image-visible {
          transform: scale(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .network-reveal,
          .network-reveal.network-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .network-image,
          .network-image-visible {
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}