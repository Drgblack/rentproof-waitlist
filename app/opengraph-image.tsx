import { ImageResponse } from "next/og";

export const alt = "RentProof for self-managing landlords in England";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(180deg, #0a1220 0%, #101b30 55%, #16253f 100%)",
          color: "#f8fafc",
          padding: "56px",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            color: "#a7f3d0",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#34d399",
            }}
          />
          RentProof
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 66,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              maxWidth: 980,
            }}
          >
            Get your compliance records ready before the next crisis.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.45,
              color: "#cbd5e1",
              maxWidth: 940,
            }}
          >
            Organise possession evidence, arrears records, and PRS Database
            preparation before rollout reaches your area from late 2026.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#cbd5e1",
          }}
        >
          <div>England-only</div>
          <div>Built for landlords with 5-50 properties</div>
        </div>
      </div>
    ),
    size,
  );
}
