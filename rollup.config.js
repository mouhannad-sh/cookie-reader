export default [{
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    }
  },{
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.es.js',
      format: 'es'
    }
  }];