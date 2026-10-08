"use client";

import { useLang } from "@/lib/lang";

export default function ProjectsCTA() {
  const { lang } = useLang();

  return (
    <section className="section-shell pb-24 lg:pb-22 sm:pt-20 pt-16">
      <div className="grid gap-12 rounded-sm bg-[var(--foreground)] px-6 py-14 text-white sm:px-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:px-16 lg:py-20">
        <div>
          <h2 className="text-3xl font-semibold leading-tight lg:text-[2.6rem]">
            {lang === "en" ? (
              <>
                Your Property
                <br />
                Could Be Next.
              </>
            ) : (
              <>
                Su Propiedad
                <br />
                Podría Ser la Próxima.
              </>
            )}
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
            {lang === "en"
              ? "Tell us what you're planning and we'll help you explore the right solution for your property."
              : "Cuéntenos qué está planeando y le ayudaremos a explorar la solución adecuada para su propiedad."}
          </p>
        </div>

        <div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex h-auto min-h-13 cursor-pointer items-center justify-center gap-2 whitespace-normal rounded-none bg-[var(--accent)] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-none transition-colors hover:brightness-95"
            >
              {lang === "en"
                ? "Get a free virtual estimate"
                : "Obtenga un estimado virtual gratis"}
            </a>

            <a
              href="tel:+13055634756"
              className="inline-flex h-auto min-h-13 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-none border border-white/15 bg-transparent px-7 text-xs font-bold uppercase tracking-widest text-white shadow-none transition-colors hover:bg-white/5"
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
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>

              {lang === "en"
                ? "Call (305) 563-4756"
                : "Llame al (305) 563-4756"}
            </a>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-white/15 pt-6 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                {lang === "en"
                  ? "Virtual estimate"
                  : "Estimado virtual"}
              </dt>

              <dd className="mt-1 font-semibold">
                {lang === "en" ? "FREE" : "GRATIS"}
              </dd>
            </div>

            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                {lang === "en"
                  ? "In-home estimate"
                  : "Estimado en el hogar"}
              </dt>

              <dd className="mt-1 font-semibold">$75</dd>
            </div>
          </dl>

          <p className="mt-4 text-xs leading-6 text-white/50">
            {lang === "en"
              ? "The $75 in-home estimate fee is reimbursed if you proceed with the project within 30 days of receiving the estimate."
              : "La tarifa de $75 del estimado en el hogar se reembolsa si continúa con el proyecto dentro de los 30 días de recibir el estimado."}
          </p>
        </div>
      </div>
    </section>
  );
}