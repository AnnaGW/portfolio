import $ from 'jquery'
global.jQuery = $;
global.$ = $;

import {
  capitalize
} from '@core/utils'

export class DomListener {
  constructor(selector, listeners = []) {
    this.$root = $('.play-mute')
    if (!this.$root) {
      throw new Error('No $root provided for DomListener')
    }
    this.listeners = listeners
    this.rootSelector = selector
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const compName = this.name || ''
        throw new Error(
          `Method ${method} is not implemented in ${compName} Component`
        )
      }
      this[method] = this[method].bind(this)
      this.$root.css({
        background: 'red'
      })
      this.$root.on(listener, this[method])
    });
  }

  removeDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const compName = this.name || ''
        throw new Error(
          `Method ${method} is not implemented in ${compName} Component`
        )
      }
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
