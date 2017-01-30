var path = require('path')
var xtend = require('xtend')
var convert = require('../')

var options = {
  input: path.join(__dirname, 'example.html'),
  output: path.join(__dirname, 'example.pdf'),
  // cover: 'assets/title_page.jpg',
  //baseFontSize: 10,
  authors: '"Seth Vincent"',
  extraCss: path.join(__dirname, 'pdf.css'),
  pdfSansFamily: '"Open Sans, Helvetica Neue, Helvetica, sans-serif"',
  pdfSerifFamily: '"Lora, Baskerville, Georgia, serif"',
  pdfDefaultFontSize: 12,
  pageBreaksBefore: '//h:h1',
  chapter: '//h:h1',
  pdfPageNumbers: true,
  insertBlankLine: true,
  insertBlankLineSize: '1',
  lineHeight: '12',
  marginTop: '50',
  marginRight: '50',
  marginBottom: '50',
  marginLeft: '50'
}

/*
* create pdf file
*/
convert(options, function (err) {
  if (err) console.log(err)
})
