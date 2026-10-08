"use client";

import { useLang } from "@/lib/lang";

export default function ProjectPartners() {
  const { lang } = useLang();

  const partners = [
    {
      location: {
        en: "Medley, FL",
        es: "Medley, FL",
      },
      name: "American Aluminum Fabricators",
      category: {
        en: "Precision-Fabricated Impact Products",
        es: "Productos de Impacto Fabricados con Precisión",
      },
      description: {
        en: "Impact windows, doors and structural-grade aluminum components.",
        es: "Ventanas y puertas de impacto y componentes de aluminio de grado estructural.",
      },
      number: "01",
    },
    {
      location: {
        en: "Miami, FL",
        es: "Miami, FL",
      },
      name: "Garcells Interiors",
      category: {
        en: "Interior Design Collaboration",
        es: "Colaboración de Diseño de Interiores",
      },
      description: {
        en: "Full-scope interior design consultation and styling.",
        es: "Consultoría integral de diseño de interiores y estilismo.",
      },
      number: "02",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fef8fa] pb-16 sm:pb-18 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid border-t border-black/10 lg:grid-cols-2">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className={`group relative flex min-h-[420px] flex-col justify-between border-b border-black/10 py-10 sm:py-12 lg:min-h-[500px] lg:py-14 ${index === 0
                  ? "lg:border-r lg:pr-14"
                  : "lg:pl-14"
                }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#5f5a54]">
                  {lang === "en"
                    ? `Project partner · ${partner.location.en}`
                    : `Socio del proyecto · ${partner.location.es}`}
                </p>

                <span className="font-sora text-xs tracking-[0.15em] text-black/30">
                  {partner.number}
                </span>
              </div>

              <div className="mt-16 sm:mt-20">
                <h3 className="max-w-xl font-sora text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-[#110c0d] sm:text-4xl lg:text-[2.7rem]">
                  {partner.name}
                </h3>

                <div className="mt-6 h-px w-10 bg-[#c78951] transition-all duration-500 group-hover:w-20" />

                <p className="mt-6 max-w-md font-sora text-base font-medium leading-6 text-[#c78951] sm:text-lg">
                  {partner.category[lang]}
                </p>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#5f5a54] sm:text-[15px]">
                  {partner.description[lang]}
                </p>
              </div>

              <div className="mt-12 flex items-center">
                <button
                  type="button"
                  className="group/button inline-flex cursor-pointer items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#110c0d]"
                >
                  <span className="relative">
                    {lang === "en" ? "Learn More" : "Más Información"}

                    <span className="absolute -bottom-2 left-0 h-px w-full origin-left bg-[#110c0d] transition-transform duration-300 group-hover/button:scale-x-0" />
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover/button:border-[#c78951] group-hover/button:bg-[#c78951]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#c78951] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}