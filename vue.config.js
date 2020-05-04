var path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "scss/_variables.sass"` // empty file
      },
      scss: {
        prependData: `@import "scss/_variables.scss";`
      }
    }
  },
  transpileDependencies: [
    'vuetify',
  ]
};
