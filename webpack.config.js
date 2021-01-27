const path = require('path')

module.exports = {
    entry: './src/index',
    output: {
        // path: path.resolve(__dirname, 'dist'),
	path: '/Applications/XAMPP/htdocs/wpt/wp-content/plugins/timeline/public',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
}

