"use client";

import { useLang } from "@/lib/lang";

export default function ServicesStatement() {
  const { lang } = useLang();

  const content = {
    en: {
      lines: ["Every property", "has its own", "potential."],
      description:
        "Miami Custom Patios brings together outdoor structures, exterior improvements, hardscape surfaces and South Florida protection solutions under one design-focused approach.",
      label: "Miami Custom Patios",
    },
    es: {
      lines: ["Cada propiedad", "tiene su propio", "potencial."],
      description:
        "Miami Custom Patios reúne estructuras exteriores, mejoras de propiedad, superficies de hardscape y soluciones de protección para el Sur de Florida bajo un enfoque centrado en el diseño.",
      label: "Miami Custom Patios",
    },
  };

  const t = content[lang];

  return (
    <section className="relative overflow-hidden bg-[var(--black)] py-24 text-white sm:py-28 lg:py-40">
      <div className="absolute left-0 top-0 h-px w-full bg-white/10" />

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[var(--accent)]/10 lg:h-[28rem] lg:w-[28rem]" />

      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/5 lg:h-[22rem] lg:w-[22rem]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 px-6 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16 lg:px-12">
        <div>
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--accent)]">
            {t.label}
          </p>

          <h2 className="max-w-6xl text-5xl font-semibold uppercase leading-[0.91] tracking-[-0.045em] sm:text-6xl lg:text-8xl xl:text-[7.5rem]">
            {t.lines.map((line, index) => (
              <span
                key={line}
                className={`block ${
                  index === t.lines.length - 1
                    ? "text-[var(--accent)]"
                    : "text-white"
                }`}
              >
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="relative lg:pb-2">
          <div className="absolute -left-5 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/40 to-transparent" />

          <p className="max-w-sm pl-6 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            {t.description}
          </p>

          <div className="mt-8 flex items-center gap-4 pl-6">
            <span className="h-px w-10 bg-[var(--accent)]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
              South Florida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}