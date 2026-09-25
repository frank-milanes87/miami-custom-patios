"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

const services = [
  {
    number: "01",
    title: {
      en: "Pergolas Screen Enclosures",
      es: "Pérgolas y Cerramientos con Mosquitero",
    },
    description: {
      en: "Custom pergolas and screened outdoor living spaces designed for shade, comfort, and South Florida living.",
      es: "Pérgolas personalizadas y espacios exteriores con cerramiento de malla diseñados para sombra, comodidad y el clima del Sur de Florida.",
    },
    image: "/assets/images/project2.webp",
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
      en: "Outdoor Kitchens",
      es: "Cocinas Exteriores",
    },
    description: {
      en: "Custom outdoor kitchens designed for cooking, entertaining, and comfortable year-round outdoor living.",
      es: "Cocinas exteriores personalizadas diseñadas para cocinar, recibir invitados y disfrutar de espacios exteriores durante todo el año.",
    },
    image: "/assets/images/project3.webp",
    alt: {
      en: "Outdoor living space in South Florida",
      es: "Espacio exterior residencial en el Sur de Florida",
    },
    href: "/services/outdoor-kitchens",
  },
  {
    number: "03",
    title: {
      en: "Concrete Pavers",
      es: "Pavers de Concreto",
    },
    description: {
      en: "Durable concrete paver installations for patios, pool decks, walkways, and outdoor living areas.",
      es: "Instalación de pavers de concreto duraderos para patios, áreas de piscina, caminos y espacios exteriores.",
    },
    image: "/assets/images/project8.webp",
    alt: {
      en: "Concrete paver patio and outdoor living area in South Florida",
      es: "Patio de pavers de concreto y espacio exterior en el Sur de Florida",
    },
    href: "/services/pavers-concrete",
  },
  {
    number: "04",
    title: {
      en: "Modern Fencing",
      es: "Cercas Modernas",
    },
    description: {
      en: "Wood, aluminum, and PVC fencing designed for privacy, security, durability, and curb appeal.",
      es: "Cercas modernas de madera, aluminio y PVC diseñadas para privacidad, seguridad, durabilidad y atractivo exterior.",
    },
    image: "/assets/images/project5.webp",
    alt: {
      en: "Modern outdoor privacy structure in South Florida",
      es: "Estructura moderna de privacidad para exteriores en el Sur de Florida",
    },
    href: "/services/fencing",
  },
  {
    number: "05",
    title: {
      en: "Epoxy Flooring",
      es: "Pisos Epóxicos",
    },
    description: {
      en: "Durable epoxy flooring systems for garages and spaces that need a clean, resilient, easy-to-maintain surface.",
      es: "Sistemas de pisos epóxicos duraderos para garajes y espacios que requieren una superficie limpia, resistente y fácil de mantener.",
    },
    image: "/assets/images/project7.webp",
    alt: {
      en: "Residential outdoor flooring project in South Florida",
      es: "Proyecto residencial de pisos exteriores en el Sur de Florida",
    },
    href: "/services/epoxy-flooring",
  },
  {
    number: "06",
    title: {
      en: "Impact Windows Doors",
      es: "Ventanas y Puertas de Impacto",
    },
    description: {
      en: "Impact windows and doors designed for protection, durability, energy efficiency, and South Florida conditions.",
      es: "Ventanas y puertas de impacto diseñadas para protección, durabilidad, eficiencia energética y las condiciones del Sur de Florida.",
    },
    image: "/assets/images/project8.webp",
    alt: {
      en: "South Florida residential exterior project",
      es: "Proyecto exterior residencial en el Sur de Florida",
    },
    href: "/services/impact-windows-doors",
  },
  {
    number: "07",
    title: {
      en: "Accordion Shutters",
      es: "Persianas Acordeón",
    },
    description: {
      en: "Durable accordion shutters providing convenient storm protection for South Florida homes.",
      es: "Persianas acordeón duraderas que proporcionan protección práctica contra tormentas para hogares del Sur de Florida.",
    },
    image: "/assets/images/project9.webp",
    alt: {
      en: "South Florida residential exterior with storm-ready construction",
      es: "Exterior residencial en el Sur de Florida con construcción preparada para tormentas",
    },
    href: "/services/accordion-shutters",
  },
  {
    number: "08",
    title: {
      en: "Modern Mailboxes",
      es: "Buzones Modernos",
    },
    description: {
      en: "Modern mailbox installations designed to complement your home's architecture and improve curb appeal.",
      es: "Instalación de buzones modernos diseñados para complementar la arquitectura de su hogar y mejorar su atractivo exterior.",
    },
    image: "/assets/images/project6.webp",
    alt: {
      en: "Modern residential exterior detail in South Florida",
      es: "Detalle moderno de un exterior residencial en el Sur de Florida",
    },
    href: "/services/mailboxes",
  },
];

export default function Services() {
  const { lang } = useLang();

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
              ? "From custom pergolas and outdoor kitchens to concrete pavers, fencing, flooring, impact protection, and exterior details, we build solutions tailored to South Florida homes."
              : "Desde pérgolas personalizadas y cocinas exteriores hasta pavers de concreto, cercas, pisos, protección contra tormentas y detalles exteriores, construimos soluciones adaptadas a los hogares del Sur de Florida."}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-[2px] bg-[var(--background)] lg:mt-14 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className={`group relative block overflow-hidden bg-[var(--black)] ${
                service.number === "01"
                  ? "col-span-2 min-h-[250px] sm:min-h-[300px] lg:col-span-3 lg:min-h-[330px]"
                  : service.number === "08"
                    ? "col-span-2 min-h-[250px] sm:min-h-[300px] lg:col-span-3 lg:min-h-[330px]"
                    : "min-h-[250px] sm:min-h-[300px] lg:min-h-[330px]"
              }`}
            >
              <Image
                src={service.image}
                alt={service.alt[lang]}
                fill
                sizes={
                  service.featured
                    ? "(min-width: 1024px) 66vw, 100vw"
                    : "(min-width: 640px) 50vw, 50vw"
                }
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
              />

              <div className="absolute inset-0 bg-black/25 transition-all duration-700 group-hover:bg-black/5" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

              <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-500 group-hover:-translate-y-1 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2">
                  <span className="font-manrope text-[8px] font-bold tracking-[0.18em] text-[var(--accent)] sm:text-[10px]">
                    {service.number}
                  </span>

                  <span className="h-px w-5 bg-[var(--accent)]/70 transition-all duration-500 group-hover:w-10" />
                </div>

                <h3 className="font-sora mt-2 text-[15px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-xl lg:text-[22px]">
                  {service.title[lang]}
                </h3>

                <p className="font-manrope mt-2 hidden text-xs leading-5 text-white/70 sm:block sm:text-sm">
                  {service.description[lang]}
                </p>

                <span className="font-manrope mt-3 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white sm:mt-5 sm:text-[10px] sm:tracking-[0.18em]">
                  <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {lang === "en" ? "Explore Service" : "Ver Servicio"}
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center border border-white/40 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] sm:h-7 sm:w-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 text-[var(--accent)] transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-white sm:h-3.5 sm:w-3.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}