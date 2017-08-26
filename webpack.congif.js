CONST path = require('path');

module.exports = {
    entry:path.resolve("public/counterApp.js"),
    output: {
        path:__dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /(node_modules)/,
            loader:'babel',
            query:{
                presets: ['es2015', 'react']
            }
        }]
    },
    watch:true
}
