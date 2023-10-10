import hellow_word from './hello.js';
import world_word from './world.js';
import css from './style.css';

document.querySelector('#root').innerHTML = `${hellow_word} ${world_word}`;
console.log('css', css);
