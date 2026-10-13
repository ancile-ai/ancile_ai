import { SITE_URL, absoluteUrl } from "../lib/site";

/**
 * Allow every well-behaved crawler, including the AI search and answer-engine
 * bots, so the site can be cited by ChatGPT, Claude, Perplexity, Gemini, and
 * Bing Copilot as well as ranked by Google.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Applebot-Extended",
          "DuckAssistBot",
          "Amazonbot",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
