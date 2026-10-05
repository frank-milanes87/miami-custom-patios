"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

type RelatedService = {
  number: string;
  href: string;
  en: string;
  es: string;
};

type ServiceRelatedProps = {
  services: RelatedService[];
};

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M7 7h10v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceRelated({
  services,
}: ServiceRelatedProps) {
  const { lang } = useLang();

  return (
    <section className="section-shell pb-20 lg:pb-28">
      <div className="border-t border-black/10 pt-14 lg:pt-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              {lang === "en"
                ? "Explore more"
                : "Explore más"}
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "You may also be considering"
                : "También puede estar considerando"}
            </h2>
          </div>

          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 sm:block">
            {lang === "en"
              ? "Other services"
              : "Otros servicios"}
          </span>
        </div>

        <div className="mt-10 border-t border-black/10">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative flex items-center gap-5 overflow-hidden border-b border-black/10 py-7 transition-colors duration-300 sm:py-8"
            >
              <span className="w-8 shrink-0 text-[10px] font-bold tracking-[0.15em] text-[var(--accent)] sm:w-12">
                {service.number}
              </span>

              <span className="relative flex-1 text-xl font-medium leading-tight sm:text-2xl lg:text-3xl">
                {lang === "en" ? service.en : service.es}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white sm:h-12 sm:w-12">
                <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}