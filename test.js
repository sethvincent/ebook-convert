var convert = require('./');

var pdf = convert({
  source: 'test.html',
  target: 'test.pdf',
  //arguments: ['"--authors \"seth vincent\""']
});

pdf.on('data', function(data){
  console.log(data.toString())
});

pdf.on('end', function(status){
  console.log('did it!', status);
})

/*
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
*/