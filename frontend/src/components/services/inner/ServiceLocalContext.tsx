"use client";

import { useLang } from "@/lib/lang";
type ServiceLocalContextProps = {
  title: {
    en: string;
    es: string;
  };
  counties: {
    en: string;
    es: string;
  };
  paragraphs: {
    en: readonly string[];
    es: readonly string[];
  };
};

export default function ServiceLocalContext({
  title,
  counties,
  paragraphs,
}: ServiceLocalContextProps) {
  const { lang } = useLang();

  return (
    <section
      id="local-context"
      className="scroll-mt-40 bg-[var(--foreground)] py-20 text-white lg:py-28"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              {lang === "en"
                ? "The local context"
                : "El contexto local"}
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
              {title[lang]}
            </h2>

            {counties && (
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
                {counties[lang]}
              </p>
            )}
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            {paragraphs[lang].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}