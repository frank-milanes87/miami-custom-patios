"use client";

import { useLang } from "@/lib/lang";

function WindIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#c78951]"
      aria-hidden="true"
    >
      <path
        d="M12.8 19.6A2 2 0 1 0 14 16H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 8a2.5 2.5 0 1 1 2 4H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 4.4A2 2 0 1 1 11 8H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#c78951]"
      aria-hidden="true"
    >
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#c78951]"
      aria-hidden="true"
    >
      <path
        d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 2v4M22 4h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="4"
        cy="20"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function PenToolIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#c78951]"
      aria-hidden="true"
    >
      <path
        d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m2.3 2.3 7.286 7.286"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="11"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function WalletCardsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 shrink-0 text-[#c78951]"
      aria-hidden="true"
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const credentials = [
  {
    icon: WindIcon,
    enTitle: "Miami-Dade Hurricane",
    enSubtitle: "Code Conscious",
    esTitle: "Código de Huracanes",
    esSubtitle: "Consciente de Miami-Dade",
  },
  {
    icon: ShieldCheckIcon,
    enTitle: "Licensed &",
    enSubtitle: "Fully Insured",
    esTitle: "Con Licencia y",
    esSubtitle: "Totalmente Asegurados",
  },
  {
    icon: SparklesIcon,
    enTitle: "Premium",
    enSubtitle: "Materials",
    esTitle: "Materiales",
    esSubtitle: "Premium",
  },
  {
    icon: PenToolIcon,
    enTitle: "3D CAD Renderings",
    enSubtitle: "Available",
    esTitle: "Renderizados 3D CAD",
    esSubtitle: "Disponibles",
  },
  {
    icon: WalletCardsIcon,
    enTitle: "Flexible Financing",
    enSubtitle: "Options",
    esTitle: "Opciones de",
    esSubtitle: "Financiamiento Flexible",
  },
];

export default function Credentials() {
  const { lang } = useLang();

return (
  <section
    className="border-b border-[#e5e2df] bg-background"
    aria-label={lang === "es" ? "Credenciales" : "Credentials"}
  >
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 lg:grid-cols-5">
      {credentials.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.enTitle}
            className={`
              flex min-h-28 items-center gap-3 px-3 py-5
              border-[#e5e2df]
              ${
                index === 0
                  ? "border-r border-b sm:border-b"
                  : index === 1
                    ? "border-b sm:border-b"
                    : index === 2
                      ? "border-r"
                      : index === 3
                        ? "border-b"
                        : "md:col-span-1 border-t sm:col-span-2 col-span-2 justify-center lg:justify-left"
              }
              lg:border-0
              lg:border-r
              lg:last:border-r-0
            `}
          >
            <Icon />

            <p className="font-sora text-[10px] font-medium uppercase leading-5 text-[#110c0d] sm:text-xs">
              {lang === "es" ? item.esTitle : item.enTitle}
              <br />
              <span className="font-manrope font-normal text-[var(--text)]">
                {lang === "es" ? item.esSubtitle : item.enSubtitle}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  </section>
);
}