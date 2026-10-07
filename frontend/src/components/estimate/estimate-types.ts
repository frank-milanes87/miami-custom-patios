export type ContactData = {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
};

export type ServiceDetailValue = string | string[];

export type ServiceDetails = Record<
  string,
  Record<string, ServiceDetailValue>
>;

export type PropertyData = {
  photos: File[];
  address: string;
  hoa: string;
  approvalRequired: string;
  timeline: string;
  budget: string;
  additionalDetails: string;
};

export type EstimateFormData = {
  contact: ContactData;
  selectedServices: string[];
  serviceDetails: ServiceDetails;
  property: PropertyData;
};