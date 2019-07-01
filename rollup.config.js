export default [{
    input: './index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    }
  },{
    input: './index.js',
    output: {
      file: 'dist/bundle.es.js',
      format: 'es'
    }
  }];