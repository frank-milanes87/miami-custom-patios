"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";

import {
  estimateServices,
  getEstimateServiceName,
} from "./estimate-services";

import type { ContactData } from "./estimate-types";

type EstimateStep1Props = {
  contact: ContactData;
  setContact: React.Dispatch<
    React.SetStateAction<ContactData>
  >;
  selectedServices: string[];
  setSelectedServices: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  onNext: () => void;
};

export default function EstimateStep1({
  contact,
  setContact,
  selectedServices,
  setSelectedServices,
  onNext,
}: EstimateStep1Props) {
  const { lang, t } = useLang();

  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent,
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  function updateContact(
    field: keyof ContactData,
    value: string,
  ) {
    setContact((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  }

  function toggleService(
    serviceId: string,
  ) {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter(
            (id) => id !== serviceId,
          )
        : [...current, serviceId],
    );

    setError("");
  }

  const selectedNames = selectedServices
    .map((id) =>
      getEstimateServiceName(id, lang),
    )
    .filter(Boolean);

  const serviceText =
    selectedNames.length === 0
      ? t.estimateForm.servicePlaceholder
      : selectedNames.length === 1
        ? selectedNames[0]
        : `${selectedNames.length} ${
            lang === "es"
              ? "servicios seleccionados"
              : "services selected"
          }`;

  function validateAndContinue() {
    setError("");

    if (
      !contact.fullName.trim() ||
      !contact.email.trim() ||
      !contact.phone.trim() ||
      !contact.zipCode.trim()
    ) {
      setError(
        lang === "es"
          ? "Completa todos los campos requeridos."
          : "Please complete all required fields.",
      );

      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        contact.email.trim(),
      )
    ) {
      setError(
        lang === "es"
          ? "Introduce un correo electrónico válido."
          : "Please enter a valid email address.",
      );

      return;
    }

    if (
      !/^\d{5}$/.test(
        contact.zipCode.trim(),
      )
    ) {
      setError(
        lang === "es"
          ? "Introduce un código postal válido de 5 dígitos."
          : "Please enter a valid 5-digit ZIP code.",
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

    onNext();
  }

  return (
    <div className="animate-[stepIn_0.4s_ease-out]">
      <div
        className="
          relative
          max-h-[calc(100vh-350px)]
          min-h-0
          overflow-y-auto
          overscroll-contain
          pr-3
          sm:max-h-[560px]
          sm:pr-4
          [&::-webkit-scrollbar]:w-[8px]
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-black/[0.045]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-[var(--accent)]
          [&::-webkit-scrollbar-thumb]:hover:bg-[#b47745]
        "
      >
        <div className="mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            {lang === "es"
              ? "Paso 1 de 4"
              : "Step 1 of 4"}
          </p>

          <h3 className="mt-2 font-sora text-xl font-semibold tracking-[-0.03em] text-[var(--black)]">
            {lang === "es"
              ? "Información de contacto y servicios"
              : "Contact & Services"}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--text)]">
            {lang === "es"
              ? "Cuéntanos cómo podemos contactarte y qué servicio necesitas."
              : "Tell us how we can reach you and what service you need."}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.name}
            </span>

            <input
              required
              type="text"
              autoComplete="name"
              value={contact.fullName}
              onChange={(event) =>
                updateContact(
                  "fullName",
                  event.target.value,
                )
              }
              placeholder={
                t.estimateForm.namePlaceholder
              }
              className="
                h-14
                w-full
                rounded-lg
                border
                border-black/[0.10]
                bg-[#fcfaf7]
                px-4
                text-sm
                text-[var(--black)]
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
                outline-none
                transition
                duration-200
                placeholder:text-black/35
                hover:border-black/20
                focus:border-[var(--accent)]
                focus:bg-white
                focus:ring-2
                focus:ring-[var(--accent)]/10
              "
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              Email
            </span>

            <input
              required
              type="email"
              autoComplete="email"
              value={contact.email}
              onChange={(event) =>
                updateContact(
                  "email",
                  event.target.value,
                )
              }
              placeholder="you@example.com"
              className="
                h-14
                w-full
                rounded-lg
                border
                border-black/[0.10]
                bg-[#fcfaf7]
                px-4
                text-sm
                text-[var(--black)]
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
                outline-none
                transition
                duration-200
                placeholder:text-black/35
                hover:border-black/20
                focus:border-[var(--accent)]
                focus:bg-white
                focus:ring-2
                focus:ring-[var(--accent)]/10
              "
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.phone}
            </span>

            <input
              required
              type="tel"
              autoComplete="tel"
              value={contact.phone}
              onChange={(event) =>
                updateContact(
                  "phone",
                  event.target.value,
                )
              }
              placeholder={
                t.estimateForm.phonePlaceholder
              }
              className="
                h-14
                w-full
                rounded-lg
                border
                border-black/[0.10]
                bg-[#fcfaf7]
                px-4
                text-sm
                text-[var(--black)]
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
                outline-none
                transition
                duration-200
                placeholder:text-black/35
                hover:border-black/20
                focus:border-[var(--accent)]
                focus:bg-white
                focus:ring-2
                focus:ring-[var(--accent)]/10
              "
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text)]">
              {t.estimateForm.zip}
            </span>

            <input
              required
              type="text"
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              value={contact.zipCode}
              onChange={(event) =>
                updateContact(
                  "zipCode",
                  event.target.value.replace(
                    /\D/g,
                    "",
                  ),
                )
              }
              placeholder={
                t.estimateForm.zipPlaceholder
              }
              className="
                h-14
                w-full
                rounded-lg
                border
                border-black/[0.10]
                bg-[#fcfaf7]
                px-4
                text-sm
                text-[var(--black)]
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
                outline-none
                transition
                duration-200
                placeholder:text-black/35
                hover:border-black/20
                focus:border-[var(--accent)]
                focus:bg-white
                focus:ring-2
                focus:ring-[var(--accent)]/10
              "
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
              onClick={() =>
                setIsOpen((current) => !current)
              }
              className={`
                flex
                h-14
                w-full
                cursor-pointer
                items-center
                justify-between
                rounded-lg
                border
                bg-[#fcfaf7]
                px-4
                text-left
                text-sm
                shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]
                transition
                duration-200
                ${
                  isOpen ||
                  selectedServices.length > 0
                    ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/10"
                    : "border-black/[0.10] hover:border-black/20"
                }
              `}
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
                className={`
                  ml-3
                  shrink-0
                  text-[var(--accent)]
                  transition-transform
                  duration-300
                  ${
                    isOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-full
                  z-[100]
                  mt-2
                  max-h-[330px]
                  overflow-y-auto
                  rounded-xl
                  border
                  border-black/[0.08]
                  bg-white
                  shadow-[0_20px_50px_rgba(0,0,0,0.16)]
                  [&::-webkit-scrollbar]:w-[7px]
                  [&::-webkit-scrollbar-track]:bg-black/[0.04]
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-[var(--accent)]
                "
              >
                <div className="sticky top-0 z-10 border-b border-black/5 bg-[#fcfaf7] px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--text)]">
                    {lang === "es"
                      ? "Selecciona uno o más servicios"
                      : "Select one or more services"}
                  </p>

                  <p className="mt-1 text-[11px] text-black/45">
                    {lang === "es"
                      ? "Puedes seleccionar varios."
                      : "You can select multiple services."}
                  </p>
                </div>

                {estimateServices.map(
                  (service) => {
                    const selected =
                      selectedServices.includes(
                        service.id,
                      );

                    const label =
                      service[lang];

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() =>
                          toggleService(
                            service.id,
                          )
                        }
                        className={`
                          flex
                          min-h-[50px]
                          w-full
                          cursor-pointer
                          items-center
                          gap-4
                          px-4
                          py-3
                          text-left
                          transition
                          duration-150
                          ${
                            selected
                              ? "bg-[var(--accent)]/[0.08]"
                              : "bg-white hover:bg-[#faf7f4]"
                          }
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            rounded-[4px]
                            border
                            transition-all
                            duration-200
                            ${
                              selected
                                ? "border-[var(--accent)] bg-[var(--accent)]"
                                : "border-black/25 bg-white"
                            }
                          `}
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
                              aria-hidden="true"
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
                  },
                )}
              </div>
            )}
          </div>
        </div>

        {error && (
          <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
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

        <button
          type="button"
          onClick={validateAndContinue}
          className="
            group
            mt-6
            flex
            h-14
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-3
            rounded-lg
            bg-[var(--accent)]
            px-7
            text-xs
            font-bold
            uppercase
            tracking-[0.16em]
            text-white
            shadow-[0_8px_20px_rgba(0,0,0,0.12)]
            transition
            duration-300
            hover:bg-[#b47745]
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.16)]
          "
        >
          {lang === "es"
            ? "Continuar"
            : "Continue"}

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

      <div className="mt-5 flex items-start gap-3 border-t border-black/[0.08] pt-5 pb-1">
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="text-[var(--accent)]"
              aria-hidden="true"
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
      </div>
    </div>
  );
}