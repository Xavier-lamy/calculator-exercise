import style from './main.scss';
import logo from './images/logo.svg';
import image from './images/image.png';

console.log('test webpack');
console.log('test 1');

var img = document.createElement("img");
img.src = logo;
var body = document.body;
body.appendChild(img);