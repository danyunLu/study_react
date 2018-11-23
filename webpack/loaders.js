const loaders = [
    { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', },
    { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader",] }
]

module.exports = loaders;