"use client";

import { useLang } from "@/lib/lang";

type ServiceIntroductionProps = {
  content: {
    title: string;
    paragraphs: string[];
  };
};

export default function ServiceIntroduction({
  content,
}: ServiceIntroductionProps) {
  const { lang } = useLang();

  return (
    <section
      id="introduction"
      className="section-shell scroll-mt-40 py-20 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">
            {lang === "en"
              ? "01 / The perspective"
              : "01 / La perspectiva"}
          </p>

          <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <div className="space-y-5 border-l border-black/10 pl-6 text-base leading-8 text-black/60 lg:pl-12">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}