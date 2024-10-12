module.exports = eleventyConfig => {
  // 	--------------------- Custom Template Languages ---------------------
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));

  // 	--------------------- Custom Watch Targets -----------------------
  eleventyConfig.addWatchTarget('./src/assets');

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
