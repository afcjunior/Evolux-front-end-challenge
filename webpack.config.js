const path = require('path');
const dynamicNumberGenerator = require('./src/utils/dynamicNumberGenerator.js');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist',
    //restart WDS if you change this
    before: function(app) {
      app.get('/numbers', function(request, response) {
        response.json(dynamicNumberGenerator(request.query.page, request.query.perPage));
      });
    }
  }
}

module.exports = config;
