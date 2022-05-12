// компонент для видео-фона
// принимает класс контейнера - body и массив адресов видео-файлов
// выводит первый вариант фона, ссылку на канал автора, кнопки переключения фона

import $ from 'jquery'
global.jQuery = $;
global.$ = $;

import {
  PlayMute
} from '@/index/components/icons/PlayMute';

export class VideoBg {
  constructor(rootClassName, bgNames = []) {
    this.$root = $('.' + rootClassName)
    this.bgNames = bgNames
  }
  insertVideo(videoName) {
    return `
      <video class="video-bg" autoplay muted loop>
        <source src="${videoName}" type="video/mp4">
      </video>
      <p class="video-bg__author">
        автор видео Анастасия Иванова 
        https://www.youtube.com/channel/UCM4r3O2QKSCwLvMZ97JIJPA
      </p>`
  }
  toHtml() {
    let video = ''
    const ratio = $(window).width() / $(window).height()
    if (ratio > 16 / 9) {
      video = this.insertVideo(this.bgNames[0])
    }
    return `<div class="video-bg__container">` +
      video +
      `</div>`
  }

  render() {
    // изменение при ресайзе?
    this.$root.prepend(this.toHtml())

    const audioIcon = new PlayMute('video-bg__container', 'play-mute')
    audioIcon.show()
  }
}
