"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";

import EstimateProgress from "./EstimateProgress";
import EstimateStep1 from "./EstimateStep1";
import EstimateStep2 from "./EstimateStep2";
import EstimateStep3 from "./EstimateStep3";
import EstimateStep4 from "./EstimateStep4";

import type {
  ContactData,
  PropertyData,
  ServiceDetails,
} from "./estimate-types";

const initialContact: ContactData = {
  fullName: "",
  email: "",
  phone: "",
  zipCode: "",
};

const initialProperty: PropertyData = {
  photos: [],
  address: "",
  hoa: "",
  approvalRequired: "",
  timeline: "",
  budget: "",
  additionalDetails: "",
};

export default function EstimateForm() {
  const { lang, t } = useLang();

  const [step, setStep] = useState(1);
  const [contact, setContact] =
    useState<ContactData>(initialContact);
  const [selectedServices, setSelectedServices] =
    useState<string[]>([]);
  const [serviceDetails, setServiceDetails] =
    useState<ServiceDetails>({});
  const [property, setProperty] =
    useState<PropertyData>(initialProperty);

  function handleStep1Next() {
    setStep(2);
  }

  function handleStep2Back() {
    setStep(1);
  }

  function handleStep2Next() {
    setStep(3);
  }

  function handleStep3Back() {
    setStep(2);
  }

  function handleStep3Next() {
    setStep(4);
  }

  function handleStep4Back() {
    setStep(3);
  }

  return (
    <div className="w-full">
      <div
        className="
          relative
          overflow-hidden
          border
          border-white/70
          bg-white
          p-4
          text-[var(--black)]
          shadow-[0_30px_80px_rgba(0,0,0,0.20)]
          ring-1
          ring-black/[0.03]
          sm:p-6
        "
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--accent)] via-[#d59a62] to-[var(--accent)]" />

        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              {t.estimateForm.eyebrow}
            </p>

            <h2 className="mt-1.5 font-sora text-2xl font-semibold tracking-[-0.04em] text-[var(--black)] sm:text-3xl">
              {t.estimateForm.title}
            </h2>
          </div>

          <div className="hidden text-right sm:block">
            <span className="text-xs text-[var(--text)]">
              {t.estimateForm.takes}
            </span>
          </div>
        </div>

        <EstimateProgress step={step} lang={lang} />

        <div className="mt-5 rounded-xl border border-black/[0.06] bg-[#f7f4ef] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-5">
          {step === 1 && (
            <EstimateStep1
              contact={contact}
              setContact={setContact}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
              onNext={handleStep1Next}
            />
          )}

          {step === 2 && (
           <EstimateStep2
  selectedServices={selectedServices}
  serviceDetails={serviceDetails}
  setServiceDetails={setServiceDetails}
  lang={lang}
  onBack={handleStep2Back}
  onNext={handleStep2Next}
/>
          )}

          {step === 3 && (
            <EstimateStep3
              property={property}
              setProperty={setProperty}
              onBack={handleStep3Back}
              onNext={handleStep3Next}
            />
          )}

          {step === 4 && (
            <EstimateStep4
              contact={contact}
              selectedServices={selectedServices}
              serviceDetails={serviceDetails}
              property={property}
              onBack={handleStep4Back}
            />
          )}
        </div>
      </div>
    </div>
  );
}