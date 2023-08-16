
var path = require('path'); //gives us access to the path directory so we can specify entry point and output location for webpack



// Update this variable below to point to the folder with the file
// that will be webpack's "entry point".
// This is the first file that webpack puts into the "bundle.js" file it is creating.
// Webpack will then create a "dependency graph", bundling any dependencies
// referenced by the file. Such as: other files, npm modules, images, or css.
// see https://webpack.js.org/concepts/dependency-graph/
var SRC_DIR = path.join(__dirname, './client/src');

// Update this next variable to point to the folder
// where webpack will write the final bundled file.
var DIST_DIR = path.join(__dirname, './client/dist');

module.exports = {

  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR

  },

  // Out of the box, webpack only understands JavaScript and JSON files. "Loaders" allow
  // webpack to process other types of files and convert them into valid modules that can
  // be consumed by your application and added to the dependency graph.
  module: {
    rules: [
      {
        // this loader allows the direct "import" of css rules
        // The "test" property identifies which file or files should be transformed.
        // The "use" property indicates which loader should be used to do the transforming.
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          // NOTE: when using the 'babel-loader', there must be a ".babelrc" file
          // with the proper plugins.
          loader: 'babel-loader',
        }
      }

    ]
  }
}