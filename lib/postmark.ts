import "server-only";

const POSTMARK_API_URL = "https://api.postmarkapp.com/email";

// Requires POSTMARK_SERVER_TOKEN in the server environment.
export async function sendWaitlistWelcomeEmail(to: string, name: string) {
  const token = process.env.POSTMARK_SERVER_TOKEN?.trim();

  if (!token) {
    throw new Error("Missing POSTMARK_SERVER_TOKEN");
  }

  const recipientName = name.trim();
  const recipient = recipientName ? `${recipientName} <${to}>` : to;

  const htmlBody = `
<p>Thanks for registering.</p>
<p>RentProof is being built specifically for England self-managing landlords who want their evidence and compliance records in order before a Section 8 situation or PRS Database registration lands.</p>
<p>We'll be in touch as early access opens. If you'd like to share more about your current setup in the meantime, just reply to this email — we read every one.</p>
<p style="color:#666;font-size:12px;">RentProof | England only | Evidence and PRS readiness for self-managing landlords</p>
  `.trim();

  const textBody = [
    "Thanks for registering.",
    "",
    "RentProof is being built specifically for England self-managing landlords who want their evidence and compliance records in order before a Section 8 situation or PRS Database registration lands.",
    "",
    "We'll be in touch as early access opens. If you'd like to share more about your current setup in the meantime, just reply to this email — we read every one.",
    "",
    "RentProof | England only | Evidence and PRS readiness for self-managing landlords",
  ].join("\n");

  const response = await fetch(POSTMARK_API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": token,
    },
    body: JSON.stringify({
      From: "RentProof <hello@realtyclose.com>",
      To: recipient,
      MessageStream: "outbound",
      Subject: "You're on the RentProof early access list",
      HtmlBody: htmlBody,
      TextBody: textBody,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Postmark welcome email failed: ${response.status} ${errorText}`,
    );
  }
}
