import { base } from './index';
// import base from './base';
import { count } from './time';

if(base.open) {
	document.getElementById('show').innerHTML = `
		<a href = "signup.html"><h3>注册</h3></a>
	`
}
else {
	document.body.innerHTML = `<a href = "signup.html">Not Open</a>`
}

function myFunction() {
	let reVal = base.click();
	console.log('reVal:', reVal);
	return ;
}

console.log('msg:', base.msg);
console.log('click:', base.click);
console.log('myFunction:', myFunction);
console.log('* * *');

setInterval(() => console.log('- - -', count), 800);
