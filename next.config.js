/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'test' ? '' : '/blog',
    assetPrefix: process.env.NODE_ENV === 'test' ? '' : '/blog',
    output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
