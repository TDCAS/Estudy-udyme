const path = require("path")

module.exports = {
    mode: 'development', // modo de desenvolvomento
    entry: './src/index.js', //caminho que mostrara onde ficara o index
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'), //Mostra o caminha que sera percorrido para verificar o arqivo  
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        },{
        test: /\.css/,
        use: ['style-loader', 'css-loader']
    }]
    },
    devtool : 'source-map'
};