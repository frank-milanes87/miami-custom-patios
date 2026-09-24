import { EstimateRequestRepository } from "./estimate-request.repository";
import type { CreateEstimateRequestDto } from "./estimate-request.dto";

export class EstimateRequestService {
  static async create(data: CreateEstimateRequestDto) {
    return EstimateRequestRepository.create(data);
  }
}