module.exports = [{
    entry: "./enterPage/enterPage.jsx", 
    output:{
        path: "public",     
        filename: "bundle1.js"      
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
                {
                test: /\.jsx$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
                }
        ]
    },
    devServer: {
       host: 'localhost',
       port: 8080,
       proxy: {
          '/enterPage' : 'http://localhost:3000',
          '/carPage' : 'http://localhost:3000',
          '/motoPage' : 'http://localhost:3000',
          '/truckPage' : 'http://localhost:3000',
          '/mainPage1' : 'http://localhost:3000',
          '/mainPage2' : 'http://localhost:3000',
          '/mainPage3' : 'http://localhost:3000'
          
       }
    }

}, {
    entry: "./mainPage/mainPage.jsx", 
    output:{
        path: "public",     
        filename: "bundle2.js"      
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
                {
                test: /\.jsx$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
                }
        ]
    }
}, {
    entry: "./itemPage/carPage.jsx", 
    output:{
        path: "public",     
        filename: "bundle3.js"     
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
                {
                test: /\.jsx$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
                }
        ]
    }
}, {
    entry: "./itemPage/motoPage.jsx", 
    output:{
        path: "public",     
        filename: "bundle4.js"     
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
                {
                test: /\.jsx$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
                }
        ]
    }
}, {
    entry: "./itemPage/truckPage.jsx", 
    output:{
        path: "public",     
        filename: "bundle5.js"     
    },
    resolve:{   
        extensions: ["", ".js", ".jsx"] 
    },
    module:{
        loaders:[   
                {
                test: /\.jsx$/, 
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query:{
                    presets:["es2015", "react"]
                }
                }
        ]
    }
} ]