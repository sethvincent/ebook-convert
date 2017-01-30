# ebook-convert
> A wrapper around the command-line tool _ebook-convert_ from Calibre

## Usage:
```js
var path = require('path')
var xtend = require('xtend')
var convert = require('ebook-convert')

// see more options at https://manual.calibre-ebook.com/generated/en/ebook-convert.html
var options = {
  input: path.join(__dirname, 'example.html'),
  output: path.join(__dirname, 'example.epub'),
  authors: '"Seth Vincent"',
  pageBreaksBefore: '//h:h1',
  chapter: '//h:h1',
  insertBlankLine: true,
  insertBlankLineSize: '1',
  lineHeight: '12',
  marginTop: '50',
  marginRight: '50',
  marginBottom: '50',
  marginLeft: '50'
}

/*
* create epub file
*/
convert(options, function (err) {
  if (err) console.log(err)
})
```

## Installation:
[Install calibre](http://calibre-ebook.com/download)

Install `ebook-convert` with npm:

```
npm install ebook-convert
```

## License
[ISC](LICENSE.md)
