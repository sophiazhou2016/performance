import '@babel/polyfill'
import './style/index.scss';
console.log('hello world!！！！！！');

document.querySelector('#app').style.color='red';

//index.js
import Avatar from './images/s-copy.png'

let img = new Image();

img.src = Avatar;

document.body.appendChild(img);

//index.js

let input = document.createElement('input');
document.body.appendChild(input);

const test = (n)=> {
    return new Promise(function (resolve) {
    	setTimeout(()=>{
    		resolve([1,2,3,4].map(v=>v * v ))
    	},n*1000)
    }).then(res=>{
    	console.log(res);
    })
}

console.log(test)
