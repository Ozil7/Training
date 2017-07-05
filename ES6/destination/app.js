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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"jquery\"");


const totalFilesFolderList = new Array();

function list(name, parentNode) {
	this.name = name;
	this.parentNode = parentNode;
	this.childNodes = new Array();
	this.pathname = "";
}

const lists = new Array();
lists.push(new list("Root", null));
lists[0].pathname = "/Root";

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + lists[0].name + '</li>');

__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list li").click(function () {
	currentNodeTxt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a(this).html();
	for (let j = 0; j < lists.length; j++) {
		if (lists[j].name === currentNodeTxt) currentNode = lists[j];
	}
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("ul").empty();
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#pathName").empty();

	document.getElementById("pathName").innerHTML = currentNode.pathname;
	for (let index = 0; index < currentNode.childNodes.length; index++) {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + currentNode.childNodes[index] + '</li>');
	}
});

class Folder {
	constructor(folderName) {
		totalFilesFolderList.push(folderName);
		lists.push(new list(folderName, currentNode));

		for (let i = 0; i < lists.length; i++) {
			if (lists[i].name == folderName) lists[i].pathname = lists[i].parentNode.pathname + "/" + folderName;
		}

		for (let i = 0; i < lists.length; i++) {
			if (lists[i].name == currentNodeTxt) lists[i].childNodes.push(folderName);
		}

		updateList();
		clickElement();
	}
}

class File {
	constructor(fileName) {
		totalFilesFolderList.push(fileName);
		for (var i = 0; i < lists.length; i++) {
			if (lists[i].name == currentNodeTxt) lists[i].childNodes.push(fileName);
		}

		updateList();
		clickElement();
	}
}

function clickSearchList() {
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#search_list li").click(function () {
		currentPathTxt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a(this).html();

		for (let j = 0; j < lists.length; j++) {
			if (lists[j].pathname == currentPathTxt) currentNode = lists[j].parentNode;
		}

		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("ul").empty();
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#pathName").empty();

		document.getElementById("pathName").innerHTML = currentNode.pathname;

		for (var index = 0; index < currentNode.childNodes.length; index++) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + currentNode.childNodes[index] + '</li>');
		}
	});
	clickElement();
}

function updateList() {
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("ul").empty();
	for (var index = 0; index < currentNode.childNodes.length; index++) {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + currentNode.childNodes[index] + '</li>');
	}
}

function clickElement() {
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list li").click(function () {
		currentNodeTxt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a(this).html();

		for (var j = 0; j < lists.length; j++) {
			if (lists[j].name == currentNodeTxt) currentNode = lists[j];
		}

		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("ul").empty();
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#pathName").empty();

		document.getElementById("pathName").innerHTML = currentNode.pathname;

		for (var index = 0; index < currentNode.childNodes.length; index++) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + currentNode.childNodes[index] + '</li>');
		}
	});
}

function goBack() {
	var node = currentNode;
	__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("ul").empty();

	if (currentNode.name == "Root") {
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
		__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + "Root" + '</li>');
	} else {
		currentNode = node.parentNode;
		for (var index = 0; index < currentNode.childNodes.length; index++) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").show('fast');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#folders_list").append('<li>' + currentNode.childNodes[index] + '</li>');
		}
	}

	clickElement();
}

function checkFileValidity(fileName, type) {
	var flag = 0;
	var regex = /^[a-z0-9]+$/;
	debugger;
	if (regex.test(fileName.toLowerCase()) && regex.test(type.toLowerCase())) flag = 1;else flag = 0;

	for (var i = 0; i < totalFilesFolderList.length; i++) {
		if (totalFilesFolderList[i] == fileName) flag = 0;
	}
	return flag;
}

function checkFolderValidity(folderName) {
	var flag = 0;
	var regex = /^[a-z0-9]+$/;
	if (regex.test(folderName.toLowerCase())) flag = 1;else flag = 0;

	for (var i = 0; i < totalFilesFolderList.length; i++) {
		if (totalFilesFolderList[i] == folderName) flag = 0;
	}
	return flag;
}

function searchFile() {
	var searchInput = document.getElementById("searchText").value;

	for (var i = 0; i < lists.length; i++) {
		if (lists[i].pathname.includes(searchInput)) {
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#search_list").show('fast');
			__WEBPACK_IMPORTED_MODULE_0_jquery___default.a("#search_list").append('<li>' + lists[i].pathname + '</li>');
		}
	}
	clickSearchList();
}

function checkInput() {
	var fname = document.getElementById("fname").value;
	var check;

	if (fname.split(".").length == 1) {
		check = checkFolderValidity(fname);
		if (check == 1) var obj = new Folder(fname);else alert("Please enter a valid name");
	} else if (fname.split(".").length == 2) {
		check = checkFileValidity(fname.split(".")[0], fname.split(".")[1]);
		if (check == 1) var obj = new File(fname);else alert("Please enter a valid name");
	} else alert("Please enter a valid name");
}

var create = document.getElementById("createButton");
create.addEventListener("click", function (event) {
	event.preventDefault();
});

create.addEventListener("click", checkInput);

var back = document.getElementById("backButton");
back.addEventListener("click", function (event) {
	event.preventDefault();
});

back.addEventListener("click", goBack);

var search = document.getElementById("searchButton");
search.addEventListener("click", function (event) {
	event.preventDefault();
});

search.addEventListener("click", searchFile);

/***/ })
/******/ ]);