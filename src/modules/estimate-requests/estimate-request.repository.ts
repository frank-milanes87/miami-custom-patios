import { supabase } from "../../config/supabase";
import type { CreateEstimateRequestDto } from "./estimate-request.dto";
import type { EstimateRequest } from "./estimate-request.types";

export class EstimateRequestRepository {
  static async create(
    data: CreateEstimateRequestDto,
  ): Promise<EstimateRequest> {
    const { data: request, error: requestError } = await supabase
      .from("estimate_requests")
      .insert({
        full_name: data.fullName,
        phone: data.phone,
        zip_code: data.zipCode,
        project_details: data.projectDetails ?? null,
      })
      .select()
      .single();

    if (requestError) {
      throw new Error(
        `Failed to create estimate request: ${requestError.message}`,
      );
    }

    const { error: servicesError } = await supabase
      .from("estimate_request_services")
      .insert(
        data.serviceIds.map((serviceId) => ({
          estimate_request_id: request.id,
          service_id: serviceId,
        })),
      );

    if (servicesError) {
      await supabase
        .from("estimate_requests")
        .delete()
        .eq("id", request.id);

      throw new Error(
        `Failed to add requested services: ${servicesError.message}`,
      );
    }

    return {
      id: request.id,
      fullName: request.full_name,
      phone: request.phone,
      zipCode: request.zip_code,
      projectDetails: request.project_details,
      status: request.status,
      createdAt: request.created_at,
      updatedAt: request.updated_at,
    };
  }
}