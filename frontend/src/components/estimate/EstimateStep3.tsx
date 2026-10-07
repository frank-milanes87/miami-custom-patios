"use client";

import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import type { PropertyData } from "./estimate-types";

type EstimateStep3Props = {
  property: PropertyData;
  setProperty: Dispatch<SetStateAction<PropertyData>>;
  onBack: () => void;
  onNext: () => void;
};

export default function EstimateStep3({
  property,
  setProperty,
  onBack,
  onNext,
}: EstimateStep3Props) {
  const { lang } = useLang();
  const [error, setError] = useState("");

  function updateProperty(
    field: keyof PropertyData,
    value: string | File[],
  ) {
    setProperty((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  }

  function handlePhotos(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const files = Array.from(event.target.files ?? []);

    updateProperty("photos", files);
  }

  function validateAndContinue() {
    setError("");

    if (!property.photos.length) {
      setError(
        lang === "es"
          ? "Por favor, selecciona al menos una foto del área del proyecto."
          : "Please select at least one photo of the project area.",
      );
      return;
    }

    if (!property.address.trim()) {
      setError(
        lang === "es"
          ? "Por favor, completa la dirección de la propiedad."
          : "Please enter the property address.",
      );
      return;
    }

    if (!property.hoa) {
      setError(
        lang === "es"
          ? "Por favor, indica si la propiedad tiene HOA."
          : "Please tell us whether the property has an HOA.",
      );
      return;
    }

    if (!property.approvalRequired) {
      setError(
        lang === "es"
          ? "Por favor, indica si se requiere aprobación."
          : "Please indicate whether approval is required.",
      );
      return;
    }

    if (!property.timeline) {
      setError(
        lang === "es"
          ? "Por favor, selecciona cuándo te gustaría comenzar."
          : "Please select when you would like to start.",
      );
      return;
    }

    if (!property.budget) {
      setError(
        lang === "es"
          ? "Por favor, selecciona un rango de presupuesto."
          : "Please select a budget range.",
      );
      return;
    }

    if (!property.additionalDetails.trim()) {
      setError(
        lang === "es"
          ? "Por favor, completa los detalles adicionales del proyecto."
          : "Please provide the additional project details.",
      );
      return;
    }

    onNext();
  }

  return (
    <div className="flex min-h-0 flex-col animate-[stepIn_0.4s_ease-out]">
      <div className="max-h-[calc(100vh-380px)] min-h-0 overflow-y-auto overscroll-contain pr-3 sm:max-h-[420px] sm:pr-4 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/[0.04] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent)] [&::-webkit-scrollbar-thumb]:hover:bg-[#b47745]">        <div className="mb-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
          {lang === "es" ? "Paso 3 de 4" : "Step 3 of 4"}
        </p>

        <h3 className="mt-2 font-sora text-xl font-semibold tracking-[-0.03em] text-[var(--black)] sm:text-2xl">
          {lang === "es"
            ? "Información de la propiedad"
            : "Property Information"}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--text)]">
          {lang === "es"
            ? "Completa toda la información para ayudarnos a preparar tu estimación."
            : "Please complete all the information to help us prepare your estimate."}
        </p>
      </div>

        <div className="space-y-5">
          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <div className="mb-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
                {lang === "es"
                  ? "Fotos del área"
                  : "Photos of the area"}
              </p>

              <p className="mt-1 text-sm leading-5 text-[var(--text)]">
                {lang === "es"
                  ? "Selecciona una o más fotos del área donde se realizará el proyecto."
                  : "Select one or more photos of the area where the project will be completed."}
              </p>
            </div>

            <label className="flex min-h-[150px] cursor-pointer flex-col items-center justify-center border border-dashed border-black/15 bg-white px-5 py-8 text-center transition hover:border-[var(--accent)] hover:bg-[#fffaf6]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="16"
                    rx="2"
                  />
                  <circle
                    cx="8.5"
                    cy="9"
                    r="1.5"
                  />
                  <path d="m21 15-5-5L5 20" />
                </svg>
              </div>

              <span className="mt-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--black)]">
                {lang === "es"
                  ? "Seleccionar fotos"
                  : "Select photos"}
              </span>

              <span className="mt-1 text-xs text-black/45">
                {lang === "es"
                  ? "Puedes seleccionar varias fotos"
                  : "You can select multiple photos"}
              </span>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handlePhotos}
                className="sr-only"
              />
            </label>

            {property.photos.length > 0 && (
              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text)]">
                  {lang === "es"
                    ? `${property.photos.length} foto(s) seleccionada(s)`
                    : `${property.photos.length} photo(s) selected`}
                </p>

                <div className="mt-2 space-y-1">
                  {property.photos.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between border border-black/5 bg-white px-3 py-2.5"
                    >
                      <span className="truncate pr-3 text-sm text-[var(--black)]">
                        {file.name}
                      </span>

                      <span className="shrink-0 text-[11px] uppercase tracking-[0.08em] text-black/40">
                        {(file.size / 1024 / 1024).toFixed(1)} MB
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <TextInput
              label={
                lang === "es"
                  ? "Dirección de la propiedad"
                  : "Property address"
              }
              value={property.address}
              onChange={(value) =>
                updateProperty("address", value)
              }
              placeholder={
                lang === "es"
                  ? "Dirección del proyecto"
                  : "Project address"
              }
            />
          </section>

          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <div className="space-y-5">
              <ChoiceField
                label={
                  lang === "es"
                    ? "¿La propiedad tiene HOA?"
                    : "Does the property have an HOA?"
                }
                value={property.hoa}
                options={[
                  ["yes", lang === "es" ? "Sí" : "Yes"],
                  ["no", lang === "es" ? "No" : "No"],
                  [
                    "not-sure",
                    lang === "es"
                      ? "No estoy seguro"
                      : "Not sure",
                  ],
                ]}
                onChange={(value) =>
                  updateProperty("hoa", value)
                }
              />

              <ChoiceField
                label={
                  lang === "es"
                    ? "¿Se requiere aprobación?"
                    : "Is approval required?"
                }
                value={property.approvalRequired}
                options={[
                  ["yes", lang === "es" ? "Sí" : "Yes"],
                  ["no", lang === "es" ? "No" : "No"],
                  [
                    "not-sure",
                    lang === "es"
                      ? "No estoy seguro"
                      : "Not sure",
                  ],
                ]}
                onChange={(value) =>
                  updateProperty(
                    "approvalRequired",
                    value,
                  )
                }
              />
            </div>
          </section>

          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <ChoiceField
              label={
                lang === "es"
                  ? "¿Cuándo te gustaría comenzar?"
                  : "When would you like to start?"
              }
              value={property.timeline}
              options={[
                [
                  "asap",
                  lang === "es"
                    ? "Lo antes posible"
                    : "As soon as possible",
                ],
                [
                  "1-3-months",
                  lang === "es"
                    ? "1–3 meses"
                    : "1–3 months",
                ],
                [
                  "3-6-months",
                  lang === "es"
                    ? "3–6 meses"
                    : "3–6 months",
                ],
                [
                  "6-plus-months",
                  lang === "es"
                    ? "6+ meses"
                    : "6+ months",
                ],
                [
                  "flexible",
                  lang === "es"
                    ? "Flexible"
                    : "Flexible",
                ],
              ]}
              onChange={(value) =>
                updateProperty("timeline", value)
              }
            />
          </section>

          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <ChoiceField
              label={
                lang === "es"
                  ? "Rango de presupuesto"
                  : "Budget range"
              }
              value={property.budget}
              options={[
                ["under-10k", "Under $10k"],
                ["10k-25k", "$10k–$25k"],
                ["25k-50k", "$25k–$50k"],
                ["50k-plus", "$50k+"],
                [
                  "not-sure",
                  lang === "es"
                    ? "No estoy seguro"
                    : "Not sure",
                ],
              ]}
              onChange={(value) =>
                updateProperty("budget", value)
              }
            />
          </section>

          <section className="border border-black/10 bg-[#fffdfb] p-5 sm:p-6">
            <TextArea
              label={
                lang === "es"
                  ? "Detalles adicionales / solicitudes especiales"
                  : "Additional details / special requests"
              }
              value={property.additionalDetails}
              onChange={(value) =>
                updateProperty(
                  "additionalDetails",
                  value,
                )
              }
              placeholder={
                lang === "es"
                  ? "Cuéntanos cualquier detalle adicional que debamos conocer."
                  : "Tell us anything else we should know about the project."
              }
            />
          </section>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3.5"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              !
            </span>

            <p className="text-sm font-medium leading-5 text-red-700">
              {error}
            </p>
          </div>
        )}
      </div>

      <div className="mt-4 grid shrink-0 gap-3 border-t border-black/5 bg-white p-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onBack}
          className="flex h-12 cursor-pointer items-center justify-center border border-black/10 bg-white px-7 text-xs font-bold uppercase tracking-[0.16em] text-[var(--black)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          {lang === "es" ? "← Atrás" : "← Back"}
        </button>

        <button
          type="button"
          onClick={validateAndContinue}
          className="group flex h-12 cursor-pointer items-center justify-center gap-3 bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[var(--accent)]/15 transition duration-300 hover:bg-[#b47745] hover:shadow-xl hover:shadow-[var(--accent)]/20"
        >
          {lang === "es" ? "Continuar" : "Continue"}

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
        </button>
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text)]">
        {label}
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-black/10 bg-white px-3.5 text-[14px] text-[var(--black)] outline-none transition placeholder:text-black/30 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text)]">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        rows={4}
        className="min-h-[110px] w-full resize-none rounded-lg border border-black/10 bg-white px-3.5 py-3 text-[14px] leading-5 text-[var(--black)] outline-none transition placeholder:text-black/30 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
      />
    </label>
  );
}

function ChoiceField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly [string, string][];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text)]">
        {label}
      </span>

      <div className="flex flex-wrap gap-2">
        {options.map(([optionValue, optionLabel]) => {
          const selected = value === optionValue;

          return (
            <button
              key={optionValue}
              type="button"
              onClick={() =>
                onChange(optionValue)
              }
              className={`min-h-11 cursor-pointer border px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] transition duration-200 ${selected
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm"
                  : "border-black/10 bg-white text-[var(--black)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
            >
              {optionLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}