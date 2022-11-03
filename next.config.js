/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  webpack(config) {
    return config
  },
})

const withLess = require('next-with-less')

module.exports = withLess({})
