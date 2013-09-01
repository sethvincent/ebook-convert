var convert = require('./');

var pdf = convert({
  source: 'test.html',
  target: 'test.pdf',
  arguments: [
    ['--base-font-size', '10'], 
    ['--authors', 'Seth Vincent'],
    ['--extra-css', 'test.css'],
    ['--margin-top', '50'],
    ['--margin-right', '50'],
    ['--margin-bottom', '50'],
    ['--margin-left', '50']
  ]
});

pdf.on('end', function(){
  console.log('did it! the pdf exists!');
});


var mobi = convert({
  source: 'test.html',
  target: 'test.mobi',
  arguments: [
    ['--base-font-size', '10'], 
    ['--authors', 'Seth Vincent'],
    ['--extra-css', 'test.css']
  ]
});

mobi.on('end', function(){
  console.log('did it!, the mobi exists!')
});


var epub = convert({
  source: 'test.html',
  target: 'test.epub',
  arguments: [
    ['--base-font-size', '10'], 
    ['--authors', 'Seth Vincent'],
    ['--extra-css', 'test.css']
  ]
});

epub.on('end', function(){
  console.log('did it!, the epub exists!')
});