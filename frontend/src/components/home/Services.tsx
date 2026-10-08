"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";


const services = [
  {
    number: "01",
    title: {
      en: "Pergolas & Screen Enclosures",
      es: "Pérgolas y Cerramientos con Mosquitero",
    },
    description: {
      en: "Custom pergolas and screened outdoor living spaces designed for shade, comfort, and South Florida living.",
      es: "Pérgolas personalizadas y espacios exteriores con cerramiento de malla diseñados para sombra, comodidad y el clima del Sur de Florida.",
    },
    image: "/assets/images/project10.webp",
    alt: {
      en: "Custom modern pergola and screened pool patio in South Florida",
      es: "Pérgola moderna personalizada junto a una piscina en el Sur de Florida",
    },
    href: "/services/pergolas-screen-enclosures",
    featured: true,
  },
  {
    number: "02",
    title: {
      en: "Modern Fencing",
      es: "Cercas Modernas",
    },
    description: {
      en: "Wood, aluminum, and PVC fencing designed for privacy, security, durability, and curb appeal.",
      es: "Cercas modernas de madera, aluminio y PVC diseñadas para privacidad, seguridad, durabilidad y atractivo exterior.",
    },
    image: "/assets/images/modern-fancing.webp",
    alt: {
      en: "Modern outdoor privacy structure in South Florida",
      es: "Estructura moderna de privacidad para exteriores en el Sur de Florida",
    },
    href: "/services/modern-fencing",
  },
  {
    number: "03",
    title: {
      en: "Epoxy Flooring",
      es: "Pisos Epóxicos",
    },
    description: {
      en: "Durable epoxy flooring systems for garages and spaces that need a clean, resilient, easy-to-maintain surface.",
      es: "Sistemas de pisos epóxicos duraderos para garajes y espacios que requieren una superficie limpia, resistente y fácil de mantener.",
    },
    image: "/assets/images/epoxy-flooring.webp",
    alt: {
      en: "Residential epoxy flooring project in South Florida",
      es: "Proyecto residencial de pisos epóxicos en el Sur de Florida",
    },
    href: "/services/epoxy-flooring",
  },
  {
    number: "04",
    title: {
      en: "Concrete & Pavers",
      es: "Concreto y Pavers",
    },
    description: {
      en: "Durable concrete and paver installations for patios, pool decks, walkways, driveways, and outdoor living areas.",
      es: "Instalación de concreto y pavers duraderos para patios, áreas de piscina, caminos, entradas y espacios exteriores.",
    },
    image: "/assets/images/project8.webp",
    alt: {
      en: "Concrete paver patio and outdoor living area in South Florida",
      es: "Patio de pavers de concreto y espacio exterior en el Sur de Florida",
    },
    href: "/services/concrete-pavers",
  },
  {
    number: "05",
    title: {
      en: "Impact Windows & Doors",
      es: "Ventanas y Puertas de Impacto",
    },
    description: {
      en: "Impact windows and doors designed for protection, durability, energy efficiency, and South Florida conditions.",
      es: "Ventanas y puertas de impacto diseñadas para protección, durabilidad, eficiencia energética y las condiciones del Sur de Florida.",
    },
    image: "/assets/images/project4.webp",
    alt: {
      en: "Impact windows and doors on a South Florida home",
      es: "Ventanas y puertas de impacto en una vivienda del Sur de Florida",
    },
    href: "/services/impact-windows-doors",
  },
  {
    number: "06",
    title: {
      en: "Accordion Shutters",
      es: "Persianas Acordeón",
    },
    description: {
      en: "Durable accordion shutters providing convenient storm protection for South Florida homes.",
      es: "Persianas acordeón duraderas que proporcionan protección práctica contra tormentas para hogares del Sur de Florida.",
    },
    image: "/assets/images/accordion-shutters.webp",
    alt: {
      en: "Accordion shutters installed on a South Florida home",
      es: "Persianas acordeón instaladas en una vivienda del Sur de Florida",
    },
    href: "/services/accordion-shutters",
  },
  {
    number: "07",
    title: {
      en: "Modern Mailboxes",
      es: "Buzones Modernos",
    },
    description: {
      en: "Modern mailbox installations designed to complement your home's architecture and improve curb appeal.",
      es: "Instalación de buzones modernos diseñados para complementar la arquitectura de su hogar y mejorar su atractivo exterior.",
    },
    image: "/assets/images/modern-mailbox.webp",
    alt: {
      en: "Modern residential mailbox installation in South Florida",
      es: "Instalación de un buzón moderno residencial en el Sur de Florida",
    },
    href: "/services/modern-mailboxes",
  },
  {
    number: "08",
    title: {
      en: "Motorized Louvered Roofs",
      es: "Techos de Lamas Motorizados",
    },
    description: {
      en: "Motorized louvered roof systems designed to create flexible outdoor living spaces with adjustable shade and weather control.",
      es: "Sistemas de techos de lamas motorizados diseñados para crear espacios exteriores flexibles con sombra ajustable y mayor control frente al clima.",
    },
    image: "/assets/images/roof.webp",
    alt: {
      en: "Modern motorized louvered roof outdoor living space in South Florida",
      es: "Espacio exterior moderno con techo de lamas motorizado en el Sur de Florida",
    },
    href: "/services/motorized-louvered-roofs",
  },
  {
    number: "09",
    title: {
      en: "Outdoor Kitchens",
      es: "Cocinas Exteriores",
    },
    description: {
      en: "Custom outdoor kitchens designed for entertaining, cooking, dining, and comfortable South Florida outdoor living.",
      es: "Cocinas exteriores personalizadas diseñadas para cocinar, entretener, comer y disfrutar cómodamente de los espacios exteriores del Sur de Florida.",
    },
    image: "/assets/images/outdoor-kitchens.webp",
    alt: {
      en: "Custom outdoor kitchen and patio in South Florida",
      es: "Cocina exterior personalizada y patio en el Sur de Florida",
    },
    href: "/services/outdoor-kitchens",
  },
  {
    number: "10",
    title: {
      en: "Interior Design",
      es: "Diseño de Interiores",
    },
    description: {
      en: "Residential interior design focused on materials, finishes, furniture planning, and cohesive connections between indoor and outdoor spaces.",
      es: "Diseño interior residencial enfocado en materiales, acabados, planificación de muebles y conexiones coherentes entre espacios interiores y exteriores.",
    },
    image: "/assets/images/interior-design.webp",
    alt: {
      en: "Contemporary residential interior design in Miami",
      es: "Diseño interior residencial contemporáneo en Miami",
    },
    href: "/services/interior-design",
  },
  {
    number: "11",
    title: {
      en: "Artificial Turf",
      es: "Césped Artificial",
    },
    description: {
      en: "Artificial turf installation as a ground-finish option that complements patios, pool decks, pergolas, and paver projects. Material and installation included.",
      es: "Instalación de césped artificial como acabado para patios, áreas de piscina, pérgolas y proyectos con pavers. Material e instalación incluidos.",
    },
    image: "/assets/images/artificial-turf.webp",
    alt: {
      en: "Artificial turf installation complementing a South Florida outdoor living space",
      es: "Instalación de césped artificial complementando un espacio exterior en el Sur de Florida",
    },
    href: "/services/artificial-turf",
  },
];

export default function Services() {
  const { lang } = useLang();
  const featuredServiceNumbers = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];

  const featuredServices = services.filter((service) =>
    featuredServiceNumbers.includes(service.number),
  );
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[var(--background)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs">
              {lang === "en" ? "Our Services" : "Nuestros Servicios"}
            </p>

            <h2 className="font-sora mt-4 max-w-3xl text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.035em] text-[var(--black)] sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "Outdoor Living & Home Improvement Services"
                : "Servicios de Espacios Exteriores y Mejoras del Hogar"}
            </h2>
          </div>

          <p className="font-manrope max-w-xl text-sm leading-7 text-[var(--text)] sm:text-base lg:justify-self-end">
            {lang === "en"
              ? "From custom pergolas and outdoor kitchens to motorized louvered roofs, artificial turf, concrete and pavers, fencing, flooring, impact protection, and interior design, we create solutions tailored to South Florida homes."
              : "Desde pérgolas personalizadas y cocinas exteriores hasta techos de lamas motorizados, césped artificial, concreto y pavers, cercas, pisos, protección contra impactos y diseño de interiores, creamos soluciones adaptadas a los hogares del Sur de Florida."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-[2px] bg-[var(--background)] sm:grid-cols-3 lg:mt-14 lg:grid-cols-4">
  {featuredServices.map((service) => {
    const layoutClass = {
      "01": "sm:col-span-2 lg:col-span-3",
      "02": "sm:col-span-1 lg:col-span-1",

      "03": "sm:col-span-1 lg:col-span-1",
      "04": "sm:col-span-1 lg:col-span-1",
      "05": "sm:col-span-1 lg:col-span-2",

      "06": "sm:col-span-2 lg:col-span-1",
      "07": "sm:col-span-1 lg:col-span-1",

      "08": "sm:col-span-1 lg:col-span-1",
      "09": "sm:col-span-2 lg:col-span-1",
      "10": "sm:col-span-1 lg:col-span-1",

      "11": "sm:col-span-2 lg:col-span-3",
    }[service.number];

    return (
      <Link
        key={service.number}
        href={service.href}
        className={`group relative block min-h-[260px] overflow-hidden bg-[var(--black)] sm:min-h-[280px] lg:min-h-[300px] ${layoutClass}`}
      >
        <Image
          src={service.image}
          alt={service.alt[lang]}
          fill
          sizes={
            service.number === "01" ||
            service.number === "07"
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

        {/* Top hover line */}
        <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
          <div className="flex items-center gap-2">
            <span className="font-manrope text-[9px] font-bold tracking-[0.18em] text-[var(--accent)]">
              {service.number}
            </span>

            <span className="h-px w-5 bg-[var(--accent)]/70 transition-all duration-500 group-hover:w-10" />
          </div>

          <h3 className="font-sora mt-2 max-w-2xl text-lg font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-xl lg:text-[21px]">
            {service.title[lang]}
          </h3>

          <p className="font-manrope mt-2 max-w-2xl text-[10px] leading-5 text-white/75 sm:text-[11px] lg:text-xs">
            {service.description[lang]}
          </p>

          <span className="font-manrope mt-4 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.16em] text-white sm:text-[9px]">
            <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
              {lang === "en"
                ? "Explore Service"
                : "Ver Servicio"}
            </span>

            <span className="flex h-7 w-7 items-center justify-center border border-white/40 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-[var(--accent)] transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-white"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </span>
        </div>
      </Link>
    );
  })}
</div>
        <div className="mt-8 flex justify-center lg:mt-10">
          <Link
            href="/services"
            className="group inline-flex h-12 items-center gap-3 border border-black/15  px-7 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--black)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            {lang === "en"
              ? "View All Services"
              : "Ver Todos los Servicios"}

            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}