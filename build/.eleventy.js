const pelicanEleventyPlugin = require('@la-ots/eleventy-plugin-pelican')
const path = require('path')

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
      core: {
        css: [
          path.resolve('./dist/css/pelican.css'),
          path.resolve('./node_modules/@la-ots/eleventy-plugin-pelican/assets/css/docs.css'),
          path.resolve('./node_modules/@la-ots/eleventy-plugin-pelican/assets/css/prism-theme.css'),
          path.resolve('./docs/css/site.css')
        ],
        javascript: [
          path.resolve('./dist/js/pelican.bundle.js')
          //path.resolve('./node_modules/@la-ots/eleventy-plugin-pelican/assets/js/docs.js'),
        ],
        js: [
          path.resolve('./dist/js/pelican.bundle.js')
          //path.resolve('./node_modules/@la-ots/eleventy-plugin-pelican/assets/js/docs.js'),
        ]
      }
    }
  })

  eleventyConfig.addPassthroughCopy('docs/img')

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
