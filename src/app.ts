import express from "express";
import { supabase } from "./config/supabase";
import { estimateRequestRoutes } from "./modules/estimate-requests/estimate-request.routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Miami Custom Patios API is running",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
  });
});

app.get("/health/db", async (_req, res) => {
  try {
    const { error } = await supabase
      .from("services")
      .select("id")
      .limit(1);

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Database connection failed",
        error: error.message,
      });
    }

    return res.json({
      success: true,
      message: "Supabase database is connected",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.use("/api/estimate-requests", estimateRequestRoutes);

export default app;