import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const allowedServiceIds = new Set([
  "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4",
  "c131ed6b-06b8-4b55-afbc-d1dc28ea737d",
  "ed3ec3f5-2d13-4265-b3f3-d0a326961494",
  "02a37216-8de0-4be4-a370-3c083d2a0c18",
  "fb8385ff-cd01-4099-93e6-a76c0778a586",
  "5edb51fe-3486-4782-a706-af2cc1fc3aa5",
  "c5fe5f95-1da0-4fb1-b4c7-59a06054b084",
]);

const serviceNames: Record<string, string> = {
  "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4":
    "Pergolas & Screen Enclosures",
  "c131ed6b-06b8-4b55-afbc-d1dc28ea737d":
    "Modern Fencing (Wood, Aluminum, PVC)",
  "ed3ec3f5-2d13-4265-b3f3-d0a326961494":
    "Epoxy Flooring",
  "02a37216-8de0-4be4-a370-3c083d2a0c18":
    "Concrete & Pavers",
  "fb8385ff-cd01-4099-93e6-a76c0778a586":
    "Impact Windows & Doors",
  "5edb51fe-3486-4782-a706-af2cc1fc3aa5":
    "Accordion Shutters",
  "c5fe5f95-1da0-4fb1-b4c7-59a06054b084":
    "Modern Mailboxes",
};

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
          message:
            "Name, email, phone number, and ZIP code are required.",
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

    const smtpPassword = process.env.SMTP_PASSWORD;

    if (smtpPassword) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.ionos.com",
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          requireTLS: true,
          auth: {
            user:
              process.env.SMTP_USER ||
              "info@miamicustompatios.com",
            pass: smtpPassword,
          },
        });

        const selectedServices = serviceIds
          .map((serviceId) => serviceNames[serviceId])
          .filter(Boolean);

        await transporter.sendMail({
          from:
            process.env.SMTP_FROM ||
            "info@miamicustompatios.com",
          to:
            process.env.SMTP_TO ||
            "info@miamicustompatios.com",
          replyTo: email,
          subject: `New Estimate Request - ${fullName}`,
          text: `
New estimate request received.

Customer Information
--------------------
Name: ${fullName}
Email: ${email}
Phone: ${phone}
ZIP Code: ${zipCode}

Services Requested
------------------
${selectedServices.map((service) => `- ${service}`).join("\n")}

Project Details
---------------
${projectDetails || "No project details provided."}

Estimate Request ID
-------------------
${estimateRequest.id}
          `.trim(),
          html: `
            <div style="font-family: Arial, sans-serif; color: #222;">
              <h2>New Estimate Request</h2>

              <h3>Customer Information</h3>
              <p><strong>Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>ZIP Code:</strong> ${zipCode}</p>

              <h3>Services Requested</h3>
              <ul>
                ${selectedServices
                  .map((service) => `<li>${service}</li>`)
                  .join("")}
              </ul>

              <h3>Project Details</h3>
              <p>${projectDetails || "No project details provided."}</p>

              <h3>Estimate Request ID</h3>
              <p>${estimateRequest.id}</p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error(
          "Estimate notification email error:",
          emailError,
        );
      }
    } else {
      console.warn(
        "SMTP_PASSWORD is not configured. Estimate notification email skipped.",
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