"use client";

import { useLang } from "@/lib/lang";

export default function ProcessSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "CÓMO FUNCIONA",
          title: "Una mejor manera de crear espacios exteriores.",
          steps: [
            {
              number: "01",
              title: "Cuéntenos lo que tiene en mente",
              description:
                "Comparta sus ideas, objetivos y el espacio que desea transformar.",
            },
            {
              number: "02",
              title: "Planifíquelo con nuestro equipo",
              description:
                "Le ayudaremos a explorar el diseño, los materiales, el alcance y los próximos pasos adecuados.",
            },
            {
              number: "03",
              title: "Hagamos realidad su visión",
              description:
                "Una vez definido todo, nuestro equipo coordina el proceso desde la planificación hasta la finalización.",
            },
          ],
        }
      : {
          eyebrow: "HOW IT WORKS",
          title: "A Better Way to Build Outdoors.",
          steps: [
            {
              number: "01",
              title: "Tell Us What You Have in Mind",
              description:
                "Share your ideas, goals, and the space you're looking to transform.",
            },
            {
              number: "02",
              title: "Plan It With Our Team",
              description:
                "We'll help you explore the right design, materials, scope, and next steps.",
            },
            {
              number: "03",
              title: "Bring Your Vision to Life",
              description:
                "Once everything is clear, our team coordinates the process from planning through completion.",
            },
          ],
        };

  return (
    <section className="bg-[#f7f4ef]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="font-sora text-[9px] font-bold uppercase tracking-[0.24em] text-[#c78951]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-sora text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#110c0d] sm:text-4xl lg:text-[46px]">
            {content.title}
          </h2>
        </div>

        <ol className="mt-12 grid gap-0 border-t border-black/10 md:grid-cols-3">
          {content.steps.map((step, index) => (
            <li
              key={step.number}
              className={`group relative py-7 md:px-8 md:py-9 ${
                index !== 0 ? "md:border-l md:border-black/10" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-sora text-[11px] font-bold tracking-[0.16em] text-[#c78951]">
                  {step.number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 font-sora text-[10px] text-[#71696a] transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951] group-hover:text-white">
                  →
                </span>
              </div>

              <h3 className="mt-8 max-w-[280px] font-sora text-xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#110c0d] sm:text-[22px]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-[300px] font-manrope text-sm leading-6 text-[#71696a]">
                {step.description}
              </p>

              <div className="mt-8 h-px w-0 bg-[#c78951] transition-all duration-500 group-hover:w-12" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}