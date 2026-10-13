import { SITE_ROUTES, absoluteUrl } from "../lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
