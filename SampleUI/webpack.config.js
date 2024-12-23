const path = require('path');
const sampleui_version = `${require('./scripts/app/sampleui/.version.json').version}`;
const HtmlWebpackPlugin = require('html-webpack-plugin');
var sampleuiapp = {
    mode: 'sampleui',
    entry: {
        'main': './wwwroot/scripts/sampleui/src/app/app.main.js',
        'polyfills': 'zone.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/scripts/dist/app/sampleui'),
        filename: `[name].${sampleui_version}.js` //'[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './wwwroot/templates/sampleui/index.html'
        })
    ]
};

module.exports = [sampleuiapp];