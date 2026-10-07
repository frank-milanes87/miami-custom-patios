"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";
import type {
  ContactData,
  PropertyData,
  ServiceDetails,
} from "./estimate-types";
import { getEstimateServiceName } from "./estimate-services";

type EstimateStep4Props = {
  contact: ContactData;
  selectedServices: string[];
  serviceDetails: ServiceDetails;
  property: PropertyData;
  onBack: () => void;
};

type PreparedUpload = {
  path: string;
  token: string;
  name: string;
  type: string;
};

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL;

const STORAGE_BUCKET = "estimate-photos";

export default function EstimateStep4({
  contact,
  selectedServices,
  serviceDetails,
  property,
  onBack,
}: EstimateStep4Props) {
  const { lang } = useLang();

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);

  const [openSections, setOpenSections] =
    useState<string[]>(["contact"]);

  function toggleSection(section: string) {
    setOpenSections((current) =>
      current.includes(section)
        ? current.filter(
            (item) => item !== section,
          )
        : [...current, section],
    );
  }

  function formatDetailValue(
    value: string | string[],
  ) {
    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return value;
  }

  function getDetailEntries(
    serviceId: string,
  ) {
    const details =
      serviceDetails[serviceId];

    if (!details) {
      return [];
    }

    return Object.entries(details).filter(
      ([, value]) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }

        return Boolean(value);
      },
    );
  }

  async function handleSubmit() {
    setError("");
    setIsSubmitting(true);

    try {
      if (!SUPABASE_URL) {
        throw new Error(
          "Supabase configuration is missing.",
        );
      }

      if (property.photos.length === 0) {
        throw new Error(
          lang === "es"
            ? "Debes agregar al menos una foto del área."
            : "At least one project photo is required.",
        );
      }

      const prepareResponse =
        await fetch(
          "/api/estimate-requests",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              action:
                "prepare-uploads",
              files:
                property.photos.map(
                  (file) => ({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                  }),
                ),
            }),
          },
        );

      const prepareData =
        await prepareResponse
          .json()
          .catch(() => null);

      if (!prepareResponse.ok) {
        throw new Error(
          prepareData?.error ||
            (lang === "es"
              ? "No pudimos preparar las fotos."
              : "We couldn't prepare the photos."),
        );
      }

      const uploads =
        prepareData?.uploads as
          | PreparedUpload[]
          | undefined;

      if (
        !uploads ||
        uploads.length !==
          property.photos.length
      ) {
        throw new Error(
          lang === "es"
            ? "No pudimos preparar todas las fotos."
            : "We couldn't prepare all project photos.",
        );
      }

      const uploadedPaths: string[] = [];

      for (
        let index = 0;
        index < property.photos.length;
        index++
      ) {
        const file =
          property.photos[index];

        const upload =
          uploads[index];

        const uploadResponse =
          await fetch(
            `${SUPABASE_URL}/storage/v1/object/upload/sign/${STORAGE_BUCKET}/${encodePath(
              upload.path,
            )}?token=${encodeURIComponent(
              upload.token,
            )}`,
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  file.type,
              },
              body: file,
            },
          );

        if (!uploadResponse.ok) {
          throw new Error(
            lang === "es"
              ? `No pudimos subir la foto ${index + 1}.`
              : `We couldn't upload photo ${index + 1}.`,
          );
        }

        uploadedPaths.push(
          upload.path,
        );
      }

      const submitResponse =
        await fetch(
          "/api/estimate-requests",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              action: "submit",
              contact,
              selectedServices,
              serviceDetails,
              property: {
                address:
                  property.address,
                hoa: property.hoa,
                approvalRequired:
                  property.approvalRequired,
                timeline:
                  property.timeline,
                budget:
                  property.budget,
                additionalDetails:
                  property.additionalDetails,
              },
              photoPaths:
                uploadedPaths,
            }),
          },
        );

      const submitData =
        await submitResponse
          .json()
          .catch(() => null);

      if (!submitResponse.ok) {
        throw new Error(
          submitData?.error ||
            (lang === "es"
              ? "No pudimos enviar tu solicitud."
              : "We couldn't submit your request."),
        );
      }

      setSuccess(true);
    } catch (submissionError) {
      console.error(
        "Estimate submission error:",
        submissionError,
      );

      setError(
        submissionError instanceof Error
          ? submissionError.message
          : lang === "es"
            ? "No pudimos enviar tu solicitud. Inténtalo de nuevo."
            : "We couldn't submit your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="animate-[stepIn_0.4s_ease-out] py-10 text-center sm:py-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/10">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--accent)]"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          {lang === "es"
            ? "Solicitud enviada"
            : "Request submitted"}
        </p>

        <h3 className="mt-3 font-sora text-2xl font-semibold tracking-[-0.03em] text-[var(--black)] sm:text-3xl">
          {lang === "es"
            ? "Gracias por contactarnos."
            : "Thank you for contacting us."}
        </h3>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--text)]">
          {lang === "es"
            ? "Recibimos tu solicitud y revisaremos los detalles de tu proyecto. Nos pondremos en contacto contigo."
            : "We received your request and will review your project details. We'll be in touch with you shortly."}
        </p>
      </div>
    );
  }

  return (
  <div className="flex min-h-0 flex-col animate-[stepIn_0.4s_ease-out]">
   <div className="max-h-[calc(100vh-380px)] min-h-0 overflow-y-auto overscroll-contain pr-3 sm:max-h-[420px] sm:pr-4 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/[0.04] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent)] [&::-webkit-scrollbar-thumb]:hover:bg-[#b47745]">
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
          {lang === "es"
            ? "Paso 4 de 4"
            : "Step 4 of 4"}
        </p>

        <h3 className="mt-2 font-sora text-xl font-semibold tracking-[-0.03em] text-[var(--black)] sm:text-2xl">
          {lang === "es"
            ? "Revisa tu solicitud"
            : "Review Your Request"}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--text)]">
          {lang === "es"
            ? "Revisa la información antes de enviar tu solicitud."
            : "Review your information before submitting your request."}
        </p>
      </div>

      <div className="space-y-3">
        <ReviewSection
          id="contact"
          title={
            lang === "es"
              ? "Información de contacto"
              : "Contact Information"
          }
          isOpen={openSections.includes("contact")}
          onToggle={() => toggleSection("contact")}
        >
          <div className="space-y-3">
            <ReviewRow
              label={lang === "es" ? "Nombre" : "Name"}
              value={contact.fullName}
            />

            <ReviewRow
              label="Email"
              value={contact.email}
            />

            <ReviewRow
              label={lang === "es" ? "Teléfono" : "Phone"}
              value={contact.phone}
            />

            <ReviewRow
              label="ZIP"
              value={contact.zipCode}
            />
          </div>
        </ReviewSection>

        <ReviewSection
          id="services"
          title={
            lang === "es"
              ? "Servicios seleccionados"
              : "Selected Services"
          }
          isOpen={openSections.includes("services")}
          onToggle={() => toggleSection("services")}
        >
          <div className="space-y-3">
            {selectedServices.map((serviceId) => (
              <div
                key={serviceId}
                className="border border-black/5 bg-white px-4 py-4"
              >
                <p className="text-sm font-bold uppercase tracking-[0.04em] text-[var(--black)] sm:text-[15px]">
                  {getEstimateServiceName(
                    serviceId,
                    lang,
                  )}
                </p>

                {getDetailEntries(serviceId).length > 0 && (
                  <div className="mt-3 space-y-2 border-t border-black/5 pt-3">
                    {getDetailEntries(serviceId).map(
                      ([field, value]) => (
                        <div
                          key={field}
                          className="flex items-start justify-between gap-4"
                        >
                         <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-black/45 sm:text-xs">
                            {formatFieldName(field)}
                          </span>

                          <span className="max-w-[60%] text-right text-sm font-medium leading-6 text-[var(--black)] sm:text-[15px]">
                            {formatDetailValue(value)}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ReviewSection>

        <ReviewSection
          id="property"
          title={
            lang === "es"
              ? "Información de la propiedad"
              : "Property Information"
          }
          isOpen={openSections.includes("property")}
          onToggle={() => toggleSection("property")}
        >
          <div className="space-y-3">
            <ReviewRow
              label={lang === "es" ? "Dirección" : "Address"}
              value={property.address || "—"}
            />

            <ReviewRow
              label="HOA"
              value={
                property.hoa
                  ? formatChoice(property.hoa, lang)
                  : "—"
              }
            />

            <ReviewRow
              label={
                lang === "es"
                  ? "Aprobación"
                  : "Approval"
              }
              value={
                property.approvalRequired
                  ? formatChoice(
                      property.approvalRequired,
                      lang,
                    )
                  : "—"
              }
            />

            <ReviewRow
              label={
                lang === "es"
                  ? "Tiempo"
                  : "Timeline"
              }
              value={
                property.timeline
                  ? formatChoice(
                      property.timeline,
                      lang,
                    )
                  : "—"
              }
            />

            <ReviewRow
              label={
                lang === "es"
                  ? "Presupuesto"
                  : "Budget"
              }
              value={
                property.budget
                  ? formatChoice(
                      property.budget,
                      lang,
                    )
                  : "—"
              }
            />

            <ReviewRow
              label={
                lang === "es"
                  ? "Fotos"
                  : "Photos"
              }
              value={
                lang === "es"
                  ? `${property.photos.length} foto(s)`
                  : `${property.photos.length} photo(s)`
              }
            />
          </div>
        </ReviewSection>

        {property.additionalDetails && (
          <ReviewSection
            id="additional"
            title={
              lang === "es"
                ? "Detalles adicionales"
                : "Additional Details"
            }
            isOpen={openSections.includes("additional")}
            onToggle={() =>
              toggleSection("additional")
            }
          >
            <p className="whitespace-pre-wrap text-[15px] leading-7 text-[var(--text)] sm:text-base">
              {property.additionalDetails}
            </p>
          </ReviewSection>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 border border-red-200 bg-red-50 px-4 py-3"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mt-0.5 shrink-0 text-red-600"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
            />

            <path d="M12 8v5" />

            <path d="M12 16h.01" />
          </svg>

          <p className="text-sm leading-5 text-red-700">
            {error}
          </p>
        </div>
      )}
    </div>

    <div className="mt-4 grid shrink-0 gap-3 border-t border-black/5 bg-white p-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={onBack}
        disabled={isSubmitting}
        className="flex h-14 cursor-pointer items-center justify-center border border-black/10 bg-white px-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--black)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {lang === "es"
          ? "← Atrás"
          : "← Back"}
      </button>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="group flex h-14 cursor-pointer items-center justify-center gap-3 bg-[var(--accent)] px-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[var(--accent)]/15 transition duration-300 hover:bg-[#b47745] hover:shadow-xl hover:shadow-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

            {lang === "es"
              ? "Enviando..."
              : "Submitting..."}
          </>
        ) : (
          <>
            {lang === "es"
              ? "Enviar solicitud"
              : "Submit Request"}

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
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </div>

    <p className="mt-4 text-center text-[10px] leading-5 text-black/40">
      {lang === "es"
        ? "Al enviar esta solicitud, aceptas que podamos contactarte sobre tu proyecto."
        : "By submitting this request, you agree that we may contact you about your project."}
    </p>
  </div>
);
}

function ReviewSection({
  id,
  title,
  children,
  isOpen,
  onToggle,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <section
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-[var(--accent)]/30 bg-[#fffdfb] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          : "border-black/10 bg-[#fffdfb] hover:border-black/20"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`review-section-${id}`}
        className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 hover:bg-white sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-4">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-[var(--accent)] text-white shadow-md shadow-[var(--accent)]/20"
                : "bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)]/15"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 ${
                isOpen
                  ? "scale-125"
                  : ""
              }`}
            />
          </span>

          <span className="font-sora text-sm font-semibold tracking-[-0.01em] text-[var(--black)] sm:text-[15px]">
            {title}
          </span>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
              : "border-black/10 bg-white text-black/45 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={`review-section-${id}`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-black/5 px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-black/5 pb-4 last:border-0 last:pb-0">
      <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.1em] text-black/45 sm:text-xs">
        {label}
      </span>

      <span className="max-w-[65%] text-right text-sm font-medium leading-6 text-[var(--black)] sm:text-[15px]">
        {value || "—"}
      </span>
    </div>
  );
} 

function encodePath(path: string) {
  return path
    .split("/")
    .map(encodeURIComponent)
    .join("/");
}

function formatFieldName(
  field: string,
): string {
  const labels: Record<
    string,
    string
  > = {
    width: "Width",
    length: "Length",
    height: "Height",
    permit: "Permit",
    existingConcrete:
      "Existing concrete",
    style: "Style",
    configuration:
      "Configuration",
    roofType: "Roof type",
    addons: "Add-ons",
    outlet: "Outlet",
    items: "Items",
    counters: "Counters",
    gas: "Gas",
    water: "Water",
    electric: "Electric",
    location: "Location",
    thickness: "Thickness",
    area: "Area",
    removal: "Removal",
    paverStyle:
      "Paver style",
    color: "Color",
    specialRequests:
      "Special requests",
    openings: "Openings",
    material: "Material",
    linearFeet:
      "Linear feet",
    gates: "Gates",
    squareFootage:
      "Square footage",
  };

  return (
    labels[field] ??
    field
      .replace(
        /([A-Z])/g,
        " $1",
      )
      .replace(
        /^./,
        (char) =>
          char.toUpperCase(),
      )
  );
}

function formatChoice(
  value: string,
  lang: "en" | "es",
): string {
  const choices: Record<
    string,
    {
      en: string;
      es: string;
    }
  > = {
    yes: {
      en: "Yes",
      es: "Sí",
    },
    no: {
      en: "No",
      es: "No",
    },
    "not-sure": {
      en: "Not sure",
      es: "No estoy seguro",
    },
    available: {
      en: "Available",
      es: "Disponible",
    },
    run: {
      en: "Needs to be run",
      es: "Necesita instalación",
    },
    attached: {
      en: "Attached",
      es: "Adosada",
    },
    freestanding: {
      en: "Freestanding",
      es: "Independiente",
    },
    modern: {
      en: "Modern",
      es: "Moderno",
    },
    classic: {
      en: "Classic",
      es: "Clásico",
    },
    solid: {
      en: "Solid",
      es: "Sólido",
    },
    louvered: {
      en: "Louvered",
      es: "Lamas",
    },
    screen: {
      en: "Screen",
      es: "Cerramiento",
    },
    covered: {
      en: "Covered",
      es: "Cubierta",
    },
    open: {
      en: "Open",
      es: "Abierta",
    },
    patio: {
      en: "Patio",
      es: "Patio",
    },
    pool: {
      en: "Pool",
      es: "Piscina",
    },
    walkway: {
      en: "Walkway",
      es: "Camino",
    },
    driveway: {
      en: "Driveway",
      es: "Entrada",
    },
    other: {
      en: "Other",
      es: "Otro",
    },
    asap: {
      en: "As soon as possible",
      es: "Lo antes posible",
    },
    "1-3-months": {
      en: "1–3 months",
      es: "1–3 meses",
    },
    "3-6-months": {
      en: "3–6 months",
      es: "3–6 meses",
    },
    "6-plus-months": {
      en: "6+ months",
      es: "6+ meses",
    },
    flexible: {
      en: "Flexible",
      es: "Flexible",
    },
    "under-10k": {
      en: "Under $10k",
      es: "Menos de $10k",
    },
    "10k-25k": {
      en: "$10k–$25k",
      es: "$10k–$25k",
    },
    "25k-50k": {
      en: "$25k–$50k",
      es: "$25k–$50k",
    },
    "50k-plus": {
      en: "$50k+",
      es: "$50k+",
    },
  };

  return (
    choices[value]?.[lang] ??
    value
  );
}