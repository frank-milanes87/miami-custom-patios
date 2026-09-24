import type { Request, Response, NextFunction } from "express";
import { createEstimateRequestSchema } from "./estimate-request.dto";
import { EstimateRequestService } from "./estimate-request.service";

export class EstimateRequestController {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = createEstimateRequestSchema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: "Invalid request",
          errors: result.error.flatten(),
        });
      }

      const estimateRequest = await EstimateRequestService.create(
        result.data,
      );

      return res.status(201).json({
        success: true,
        data: estimateRequest,
      });
    } catch (error) {
      next(error);
    }
  }
}