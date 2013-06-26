var spawn = require('child_process').spawn;

module.exports = function(options){
  return new EbookConvert(options);
};

function EbookConvert(options){
  this.source = options.source;
  this.target = options.target;

  if (options.arguments){
    var arguments = [this.source, this.target].concat(options.arguments);
  } else {
    var arguments = [this.source, this.target];
  } 
  
  var convert = spawn('ebook-convert', arguments);

  convert.stdout.on('data', function(data){
    if (options.stdout){
      options.stdout();
    }
  });

  convert.stderr.on('data', function(data){
    if (options.stderr){
      options.stderr();
    }
  });

  convert.on('close', function(code){
    if (options.end){
      options.end();
    }
  });
};
