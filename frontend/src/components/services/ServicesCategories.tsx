"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

const categories = {
  en: [
    {
      number: "01",
      title: "Outdoor Living",
      services: [
        {
          number: "01",
          name: "Pergolas & Screen Enclosures",
          slug: "pergolas-screen-enclosures",
        },
        {
          number: "04",
          name: "Concrete & Pavers",
          slug: "concrete-pavers",
        },
      ],
    },
    {
      number: "02",
      title: "Property & Curb Appeal",
      services: [
        {
          number: "02",
          name: "Modern Fencing",
          slug: "modern-fencing",
        },
        {
          number: "07",
          name: "Modern Mailboxes",
          slug: "modern-mailboxes",
        },
        {
          number: "03",
          name: "Epoxy Flooring",
          slug: "epoxy-flooring",
        },
      ],
    },
    {
      number: "03",
      title: "Home & Storm Protection",
      services: [
        {
          number: "05",
          name: "Impact Windows & Doors",
          slug: "impact-windows-doors",
        },
        {
          number: "06",
          name: "Accordion Shutters",
          slug: "accordion-shutters",
        },
      ],
    },
  ],

  es: [
    {
      number: "01",
      title: "Espacios Exteriores",
      services: [
        {
          number: "01",
          name: "Pérgolas y Cerramientos con Mosquitero",
          slug: "pergolas-screen-enclosures",
        },
        {
          number: "04",
          name: "Concreto y Pavers",
          slug: "concrete-pavers",
        },
      ],
    },
    {
      number: "02",
      title: "Propiedad y Atractivo Exterior",
      services: [
        {
          number: "02",
          name: "Cercas Modernas",
          slug: "modern-fencing",
        },
        {
          number: "07",
          name: "Buzones Modernos",
          slug: "modern-mailboxes",
        },
        {
          number: "03",
          name: "Pisos Epóxicos",
          slug: "epoxy-flooring",
        },
      ],
    },
    {
      number: "03",
      title: "Protección del Hogar y Tormentas",
      services: [
        {
          number: "05",
          name: "Ventanas y Puertas de Impacto",
          slug: "impact-windows-doors",
        },
        {
          number: "06",
          name: "Persianas Acordeón",
          slug: "accordion-shutters",
        },
      ],
    },
  ],
};

export default function ServicesCategories() {
  const { lang } = useLang();
  const currentCategories = categories[lang];

  return (
    <section className="bg-[var(--background)] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            {lang === "en" ? "Explore by Need" : "Explore por Necesidad"}
          </p>

          <h2 className="mt-5 text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {lang === "en"
              ? "What are you looking to improve?"
              : "¿Qué le gustaría mejorar?"}
          </h2>
        </div>

        <div className="mt-14 grid border-t border-black md:grid-cols-3 md:divide-x md:divide-[#e5e2df]">
          {currentCategories.map((category) => (
            <div
              key={category.number}
              className="border-b border-[#e5e2df] py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  {category.number}
                </p>

                <span className="h-px w-10 bg-[var(--accent)]" />
              </div>

              <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                {category.title}
              </h3>

              <ul className="mt-7 border-t border-[#e5e2df]">
                {category.services.map((service) => (
                  <li
                    key={service.slug}
                    className="border-b border-[#e5e2df]"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-4 py-4 text-sm transition-colors hover:text-[var(--accent)]"
                    >
                      <span>
                        <span className="mr-3 text-[10px] font-bold text-[var(--accent)]">
                          {service.number}
                        </span>

                        {service.name}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4 shrink-0 text-black/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                        aria-hidden="true"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}