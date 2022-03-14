const { promisify } = require("util")
const fs = require("fs")
const hasha = require("hasha")
const readFile = promisify(fs.readFile)
const pluginInclusiveLanguage = require("@11ty/eleventy-plugin-inclusive-language")
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const pluginToc = require('eleventy-plugin-nesting-toc')
const pluginReadingTime = require('eleventy-plugin-reading-time')
const markdownIt = require("markdown-it")
const markdownItAnchor = require("markdown-it-anchor")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const { DateTime } = require("luxon")

module.exports = (eleventyConfig) => {
  const isProduction = process.env.ELEVENTY_ENV === "production";

  eleventyConfig.addPlugin(pluginToc)
  eleventyConfig.addPlugin(pluginSyntaxHighlight)
  eleventyConfig.addPlugin(pluginInclusiveLanguage)
  eleventyConfig.addPlugin(pluginReadingTime)
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addFilter('titleize', (value) => {
    return value.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ')
  })

  eleventyConfig.addFilter('capitalize', (value) => {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  eleventyConfig.addFilter('replaceDash', (value) => {
    if (!value) return ''
    value = value.toString()

    return value.replace(/\-/g, ' ')
  })

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addNunjucksAsyncFilter("addHash", function (
    absolutePath,
    callback
  ) {
    readFile(`./dist/docs/${absolutePath}`, {
      encoding: "utf-8",
    })
    .then((content) => {
      return hasha.async(content);
    })
    .then((hash) => {
      callback(null, `${absolutePath}?hash=${hash.substr(0, 10)}`)
    })
    .catch((error) => callback(error))
  })

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: false
  })
  eleventyConfig.setLibrary("md", markdownLibrary)

  eleventyConfig.addCollection("sidebarNav", (collection) => {
    return collection.getAll()
      .filter(item => (item.data || {}).excludeFromSidebar !== true)
  })

  /*
  eleventyConfig.addCollection("tagList", (collection) => {
    let tagSet = new Set()
    collection.getAll().forEach((item) => {
      if ("tags" in item.data) {
        let tags = item.data.tags
        if (typeof tags === "string") {
          tags = [tags]
        }

        tags = tags.filter((item) => {
          switch(item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false
          }

          return true
        })

        for (const tag of tags) {
          tagSet.add(tag)
        }
      }
    })

    return [...tagSet].sort()
  })
  */

  function blogTagList(tags) {
    return (tags || []).filter(tag => tag.startsWith("blog"));
  }

  eleventyConfig.addFilter("blogTagList", blogTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return blogTagList([...tagSet]);
  });

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/docs/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  eleventyConfig.addPassthroughCopy('docs/css');
  eleventyConfig.addPassthroughCopy('docs/img');
  eleventyConfig.addPassthroughCopy('docs/js');

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('dist/js')
  eleventyConfig.addWatchTarget('dist/css')

  // Add Pelican
  if (isProduction) {
    eleventyConfig.addPassthroughCopy({
      "dist/css/pelican.min.css": "/css/pelican.min.css",
      "dist/js/pelican.bundle.min.js": "/js/pelican.bundle.min.js",
    });
  } else {
    eleventyConfig.addPassthroughCopy({
      "dist/css/pelican.css": "/css/pelican.css",
      "dist/css/pelican.css.map": "/css/pelican.css.map",
      "dist/js/pelican.bundle.js": "/js/pelican.bundle.js",
      "dist/js/pelican.bundle.js.map": "/js/pelican.bundle.js.map",
    });
  }

  return {
    passthroughFileCopy: true,
    templateFormats: ["md", "njk", "html", "liquid"],
    dir: {
      input: "docs",
      output: "dist/docs",
      includes: "_includes",
      layouts: "_layouts",
    }
  }
}
