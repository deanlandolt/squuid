var b64lex = require('base64-lex').encode
var uuid = require('node-uuid')

module.exports = function squiid(options) {
  return b64lex(uuid.v1(options, new Buffer(16)))
}
