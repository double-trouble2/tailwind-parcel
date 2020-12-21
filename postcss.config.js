class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      browsers: ['>0.25%', 'not ie 11', 'not op_mini all']
    }),
    require('tailwindcss')('./tailwind.config.js'),
    process.env.NODE_ENV === 'production'
      ? require('postcss-purgecss')({
          content: ['./src/**/*.pug'],
          safelist: ['/.container/','/.main/', /^nav-/],
          extractors: [
            {
              extractor: new TailwindExtractor,
              extensions: ["html", "js"]
            }
          ]
        })
      : function() {

        return []
      }
  ]
}
