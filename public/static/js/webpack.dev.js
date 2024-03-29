var path = require('path');
var webpack = require('webpack');
// var ROOT_PATH = path.resolve(__dirname);
var CompressionPlugin = require("compression-webpack-plugin");
var config = {
    entry: {
        index: [
            './src/index.js', // Your appʼs entry point
        ],
    },
    // path.resolve(projectRootPath, 'src/app.js'),
    output: {
        // __dirname is current working directory
        path: path.resolve(__dirname, '.'),
        publicPath: "/",
        // hotUpdateChunkFilename: 'hot/hot-update.js',
        // hotUpdateMainFilename: 'hot/hot-update.json',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.(scss|css)$/,
            loader: 'style-loader!css-loader!sass-loader?sourceMap'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, 
        {
            test: /\.js|jsx$/,
            loaders: ['babel-loader?presets[]=env,presets[]=react,presets[]=stage-0'],
            exclude: /node_modules/
        }, {
            test: /\.woff$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.svg/,
            loader: "url-loader?limit=10000&minetype=application/font-svg"
        }, {
            test: /\.eot/,
            loader: "url-loader?limit=10000&minetype=application/font-eot"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff2"
        }, {
            test: /\.ttf/,
            loader: "url-loader?limit=10000&minetype=application/font-ttf"
        }, ]
    },
    
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};
if (process.env.NODE_ENV === 'production') {
    config.devtool = false,
    config.entry['vendor'] = ['react'],
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', 
        filename: 'vendor.bundle.js'}),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            },
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            // test: /\.js$|\.html$/,
            // threshold: 10240,
            threshold: 540,
            minRatio: 0.8
        }),
    )

} else {
    devtool:'#inline-sourcemap',
    // devtool:'#eval-source-map',
    config.devServer = {
        headers: { "Access-Control-Allow-Origin": "*" },
        publicPath: "/",
        hot: true,
        inline: true,
        host: "0.0.0.0",
        port: 3001,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
}

module.exports = config;