module.exports = {
  extends: ["custom/next"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test.{ts,tsx,js,jsx}",
          "test-*.{ts,tsx,js,jsx}",
          "**/*{.,_}{test,spec}.{ts,tsx,js,jsx}",
          "**/jest.config.{ts,js}",
          "**/jest.setup.{ts,js}",
          "**/*.stories.*",
          "**/.storybook/**/*.*",
        ],
      },
    ],
  },
};
