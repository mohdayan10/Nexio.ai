import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nexio — Self-Learning AI Agents for Enterprise Operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0f0c",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700, color: "#ffffff" }}>
          nexio
          <span
            style={{
              marginLeft: 10,
              background: "#bff05a",
              color: "#0d0f0c",
              borderRadius: 10,
              padding: "2px 14px",
            }}
          >
            .ai
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, color: "#ffffff", lineHeight: 1.1, maxWidth: 900 }}>
            Self-Learning AI Agents for Enterprise Operations
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
            The only agent platform you can trust.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
