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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/RHGame.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./images sync recursive ^\\.\\/.*\\/sprite\\.json$":
/*!********************************************!*\
  !*** ./images sync ^\.\/.*\/sprite\.json$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./silversamurai/sprite.json\": \"./images/silversamurai/sprite.json\",\n\t\"./zangief/sprite.json\": \"./images/zangief/sprite.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync recursive ^\\\\.\\\\/.*\\\\/sprite\\\\.json$\";\n\n//# sourceURL=webpack://RansomHeroes/./images_sync_^\\.\\/.*\\/sprite\\.json$?");

/***/ }),

/***/ "./images/silversamurai/sprite.json":
/*!******************************************!*\
  !*** ./images/silversamurai/sprite.json ***!
  \******************************************/
/*! exports provided: config, states, default */
/***/ (function(module) {

eval("module.exports = {\"config\":{\"prefix\":\"Silver Samurai_\",\"suffix\":\".png\",\"pad0\":4,\"axis\":{\"x\":400,\"y\":400}},\"states\":{\"idle\":{\"start\":102,\"end\":116},\"air-idle\":{\"start\":170,\"end\":171}}};\n\n//# sourceURL=webpack://RansomHeroes/./images/silversamurai/sprite.json?");

/***/ }),

/***/ "./images/zangief/sprite.json":
/*!************************************!*\
  !*** ./images/zangief/sprite.json ***!
  \************************************/
/*! exports provided: config, states, default */
/***/ (function(module) {

eval("module.exports = {\"config\":{\"prefix\":\"Zangief_\",\"suffix\":\".png\",\"pad0\":4,\"axis\":{\"x\":400,\"y\":400}},\"states\":{\"idle\":{\"start\":17,\"end\":36},\"air-idle\":{\"start\":65,\"end\":65},\"lariat\":{\"start\":2,\"end\":7}}};\n\n//# sourceURL=webpack://RansomHeroes/./images/zangief/sprite.json?");

/***/ }),

/***/ "./js/Canvas.js":
/*!**********************!*\
  !*** ./js/Canvas.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Canvas = function () {\n  function Canvas(htmlCanvas) {\n    this._htmlCanvas = htmlCanvas;\n    this._context = htmlCanvas.getContext(\"2d\");\n  }\n\n  Object.defineProperty(Canvas.prototype, \"context\", {\n    get: function () {\n      return this._context;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;\n\n//# sourceURL=webpack://RansomHeroes/./js/Canvas.js?");

/***/ }),

/***/ "./js/Entity.js":
/*!**********************!*\
  !*** ./js/Entity.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Entity = function () {\n  function Entity(entityID, x, y) {\n    this._entityID = entityID;\n    this._state = \"idle\";\n    this._x = x;\n    this._y = y;\n  }\n\n  Object.defineProperty(Entity.prototype, \"x\", {\n    get: function () {\n      return this._x;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"y\", {\n    get: function () {\n      return this._y;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"entityID\", {\n    get: function () {\n      return this._entityID;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"state\", {\n    get: function () {\n      return this._state;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  Entity.prototype.update = function (time) {\n    return true;\n  };\n\n  return Entity;\n}();\n\nexports.Entity = Entity;\n\n//# sourceURL=webpack://RansomHeroes/./js/Entity.js?");

/***/ }),

/***/ "./js/RHGame.js":
/*!**********************!*\
  !*** ./js/RHGame.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar RHView_1 = __webpack_require__(/*! ./RHView */ \"./js/RHView.js\");\n\nvar RHModel_1 = __webpack_require__(/*! ./RHModel */ \"./js/RHModel.js\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./js/Canvas.js\");\n\nvar Entity_1 = __webpack_require__(/*! ./Entity */ \"./js/Entity.js\");\n\nvar RHGame = function () {\n  function RHGame(canvas) {\n    this._model = new RHModel_1.RHModel();\n    this._view = new RHView_1.RHView(canvas);\n    var entities = [\"silversamurai\", \"zangief\"];\n    var states = [\"idle\"];\n\n    for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {\n      var entity = entities_1[_i];\n      var randX = Math.floor(Math.random() * 200) + 50;\n      var randY = Math.floor(Math.random() * 200) + 50;\n      var curEntity = new Entity_1.Entity(entity, randX, randY);\n\n      this._model.addEntity(curEntity);\n\n      for (var _a = 0, states_1 = states; _a < states_1.length; _a++) {\n        var state = states_1[_a];\n\n        this._view.addEntityView(entity, state);\n      }\n    }\n  }\n\n  RHGame.prototype.run = function () {\n    var _this = this;\n\n    this._model.update();\n\n    this._view.draw(this._model);\n\n    window.requestAnimationFrame(function () {\n      return _this.run();\n    });\n  };\n\n  return RHGame;\n}();\n\nexports.RHGame = RHGame;\nvar canvas = new Canvas_1.Canvas(document.getElementsByTagName(\"canvas\")[0]);\nvar game = new RHGame(canvas);\nvar animationFrame = window.requestAnimationFrame(function () {\n  return game.run();\n});\n\n//# sourceURL=webpack://RansomHeroes/./js/RHGame.js?");

/***/ }),

/***/ "./js/RHModel.js":
/*!***********************!*\
  !*** ./js/RHModel.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar RHModel = function () {\n  function RHModel() {\n    this._time = 0;\n    this._entities = new Array();\n  }\n\n  Object.defineProperty(RHModel.prototype, \"entities\", {\n    get: function () {\n      return this._entities.slice();\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  RHModel.prototype.addEntity = function (entity) {\n    this._entities.push(entity);\n  };\n\n  RHModel.prototype.update = function () {\n    this._time += 1;\n\n    for (var _i = 0, _a = this._entities; _i < _a.length; _i++) {\n      var entity = _a[_i];\n      entity.update(this._time);\n    }\n  };\n\n  return RHModel;\n}();\n\nexports.RHModel = RHModel;\n\n//# sourceURL=webpack://RansomHeroes/./js/RHModel.js?");

/***/ }),

/***/ "./js/RHView.js":
/*!**********************!*\
  !*** ./js/RHView.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Sprite_1 = __webpack_require__(/*! ./Sprite */ \"./js/Sprite.js\");\n\nvar SpritePathService_1 = __webpack_require__(/*! ./services/SpritePathService */ \"./js/services/SpritePathService.js\");\n\nvar RHView = function () {\n  function RHView(canvas) {\n    this._canvas = canvas;\n    this._entitySprites = new Map();\n  }\n\n  RHView.prototype.addEntityView = function (entityID, state) {\n    var spritePathService = new SpritePathService_1.SpritePathService();\n    var options = new Sprite_1.SpriteOptions();\n    options.imagePaths = spritePathService.getStateSpritePaths(entityID, state);\n    var sprite = new Sprite_1.Sprite(options);\n\n    if (!this._entitySprites.has(entityID)) {\n      this._entitySprites.set(entityID, new Map());\n    }\n\n    this._entitySprites.get(entityID).set(state, sprite);\n  };\n\n  RHView.prototype.drawEntity = function (entity) {\n    var sprite = this._entitySprites.get(entity.entityID).get(entity.state);\n\n    sprite.update();\n    sprite.render(this._canvas.context, entity.x, entity.y);\n  };\n\n  RHView.prototype.draw = function (model) {\n    this._canvas.context.clearRect(0, 0, this._canvas.context.canvas.width, this._canvas.context.canvas.height);\n\n    for (var _i = 0, _a = model.entities; _i < _a.length; _i++) {\n      var entity = _a[_i];\n      this.drawEntity(entity);\n    }\n  };\n\n  return RHView;\n}();\n\nexports.RHView = RHView;\n\n//# sourceURL=webpack://RansomHeroes/./js/RHView.js?");

/***/ }),

/***/ "./js/Sprite.js":
/*!**********************!*\
  !*** ./js/Sprite.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar SpriteOptions = function () {\n  function SpriteOptions() {}\n\n  return SpriteOptions;\n}();\n\nexports.SpriteOptions = SpriteOptions;\n\nvar Sprite = function () {\n  function Sprite(options) {\n    this._images = new Array();\n    this.loadImages(options.imagePaths);\n    this._width = 60;\n    this._height = 60;\n    this._frameIndex = 0;\n    this._tickCount = 0;\n    this._ticksPerFrame = 6;\n    this._loops = true;\n  }\n\n  Sprite.prototype.loadImages = function (imagePaths) {\n    for (var _i = 0, imagePaths_1 = imagePaths; _i < imagePaths_1.length; _i++) {\n      var imagePath = imagePaths_1[_i];\n      var image = new Image();\n      image.src = imagePath;\n\n      this._images.push(image);\n    }\n  };\n\n  Sprite.prototype.update = function () {\n    this._tickCount++;\n\n    if (this._tickCount > this._ticksPerFrame) {\n      this._tickCount = 0;\n\n      if (this._frameIndex < this._images.length - 1) {\n        this._frameIndex += 1;\n      } else if (this._loops) {\n        this._frameIndex = 0;\n      }\n    }\n  };\n\n  Sprite.prototype.render = function (context, x, y) {\n    context.drawImage(this._images[this._frameIndex], x, y);\n  };\n\n  ;\n  return Sprite;\n}();\n\nexports.Sprite = Sprite;\n\n//# sourceURL=webpack://RansomHeroes/./js/Sprite.js?");

/***/ }),

/***/ "./js/services/SpritePathService.js":
/*!******************************************!*\
  !*** ./js/services/SpritePathService.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar spriteConfigs;\nvar entityIDs = [\"zangief\", \"silversamurai\"];\n\nvar Coordinate = function () {\n  function Coordinate() {}\n\n  return Coordinate;\n}();\n\nvar SpriteSetConfig = function () {\n  function SpriteSetConfig() {\n    this.axis = null;\n    this.prefix = null;\n    this.suffix = null;\n    this.pad0 = null;\n  }\n\n  return SpriteSetConfig;\n}();\n\nvar StateSpriteFrameData = function () {\n  function StateSpriteFrameData() {\n    this.start = null;\n    this.end = null;\n  }\n\n  return StateSpriteFrameData;\n}();\n\nvar StatesSpriteData = function () {\n  function StatesSpriteData() {}\n\n  return StatesSpriteData;\n}();\n\n;\n\nvar EntitiesSpriteSetData = function () {\n  function EntitiesSpriteSetData() {}\n\n  return EntitiesSpriteSetData;\n}();\n\n;\n\nvar EntitySpriteSetData = function () {\n  function EntitySpriteSetData() {}\n\n  return EntitySpriteSetData;\n}();\n\nvar SpritePathService = function () {\n  function SpritePathService() {\n    this._entityInfo = new EntitiesSpriteSetData();\n\n    for (var _i = 0, entityIDs_1 = entityIDs; _i < entityIDs_1.length; _i++) {\n      var entityID = entityIDs_1[_i];\n      this._entityInfo[entityID] = __webpack_require__(\"./images sync recursive ^\\\\.\\\\/.*\\\\/sprite\\\\.json$\")(\"./\" + entityID + \"/sprite.json\");\n    }\n  }\n\n  SpritePathService.prototype.getEntitySpritePaths = function (entityID) {\n    return this._entityInfo[entityID];\n  };\n\n  SpritePathService.prototype.getStateSpritePaths = function (entityID, state) {\n    var entitySpriteData = this.getEntitySpritePaths(entityID);\n    var stateInfo = entitySpriteData.states[state];\n    var paths = new Array();\n\n    for (var i = stateInfo.start; i <= stateInfo.end; i++) {\n      paths.push(\"images/\" + entityID + \"/\" + (entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix));\n    }\n\n    return paths;\n  };\n\n  return SpritePathService;\n}();\n\nexports.SpritePathService = SpritePathService;\n\n//# sourceURL=webpack://RansomHeroes/./js/services/SpritePathService.js?");

/***/ })

/******/ });
});