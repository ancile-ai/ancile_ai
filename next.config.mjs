/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Capabilities consolidated into three lanes (June 2026 restructure).
      { source: "/operations", destination: "/delivery", permanent: true },
      { source: "/strategy", destination: "/overview", permanent: true },
      { source: "/predictive-analytics", destination: "/applied-ai", permanent: true },
      { source: "/generative-ai", destination: "/applied-ai", permanent: true },
    ];
  },
};

export default nextConfig;
