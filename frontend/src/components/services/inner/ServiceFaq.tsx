"use client";

import { useLang } from "@/lib/lang";
import { useState } from "react";

type FaqItem = {
  number: string;
  question: string;
  answer: string;
};

type ServiceFaqProps = {
  items: {
    en: FaqItem[];
    es: FaqItem[];
  };
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
        open
          ? "rotate-180 text-[var(--accent)]"
          : "text-black/35"
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

export default function ServiceFaq({
  items,
}: ServiceFaqProps) {
  const { lang } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = items[lang];

  return (
    <section
      id="faq"
      className="section-shell scroll-mt-40 py-20 lg:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            {lang === "en"
              ? "Before you begin"
              : "Antes de comenzar"}
          </p>

          <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
            {lang === "en"
              ? "Your questions, answered."
              : "Sus preguntas, respondidas."}
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-black/50">
            {lang === "en"
              ? "A few common questions to consider before planning your project."
              : "Algunas preguntas comunes que puede considerar antes de planificar su proyecto."}
          </p>
        </div>

        <div className="border-t border-black/10">
          {faqItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.number}
                className="group border-b border-black/10"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                  className="flex w-full items-center gap-5 py-6 text-left transition-all duration-300 sm:py-7"
                >
                  <span className="hidden text-[10px] font-bold tracking-[0.15em] text-[var(--accent)] sm:block">
                    {item.number}
                  </span>

                  <span className="flex-1 text-base font-medium leading-6 sm:text-lg">
                    {item.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[var(--accent)]">
                    <ChevronDown open={open} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-0 text-sm leading-7 text-black/60 sm:pl-9 sm:pr-12">
                      {item.answer}
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