/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/blog",
    // ↓ next build を実行する際に Static Export を利用します。
    output: 'export',
}

module.exports = nextConfig
