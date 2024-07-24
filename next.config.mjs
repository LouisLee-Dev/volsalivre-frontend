/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.imageboss.me', 'www.melhorescola.com.br', 'volsalivre-backend.onrender.com', 'localhost']
    },
    experimental: {
        appDir: false,
    }
};

export default nextConfig;
