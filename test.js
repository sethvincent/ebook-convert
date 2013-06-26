var convert = require('./index');

convert({
  source: 'test.html',
  target: 'test.mobi',
  end: function(){
    console.log("mobi finished running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});

convert({
  source: 'test.html',
  target: 'test.pdf',
  end: function(){
    console.log("pdf finished running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});

convert({
  source: 'test.html',
  target: 'test.epub',
  end: function(){
    console.log("epub finished running!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
});