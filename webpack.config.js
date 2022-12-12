var path = require('path')
module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/static/dist',
        filename: 'build.js'
    },
    module: {
        // rules: [ {test: /\.css$/, loader: 'style-loader!css-loader'}

    // ]
    rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }, 
    mode: 'development'
}
