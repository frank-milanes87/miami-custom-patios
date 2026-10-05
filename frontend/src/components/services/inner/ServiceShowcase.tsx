"use client";

import { useLang } from "@/lib/lang";

type ServiceShowcaseProps = {
  image: string;
  imageAlt: string;
  number: string;
  title: {
    en: string;
    es: string;
  };
  projectLabel: {
    en: string;
    es: string;
  };
};

export default function ServiceShowcase({
  image,
  imageAlt,
  number,
  title,
  projectLabel,
}: ServiceShowcaseProps) {
  const { lang } = useLang();

  return (
    <section className="section-shell scroll-mt-40 pb-20 lg:pb-28">
      <div>
        <div className="mb-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            {title[lang]}
          </h2>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {number} / Miami
          </p>
        </div>

        <figure className="group relative aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
          />

          <figcaption className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-between gap-2 bg-black/90 px-5 py-4 text-[9px] font-bold uppercase tracking-widest text-white">
            <span>{projectLabel[lang]}</span>
            <span>Miami / South Florida</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}