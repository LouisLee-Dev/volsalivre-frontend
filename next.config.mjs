/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.imageboss.me', 'www.melhorescola.com.br', 'localhost']
    },
    experimental: {
        appDir: false,
    }
};

export default nextConfig;
