"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ServiceDetailValue,
  ServiceDetails,
} from "./estimate-types";

import {
  EstimateService,
  getEstimateService,
} from "./estimate-services";

type EstimateStep2Props = {
  selectedServices: string[];
  serviceDetails: ServiceDetails;
  setServiceDetails: Dispatch<
    SetStateAction<ServiceDetails>
  >;
  lang: "en" | "es";
  onBack: () => void;
  onNext: () => void;
};

type FieldOption = {
  value: string;
  en: string;
  es: string;
};

type FieldConfig = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "select";
  placeholder?: string;
  options?: FieldOption[];
  required?: boolean;
};

const PERGOLA_ID =
  "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4";

const OUTDOOR_KITCHEN_ID =
  "4b06f424-4b9f-41d0-8bec-fc5e5064b51c";

const CONCRETE_ID =
  "02a37216-8de0-4be4-a370-3c083d2a0c18";

const SHUTTERS_ID =
  "5edb51fe-3486-4782-a706-af2cc1fc3aa5";

const FENCING_ID =
  "c131ed6b-06b8-4b55-afbc-d1dc28ea737d";

const TURF_ID =
  "6a4017a0-31a9-4259-896a-358260264679";

const yesNoOptions: FieldOption[] = [
  {
    value: "Yes",
    en: "Yes",
    es: "Sí",
  },
  {
    value: "No",
    en: "No",
    es: "No",
  },
];

const configurationOptions: FieldOption[] = [
  {
    value: "Attached to house",
    en: "Attached to house",
    es: "Adosado a la casa",
  },
  {
    value: "Freestanding",
    en: "Freestanding",
    es: "Independiente",
  },
];

const roofOptions: FieldOption[] = [
  {
    value: "Tile",
    en: "Tile",
    es: "Teja",
  },
  {
    value: "Shingle",
    en: "Shingle",
    es: "Tejas asfálticas",
  },
  {
    value: "Flat",
    en: "Flat",
    es: "Plano",
  },
];

const coveredOpenOptions: FieldOption[] = [
  {
    value: "Covered",
    en: "Covered area",
    es: "Área cubierta",
  },
  {
    value: "Open",
    en: "Open area",
    es: "Área abierta",
  },
];

const areaOptions: FieldOption[] = [
  {
    value: "Patio",
    en: "Patio",
    es: "Patio",
  },
  {
    value: "Walkway",
    en: "Walkway",
    es: "Pasillo",
  },
  {
    value: "Driveway",
    en: "Driveway",
    es: "Entrada de vehículos",
  },
];

const paverOptions: FieldOption[] = [
  {
    value: "Travertine",
    en: "Travertine",
    es: "Travertino",
  },
  {
    value: "Concrete pavers",
    en: "Concrete pavers",
    es: "Pavers de concreto",
  },
  {
    value: "Porcelain",
    en: "Porcelain",
    es: "Porcelana",
  },
  {
    value: "Other",
    en: "Other",
    es: "Otro",
  },
];

const fencingOptions: FieldOption[] = [
  {
    value: "Wood",
    en: "Wood",
    es: "Madera",
  },
  {
    value: "PVC",
    en: "PVC",
    es: "PVC",
  },
  {
    value: "Aluminum",
    en: "Aluminum",
    es: "Aluminio",
  },
];

const shutterColorOptions: FieldOption[] = [
  {
    value: "Bronze",
    en: "Bronze",
    es: "Bronce",
  },
  {
    value: "White",
    en: "White",
    es: "Blanco",
  },
  {
    value: "Beige",
    en: "Beige",
    es: "Beige",
  },
  {
    value: "Ivory",
    en: "Ivory",
    es: "Marfil",
  },
];

const addOnOptions: FieldOption[] = [
  {
    value: "Lights",
    en: "Lights",
    es: "Luces",
  },
  {
    value: "Fans",
    en: "Fans",
    es: "Ventiladores",
  },
  {
    value: "Decorative Walls",
    en: "Decorative Walls",
    es: "Paredes decorativas",
  },
  {
    value: "TV Wall",
    en: "TV Wall",
    es: "Pared para TV",
  },
];

const pergolaStyles = [
  {
    value: "Classic",
    en: "Classic",
    es: "Clásico",
    images: [
      "/assets/images/project9.webp",
      "/assets/images/project10.webp",
    ],
  },
  {
    value: "Santa Fe",
    en: "Santa Fe",
    es: "Santa Fe",
    images: [
      "/assets/images/project7.webp",
      "/assets/images/project8.webp",
    ],
  },
  {
    value: "Modern",
    en: "Modern",
    es: "Moderno",
    images: [
      "/assets/images/pergola-project-pool.webp",
      "/assets/images/project5.webp",
    ],
  },
];

const fieldLabels: Record<
  string,
  { en: string; es: string }
> = {
  width: {
    en: "Width",
    es: "Ancho",
  },
  length: {
    en: "Length",
    es: "Largo",
  },
  height: {
    en: "Height",
    es: "Altura",
  },
  permit: {
    en: "City permit",
    es: "Permiso de la ciudad",
  },
  existingConcrete: {
    en: "Existing concrete in the area",
    es: "Concreto existente en el área",
  },
  configuration: {
    en: "Attached to house or freestanding",
    es: "Adosado a la casa o independiente",
  },
  roofType: {
    en: "Roof type",
    es: "Tipo de techo",
  },
  outlet: {
    en: "Existing outlet nearby",
    es: "Tomacorriente cercano",
  },
  items: {
    en: "Items and systems wanted",
    es: "Artículos y sistemas deseados",
  },
  counters: {
    en: "Counters and measurements",
    es: "Cubiertas y medidas",
  },
  gas: {
    en: "Gas availability",
    es: "Disponibilidad de gas",
  },
  water: {
    en: "Water availability",
    es: "Disponibilidad de agua",
  },
  electric: {
    en: "Electric availability",
    es: "Disponibilidad eléctrica",
  },
  location: {
    en: "Kitchen location",
    es: "Ubicación de la cocina",
  },
  thickness: {
    en: "Thickness",
    es: "Espesor",
  },
  area: {
    en: "Area type",
    es: "Tipo de área",
  },
  removal: {
    en: "Existing surface to remove",
    es: "Superficie existente a retirar",
  },
  paverStyle: {
    en: "Paver style",
    es: "Estilo de paver",
  },
  color: {
    en: "Color",
    es: "Color",
  },
  specialRequests: {
    en: "Special requests",
    es: "Solicitudes especiales",
  },
  openings: {
    en: "Number of openings",
    es: "Número de aberturas",
  },
  material: {
    en: "Fence material",
    es: "Material de la cerca",
  },
  linearFeet: {
    en: "Linear feet",
    es: "Pies lineales",
  },
  gates: {
    en: "Number of gates",
    es: "Número de portones",
  },
  squareFootage: {
    en: "Square footage",
    es: "Pies cuadrados",
  },
};

const serviceFields: Record<
  string,
  FieldConfig[]
> = {
  [PERGOLA_ID]: [
    {
      key: "width",
      label: "Width",
      placeholder: "Enter width",
      required: true,
    },
    {
      key: "length",
      label: "Length",
      placeholder: "Enter length",
      required: true,
    },
    {
      key: "height",
      label: "Height",
      placeholder: "Enter height",
      required: true,
    },
    {
      key: "permit",
      label: "City permit",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "existingConcrete",
      label: "Existing concrete in the area",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "configuration",
      label: "Attached to house or freestanding",
      type: "select",
      options: configurationOptions,
      required: true,
    },
    {
      key: "roofType",
      label: "Roof type",
      type: "select",
      options: roofOptions,
      required: true,
    },
    {
      key: "outlet",
      label: "Existing outlet nearby",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
  ],

  [OUTDOOR_KITCHEN_ID]: [
    {
      key: "items",
      label: "Items and systems wanted",
      type: "textarea",
      placeholder:
        "Example: grill, refrigerator, sink, cabinets...",
      required: true,
    },
    {
      key: "counters",
      label: "Counters and measurements",
      type: "textarea",
      placeholder:
        "Describe the counter layout and measurements",
      required: true,
    },
    {
      key: "gas",
      label: "Gas availability",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "water",
      label: "Water availability",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "electric",
      label: "Electric availability",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "location",
      label: "Kitchen location",
      type: "select",
      options: coveredOpenOptions,
      required: true,
    },
  ],

  [CONCRETE_ID]: [
    {
      key: "width",
      label: "Width",
      placeholder: "Enter width",
      required: true,
    },
    {
      key: "length",
      label: "Length",
      placeholder: "Enter length",
      required: true,
    },
    {
      key: "thickness",
      label: "Thickness",
      placeholder: "Enter thickness",
      required: true,
    },
    {
      key: "permit",
      label: "City permit",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "area",
      label: "Area type",
      type: "select",
      options: areaOptions,
      required: true,
    },
    {
      key: "removal",
      label: "Existing surface to remove",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "paverStyle",
      label: "Paver style",
      type: "select",
      options: paverOptions,
      required: true,
    },
    {
      key: "color",
      label: "Paver color",
      placeholder: "Enter preferred color",
      required: true,
    },
    {
      key: "specialRequests",
      label: "Special requests",
      type: "textarea",
      placeholder:
        "Tell us about any special requests",
      required: true,
    },
  ],

  [SHUTTERS_ID]: [
    {
      key: "width",
      label: "Opening width",
      placeholder: "Enter width",
      required: true,
    },
    {
      key: "length",
      label: "Opening length",
      placeholder: "Enter length",
      required: true,
    },
    {
      key: "openings",
      label: "Number of openings",
      placeholder: "Enter number of openings",
      required: true,
    },
    {
      key: "color",
      label: "Color",
      type: "select",
      options: shutterColorOptions,
      required: true,
    },
  ],

  [FENCING_ID]: [
    {
      key: "material",
      label: "Fence material",
      type: "select",
      options: fencingOptions,
      required: true,
    },
    {
      key: "linearFeet",
      label: "Linear feet",
      placeholder:
        "Enter approximate linear feet",
      required: true,
    },
    {
      key: "height",
      label: "Height",
      placeholder: "Enter fence height",
      required: true,
    },
    {
      key: "gates",
      label: "Number of gates",
      placeholder: "Enter number of gates",
      required: true,
    },
    {
      key: "removal",
      label: "Existing fence to remove",
      type: "select",
      options: yesNoOptions,
      required: true,
    },
    {
      key: "specialRequests",
      label: "Special requests",
      type: "textarea",
      placeholder:
        "Tell us about any special requests",
      required: true,
    },
  ],

  [TURF_ID]: [
    {
      key: "squareFootage",
      label: "Square footage",
      placeholder:
        "Enter approximate square footage",
      required: true,
    },
  ],
};

export default function EstimateStep2({
  selectedServices,
  serviceDetails,
  setServiceDetails,
  lang,
  onBack,
  onNext,
}: EstimateStep2Props) {
  const isSpanish = lang === "es";

  const selectedDetailedServices =
    useMemo(() => {
      return selectedServices
        .map((id) =>
          getEstimateService(id),
        )
        .filter(
          (
            service,
          ): service is EstimateService =>
            Boolean(service?.detailed),
        );
    }, [selectedServices]);

  const [openServices, setOpenServices] =
    useState<string[]>([]);

  const [error, setError] =
    useState("");

  const [previewImage, setPreviewImage] =
    useState<string | null>(null);

  useEffect(() => {
    setOpenServices((current) => {
      const validIds =
        selectedDetailedServices.map(
          (service) => service.id,
        );

      const existing = current.filter(
        (id) => validIds.includes(id),
      );

      if (existing.length > 0) {
        return existing;
      }

      return validIds.length > 0
        ? [validIds[0]]
        : [];
    });
  }, [selectedDetailedServices]);

  function toggleService(
    serviceId: string,
  ) {
    setOpenServices((current) =>
      current.includes(serviceId)
        ? current.filter(
            (id) => id !== serviceId,
          )
        : [...current, serviceId],
    );
  }

  function getValue(
    serviceId: string,
    field: string,
  ) {
    const value =
      serviceDetails[serviceId]?.[
        field
      ];

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return value ?? "";
  }

  function setValue(
    serviceId: string,
    field: string,
    value: ServiceDetailValue,
  ) {
    setServiceDetails((current) => ({
      ...current,
      [serviceId]: {
        ...(current[serviceId] ?? {}),
        [field]: value,
      },
    }));

    setError("");
  }

  function getFieldLabel(
    field: FieldConfig,
  ) {
    return (
      fieldLabels[field.key]?.[
        lang
      ] ?? field.label
    );
  }

  function getOptionLabel(
    option: FieldOption,
  ) {
    return option[lang];
  }

  function toggleAddOn(
    serviceId: string,
    value: string,
  ) {
    const current =
      serviceDetails[serviceId]?.addons;

    const values = Array.isArray(current)
      ? current
      : current
        ? [current]
        : [];

    const next = values.includes(value)
      ? values.filter(
          (item) => item !== value,
        )
      : [...values, value];

    setValue(
      serviceId,
      "addons",
      next,
    );
  }

  function validateService(
    serviceId: string,
  ) {
    const fields =
      serviceFields[serviceId] ?? [];

    for (const field of fields) {
      if (!field.required) {
        continue;
      }

      if (
        field.key === "roofType" &&
        getValue(
          serviceId,
          "configuration",
        ) !== "Attached to house"
      ) {
        continue;
      }

      if (
        !getValue(
          serviceId,
          field.key,
        ).trim()
      ) {
        setOpenServices([
          serviceId,
        ]);

        setError(
          isSpanish
            ? "Por favor, completa la información requerida antes de continuar."
            : "Please complete the required information before continuing.",
        );

        return false;
      }
    }

    if (
      serviceId === PERGOLA_ID &&
      !getValue(
        serviceId,
        "style",
      ).trim()
    ) {
      setOpenServices([
        serviceId,
      ]);

      setError(
        isSpanish
          ? "Por favor, selecciona un estilo de pérgola."
          : "Please select a pergola style.",
      );

      return false;
    }

    return true;
  }

  function handleNext() {
    setError("");

    for (const service of selectedDetailedServices) {
      if (!validateService(service.id)) {
        return;
      }
    }

    onNext();
  }

  function renderSelect(
    serviceId: string,
    field: FieldConfig,
  ) {
    const value = getValue(
      serviceId,
      field.key,
    );

    return (
      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            setValue(
              serviceId,
              field.key,
              event.target.value,
            )
          }
          className="h-10 w-full cursor-pointer appearance-none rounded-xl border border-black/10 bg-white px-3 text-[12px] font-medium text-black outline-none transition hover:border-black/20 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
        >
          <option value="">
            {isSpanish
              ? "Seleccionar..."
              : "Select..."}
          </option>

          {field.options?.map(
            (option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {getOptionLabel(
                  option,
                )}
              </option>
            ),
          )}
        </select>

        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-black/45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="m6 9 6 6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  function renderField(
    serviceId: string,
    field: FieldConfig,
  ) {
    const value = getValue(
      serviceId,
      field.key,
    );

    if (field.type === "select") {
      return renderSelect(
        serviceId,
        field,
      );
    }

    if (field.type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(event) =>
            setValue(
              serviceId,
              field.key,
              event.target.value,
            )
          }
          placeholder={
            field.placeholder
          }
          rows={3}
          className="w-full resize-none rounded-xl border border-black/10 bg-white px-3 py-2.5 text-[12px] leading-5 text-black outline-none transition placeholder:text-black/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
        />
      );
    }

    return (
      <input
        type="text"
        value={value}
        onChange={(event) =>
          setValue(
            serviceId,
            field.key,
            event.target.value,
          )
        }
        placeholder={
          field.placeholder
        }
        className="h-10 w-full rounded-xl border border-black/10 bg-white px-3 text-[12px] font-medium text-black outline-none transition placeholder:text-black/35 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/10"
      />
    );
  }

  function renderPergolaStyle(
    serviceId: string,
  ) {
    const selected = getValue(
      serviceId,
      "style",
    );

    return (
      <div>
        <div className="mb-2.5">
          <label className="block text-[11px] font-semibold text-black">
            {isSpanish
              ? "Estilo de pérgola"
              : "Pergola Style"}

            <span className="ml-1 text-[var(--accent)]">
              *
            </span>
          </label>

          <p className="mt-0.5 text-[10px] leading-4 text-black/45">
            {isSpanish
              ? "Selecciona el estilo que prefieres."
              : "Select the pergola style you prefer."}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {pergolaStyles.map(
            (style) => {
              const active =
                selected ===
                style.value;

              return (
                <button
                  key={style.value}
                  type="button"
                  onClick={() =>
                    setValue(
                      serviceId,
                      "style",
                      style.value,
                    )
                  }
                  className={`group cursor-pointer overflow-hidden rounded-xl border bg-white text-left transition-all duration-200 ${
                    active
                      ? "border-[var(--accent)] shadow-[0_0_0_1px_var(--accent)]"
                      : "border-black/10 hover:border-[var(--accent)]/50"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-px bg-black/10">
                    {style.images.map(
                      (
                        image,
                        index,
                      ) => (
                        <span
                          key={`${style.value}-${index}`}
                          className="relative aspect-[4/3] overflow-hidden bg-black/5"
                          onClick={(event) => {
                            event.stopPropagation();
                            setPreviewImage(
                              image,
                            );
                          }}
                        >
                          <img
                            src={image}
                            alt={`${style.en} pergola`}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        </span>
                      ),
                    )}
                  </div>

                  <div className="flex min-h-[40px] items-center justify-between gap-2 px-2 py-2">
                    <span className="text-[11px] font-semibold text-black">
                      {style[lang]}
                    </span>

                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                        active
                          ? "border-[var(--accent)] bg-[var(--accent)]"
                          : "border-black/20"
                      }`}
                    >
                      {active && (
                        <svg
                          viewBox="0 0 24 24"
                          className="h-2.5 w-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            d="m5 12 4 4L19 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </div>
                </button>
              );
            },
          )}
        </div>
      </div>
    );
  }

  function renderAddOns(
    serviceId: string,
  ) {
    const current =
      serviceDetails[serviceId]?.addons;

    const selected =
      Array.isArray(current)
        ? current
        : current
          ? [current]
          : [];

    return (
      <div>
        <div className="mb-2.5">
          <p className="text-[11px] font-semibold text-black">
            {isSpanish
              ? "Accesorios"
              : "Add-ons"}
          </p>

          <p className="mt-0.5 text-[10px] text-black/45">
            {isSpanish
              ? "Selecciona los accesorios que deseas."
              : "Select the add-ons you would like."}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {addOnOptions.map(
            (option) => {
              const active =
                selected.includes(
                  option.value,
                );

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    toggleAddOn(
                      serviceId,
                      option.value,
                    )
                  }
                  className={`flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl border px-2.5 text-left transition ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)]/[0.06]"
                      : "border-black/10 bg-white hover:border-[var(--accent)]/40"
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      active
                        ? "border-[var(--accent)] bg-[var(--accent)]"
                        : "border-black/20"
                    }`}
                  >
                    {active && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          d="m5 12 4 4L19 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>

                  <span className="text-[11px] font-medium text-black">
                    {option[lang]}
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>
    );
  }

  function getServiceName(
    service: EstimateService,
  ) {
    const name =
      service[lang] ||
      service.en;

    return (
      name ||
      (isSpanish
        ? "Servicio"
        : "Service")
    );
  }

  function renderService(
    service: EstimateService,
    index: number,
  ) {
    const isOpen =
      openServices.includes(
        service.id,
      );

    const isPergola =
      service.id === PERGOLA_ID;

    const fields =
      serviceFields[service.id] ?? [];

    const configuration =
      getValue(
        service.id,
        "configuration",
      );

    return (
      <section
        key={service.id}
        className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
          isOpen
            ? "border-black/10 shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
            : "border-black/10 shadow-[0_2px_10px_rgba(0,0,0,0.035)]"
        }`}
      >
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() =>
            toggleService(
              service.id,
            )
          }
          className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-black/[0.015] sm:px-5"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                isOpen
                  ? "bg-[var(--accent)] text-white"
                  : "bg-black/[0.045] text-black/50"
              }`}
            >
              {index + 1}
            </span>

            <span className="min-w-0">
              <span className="block truncate text-[13px] font-semibold leading-5 text-black sm:text-[14px]">
                {getServiceName(
                  service,
                )}
              </span>

              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                {isSpanish
                  ? "Detalles del servicio"
                  : "Service details"}
              </span>
            </span>
          </span>

          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "rotate-180 bg-[var(--accent)]/[0.10]"
                : "bg-black/[0.04]"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 text-black/50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="m6 9 6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-5 border-t border-black/5 px-4 py-5 sm:px-5">
              {isPergola && (
                <>
                  {renderPergolaStyle(
                    service.id,
                  )}

                  <div className="h-px bg-black/5" />
                </>
              )}

              <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
                {fields.map(
                  (field) => {
                    if (
                      field.key ===
                        "roofType" &&
                      configuration !==
                        "Attached to house"
                    ) {
                      return null;
                    }

                    return (
                      <div
                        key={field.key}
                        className={
                          field.type ===
                          "textarea"
                            ? "sm:col-span-2"
                            : ""
                        }
                      >
                        <label className="mb-1.5 block text-[10px] font-semibold leading-4 text-black sm:text-[11px]">
                          {getFieldLabel(
                            field,
                          )}

                          {field.required && (
                            <span className="ml-1 text-[var(--accent)]">
                              *
                            </span>
                          )}
                        </label>

                        {renderField(
                          service.id,
                          field,
                        )}
                      </div>
                    );
                  },
                )}
              </div>

              {isPergola && (
                <>
                  <div className="h-px bg-black/5" />

                  {renderAddOns(
                    service.id,
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (
    selectedDetailedServices.length ===
    0
  ) {
    return null;
  }

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="mb-4 shrink-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
            {isSpanish
              ? "Paso 2 de 4"
              : "Step 2 of 4"}
          </p>

          <h2 className="mt-1.5 text-[22px] font-semibold tracking-tight text-black">
            {isSpanish
              ? "Cuéntanos sobre tu proyecto"
              : "Tell us about your project"}
          </h2>

          <p className="mt-1.5 max-w-xl text-[11px] leading-5 text-black/50">
            {isSpanish
              ? "Completa los detalles de cada servicio seleccionado para preparar mejor tu estimado."
              : "Complete the details for each selected service so we can prepare your estimate more accurately."}
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-3 shrink-0 rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-[11px] leading-5 text-red-700"
          >
            {error}
          </div>
        )}

<div className="max-h-[calc(100vh-380px)] min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-2 sm:max-h-[420px] sm:pr-3 [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/[0.035] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent)] [&::-webkit-scrollbar-thumb]:hover:bg-[#b47745]">          {selectedDetailedServices.map(
            (service, index) =>
              renderService(
                service,
                index,
              ),
          )}
        </div>

     <div className="mt-3 grid shrink-0 grid-cols-2 gap-2.5 border-t border-black/5 bg-white p-3">
  <button
    type="button"
    onClick={onBack}
    className="flex h-12 cursor-pointer items-center justify-center border border-black/10 bg-white px-7 text-xs font-bold uppercase tracking-[0.16em] text-[var(--black)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
  >
    {isSpanish ? "Atrás" : "Back"}
  </button>

  <button
    type="button"
    onClick={handleNext}
    className="group flex h-12 cursor-pointer items-center justify-center gap-3 bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-[var(--accent)]/15 transition duration-300 hover:bg-[#b47745] hover:shadow-xl hover:shadow-[var(--accent)]/20"
  >
    {isSpanish ? "Continuar" : "Continue"}

    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </button>
</div>
      </div>

      {previewImage && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() =>
            setPreviewImage(null)
          }
        >
          <button
            type="button"
            aria-label={
              isSpanish
                ? "Cerrar imagen"
                : "Close image"
            }
            onClick={() =>
              setPreviewImage(null)
            }
            className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-black shadow-lg"
          >
            ×
          </button>

          <img
            src={previewImage}
            alt={
              isSpanish
                ? "Ejemplo de pérgola"
                : "Pergola example"
            }
            className="max-h-[88vh] max-w-[94vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) =>
              event.stopPropagation()
            }
          />
        </div>
      )}
    </>
  );
}