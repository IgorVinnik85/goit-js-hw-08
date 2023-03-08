import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  console.log(data.seconds);
  localStorage.setItem('LOCALSTORAGE_KEY', `${data.seconds}`);
}

// player.on('volumechange', volumeChange);

// function volumeChange(data) {
//   console.log(data.volume);
//   localStorage.setItem('LOCALSTORAGE_VOLUME', `${data.volume}`);
// }

player.setCurrentTime(localStorage.getItem('LOCALSTORAGE_KEY'));
// player.setVolume(localStorage.getItem('LOCALSTORAGE_VOLUME'));
