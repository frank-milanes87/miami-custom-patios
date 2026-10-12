"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

function ArrowRightIcon() {
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
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewsProjectsCTA() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "INSPÍRESE CON NUESTROS PROYECTOS",
          title: "Vea los proyectos",
          accent: "detrás de cada experiencia.",
          description:
            "Descubra proyectos terminados y conozca cómo Miami Custom Patios transforma espacios exteriores con diseños cuidados, materiales seleccionados y atención a cada detalle en el sur de Florida.",
          button: "Explorar nuestros proyectos",
          imageAlt:
            "Pérgola junto a una piscina en un espacio exterior de lujo en el sur de Florida",
          label: "ESPACIOS EXTERIORES PERSONALIZADOS",
          location: "MIAMI-DADE · BROWARD",
        }
      : {
          eyebrow: "GET INSPIRED BY OUR WORK",
          title: "See the projects",
          accent: "behind the experiences.",
          description:
            "Explore completed projects and discover how Miami Custom Patios transforms outdoor spaces through thoughtful design, carefully selected materials and attention to detail across South Florida.",
          button: "Explore Our Projects",
          imageAlt:
            "Poolside pergola in a luxury outdoor living space in South Florida",
          label: "CUSTOM OUTDOOR LIVING",
          location: "MIAMI-DADE · BROWARD",
        };

  return (
    <section className="relative isolate grid overflow-hidden lg:min-h-[650px] lg:grid-cols-2">
      <div className="group relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-full">
        <img
          src="/assets/images/project2.webp"
          alt={content.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#110c0d]/75 via-transparent to-[#110c0d]/10" />

        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 sm:p-9 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#c78951]" />
            <p className="font-sora text-[9px] font-bold uppercase tracking-[0.24em] sm:text-[10px]">
              {content.label}
            </p>
          </div>

          <p className="font-manrope text-xs tracking-wide text-white/70 sm:text-sm">
            {content.location}
          </p>
        </div>

        <div className="pointer-events-none absolute inset-5 border border-white/15 transition-all duration-700 group-hover:inset-3 sm:inset-7 sm:group-hover:inset-5" />
      </div>

      <div className="relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 sm:py-20 lg:px-14 xl:px-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-[#c78951]/[0.08] blur-[100px]"
        />

        <div className="relative max-w-xl animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#c78951]" />

            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.25em] text-[#c78951] sm:text-[11px]">
              {content.eyebrow}
            </p>
          </div>

          <h2 className="mt-7 font-sora text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.045em]  sm:text-4xl md:text-5xl xl:text-[3.5rem]">
            {content.title}
            <br />
            <span className="mt-1 inline-block text-[#c78951]">
              {content.accent}
            </span>
          </h2>

          <p className="mt-7 max-w-lg font-manrope text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
            {content.description}
          </p>

          <div className="mt-9">
            <Link
              href="/projects"
              className="group inline-flex min-h-[54px] w-full items-center justify-between gap-8 bg-[#c78951] px-6 font-sora text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#b47742] hover:shadow-[0_12px_35px_rgba(199,137,81,0.2)] sm:w-fit sm:min-w-[270px]"
            >
              {content.button}

              <ArrowRightIcon />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-white/10 pt-6">
            <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
              MIAMI CUSTOM PATIOS
            </span>

            <span className="h-px flex-1 bg-white/10" />

            <span className="font-sora text-[9px] uppercase tracking-[0.15em] text-[#c78951]">
              {lang === "es" ? "NUESTRO TRABAJO" : "OUR WORK"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}