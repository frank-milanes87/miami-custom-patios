"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export default function AboutContactSection() {
  const { lang } = useLang();
  const isSpanish = lang === "es";

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f4ef] py-20 text-[#110c0d]  sm:py-24 lg:py-28">

      <div className="mx-auto grid w-full max-w-[1440px]  px-5 sm:px-8 lg:px-10 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c78951]" />
            <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#94633e] sm:text-[10px]">
              {isSpanish ? "EMPECEMOS TU PROYECTO" : "LET'S GET STARTED"}
            </span>
          </div>

          <h2 className="max-w-2xl text-balance font-sora text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.08] tracking-[-0.06em]">
            {isSpanish ? (
              <>
                Hablemos de
                <br />
                <span className="text-[#b87945]">tu proyecto.</span>
              </>
            ) : (
              <>
                Let's Talk About
                <br />
                <span className="text-[#b87945]">Your Project.</span>
              </>
            )}
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#6d645d] sm:text-base sm:leading-8">
            {isSpanish
              ? "Cuéntanos qué tienes en mente y te ayudaremos a encontrar el siguiente paso adecuado."
              : "Tell us what you're planning, and we'll help you understand the right next step."}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-5 border border-[#c78951] bg-[#c78951] px-5 py-3 text-center text-[10px] font-extrabold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a86d3d] hover:bg-[#a86d3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b87945] sm:px-6"
            >
              <span>
                {isSpanish
                  ? "SOLICITAR ESTIMACIÓN GRATIS"
                  : "GET A FREE VIRTUAL ESTIMATE"}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <a
              href="tel:+13055634756"
              className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#110c0d]/15 bg-white/60 px-5 py-3 text-center text-sm font-medium text-[#110c0d] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c78951] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b87945] sm:px-6"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 3.2 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>
                {isSpanish ? "Llamar" : "Call"} (305) 563-4756
              </span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#81766d]">
            <span className="h-px w-6 bg-[#c78951]" />
            {isSpanish
              ? "AL SERVICIO DEL SUR DE FLORIDA"
              : "SERVING SOUTH FLORIDA"}
          </div>
        </div>

        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#94633e]">
              {isSpanish ? "OPCIONES DE ESTIMACIÓN" : "ESTIMATE OPTIONS"}
            </span>
            <span className="h-px flex-1 bg-[#110c0d]/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden border border-[#c78951]/50 bg-white p-6 shadow-[0_10px_40px_rgba(17,12,13,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c78951] hover:shadow-[0_18px_45px_rgba(17,12,13,0.08)] sm:p-7">
              <span className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[#c78951]" />

              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#94633e]">
                  {isSpanish ? "A DISTANCIA" : "VIRTUAL ESTIMATE"}
                </span>
                <p className="mt-4 font-sora text-4xl font-medium tracking-[-0.06em] text-[#110c0d] sm:text-5xl">
                  {isSpanish ? "Gratis" : "Free"}
                </p>
              </div>

              <p className="mt-6 text-xs leading-6 text-[#6d645d]">
                {isSpanish
                  ? "Comienza a planificar tu proyecto virtualmente."
                  : "Start planning your project remotely."}
              </p>
            </div>

            <div className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden border border-[#110c0d]/10 bg-[#eee7dd] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c78951]/60 sm:p-7">
              <span className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[#c78951]" />

              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#94633e]">
                  {isSpanish ? "VISITA A DOMICILIO" : "IN-HOME ESTIMATE"}
                </span>
                <p className="mt-4 font-sora text-4xl font-medium tracking-[-0.06em] text-[#110c0d] sm:text-5xl">
                  $75
                </p>
              </div>

              <p className="mt-6 text-xs leading-6 text-[#6d645d]">
                {isSpanish
                  ? "Una visita a tu propiedad para evaluar el proyecto."
                  : "An on-site visit to assess your project."}
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3 border-t border-[#110c0d]/10 pt-5">
            <svg
              className="mt-0.5 shrink-0 text-[#a86d3d]"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>

            <p className="text-xs leading-6 text-[#6d645d]">
              {isSpanish
                ? "La tarifa de $75 por la visita a domicilio se reembolsa si continúas con el proyecto dentro de los 30 días posteriores a recibir la estimación."
                : "The $75 in-home estimate fee is reimbursed if you proceed with the project within 30 days of receiving the estimate."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}