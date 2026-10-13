import { ImageResponse } from "next/og";
import { BrandMarkStatic } from "../lib/brand-mark";

// Home-screen icon and the PNG logo referenced by structured data. iOS does
// not honor transparency, so it sits on the site's warm off-white with padding.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ee",
        }}
      >
        <BrandMarkStatic size={128} />
      </div>
    ),
    { ...size }
  );
}
