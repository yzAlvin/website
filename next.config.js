/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const production = process.env.NODE_ENV === "production";

const url = production ? "https://www.yoursite.com" : "http://localhost:1337";

module.exports = { nextConfig, url };
