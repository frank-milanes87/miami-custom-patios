import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const allowedServiceIds = new Set([
  "02a37216-8de0-4be4-a370-3c083d2a0c18",
  "4b06f424-4b9f-41d0-8bec-fc5e5064b51c",
  "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4",
  "6b4ab573-9f56-48d1-8c01-bac429f45ff4",
  "c131ed6b-06b8-4b55-afbc-d1dc28ea737d",
  "c5fe5f95-1da0-4fb1-b4c7-59a06054b084",
  "ed3ec3f5-2d13-4265-b3f3-d0a326961494",
  "fb8385ff-cd01-4099-93e6-a76c0778a586",
]);

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error("Missing Supabase environment variables");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration is missing.",
        },
        { status: 500 },
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
    );

    const body = await request.json();

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const zipCode = String(body.zipCode ?? "").trim();
    const projectDetails = String(body.projectDetails ?? "").trim();

    const serviceIds: string[] = Array.isArray(body.serviceIds)
      ? body.serviceIds.map((value: unknown) => String(value))
      : [];

    if (!fullName || !email || !phone || !zipCode) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, phone number, and ZIP code are required.",
        },
        { status: 400 },
      );
    }

    if (serviceIds.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please select at least one service.",
        },
        { status: 400 },
      );
    }

    const invalidServiceId = serviceIds.some(
      (id) => !allowedServiceIds.has(id),
    );

    if (invalidServiceId) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more selected services are invalid.",
        },
        { status: 400 },
      );
    }

    const { data: estimateRequest, error: estimateError } =
      await supabase
        .from("estimate_requests")
        .insert({
          full_name: fullName,
          email,
          phone,
          zip_code: zipCode,
          project_details: projectDetails,
        })
        .select("id")
        .single();

    if (estimateError || !estimateRequest) {
      console.error("Estimate request error:", estimateError);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to create estimate request.",
        },
        { status: 500 },
      );
    }

    const serviceRows = serviceIds.map((serviceId) => ({
      estimate_request_id: estimateRequest.id,
      service_id: serviceId,
    }));

    const { error: serviceError } = await supabase
      .from("estimate_request_services")
      .insert(serviceRows);

    if (serviceError) {
      console.error("Estimate services error:", serviceError);

      await supabase
        .from("estimate_requests")
        .delete()
        .eq("id", estimateRequest.id);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to save selected services.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Estimate request submitted successfully.",
      id: estimateRequest.id,
    });
  } catch (error) {
    console.error("Estimate API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}