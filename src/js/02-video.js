import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
    console.log('saved ' + data.seconds);
  }, 1000),
);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (currentTime !== null) {
  player.setCurrentTime(Number(currentTime));
}
