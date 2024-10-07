export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  ["src/favicon.ico", "src/opengraph.jpg"].forEach((item) =>
    eleventyConfig.addPassthroughCopy(item)
  );

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
