"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function CustomPergolas() {
  const { lang } = useLang();

  return (
    <section className="bg-[var(--warm)] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div className="lg:pr-12">
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs">
              {lang === "en" ? "Custom Pergolas" : "Pérgolas Personalizadas"}
            </p>

            <h2 className="font-sora mt-5 max-w-xl text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.035em] text-[var(--black)] sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "Designed Around The Way You Live"
                : "Diseñadas Alrededor de Tu Estilo de Vida"}
            </h2>

            <p className="font-manrope mt-6 max-w-lg text-sm leading-7 text-[var(--text)] sm:text-base">
              {lang === "en"
                ? "Transform your backyard into a refined outdoor living space with custom-designed pergolas built for South Florida."
                : "Transforma tu patio en un espacio exterior sofisticado con pérgolas personalizadas diseñadas para el estilo de vida del Sur de Florida."}
            </p>

            <Link
              href="/services/pergolas-screen-enclosures"
              className="font-manrope mt-8 inline-flex h-13 items-center justify-center gap-3 bg-[var(--accent)] px-7 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#b47742]"
            >
              <span>
                {lang === "en"
                  ? "Explore Pergola Designs"
                  : "Explorar Diseños de Pérgolas"}
              </span>

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

          <div className="relative">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-12 sm:grid-rows-6">
              <Link
                href="/services/pergolas-screen-enclosures"
                className="group relative block min-h-[360px] overflow-hidden bg-[var(--black)] sm:col-span-8 sm:row-span-6 sm:min-h-[560px]"
              >
                <Image
                  src="/assets/images/project8.webp"
                  alt={
                    lang === "en"
                      ? "Custom pergola courtyard"
                      : "Pérgola personalizada en patio"
                  }
                  fill
                  sizes="(min-width: 640px) 55vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-7 sm:left-7">
                  <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                    {lang === "en" ? "View Project" : "Ver Proyecto"}
                  </span>
                </div>
              </Link>

              <Link
                href="/services/pergolas-screen-enclosures"
                className="group relative block min-h-[230px] overflow-hidden bg-[var(--black)] sm:col-span-4 sm:row-span-3 sm:min-h-0"
              >
                <Image
                  src="/assets/images/project4.webp"
                  alt={
                    lang === "en"
                      ? "Custom pergola garden"
                      : "Pérgola personalizada en jardín"
                  }
                  fill
                  sizes="(min-width: 640px) 28vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
              </Link>

              <Link
                href="/services/pergolas-screen-enclosures"
                className="group relative block min-h-[230px] overflow-hidden bg-[var(--black)] sm:col-span-4 sm:row-span-3 sm:min-h-0"
              >
                <Image
                  src="/assets/images/project2.webp"
                  alt={
                    lang === "en"
                      ? "Poolside custom pergola"
                      : "Pérgola personalizada junto a piscina"
                  }
                  fill
                  sizes="(min-width: 640px) 28vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
              </Link>
            </div>

            <div className="pointer-events-none absolute -bottom-2 -right-2 h-16 w-16 border-b border-r border-[var(--accent)]/60 sm:-bottom-3 sm:-right-3 sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}