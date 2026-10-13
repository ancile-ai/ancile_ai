import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "../lib/site";
import { BrandMarkStatic } from "../lib/brand-mark";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const lanes = ["Passive sUAS Detection", "Subcontract Support", "Applied AI & R&D"];
const creds = ["SDVOSB", "CMMC-compliant", "JCP Certified", "CAGE 11BV7"];

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
          padding: "64px 72px",
          background:
            "radial-gradient(900px 500px at 10% 0%, rgba(215,85,25,0.22), transparent 60%), radial-gradient(800px 500px at 95% 100%, rgba(56,189,248,0.16), transparent 60%), #0b0f1a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <BrandMarkStatic size={64} ink="#ffffff" />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1.5 }}>
            Ancile
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Mission software and applied AI for public sector, energy, and defense.
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {lanes.map((lane) => (
              <div
                key={lane}
                style={{
                  display: "flex",
                  padding: "12px 22px",
                  borderRadius: 8,
                  border: "2px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 26,
                  fontWeight: 600,
                }}
              >
                {lane}
              </div>
            ))}
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
          <div style={{ display: "flex", gap: 28 }}>
            {creds.map((cred) => (
              <div key={cred} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 9999,
                    background: "#e86c25",
                    display: "flex",
                  }}
                />
                {cred}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontWeight: 600, color: "#f5ae77" }}>ancile.io</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
