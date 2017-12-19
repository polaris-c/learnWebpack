import base from './base';

if(base.open) {
	document.body.innerHTML = `<h1>Welcome</h1>`;
}
else {
	document.body.innerHTML = `<h1>STOP</h1>`
}
