"use client";

import { useLang } from "@/lib/lang";

type Consideration = {
  number: string;
  en: {
    title: string;
    description: string;
  };
  es: {
    title: string;
    description: string;
  };
};

type ServiceConsiderationsProps = {
  considerations: Consideration[];
};

export default function ServiceConsiderations({
  considerations,
}: ServiceConsiderationsProps) {
  const { lang } = useLang();

  return (
    <section
      id="considerations"
      className="section-shell scroll-mt-40 py-20 lg:py-28"
    >
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
        {lang === "en" ? "Things to consider" : "Aspectos a considerar"}
      </h2>

      <div className="mt-10 grid gap-0 md:grid-cols-3 md:gap-8">
        {considerations.map((item) => {
          const content = item[lang];

          return (
            <article
              key={item.number}
              className="border-t border-[var(--accent)] py-6 md:py-7"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                {item.number}
              </span>

              <h3 className="mt-4 text-lg font-semibold leading-tight sm:text-xl">
                {content.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">
                {content.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}