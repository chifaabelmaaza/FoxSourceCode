// craco.config.js
var webpack = require('webpack');

module.exports = {
    style: {
    //   postcss: {
    //     plugins: [
    //       require('autoprefixer'),
    //     ],
    //   },
    webpack: {
      plugins: {
        add: [
          new webpack.DefinePlugin({
            process: {env: {}}
          })
        ]
      }
    }
    },
  }