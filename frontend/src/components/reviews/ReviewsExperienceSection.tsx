"use client";

import { useLang } from "@/lib/lang";

export default function ReviewsExperienceSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "NUESTRA FILOSOFÍA",
          title: "Construimos sobre",
          accent: "buenas experiencias.",
          description:
            "Cada proyecto es diferente, pero el objetivo siempre es el mismo: comunicación clara, planificación cuidadosa y un espacio terminado que nuestros clientes se sientan orgullosos de tener en casa.",
          principles: [
            {
              number: "01",
              title: "Comunicación clara",
              description:
                "Información transparente y orientación durante cada etapa del proyecto.",
            },
            {
              number: "02",
              title: "Diseño cuidadoso",
              description:
                "Soluciones pensadas para su espacio, sus necesidades y su estilo de vida.",
            },
            {
              number: "03",
              title: "Calidad en cada detalle",
              description:
                "Atención a los detalles y una experiencia cuidadosamente coordinada.",
            },
          ],
          note: "Una mejor experiencia comienza con un mejor proceso.",
        }
      : {
          eyebrow: "OUR PHILOSOPHY",
          title: "Built on",
          accent: "good experiences.",
          description:
            "Every project is different, but the goal is always the same: clear communication, thoughtful planning and a finished space our customers are proud to have at home.",
          principles: [
            {
              number: "01",
              title: "Clear communication",
              description:
                "Transparent information and guidance throughout every stage of the project.",
            },
            {
              number: "02",
              title: "Thoughtful design",
              description:
                "Solutions tailored to your space, your needs and your lifestyle.",
            },
            {
              number: "03",
              title: "Quality in every detail",
              description:
                "Attention to detail and a carefully coordinated customer experience.",
            },
          ],
          note: "A better experience begins with a better process.",
        };

  return (
    <section className="relative overflow-hidden border-y border-[#c78951]/15 bg-[#f7f4ef]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c78951]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#c78951]" />

              <p className="font-sora text-[10px] font-bold uppercase tracking-[0.26em] text-[#a96f3d] sm:text-[11px]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-7 max-w-xl font-sora text-3xl font-semibold uppercase leading-[1.08] tracking-[-0.045em] text-[#171112] sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              {content.title}
              <br />
              <span className="text-[#b77b47]">{content.accent}</span>
            </h2>

            <p className="mt-7 max-w-lg font-manrope text-sm leading-7 text-[#51484a] sm:text-base sm:leading-8">
              {content.description}
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-[#171112]/10 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c78951]/40 text-[#a96f3d]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="max-w-xs font-manrope text-xs leading-6 text-[#51484a] sm:text-sm">
                {content.note}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px border border-[#171112]/10 bg-[#171112]/10 sm:grid-cols-3">
              {content.principles.map((principle, index) => (
                <article
                  key={principle.number}
                  className="group relative flex min-h-[245px] flex-col overflow-hidden bg-[#fbf9f5] p-6 transition-colors duration-300 hover:bg-white sm:min-h-[290px] sm:p-7 lg:p-6 xl:p-7"
                  style={{
                    animation: `fadeUp 0.7s ease-out ${index * 140}ms both`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sora text-xs font-semibold tracking-[0.15em] text-[#b77b47]">
                      {principle.number}
                    </span>

                    <span className="h-px w-7 origin-right bg-[#c78951]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#c78951]" />
                  </div>

                  <div className="mt-9">
                    <h3 className="font-sora text-sm font-semibold uppercase leading-6 tracking-[0.04em] text-[#171112] sm:text-base">
                      {principle.title}
                    </h3>

                    <p className="mt-4 font-manrope text-xs leading-6 text-[#716669] sm:text-sm">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-7">
                    <span className="h-1 w-1 rounded-full bg-[#c78951]" />
                    <span className="h-px w-8 bg-[#c78951]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#c78951]" />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <span className="font-sora text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8d7f80] sm:text-[10px]">
                MIAMI CUSTOM PATIOS
              </span>

              <span className="h-px flex-1 bg-[#171112]/10" />

              <span className="font-manrope text-[10px] text-[#8d7f80] sm:text-xs">
                SOUTH FLORIDA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}