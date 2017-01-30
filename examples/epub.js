var path = require('path')
var xtend = require('xtend')
var convert = require('../')

var options = {
  input: path.join(__dirname, 'example.html'),
  output: path.join(__dirname, 'example.epub'),
  // cover: 'assets/title_page.jpg',
  //baseFontSize: 10,
  authors: '"Seth Vincent"',
  extraCss: path.join(__dirname, 'pdf.css'),
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
