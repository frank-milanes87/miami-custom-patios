"use client";

import { useLang } from "@/lib/lang";

export default function ProjectsSouthFlorida() {
  const { lang } = useLang();

  const locations =
    lang === "en"
      ? ["Miami", "Miami-Dade", "Broward", "South Florida"]
      : ["Miami", "Miami-Dade", "Broward", "Sur de Florida"];

  return (
    <section className="relative overflow-hidden bg-[#171717] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
              {lang === "en"
                ? "South Florida"
                : "Sur de Florida"}
            </p>
          </div>

          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[2.8rem]">
            {lang === "en" ? (
              <>
                Built for
                <br />
                South Florida Living.
              </>
            ) : (
              <>
                Diseñado para
                <br />
                Vivir en el Sur de Florida.
              </>
            )}
          </h2>
        </div>

        <div>
          <p className="max-w-lg text-sm leading-7 text-white/55 sm:text-base">
            {lang === "en"
              ? "From Miami-Dade to Broward and surrounding South Florida communities, our projects are designed with the region's outdoor lifestyle and residential environments in mind."
              : "Desde Miami-Dade hasta Broward y las comunidades cercanas del Sur de Florida, nuestros proyectos están diseñados teniendo en cuenta el estilo de vida exterior y los entornos residenciales de la región."}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 sm:text-[11px]">
            {locations.map((location, index) => (
              <li
                key={location}
                className="flex items-center gap-6"
              >
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                )}

                <span className="transition-colors duration-300 hover:text-white">
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="section-shell relative mt-14">
        <div className="h-px origin-left bg-[var(--accent)]/30 animate-[lineGrow_1200ms_ease-out_forwards]" />
      </div>

      <style jsx>{`
        @keyframes lineGrow {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}