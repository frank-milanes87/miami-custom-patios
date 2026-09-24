"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/lang";

type Category =
  | "all"
  | "pergolas"
  | "kitchens"
  | "fencing"
  | "impact"
  | "epoxy"
  | "mailboxes";

const projects = [
  {
    id: 1,
    category: "pergolas" as Category,
    image: "/assets/images/project1.webp",
    title: {
      en: "Poolside Aluminum Pavilion",
      es: "Pabellón de Aluminio junto a la Piscina",
    },
    description: {
      en: "A clean-lined shade structure framing the pool terrace.",
      es: "Una estructura de sombra de líneas limpias que enmarca la terraza de la piscina.",
    },
    location: "Miami-Dade County",
  },
  {
    id: 2,
    category: "pergolas" as Category,
    image: "/assets/images/project2.webp",
    title: {
      en: "Garden Pergola Retreat",
      es: "Retiro de Pérgola en el Jardín",
    },
    description: {
      en: "A custom covered lounge designed for everyday outdoor living.",
      es: "Un espacio exterior cubierto diseñado para disfrutar todos los días.",
    },
    location: "South Florida",
  },
  {
    id: 3,
    category: "kitchens" as Category,
    image: "/assets/images/project3.webp",
    title: {
      en: "Outdoor Kitchen & BBQ",
      es: "Cocina Exterior y BBQ",
    },
    description: {
      en: "A complete entertaining space designed around outdoor cooking.",
      es: "Un espacio completo diseñado para cocinar y entretener al aire libre.",
    },
    location: "Broward County",
  },
  {
    id: 4,
    category: "fencing" as Category,
    image: "/assets/images/project4.webp",
    title: {
      en: "Modern Custom Fencing",
      es: "Cercado Moderno Personalizado",
    },
    description: {
      en: "Contemporary fencing balancing privacy, security and design.",
      es: "Cercado contemporáneo que combina privacidad, seguridad y diseño.",
    },
    location: "Miami-Dade County",
  },
  {
    id: 5,
    category: "impact" as Category,
    image: "/assets/images/project5.webp",
    title: {
      en: "Hurricane Impact Windows",
      es: "Ventanas de Impacto para Huracanes",
    },
    description: {
      en: "Impact-rated products designed for demanding coastal conditions.",
      es: "Productos de impacto diseñados para las exigentes condiciones costeras.",
    },
    location: "Miami Beach",
  },
  {
    id: 6,
    category: "epoxy" as Category,
    image: "/assets/images/project6.webp",
    title: {
      en: "Premium Epoxy Flooring",
      es: "Pisos Epóxicos Premium",
    },
    description: {
      en: "A durable polished floor system with a refined architectural finish.",
      es: "Un sistema de piso pulido y duradero con un acabado arquitectónico refinado.",
    },
    location: "Fort Lauderdale",
  },
  {
    id: 7,
    category: "mailboxes" as Category,
    image: "/assets/images/project7.webp",
    title: {
      en: "Architectural Aluminum Mailbox",
      es: "Buzón Arquitectónico de Aluminio",
    },
    description: {
      en: "A modern architectural detail created to complement the home.",
      es: "Un detalle arquitectónico moderno creado para complementar el hogar.",
    },
    location: "Coral Gables",
  },
  {
    id: 8,
    category: "impact" as Category,
    image: "/assets/images/project8.webp",
    title: {
      en: "Impact Protection System",
      es: "Sistema de Protección de Impacto",
    },
    description: {
      en: "Protection and architectural design working together.",
      es: "Protección y diseño arquitectónico trabajando en conjunto.",
    },
    location: "Miami-Dade County",
  },
  {
    id: 9,
    category: "kitchens" as Category,
    image: "/assets/images/project9.webp",
    title: {
      en: "Luxury Outdoor Entertainment",
      es: "Entretenimiento Exterior de Lujo",
    },
    description: {
      en: "A refined outdoor setting created for dining and entertaining.",
      es: "Un espacio exterior refinado creado para cenar y entretener.",
    },
    location: "South Florida",
  },
];

const filters: { id: Category; en: string; es: string }[] = [
  { id: "all", en: "All", es: "Todos" },
  { id: "pergolas", en: "Pergolas", es: "Pérgolas" },
  { id: "kitchens", en: "Outdoor Kitchens", es: "Cocinas Exteriores" },
  { id: "fencing", en: "Fencing", es: "Cercas" },
  {
    id: "impact",
    en: "Impact Windows & Doors",
    es: "Ventanas y Puertas de Impacto",
  },
  { id: "epoxy", en: "Epoxy", es: "Epóxico" },
  { id: "mailboxes", en: "Mailboxes", es: "Buzones" },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="m15 15 6 6M15 9l6-6M21 16v5h-5M21 8V3h-5M3 16v5h5M3 21l6-6M3 8V3h5M9 9 3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects = projects
    .filter(
      (project) =>
        activeFilter === "all" || project.category === activeFilter,
    )
    .slice(0, 6);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 bg-[#110c0d] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs">
                {lang === "en"
                  ? "Selected Work"
                  : "Proyectos Seleccionados"}
              </p>
            </div>

            <h2 className="font-sora mt-5 text-3xl font-semibold uppercase leading-[1.06] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "Our Recent Projects"
                : "Nuestros Proyectos Recientes"}
            </h2>

            <p className="font-manrope mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              {lang === "en"
                ? "A selection of custom outdoor spaces designed and built throughout South Florida."
                : "Una selección de espacios exteriores personalizados diseñados y construidos en todo el Sur de Florida."}
            </p>
          </div>

          <Link
            href="/projects"
            className="group hidden items-center gap-3 border-b border-white/20 pb-2 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
          >
            {lang === "en" ? "View All Projects" : "Ver Todos los Proyectos"}
            <ArrowIcon />
          </Link>
        </div>

        <div
          role="tablist"
          aria-label={
            lang === "en"
              ? "Project categories"
              : "Categorías de proyectos"
          }
          className="mt-9 flex gap-1 overflow-x-auto border-b border-white/10 pb-3 scrollbar-none"
        >
          {filters.map((filter) => {
            const active = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative shrink-0 cursor-pointer px-4 py-3 font-manrope text-[9px] font-bold uppercase tracking-[0.14em] transition-all duration-300 sm:text-[10px] ${
                  active
                    ? "text-white"
                    : "text-white/35 hover:text-white/80"
                }`}
              >
                {lang === "en" ? filter.en : filter.es}

                <span
                  className={`absolute inset-x-3 bottom-[-13px] h-[2px] bg-[var(--accent)] transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group relative block overflow-hidden bg-black"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title[lang]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/0" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-700 group-hover:w-full" />

                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-white/20 bg-black/25 text-white/80 backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white sm:right-4 sm:top-4 sm:h-9 sm:w-9">
                  <ExpandIcon />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[9px]">
                    {
                      filters.find(
                        (filter) => filter.id === project.category,
                      )?.[lang === "en" ? "en" : "es"]
                    }
                  </p>

                  <h3 className="font-sora mt-1.5 text-sm font-semibold leading-tight text-white sm:text-lg">
                    {project.title[lang]}
                  </h3>

                  <div className="mt-2 hidden items-center justify-between gap-3 sm:flex">
                    <span className="font-manrope text-[9px] uppercase tracking-[0.12em] text-white/45">
                      {project.location}
                    </span>

                    <span className="flex items-center gap-1 font-manrope text-[9px] font-bold uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-[var(--accent)]">
                      {lang === "en" ? "View" : "Ver"}
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/projects"
            className="group inline-flex h-12 items-center justify-center gap-3 border border-white/20 px-7 font-manrope text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]"
          >
            {lang === "en"
              ? "View All Projects"
              : "Ver Todos los Proyectos"}

            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}