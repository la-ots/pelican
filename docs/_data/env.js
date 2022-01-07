module.exports = () => {
  return {
    development: process.env.ELEVENTY_ENV === "development",
    production: process.env.ELEVENTY_ENV === "production",
  };
};
