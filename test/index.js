var b64lex = require('base64-lex')
var test = require('tape')
var squuid = require('../')

test('generate', function (t) {

  var ids = []
  for (var i = 0; i < 1000; i++) {
    ids.push(squuid())
  }

  setTimeout(function () {
    for (var i = 0; i < 1000; i++) {
      ids.push(squuid())
    }

    // ensure process-bound monotonicity
    for (i = 1; i < 2000; i++) {
      t.ok(ids[i] > ids[i - 1], 'monotonicity')
    }

    t.ok(ids.map(b64lex.decode), 'should decode cleanly')

    t.end()
  }, 2000)
})
