"use client";

import { useLang } from "@/lib/lang";

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

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactInformation() {
  const { lang } = useLang();

  const content =
    lang === "es"
      ? {
          phone: "Teléfono",
          email: "Correo electrónico",
          area: "Área de servicio",
          call: "Llámenos directamente",
          message: "Envíenos un mensaje",
          counties: "Condados de Miami-Dade y Broward",
          location: "Sur de Florida",
        }
      : {
          phone: "Phone",
          email: "Email",
          area: "Service Area",
          call: "Call us directly",
          message: "Send us a message",
          counties: "Miami-Dade & Broward Counties",
          location: "South Florida",
        };

  return (
    <section
      aria-label={
        lang === "es"
          ? "Información de contacto"
          : "Contact information"
      }
      className="border-y border-black/10 bg-[#f7f4ef]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-3">
        <a
          href="tel:+13055634756"
          className="group border-b border-black/10 px-6 py-8 transition-colors duration-300 hover:bg-white sm:px-8 sm:py-10 md:border-b-0 md:border-r lg:px-10"
        >
          <div className="flex items-start justify-between">
            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.22em] text-[#c78951]">
              01 / {content.phone}
            </p>

            <span className="flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-[#c78951] transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951] group-hover:text-white">
              <PhoneIcon />
            </span>
          </div>

          <div className="mt-7">
            <p className="font-sora text-2xl font-semibold tracking-[-0.03em] text-[#110c0d] sm:text-3xl">
              (305) 563-4756
            </p>

            <div className="mt-3 flex items-center gap-2 font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-[#71696a] transition-colors group-hover:text-[#c78951]">
              <span>{content.call}</span>
              <ArrowRightIcon />
            </div>
          </div>
        </a>

        <a
          href="mailto:info@miamicustompatios.com"
          className="group border-b border-black/10 px-6 py-8 transition-colors duration-300 hover:bg-white sm:px-8 sm:py-10 md:border-b-0 md:border-r lg:px-10"
        >
          <div className="flex items-start justify-between">
            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.22em] text-[#c78951]">
              02 / {content.email}
            </p>

            <span className="flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-[#c78951] transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951] group-hover:text-white">
              <MailIcon />
            </span>
          </div>

          <div className="mt-7">
            <p className="break-all font-manrope text-base font-bold leading-6 text-[#110c0d] sm:text-lg">
              info@miamicustompatios.com
            </p>

            <div className="mt-3 flex items-center gap-2 font-manrope text-xs font-semibold uppercase tracking-[0.12em] text-[#71696a] transition-colors group-hover:text-[#c78951]">
              <span>{content.message}</span>
              <ArrowRightIcon />
            </div>
          </div>
        </a>

        <div className="group px-6 py-8 transition-colors duration-300 hover:bg-white sm:px-8 sm:py-10 lg:px-10">
          <div className="flex items-start justify-between">
            <p className="font-sora text-[10px] font-bold uppercase tracking-[0.22em] text-[#c78951]">
              03 / {content.area}
            </p>

            <span className="flex h-9 w-9 items-center justify-center border border-black/10 bg-white text-[#c78951] transition-all duration-300 group-hover:border-[#c78951] group-hover:bg-[#c78951] group-hover:text-white">
              <LocationIcon />
            </span>
          </div>

          <div className="mt-7">
            <p className="font-sora text-xl font-semibold leading-tight tracking-[-0.02em] text-[#110c0d] sm:text-2xl">
              {content.counties}
            </p>

            <p className="mt-3 font-manrope text-xs font-semibold uppercase tracking-[0.14em] text-[#71696a]">
              {content.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}