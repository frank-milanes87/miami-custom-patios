"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";

export default function FaqSection() {
  const { lang } = useLang();

const content = {
  en: {
    eyebrow: "Common questions",
    title: "Plan With Confidence",
    faqs: [
      {
        question: "How much does a project cost?",
        answer:
          "Every project is different. Price depends on size, materials, whether there's existing concrete, and the permit. Send us your measurements and we'll walk you through the options.",
      },
      {
        question: "Do I need a permit?",
        answer:
          "Yes. Under the Florida Building Code, a permanently installed pergola or patio structure requires a building permit, and that applies across South Florida. The permit fee is $2,000, which covers architectural fees, city fees, inspections, and a two-year warranty.",
      },
      {
        question: "Does existing concrete change the price?",
        answer:
          "Yes. If you already have a concrete slab, we can bracket the columns directly to it. Without concrete, each column requires a footing dug and poured, at $500 per hole.",
      },
      {
        question: "Do you charge for estimates?",
        answer:
          "Virtual estimates are free. An in-home estimate without a prior virtual estimate is $75, refunded if you sign a contract within 30 days. Interior design, epoxy flooring, modern mailboxes, impact windows & doors, and motorized louvered roofs include a free in-person estimate.",
      },
      {
        question: "Can I get a drawing of my project?",
        answer:
          "Yes. A basic sketch is $150, credited back if you move forward. A full 3D rendering is $350, which is a flat fee.",
      },
      {
        question: "How long does the project take?",
        answer:
          "Without a permit, typically five to seven days depending on availability. With a permit, the timeline depends on the city and the architect, which is outside our control.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "Without a permit: 50% deposit, 50% at completion. With a permit: the $2,000 permit fee upfront, then of the remaining balance, 20% at signing, 40% when the permit is ready, and 40% after installation.",
      },
      {
        question: "Is the work warrantied?",
        answer:
          "Yes — two years on parts and labor, on every project, permit or not. That covers installation defects, leaks, and manufacturer faults. If something is damaged or scratched after installation, we'll handle the labor to replace it, but the material cost is the client's.",
      },
    ],
  },

  es: {
    eyebrow: "Preguntas frecuentes",
    title: "Planifica con confianza",
    faqs: [
      {
        question: "¿Cuánto cuesta un proyecto?",
        answer:
          "Cada proyecto es diferente. El precio depende del tamaño, los materiales, si ya hay concreto y del permiso. Envíanos tus medidas y te explicaremos las opciones disponibles.",
      },
      {
        question: "¿Necesito un permiso?",
        answer:
          "Sí. Según el Código de Edificación de Florida, una pérgola o una estructura de patio instalada de forma permanente requiere un permiso de construcción, y esto se aplica a todo el sur de Florida. La tarifa del permiso es de 2.000 dólares, que cubre los honorarios de arquitectura, las tarifas municipales, las inspecciones y una garantía de dos años.",
      },
      {
        question: "¿El concreto existente cambia el precio?",
        answer:
          "Sí. Si ya dispone de una losa de concreto, podemos fijar las columnas directamente a ella mediante soportes. Si no hay concreto, cada columna requiere excavar y colocar una cimentación, a 500 dólares por agujero.",
      },
      {
        question: "¿Cobran por los estimados?",
        answer:
          "Los estimados virtuales son gratuitos. Un estimado a domicilio sin un estimado virtual previo cuesta 75 dólares, que se le reembolsarán si firma un contrato en un plazo de 30 días. El diseño de interiores, los pisos epóxicos, los buzones modernos, las ventanas y puertas de impacto y los techos de lamas motorizados incluyen un estimado en persona gratis.",
      },
      {
        question: "¿Puedo obtener un dibujo de mi proyecto?",
        answer:
          "Sí. Un boceto básico cuesta 150 dólares, que se le acreditarán si decide seguir adelante. Una representación 3D completa cuesta 350 dólares, que es una tarifa fija.",
      },
      {
        question: "¿Cuánto tiempo dura el proyecto?",
        answer:
          "Sin permiso, normalmente tarda entre cinco y siete días, dependiendo de la disponibilidad. Con permiso, el plazo depende de la ciudad y del arquitecto, lo cual está fuera de nuestro control.",
      },
      {
        question: "¿Cuáles son las condiciones de pago?",
        answer:
          "Sin permiso: 50 % de depósito y 50 % al finalizar. Con permiso: la tarifa de permiso de 2.000 dólares se paga por adelantado; del saldo restante, el 20 % se paga al firmar, el 40 % cuando el permiso esté listo y el 40 % restante después de la instalación.",
      },
      {
        question: "¿El trabajo tiene garantía?",
        answer:
          "Sí: dos años de garantía en piezas y mano de obra, en todos los proyectos, tengan o no permiso. Esto cubre los defectos de instalación, las fugas y los fallos de fabricación. Si algo se daña o se raya después de la instalación, nos encargaremos de la mano de obra necesaria para sustituirlo, pero el costo del material correrá a cargo del cliente.",
      },
    ],
  },
};

  const t = content[lang];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#f5eee8] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#c78951]">
            {t.eyebrow}
          </p>

          <h2 className="mt-5 max-w-md font-sora text-4xl font-medium uppercase leading-[1.05] tracking-[-0.035em] text-[#110c0d] sm:text-5xl lg:text-6xl">
            {t.title}
          </h2>
        </div>

        <div className="border-t border-black/10">
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`group border-b border-black/10 transition-all duration-500 ${isOpen ? "bg-white/35" : "hover:bg-white/20"
                  }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-6 text-left sm:px-6 sm:py-7"
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-sora text-[10px] font-medium tracking-[0.2em] transition-colors duration-300 ${isOpen
                        ? "text-[#c78951]"
                        : "text-black/25"
                        }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-sora text-sm font-medium leading-6 transition-colors duration-300 sm:text-base ${isOpen
                        ? "text-[#110c0d]"
                        : "text-[#110c0d]/80 group-hover:text-[#110c0d]"
                        }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
                      ? "rotate-180 border-[#c78951] bg-[#c78951] text-white"
                      : "border-black/15 text-black/45 group-hover:border-[#c78951] group-hover:text-[#c78951]"
                      }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-7 pl-[3.25rem] pr-12 sm:pl-[3.5rem]">
                      <div className="mb-4 h-px w-8 bg-[#c78951]" />

                      <p className="max-w-2xl text-sm leading-7 text-[#5f5a54]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}