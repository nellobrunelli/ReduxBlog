let webpack = require('webpack');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules[\/\\]/,
        loader: 'react-hot!babel-loader'
    }],
    plugins: [
        new webpack.ProvidePlugin({React: 'react', ReactDOM: 'react-dom'}),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};
