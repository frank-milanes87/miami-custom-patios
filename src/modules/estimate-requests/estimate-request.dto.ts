import { z } from "zod";

export const createEstimateRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number"),

  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "ZIP code must be 5 digits"),

  serviceIds: z
    .array(z.uuid())
    .min(1, "Please select at least one service"),

  projectDetails: z
    .string()
    .trim()
    .max(2000, "Project details cannot exceed 2000 characters")
    .optional(),
});

export type CreateEstimateRequestDto = z.infer<
  typeof createEstimateRequestSchema
>;