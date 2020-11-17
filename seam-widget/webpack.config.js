const path = require('path');
const buildDir = './build';

module.exports = () => {
  return [{
    mode: 'production',
    entry: './src/index.ts',
    output: {
      filename: 'widget.js',
      path: path.resolve(buildDir),
    },
    devServer: {
      contentBase: buildDir
    },
    module: {
      rules: [
        {
          test: /\.(s*)css$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
        // use babel-loader for TS and JS modeles,
        // starting v7 Babel babel-loader can transpile TS into JS,
        // so no need for ts-loader
        // note, that in dev we still use tsc for type checking
        {
          test: /\.(js|ts|tsx|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', {
                    'targets': {
                      'browsers': ['IE 11, last 2 versions']
                    },
                    // makes usage of @babel/polyfill because of IE11
                    // there is at least async functions and for..of
                    useBuiltIns: 'usage'
                  }],
                  [
                    // enable transpiling ts => js
                    "@babel/typescript",
                    // tell babel to compile JSX using into Preact
                    { jsxPragma: "h" }
                  ]
                ],
                'plugins': [
                  // syntax sugar found in React components
                  '@babel/proposal-class-properties',
                  '@babel/proposal-object-rest-spread',
                  // transpile JSX/TSX to JS
                  ['@babel/plugin-transform-react-jsx', {
                    // we use Preact, which has `Preact.h` instead of `React.createElement`
                    pragma: 'h',
                    pragmaFrag: 'Fragment'
                  }]
                ]
              }
            }
          ]
        }]
    },
    resolve: {
      extensions: ['*', '.js', '.ts', '.tsx'],
      alias: {
        react: 'preact/compat',
      }
    }
  }];
};
