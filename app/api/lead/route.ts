import { NextResponse } from "next/server";

const REQUIRED = [
  "firstName",
  "lastName",
  "jobTitle",
  "country",
  "email",
  "industry",
  "reach",
  "product",
  "message",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  for (const field of REQUIRED) {
    const value = body[field];
    if (typeof value !== "string" || value.trim() === "") {
      errors[field] = "Please complete this required field.";
    }
  }

  if (typeof body.email === "string" && body.email.trim() && !EMAIL_RE.test(body.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (body.consent !== true) {
    errors.consent = "Please accept to continue.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // In production this would forward to a CRM / email service.
  // For now we record the lead server-side so the submission is real.
  console.log("[lead] new demo request:", {
    name: `${body.firstName} ${body.lastName}`,
    email: body.email,
    company: body.jobTitle,
    country: body.country,
    industry: body.industry,
    reach: body.reach,
    product: body.product,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
