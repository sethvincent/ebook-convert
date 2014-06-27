# ebook-convert
> A wrapper around the command-line tool _ebook-convert_ from Calibre

## Usage:
```
var convert = require('ebook-convert');

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
```

## Installation:
[Install calibre](http://calibre-ebook.com/download)

Install `ebook-convert` with npm:

```
npm install ebook-convert
```

## License:
MIT
