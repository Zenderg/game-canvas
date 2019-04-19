import '../scss/style.scss'
import {activeKeys, markKey} from './helpers';
import init from './initCanvas';
import client from './client';

window.onload = () => {
  init();
  client();
  document.addEventListener("keydown", (e) => {
    const key = +e.keyCode;
    markKey(key, true);
  });
  document.addEventListener("keyup", (e) => {
    const key = +e.keyCode;
    markKey(key, false);
  })
};

