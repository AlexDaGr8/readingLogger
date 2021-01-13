module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production' ? '/readingLogger/' : '/',
  
    // Other options include:
    outputDir: undefined,
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
  }