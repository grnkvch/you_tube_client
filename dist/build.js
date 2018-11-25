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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/KeybordControl.js":
/*!**********************************!*\
  !*** ./public/KeybordControl.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KeybordControl; });\nclass KeybordControl {\r\n  constructor (controlledObject, optionObj) {\r\n    this.controlledObject = controlledObject;\r\n    this.optionObj = optionObj;\r\n    document.addEventListener('keyup', (event)=>this.keybordControl(event));\r\n  }\r\n  keybordControl(event) {\r\n    const key = event.keyCode;\r\n    if(this.optionObj[key]) this.optionObj[key].apply(this.controlledObject);\r\n    }\r\n  }\n\n//# sourceURL=webpack:///./public/KeybordControl.js?");

/***/ }),

/***/ "./public/SearchLine.js":
/*!******************************!*\
  !*** ./public/SearchLine.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchLine; });\nclass SearchLine {\r\n  constructor() {\r\n    this.inputElement = null;\r\n    this.searchForm = null;\r\n  }\r\n\r\n  render(selector) {\r\n    const header = document.createElement('header');\r\n    header.innerHTML = `<form class=\"search-form\">\r\n    <input class =\"search-form__input\" autofocus placeholder=\"Search\">\r\n    <button class =\"search-form__button\">RUN</button>\r\n    </form>`;\r\n    this.searchForm = header.querySelector('.search-form');\r\n    this.inputElement = header.querySelector('.search-form__input');\r\n    document.querySelector(selector).appendChild(header);\r\n  }\r\n\r\n  getValue() {\r\n    return this.inputElement.value;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./public/SearchLine.js?");

/***/ }),

/***/ "./public/Slider.js":
/*!**************************!*\
  !*** ./public/Slider.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nclass Slider {\r\n\r\n  constructor(outerSearchMethod) {\r\n    this.searchMethod = outerSearchMethod.search;\r\n    this.collection = [];\r\n    this.mainSection = document.createElement('main');\r\n    this.mainSection.classList.add('main-content');\r\n    this.mainSection.innerHTML = `<section class=\"slide-bar\">\r\n                                  <div class=\"slide-bar__slide-wrapper\">\r\n\r\n                                  </div>\r\n                                  </section>\r\n                                  <nav class=\"pagination\">\r\n                                    <i class=\"pagination__arrow-left pagination__icon icon\" ></i>\r\n                                    <div class=\"pagination__dot-container\">\r\n                                      <div class=\"pagination__dot-wrapper\">\r\n\r\n                                      </div>\r\n                                    </div>\r\n                                    <i class=\"pagination__arrow-right pagination__icon icon\"></i>\r\n                                  </nav>`;\r\n    this.slideBar = this.mainSection.querySelector(\".slide-bar__slide-wrapper\");\r\n    this.pageBar = this.mainSection.querySelector(\".pagination__dot-wrapper\");\r\n    this.slidesPerPageCount = null;\r\n    this.pageCount = null;\r\n    this.currentSlide = null;\r\n    this.currentPage = null;      \r\n    this.pageBarLeftLim = null;\r\n    this.pageBarRightLim = null;\r\n    this.onLoading = null;            \r\n  }\r\n\r\n  getCollection(data) {\r\n    let length = data.length;\r\n    for (let i = 0; i < length; i++) {\r\n      let newItem = this.addItem(data[i]);\r\n      this.slideBar.appendChild(newItem);\r\n      this.collection.push(newItem);\r\n    }\r\n    if (!this.currentSlide) {\r\n      document.querySelector(\"body\").appendChild(this.mainSection);\r\n      this.currentSlide = 1;\r\n      this.pagination();\r\n    }\r\n    this.pageCount = Math.ceil(this.collection.length/this.slidesPerPageCount);\r\n  }\r\n\r\n  getslideSPerPageCount() {\r\n    let slideBarWidth = this.slideBar.clientWidth;\r\n    switch (slideBarWidth) {\r\n      case 960:\r\n      return 4;\r\n    case 710:\r\n      return 3;\r\n    case 460:\r\n      return 2;\r\n    default:\r\n      return 1;\r\n    }\r\n  }\r\n\r\n  pagination(onResize){\r\n      if (this.slidesPerPageCount==this.getslideSPerPageCount() && onResize) return\r\n      else this.slidesPerPageCount=this.getslideSPerPageCount();\r\n      this.pageBar.innerHTML = '';\r\n      this.pageCount = Math.ceil(this.collection.length/this.slidesPerPageCount);\r\n      this.addPageDots(1, this.pageCount);\r\n    if (!this.currentPage && this.currentSlide != null) {\r\n      this.pageBar.querySelector(\":first-child\").classList.toggle(\"active\");\r\n      this.currentPage = 1;\r\n      this.pageBarLeftLim = 0;\r\n      this.pageBarRightLim = this.mainSection.querySelector(\".pagination__dot-container\").clientWidth-40;\r\n    } else {\r\n      this.currentPage = Math.floor((this.currentSlide-1)/(this.slidesPerPageCount))+1;\r\n      this.pageBar.querySelectorAll(\".pagination__dot\")[this.currentPage-1].classList.toggle(\"active\");\r\n      this.currentSlide = (this.currentPage-1)*this.slidesPerPageCount+1;\r\n      let currentPos = (this.currentSlide - 1)*250;\r\n      this.slideBar.style.transform = `translateX(-${currentPos}px)`;\r\n      this.setActivePagePos();\r\n    }\r\n  }\r\n\r\n  setActivePagePos(){\r\n    let pageBarWidth = this.mainSection.querySelector(\".pagination__dot-container\").clientWidth;\r\n      let currentPagePos = (this.currentPage-1)*40;\r\n      let midPos = pageBarWidth/2-20;\r\n      if (currentPagePos>this.pageBarRightLim || currentPagePos<this.pageBarLeftLim) {\r\n        this.pageBar.style.transform = `translateX(-${currentPagePos-midPos}px)`;\r\n        this.pageBarRightLim=currentPagePos+midPos;\r\n        this.pageBarLeftLim=currentPagePos-midPos;\r\n      }\r\n      if (currentPagePos<midPos-20) {\r\n        this.pageBar.style.transform = `translateX(0px)`;\r\n        this.pageBarLeftLim = 0;\r\n        this.pageBarRightLim = pageBarWidth-40;\r\n        }\r\n  }\r\n\r\n  addPageDots(start, end) {\r\n    for (let i = start; i <= end; i++) {\r\n      let newDot = document.createElement(\"i\");\r\n      newDot.classList.add(\"pagination__dot\");\r\n      newDot.innerText = i;\r\n      this.pageBar.appendChild(newDot);\r\n    }\r\n  }\r\n\r\n  pageRight(){\r\n    if (this.onLoading) return;\r\n    if(this.currentPage<(Math.ceil(this.collection.length/this.slidesPerPageCount))) this.switchPage(1);\r\n    if ((this.pageCount - this.currentPage) < (2*this.slidesPerPageCount)) this.preload();\r\n  }\r\n\r\n  pageLeft(){\r\n    if(this.currentSlide>1) this.switchPage(-1);\r\n  }\r\n\r\n  switchPage(direction){\r\n    let currentPos = (this.currentSlide - 1)*250;\r\n    this.slideBar.style.transform = `translateX(-${currentPos+direction*250*this.slidesPerPageCount}px)`;\r\n    this.currentSlide +=this.slidesPerPageCount*direction;\r\n    this.pageBar.querySelectorAll(\".pagination__dot\")[this.currentPage-1].classList.toggle(\"active\");\r\n    this.currentPage += direction;\r\n    this.pageBar.querySelectorAll(\".pagination__dot\")[this.currentPage-1].classList.toggle(\"active\");\r\n    this.setActivePagePos();\r\n  }\r\n\r\n  setPage(index){\r\n    this.currentSlide = this.slidesPerPageCount>1 ? index*this.slidesPerPageCount+1 : index*this.slidesPerPageCount+1;\r\n    this.pagination();\r\n    if ((this.pageCount - this.currentPage) < (2*this.slidesPerPageCount)) this.preload();\r\n  }\r\n\r\n  addItem(content) {\r\n    let slide = document.createElement('figure');\r\n    slide.classList.add('slide');\r\n    slide.innerHTML = `\r\n                      <a class=\"slide__title\" href=\"${content.url}\" target=\"_blank\">${content.title}</a>\r\n                      <div class=\"slide__img-wrapper\"><img class=\"slide__preview\" src=\"${content.thumbnailUrl}\" alt=\"\"></div>\r\n                      <span class=\"slide__author slide__details\"><i class=\"icon\"></i>${content.author}</span>\r\n                      <span class=\"slide__publication-date slide__details\"><i class=\"icon\"></i>${content.publishedAt.toLocaleDateString(\"ru-RU\")}</span>\r\n                      <span class=\"slide__view-rate slide__details\"><i class=\"icon\"></i>${content.viewCount}</span>\r\n                      <span class=\"slide__description slide__details\"><i class=\"icon\"></i>${content.description}</span>\r\n                      `\r\n    return slide;\r\n  }\r\n\r\n  clickHandler (clickEvent) {\r\n    let target = clickEvent.target;\r\n    if(target.classList[0] == 'pagination__arrow-right') this.pageRight();\r\n    if(target.classList[0] == 'pagination__arrow-left') this.pageLeft();\r\n    if(target.classList[0] == 'pagination__dot') this.setPage(parseInt(target.innerText)-1);\r\n  } \r\n\r\n  free(){\r\n    this.collection = [];\r\n    this.currentSlide = null;\r\n    this.currentPage = null;\r\n    this.slidesPerPageCount = null;\r\n    this.pageCount = null;    \r\n    this.pageBarLeftLim = null;\r\n    this.pageBarRightLim = null;  \r\n    this.mainSection.querySelector(\".slide-bar__slide-wrapper\").innerHTML = '';\r\n    this.mainSection.querySelector(\".pagination__dot-wrapper\").innerHTML = '';\r\n  }\r\n\r\n  preload() {\r\n    this.onLoading = true;\r\n    let oldPageCount = this.pageCount;\r\n    request.search()\r\n      .then((searchResultList)=>{\r\n        this.getCollection(searchResultList)\r\n        this.addPageDots(oldPageCount+1, this.pageCount);\r\n        this.onLoading = null;  \r\n        });\r\n  }\r\n}\n\n//# sourceURL=webpack:///./public/Slider.js?");

/***/ }),

/***/ "./public/Swiper.js":
/*!**************************!*\
  !*** ./public/Swiper.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Swiper; });\nclass Swiper {\r\n  constructor(controlledElement, onLeftMethod, onRightMethod, touchMoveElement) {\r\n  this.touchstartX = 0;\r\n  this.touchstartY = 0;\r\n  this.touchendX = 0;\r\n  this.touchendY = 0;\r\n  this.controlledElement = controlledElement;\r\n  this.onLeftMethod = onLeftMethod;\r\n  this.onRightMethod = onRightMethod;\r\n  this.touchMoveElement = touchMoveElement;\r\n  this.touch = null;\r\n  }\r\n\r\n  addSwipeListeners(touchArea) {\r\n    touchArea.addEventListener('mousedown', (event)=> {this.swipeStart(event)}, false);\r\n    touchArea.addEventListener('mouseup', (event)=> {this.swipeEnd(event)}, false);\r\n    touchArea.addEventListener('touchstart', (event)=> {this.swipeStart(event)}, false);\r\n    touchArea.addEventListener('touchend', (event)=> {this.swipeEnd(event)}, false);\r\n    touchArea.addEventListener('touchmove', (event)=> {this.moveElement(event)}, false);\r\n    touchArea.addEventListener('mousemove', (event)=> {this.moveElement(event)}, false);\r\n  }\r\n\r\n  swipeStart(event) {\r\n    this.touch = true;\r\n    this.touchstartX = event.screenX ? event.screenX : event.changedTouches[0].screenX;\r\n  }\r\n\r\n  swipeEnd(event) {\r\n    this.touchendX = event.screenX ? event.screenX : event.changedTouches[0].screenX;\r\n    this.touch = false;\r\n    this.touchMoveElement.style.cssText = ``;\r\n    this.swipeHandle();\r\n  }\r\n\r\n  moveElement(){\r\n    if (this.touch) {\r\n      let currentX = event.screenX ? event.screenX : event.changedTouches[0].screenX;\r\n      this.touchMoveElement.style.transition = \"all 0s\";\r\n      this.touchMoveElement.style.marginLeft=`${currentX - this.touchstartX}px`;\r\n    }\r\n  }\r\n\r\n  swipeHandle() {\r\n    if (this.touchendX > this.touchstartX) {\r\n      this.onLeftMethod.apply(this.controlledElement)\r\n    }\r\n    if (this.touchendX < this.touchstartX) {\r\n      this.onRightMethod.apply(this.controlledElement)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./public/Swiper.js?");

/***/ }),

/***/ "./public/YouTubeRequest.js":
/*!**********************************!*\
  !*** ./public/YouTubeRequest.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return YouTubeRequest; });\nclass YouTubeRequest {\r\n  constructor() {\r\n    this.resultCollection = null;\r\n    this.nextPageToken = null;\r\n  }\r\n\r\n  search(request) {\r\n    let requestUrl = null;\r\n    if (!request && this.nextPageToken) {\r\n      requestUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAC4vO7bJ2xG4KXEXSX6fRF4Oer5rk6Clc&type=video&part=snippet&maxResults=20&q=${request}&pageToken=${this.nextPageToken}`\r\n    } else requestUrl = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAC4vO7bJ2xG4KXEXSX6fRF4Oer5rk6Clc&type=video&part=snippet&maxResults=20&q=${request}`;\r\n    return fetch(requestUrl)\r\n       .then((response) =>response.json())\r\n         .then((data)=>{\r\n          this.nextPageToken = data.nextPageToken;\r\n          let idList = data.items.map((item)=>item.id.videoId).join();\r\n          return fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${idList}&key=AIzaSyAC4vO7bJ2xG4KXEXSX6fRF4Oer5rk6Clc`);\r\n         })\r\n         .then((response) =>response.json())\r\n         .then((data) => {\r\n           return this.parseResult(data);\r\n         });\r\n   }\r\n\r\n   parseResult(data) {\r\n    let resultsList = [];\r\n    let length = data.items.length;\r\n    for (let i=0; i<length; i++) {\r\n        let searchResult = data.items[i];\r\n        let item = {};\r\n        item.viewCount =  data.items[i].statistics.viewCount\r\n        item.title = searchResult.snippet.title;\r\n        item.author = searchResult.snippet.channelTitle;\r\n        item.thumbnailUrl = searchResult.snippet.thumbnails.medium.url;\r\n        item.publishedAt =new Date(Date.parse(searchResult.snippet.publishedAt));\r\n        item.description = searchResult.snippet.description;\r\n        item.url = `https://www.youtube.com/watch?v=${searchResult.id}`;\r\n        resultsList.push(item);\r\n    }\r\n    if (this.resultCollection) this.resultCollection.concat(resultsList)\r\n    else this.resultCollection = resultsList.slice();\r\n    return  this.resultCollection;\r\n}\r\n\r\n  free (){\r\n    this.resultCollection = null;\r\n    this.nextPageToken = null;\r\n  } \r\n}\n\n//# sourceURL=webpack:///./public/YouTubeRequest.js?");

/***/ }),

/***/ "./public/main.js":
/*!************************!*\
  !*** ./public/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchLine */ \"./public/SearchLine.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./public/Slider.js\");\n/* harmony import */ var _YouTubeRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YouTubeRequest */ \"./public/YouTubeRequest.js\");\n/* harmony import */ var _Swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Swiper */ \"./public/Swiper.js\");\n/* harmony import */ var _KeybordControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeybordControl */ \"./public/KeybordControl.js\");\n/* eslint-disable linebreak-style */\r\n/* eslint-disable no-multi-str */\r\n/* eslint-disable no-undef */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst request = new _YouTubeRequest__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst searchLine = new _SearchLine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst slider = new _Slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](request);\r\nconst swipe = new _Swiper__WEBPACK_IMPORTED_MODULE_3__[\"default\"](slider, slider.pageLeft, slider.pageRight, slider.slideBar);\r\nswipe.addSwipeListeners(slider.slideBar);\r\nconst keybordControl = new _KeybordControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"](slider,{\"37\":slider.pageLeft,\"39\":slider.pageRight});\r\n\r\nsearchLine.render('body');\r\nsearchLine.searchForm.addEventListener(\"submit\", \r\n                      (event)=>{ \r\n                        event.preventDefault();\r\n                        request.free();\r\n                        slider.free();\r\n                        request.search(searchLine.getValue())\r\n                                    .then((searchResultList)=>slider.getCollection(searchResultList))\r\n});\r\n\r\nwindow.addEventListener(\"resize\",()=> {\r\n  var timer\r\n  if (timer) clearTimeout(timer);\r\n  timer = setTimeout(()=>slider.pagination(true),60)\r\n});\r\ndocument.addEventListener(\"click\", (clickEvent)=>slider.clickHandler(clickEvent));\n\n//# sourceURL=webpack:///./public/main.js?");

/***/ })

/******/ });