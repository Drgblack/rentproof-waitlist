import { NextResponse } from "next/server";
import { sendWaitlistWelcomeEmail } from "@/lib/postmark";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      fullName?: string;
    };

    const email = body.email?.trim();
    const fullName = body.fullName?.trim() ?? "";

    if (!email) {
      return NextResponse.json(
        { error: "Missing email" },
        { status: 400 },
      );
    }

    await sendWaitlistWelcomeEmail(email, fullName);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send RentProof welcome email", error);

    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 },
    );
  }
}
