"use client";

import { useLang } from "@/lib/lang";

export default function ServicesCTA() {
  const { lang } = useLang();

  const content = {
    en: {
      eyebrow: "Start Your Project",
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
      eyebrow: "Comience Su Proyecto",
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
    <section className="relative overflow-hidden border-t border-[#e5e2df] bg-[var(--warm)]">
      <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[320px] w-[320px] rounded-full border border-[var(--accent)]/10" />
      <div className="pointer-events-none absolute right-[-70px] top-[-110px] h-[220px] w-[220px] rounded-full border border-[var(--accent)]/10" />

      <div className="mx-auto grid w-full max-w-[1440px] lg:grid-cols-2 px-6">
        <div className="relative py-16 sm:py-20 lg:border-r lg:border-[#e5e2df] lg:py-24 lg:pr-16 xl:py-28">
          <div className="absolute left-0 top-0 h-px w-16 bg-[var(--accent)] lg:w-24" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            {t.eyebrow}
          </p>

          <h2 className="font-sora mt-5 max-w-xl text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-[var(--black)] sm:text-5xl xl:text-[4.25rem]">
            <span className="block">{t.title[0]}</span>
            <span className="block">{t.title[1]}</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[var(--text)] sm:text-base">
            {t.description}
          </p>
        </div>

        <div className="relative border-t border-[#e5e2df] py-16 sm:py-20 lg:border-t-0 lg:py-24 lg:pl-16 xl:py-28">
          <div className="absolute left-0 top-0 h-px w-16 bg-[var(--accent)] lg:hidden" />

          <p className="font-sora text-2xl font-semibold uppercase leading-[1.05] tracking-[-0.025em] text-[var(--black)] sm:text-3xl lg:max-w-md xl:text-4xl">
            <span className="block">{t.estimate[0]}</span>
            <span className="block text-[var(--accent)]">{t.estimate[1]}</span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/#contact"
              className="group inline-flex h-13 w-full items-center justify-center gap-3 rounded-none bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
            >
              {t.start}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a
              href="tel:3055634756"
              className="group inline-flex min-h-13 w-full items-center justify-center gap-3 border border-black/10 px-5 text-sm font-bold text-[var(--black)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:w-auto sm:border-0 sm:px-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[var(--accent)]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>

              <span className="text-black/55">{t.call}</span>
              <span>(305) 563-4756</span>
            </a>
          </div>

          <div className="mt-10 border-t border-[#e5e2df] pt-6 sm:mt-12 sm:pt-7">
            <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

                <p className="font-sora text-lg font-semibold text-[var(--black)]">
                  {t.free}
                </p>
              </div>

              <p className="text-sm leading-6 text-[var(--text)] sm:mt-0">
                {t.policy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}