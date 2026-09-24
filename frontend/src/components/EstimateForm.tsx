"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

const serviceOptions = [
  {
    id: "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4",
    en: "Pergola / Patio Cover",
    es: "Pérgola / Cubierta de Patio",
  },
  {
    id: "4b06f424-4b9f-41d0-8bec-fc5e5064b51c",
    en: "Outdoor Kitchen",
    es: "Cocina Exterior",
  },
  {
    id: "02a37216-8de0-4be4-a370-3c083d2a0c18",
    en: "Decking / Pavers",
    es: "Decking / Pavers",
  },
  {
    id: "c131ed6b-06b8-4b55-afbc-d1dc28ea737d",
    en: "Custom Fencing",
    es: "Cercas Personalizadas",
  },
  {
    id: "fb8385ff-cd01-4099-93e6-a76c0778a586",
    en: "Impact Products",
    es: "Productos de Impacto",
  },
  {
    id: "ed3ec3f5-2d13-4265-b3f3-d0a326961494",
    en: "Epoxy Flooring",
    es: "Pisos Epóxicos",
  },
  {
    id: "c5fe5f95-1da0-4fb1-b4c7-59a06054b084",
    en: "Mailbox",
    es: "Buzón",
  },
  {
    id: "6b4ab573-9f56-48d1-8c01-bac429f45ff4",
    en: "Interior Design",
    es: "Diseño de Interiores",
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
    const phone = String(formData.get("phone") ?? "").trim();
    const zipCode = String(formData.get("zipCode") ?? "").trim();
    const projectDetails = String(formData.get("notes") ?? "").trim();

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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001"}/api/estimate-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            phone,
            zipCode,
            serviceIds: selectedServices,
            projectDetails: projectDetails || undefined,
          }),
        },
      );

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
        <div className="relative min-h-[520px] overflow-hidden bg-white px-6 py-14 text-center shadow-2xl sm:px-10 sm:py-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 animate-pulse rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 animate-pulse rounded-full bg-[var(--accent)]/5 blur-3xl [animation-delay:700ms]" />

          <div className="absolute left-0 top-0 h-px w-full overflow-hidden bg-black/5">
            <div className="h-full w-full origin-left animate-[scale-x_700ms_ease-out] bg-[var(--accent)]" />
          </div>

          <div className="relative flex min-h-[430px] flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-[-14px] animate-ping rounded-full border border-[var(--accent)]/20" />

              <div className="relative flex h-24 w-24 animate-[successPop_700ms_cubic-bezier(.2,.8,.2,1)] items-center justify-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/20">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    className="animate-[checkDraw_600ms_ease-out_300ms_both]"
                  >
                    <path
                      d="M7 15.5L12.5 21L23 9"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-10 animate-[fadeUp_700ms_ease-out_200ms_both]">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
                {lang === "es" ? "Solicitud recibida" : "Request received"}
              </p>

              <h2 className="mt-4 font-sora text-3xl font-semibold tracking-[-0.04em] text-[var(--black)] sm:text-4xl">
                {lang === "es"
                  ? "¡Gracias por tu solicitud!"
                  : "Thank You For Your Submission!"}
              </h2>

              <div className="mx-auto mt-5 h-px w-12 bg-[var(--accent)]" />

              <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[var(--text)]">
                {lang === "es"
                  ? "Recibimos la información de tu proyecto. Nuestro equipo se pondrá en contacto contigo pronto para hablar sobre los próximos pasos."
                  : "We received your project information. Our team will be in touch with you shortly to discuss your project and next steps."}
              </p>
            </div>

            <div className="mt-9 animate-[fadeUp_700ms_ease-out_500ms_both]">
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

          <style jsx>{`
            @keyframes successPop {
              0% {
                opacity: 0;
                transform: scale(0.5);
              }
              70% {
                opacity: 1;
                transform: scale(1.08);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes checkDraw {
              0% {
                opacity: 0;
                transform: scale(0.6);
              }
              100% {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes fadeUp {
              0% {
                opacity: 0;
                transform: translateY(18px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes scale-x {
              0% {
                transform: scaleX(0);
              }
              100% {
                transform: scaleX(1);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pt-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 text-[var(--black)] shadow-2xl sm:p-8"
      >
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              {t.estimateForm.eyebrow}
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              {t.estimateForm.title}
            </h2>
          </div>

          <span className="hidden text-xs text-[var(--text)] sm:block">
            {t.estimateForm.takes}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-xs font-medium text-[var(--text)]">
            <span className="mb-2 block">{t.estimateForm.name}</span>

            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="h-13 w-full rounded-none border border-black/10 bg-white px-4 text-sm text-[var(--black)] outline-none transition placeholder:text-black/40 focus:border-[var(--accent)]"
              placeholder={t.estimateForm.namePlaceholder}
            />
          </label>

          <label className="block text-xs font-medium text-[var(--text)]">
            <span className="mb-2 block">{t.estimateForm.phone}</span>

            <input
              required
              name="phone"
              type="tel"
              autoComplete="tel"
              className="h-13 w-full rounded-none border border-black/10 bg-white px-4 text-sm text-[var(--black)] outline-none transition placeholder:text-black/40 focus:border-[var(--accent)]"
              placeholder={t.estimateForm.phonePlaceholder}
            />
          </label>

          <label className="block text-xs font-medium text-[var(--text)]">
            <span className="mb-2 block">{t.estimateForm.zip}</span>

            <input
              required
              name="zipCode"
              type="text"
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              className="h-13 w-full rounded-none border border-black/10 bg-white px-4 text-sm text-[var(--black)] outline-none transition placeholder:text-black/40 focus:border-[var(--accent)]"
              placeholder={t.estimateForm.zipPlaceholder}
            />
          </label>

          <div
            ref={dropdownRef}
            className="relative text-xs font-medium text-[var(--black)]"
          >
            <span className="mb-2 block uppercase tracking-[0.12em]">
              {t.estimateForm.service}
            </span>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-13 w-full cursor-pointer items-center justify-between rounded-none border border-[var(--accent)] bg-white px-4 text-left text-sm font-normal text-[var(--black)] transition hover:bg-[#faf7f4]"
            >
              <span className="truncate">{serviceText}</span>

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-2 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute left-0 right-0 top-full z-50 border border-black/10 bg-white shadow-xl">
                {serviceOptions.map((service, index) => {
                  const selected = selectedServices.includes(service.id);
                  const label = service[lang];

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className="flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition hover:bg-[#f7f3ef]"
                    >
                      <span
                        className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center border transition-all duration-200 ${
                          selected
                            ? "scale-105 border-[var(--accent)] bg-[var(--accent)]"
                            : "border-black/50 bg-white"
                        }`}
                      >
                        {selected && (
                          <svg
                            width="10"
                            height="10"
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

                      <span className="text-[12px] font-bold uppercase leading-4 tracking-[0.04em] text-[var(--black)]">
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <label className="block text-xs font-medium text-[var(--text)] sm:col-span-2">
            <span className="mb-2 block">
              {t.estimateForm.projectDetails}
            </span>

            <textarea
              name="notes"
              rows={4}
              maxLength={2000}
              className="min-h-20 w-full resize-none rounded-none border border-black/10 bg-white px-4 py-3 text-sm text-[var(--black)] outline-none transition placeholder:text-black/40 focus:border-[var(--accent)]"
              placeholder={t.estimateForm.projectPlaceholder}
            />
          </label>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 h-13 w-full rounded-none bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-widest text-white shadow-none transition hover:bg-[#b47745] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? lang === "es"
              ? "Enviando..."
              : "Submitting..."
            : t.estimateForm.submit}
        </button>

        <p className="mt-4 text-xs leading-5 text-[var(--text)]">
          <strong className="text-current">
            {t.estimateForm.free}
          </strong>{" "}
          {t.estimateForm.reimbursement}
        </p>
      </form>
    </div>
  );
}