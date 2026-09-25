"use client";

import { useLang } from "@/lib/lang";
import EstimateForm from "@/components/EstimateForm";

export default function ContactSection() {
  const { lang } = useLang();

  const content = {
    en: {
      eyebrow: "Contact",
      title: "Let’s Plan Your Project",
      description:
        "Share a few details and the Miami Custom Patios team can begin shaping the right solution for your home.",
      phone: "Phone",
      email: "Email",
      serviceArea: "Service Area",
      area: "Miami-Dade & Broward Counties",
    },
    es: {
      eyebrow: "Contacto",
      title: "Planifiquemos Su Proyecto",
      description:
        "Comparta algunos detalles y el equipo de Miami Custom Patios podrá comenzar a desarrollar la solución adecuada para su hogar.",
      phone: "Teléfono",
      email: "Correo Electrónico",
      serviceArea: "Área de Servicio",
      area: "Condados de Miami-Dade y Broward",
    },
  };

  const t = content[lang];

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#fef8fa] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-6 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-10">
        {/* Contact information */}
        <div className="lg:pt-4">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951] sm:text-xs">
            {t.eyebrow}
          </p>

          <h2 className="font-sora mt-4 max-w-xl text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] text-[#110c0d] sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>

          <p className="font-manrope mt-6 max-w-lg text-sm leading-7 text-[#5f5a54] sm:text-base">
            {t.description}
          </p>

          <dl className="mt-8 space-y-6 border-t border-black/10 pt-7 sm:mt-10 sm:space-y-7 sm:pt-8">
            {/* Phone */}
            <div>
              <dt className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.phone}
              </dt>

              <dd className="mt-2">
                <a
                  href="tel:+13055634756"
                  className="font-manrope text-lg font-semibold text-[#110c0d] transition-colors hover:text-[#c78951] sm:text-xl"
                >
                  (305) 563-4756
                </a>
              </dd>
            </div>

            {/* Email */}
            <div>
              <dt className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.email}
              </dt>

              <dd className="mt-2">
                <a
                  href="mailto:info@miamicustompatios.com"
                  className="font-manrope break-all text-sm text-[#110c0d] transition-colors hover:text-[#c78951] sm:break-normal sm:text-base"
                >
                  info@miamicustompatios.com
                </a>
              </dd>
            </div>

            {/* Service area */}
            <div>
              <dt className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.serviceArea}
              </dt>

              <dd className="font-manrope mt-2 text-sm leading-6 text-[#5f5a54]">
                {t.area}
              </dd>
            </div>
          </dl>
        </div>

        {/* Same estimate form and Supabase pipeline as Hero */}
        <div className="w-full min-w-0">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}