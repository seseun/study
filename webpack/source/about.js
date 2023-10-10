import hellow_word from './hello.js';
import world_word from './world.js';
import css from './style.css';

document.querySelector('#root').innerHTML = `${world_word} ${hellow_word}`;
console.log('css', css);
