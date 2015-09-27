var test = require('tape')
var convert = require('../')

var defaultArguments = [
  ['--base-font-size', '10'],
  ['--authors', 'Seth Vincent'],
  ['--publisher', 'Super Big Tree'],
  ['--extra-css', 'test.css']
]

var pdfArguments = defaultArguments.concat([
  ['--margin-top', '50'],
  ['--margin-right', '50'],
  ['--margin-bottom', '50'],
  ['--margin-left', '50']
])

/*
* create pdf file
*/
var pdf = convert({
  source: 'test.html',
  target: 'test.pdf',
  arguments: pdfArguments
})

pdf.on('end', function () {
  console.log('did it! the pdf exists!')
})

/*
* create mobi file
*/
var mobi = convert({
  source: 'test.html',
  target: 'test.mobi',
  arguments: defaultArguments
})

mobi.on('end', function () {
  console.log('did it! the mobi exists!')
})

/*
* create epub file
*/
var epub = convert({
  source: 'test.html',
  target: 'test.epub',
  arguments: defaultArguments
})

epub.on('end', function () {
  console.log('did it! the epub exists!')
})
