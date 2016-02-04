# file-to-string-loader
Webpack loader that converts file contents to string and exports

## Config

    { test: /\.html/,  loader: 'file-to-string-loader' }

## Example

    var content = require('./foo.html')

The contents of `foo.html` will be exported as a string, therefore making `content` a string.
