"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

const navigation = [
  {
    en: "Home",
    es: "Inicio",
    href: "#top",
  },
  {
    en: "Services",
    es: "Servicios",
    href: "#services",
  },
  {
    en: "Projects",
    es: "Proyectos",
    href: "#portfolio",
  },
  {
    en: "About Us",
    es: "Nosotros",
    href: "#about",
  },
  {
    en: "Reviews",
    es: "Reseñas",
    href: "#reviews",
  },
  {
    en: "Contact",
    es: "Contacto",
    href: "#contact",
  },
];

const services = [
  {
    en: "Pergolas Screen Enclosures",
    es: "Pérgolas y Cerramientos con Mosquitero",
    href: "#services",
  },
  {
    en: "Outdoor Kitchens",
    es: "Cocinas Exteriores",
    href: "#services",
  },
  {
    en: "Concrete Pavers",
    es: "Pavers de Concreto",
    href: "#services",
  },
  {
    en: "Modern Fencing",
    es: "Cercas Modernas",
    href: "#services",
  },
  {
    en: "Epoxy Flooring",
    es: "Pisos Epóxicos",
    href: "#services",
  },
  {
    en: "Impact Windows Doors",
    es: "Ventanas y Puertas de Impacto",
    href: "#services",
  },
  {
    en: "Accordion Shutters",
    es: "Persianas Acordeón",
    href: "#services",
  },
  {
    en: "Modern Mailboxes",
    es: "Buzones Modernos",
    href: "#services",
  },
];

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4 6h16v12H4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function SiteFooter() {
  const { lang } = useLang();

  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      description:
        "Luxury outdoor living, thoughtfully designed for South Florida.",
      navigate: "Navigate",
      services: "Services",
      connect: "Connect",
      call: "(305) 563-4756",
      email: "info@miamicustompatios.com",
      location: "Service Area",
      areas: (
        <>
          Miami-Dade
          <br />
          Broward
          <br />
          South Florida
        </>
      ),
      copyright: `© ${currentYear} Miami Custom Patios. All rights reserved.`,
    },

    es: {
      description:
        "Espacios exteriores de lujo, diseñados cuidadosamente para el Sur de Florida.",
      navigate: "Navegación",
      services: "Servicios",
      connect: "Contacto",
      call: "(305) 563-4756",
      email: "info@miamicustompatios.com",
      location: "Área de Servicio",
      areas: (
        <>
          Miami-Dade
          <br />
          Broward
          <br />
          Sur de Florida
        </>
      ),
      copyright: `© ${currentYear} Miami Custom Patios. Todos los derechos reservados.`,
    },
  };

  const t = content[lang];

  return (
    <footer className="bg-[#110c0d] pt-14 text-white sm:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#top" className="inline-flex">
              <img
                src="/assets/images/logo.webp"
                alt="Miami Custom Patios"
                className="h-24 w-auto object-contain object-left sm:h-28"
              />
            </Link>

            <p className="mt-5 max-w-xs font-manrope text-sm leading-6 text-[#a9a3a4]">
              {t.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
              {t.navigate}
            </p>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.en}>
                  <Link
                    href={item.href}
                    className="font-manrope text-sm text-[#a9a3a4] transition-colors hover:text-white"
                  >
                    {item[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
              {t.services}
            </p>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.en}>
                  <Link
                    href={service.href}
                    className="font-manrope text-sm text-[#a9a3a4] transition-colors hover:text-white"
                  >
                    {service[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sora text-xs font-bold uppercase tracking-[0.08em] text-[#c78951]">
              {t.connect}
            </p>

            <div className="mt-5 space-y-4 font-manrope text-sm text-[#a9a3a4]">
              {/* Phone */}
              <a
                href="tel:+13055634756"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <PhoneIcon />
                <span>{t.call}</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@miamicustompatios.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <MailIcon />

                <span className="break-all sm:break-normal">
                  {t.email}
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <LocationIcon />

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/70">
                    {t.location}
                  </p>

                  <p className="leading-6">{t.areas}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic copyright */}
        <div className="py-6">
          <p className="text-center font-manrope text-xs leading-5 text-[#777173]">
            {t.copyright}
          </p>
        </div>
      </div>

      {/* Mobile bottom actions */}
      <div className="fixed inset-x-0 bottom-0 z-[110] grid grid-cols-2 border-t border-white/10 bg-[#110c0d] p-2 shadow-[0_-10px_35px_rgba(0,0,0,0.45)] lg:hidden">
        <a
          href="tel:+13055634756"
          className="flex min-h-11 items-center justify-center gap-2 px-2 text-center font-sora text-[10px] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-white/5 sm:text-[11px]"
        >
          <PhoneIcon />

          <span>
            {lang === "es" ? "Llamar Ahora" : "Call Now"}
          </span>
        </a>

        <Link
          href="#contact"
          className="flex min-h-11 items-center justify-center px-2 text-center font-sora text-[10px] font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#b47742] sm:text-[11px]"
          style={{ backgroundColor: "#c78951" }}
        >
          {lang === "es"
            ? "Solicitar Cotización Gratis"
            : "Get a Free Estimate"}
        </Link>
      </div>
    </footer>
  );
}