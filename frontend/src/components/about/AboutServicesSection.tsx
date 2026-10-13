"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

export default function AboutServicesSection() {
  const { lang } = useLang();
  const isSpanish = lang === "es";
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden bg-[#f7f4ef] px-4 py-8 text-[#110c0d] sm:min-h-[400px] sm:px-6 sm:py-10 lg:min-h-[420px] lg:px-8 lg:py-11"
    >
      <div
        aria-hidden="true"
        className="fixed-background pointer-events-none absolute inset-0 -z-20 scale-[1.02] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/roof.webp')",
          backgroundAttachment: "fixed",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#f7f4ef]/85 sm:bg-[#f7f4ef]/80 lg:bg-gradient-to-r lg:from-[#f7f4ef]/95 lg:via-[#f7f4ef]/85 lg:to-[#f7f4ef]/65"
      />

      <div className="relative w-full max-w-6xl border border-[#8b6749]/25 bg-[#f7f4ef]/30 px-4 py-7 backdrop-blur-[2px] sm:px-8 sm:py-9 lg:px-12 lg:py-10">
        <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#c78951]" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[#c78951]" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-[#c78951]" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-[#c78951]" />

        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-2 text-[7px] font-extrabold tracking-[0.12em] text-[#94633e] sm:mb-6 sm:gap-3 sm:text-[9px] sm:tracking-[0.18em]">
            <span className="h-px w-5 bg-[#c78951] sm:w-7" />
            <span>
              {isSpanish
                ? "DISEÑADO PARA TU ESTILO DE VIDA"
                : "DESIGNED AROUND YOUR LIFESTYLE"}
            </span>
            <span className="h-px w-5 bg-[#c78951] sm:w-7" />
          </div>

          <p className="mb-2 text-[8px] font-extrabold tracking-[0.2em] text-[#94633e] sm:mb-3 sm:text-[9px]">
            MIAMI CUSTOM PATIOS
          </p>

          <h2 className="text-balance font-sora text-[clamp(2rem,5.5vw,3.75rem)] font-medium leading-[1.12] tracking-[-0.06em]">
            {isSpanish ? (
              <>
                Tu espacio.
                <br />
                <span className="text-[#a96f40]">
                  Tu estilo de vida.
                </span>
              </>
            ) : (
              <>
                Make Room
                <br />
                <span className="text-[#a96f40]">
                  For Better Living.
                </span>
              </>
            )}
          </h2>

          <div className="my-4 flex justify-center sm:my-5">
            <span className="h-0.5 w-12 bg-[#c78951]" />
          </div>

          <p className="mx-auto max-w-xl text-pretty text-[11px] leading-[1.8] text-[#625850] sm:text-[13px] sm:leading-6">
            {isSpanish
              ? "Desde espacios exteriores cuidadosamente diseñados hasta mejoras para tu hogar, te ayudamos a convertir tus ideas en proyectos bien coordinados con profesionales de confianza en el sur de Florida."
              : "From thoughtfully designed outdoor spaces to meaningful home improvements, we help turn your ideas into well-coordinated projects with trusted professionals across South Florida."}
          </p>

          <div className="mt-5 sm:mt-6">
            <Link
              href="/services"
              className="group inline-flex min-h-11 max-w-full items-center justify-center gap-3 border border-[#110c0d] bg-[#110c0d] py-1 pl-4 pr-1 text-[8px] font-extrabold tracking-[0.08em] text-[#f7f4ef] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c78951] hover:bg-[#c78951] hover:text-[#110c0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c78951] sm:gap-5 sm:pl-5 sm:pr-1.5 sm:text-[9px] sm:tracking-[0.1em]"
            >
              <span>
                {isSpanish
                  ? "DESCUBRE NUESTROS SERVICIOS"
                  : "DISCOVER OUR SERVICES"}
              </span>

              <span className="flex size-8 shrink-0 items-center justify-center bg-[#c78951] text-[#110c0d] transition-colors duration-300 group-hover:bg-[#f7f4ef] sm:size-9">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[6px] font-bold leading-4 tracking-[0.06em] text-[#796d62] sm:mt-6 sm:gap-3 sm:text-[7px] sm:tracking-[0.1em]">
            <span className="h-px w-4 bg-[#c78951] sm:w-5" />
            <span>
              {isSpanish
                ? "UN EQUIPO · UN PROCESO CLARO · UNA MEJOR EXPERIENCIA"
                : "ONE TEAM · ONE CLEAR PROCESS · A BETTER EXPERIENCE"}
            </span>
            <span className="h-px w-4 bg-[#c78951] sm:w-5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .fixed-background {
            background-attachment: scroll !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fixed-background {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}