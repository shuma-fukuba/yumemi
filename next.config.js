/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_RESAS_API_BASE_URI: String(
      process.env.NEXT_PUBLIC_RESAS_API_BASE_URI
    ),
    NEXT_PUBLIC_RESAS_API_KEY: String(process.env.NEXT_PUBLIC_RESAS_API_KEY),
  },
}

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  webpack(config) {
    return config
  },
})

const withLess = require('next-with-less')

module.exports = withLess({})
