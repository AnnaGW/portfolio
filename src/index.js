import {
  VideoBg
} from '@/components/video-bg/VideoBg';

import './scss/index.scss'
import $ from 'jquery'
global.jQuery = $;
global.$ = $;

console.log('WELLCOME');

const videoBackground = new VideoBg(
  'first',
  ['images/winter_forest_30s.mp4', 'images/summer-forest_26s.mp4']
)
videoBackground.render()
