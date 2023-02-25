const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    devServer: {
        static: [
            {
                directory: path.join(__dirname)
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    //  in .tsconfig.json, set 'sourceMap = true'
    //  tells webpack will be generated source map already
    devtool: 'inline-source-map',
    //  how to work with the files it finds
    module: {
        rules: [
            {
                test: /\.ts$/,      // regular expression for .ts files
                use: 'ts-loader',    // any .ts file should be handled by ts-loader
                exclude: /node_modules/
            }
        ]
    },
    // which file extension to add to imports it finds
    resolve: {
        extensions: ['.ts', '.js']
    }
}