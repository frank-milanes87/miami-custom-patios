"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
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
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

export function AboutHero() {
  const { lang } = useLang();
  const isSpanish = lang === "es";
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setRevealed(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const content = isSpanish
    ? {
        home: "Inicio",
        about: "Nosotros",
        eyebrow: "QUIÉNES SOMOS",
        line1: "Una llamada.",
        line2: "Un equipo.",
        accent: "Cada detalle, resuelto.",
        description:
          "Miami Custom Patios es una empresa de ventas, operaciones y marketing que trabaja con una red de contratistas generales y subcontratistas autorizados y asegurados en todo el sur de Florida.",
        secondary:
          "Gestionamos el proceso de principio a fin, desde la primera estimación hasta el diseño, los permisos, la programación y la inspección final. Toda la construcción e instalación está a cargo de nuestros socios autorizados y asegurados.",
        estimate: "Obtener estimación virtual gratis",
        call: "Llamar al (305) 563-4756",
        location: "SUR DE FLORIDA",
        caption: "GESTIÓN DE PROYECTOS",
        process: "DE PRINCIPIO A FIN",
        imageAlt: "Pérgola moderna junto a una piscina en el sur de Florida",
        imageLabel: "ESPACIOS EXTERIORES PERSONALIZADOS",
      }
    : {
        home: "Home",
        about: "About",
        eyebrow: "WHO WE ARE",
        line1: "One Call.",
        line2: "One Team.",
        accent: "Every Detail Handled.",
        description:
          "Miami Custom Patios is a sales, operations, and marketing company working with our network of licensed and insured general contractors and subcontractors across South Florida.",
        secondary:
          "We handle the process from A to Z, from your first estimate through design, permits, scheduling, and final walkthrough. All construction and installation is performed by our licensed and insured partners.",
        estimate: "Get a Free Virtual Estimate",
        call: "Call (305) 563-4756",
        location: "SOUTH FLORIDA",
        caption: "PROJECT MANAGEMENT",
        process: "FROM A TO Z",
        imageAlt: "Luxury pergola and outdoor living space in South Florida",
        imageLabel: "CUSTOM OUTDOOR LIVING",
      };

  return (
    <section className="about-hero relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#110c0d] text-white sm:min-h-[710px] lg:min-h-[760px]">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/assets/images/roof.webp"
          alt={content.imageAlt}
          fetchPriority="high"
          className="about-hero-image h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[#110c0d]/35" />
      <div className="about-hero-shade absolute inset-0 -z-10" />
      <div className="about-hero-vignette pointer-events-none absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#c78951]/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-[790px]">
          <nav
            aria-label={isSpanish ? "Ruta de navegación" : "Breadcrumb"}
            className={`about-reveal mb-9 flex items-center gap-3 font-sora text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:mb-11 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <Link href="/" className="transition-colors duration-300 hover:text-[#d9a06e]">
              {content.home}
            </Link>
            <span className="text-[#c78951]">/</span>
            <span className="text-white">{content.about}</span>
          </nav>

          <div
            className={`about-reveal flex items-center gap-3 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "120ms" }}
          >
            <span className="h-px w-10 bg-[#c78951] sm:w-14" />
            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.26em] text-[#d9a06e] sm:text-[11px]">
              {content.eyebrow}
            </p>
          </div>

          <h1
            className={`about-reveal mt-6 font-sora text-[clamp(2.45rem,5.1vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.045em] sm:mt-7 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "220ms" }}
          >
            <span className="block">{content.line1}</span>
            <span className="block">{content.line2}</span>
            <span className="about-hero-heading-accent mt-1 block text-[#c78951]">
              {content.accent}
            </span>
          </h1>

          <p
            className={`about-reveal mt-6 max-w-2xl font-manrope text-sm leading-7 text-white/90 sm:mt-7 sm:text-base sm:leading-8 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "340ms" }}
          >
            {content.description}
          </p>

          <p
            className={`about-reveal mt-3 max-w-2xl font-manrope text-sm leading-7 text-white/75 sm:text-[15px] sm:leading-7 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "430ms" }}
          >
            {content.secondary}
          </p>

          <div
            className={`about-reveal mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "520ms" }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex min-h-[52px] items-center justify-between gap-5 overflow-hidden border border-[#d4a071]/70 bg-[#c78951] px-5 py-3.5 font-sora text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-[#e0b187] hover:bg-[#b47742] sm:justify-center sm:px-6 sm:text-[11px]"
            >
              <span className="about-button-shimmer pointer-events-none absolute inset-0" />
              <span className="relative">{content.estimate}</span>
              <span className="relative">
                <ArrowIcon />
              </span>
            </Link>

            <a
              href="tel:+13055634756"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-white/40 bg-black/20 px-5 py-3.5 font-sora text-[10px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#c78951] hover:bg-[#c78951]/15 sm:px-6 sm:text-[11px]"
            >
              <span className="text-[#d9a06e] transition-transform duration-300 group-hover:scale-110">
                <PhoneIcon />
              </span>
              <span>{content.call}</span>
            </a>
          </div>

          <div
            className={`about-reveal mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/25 pt-4 sm:mt-9 sm:gap-x-5 ${
              revealed ? "is-visible" : ""
            }`}
            style={{ animationDelay: "620ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="about-status-pulse absolute inline-flex h-full w-full rounded-full bg-[#c78951]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d9a06e]" />
            </span>
            <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85">
              {content.location}
            </span>
            <span className="h-px w-5 bg-[#c78951]" />
            <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.16em] text-[#e0b187]">
              {content.caption}
            </span>
            <span className="h-px w-5 bg-[#c78951]" />
            <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.16em] text-white/85">
              {content.process}
            </span>
          </div>
        </div>
      </div>

      <div className="about-hero-frame pointer-events-none absolute inset-x-4 inset-y-4 border border-white/10 sm:inset-x-6 sm:inset-y-6 lg:inset-x-8 lg:inset-y-8" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c78951]/70 to-transparent" />

      <style jsx>{`
        .about-hero-image {
          animation: heroKenBurns 24s ease-in-out infinite alternate;
          transform-origin: 55% 50%;
        }

        .about-hero-shade {
          background: linear-gradient(
            90deg,
            rgba(17, 12, 13, 0.96) 0%,
            rgba(17, 12, 13, 0.89) 29%,
            rgba(17, 12, 13, 0.69) 53%,
            rgba(17, 12, 13, 0.25) 100%
          );
        }

        .about-hero-vignette {
          background: linear-gradient(
              0deg,
              rgba(17, 12, 13, 0.72) 0%,
              transparent 30%,
              rgba(17, 12, 13, 0.12) 100%
            ),
            radial-gradient(
              ellipse at 72% 45%,
              transparent 15%,
              rgba(0, 0, 0, 0.24) 100%
            );
        }

        .about-reveal {
          opacity: 0;
          transform: translateY(20px);
        }

        .about-reveal.is-visible {
          animation: aboutReveal 850ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
        }


        .about-button-shimmer {
          transform: translateX(-140%) skewX(-18deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.23),
            transparent
          );
          transition: transform 800ms ease;
        }

        a:hover .about-button-shimmer {
          transform: translateX(140%) skewX(-18deg);
        }

        .about-status-pulse {
          animation: statusPulse 2.4s ease-out infinite;
        }

        .about-hero-frame {
          animation: frameAppear 1.5s ease-out 400ms both;
        }

        @keyframes heroKenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.09);
          }
        }

        @keyframes aboutReveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes copperFlow {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 100% center;
          }
        }

        @keyframes statusPulse {
          0% {
            transform: scale(1);
            opacity: 0.65;
          }
          100% {
            transform: scale(2.8);
            opacity: 0;
          }
        }

        @keyframes frameAppear {
          from {
            opacity: 0;
            inset: 18px;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .about-hero-shade {
            background: linear-gradient(
              90deg,
              rgba(17, 12, 13, 0.92),
              rgba(17, 12, 13, 0.72)
            );
          }

          .about-hero-image {
            object-position: 60% center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-hero-image,
          .about-hero-heading-accent,
          .about-status-pulse,
          .about-hero-frame {
            animation: none;
          }

          .about-reveal,
          .about-reveal.is-visible {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}