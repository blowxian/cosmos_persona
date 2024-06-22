module.exports = {
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
}