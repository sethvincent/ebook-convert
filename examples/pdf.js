var path = require('path')
var convert = require('../')

var args = [
  // ['--cover', 'assets/title_page.jpg'],
  ['--base-font-size', '12'],
  ['--authors', 'Seth Vincent'],
  ['--publisher', 'Super Big Tree'],
  ['--extra-css', path.join(__dirname, 'pdf.css')],
  ['--pdf-sans-family', 'Open Sans, Helvetica Neue, Helvetica, sans-serif'],
  ['--pdf-serif-family', 'Lora, Baskerville, Georgia, serif'],
  ['--page-breaks-before', '//h:h1'],
  ['--chapter', '//h:h1'],
  ['--pdf-page-numbers'],
  ['--insert-blank-line'],
  ['--insert-blank-line-size', '1'],
  ['--line-height', '12'],
  ['--margin-top', '50'],
  ['--margin-right', '50'],
  ['--margin-bottom', '50'],
  ['--margin-left', '50']
]

/*
* create pdf file
*/
var pdf = convert({
  source: path.join(__dirname, 'example.html'),
  target: path.join(__dirname, 'example.pdf'),
  arguments: args
})

pdf.on('data', function (data) {
  console.log('data event', data.toString())
})

pdf.on('exit', function (res) {
  console.log('exit event', res)
})

pdf.on('close', function (res) {
  console.log('close event', res)
})

pdf.on('message', function (res) {
  console.log('message event', res)
})

pdf.on('error', function (res) {
  console.log('error event', res)
})
