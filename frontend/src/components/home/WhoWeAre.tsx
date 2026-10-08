"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhoWeAreSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "QUIÉNES SOMOS",
          title: "Una llamada. Un equipo. Cada detalle resuelto.",
          intro:
            "Miami Custom Patios es una empresa de ventas, operaciones y marketing que trabaja con una red de contratistas generales y subcontratistas licenciados y asegurados en todo el Sur de Florida.",
          body:
            "Manejamos el proceso de principio a fin, desde su primer estimado hasta el diseño, permisos, programación y recorrido final. Toda la construcción e instalación es realizada por nuestros socios licenciados y asegurados.",
          points: [
            "Estimados y precios",
            "Diseño y planificación",
            "Permisos y programación",
            "Control de calidad y recorrido final",
          ],
          badge: "Profesionales licenciados y asegurados realizan la construcción",
          closing:
            "Un solo punto de contacto. Un solo plan. Un equipo de confianza.",
          link: "Conozca más sobre nosotros",
        }
      : {
          eyebrow: "WHO WE ARE",
          title: "One Call. One Team. Every Detail Handled.",
          intro:
            "Miami Custom Patios is a sales, operations, and marketing company working with a network of licensed and insured general contractors and subcontractors across South Florida.",
          body:
            "We manage the process from A to Z, from your first estimate through design, permits, scheduling, and final walkthrough. All construction and installation is performed by our licensed and insured partners.",
          points: [
            "Estimates & pricing",
            "Design & project planning",
            "Permits & scheduling",
            "Quality checks & final walkthrough",
          ],
          badge: "Licensed & insured professionals do the building",
          closing:
            "One point of contact. One clear plan. One trusted team.",
          link: "Learn More About Us",
        };

  return (
   <section className="relative overflow-hidden bg-[#110c0d] py-16 text-white sm:py-24 lg:py-32">
  <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
    <div className="grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative order-2 flex flex-col justify-center bg-[#1a1415] p-3 px-0 sm:px-10 sm:p-10 lg:order-1 lg:p-14 xl:p-16">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#c78951]/10 blur-3xl"
        />

        <div className="relative">
          <p className="font-sora text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c78951]">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-2xl font-sora text-3xl font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <div className="mt-8 max-w-2xl">
            <p className="font-manrope text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              {content.intro}
            </p>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#aaa3a4] sm:text-base">
              {content.body}
            </p>
          </div>

          <div className="mt-9 grid border-y border-white/10 sm:grid-cols-2">
            {content.points.map((point, index) => (
              <div
                key={point}
                className={`flex items-center gap-3 py-5 ${
                  index < 2 ? "border-b border-white/10" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-white/10 sm:pr-6"
                    : "sm:pl-6"
                }`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#c78951]/40 text-[#c78951]">
                  <CheckIcon />
                </span>

                <span className="font-manrope text-sm font-semibold text-white/90">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c78951] text-white">
                <CheckIcon />
              </span>

              <p className="max-w-sm font-manrope text-xs font-semibold uppercase leading-5 tracking-wide text-white/80">
                {content.badge}
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex h-12 shrink-0 items-center justify-center gap-3 bg-[#c78951] px-6 font-sora text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#b47742]"
            >
              {content.link}

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative order-1 min-h-[420px] overflow-hidden sm:min-h-[520px] lg:order-2 lg:min-h-[680px]">
        <img
          src="/assets/images/project10.webp"
          alt={
            lang === "es"
              ? "Espacio exterior personalizado por Miami Custom Patios"
              : "Custom outdoor living space by Miami Custom Patios"
          }
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#110c0d]/85 via-[#110c0d]/15 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
          <div className="max-w-sm border-l-2 border-[#c78951] pl-5">
            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.22em] text-[#c78951]">
              Miami Custom Patios
            </p>

            <p className="mt-3 font-sora text-xl font-semibold leading-tight text-white sm:text-2xl">
              {content.closing}
            </p>
          </div>
        </div>

        <div className="absolute right-5 top-5 border border-white/20 bg-[#110c0d]/70 px-4 py-3 backdrop-blur-sm sm:right-7 sm:top-7">
          <p className="font-sora text-[9px] font-bold uppercase tracking-[0.18em] text-[#c78951]">
            South Florida
          </p>

          <p className="mt-1 font-manrope text-xs text-white/75">
            Miami-Dade & Broward
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}