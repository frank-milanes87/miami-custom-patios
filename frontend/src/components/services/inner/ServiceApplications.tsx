"use client";

import { useLang } from "@/lib/lang";

type Application = {
  number: string;
  title: string;
  description: string;
};

type ServiceApplicationsProps = {
  applications: {
    en: readonly {
      number: string;
      title: string;
      description: string;
    }[];
    es: readonly {
      number: string;
      title: string;
      description: string;
    }[];
  };
};

export default function ServiceApplications({
  applications,
}: ServiceApplicationsProps) {
  const { lang } = useLang();

  const items = applications[lang];

  return (
    <section
      id="applications"
      className="section-shell scroll-mt-40 py-20 lg:py-28"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          {lang === "en" ? "Applications" : "Aplicaciones"}
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {lang === "en" ? "Where it works" : "Dónde funciona"}
        </h2>

        <div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:gap-x-16">
          {items.map((item) => (
            <article
              key={item.number}
              className="group border-t border-black/10 py-8 transition-colors duration-300 hover:border-[var(--accent)] sm:py-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[var(--accent)]">
                  {item.number}
                </span>

                <span className="text-lg text-black/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </div>

              <h3 className="mt-5 max-w-lg text-2xl font-medium leading-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">
                {item.description}
              </p>

              <div className="mt-7 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}