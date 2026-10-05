"use client";

import { useLang } from "@/lib/lang";
import { useState } from "react";

type ServiceOffering = {
  number: string;
  title: string;
  description: string;
};

type ServiceOfferingsProps = {
  offerings: {
    en: ServiceOffering[];
    es: ServiceOffering[];
  };
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 shrink-0 text-black/40 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceOfferings({
  offerings,
}: ServiceOfferingsProps) {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState(0);

  const items = offerings[lang];

  return (
    <section
      id="offerings"
      className="scroll-mt-40 border-y border-black/10"
    >
      <div className="section-shell grid gap-8 py-16 lg:grid-cols-[1fr_2fr]">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {lang === "en" ? "What we provide" : "Lo que ofrecemos"}
        </h2>

        <div>
          {items.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.number}
                className="border-b border-black/10"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                  className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left text-lg font-medium transition-all sm:text-2xl"
                >
                  <span className="flex items-center gap-6">
                    <span className="text-xs text-[var(--accent)]">
                      {item.number}
                    </span>

                    {item.title}
                  </span>

                  <ChevronDown open={open} />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-2xl pb-4 pl-10 text-sm leading-7 text-black/60">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}