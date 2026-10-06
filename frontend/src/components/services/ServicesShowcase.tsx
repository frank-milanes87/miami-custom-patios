"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { services } from "@/data/services";

const serviceContent = [
  {
    slug: "pergolas-screen-enclosures",

    en: {
      name: "Pergolas & Screen Enclosures",
      projectLine: "Custom outdoor structures for patios and pool areas",
      headline: [
        "Create an outdoor space",
        "that feels like an",
        "extension of your home.",
      ],
      body: "Custom pergolas and screen enclosures can turn patios, pool areas and underused outdoor spaces into more comfortable places to relax, entertain and spend time outdoors.",
      features: [
        "Custom outdoor structures",
        "Poolside applications",
        "Screened outdoor areas",
        "Shade & outdoor comfort",
        "Architectural integration",
      ],
      alt: "Custom pergola and screened outdoor living space in Miami",
    },

    es: {
      name: "Pérgolas y Cerramientos con Mosquitero",
      projectLine:
        "Estructuras exteriores personalizadas para patios y áreas de piscina",
      headline: [
        "Cree un espacio exterior",
        "que se sienta como una",
        "extensión de su hogar.",
      ],
      body: "Las pérgolas y los cerramientos con mosquitero a medida pueden convertir patios, áreas de piscina y espacios exteriores poco utilizados en lugares más cómodos para relajarse, recibir invitados y disfrutar del aire libre.",
      features: [
        "Estructuras exteriores personalizadas",
        "Aplicaciones junto a piscinas",
        "Áreas exteriores con mosquitero",
        "Sombra y comodidad exterior",
        "Integración arquitectónica",
      ],
      alt: "Pérgola personalizada y espacio exterior con mosquitero en Miami",
    },
  },

  {
    slug: "modern-fencing",

    en: {
      name: "Modern Fencing",
      projectLine: "Privacy and boundaries in wood, aluminum and PVC",
      headline: [
        "Privacy, boundaries",
        "and architectural",
        "character.",
      ],
      body: "Modern fencing can define a property while complementing the architecture of the home. Choose from wood, aluminum and PVC options for different privacy, appearance and property needs.",
      features: [
        "Wood fencing",
        "Aluminum fencing",
        "PVC fencing",
        "Privacy applications",
        "Property boundaries",
      ],
      alt: "Modern residential fencing in South Florida",
    },

    es: {
      name: "Cercas",
      projectLine: "Privacidad y límites en madera, aluminio y PVC",
      headline: [
        "Privacidad, límites",
        "y carácter",
        "arquitectónico.",
      ],
      body: "Las cercas modernas pueden delimitar una propiedad y, al mismo tiempo, complementar la arquitectura de la vivienda. Elija entre opciones de madera, aluminio y PVC según sus necesidades de privacidad, estética y las características de su propiedad.",
      features: [
        "Cercas de madera",
        "Cercas de aluminio",
        "Cercas de PVC",
        "Aplicaciones de privacidad",
        "Límites de propiedad",
      ],
      alt: "Cerca residencial moderna en el Sur de Florida",
    },
  },

  {
    slug: "epoxy-flooring",

    en: {
      name: "Epoxy Flooring",
      projectLine: "Finished surfaces for garages and patios",
      headline: [
        "A cleaner,",
        "more finished",
        "surface.",
      ],
      body: "Epoxy flooring provides a finished surface for garages and selected spaces, combining a refined appearance with practical day-to-day maintenance.",
      features: [
        "Garage applications",
        "Patio applications",
        "Finished appearance",
        "Easy cleaning",
        "Multiple finish possibilities",
      ],
      alt: "Epoxy flooring installation in South Florida",
    },

    es: {
      name: "Pisos Epóxicos",
      projectLine: "Superficies terminadas para garajes y patios",
      headline: [
        "Una superficie",
        "más limpia y",
        "mejor terminada.",
      ],
      body: "Los pisos epóxicos proporcionan una superficie terminada para garajes y otros espacios, combinando una apariencia refinada con un mantenimiento práctico.",
      features: [
        "Aplicaciones en garajes",
        "Aplicaciones en patios",
        "Apariencia terminada",
        "Fácil limpieza",
        "Múltiples posibilidades de acabado",
      ],
      alt: "Instalación de piso epóxico en el Sur de Florida",
    },
  },

  {
    slug: "concrete-pavers",

    en: {
      name: "Concrete & Pavers",
      projectLine: "Patios, walkways and pool deck surfaces",
      headline: [
        "The foundation",
        "of a great",
        "outdoor space.",
      ],
      body: "Concrete and paver surfaces create the foundation for patios, walkways, pool areas and outdoor entertaining spaces.",
      features: [
        "Patios",
        "Pool areas",
        "Walkways",
        "Paver surfaces",
        "Concrete surfaces",
      ],
      alt: "Concrete paver outdoor living area in South Florida",
    },

    es: {
      name: "Concreto y Pavers",
      projectLine:
        "Patios, caminos y superficies para áreas de piscina",
      headline: [
        "La base",
        "de un gran",
        "espacio exterior.",
      ],
      body: "Las superficies de concreto y pavers crean la base para patios, caminos, áreas de piscina y espacios exteriores para recibir invitados.",
      features: [
        "Patios",
        "Áreas de piscina",
        "Caminos",
        "Superficies de pavers",
        "Superficies de concreto",
      ],
      alt: "Área exterior con pavers de concreto en el Sur de Florida",
    },
  },

  {
    slug: "impact-windows-doors",

    en: {
      name: "Impact Windows & Doors",
      projectLine: "Storm protection and exterior upgrades",
      headline: [
        "Protection",
        "without losing",
        "the design.",
      ],
      body: "Impact windows and doors provide an opportunity to upgrade the appearance and performance of a South Florida home while considering storm protection and everyday use.",
      features: [
        "Impact windows",
        "Impact doors",
        "Storm protection",
        "Home security considerations",
        "Exterior upgrades",
      ],
      alt: "Impact windows and doors for a South Florida home",
    },

    es: {
      name: "Ventanas y Puertas de Impacto",
      projectLine:
        "Protección contra tormentas y mejoras exteriores",
      headline: [
        "Protección",
        "sin perder",
        "el diseño.",
      ],
      body: "Las ventanas y puertas de impacto ofrecen la oportunidad de mejorar la apariencia y el rendimiento de un hogar del Sur de Florida considerando la protección contra tormentas y el uso diario.",
      features: [
        "Ventanas de impacto",
        "Puertas de impacto",
        "Protección contra tormentas",
        "Consideraciones de seguridad",
        "Mejoras exteriores",
      ],
      alt: "Ventanas y puertas de impacto para un hogar del Sur de Florida",
    },
  },

  {
    slug: "accordion-shutters",

    en: {
      name: "Accordion Shutters",
      projectLine: "Practical storm preparation for openings",
      headline: [
        "Practical",
        "storm preparation",
        "for South Florida.",
      ],
      body: "Accordion shutters provide a practical way to prepare window and door openings for severe weather while remaining part of the home's exterior design.",
      features: [
        "Window protection",
        "Door opening protection",
        "Convenient operation",
        "Storm preparation",
        "Residential applications",
      ],
      alt: "Accordion shutters for a South Florida home",
    },

    es: {
      name: "Persianas Acordeón",
      projectLine:
        "Preparación práctica contra tormentas para aberturas",
      headline: [
        "Preparación práctica",
        "contra tormentas",
        "para el Sur de Florida.",
      ],
      body: "Las persianas acordeón ofrecen una forma práctica de preparar ventanas y puertas para condiciones climáticas severas mientras forman parte del diseño exterior del hogar.",
      features: [
        "Protección de ventanas",
        "Protección de puertas",
        "Operación conveniente",
        "Preparación contra tormentas",
        "Aplicaciones residenciales",
      ],
      alt: "Persianas acordeón para un hogar del Sur de Florida",
    },
  },

  {
    slug: "modern-mailboxes",

    en: {
      name: "Modern Mailboxes",
      projectLine: "Architectural details for curb appeal",
      headline: [
        "The details",
        "that complete",
        "the exterior.",
      ],
      body: "Modern architectural mailboxes add a refined finishing detail to contemporary homes and can be coordinated with fencing, entryways and other exterior elements.",
      features: [
        "Architectural designs",
        "Aluminum options",
        "Contemporary styling",
        "Curb appeal",
        "Exterior coordination",
      ],
      alt: "Modern architectural mailbox installation",
    },

    es: {
      name: "Buzones Modernos",
      projectLine:
        "Detalles arquitectónicos para mejorar el atractivo exterior",
      headline: [
        "Los detalles",
        "que completan",
        "el exterior.",
      ],
      body: "Los buzones arquitectónicos modernos agregan un detalle final refinado a los hogares contemporáneos y pueden coordinarse con cercas, entradas y otros elementos exteriores.",
      features: [
        "Diseños arquitectónicos",
        "Opciones de aluminio",
        "Estilo contemporáneo",
        "Atractivo exterior",
        "Coordinación exterior",
      ],
      alt: "Instalación de buzón arquitectónico moderno",
    },
  },

  {
    slug: "motorized-louvered-roofs",

    en: {
      name: "Motorized Louvered Roofs",
      projectLine: "Adjustable shade and outdoor comfort",
      headline: [
        "Control the light.",
        "Shape the shade.",
        "Enjoy the outdoors.",
      ],
      body: "Motorized louvered roofs provide adjustable outdoor coverage, allowing you to control shade and create a more flexible outdoor environment around your home.",
      features: [
        "Motorized louvers",
        "Adjustable shade",
        "Outdoor comfort",
        "Patio applications",
        "Contemporary design",
      ],
      alt: "Motorized louvered roof outdoor structure in South Florida",
    },

    es: {
      name: "Techos de Lamas Motorizados",
      projectLine: "Sombra ajustable y comodidad exterior",
      headline: [
        "Controle la luz.",
        "Defina la sombra.",
        "Disfrute el exterior.",
      ],
      body: "Los techos de lamas motorizados ofrecen una cobertura exterior ajustable, permitiendo controlar la sombra y crear un ambiente exterior más flexible alrededor de su hogar.",
      features: [
        "Lamas motorizadas",
        "Sombra ajustable",
        "Comodidad exterior",
        "Aplicaciones para patios",
        "Diseño contemporáneo",
      ],
      alt: "Techo de lamas motorizado para espacio exterior en el Sur de Florida",
    },
  },

  {
    slug: "outdoor-kitchens",

    en: {
      name: "Outdoor Kitchens",
      projectLine: "Custom outdoor cooking and entertaining spaces",
      headline: [
        "Bring the kitchen",
        "outside.",
        "Make it yours.",
      ],
      body: "Outdoor kitchens create dedicated spaces for cooking, dining and entertaining while extending the way you use your patio and outdoor living areas.",
      features: [
        "Outdoor cooking spaces",
        "Entertaining areas",
        "Custom layouts",
        "Patio integration",
        "Outdoor dining",
      ],
      alt: "Custom outdoor kitchen and entertaining area in Miami",
    },

    es: {
      name: "Cocinas Exteriores",
      projectLine:
        "Espacios personalizados para cocinar y recibir al aire libre",
      headline: [
        "Lleve la cocina",
        "al exterior.",
        "Hágala suya.",
      ],
      body: "Las cocinas exteriores crean espacios dedicados para cocinar, comer y recibir invitados, ampliando la forma en que utiliza su patio y sus áreas de vida exterior.",
      features: [
        "Espacios para cocinar al aire libre",
        "Áreas para recibir invitados",
        "Distribuciones personalizadas",
        "Integración con el patio",
        "Comedor exterior",
      ],
      alt: "Cocina exterior personalizada y área para recibir invitados en Miami",
    },
  },

  {
    slug: "interior-design",

    en: {
      name: "Interior Design",
      projectLine:
        "Thoughtful interior spaces designed around your home",
      headline: [
        "Interior spaces",
        "with purpose,",
        "character and balance.",
      ],
      body: "Interior design brings together layout, materials, finishes and furnishings to create spaces that feel cohesive with the home and the way you live.",
      features: [
        "Space planning",
        "Material selections",
        "Finish coordination",
        "Furniture direction",
        "Interior styling",
      ],
      alt: "Refined residential interior design in South Florida",
    },

    es: {
      name: "Diseño de Interiores",
      projectLine:
        "Espacios interiores diseñados pensando en su hogar",
      headline: [
        "Espacios interiores",
        "con propósito,",
        "carácter y equilibrio.",
      ],
      body: "El diseño de interiores reúne distribución, materiales, acabados y mobiliario para crear espacios que se sientan coherentes con el hogar y con la forma en que usted vive.",
      features: [
        "Planificación de espacios",
        "Selección de materiales",
        "Coordinación de acabados",
        "Orientación de mobiliario",
        "Estilismo interior",
      ],
      alt: "Diseño de interiores residencial refinado en el Sur de Florida",
    },
  },
];

export default function ServicesShowcase() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = serviceContent
      .map((service) => document.getElementById(service.slug))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visible[0]) {
          const index = serviceContent.findIndex(
            (service) =>
              service.slug === visible[0].target.id,
          );

          if (index !== -1) {
            setActive(index);
          }
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const jump = (slug: string) => {
    const section = document.getElementById(slug);

    if (!section) return;

    const headerOffset = 90;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth",
    });
  };

  const getImage = (slug: string) =>
    services.find((service) => service.slug === slug)?.image;

  return (
    <div className="relative">
      <nav
        aria-label="Service progress"
        className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 min-[1600px]:flex"
      >
        {serviceContent.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            onClick={() => jump(service.slug)}
            aria-label={service[lang].name}
            className={`pointer-events-auto cursor-pointer text-right text-[10px] font-bold tracking-widest transition-all ${
              active === index
                ? "text-[var(--accent)]"
                : "text-black/35 hover:text-black"
            }`}
          >
            {String(index + 1).padStart(2, "0")}

            <span
              className={`ml-1 inline-block h-px align-middle transition-all ${
                active === index
                  ? "w-8 bg-[var(--accent)]"
                  : "w-3 bg-[#d8d0c5]"
              }`}
            />
          </button>
        ))}
      </nav>
      {serviceContent.map((service, index) => {
        const content = service[lang];
        const image = getImage(service.slug);
        const flip = index % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-20 border-b border-[#e5e2df] py-16 lg:py-28 ${
              flip
                ? "bg-[#f8f4ee]"
                : "bg-[var(--background)]"
            }`}
          >
            <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-0 lg:px-12">
              <div
                className={`group overflow-hidden lg:col-span-6 ${
                  flip
                    ? "lg:order-2 lg:col-start-7"
                    : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f3eee7] lg:aspect-[5/6]">
                  {image ? (
                    <img
                      loading={index === 0 ? "eager" : "lazy"}
                      src={image}
                      alt={content.alt}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-[#f3eee7]">
                      <span className="font-sora text-[8rem] font-semibold leading-none text-[#ddd3c5] lg:text-[10rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                    <div className="border-t border-white/30 pt-5">
                      <div className="flex items-end justify-between gap-6">

                        <div>
                          <p className="font-sora text-lg font-semibold uppercase tracking-[-0.02em] text-white">
                            {content.name}
                          </p>

                          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                            {content.projectLine}
                          </p>
                        </div>

                        <span className="text-6xl font-semibold leading-none text-white/30 lg:text-8xl">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div
                className={`lg:col-span-5 ${
                  flip
                    ? "lg:order-1 lg:col-start-1 lg:pr-6"
                    : "lg:col-start-8"
                }`}
              >
                <div className="flex items-baseline gap-5 border-b border-[#e5e2df] pb-5">

                  <span className="font-sora text-6xl font-semibold leading-none text-[var(--accent)] lg:text-7xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h2 className="font-sora text-sm font-bold uppercase tracking-[0.18em]">
                      {content.name}
                    </h2>
                  </div>

                </div>

                <h3 className="mt-7 font-sora text-3xl font-semibold uppercase leading-[1.05] sm:text-4xl">
                  {content.headline.map((line) => (
                    <span
                      key={line}
                      className="block"
                    >
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="mt-6 leading-7 text-[var(--text)]">
                  {content.body}
                </p>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                  {lang === "en"
                    ? "Features"
                    : "Características"}
                </p>

                <ul className="mt-3 grid border-t border-[#e5e2df] sm:grid-cols-2 sm:gap-x-6">
                  {content.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 border-b border-[#e5e2df] py-3 text-sm"
                    >
                      <span className="size-1.5 shrink-0 bg-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* FEATURED FABRICATION PARTNER */}
                {index === 4 && (
                  <div className="mt-7 border-l-2 border-[var(--accent)] pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {lang === "en"
                        ? "Featured fabrication partner"
                        : "Socio de fabricación destacado"}
                    </p>

                    <p className="mt-1 font-semibold">
                      American Aluminum Fabricators
                    </p>

                    <p className="text-sm text-black/50">
                      Medley, Florida
                    </p>
                  </div>
                )}

                {/* EXPLORE SERVICE */}
                <Link
                  href={`/services/${service.slug}`}
                  className="group/cta mt-8 inline-flex items-center gap-3 border-b border-black pb-1 text-xs font-bold uppercase tracking-widest transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {lang === "en"
                    ? "Explore Service"
                    : "Explorar Servicio"}

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
                    className="transition-transform group-hover/cta:translate-x-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}