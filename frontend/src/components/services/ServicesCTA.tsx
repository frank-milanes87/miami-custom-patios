"use client";

import { useLang } from "@/lib/lang";

export default function ServicesCTA() {
  const { lang } = useLang();

  const content = {
    en: {
      title: ["Ready to discuss", "your project?"],
      description:
        "Tell us what you're planning and we'll help you determine the right next step.",
      estimate: ["Get a free", "virtual estimate"],
      start: "Get Started",
      call: "Or call",
      free: "Virtual estimates are FREE.",
      policy:
        "In-home estimates are $75 and reimbursed if you move forward with your project within 30 days of receiving the estimate.",
    },
    es: {
      title: ["¿Listo para hablar", "de su proyecto?"],
      description:
        "Cuéntenos qué está planeando y le ayudaremos a determinar el próximo paso adecuado.",
      estimate: ["Obtenga un", "estimado virtual gratis"],
      start: "Comenzar",
      call: "O llame al",
      free: "Los estimados virtuales son GRATIS.",
      policy:
        "Los estimados en el hogar cuestan $75 y se reembolsan si continúa con su proyecto dentro de los 30 días posteriores a recibir el estimado.",
    },
  };

  const t = content[lang];

  return (
    <section className="border-t border-[#e5e2df] bg-[var(--background)]">
      <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-2">
        <div className="py-16 lg:border-r lg:border-[#e5e2df] lg:py-24 lg:pr-16">
          <h2 className="text-4xl font-semibold uppercase leading-tight tracking-[-0.03em] sm:text-5xl">
            <span className="block">{t.title[0]}</span>
            <span className="block">{t.title[1]}</span>
          </h2>

          <p className="mt-6 max-w-md leading-7 text-black/55">
            {t.description}
          </p>
        </div>

        <div className="border-t border-[#e5e2df] py-16 lg:border-t-0 lg:py-24 lg:pl-16">
          <p className="text-2xl font-semibold uppercase leading-tight tracking-[-0.02em] sm:text-3xl">
            <span className="block">{t.estimate[0]}</span>
            <span className="block">{t.estimate[1]}</span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/#contact"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-none bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:opacity-90"
            >
              {t.start}

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
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="tel:3055634756"
              className="inline-flex items-center gap-3 text-sm font-bold transition-colors hover:text-[var(--accent)]"
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
                className="text-[var(--accent)]"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>

              <span className="text-black/55">{t.call}</span>
              (305) 563-4756
            </a>
          </div>

          <div className="mt-10 grid border-t border-[#e5e2df] pt-6 sm:grid-cols-[auto_1fr] sm:gap-6">
            <p className="text-lg font-semibold">
              {t.free}
            </p>

            <p className="mt-2 text-sm leading-6 text-black/55 sm:mt-0">
              {t.policy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}