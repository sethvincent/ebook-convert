var spawn = require('child_process').spawn;
var EventEmitter = require('events').EventEmitter;

module.exports = function(options){
  return new EbookConvert(options);
};

function EbookConvert(options){
  this.source = options.source;
  this.target = options.target;
  var arguments = [this.source, this.target];

  if (options.arguments){
    for (var i=0; i<options.arguments.length; i++){
      arguments = arguments.concat(options.arguments[i]);
    }
  }

  var ee = new EventEmitter;
  var convert = spawn('ebook-convert', arguments);

  convert.stdout.on('data', function(data){
    ee.emit('data', data);
  });

  convert.on('close', function(code){
    ee.emit('end', code);
  });

  return ee;
};
