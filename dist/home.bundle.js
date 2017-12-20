/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({	
	msg: 'Hello World!',

	open: true,

	objClick: function() {
		console.log('Obj.clickFunction');
		return 'Obj.clickFunction';
	}
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exp_func_js__ = __webpack_require__(3);
// import { base } from './index';




if(__WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].open) {
	document.getElementById('show').innerHTML = `
		<a href = "signup.html"><h3>注册</h3></a>
	`
}
else {
	document.getElementById('show').innerHTML = `<a href = "signup.html">Not Open</a>`
}

function myFunction() {
	let objClickVal = __WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].objClick();
	console.log('objClickVal:', objClickVal);
	return ;
}

const innerFunction = function() {
    console.log('Welcome!!!');
}

function changeOpen() {
	__WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].open = !__WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].open;
	console.log('changeOpen!!!');
	console.log('* * *');
	return ;
}
document.getElementById('changeOpenButton').addEventListener("click", changeOpen);

document.getElementById('myFunctionButton').addEventListener("click", myFunction);
document.getElementById('ExpClickButton').addEventListener("click", __WEBPACK_IMPORTED_MODULE_2__exp_func_js__["a" /* expClick */]);
document.getElementById('innerFunctionButton').addEventListener("click", innerFunction);


console.log('base.msg:', __WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].msg);
console.log('base.open:', __WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].open);
console.log('base.objClick:', __WEBPACK_IMPORTED_MODULE_0__base_js__["a" /* default */].objClick);
console.log('* * *');

console.log('expFunc:', __WEBPACK_IMPORTED_MODULE_2__exp_func_js__["b" /* expFunc */]);
console.log('expClick:', __WEBPACK_IMPORTED_MODULE_2__exp_func_js__["a" /* expClick */]);
console.log('* * *');

console.log('myFunction:', myFunction);
console.log('innerFunction:', innerFunction);
console.log('* * *');

setInterval(() => console.log('- - -', __WEBPACK_IMPORTED_MODULE_1__time_js__["a" /* count */]), 9000);

// JS 中的事件绑定、事件监听与事件委托: http://blog.csdn.net/zghekuiwu/article/details/53783424

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return count; });
let count = 1;

setInterval(() => count++, 100)



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return expClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expFunc; });
function expClick() {
	console.log('Exp.clickFunction');
	return ;
}

const expFunc = 'exp-func is OK!';



/***/ })
/******/ ]);