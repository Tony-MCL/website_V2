/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? "/website_V2" : "",
  assetPrefix: isProd ? "/website_V2/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/website_V2" : ""
  }
};

export default nextConfig;
