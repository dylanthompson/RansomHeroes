(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RansomHeroes"] = factory();
	else
		root["RansomHeroes"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/Canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images/silsam/sprite.json":
/*!***********************************!*\
  !*** ./images/silsam/sprite.json ***!
  \***********************************/
/*! exports provided: idle, default */
/***/ (function(module) {

eval("module.exports = {\"idle\":{\"start\":103,\"end\":117,\"center\":{\"x\":370,\"y\":425},\"prefix\":\"anim\",\"suffix\":\".gif\"}};\n\n//# sourceURL=webpack://RansomHeroes/./images/silsam/sprite.json?");

/***/ }),

/***/ "./js/Canvas.js":
/*!**********************!*\
  !*** ./js/Canvas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar Sprite_1 = __webpack_require__(/*! ./Sprite */ \"./js/Sprite.js\");\n\nvar Canvas = function () {\n  function Canvas(htmlCanvas) {\n    var _this = this;\n\n    this._htmlCanvas = htmlCanvas;\n    this._context = htmlCanvas.getContext(\"2d\");\n    this._sprites = new Array();\n    var spritePathService = new Sprite_1.SpritePathService();\n    var paths = spritePathService.getSpritePaths(\"silsam\", \"idle\");\n    var options = new Sprite_1.SpriteOptions();\n    options.imagePaths = paths;\n\n    this._sprites.push(new Sprite_1.Sprite(this._context, options));\n\n    var animationFrame = window.requestAnimationFrame(function () {\n      return _this.run();\n    });\n  }\n\n  Canvas.prototype.run = function () {\n    var _this = this;\n\n    this._sprites.forEach(function (item) {\n      item.update();\n    });\n\n    this._sprites.forEach(function (item) {\n      item.render();\n    });\n\n    window.requestAnimationFrame(function () {\n      return _this.run();\n    });\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;\nvar canvas = new Canvas(document.getElementsByTagName(\"canvas\")[0]);\n\n//# sourceURL=webpack://RansomHeroes/./js/Canvas.js?");

/***/ }),

/***/ "./js/CanvasElement.js":
/*!*****************************!*\
  !*** ./js/CanvasElement.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nvar CanvasElement = function () {\n  function CanvasElement(context) {\n    this._context = context;\n  }\n\n  return CanvasElement;\n}();\n\nexports.CanvasElement = CanvasElement;\n\n//# sourceURL=webpack://RansomHeroes/./js/CanvasElement.js?");

/***/ }),

/***/ "./js/Sprite.js":
/*!**********************!*\
  !*** ./js/Sprite.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __extends = this && this.__extends || function () {\n  var extendStatics = function (d, b) {\n    extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    };\n\n    return extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\n\nvar CanvasElement_1 = __webpack_require__(/*! ./CanvasElement */ \"./js/CanvasElement.js\");\n\nvar silSamData = __webpack_require__(/*! ../images/silsam/sprite.json */ \"./images/silsam/sprite.json\");\n\nvar Coordinate = function () {\n  function Coordinate() {}\n\n  return Coordinate;\n}();\n\nvar StateSpriteFrameData = function () {\n  function StateSpriteFrameData() {}\n\n  return StateSpriteFrameData;\n}();\n\nvar SpritePathService = function () {\n  function SpritePathService() {\n    this._entityInfo = {\n      \"silsam\": silSamData\n    };\n  }\n\n  SpritePathService.prototype.getSpritePaths = function (entityID, state) {\n    var stateInfo = this._entityInfo[\"silsam\"][\"idle\"];\n    var paths = new Array();\n\n    for (var i = stateInfo.start; i <= stateInfo.end; i++) {\n      paths.push(\"images/silsam/\" + stateInfo.prefix + i.toString() + stateInfo.suffix);\n    }\n\n    return paths;\n  };\n\n  return SpritePathService;\n}();\n\nexports.SpritePathService = SpritePathService;\n\nvar SpriteOptions = function () {\n  function SpriteOptions() {}\n\n  return SpriteOptions;\n}();\n\nexports.SpriteOptions = SpriteOptions;\n\nvar Sprite = function (_super) {\n  __extends(Sprite, _super);\n\n  function Sprite(context, options) {\n    var _this = _super.call(this, context) || this;\n\n    _this._images = new Array();\n\n    _this.loadImages(options.imagePaths);\n\n    _this._width = 60;\n    _this._height = 60;\n    _this._frameIndex = 0;\n    _this._tickCount = 0;\n    _this._ticksPerFrame = 6;\n    _this._loops = true;\n    return _this;\n  }\n\n  Sprite.prototype.loadImages = function (imagePaths) {\n    for (var _i = 0, imagePaths_1 = imagePaths; _i < imagePaths_1.length; _i++) {\n      var imagePath = imagePaths_1[_i];\n      var image = new Image();\n      image.src = imagePath;\n\n      this._images.push(image);\n    }\n  };\n\n  Sprite.prototype.update = function () {\n    this._tickCount++;\n\n    if (this._tickCount > this._ticksPerFrame) {\n      this._tickCount = 0;\n\n      if (this._frameIndex < this._images.length - 1) {\n        this._frameIndex += 1;\n      } else if (this._loops) {\n        this._frameIndex = 0;\n      }\n    }\n  };\n\n  Sprite.prototype.render = function () {\n    if (this._tickCount !== 1) {\n      return;\n    }\n\n    this._context.clearRect(0, 0, this._width, this._height);\n\n    this._context.drawImage(this._images[this._frameIndex], 100, 100);\n  };\n\n  ;\n  return Sprite;\n}(CanvasElement_1.CanvasElement);\n\nexports.Sprite = Sprite;\n\n//# sourceURL=webpack://RansomHeroes/./js/Sprite.js?");

/***/ })

/******/ });
});