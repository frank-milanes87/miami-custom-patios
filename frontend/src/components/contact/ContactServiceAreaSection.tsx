"use client";

import { useLang } from "@/lib/lang";

export default function ServiceAreaSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "Sirviendo al sur de Florida",
          title:
            "Proyectos exteriores y espacios al aire libre en todo el sur de Florida.",
          description:
            "Miami Custom Patios atiende a propietarios en los condados de Miami-Dade y Broward con soluciones personalizadas para espacios exteriores y mejoras del hogar.",
          areas: ["Miami-Dade", "Broward"],
        }
      : {
          eyebrow: "Serving South Florida",
          title:
            "Outdoor & Exterior Projects Across South Florida.",
          description:
            "Miami Custom Patios serves homeowners across Miami-Dade and Broward Counties with custom outdoor living and exterior improvement solutions.",
          areas: ["Miami-Dade", "Broward"],
        };

  return (
    <section
      aria-label={
        lang === "es"
          ? "Área de servicio"
          : "Service area"
      }
      className="bg-warm "
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-24 lg:px-8">
        <div>
          <p className="font-sora text-[9px] font-bold uppercase tracking-[0.24em] text-[#c78951]">
            {content.eyebrow}
          </p>

          <h2 className="mt-5 max-w-xl font-sora text-3xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-4xl lg:text-[44px]">
            {content.title}
          </h2>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-12">
          <p className="max-w-lg font-manrope text-sm leading-7 text-black/50">
            {content.description}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-5 border-t border-black/10 pt-6">
            {content.areas.map((area, index) => (
              <div key={area} className="group">
                <p className="mb-2 font-sora text-[8px] font-bold uppercase tracking-[0.18em] text-[#c78951]">
                  0{index + 1}
                </p>

                <p className="font-sora text-xl font-semibold tracking-[-0.025em]  transition-colors duration-300 group-hover:text-[#c78951] sm:text-2xl">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}