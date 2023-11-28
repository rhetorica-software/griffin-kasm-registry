/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Rhetorica Ltd',
    description: 'The official store for Griffin workspace images.',
    icon: '/img/logo.svg',
    listUrl: 'https://rhetorica-software.github.io/griffin-kasm-registry/',
    contactUrl: 'https://github.com/rhetorica-software/griffin-kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/griffin-kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
