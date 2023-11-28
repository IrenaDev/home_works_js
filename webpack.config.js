const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');

function buildEntryPoints(pattern) {
  const entries = {};
  const files = glob.sync(pattern);

  files.forEach(file => {
    const entryKey = path.relative('./src/pages', file).replace(/\.js$/, '').replace(/\\/g, '/');
    entries[entryKey] = path.resolve(__dirname, file);
  });

  return entries;
}

function generateHtmlPlugins(pattern) {
  const templates = [];
  const files = glob.sync(pattern);

  files.forEach(file => {
    const basename = path.basename(file, '.html');

    templates.push(
      new HtmlWebpackPlugin({
        filename: `${basename}/index.html`,
        template: path.resolve(__dirname, file),
        chunks: [basename],
      })
    );
  });

  return templates;
}

module.exports = {
  entry: buildEntryPoints('./src/**/*.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },

  plugins: [
    new miniCss({
      filename: `[name].min.css`,
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, './src/pages/**/img'),
    //       to: path.resolve(__dirname, 'dist/img'),
    //     },
    //   ],
    // }),
    ...generateHtmlPlugins('./src/**/*.html'),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
  },

  mode: 'development',
};
