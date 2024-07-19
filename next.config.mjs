/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true   
    },
    images: {
        domains: ['img.imageboss.me', 'www.melhorescola.com.br']
    }
};

export default nextConfig;
