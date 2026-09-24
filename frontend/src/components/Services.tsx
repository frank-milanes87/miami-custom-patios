"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

const services = [
  {
    number: "01",
    title: {
      en: "Motorized Louvered Roof Pergolas",
      es: "Pérgolas con Techo de Lamas Motorizado",
    },
    description: {
      en: "Control sun, shade and rain with a refined adjustable roof system.",
      es: "Controla el sol, la sombra y la lluvia con un elegante sistema de techo ajustable.",
    },
    image: "/assets/images/project1.webp",
    href: "/services/motorized-louvered-roofs",
    featured: true,
  },
  {
    number: "02",
    title: {
      en: "Pergolas & Screen Enclosures",
      es: "Pérgolas y Cerramientos con Mosquitero",
    },
    description: {
      en: "Architectural shelter designed around your home and the South Florida climate.",
      es: "Protección arquitectónica diseñada para tu hogar y el clima del Sur de Florida.",
    },
    image: "/assets/images/project2.webp",
    href: "/services/pergolas-screen-enclosures",
  },
  {
    number: "03",
    title: {
      en: "Outdoor Kitchens & BBQ Islands",
      es: "Cocinas Exteriores e Islas BBQ",
    },
    description: {
      en: "Purpose-built cooking and entertaining spaces with durable premium finishes.",
      es: "Espacios diseñados para cocinar y entretener con acabados premium y duraderos.",
    },
    image: "/assets/images/project3.webp",
    href: "/services/outdoor-kitchens",
  },
  {
    number: "04",
    title: {
      en: "Pavers, Travertine & Concrete Decking",
      es: "Pavers, Travertino y Decking de Concreto",
    },
    description: {
      en: "Cohesive hardscapes that frame pools, patios and gathering spaces.",
      es: "Superficies exteriores que complementan piscinas, patios y espacios sociales.",
    },
    image: "/assets/images/project4.webp",
    href: "/services/pavers-concrete",
  },
  {
    number: "05",
    title: {
      en: "Custom Fencing",
      es: "Cercas Personalizadas",
    },
    description: {
      en: "Wood, aluminum and PVC solutions balancing privacy, security and curb appeal.",
      es: "Soluciones de madera, aluminio y PVC que combinan privacidad, seguridad y atractivo exterior.",
    },
    image: "/assets/images/project5.webp",
    href: "/services/fencing",
  },
  {
    number: "06",
    title: {
      en: "Modern Architectural Aluminum Mailboxes",
      es: "Buzones Arquitectónicos Modernos de Aluminio",
    },
    description: {
      en: "Crisp, tailored details that complement modern South Florida homes.",
      es: "Detalles modernos y personalizados que complementan los hogares del Sur de Florida.",
    },
    image: "/assets/images/project6.webp",
    href: "/services/mailboxes",
  },
  {
    number: "07",
    title: {
      en: "High-Grade Epoxy Flooring",
      es: "Pisos Epóxicos de Alta Calidad",
    },
    description: {
      en: "Resilient, polished floor systems for garages and outdoor living areas.",
      es: "Sistemas de pisos resistentes y elegantes para garajes y espacios exteriores.",
    },
    image: "/assets/images/project7.webp",
    href: "/services/epoxy-flooring",
  },
  {
    number: "08",
    title: {
      en: "Hurricane Impact Windows & Doors",
      es: "Ventanas y Puertas de Impacto para Huracanes",
    },
    description: {
      en: "Impact products fabricated for demanding coastal conditions.",
      es: "Productos de impacto fabricados para las exigentes condiciones costeras.",
    },
    image: "/assets/images/project8.webp",
    href: "/services/impact-windows-doors",
  },
  {
    number: "09",
    title: {
      en: "Accordion Shutters",
      es: "Persianas Acordeón",
    },
    description: {
      en: "Practical storm protection integrated with care into your property.",
      es: "Protección práctica contra tormentas integrada cuidadosamente en tu propiedad.",
    },
    image: "/assets/images/project9.webp",
    href: "/services/accordion-shutters",
  },
  {
    number: "10",
    title: {
      en: "Interior Design Services",
      es: "Servicios de Diseño de Interiores",
    },
    description: {
      en: "A connected approach from outdoor architecture to interior styling.",
      es: "Un enfoque conectado desde la arquitectura exterior hasta el diseño interior.",
    },
    image: "/assets/images/project10.webp",
    href: "/services/interior-design",
    featured: true,
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
              {lang === "en" ? "Our Capabilities" : "Nuestras Capacidades"}
            </p>

            <h2 className="font-sora mt-4 max-w-3xl text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.035em] text-[var(--black)] sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "Complete Outdoor Living Solutions"
                : "Soluciones Completas para la Vida Exterior"}
            </h2>
          </div>

          <p className="font-manrope max-w-xl text-sm leading-7 text-[var(--text)] sm:text-base lg:justify-self-end">
            {lang === "en"
              ? "From custom pergolas to complete outdoor spaces, we design and build solutions tailored to South Florida living."
              : "Desde pérgolas personalizadas hasta espacios exteriores completos, diseñamos y construimos soluciones adaptadas al estilo de vida del Sur de Florida."}
          </p>
        </div>

      <div className="mt-10 grid grid-cols-2 gap-[2px] bg-[var(--background)] lg:mt-14 lg:grid-cols-3">
  {services.map((service) => (
    <Link
      key={service.number}
      href={service.href}
      className={`group relative block overflow-hidden bg-[var(--black)] ${
        service.featured
          ? "col-span-2 min-h-[250px] sm:min-h-[300px] lg:min-h-[330px] lg:col-span-2"
          : "min-h-[250px] sm:min-h-[300px] lg:min-h-[330px]"
      }`}
    >
      <Image
        src={service.image}
        alt={service.title[lang]}
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
            {lang === "en" ? "Explore" : "Explorar"}
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