const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './source/index.js',
    about: './source/about.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'), // __dirname: webpack.config.js의 위치:: node.js의 약속
    filename: '[name]_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
