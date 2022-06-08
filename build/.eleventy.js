const pelicanEleventyPlugin = require('@la-ots/eleventy-plugin-pelican')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pelicanEleventyPlugin, {
    url: 'https://pelican.doa.la.gov',
    title: 'Pelican, Louisiana\'s Design System',
    description: 'Pelican provides a scalable, modern base upon which to build digital products for Louisiana citizens.',
    favicon: '/img/favicon.png',
    layouts: {
      sidebar: {
        title: 'Pelican',
        icon: {
          alt: 'Pelican icon'
        }
      },
      docs: {
        github: {
          button: true,
          repository: 'https://github.com/la-ots/pelican/tree/main/',
        }
      }
    },
    assets: {
      bundle: true,
      core: false,
      custom: {
        css: [
          '../css/pelican.css',
          '../../node_modules/@la-ots/eleventy-plugin-pelican/assets/css/docs.css',
          '../../node_modules/@la-ots/eleventy-plugin-pelican/assets/css/prism-theme.css',
          'css/site.css'
        ],
        javascript: [
          '../js/pelican.bundle.js',
          '../../node_modules/@la-ots/eleventy-plugin-pelican/assets/js/docs.js',
        ]
      }
    }
  })

  eleventyConfig.addPassthroughCopy('docs/img')
  eleventyConfig.addPassthroughCopy('docs/css')

  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./build/.eleventy.js')
  eleventyConfig.addWatchTarget('./dist/js/')
  eleventyConfig.addWatchTarget('./dist/css/')

  return {
    dir: {
      input: "./docs",
      output: "./dist/docs",
      layouts: '../node_modules/@la-ots/eleventy-plugin-pelican/layouts',
    }
  }
}
