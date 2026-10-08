"use client";

import { useLang } from "@/lib/lang";
import EstimateForm from "@/components/estimate/EstimateForm";

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function EstimateSection() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          eyebrow: "04 / SOLICITAR PRESUPUESTO",
          title: "Hagamos realidad su espacio exterior.",
          description:
            "Cuéntenos sobre su proyecto y nuestro equipo le ayudará a dar el siguiente paso.",
          why: "POR QUÉ MIAMI CUSTOM PATIOS",
          benefits: [
            "Contratistas licenciados y asegurados",
            "Diseño, permisos y programación",
            "Servicio completo de principio a fin",
          ],
          direct: "¿PREFIERE HABLAR DIRECTAMENTE?",
          phone: "Teléfono",
          email: "Correo electrónico",
          area: "Área de servicio",
          areaText: "Condados de Miami-Dade y Broward",
          location: "Sur de Florida",
        }
      : {
          eyebrow: "04 / REQUEST AN ESTIMATE",
          title: "Let's create your outdoor space.",
          description:
            "Tell us about your project and our team will help you take the next step.",
          why: "WHY MIAMI CUSTOM PATIOS",
          benefits: [
            "Licensed & insured contractors",
            "Design, permits & scheduling",
            "Complete start-to-finish service",
          ],
          direct: "PREFER TO SPEAK DIRECTLY?",
          phone: "Phone",
          email: "Email",
          area: "Service Area",
          areaText: "Miami-Dade & Broward Counties",
          location: "South Florida",
        };

  return (
    <section
      id="estimate"
      className="relative overflow-hidden bg-[#110c0d] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full border border-white/[0.035]" />

      <div className="absolute -bottom-64 -left-64 h-[600px] w-[600px] rounded-full border border-white/[0.025]" />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <p className="font-sora text-[9px] font-bold uppercase tracking-[0.24em] text-[#c78951]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-[680px] font-sora text-[36px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#f7f4ef] sm:text-[44px] lg:text-[52px]">
              {content.title}
            </h2>
          </div>

          <p className="max-w-[330px] pb-1 font-manrope text-xs leading-6 text-white/45 lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden bg-[#f7f4ef] lg:mt-12 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="min-w-0 p-5 sm:p-7 lg:p-9 xl:p-11">
            <EstimateForm />
          </div>

          <aside className="bg-[#c78951] px-6 py-8 sm:px-8 sm:py-9 lg:px-8 lg:py-10">
            <div className="flex h-full flex-col">
              <p className="font-sora text-[8px] font-bold uppercase tracking-[0.23em] text-[#110c0d]/55">
                {content.why}
              </p>

              <div className="mt-7">
                {content.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="border-t border-[#110c0d]/15 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#110c0d]/20 text-[#110c0d]">
                        <CheckIcon />
                      </span>

                      <div>
                        <p className="font-sora text-[8px] font-bold tracking-[0.15em] text-[#110c0d]/40">
                          0{index + 1}
                        </p>

                        <p className="mt-1 font-manrope text-xs font-semibold leading-5 text-[#110c0d]">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-[#110c0d]/15 pt-6">
                <p className="font-sora text-[8px] font-bold uppercase tracking-[0.18em] text-[#110c0d]/50">
                  {content.direct}
                </p>

                <a
                  href="tel:+13055634756"
                  className="group mt-3 flex items-center justify-between border-b border-[#110c0d]/20 pb-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#110c0d] text-[#c78951]">
                      <PhoneIcon />
                    </span>

                    <div>
                      <p className="font-sora text-sm font-semibold text-[#110c0d]">
                        (305) 563-4756
                      </p>

                      <p className="font-manrope text-[8px] uppercase tracking-[0.1em] text-[#110c0d]/45">
                        {content.phone}
                      </p>
                    </div>
                  </div>

                  <span className="text-[#110c0d] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>

                <a
                  href="mailto:info@miamicustompatios.com"
                  className="group flex items-center justify-between border-b border-[#110c0d]/20 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#110c0d] text-[#c78951]">
                      <MailIcon />
                    </span>

                    <div className="min-w-0">
                      <p className="truncate font-manrope text-[10px] font-bold text-[#110c0d]">
                        info@miamicustompatios.com
                      </p>

                      <p className="font-manrope text-[8px] uppercase tracking-[0.1em] text-[#110c0d]/45">
                        {content.email}
                      </p>
                    </div>
                  </div>

                  <span className="ml-2 shrink-0 text-[#110c0d] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRightIcon />
                  </span>
                </a>
              </div>

              <div className="mt-6">
                <p className="font-sora text-[8px] font-bold uppercase tracking-[0.15em] text-[#110c0d]/45">
                  {content.area}
                </p>

                <p className="mt-2 font-manrope text-xs font-semibold text-[#110c0d]">
                  {content.areaText}
                </p>

                <p className="mt-1 font-manrope text-[8px] font-semibold uppercase tracking-[0.13em] text-[#110c0d]/45">
                  {content.location}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}