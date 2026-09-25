"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

const serviceOptions = [
  {
    id: "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4",
    en: "Pergolas Screen Enclosures",
    es: "Pérgolas y Cerramientos con Mosquitero",
  },
  {
    id: "4b06f424-4b9f-41d0-8bec-fc5e5064b51c",
    en: "Outdoor Kitchens",
    es: "Cocinas Exteriores",
  },
  {
    id: "02a37216-8de0-4be4-a370-3c083d2a0c18",
    en: "Concrete Pavers",
    es: "Pavers de Concreto",
  },
  {
    id: "c131ed6b-06b8-4b55-afbc-d1dc28ea737d",
    en: "Modern Fencing — Wood, Aluminum, PVC",
    es: "Cercas Modernas — Madera, Aluminio, PVC",
  },
  {
    id: "ed3ec3f5-2d13-4265-b3f3-d0a326961494",
    en: "Epoxy Flooring",
    es: "Pisos Epóxicos",
  },
  {
    id: "fb8385ff-cd01-4099-93e6-a76c0778a586",
    en: "Impact Windows Doors",
    es: "Ventanas y Puertas de Impacto",
  },
  {
    id: "5edb51fe-3486-4782-a706-af2cc1fc3aa5",
    en: "Accordion Shutters",
    es: "Persianas Acordeón",
  },
  {
    id: "c5fe5f95-1da0-4fb1-b4c7-59a06054b084",
    en: "Modern Mailboxes",
    es: "Buzones Modernos",
  },
];

export default function EstimateForm() {
  const { lang, t } = useLang();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function toggleService(serviceId: string) {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );

    setError("");
  }

  function getServiceName(serviceId: string) {
    const service = serviceOptions.find((item) => item.id === serviceId);
    return service ? service[lang] : "";
  }

  const selectedNames = selectedServices
    .map(getServiceName)
    .filter(Boolean);

  const serviceText =
    selectedNames.length === 0
      ? t.estimateForm.servicePlaceholder
      : selectedNames.length === 1
        ? selectedNames[0]
        : `${selectedNames.length} ${t.estimateForm.servicesSelected}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setError("");
    setSuccess(false);

    const formData = new FormData(form);

    const fullName = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const zipCode = String(formData.get("zipCode") ?? "").trim();
    const projectDetails = String(formData.get("notes") ?? "").trim();

    if (!fullName || !email || !phone || !zipCode) {
      setError(
        lang === "es"
          ? "Completa todos los campos requeridos."
          : "Please complete all required fields.",
      );
      return;
    }

    if (!email.includes("@")) {
      setError(
        lang === "es"
          ? "Introduce un correo electrónico válido."
          : "Please enter a valid email address.",
      );
      return;
    }

    if (selectedServices.length === 0) {
      setError(
        lang === "es"
          ? "Selecciona al menos un servicio."
          : "Please select at least one service.",
      );
      setIsOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/estimate-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          zipCode,
          serviceIds: selectedServices,
          projectDetails: projectDetails || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
            (lang === "es"
              ? "No pudimos enviar tu solicitud."
              : "We could not submit your request."),
        );
      }

      setSuccess(true);
      setSelectedServices([]);
      form.reset();
      setIsOpen(false);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : lang === "es"
            ? "Algo salió mal. Inténtalo nuevamente."
            : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="lg:pt-4">
        <div className="relative min-h-[560px] overflow-hidden border border-black/5 bg-white px-6 py-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:px-10 sm:py-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[var(--accent)]/5 blur-3xl" />

          <div className="absolute left-0 top-0 h-1 w-full bg-[var(--accent)]" />

          <div className="relative flex min-h-[450px] flex-col items-center justify-center">
         <div className="relative">
 <div className="absolute inset-[-14px] animate-[successPulse_2.5s_ease-in-out_infinite] rounded-full border border-[var(--accent)]/20" />

  <div className="absolute inset-[-7px] rounded-full border border-[var(--accent)]/15" />

  <div className="relative flex h-24 w-24 animate-[successPop_0.6s_ease-out] items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] shadow-xl shadow-[var(--accent)]/20">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        className="animate-[checkAppear_0.5s_ease-out_0.25s_both]"
        aria-hidden="true"
      >
        <path
          d="M7 15.5L12.5 21L23 9"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  <style jsx>{`
    @keyframes successPop {
      0% {
        opacity: 0;
        transform: scale(0.7);
      }

      70% {
        transform: scale(1.06);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes checkAppear {
      0% {
        opacity: 0;
        transform: scale(0.5);
      }

      70% {
        opacity: 1;
        transform: scale(1.12);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes successPulse {
      0%,
      100% {
        transform: scale(0.98);
        opacity: 0.35;
      }

      50% {
        transform: scale(1.10);
        opacity: 0.75;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .animate-\\[successPulse_2\\.5s_ease-in-out_infinite\\],
      .animate-\\[successPop_0\\.6s_ease-out\\],
      .animate-\\[checkAppear_0\\.5s_ease-out_0\\.25s_both\\] {
        animation: none;
      }
    }
  `}</style>
</div>

            <div className="mt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                {lang === "es" ? "Solicitud recibida" : "Request received"}
              </p>

              <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--black)] sm:text-4xl">
                {lang === "es"
                  ? "¡Gracias por tu solicitud!"
                  : "Thank You For Your Submission!"}
              </h2>

              <div className="mx-auto mt-6 h-px w-14 bg-[var(--accent)]" />

              <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[var(--text)]">
                {lang === "es"
                  ? "Recibimos la información de tu proyecto. Nuestro equipo se pondrá en contacto contigo pronto para hablar sobre los próximos pasos."
                  : "We received your project information. Our team will be in touch with you shortly to discuss your project and next steps."}
              </p>
            </div>

            <div className="mt-9">
              <div className="inline-flex items-center gap-3 border border-black/10 px-5 py-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                  {lang === "es"
                    ? "Cotización virtual gratis"
                    : "Free virtual estimate"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pt-4">
      <form
        onSubmit={handleSubmit}
        className="relative overflow-visible border border-black/5 bg-white p-5 text-[var(--black)] shadow-[0_25px_70px_rgba(0,0,0,0.18)] sm:p-6"
      >
        <div className="absolute left-0 top-0 h-1 w-full bg-[var(--accent)]" />

        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              {t.estimateForm.eyebrow}
            </p>

            <h2 className="mt-2 font-sora text-2xl font-semibold tracking-[-0.04em] text-[var(--black)] sm:text-3xl">
              {t.estimateForm.title}
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <span className="text-xs text-[var(--text)]">
              {t.estimateForm.takes}
            </span>
          </div>
        </div>

        <div className="mb-7 h-px w-full bg-black/10" />

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.name}
            </span>

            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              placeholder={t.estimateForm.namePlaceholder}
              className="h-14 w-full rounded-none border border-black/10 bg-[#fffdfb] px-4 text-sm text-[var(--black)] outline-none transition duration-200 placeholder:text-black/35 hover:border-black/20 focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[var(--accent)]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              Email
            </span>

            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="h-14 w-full rounded-none border border-black/10 bg-[#fffdfb] px-4 text-sm text-[var(--black)] outline-none transition duration-200 placeholder:text-black/35 hover:border-black/20 focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[var(--accent)]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.phone}
            </span>

            <input
              required
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={t.estimateForm.phonePlaceholder}
              className="h-14 w-full rounded-none border border-black/10 bg-[#fffdfb] px-4 text-sm text-[var(--black)] outline-none transition duration-200 placeholder:text-black/35 hover:border-black/20 focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[var(--accent)]/10"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.zip}
            </span>

            <input
              required
              name="zipCode"
              type="text"
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              placeholder={t.estimateForm.zipPlaceholder}
              className="h-14 w-full rounded-none border border-black/10 bg-[#fffdfb] px-4 text-sm text-[var(--black)] outline-none transition duration-200 placeholder:text-black/35 hover:border-black/20 focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[var(--accent)]/10"
            />
          </label>

          <div
            ref={dropdownRef}
            className="relative sm:col-span-2"
          >
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.service}
            </span>

            <button
              type="button"
              onMouseDown={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setIsOpen((current) => !current);
              }}
              className={`flex h-14 w-full cursor-pointer items-center justify-between border bg-[#fffdfb] px-4 text-left text-sm transition duration-200 ${
                isOpen || selectedServices.length > 0
                  ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/10"
                  : "border-black/10 hover:border-black/20"
              }`}
            >
              <span
                className={
                  selectedServices.length > 0
                    ? "truncate text-[var(--black)]"
                    : "truncate text-black/40"
                }
              >
                {serviceText}
              </span>

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-3 shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="absolute left-0 right-0 top-full z-[100] mt-1 max-h-[360px] overflow-y-auto border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <div className="border-b border-black/5 px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                    {lang === "es"
                      ? "Selecciona uno o más servicios"
                      : "Select one or more services"}
                  </p>
                </div>

                {serviceOptions.map((service) => {
                  const selected = selectedServices.includes(service.id);
                  const label = service[lang];

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        toggleService(service.id);
                      }}
                      className={`flex w-full cursor-pointer items-center gap-4 px-4 py-3.5 text-left transition duration-150 ${
                        selected
                          ? "bg-[var(--accent)]/8"
                          : "hover:bg-[#faf7f4]"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center border transition-all duration-200 ${
                          selected
                            ? "border-[var(--accent)] bg-[var(--accent)]"
                            : "border-black/25 bg-white"
                        }`}
                      >
                        {selected && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m2 6 2.5 2.5L10 3" />
                          </svg>
                        )}
                      </span>

                      <span className="text-xs font-bold uppercase leading-5 tracking-[0.05em] text-[var(--black)]">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <label className="block sm:col-span-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
                {t.estimateForm.projectDetails}
              </span>

              <span className="text-[9px] uppercase tracking-[0.12em] text-black/30">
                {lang === "es" ? "Opcional" : "Optional"}
              </span>
            </div>

            <textarea
              name="notes"
              rows={2}
              maxLength={2000}
              placeholder={t.estimateForm.projectPlaceholder}
              className="min-h-[80px] w-full resize-none rounded-none border border-black/10 bg-[#fffdfb] px-4 py-4 text-sm leading-6 text-[var(--black)] outline-none transition duration-200 placeholder:text-black/35 hover:border-black/20 focus:border-[var(--accent)] focus:bg-white focus:ring-2 focus:ring-[var(--accent)]/10"
            />
          </label>
        </div>

        {error && (
          <div className="mt-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mt-0.5 shrink-0 text-red-600"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v5" />
              <path d="M12 16h.01" />
            </svg>

            <p className="text-sm leading-5 text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-6 flex h-14 w-full cursor-pointer items-center justify-center gap-3 bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[var(--accent)]/15 transition duration-300 hover:bg-[#b47745] hover:shadow-xl hover:shadow-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-spin"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  className="opacity-30"
                />
                <path d="M21 12a9 9 0 0 0-9-9" />
              </svg>

              {lang === "es" ? "Enviando..." : "Submitting..."}
            </>
          ) : (
            <>
              {t.estimateForm.submit}

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </>
          )}
        </button>

        <div className="mt-5 flex items-start gap-3 border-t border-black/10 pt-5">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="text-[var(--accent)]"
            >
              <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <p className="text-xs leading-5 text-[var(--text)]">
            <strong className="font-semibold text-[var(--black)]">
              {t.estimateForm.free}
            </strong>{" "}
            {t.estimateForm.reimbursement}
          </p>
        </div>
      </form>
    </div>
  );
}