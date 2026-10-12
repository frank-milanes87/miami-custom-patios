"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

function ArrowIcon({ left = false }: { left?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 ${left ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services = [
  {
    id: "pergolas",
    href: "/services/pergolas-screen-enclosures",
    image: "/assets/images/project10.webp",
    en: "Pergolas & Screen Enclosures",
    es: "Pérgolas y cerramientos",
    categoryEn: "OUTDOOR LIVING",
    categoryEs: "ESPACIOS EXTERIORES",
  },
  {
    id: "fencing",
    href: "/services/modern-fencing",
    image: "/assets/images/modern-fancing.webp",
    en: "Modern Fencing",
    es: "Cercas modernas",
    categoryEn: "PRIVACY & STYLE",
    categoryEs: "PRIVACIDAD Y ESTILO",
  },
  {
    id: "epoxy",
    href: "/services/epoxy-flooring",
    image: "/assets/images/epoxy-flooring.webp",
    en: "Epoxy Flooring",
    es: "Pisos epóxicos",
    categoryEn: "GARAGE & FLOORING",
    categoryEs: "GARAGE Y PISOS",
  },
  {
    id: "pavers",
    href: "/services/concrete-pavers",
    image: "/assets/images/project8.webp",
    en: "Concrete & Pavers",
    es: "Concreto y adoquines",
    categoryEn: "PAVING & HARDSCAPES",
    categoryEs: "PAVIMENTACIÓN",
  },
  {
    id: "windows",
    href: "/services/impact-windows-doors",
    image: "/assets/images/project4.webp",
    en: "Impact Windows & Doors",
    es: "Ventanas y puertas de impacto",
    categoryEn: "HOME PROTECTION",
    categoryEs: "PROTECCIÓN DEL HOGAR",
  },
  {
    id: "shutters",
    href: "/services/accordion-shutters",
    image: "/assets/images/accordion-shutters.webp",
    en: "Accordion Shutters",
    es: "Persianas tipo acordeón",
    categoryEn: "HURRICANE PROTECTION",
    categoryEs: "PROTECCIÓN CONTRA HURACANES",
  },
  {
    id: "mailboxes",
    href: "/services/modern-mailboxes",
    image: "/assets/images/modern-mailbox.webp",
    en: "Modern Mailboxes",
    es: "Buzones modernos",
    categoryEn: "FINISHING DETAILS",
    categoryEs: "DETALLES FINALES",
  },
];

export default function ReviewsServicesSlider() {
  const { lang } = useLang();
  const isSpanish = lang === "es";
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const content = isSpanish
    ? {
        eyebrow: "DESCUBRA NUESTROS SERVICIOS",
        title: "Más formas de",
        accent: "transformar su hogar.",
        description:
          "Desde espacios exteriores personalizados hasta mejoras funcionales para su hogar, explore los servicios que ofrecemos en el sur de Florida.",
        viewAll: "Ver todos los servicios",
        explore: "Explorar servicio",
        previous: "Servicios anteriores",
        next: "Servicios siguientes",
        counter: "SERVICIOS",
      }
    : {
        eyebrow: "EXPLORE OUR SERVICES",
        title: "More ways to",
        accent: "transform your home.",
        description:
          "From custom outdoor living spaces to functional home improvements, explore the services we offer throughout South Florida.",
        viewAll: "View All Services",
        explore: "Explore Service",
        previous: "Previous services",
        next: "Next services",
        counter: "SERVICES",
      };

  const goToService = useCallback((index: number) => {
    const container = sliderRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-service-index]"
    );
    const card = cards[index];

    if (!card) return;

    setActiveIndex(index);

    container.scrollTo({
      left: card.offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const move = (direction: number) => {
    const nextIndex = Math.max(
      0,
      Math.min(activeIndex + direction, services.length - 1)
    );

    goToService(nextIndex);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#110c0d] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#c78951]/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#c78951]/[0.06] blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#c78951]" />
              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.26em] text-[#c78951] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-6 font-sora text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
              {content.title}
              <br />
              <span className="text-[#c78951]">{content.accent}</span>
            </h2>

            <p className="mt-5 max-w-xl font-manrope text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              {content.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label={content.previous}
              onClick={() => move(-1)}
              disabled={activeIndex === 0}
              className="cursor-pointer flex h-12 w-12 items-center justify-center border border-white/20 bg-white/[0.03] text-white transition-colors duration-300 hover:border-[#c78951] hover:bg-[#c78951] disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowIcon left />
            </button>

            <button
              type="button"
              aria-label={content.next}
              onClick={() => move(1)}
              disabled={activeIndex === services.length - 1}
              className="cursor-pointer flex h-12 w-12 items-center justify-center border border-white/20 bg-white/[0.03] text-white transition-colors duration-300 hover:border-[#c78951] hover:bg-[#c78951] disabled:cursor-not-allowed disabled:opacity-25"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="mt-10 grid grid-flow-col auto-cols-[82%] gap-5 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-14 sm:auto-cols-[48%] lg:auto-cols-[calc((100%-2.5rem)/3)]"
          onScroll={(event) => {
            const container = event.currentTarget;
            const cards = container.querySelectorAll<HTMLElement>(
              "[data-service-index]"
            );

            if (!cards.length) return;

            const scrollPosition = container.scrollLeft;
            const firstCardLeft = cards[0].offsetLeft;

            let closestIndex = 0;
            let closestDistance = Infinity;

            cards.forEach((card, index) => {
              const distance = Math.abs(
                card.offsetLeft - firstCardLeft - scrollPosition
              );

              if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
              }
            });

            setActiveIndex(closestIndex);
          }}
        >
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              data-service-index={index}
              className="group relative block aspect-[4/5] min-w-0 snap-start overflow-hidden border border-white/10 bg-[#171112] transition-colors duration-500 hover:border-[#c78951]/60"
            >
              <img
                src={service.image}
                alt={isSpanish ? service.es : service.en}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#110c0d] via-[#110c0d]/35 to-[#110c0d]/10 transition-all duration-500 group-hover:via-[#110c0d]/25" />

              <div className="absolute inset-4 border border-white/20 transition-all duration-500 group-hover:inset-3 group-hover:border-[#c78951]/80 sm:inset-5 sm:group-hover:inset-4" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-sora text-[9px] font-bold uppercase tracking-[0.22em] text-[#e0b187] sm:text-[10px]">
                  {isSpanish ? service.categoryEs : service.categoryEn}
                </p>

                <h3 className="mt-3 max-w-[280px] font-sora text-xl font-semibold uppercase leading-snug tracking-[-0.025em] text-white sm:text-2xl">
                  {isSpanish ? service.es : service.en}
                </h3>

                <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
                  <span className="font-sora text-[9px] font-bold uppercase tracking-[0.16em] text-white/85 sm:text-[10px]">
                    {content.explore}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/40 text-white transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951]">
                    <ArrowIcon />
                  </span>
                </div>
              </div>

              <span className="absolute right-8 top-8 font-sora text-xs tracking-[0.16em] text-white/75">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="flex flex-wrap items-center gap-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                type="button"
                aria-label={`${content.counter} ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goToService(index)}
                className={`h-1 transition-all duration-300 ${
                  activeIndex === index
                    ? "w-9 bg-[#c78951]"
                    : "w-4 bg-white/20 hover:bg-[#c78951]/60"
                }`}
              />
            ))}
          </div>

          <p className="shrink-0 font-sora text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </p>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="group inline-flex min-h-[54px] w-full items-center justify-between gap-2 bg-[#c78951] px-7 font-sora text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#b47742] sm:w-auto sm:max-w-[270px]"
          >
            {content.viewAll}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}