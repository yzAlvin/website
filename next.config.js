/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const production = process.env.NODE_ENV === "production";

const url = production ? "https://yzalvin-cms.herokuapp.com" : "http://localhost:1337";

module.exports = {
    nextConfig, url, images: {
        domains: ['res.cloudinary.com/alvinzhao/'],
    },
};
