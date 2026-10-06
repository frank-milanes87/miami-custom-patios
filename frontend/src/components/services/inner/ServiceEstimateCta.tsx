"use client";

import { useLang } from "@/lib/lang";

type ServiceEstimateCtaProps = {
  number: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  subject: {
    en: string;
    es: string;
  };
};

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
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

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceEstimateCta({
  number,
  title,
  description,
  subject,
}: ServiceEstimateCtaProps) {
  const { lang } = useLang();

  const emailSubject = encodeURIComponent(subject[lang]);

  return (
    <section
      id="estimate"
      className="scroll-mt-40 overflow-hidden bg-[var(--foreground)] py-20 text-white lg:py-28"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="relative ps-6">
            <div className="absolute -left-0 top-1 hidden h-16 w-px bg-[var(--accent)] lg:block" />

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Miami Custom Patios / {number}
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {title[lang]}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              {description[lang]}
            </p>
          </div>

          <div className="border-l border-white/10 pl-6 lg:pl-12">
            <div className="flex flex-col gap-3 sm:items-start">
            <a
  href="/#contact"
  className="group inline-flex min-h-13 max-w-full items-center justify-center gap-3 bg-[var(--accent)] px-7 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:brightness-110"
>
  <span>
    {lang === "en"
      ? "Get a free virtual estimate"
      : "Obtenga un estimado virtual gratis"}
  </span>

  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
    <ArrowUpRight />
  </span>
</a>

              <a
                href="tel:+13055634756"
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-0 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-[var(--accent)]"
              >
                <PhoneIcon />
                {lang === "en"
                  ? "Call (305) 563-4756"
                  : "Llame al (305) 563-4756"}
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-bold">
                {lang === "en"
                  ? "Virtual estimates are FREE."
                  : "Los estimados virtuales son GRATIS."}
              </p>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/50">
                {lang === "en"
                  ? "In-home estimates are $75 and reimbursed if you move forward with your project within 30 days of receiving the estimate."
                  : "Los estimados en el hogar cuestan $75 y se reembolsan si continúa con su proyecto dentro de los 30 días de recibir el estimado."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}