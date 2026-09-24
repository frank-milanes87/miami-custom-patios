export type EstimateRequestStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "estimate_sent"
  | "won"
  | "lost";

export interface EstimateRequest {
  id: string;
  fullName: string;
  phone: string;
  zipCode: string;
  projectDetails: string | null;
  status: EstimateRequestStatus;
  createdAt: string;
  updatedAt: string;
}

export interface EstimateRequestService {
  estimateRequestId: string;
  serviceId: string;
}