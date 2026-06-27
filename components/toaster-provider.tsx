"use client";

import { Toaster } from "react-hot-toast";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 4000,
        style: {
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          background: "#f8fafc",
          color: "#0f172a",
          boxShadow: "0 24px 50px -30px rgba(15, 23, 42, 0.45)",
        },
      }}
    />
  );
}
