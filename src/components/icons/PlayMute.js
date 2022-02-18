// компонент - иконка включения/выключения звука у видео/аудио
// вывод блока, прослушка и обработчик событий
// аргумент mediaContainer - это должен быть контейнер,
// в котором находится аудио/видео
// аргумент componentSelector - класс коммпонента/иконки

import $ from 'jquery'
global.jQuery = $;
global.$ = $;

// import {
//   DomListener
// } from '@/core/DomListener';

export class PlayMute {
  constructor(mediaContainer, componentClassName) {
    // super(componentSelector, ['click']) // !!!
    this.$mediaContainer = $('.' + mediaContainer)
    this.className = componentClassName
    // this.componentSelector = '.' + componentClassName
  }

  toHtml() {
    return `<div class="${this.className}"></div>`
  }

  clickHandler($root) {
    const $content = $root.find('video')
    if ($content.prop('muted')) {
      $content.prop('muted', false)
      $('.' + this.className).addClass('play-mute--on')
    } else {
      $content.prop('muted', true)
      $('.' + this.className).removeClass('play-mute--on')
    }
  }

  onClick() {
    console.log('onClick')
    this.clickHandler(this.$mediaContainer)
  }

  show() {
    const ratio = $(window).width() / $(window).height()
    // изменение при ресайзе
    if (ratio > 16 / 9) { // не меняется при ресайзе
      this.$mediaContainer.append(this.toHtml())
      this.onClick = this.onClick.bind(this) // привязывание this ВАЖНО!!!
      $('.' + this.className).on('click', this.onClick)
    }
  }
}
