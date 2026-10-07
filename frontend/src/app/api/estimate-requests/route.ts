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
  "50745ecb-46db-47a6-8c54-c9777acb0f70",
  "4b06f424-4b9f-41d0-8bec-fc5e5064b51c",
  "6b4ab573-9f56-48d1-8c01-bac429f45ff4",
  "6a4017a0-31a9-4259-896a-358260264679",
]);

const serviceNames: Record<string, string> = {
  "4ee3fc5a-6e59-46b3-bc4a-f311c19658f4":
    "Pergolas & Screen Enclosures",
  "c131ed6b-06b8-4b55-afbc-d1dc28ea737d":
    "Modern Fencing",
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
  "50745ecb-46db-47a6-8c54-c9777acb0f70":
    "Motorized Louvered Roofs",
  "4b06f424-4b9f-41d0-8bec-fc5e5064b51c":
    "Outdoor Kitchens",
  "6b4ab573-9f56-48d1-8c01-bac429f45ff4":
    "Interior Design",
  "6a4017a0-31a9-4259-896a-358260264679":
    "Artificial Turf",
};

const storageBucket = "estimate-photos";

function getFileExtension(
  fileName: string,
  contentType: string,
) {
  const nameExtension =
    fileName.split(".").pop()?.toLowerCase();

  if (
    nameExtension &&
    /^[a-z0-9]{1,5}$/.test(nameExtension)
  ) {
    return nameExtension;
  }

  if (contentType === "image/jpeg") {
    return "jpg";
  }

  if (contentType === "image/png") {
    return "png";
  }

  if (contentType === "image/webp") {
    return "webp";
  }

  return "jpg";
}

function isAllowedImageType(contentType: string) {
  return [
    "image/jpeg",
    "image/png",
    "image/webp",
  ].includes(contentType);
}

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error(
        "Missing Supabase environment variables",
      );

      return NextResponse.json(
        {
          success: false,
          error: "Server configuration is missing.",
        },
        { status: 500 },
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseSecretKey,
    );

    const body = await request.json();
    const action = String(body.action ?? "");

    if (action === "prepare-uploads") {
      const files = Array.isArray(body.files)
        ? body.files
        : [];

      if (files.length === 0) {
        return NextResponse.json(
          {
            success: false,
            error: "At least one photo is required.",
          },
          { status: 400 },
        );
      }

      if (files.length > 10) {
        return NextResponse.json(
          {
            success: false,
            error: "You can upload up to 10 photos.",
          },
          { status: 400 },
        );
      }

      const uploads = [];

      for (const file of files) {
        const name = String(file?.name ?? "").trim();
        const type = String(file?.type ?? "").trim();
        const size = Number(file?.size ?? 0);

        if (!name || !type || !Number.isFinite(size)) {
          return NextResponse.json(
            {
              success: false,
              error: "One or more photos are invalid.",
            },
            { status: 400 },
          );
        }

        if (!isAllowedImageType(type)) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Only JPG, PNG, and WebP images are allowed.",
            },
            { status: 400 },
          );
        }

        if (size <= 0 || size > 10 * 1024 * 1024) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Each photo must be smaller than 10 MB.",
            },
            { status: 400 },
          );
        }

        const extension = getFileExtension(
          name,
          type,
        );

        const path =
          `estimate-requests/${crypto.randomUUID()}.${extension}`;

        const { data, error } =
          await supabase.storage
            .from(storageBucket)
            .createSignedUploadUrl(path);

        if (error || !data) {
          console.error(
            "Signed upload URL error:",
            error,
          );

          return NextResponse.json(
            {
              success: false,
              error:
                "Unable to prepare photo uploads.",
            },
            { status: 500 },
          );
        }

        uploads.push({
          path,
          token: data.token,
          name,
          type,
        });
      }

      return NextResponse.json({
        success: true,
        uploads,
      });
    }

    if (action !== "submit") {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request action.",
        },
        { status: 400 },
      );
    }

    const contact =
      body.contact &&
      typeof body.contact === "object"
        ? body.contact
        : {};

    const property =
      body.property &&
      typeof body.property === "object"
        ? body.property
        : {};

    const fullName = String(
      contact.fullName ?? "",
    ).trim();

    const email = String(
      contact.email ?? "",
    ).trim();

    const phone = String(
      contact.phone ?? "",
    ).trim();

    const zipCode = String(
      contact.zipCode ?? "",
    ).trim();

    if (!fullName || !email || !phone || !zipCode) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Name, email, phone number, and ZIP code are required.",
        },
        { status: 400 },
      );
    }

    const selectedServices: string[] =
      Array.isArray(body.selectedServices)
        ? body.selectedServices.map(
            (value: unknown) => String(value),
          )
        : [];

    if (selectedServices.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please select at least one service.",
        },
        { status: 400 },
      );
    }

    const invalidServiceId =
      selectedServices.some(
        (id) => !allowedServiceIds.has(id),
      );

    if (invalidServiceId) {
      return NextResponse.json(
        {
          success: false,
          error:
            "One or more selected services are invalid.",
        },
        { status: 400 },
      );
    }

    const serviceDetails =
      body.serviceDetails &&
      typeof body.serviceDetails === "object"
        ? body.serviceDetails
        : {};

    const propertyDetails = {
      address: String(
        property.address ?? "",
      ).trim(),
      hoa: String(
        property.hoa ?? "",
      ).trim(),
      approvalRequired: String(
        property.approvalRequired ?? "",
      ).trim(),
      timeline: String(
        property.timeline ?? "",
      ).trim(),
      budget: String(
        property.budget ?? "",
      ).trim(),
      additionalDetails: String(
        property.additionalDetails ?? "",
      ).trim(),
    };

    const photoPaths: string[] =
      Array.isArray(body.photoPaths)
        ? body.photoPaths
            .map((value: unknown) =>
              String(value),
            )
            .filter(Boolean)
        : [];

    const projectDetails =
      propertyDetails.additionalDetails;

    const { data: estimateRequest, error: estimateError } =
      await supabase
        .from("estimate_requests")
        .insert({
          full_name: fullName,
          email,
          phone,
          zip_code: zipCode,
          project_details: projectDetails,
          service_details: serviceDetails,
          property_details: propertyDetails,
          photo_paths: photoPaths,
        })
        .select("id")
        .single();

    if (estimateError || !estimateRequest) {
      console.error(
        "Estimate request error:",
        estimateError,
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to create estimate request.",
        },
        { status: 500 },
      );
    }

    const serviceRows = selectedServices.map(
      (serviceId) => ({
        estimate_request_id:
          estimateRequest.id,
        service_id: serviceId,
      }),
    );

    const { error: serviceError } =
      await supabase
        .from("estimate_request_services")
        .insert(serviceRows);

    if (serviceError) {
      console.error(
        "Estimate services error:",
        serviceError,
      );

      await supabase
        .from("estimate_requests")
        .delete()
        .eq("id", estimateRequest.id);

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to save selected services.",
        },
        { status: 500 },
      );
    }

    const smtpPassword =
      process.env.SMTP_PASSWORD;

    if (smtpPassword) {
      try {
        const transporter =
          nodemailer.createTransport({
            host:
              process.env.SMTP_HOST ||
              "smtp.ionos.com",
            port: Number(
              process.env.SMTP_PORT || 587,
            ),
            secure: false,
            requireTLS: true,
            auth: {
              user:
                process.env.SMTP_USER ||
                "info@miamicustompatios.com",
              pass: smtpPassword,
            },
          });

        const selectedServiceNames =
          selectedServices
            .map(
              (serviceId) =>
                serviceNames[serviceId],
            )
            .filter(Boolean);

        const serviceDetailsText =
          Object.entries(serviceDetails)
            .map(
              ([serviceId, details]) => {
                const serviceName =
                  serviceNames[serviceId] ||
                  serviceId;

                const values =
                  details &&
                  typeof details ===
                    "object"
                    ? Object.entries(details)
                        .map(
                          ([key, value]) =>
                            `${key}: ${
                              Array.isArray(value)
                                ? value.join(
                                    ", ",
                                  )
                                : value
                            }`,
                        )
                        .join("\n")
                    : "";

                return `${serviceName}\n${values}`;
              },
            )
            .join("\n\n");

        await transporter.sendMail({
          from:
            process.env.SMTP_FROM ||
            "info@miamicustompatios.com",
          to:
            process.env.SMTP_TO ||
            "info@miamicustompatios.com",
          replyTo: email,
          subject:
            `New Estimate Request - ${fullName}`,
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
${selectedServiceNames
  .map((service) => `- ${service}`)
  .join("\n")}

Property Information
--------------------
Address: ${propertyDetails.address || "Not provided"}
HOA: ${propertyDetails.hoa || "Not provided"}
Approval Required: ${propertyDetails.approvalRequired || "Not provided"}
Timeline: ${propertyDetails.timeline || "Not provided"}
Budget: ${propertyDetails.budget || "Not provided"}

Service Details
---------------
${serviceDetailsText || "No detailed service information provided."}

Additional Details
------------------
${propertyDetails.additionalDetails || "No additional details provided."}

Photos
------
${photoPaths.length} photo(s) uploaded.

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
                ${selectedServiceNames
                  .map(
                    (service) =>
                      `<li>${service}</li>`,
                  )
                  .join("")}
              </ul>

              <h3>Property Information</h3>
              <p><strong>Address:</strong> ${
                propertyDetails.address ||
                "Not provided"
              }</p>
              <p><strong>HOA:</strong> ${
                propertyDetails.hoa ||
                "Not provided"
              }</p>
              <p><strong>Approval Required:</strong> ${
                propertyDetails.approvalRequired ||
                "Not provided"
              }</p>
              <p><strong>Timeline:</strong> ${
                propertyDetails.timeline ||
                "Not provided"
              }</p>
              <p><strong>Budget:</strong> ${
                propertyDetails.budget ||
                "Not provided"
              }</p>

              <h3>Service Details</h3>
              <pre style="white-space: pre-wrap;">${
                serviceDetailsText ||
                "No detailed service information provided."
              }</pre>

              <h3>Additional Details</h3>
              <p>${
                propertyDetails.additionalDetails ||
                "No additional details provided."
              }</p>

              <h3>Photos</h3>
              <p>${photoPaths.length} photo(s) uploaded.</p>

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
      message:
        "Estimate request submitted successfully.",
      id: estimateRequest.id,
    });
  } catch (error) {
    console.error(
      "Estimate API error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}