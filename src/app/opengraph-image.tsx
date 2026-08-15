import { ImageResponse } from "next/og";

export const alt = "Haniyeh Ahmadi — Cognitive rehabilitation and clinical neuroscience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f8f4ec", color: "#294032", padding: 68, alignItems: "center", justifyContent: "space-between", fontFamily: "serif" }}>
      <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
        <div style={{ fontSize: 30, letterSpacing: 9, color: "#ad9068", marginBottom: 40 }}>HA</div>
        <div style={{ fontSize: 78, lineHeight: 1.02 }}>Haniyeh Ahmadi</div>
        <div style={{ fontSize: 28, lineHeight: 1.4, marginTop: 28, color: "#526256", fontFamily: "sans-serif" }}>Cognitive rehabilitation specialist &amp; clinical neuroscience researcher</div>
      </div>
      <div style={{ width: 300, height: 480, borderRadius: 160, border: "2px solid #ad9068", background: "#aab39d", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 116 }}>HA</div>
    </div>,
    size,
  );
}

