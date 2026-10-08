"use client";

import { useLang } from "@/lib/lang";

export default function ProcessSection() {
  const { lang } = useLang();

  const steps = [
    {
      number: "01",
      title: {
        en: "Tell Us About Your Project",
        es: "Cuéntenos Sobre Su Proyecto",
      },
      description: {
        en: "Share your vision, property details, and the services you're considering.",
        es: "Comparta su visión, los detalles de su propiedad y los servicios que está considerando.",
      },
    },
    {
      number: "02",
      title: {
        en: "Virtual Estimate or In-Home Consultation",
        es: "Estimado Virtual o Consulta en el Hogar",
      },
      description: {
        en: "We review your project and help determine the right next steps for your space.",
        es: "Revisamos su proyecto y le ayudamos a determinar los siguientes pasos para su espacio.",
      },
    },
    {
      number: "03",
      title: {
        en: "Design & Project Planning",
        es: "Diseño y Planificación del Proyecto",
      },
      description: {
        en: "Plans, materials, finishes, and project details are refined before construction begins.",
        es: "Definimos planos, materiales, acabados y detalles del proyecto antes de comenzar la construcción.",
      },
    },
    {
      number: "04",
      title: {
        en: "Build Your Custom Space",
        es: "Construya Su Espacio Personalizado",
      },
      description: {
        en: "Our team brings the approved design to life with a focus on quality and craftsmanship.",
        es: "Nuestro equipo convierte el diseño aprobado en realidad, enfocándose en la calidad y la excelencia.",
      },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#110c0d] py-24 text-white sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
              {lang === "en"
                ? "A considered process"
                : "Un proceso bien pensado"}
            </p>

            <h2 className="mt-5 max-w-3xl font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {lang === "en"
                ? "From Idea To Outdoor Room"
                : "De la Idea al Espacio Exterior"}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            {lang === "en"
              ? "Virtual estimates are free. In-home consultations are $75, reimbursed when you proceed within 30 days."
              : "Los estimados virtuales son gratis. Las consultas en el hogar cuestan $75 y se reembolsan si continúa dentro de 30 días."}
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:border-l">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative border-b border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.035] sm:p-8 lg:border-r"
            >
              <div className="flex items-start justify-between">
                <span className="font-sora text-4xl font-medium tracking-[-0.04em] text-[#c78951]">
                  {step.number}
                </span>

                <span className="h-2 w-2 rounded-full border border-[#c78951]/50 transition-all duration-500 group-hover:bg-[#c78951] group-hover:shadow-[0_0_18px_rgba(199,137,81,0.35)]" />
              </div>

              <div className="mt-20">
                <div className="mb-5 h-px w-8 bg-[#c78951] transition-all duration-500 group-hover:w-16" />

                <h3 className="max-w-[260px] font-sora text-lg font-medium leading-6 text-white">
                  {step.title[lang]}
                </h3>

                <p className="mt-4 max-w-[280px] text-sm leading-6 text-white/45">
                  {step.description[lang]}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c78951] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}