import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #0f172a 0%, #16253f 60%, #1e293b 100%)",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          <rect
            x="11"
            y="7"
            width="20"
            height="28"
            rx="5"
            stroke="#E7F0EA"
            strokeWidth="2.5"
          />
          <path
            d="M17 16H25.5"
            stroke="#E7F0EA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M17 21H25.5"
            stroke="#E7F0EA"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M16 28.5L20 32.5L33 19.5"
            stroke="#34D399"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
