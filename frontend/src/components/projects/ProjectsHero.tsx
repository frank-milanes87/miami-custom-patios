"use client";

import { useLang } from "@/lib/lang";

export default function ProjectsHero() {
  const { lang } = useLang();

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/assets/images/project10.webp"
          alt={
            lang === "en"
              ? "Custom outdoor living project in South Florida"
              : "Proyecto exterior personalizado en el Sur de Florida"
          }
          className="h-full w-full object-cover scale-105 animate-[heroZoom_12s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute left-0 top-0 h-full w-px bg-white/10 lg:left-[7%]" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1600px] items-end px-6 pb-16 pt-32 sm:px-10 lg:min-h-[760px] lg:px-16 lg:pb-20 xl:px-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--accent)]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70">
                {lang === "en"
                  ? "Our Projects"
                  : "Nuestros Proyectos"}
              </p>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
              {lang === "en" ? (
                <>
                  Outdoor Projects
                  <span className="block text-white/55">
                    Designed for
                  </span>
                  <span className="block">
                    South Florida Living.
                  </span>
                </>
              ) : (
                <>
                  Proyectos Exteriores
                  <span className="block text-white/55">
                    Diseñados para
                  </span>
                  <span className="block">
                    la Vida en Florida.
                  </span>
                </>
              )}
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              {lang === "en"
                ? "Explore a selection of custom outdoor living and exterior improvement projects completed by Miami Custom Patios across Miami-Dade, Broward and South Florida."
                : "Explore una selección de proyectos personalizados de espacios exteriores y mejoras residenciales realizados por Miami Custom Patios en Miami-Dade, Broward y el Sur de Florida."}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#gallery"
                className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[var(--accent)] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:brightness-110"
              >
                <span>
                  {lang === "en"
                    ? "Browse Projects"
                    : "Ver Proyectos"}
                </span>

                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10H16M11 5L16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="tel:+13055634756"
                className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-[var(--accent)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[var(--accent)]">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path
                      d="M5.2 3.2L7.3 2.7C7.8 2.6 8.3 2.9 8.5 3.4L9.4 5.7C9.6 6.1 9.5 6.6 9.1 6.9L7.8 7.9C8.7 9.8 10.2 11.3 12.1 12.2L13.1 10.9C13.4 10.5 13.9 10.4 14.3 10.6L16.6 11.5C17.1 11.7 17.4 12.2 17.3 12.7L16.8 14.8C16.7 15.4 16.2 15.8 15.6 15.8C9.3 15.8 4.2 10.7 4.2 4.4C4.2 3.8 4.6 3.3 5.2 3.2Z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span>
                  {lang === "en"
                    ? "(305) 563-4756"
                    : "(305) 563-4756"}
                </span>
              </a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="relative w-full max-w-xs border-l border-white/15 pl-7">
              <div className="absolute -left-px top-0 h-14 w-px bg-[var(--accent)]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                {lang === "en"
                  ? "Miami Custom Patios"
                  : "Miami Custom Patios"}
              </p>

              <p className="mt-5 text-4xl font-semibold tracking-tight">
                01<span className="text-white/25"> / 06</span>
              </p>

              <p className="mt-5 max-w-[220px] text-xs leading-6 text-white/50">
                {lang === "en"
                  ? "Custom spaces shaped around the property, lifestyle and South Florida environment."
                  : "Espacios personalizados diseñados alrededor de la propiedad, el estilo de vida y el entorno del Sur de Florida."}
              </p>
            </div>
          </div>
        </div>
        <a
          href="#gallery"
          className="absolute bottom-7 right-6 hidden items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-white/45 transition-colors hover:text-white sm:flex lg:right-16"
        >
          <span>
            {lang === "en" ? "Explore" : "Explorar"}
          </span>

          <span className="h-10 w-px bg-white/25" />

          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 animate-bounce"
            aria-hidden="true"
          >
            <path
              d="M8 2V13M4 9L8 13L12 9"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <style jsx>{`
        @keyframes heroZoom {
          from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          img {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}