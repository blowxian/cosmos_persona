const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
    env: {
        SiteTitle: 'Cosmos Persona Personality Quiz',
        MaxCount: '10'
    },
    trailingSlash: true
};

module.exports = withNextIntl(nextConfig);