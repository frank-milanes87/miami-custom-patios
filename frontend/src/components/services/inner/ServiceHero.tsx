"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

type ServiceHeroProps = {
  content: {
    eyebrow: string;
    title: string;
    description: string;
    features: readonly string[];
    cta: string;
  };
  image: string;
  imageAlt: string;
  number: string;
  total: string;
  category: string;
  projectLabel: string;
};

export default function ServiceHero({
  content,
  image,
  imageAlt,
  number,
  projectLabel,
}: ServiceHeroProps) {
    const { lang } = useLang();

    const estimateSubject =
        lang === "en"
            ? `Virtual estimate — ${content.title}`
            : `Estimado virtual — ${content.title}`;

    return (
        <section className="section-shell pb-12 pt-26 lg:pb-16 lg:pt-30">
            <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-widest text-black/50"
            >
                <Link
                    href="/"
                    className="transition-colors hover:text-black"
                >
                    {lang === "en" ? "Home" : "Inicio"}
                </Link>

                <span>/</span>

                <Link
                    href="/services"
                    className="transition-colors hover:text-black"
                >
                    {lang === "en" ? "Services" : "Servicios"}
                </Link>

                <span>/</span>

                <span
                    className="text-black"
                    aria-current="page"
                >
                    {content.title}
                </span>
            </nav>

            <div className="mt-7 grid gap-x-14 gap-y-7 lg:grid-cols-[1.05fr_1fr]">
                <div className="lg:col-start-1 lg:row-start-1">
                    <p className="text-7xl font-medium leading-none text-[var(--accent)] sm:text-8xl">
                        {number}

                    <span className="ml-3 text-lg text-black/40">
  / 11
</span>
                    </p>

                    <p className="mt-7 text-[10px] font-bold uppercase tracking-widest text-black/50">
                        Miami Custom Patios / {number}
                    </p>

                    <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.16] sm:text-5xl xl:text-6xl">
                        {content.title}
                    </h1>

                    <p className="mt-7 max-w-lg text-base leading-7 text-black/60">
                        {content.description}
                    </p>
                </div>

                <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
                    <figure className="group relative aspect-[4/5] overflow-hidden lg:h-full lg:min-h-[560px] lg:aspect-auto">
                        <img
                            src={image}
                            alt={imageAlt}
                            loading="eager"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
                        />

                        <figcaption className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-between gap-2 bg-black/90 px-5 py-4 text-[9px] font-bold uppercase tracking-widest text-white">
                            <span>{projectLabel}</span>

                            <span>Miami / South Florida</span>
                        </figcaption>
                    </figure>
                </div>
<div className="lg:col-start-1 lg:row-start-2 lg:mt-0">
    <div className="flex flex-col gap-3 sm:items-start">
        <a
            href="/contact"
            className="inline-flex min-h-13 max-w-full items-center justify-center gap-2 rounded-none bg-[var(--accent)] px-7 py-4 text-center text-xs font-bold uppercase tracking-widest text-white shadow-none transition-colors hover:brightness-95"
        >
            {content.cta}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
            </svg>
        </a>

        <a
            href="tel:+13055634756"
            className="inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-none px-0 text-xs font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent)]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.05 10.95a16 16 0 0 0 4 4l1.31-1.31a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z"
                />
            </svg>

            {lang === "en"
                ? "Call (305) 563-4756"
                : "Llame al (305) 563-4756"}
        </a>
    </div>

    <a
        href="#introduction"
        className="mt-5 inline-flex items-center gap-2 text-xs text-black/50 transition-colors hover:text-black"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>

        {lang === "en"
            ? "Explore the possibilities"
            : "Explore las posibilidades"}
    </a>
</div>
            </div>
        </section>
    );
}