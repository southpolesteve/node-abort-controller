const { EventEmitter } = require('events')

class AbortSignal {
  constructor() {
    this.eventEmitter = new EventEmitter()
    this.aborted = false
  }
  toString() {
    return '[object AbortSignal]'
  }
  get [Symbol.toStringTag]() {
    return 'AbortSignal'
  }
  removeEventListener(name, handler) {
    this.eventEmitter.removeListener(name, handler)
  }
  addEventListener(name, handler) {
    this.eventEmitter.on(name, handler)
  }
}
class AbortController {
  constructor() {
    this.signal = new AbortSignal()
  }
  abort() {
    this.signal.aborted = true
    this.signal.eventEmitter.emit('abort')
  }
  toString() {
    return '[object AbortController]'
  }
  get [Symbol.toStringTag]() {
    return 'AbortController'
  }
}

module.exports = AbortController
module.exports.default = AbortController
