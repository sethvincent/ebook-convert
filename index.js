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

  var targetType = this.target.split(".").pop();
  
  if (targetType === 'pdf'){

  }

  var ee = new EventEmitter;
  var convert = spawn('ebook-convert', arguments);

  convert.stdout.on('data', function(data){
    ee.emit('data', data);
  });

  convert.stdout.on('error', function(err){
    ee.emit('error', err);
  });

  convert.on('message', function(res){
    ee.emit('message', res);
  });

  convert.on('disconnect', function(res){
    ee.emit('disconnect', res);
  });

  convert.on('exit', function(res){
    ee.emit('exit', res);
  });

  convert.on('close', function(code){
    ee.emit('close', code);
  });

  return ee;
};