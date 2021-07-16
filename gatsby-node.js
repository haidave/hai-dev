const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@images": path.resolve(__dirname, "src/images"),
        "@projects": path.resolve(__dirname, "src/projects"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  })
}
