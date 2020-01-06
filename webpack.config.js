var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    entry: './src/index.js',
    resolve: {
        extensions: ['.webpack.js','.web.js','.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] },
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader' }  
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Base App',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}