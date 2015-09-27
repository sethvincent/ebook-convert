var spawn = require('child_process').spawn
var EventEmitter = require('events').EventEmitter

module.exports = function ebookConvert (options, callback) {
  var args = [options.source, options.target]

  if (options.arguments) {
    for (var i = 0; i < options.arguments.length; i++) {
      args = args.concat(options.arguments[i])
    }
  }

  var ee = new EventEmitter()
  var convert = spawn('ebook-convert', args)

  convert.stdout.on('data', function (data) {
    ee.emit('data', data)
  })

  convert.stdout.on('error', function (err) {
    ee.emit('error', err)
  })

  convert.on('message', function (res) {
    ee.emit('message', res)
  })

  convert.on('disconnect', function (res) {
    ee.emit('disconnect', res)
  })

  convert.on('exit', function (res) {
    ee.emit('exit', res)
  })

  convert.on('close', function (code) {
    ee.emit('close', code)
  })

  return ee
}
