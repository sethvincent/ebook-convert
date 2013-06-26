# ebook-convert
> A wrapper around the command-line tool _ebook-convert_ from Calibre

## Usage:
```
var convert = require('ebook-convert');

convert({
  source: 'test.html',
  target: 'test.mobi',
  end: function(){
    // do something after the conversion happens
  }
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