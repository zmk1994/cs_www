'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
 var webpack = require("webpack")
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
//     sourceMap: isProduction
// ? config.build.productionSourceMap
// : config.dev.cssSourceMap,
// extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
 
  
  plugins: [ new webpack.optimize.CommonsChunkPlugin('common.js'), new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" }) ]
}
