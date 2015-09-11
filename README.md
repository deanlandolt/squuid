# squuid

Semi-sequential universally unique identifiers

[![build status](https://travis-ci.org/deanlandolt/squuid.svg?branch=master)](https://travis-ci.org/deanlandolt/squuid)

```js
  // generate base64-lex-encoded v1 UUID
  var id = squuid() // 'Wjmi85Wy4UMVUHybSVnKU0--'

  // generate another
  var id2 = squuid() // 'Wjmi8LWy4UMVUHybSVnKU0--'

  // ids will be monotonically increasing per process
  id2 > id // true

  // you can pass 
  squuid({
    msecs: Date.now() + 100 // epoch time, defaults to `Date.now`
    // node: node id as array of 6 bytes (randomly generated if not provided)
    // clockseq: RFC clock sequence, number between 0 and 0x3fff
  })
```

TODO: `node-uuid` looks to be encoding the time bits in little-endian, which marginally decreases the monotonicity properties you want for optimal btree inserts.
