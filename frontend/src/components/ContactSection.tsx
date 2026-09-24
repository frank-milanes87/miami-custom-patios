"use client";

import { useLang } from "@/lib/lang";

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
      serviceArea: "Service area",
      area: "Miami-Dade & Broward Counties",
      formEyebrow: "Free virtual estimate",
      formTitle: "Start Your Project",
      takes: "Takes 60 seconds",
      name: "Name",
      namePlaceholder: "Your name",
      phoneNumber: "Phone Number",
      phonePlaceholder: "(305) 000-0000",
      zip: "ZIP Code",
      zipPlaceholder: "33101",
      service: "Service Needed",
      servicePlaceholder: "Select all that apply",
      details: "Project Details",
      detailsPlaceholder: "Tell us what you’re envisioning",
      submit: "Request My Estimate",
      free: "Virtual estimates are free.",
      inHome:
        "In-home estimates are $75 and reimbursed when you move forward within 30 days.",
    },
    es: {
      eyebrow: "Contacto",
      title: "Planifiquemos Su Proyecto",
      description:
        "Comparta algunos detalles y el equipo de Miami Custom Patios podrá comenzar a desarrollar la solución adecuada para su hogar.",
      phone: "Teléfono",
      email: "Correo Electrónico",
      serviceArea: "Área de servicio",
      area: "Condados de Miami-Dade y Broward",
      formEyebrow: "Cotización virtual gratis",
      formTitle: "Comience Su Proyecto",
      takes: "Toma 60 segundos",
      name: "Nombre",
      namePlaceholder: "Su nombre",
      phoneNumber: "Número de Teléfono",
      phonePlaceholder: "(305) 000-0000",
      zip: "Código Postal",
      zipPlaceholder: "33101",
      service: "Servicio Necesario",
      servicePlaceholder: "Seleccione todas las opciones",
      details: "Detalles del Proyecto",
      detailsPlaceholder: "Cuéntenos qué tiene en mente",
      submit: "Solicitar Mi Cotización",
      free: "Las cotizaciones virtuales son gratis.",
      inHome:
        "Las cotizaciones en casa cuestan $75 y se reembolsan al avanzar con el proyecto dentro de 30 días.",
    },
  };

  const t = content[lang];

  return (
    <section
      id="contact"
      className="scroll-mt-18 bg-[#fef8fa] py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
            {t.eyebrow}
          </p>

          <h2 className="mt-5 max-w-xl font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] text-[#110c0d] sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#5f5a54]">
            {t.description}
          </p>

          <dl className="mt-10 space-y-7 border-t border-black/10 pt-8">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.phone}
              </dt>

              <dd className="mt-2">
                <a
                  href="tel:+13055634756"
                  className="text-xl font-semibold text-[#110c0d] transition-colors hover:text-[#c78951]"
                >
                  (305) 563-4756
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.email}
              </dt>

              <dd className="mt-2">
                <a
                  href="mailto:info@miamicustompatios.com"
                  className="text-base text-[#110c0d] transition-colors hover:text-[#c78951]"
                >
                  info@miamicustompatios.com
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5f5a54]/60">
                {t.serviceArea}
              </dt>

              <dd className="mt-2 text-sm text-[#5f5a54]">{t.area}</dd>
            </div>
          </dl>
        </div>

        <form className="relative overflow-hidden bg-white p-6 shadow-[0_20px_60px_rgba(17,12,13,0.08)] sm:p-8 lg:p-10">
          <div className="absolute left-0 top-0 h-1 w-full bg-[#c78951]" />

          <div className="mb-7 flex items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c78951]">
                {t.formEyebrow}
              </p>

              <h2 className="mt-2 font-sora text-2xl font-medium text-[#110c0d]">
                {t.formTitle}
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-widest text-[#5f5a54]/60 sm:block">
              {t.takes}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f5a54]">
                {t.name}
              </span>

              <input
                required
                className="h-12 w-full rounded-none border border-black/10 bg-[#fef8fa] px-4 text-sm text-[#110c0d] outline-none transition-all placeholder:text-black/30 focus:border-[#c78951] focus:ring-1 focus:ring-[#c78951]/20"
                placeholder={t.namePlaceholder}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f5a54]">
                {t.phoneNumber}
              </span>

              <input
                required
                type="tel"
                className="h-12 w-full rounded-none border border-black/10 bg-[#fef8fa] px-4 text-sm text-[#110c0d] outline-none transition-all placeholder:text-black/30 focus:border-[#c78951] focus:ring-1 focus:ring-[#c78951]/20"
                placeholder={t.phonePlaceholder}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f5a54]">
                {t.zip}
              </span>

              <input
                required
                inputMode="numeric"
                className="h-12 w-full rounded-none border border-black/10 bg-[#fef8fa] px-4 text-sm text-[#110c0d] outline-none transition-all placeholder:text-black/30 focus:border-[#c78951] focus:ring-1 focus:ring-[#c78951]/20"
                placeholder={t.zipPlaceholder}
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f5a54]">
                {t.service}
              </span>

              <button
                type="button"
                className="flex h-12 w-full items-center justify-between rounded-none border border-black/10 bg-[#fef8fa] px-4 text-left text-sm text-[#110c0d] transition-all hover:border-[#c78951] focus:border-[#c78951]"
              >
                <span className="truncate text-black/45">
                  {t.servicePlaceholder}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 shrink-0 text-black/40"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#5f5a54]">
                {t.details}
              </span>

              <textarea
                className="min-h-24 w-full resize-none rounded-none border border-black/10 bg-[#fef8fa] px-4 py-3 text-sm text-[#110c0d] outline-none transition-all placeholder:text-black/30 focus:border-[#c78951] focus:ring-1 focus:ring-[#c78951]/20"
                placeholder={t.detailsPlaceholder}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 h-13 w-full rounded-none bg-[#c78951] px-7 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#b87843] hover:shadow-[0_10px_30px_rgba(199,137,81,0.2)]"
          >
            {t.submit}
          </button>

          <p className="mt-4 text-xs leading-5 text-[#5f5a54]">
            <strong className="text-[#110c0d]">{t.free}</strong>{" "}
            {t.inHome}
          </p>
        </form>
      </div>
    </section>
  );
}