var assert = require('assert')
var exec = require('child_process').exec

var exists = require('command-exists')
var toFlags = require('to-flags')
var xtend = require('xtend')

module.exports = function ebookConvert (args, options, callback) {
  assert.equal(typeof args, 'object', 'args object is required')
  assert.equal(typeof args.input, 'string', 'string filepath of input file is required')
  assert.equal(typeof args.output, 'string', 'string filepath of output file is required')

  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  var input = args.input
  var output = args.output
  delete args.input
  delete args.output

  exists('ebook-convert', function (err, ok) {
    if (err || !ok) {
      var msg = 'Error: ebook-convert command must be installed as part of calibre. Find instructions at http://calibre-ebook.com'
      return callback(new Error(msg))
    }
    args = toFlags(args).join(' ')
    var cmd = 'ebook-convert ' + input + ' ' + output + ' ' + args
    exec(cmd, options, callback)
  })
}
