"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang";

const highlights = [
  {
    enTitle: "Miami-Dade",
    esTitle: "Miami-Dade",
    enText: "Primary service area",
    esText: "Área principal de servicio",
  },
  {
    enTitle: "Broward",
    esTitle: "Broward",
    enText: "Primary service area",
    esText: "Área principal de servicio",
  },
  {
    enTitle: "Code-Conscious",
    esTitle: "Enfoque en Códigos",
    enText: "Project planning",
    esText: "Planificación del proyecto",
  },
  {
    enTitle: "Climate-Ready",
    esTitle: "Preparado para el Clima",
    enText: "Material selection",
    esText: "Selección de materiales",
  },
];

export default function AboutSouthFlorida() {
  const { lang } = useLang();

  return (
    <section
      id="about-us"
      className="scroll-mt-20 bg-[var(--background)] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:min-h-[580px]">
              <Image
                src="/assets/images/project2.webp"
                alt={
                  lang === "en"
                    ? "Custom outdoor living space in South Florida"
                    : "Espacio exterior personalizado en el Sur de Florida"
                }
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

              <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                <span className="h-px w-8 bg-[var(--accent)]" />

                <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-white/80">
                  {lang === "en"
                    ? "South Florida"
                    : "Sur de Florida"}
                </span>
              </div>

              <div className="absolute bottom-0 right-0 w-[190px] bg-[var(--accent)] p-6 text-white sm:w-[230px] sm:p-7">
                <p className="font-sora text-4xl font-semibold leading-none sm:text-5xl">
                  305
                </p>

                <div className="mt-4 h-px w-8 bg-white/50" />

                <p className="font-manrope mt-3 text-[9px] font-bold uppercase leading-5 tracking-[0.16em]">
                  {lang === "en"
                    ? "Designed for where we live"
                    : "Diseñado para donde vivimos"}
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-3 -left-3 h-20 w-20 border-b border-l border-[var(--accent)]/60 sm:-bottom-4 sm:-left-4 sm:h-28 sm:w-28" />
          </div>

          <div className="lg:pl-8 xl:pl-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]" />

              <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs">
                {lang === "en"
                  ? "Local Knowledge Matters"
                  : "El Conocimiento Local Importa"}
              </p>
            </div>

            <h2 className="font-sora mt-5 max-w-2xl text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.035em] text-[var(--black)] sm:text-4xl lg:text-5xl">
              {lang === "en"
                ? "Built For South Florida"
                : "Construido para South Florida"}
            </h2>

            <p className="font-manrope mt-6 max-w-xl text-sm leading-7 text-[var(--text)] sm:text-base">
              {lang === "en"
                ? "Outdoor spaces here work harder. Intense sun, tropical rain, coastal air and hurricane considerations all shape the way materials, shade and structure should come together."
                : "Los espacios exteriores aquí trabajan más. El sol intenso, la lluvia tropical, el aire costero y las condiciones de huracanes influyen en cómo deben combinarse los materiales, la sombra y las estructuras."}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 sm:mt-10">
              {highlights.map((item, index) => (
                <div
                  key={item.enTitle}
                  className="group relative bg-[var(--background)] p-5 transition-colors duration-300 hover:bg-[#f7eef0] sm:p-6"
                >
                  <span className="font-manrope text-[9px] font-bold tracking-[0.16em] text-[var(--accent)]">
                    0{index + 1}
                  </span>

                  <h3 className="font-sora mt-3 text-sm font-semibold leading-tight text-[var(--black)] sm:text-base">
                    {lang === "en" ? item.enTitle : item.esTitle}
                  </h3>

                  <p className="font-manrope mt-1.5 text-[10px] leading-5 text-[var(--text)] sm:text-xs">
                    {lang === "en" ? item.enText : item.esText}
                  </p>

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}