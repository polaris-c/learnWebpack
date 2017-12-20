// import { base } from './index';
import base from './base.js';
import { count } from './time.js';
import { expClick, expFunc } from './exp-func.js';

if(base.open) {
	document.getElementById('show').innerHTML = `
		<a href = "signup.html"><h3>注册</h3></a>
	`
}
else {
	document.getElementById('show').innerHTML = `<a href = "signup.html">Not Open</a>`
}

function myFunction() {
	let objClickVal = base.objClick();
	console.log('objClickVal:', objClickVal);
	return ;
}

const innerFunction = function() {
    console.log('Welcome!!!');
}

function changeOpen() {
	base.open = !base.open;
	console.log('changeOpen!!!');
	console.log('* * *');
	return ;
}
document.getElementById('changeOpenButton').addEventListener("click", changeOpen);

document.getElementById('myFunctionButton').addEventListener("click", myFunction);
document.getElementById('ExpClickButton').addEventListener("click", expClick);
document.getElementById('innerFunctionButton').addEventListener("click", innerFunction);


console.log('base.msg:', base.msg);
console.log('base.open:', base.open);
console.log('base.objClick:', base.objClick);
console.log('* * *');

console.log('expFunc:', expFunc);
console.log('expClick:', expClick);
console.log('* * *');

console.log('myFunction:', myFunction);
console.log('innerFunction:', innerFunction);
console.log('* * *');

setInterval(() => console.log('- - -', count), 9000);

// JS 中的事件绑定、事件监听与事件委托: http://blog.csdn.net/zghekuiwu/article/details/53783424