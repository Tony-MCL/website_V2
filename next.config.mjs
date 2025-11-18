/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  // Viktig for GitHub Pages: genererer statiske HTML-filer i ./out
  output: "export",
  // Viktig for prosjekt-sider: appen ligger under /website_V2
  basePath: isProd ? "/website_V2" : "",
  assetPrefix: isProd ? "/website_V2/" : ""
};

export default nextConfig;
