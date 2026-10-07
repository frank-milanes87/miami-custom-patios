export type EstimateService = {
  id: string;
  en: string;
  es: string;
  detailed: boolean;
  freeInPersonEstimate: boolean;
};

export const estimateServices: EstimateService[] = [
  {
    id: "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4",
    en: "Pergolas & Screen Enclosures",
    es: "Pérgolas y Cerramientos con Mosquitero",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "4b06f424-4b9f-41d0-8bec-fc5e5064b51c",
    en: "Outdoor Kitchens",
    es: "Cocinas Exteriores",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "02a37216-8de0-4be4-a370-3c083d2a0c18",
    en: "Concrete & Pavers",
    es: "Concreto y Pavers",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "5edb51fe-3486-4782-a706-af2cc1fc3aa5",
    en: "Accordion Shutters",
    es: "Persianas Acordeón",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "c131ed6b-06b8-4b55-afbc-d1dc28ea737d",
    en: "Modern Fencing",
    es: "Cercas Modernas",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "6a4017a0-31a9-4259-896a-358260264679",
    en: "Artificial Turf",
    es: "Césped Artificial",
    detailed: true,
    freeInPersonEstimate: false,
  },
  {
    id: "6b4ab573-9f56-48d1-8c01-bac429f45ff4",
    en: "Interior Design",
    es: "Diseño de Interiores",
    detailed: false,
    freeInPersonEstimate: true,
  },
  {
    id: "ed3ec3f5-2d13-4265-b3f3-d0a326961494",
    en: "Epoxy Flooring",
    es: "Pisos Epóxicos",
    detailed: false,
    freeInPersonEstimate: true,
  },
  {
    id: "c5fe5f95-1da0-4fb1-b4c7-59a06054b084",
    en: "Modern Mailboxes",
    es: "Buzones Modernos",
    detailed: false,
    freeInPersonEstimate: true,
  },
  {
    id: "fb8385ff-cd01-4099-93e6-a76c0778a586",
    en: "Impact Windows & Doors",
    es: "Ventanas y Puertas de Impacto",
    detailed: false,
    freeInPersonEstimate: true,
  },
  {
    id: "50745ecb-46db-47a6-8c54-c9777acb0f70",
    en: "Motorized Louvered Roofs",
    es: "Techos de Lamas Motorizados",
    detailed: false,
    freeInPersonEstimate: true,
  },
];

export function getEstimateService(
  serviceId: string,
): EstimateService | undefined {
  return estimateServices.find(
    (service: EstimateService) =>
      service.id === serviceId,
  );
}

export function getEstimateServiceName(
  serviceId: string,
  lang: "en" | "es",
): string {
  const service =
    getEstimateService(serviceId);

  return service ? service[lang] : "";
}