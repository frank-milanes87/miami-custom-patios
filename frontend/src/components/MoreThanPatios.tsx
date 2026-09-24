"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

const services = [
  {
    number: "01",
    title: {
      en: "Pergolas",
      es: "Pérgolas",
    },
    description: {
      en: "Custom aluminum and motorized louvered structures made for year-round outdoor living.",
      es: "Estructuras personalizadas de aluminio y lamas motorizadas para disfrutar al aire libre todo el año.",
    },
    image: "/assets/images/project1.webp",
    href: "/services/pergolas-screen-enclosures",
  },
  {
    number: "02",
    title: {
      en: "Modern Aluminum Mailboxes",
      es: "Buzones Modernos de Aluminio",
    },
    description: {
      en: "Architectural curb appeal with clean lines and durable, weather-ready finishes.",
      es: "Atractivo arquitectónico con líneas limpias y acabados duraderos preparados para el clima.",
    },
    image: "/assets/images/project2.webp",
    href: "/services/mailboxes",
  },
  {
    number: "03",
    title: {
      en: "Custom Fencing",
      es: "Cercas Personalizadas",
    },
    description: {
      en: "Wood, aluminum and PVC systems designed for privacy, security and a polished look.",
      es: "Sistemas de madera, aluminio y PVC diseñados para privacidad, seguridad y una apariencia elegante.",
    },
    image: "/assets/images/project3.webp",
    href: "/services/fencing",
  },
  {
    number: "04",
    title: {
      en: "Epoxy Floors",
      es: "Pisos Epóxicos",
    },
    description: {
      en: "High-grade floor finishes for garages, patios and hard-working outdoor spaces.",
      es: "Acabados de pisos de alta calidad para garajes, patios y espacios exteriores de alto uso.",
    },
    image: "/assets/images/project4.webp",
    href: "/services/epoxy-flooring",
  },
  {
    number: "05",
    title: {
      en: "Impact Windows & Doors",
      es: "Ventanas y Puertas de Impacto",
    },
    description: {
      en: "Coastal-ready protection, energy performance and a refined architectural finish.",
      es: "Protección para zonas costeras, rendimiento energético y un acabado arquitectónico refinado.",
    },
    image: "/assets/images/project5.webp",
    href: "/services/impact-windows-doors",
  },
  {
    number: "06",
    title: {
      en: "Accordion Shutters",
      es: "Persianas Acordeón",
    },
    description: {
      en: "Dependable storm protection that is practical, streamlined and easy to operate.",
      es: "Protección confiable contra tormentas, práctica, elegante y fácil de operar.",
    },
    image: "/assets/images/project9.webp",
    href: "/services/accordion-shutters",
  },
];

export default function MoreThanPatios() {
  const { lang } = useLang();

  return (
    <section
      id="more-than-patios"
      className="scroll-mt-20 bg-[var(--warm)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16" >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs">
                {lang === "en"
                  ? "Expanded Capabilities"
                  : "Capacidades Ampliadas"}
              </p>
            </div>

            <h2 className="font-sora mt-5 max-w-3xl text-3xl font-semibold uppercase leading-[1.06] tracking-[-0.035em] text-[var(--black)] sm:text-4xl lg:text-5xl">
              {lang === "en" ? "More Than Patios" : "Más que Patios"}
            </h2>
          </div>

          <p className="font-manrope max-w-xl text-sm leading-7 text-[var(--text)] sm:text-base lg:justify-self-end">
            {lang === "en"
              ? "One trusted team for the exterior upgrades that protect, elevate and complete your home."
              : "Un equipo de confianza para las mejoras exteriores que protegen, elevan y completan tu hogar."}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-y-6">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-[0_18px_45px_rgba(17,12,13,0.10)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--black)]">
                <Image
                  src={service.image}
                  alt={service.title[lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

                <span className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center border border-white/25 bg-black/20 px-2 font-manrope text-[9px] font-bold tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                  {service.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>

              <div className="relative p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[var(--accent)] transition-all duration-500 group-hover:w-10" />

                  <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {lang === "en" ? "Service" : "Servicio"}
                  </span>
                </div>

                <h3 className="font-sora mt-3 text-lg font-semibold leading-tight tracking-[-0.02em] text-[var(--black)] sm:text-xl">
                  {service.title[lang]}
                </h3>

                <p className="font-manrope mt-3 text-xs leading-6 text-[var(--text)] sm:text-sm">
                  {service.description[lang]}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--black)] transition-colors group-hover:text-[var(--accent)]">
                    {lang === "en" ? "Explore Service" : "Explorar Servicio"}
                  </span>

                  <span className="h-px w-8 bg-black/15 transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--accent)]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-black/15 px-7 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--black)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
          >
            {lang === "en" ? "Explore All Services" : "Explorar Todos los Servicios"}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}