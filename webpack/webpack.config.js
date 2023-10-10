const path = require('path');

module.exports = {
  mode: 'development',
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, 'public'), // __dirname: webpack.config.js의 위치:: node.js의 약속
    filename: 'index_bundle.js',
  },
};
