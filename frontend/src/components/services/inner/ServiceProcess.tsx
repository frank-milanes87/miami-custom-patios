"use client";

import { useLang } from "@/lib/lang";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

type ServiceProcessProps = {
  steps: {
    en: ProcessStep[];
    es: ProcessStep[];
  };
};

export default function ServiceProcess({
  steps,
}: ServiceProcessProps) {
  const { lang } = useLang();

  const items = steps[lang];

  return (
    <section className="border-y border-black/10 bg-[var(--warm)] py-16 lg:py-24">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {lang === "en"
              ? "From concept to installation"
              : "Del concepto a la instalación"}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            {lang === "en"
              ? "How your project takes shape"
              : "Cómo toma forma su proyecto"}
          </h2>
        </div>

        <div className="relative mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-0 hidden h-px bg-black/10 lg:block" />

          {items.map((step) => (
            <article
              key={step.number}
              className="group relative border-l border-black/10 py-7 pl-5 transition-colors duration-300 sm:py-8 lg:border-l-0 lg:pl-6 lg:pr-8"
            >
              <span className="relative z-10 inline-flex h-8 min-w-8 items-center justify-center border border-[var(--accent)] bg-[var(--light-bg)] px-2 text-[10px] font-bold tracking-[0.15em] text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                {step.number}
              </span>

              <h3 className="mt-5 max-w-xs text-sm font-bold uppercase leading-6 tracking-wide">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-black/60">
                {step.description}
              </p>

              <div className="mt-6 h-px w-8 bg-black/10 transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--accent)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}