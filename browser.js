'use strict'

const { AbortController, AbortSignal } =
  typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : /* otherwise */ undefined

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports.default = AbortController
