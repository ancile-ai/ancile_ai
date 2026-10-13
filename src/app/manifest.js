import { LOGO_PATH, ORG_NAME, SITE_DESCRIPTION, SITE_NAME } from "../lib/site";

export default function manifest() {
  return {
    name: ORG_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#f7f4ee",
    theme_color: "#d75519",
    icons: [
      {
        src: LOGO_PATH,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
