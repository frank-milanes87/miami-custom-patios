"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/lang";

const serviceGroups = [
  {
    title: {
      en: "Outdoor Structures",
      es: "Estructuras Exteriores",
    },
    items: [
      {
        en: "Pergolas & Screen Enclosures",
        es: "Pérgolas y Cerramientos con Mosquitero",
      },
      {
        en: "Motorized Louvered Roofs",
        es: "Techos de Lamas Motorizados",
      },
    ],
  },
  {
    title: {
      en: "Outdoor Environments",
      es: "Ambientes Exteriores",
    },
    items: [
      {
        en: "Outdoor Kitchens",
        es: "Cocinas Exteriores",
      },
      {
        en: "Concrete",
        es: "Concreto",
      },
      {
        en: "Pavers",
        es: "Pavers",
      },
    ],
  },
  {
    title: {
      en: "Fencing",
      es: "Cercas",
    },
    items: [
      {
        en: "Wood Fencing",
        es: "Cercas de Madera",
      },
      {
        en: "Aluminum Fencing",
        es: "Cercas de Aluminio",
      },
      {
        en: "PVC Fencing",
        es: "Cercas de PVC",
      },
    ],
  },
  {
    title: {
      en: "Epoxy Flooring",
      es: "Pisos Epóxicos",
    },
    items: [
      {
        en: "Epoxy Flooring",
        es: "Pisos Epóxicos",
      },
    ],
  },
  {
    title: {
      en: "Specialty Solutions",
      es: "Soluciones Especializadas",
    },
    items: [
      {
        en: "Impact Windows Doors",
        es: "Ventanas y Puertas de Impacto",
      },
      {
        en: "Modern Aluminum Mailboxes",
        es: "Buzones Modernos de Aluminio",
      },
      {
        en: "Accordion Shutters",
        es: "Persianas Acordeón",
      },
      {
        en: "Interior Design",
        es: "Diseño de Interiores",
      },
    ],
  },
];

const navigation = [
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

function ChevronDown({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[19px] w-[19px] shrink-0"
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

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 5h16M4 12h16M4 19h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LanguageToggle({
  lang,
  setLang,
}: {
  lang: "en" | "es";
  setLang: (lang: "en" | "es") => void;
}) {
  return (
    <div className="flex h-8 shrink-0 overflow-hidden border border-white/15">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`flex h-full w-10 cursor-pointer items-center justify-center font-sora text-[10px] font-medium tracking-[0.04em] ${
          lang === "en"
            ? "bg-[#c78951] text-white"
            : "text-[#a9a3a4] hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("es")}
        className={`flex h-full w-10 cursor-pointer items-center justify-center font-sora text-[10px] font-medium tracking-[0.04em] ${
          lang === "es"
            ? "bg-[#c78951] text-white"
            : "text-[#a9a3a4] hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full border-b border-white/[0.08] bg-[#070405]/95 text-white backdrop-blur-md shadow-[0_4px_18px_rgba(0,0,0,0.18)]">
      <div className="mx-auto grid h-[72px] w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-7 xl:px-10">
        <Link
          href="/"
          onClick={closeMenus}
          className="flex h-full w-[155px] shrink-0 items-center"
        >
          <img
            src="/assets/images/logo.webp"
            alt="Miami Custom Patios"
            className="h-[54px] w-auto max-w-[145px] object-contain object-left"
          />
        </Link>

        <nav className="hidden h-full items-center justify-center xl:flex">
          <div className="group relative h-full">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex h-full min-w-[116px] cursor-pointer items-center justify-center gap-1.5 px-2 font-sora text-[12px] font-medium uppercase tracking-[0.07em] text-[#b8b2b3] transition-colors hover:text-white"
            >
              {t.nav.services}

              <span className={servicesOpen ? "rotate-180" : ""}>
                <ChevronDown />
              </span>
            </button>

            <div
              className={`absolute left-1/2 top-[72px] w-[760px] -translate-x-1/2 overflow-hidden rounded-[2px] border border-white/[0.18] bg-[#110c0d]/[0.98] shadow-[0_18px_45px_rgba(0,0,0,0.38),0_4px_16px_rgba(0,0,0,0.22)] ring-1 ring-[#c78951]/[0.08] transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
              }`}
            >
              <div className="border-b border-[#c78951]/20 px-8 py-3">
                <span className="font-manrope text-[9px] font-medium uppercase tracking-[0.22em] text-[#c78951]">
                  {lang === "en" ? "Our Services" : "Nuestros Servicios"}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-x-10 gap-y-8 p-8">
                {serviceGroups.map((group) => (
                  <div key={group.title.en}>
                    <p className="mb-4 font-sora text-[10px] font-medium uppercase tracking-[0.15em] text-[#c78951]">
                      {group.title[lang]}
                    </p>

                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item.en}>
                          <Link
                            href="#services"
                            onClick={closeMenus}
                            className="group/item block font-manrope text-[13px] leading-5 text-[#b8b2b3] transition-colors duration-200 hover:text-white"
                          >
                            <span className="transition-colors group-hover/item:text-[#c78951]">
                              {item[lang]}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {navigation.map((item) => (
            <Link
              key={item.en}
              href={item.href}
              className="flex h-full min-w-[108px] items-center justify-center whitespace-nowrap px-2 font-sora text-[12px] font-medium uppercase tracking-[0.07em] text-[#b8b2b3] transition-colors hover:text-white"
            >
              {item[lang]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-3 xl:flex">
          <LanguageToggle
            lang={lang}
            setLang={(nextLang) => {
              setLang(nextLang);
              setMobileOpen(false);
              setServicesOpen(false);
            }}
          />

          <a
            href="tel:+13055634756"
            className="flex min-w-[138px] items-center gap-2 px-2 font-manrope transition-colors hover:text-[#c78951]"
          >
            <PhoneIcon />

            <span className="leading-none">
              <small className="mb-1 block font-sora text-[8px] font-semibold uppercase tracking-[0.07em] text-[#a9a3a4]">
                {lang === "es" ? "Llame ahora" : "Call now"}
              </small>

              <span className="block whitespace-nowrap text-[13px] font-bold text-white">
                {t.nav.phone}
              </span>
            </span>
          </a>

          <Link
            href="/estimate"
            className="flex h-[44px] min-w-[182px] items-center justify-center whitespace-nowrap bg-[#c78951] px-6 font-sora text-[12px] font-semibold text-white transition-colors hover:bg-[#b47742]"
          >
            {t.nav.estimate}
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <LanguageToggle lang={lang} setLang={setLang} />

          <a
            href="tel:+13055634756"
            className="flex h-9 w-9 items-center justify-center bg-[#c78951]"
            aria-label="Call Miami Custom Patios"
          >
            <PhoneIcon />
          </a>

          <button
            type="button"
            onClick={() => {
              setMobileOpen((value) => !value);
              setServicesOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full border-t border-white/[0.12] bg-[#110c0d] shadow-[0_18px_45px_rgba(0,0,0,0.38)] xl:hidden ${
          mobileOpen
            ? "visible max-h-[calc(100dvh-72px)] overflow-y-auto opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        } transition-all duration-200`}
      >
        <div className="px-5 pb-32 pt-5 sm:px-7">
          <nav className="flex flex-col">
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className="flex min-h-[54px] cursor-pointer items-center justify-between border-b border-white/15 font-sora text-[13px] font-semibold uppercase tracking-[0.07em] text-white"
            >
              {t.nav.services}

              <ChevronDown open={servicesOpen} />
            </button>

            {servicesOpen && (
              <div className="border-x border-b border-white/15 bg-[#0d090a] px-4 py-6 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
                {serviceGroups.map((group) => (
                  <div key={group.title.en} className="mb-7 last:mb-0">
                    <p className="mb-3 font-sora text-[9px] font-semibold uppercase tracking-[0.15em] text-[#c78951]">
                      {group.title[lang]}
                    </p>

                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <Link
                          key={item.en}
                          href="#services"
                          onClick={closeMenus}
                          className="block font-manrope text-[13px] leading-5 text-[#b8b2b3] transition-colors hover:text-white"
                        >
                          {item[lang]}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {navigation.map((item) => (
              <Link
                key={item.en}
                href={item.href}
                onClick={closeMenus}
                className="flex min-h-[56px] items-center border-b border-white/10 font-sora text-[13px] font-semibold uppercase tracking-[0.07em] text-white"
              >
                {item[lang]}
              </Link>
            ))}
          </nav>

          <div className="mt-6 space-y-3">
            <a
              href="tel:+13055634756"
              className="flex min-h-[52px] items-center justify-center gap-2 border border-white/15 font-manrope text-sm font-bold text-white"
            >
              <PhoneIcon />
              {t.nav.phone}
            </a>

            <Link
              href="/estimate"
              onClick={closeMenus}
              className="flex min-h-[52px] items-center justify-center bg-[#c78951] px-5 text-center font-sora text-[12px] font-semibold uppercase tracking-[0.04em] text-white"
            >
              {t.nav.estimate}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}