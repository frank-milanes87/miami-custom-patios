"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";
import { services } from "@/data/services";

const serviceItems = [
  {
    slug: "pergolas-screen-enclosures",
    en: {
      name: "Pergolas & Screen Enclosures",
      line: "Custom outdoor structures for patios and pool areas",
    },
    es: {
      name: "Pérgolas y Cerramientos con Mosquitero",
      line: "Estructuras exteriores personalizadas para patios y áreas de piscina",
    },
  },
  {
    slug: "modern-fencing",
    en: {
      name: "Fencing",
      line: "Wood, aluminum and PVC fencing for privacy and property boundaries",
    },
    es: {
      name: "Cercas",
      line: "Cercas de madera, aluminio y PVC para privacidad y límites de propiedad",
    },
  },
  {
    slug: "epoxy-flooring",
    en: {
      name: "Epoxy Flooring",
      line: "Durable finished surfaces for garages, patios and outdoor areas",
    },
    es: {
      name: "Pisos Epóxicos",
      line: "Superficies terminadas y duraderas para garajes, patios y áreas exteriores",
    },
  },
  {
    slug: "concrete-pavers",
    en: {
      name: "Concrete & Pavers",
      line: "Patios, walkways and pool deck surfaces designed around your property",
    },
    es: {
      name: "Concreto y Pavers",
      line: "Patios, caminos y superficies para áreas de piscina diseñadas para su propiedad",
    },
  },
  {
    slug: "impact-windows-doors",
    en: {
      name: "Impact Windows & Doors",
      line: "Storm protection and exterior upgrades for South Florida homes",
    },
    es: {
      name: "Ventanas y Puertas de Impacto",
      line: "Protección contra tormentas y mejoras exteriores para hogares del Sur de Florida",
    },
  },
  {
    slug: "accordion-shutters",
    en: {
      name: "Accordion Shutters",
      line: "Practical storm protection for windows, doors and exterior openings",
    },
    es: {
      name: "Persianas Acordeón",
      line: "Protección práctica contra tormentas para ventanas, puertas y aberturas exteriores",
    },
  },
  {
    slug: "modern-mailboxes",
    en: {
      name: "Modern Mailboxes",
      line: "Architectural mailbox solutions designed to complement your property",
    },
    es: {
      name: "Buzones Modernos",
      line: "Soluciones de buzones arquitectónicos diseñadas para complementar su propiedad",
    },
  },
  {
    slug: "motorized-louvered-roofs",
    en: {
      name: "Motorized Louvered Roofs",
      line: "Adjustable shade and outdoor comfort with motorized louver systems",
    },
    es: {
      name: "Techos de Lamas Motorizados",
      line: "Sombra ajustable y comodidad exterior con sistemas de lamas motorizadas",
    },
  },
  {
    slug: "outdoor-kitchens",
    en: {
      name: "Outdoor Kitchens",
      line: "Custom outdoor cooking and entertaining spaces built around your lifestyle",
    },
    es: {
      name: "Cocinas Exteriores",
      line: "Espacios personalizados para cocinar y entretener al aire libre",
    },
  },
  {
    slug: "interior-design",
    en: {
      name: "Interior Design",
      line: "Thoughtful interior spaces designed to complement your home",
    },
    es: {
      name: "Diseño de Interiores",
      line: "Espacios interiores cuidadosamente diseñados para complementar su hogar",
    },
  },
];

export default function ServicesGrid() {
  const { lang } = useLang();
  const [hovered, setHovered] = useState(0);

  const activeService = serviceItems[hovered];

  const activeImage = services.find(
    (service) => service.slug === activeService.slug,
  )?.image;

  /*
   * Scroll to the matching service section.
   *
   * 01 -> #pergolas-screen-enclosures
   * 02 -> #modern-fencing
   * 03 -> #epoxy-flooring
   * 04 -> #concrete-pavers
   * 05 -> #impact-windows-doors
   * 06 -> #accordion-shutters
   * 07 -> #modern-mailboxes
   * 08 -> #motorized-louvered-roofs
   * 09 -> #outdoor-kitchens
   * 10 -> #interior-design
   */
  const scrollToService = (slug: string) => {
    const section = document.getElementById(slug);

    if (!section) {
      console.warn(`Service section not found: #${slug}`);
      return;
    }

    const headerOffset = 90;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth",
    });

    // Update URL hash without triggering another browser jump
    window.history.replaceState(null, "", `#${slug}`);
  };

  return (
    <section
      id="service-index"
      className="scroll-mt-20 border-b border-[#e5e2df] bg-[var(--background)] py-16 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">

        {/* =========================================
            LEFT
        ========================================= */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            01 — 10
          </p>

          <h2 className="font-sora mt-4 text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-5xl">
            {lang === "en" ? "Our Services" : "Nuestros Servicios"}
          </h2>

          <p className="mt-5 max-w-sm text-[15px] leading-7 text-black/55">
            {lang === "en"
              ? "Ten specialties for outdoor living, property improvement, home protection and refined South Florida spaces."
              : "Diez especialidades para espacios exteriores, mejoras de propiedad, protección del hogar y espacios refinados en el Sur de Florida."}
          </p>

          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden bg-[#eee8df] lg:block">
            {activeImage && (
              <img
                key={activeImage}
                src={activeImage}
                alt={activeService[lang].name}
                className="h-full w-full object-cover transition-all duration-500"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                    {lang === "en"
                      ? "Featured Service"
                      : "Servicio Destacado"}
                  </p>

                  <p className="font-sora mt-2 text-xl font-semibold uppercase tracking-tight text-white">
                    {activeService[lang].name}
                  </p>
                </div>

                <span className="text-5xl font-semibold leading-none text-white/20">
                  {String(hovered + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--accent)]" />
          </div>
        </div>

        {/* =========================================
            RIGHT
        ========================================= */}
        <ol className="border-t border-[#e5e2df]">
          {serviceItems.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            const content = service[lang];
            const isActive = hovered === index;

            return (
              <li
                key={service.slug}
                className="border-b border-[#e5e2df]"
              >
                <button
                  type="button"
                  onClick={() => scrollToService(service.slug)}
                  onMouseEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  className={`group relative grid w-full cursor-pointer grid-cols-[3.5rem_1fr_auto] items-center gap-4 px-2 py-7 text-left transition-all duration-300 sm:grid-cols-[5rem_1fr_auto] sm:px-4 lg:py-8 ${
                    isActive
                      ? "bg-[#f3eee7]"
                      : "hover:bg-[#f3eee7]"
                  }`}
                >
                  {/* NUMBER */}
                  <span
                    className={`font-sora text-3xl font-semibold leading-none tracking-[-0.05em] transition-all duration-300 sm:text-4xl ${
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--warm-deep)] group-hover:text-[var(--accent)]"
                    }`}
                  >
                    {number}
                  </span>

                  {/* SERVICE NAME + DESCRIPTION */}
                  <span>
                    <span className="font-sora block text-lg font-semibold uppercase tracking-[-0.025em] sm:text-xl">
                      {content.name}
                    </span>

                    <span className="mt-1.5 block text-sm leading-6 text-[var(--text)] transition-colors group-hover:text-black/65">
                      {content.line}
                    </span>
                  </span>

                  {/* ARROW */}
                  <span
                    className={`flex size-10 items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                        : "border-[#d8d0c5] text-black/40 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>

                  {/* ACTIVE SIDE BAR */}
                  <span
                    className={`absolute bottom-0 left-0 top-0 w-[3px] origin-left bg-[var(--accent)] transition-transform duration-300 ${
                      isActive
                        ? "scale-y-100"
                        : "scale-y-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}