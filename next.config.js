/** @type {import('next').NextConfig} */
const nextConfig = {
    metadataBase: process.env.NODE_ENV === 'test' ? '' : 'https://ajshooting.github.io/blog',
    output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
