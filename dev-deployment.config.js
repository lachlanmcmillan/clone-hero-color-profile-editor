module.exports = {
  name: "Color Editor Profile",
  script: "serve",
  watch: false,
  env: {
    NODE_ENV: "production",
    PM2_SERVE_PATH: "build",
    PM2_SERVE_PORT: 10001,
  },
};
