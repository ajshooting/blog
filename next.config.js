/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    publicRuntimeConfig: {
        path: process.env.NODE_ENV === 'test' ? '' : '/blog',
    },
}

module.exports = nextConfig
