import { Router } from "express";
import { EstimateRequestController } from "./estimate-request.controller";

const router = Router();

router.post("/", EstimateRequestController.create);

export const estimateRequestRoutes = router;