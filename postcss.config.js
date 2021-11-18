module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-normalize": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 0,
    },
    "postcss-calc": {},
  },
};
