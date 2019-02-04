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

eval("var map = {\n\t\"./silsam/sprite.json\": \"./images/silsam/sprite.json\",\n\t\"./silversamurai/sprite.json\": \"./images/silversamurai/sprite.json\",\n\t\"./zangief/sprite.json\": \"./images/zangief/sprite.json\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./images sync recursive ^\\\\.\\\\/.*\\\\/sprite\\\\.json$\";\n\n//# sourceURL=webpack://RansomHeroes/./images_sync_^\\.\\/.*\\/sprite\\.json$?");

/***/ }),

/***/ "./images/silsam/sprite.json":
/*!***********************************!*\
  !*** ./images/silsam/sprite.json ***!
  \***********************************/
/*! exports provided: idle, default */
/***/ (function(module) {

eval("module.exports = {\"idle\":{\"start\":103,\"end\":117,\"axis\":{\"x\":370,\"y\":425},\"prefix\":\"anim\",\"suffix\":\".gif\",\"pad0\":0}};\n\n//# sourceURL=webpack://RansomHeroes/./images/silsam/sprite.json?");

/***/ }),

/***/ "./images/silversamurai/sprite.json":
/*!******************************************!*\
  !*** ./images/silversamurai/sprite.json ***!
  \******************************************/
/*! exports provided: config, states, default */
/***/ (function(module) {

eval("module.exports = {\"config\":{\"prefix\":\"Silver Samurai_\",\"suffix\":\".png\",\"pad0\":4,\"axis\":{\"x\":400,\"y\":400}},\"states\":{\"turn\":{\"start\":214,\"end\":210},\"idle\":{\"start\":102,\"end\":116},\"air-idle\":{\"start\":170,\"end\":171},\"walk\":{\"start\":118,\"end\":131},\"air-jump-forward\":{\"start\":177,\"end\":182},\"air-jump\":{\"start\":164,\"end\":169},\"air-idle-forward\":{\"start\":183,\"end\":184},\"land-forward\":{\"start\":185,\"end\":189},\"land\":{\"start\":173,\"end\":176}}};\n\n//# sourceURL=webpack://RansomHeroes/./images/silversamurai/sprite.json?");

/***/ }),

/***/ "./images/zangief/sprite.json":
/*!************************************!*\
  !*** ./images/zangief/sprite.json ***!
  \************************************/
/*! exports provided: config, states, default */
/***/ (function(module) {

eval("module.exports = {\"config\":{\"prefix\":\"Zangief_\",\"suffix\":\".png\",\"pad0\":4,\"axis\":{\"x\":400,\"y\":260}},\"states\":{\"turn\":{\"start\":74,\"end\":70},\"idle\":{\"start\":17,\"end\":36},\"air-idle\":{\"start\":65,\"end\":65},\"walk\":{\"start\":37,\"end\":46},\"lariat\":{\"start\":2,\"end\":7},\"air-jump-forward\":{\"start\":62,\"end\":64},\"air-jump\":{\"start\":62,\"end\":64},\"air-idle-forward\":{\"start\":65,\"end\":65},\"land-forward\":{\"start\":69,\"end\":67},\"land\":{\"start\":69,\"end\":67}}};\n\n//# sourceURL=webpack://RansomHeroes/./images/zangief/sprite.json?");

/***/ }),

/***/ "./js/RHGame.js":
/*!**********************!*\
  !*** ./js/RHGame.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Entity_1 = __webpack_require__(/*! ./model/Entity */ \"./js/model/Entity.js\");\n\nvar RHModel_1 = __webpack_require__(/*! ./model/RHModel */ \"./js/model/RHModel.js\");\n\nvar Canvas_1 = __webpack_require__(/*! ./view/Canvas */ \"./js/view/Canvas.js\");\n\nvar RHView_1 = __webpack_require__(/*! ./view/RHView */ \"./js/view/RHView.js\");\n\nvar RHGame = function () {\n  function RHGame(canvas) {\n    this._model = new RHModel_1.RHModel();\n    this._view = new RHView_1.RHView(canvas);\n    var entities = [\"silversamurai\", \"zangief\"];\n\n    for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {\n      var entity = entities_1[_i];\n      var randX = Math.floor(Math.random() * 700) + 50;\n      var randY = Math.floor(Math.random() * 400) + 50;\n      var curEntity = new Entity_1.Entity(entity, randX, randY);\n\n      this._model.addEntity(curEntity);\n\n      this._view.addEntityView(entity);\n    }\n  }\n\n  RHGame.prototype.run = function () {\n    var _this = this;\n\n    this._model.update();\n\n    this._view.draw(this._model);\n\n    window.requestAnimationFrame(function () {\n      return _this.run();\n    });\n  };\n\n  return RHGame;\n}();\n\nexports.RHGame = RHGame;\nvar canvas = new Canvas_1.Canvas(document.getElementsByTagName(\"canvas\")[0]);\nvar game = new RHGame(canvas);\nvar animationFrame = window.requestAnimationFrame(function () {\n  return game.run();\n});\n\n//# sourceURL=webpack://RansomHeroes/./js/RHGame.js?");

/***/ }),

/***/ "./js/lib/2DGame.js":
/*!**************************!*\
  !*** ./js/lib/2DGame.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Coordinate = function () {\n  function Coordinate(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  return Coordinate;\n}();\n\nexports.Coordinate = Coordinate;\nvar Direction;\n\n(function (Direction) {\n  Direction[Direction[\"Left\"] = 1] = \"Left\";\n  Direction[Direction[\"Right\"] = 2] = \"Right\";\n})(Direction = exports.Direction || (exports.Direction = {}));\n\n//# sourceURL=webpack://RansomHeroes/./js/lib/2DGame.js?");

/***/ }),

/***/ "./js/model/Entity.js":
/*!****************************!*\
  !*** ./js/model/Entity.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _2DGame_1 = __webpack_require__(/*! ../lib/2DGame */ \"./js/lib/2DGame.js\");\n\nvar GRAVITY_SPEED = 8;\nvar Y_VEL_DECAY = 1;\nvar GROUND_Y = 575;\nvar WALL_1 = 25;\nvar WALL_2 = 775;\nvar Y_SUPER_JUMP = -26;\nvar Y_NORMAL_JUMP = -16;\nvar X_JUMP = 4.5;\n\nvar Entity = function () {\n  function Entity(entityID, x, y) {\n    this._entityID = entityID;\n    this._state = null;\n    this._direction = _2DGame_1.Direction.Right;\n    this._walkingSpeed = 2;\n    this._turnSpeed = 12;\n    this._progress = 0;\n    this._endState = 0;\n    this._velocity = new _2DGame_1.Coordinate(0, 0);\n    this._x = x;\n    this._y = y;\n  }\n\n  Object.defineProperty(Entity.prototype, \"x\", {\n    get: function () {\n      return this._x;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"y\", {\n    get: function () {\n      return this._y;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"direction\", {\n    get: function () {\n      return this._direction;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"entityID\", {\n    get: function () {\n      return this._entityID;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(Entity.prototype, \"state\", {\n    get: function () {\n      return this._state;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  Entity.prototype.getUnitVectorX = function () {\n    return this._direction == _2DGame_1.Direction.Left ? -1 : 1;\n  };\n\n  Entity.prototype.invertDirection = function () {\n    return this._direction == _2DGame_1.Direction.Left ? _2DGame_1.Direction.Right : _2DGame_1.Direction.Left;\n  };\n\n  Entity.prototype.hasFiniteState = function () {\n    return this._endState != 0;\n  };\n\n  Entity.prototype.npcBehavior = function (timeDelta) {\n    var rand = Math.floor(Math.random() * 400);\n    var rand2 = Math.floor(Math.random() * 100);\n\n    if (this._state == \"air-idle\") {\n      this._x += timeDelta * this._velocity.x;\n      this._velocity.y += timeDelta * Y_VEL_DECAY;\n\n      if (this._velocity.y > GRAVITY_SPEED) {\n        this._velocity.y = GRAVITY_SPEED;\n      }\n\n      this._y += this._velocity.y;\n\n      if (this._x >= WALL_2) {\n        this._x = WALL_2;\n        this._velocity.x = 0;\n      } else if (this._x <= WALL_1) {\n        this._x = WALL_1;\n        this._velocity.x = 0;\n      }\n\n      if (this._y > GROUND_Y) {\n        if (Math.abs(this._velocity.x) > 0) {\n          this._state = \"land-forward\";\n        } else {\n          this._state = \"land\";\n        }\n\n        this._progress = 0;\n        this._endState = this._turnSpeed;\n        this._y = GROUND_Y;\n      }\n    } else if (this._state == \"idle\") {\n      if (rand == 1) {\n        this._state = \"walk\";\n      } else if (rand == 2) {\n        this._state = \"turn\";\n        this._progress = 0;\n        this._endState = this._turnSpeed;\n      } else if (rand == 3) {\n        this._state = \"air-jump-forward\";\n        var jumpYVelocity = Y_NORMAL_JUMP;\n\n        if (rand2 < 50) {\n          jumpYVelocity = Y_SUPER_JUMP;\n        }\n\n        this._velocity = new _2DGame_1.Coordinate(X_JUMP * this.getUnitVectorX(), jumpYVelocity);\n        this._endState = Math.abs(jumpYVelocity / Y_VEL_DECAY);\n      } else if (rand == 4) {\n        this._state = \"air-jump\";\n        var jumpYVelocity = Y_NORMAL_JUMP;\n\n        if (rand2 < 50) {\n          jumpYVelocity = Y_SUPER_JUMP;\n        }\n\n        this._velocity = new _2DGame_1.Coordinate(0, jumpYVelocity);\n        this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));\n      }\n    } else if (this._state == \"walk\") {\n      if (rand == 1) {\n        this._state = \"idle\";\n      } else if (rand == 2) {\n        this._state = \"air-jump-forward\";\n        var jumpYVelocity = Y_NORMAL_JUMP;\n\n        if (rand2 < 50) {\n          jumpYVelocity = Y_SUPER_JUMP;\n        }\n\n        this._velocity = new _2DGame_1.Coordinate(X_JUMP * this.getUnitVectorX(), jumpYVelocity);\n        this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));\n      } else if (rand == 3) {\n        this._state = \"air-jump\";\n        var jumpYVelocity = Y_NORMAL_JUMP;\n\n        if (rand2 < 50) {\n          jumpYVelocity = Y_SUPER_JUMP;\n        }\n\n        this._velocity = new _2DGame_1.Coordinate(0, jumpYVelocity);\n        this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));\n      } else {\n        this._x += timeDelta * this._walkingSpeed * this.getUnitVectorX();\n\n        if (this._x >= WALL_2) {\n          this._x = WALL_2;\n          this._state = \"turn\";\n          this._progress = 0;\n          this._endState = this._turnSpeed;\n        } else if (this._x <= WALL_1) {\n          this._x = WALL_1;\n          this._state = \"turn\";\n          this._progress = 0;\n          this._endState = this._turnSpeed;\n        }\n      }\n    } else if (this._state == \"land\" || this._state == \"land-forward\") {\n      this._progress += 1;\n\n      if (this._progress >= this._endState) {\n        this._endState = this._progress = 0;\n        this._state = \"idle\";\n      }\n    } else if (this._state == \"turn\") {\n      this._progress += 1;\n\n      if (this._progress >= this._endState) {\n        this._endState = this._progress = 0;\n        this._direction = this.invertDirection();\n\n        if (rand <= 100) {\n          this._state = \"idle\";\n        } else {\n          this._state = \"walk\";\n        }\n      }\n    } else if (this._state == \"air-jump-forward\") {\n      this._progress += 1;\n      this._x += timeDelta * this._velocity.x;\n      this._velocity.y += timeDelta * Y_VEL_DECAY;\n\n      if (this._velocity.y > GRAVITY_SPEED) {\n        this._velocity.y = GRAVITY_SPEED;\n      }\n\n      this._y += this._velocity.y;\n\n      if (this._x >= WALL_2) {\n        this._x = WALL_2;\n        this._velocity.x = 0;\n      } else if (this._x <= WALL_1) {\n        this._x = WALL_1;\n        this._velocity.x = 0;\n      }\n\n      if (this._progress >= this._endState) {\n        this._endState = this._progress = 0;\n        this._state = \"air-idle\";\n      }\n    } else if (this._state == \"air-jump\") {\n      this._progress += 1;\n      this._x += timeDelta * this._velocity.x;\n      this._velocity.y += timeDelta * Y_VEL_DECAY;\n\n      if (this._velocity.y > GRAVITY_SPEED) {\n        this._velocity.y = GRAVITY_SPEED;\n      }\n\n      this._y += this._velocity.y;\n\n      if (this._x >= WALL_2) {\n        this._x = WALL_2;\n        this._velocity.x = 0;\n      } else if (this._x <= WALL_1) {\n        this._x = WALL_1;\n        this._velocity.x = 0;\n      }\n\n      if (this._progress >= this._endState) {\n        this._endState = this._progress = 0;\n        this._state = \"air-idle\";\n      }\n    }\n  };\n\n  Entity.prototype.getProgressPercentage = function () {\n    return this._progress / this._endState;\n  };\n\n  Entity.prototype.update = function (timeDelta) {\n    if (this._state == null) {\n      this.determineState();\n    }\n\n    this.npcBehavior(timeDelta);\n  };\n\n  Entity.prototype.determineState = function () {\n    if (this._y < GROUND_Y) {\n      this._state = \"air-idle\";\n    }\n\n    if (this._y > GROUND_Y) {\n      this._state = \"idle\";\n      this._y = GROUND_Y;\n    }\n  };\n\n  return Entity;\n}();\n\nexports.Entity = Entity;\n\n//# sourceURL=webpack://RansomHeroes/./js/model/Entity.js?");

/***/ }),

/***/ "./js/model/RHModel.js":
/*!*****************************!*\
  !*** ./js/model/RHModel.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar RHModel = function () {\n  function RHModel() {\n    this._time = 0;\n    this._entities = new Array();\n  }\n\n  Object.defineProperty(RHModel.prototype, \"entities\", {\n    get: function () {\n      return this._entities.slice();\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  RHModel.prototype.addEntity = function (entity) {\n    this._entities.push(entity);\n  };\n\n  RHModel.prototype.update = function () {\n    var timeDelta = 1;\n    this._time += timeDelta;\n\n    for (var _i = 0, _a = this._entities; _i < _a.length; _i++) {\n      var entity = _a[_i];\n      entity.update(timeDelta);\n    }\n  };\n\n  return RHModel;\n}();\n\nexports.RHModel = RHModel;\n\n//# sourceURL=webpack://RansomHeroes/./js/model/RHModel.js?");

/***/ }),

/***/ "./js/services/SpritePathService.js":
/*!******************************************!*\
  !*** ./js/services/SpritePathService.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar spriteConfigs;\nvar entityIDs = [\"zangief\", \"silversamurai\"];\n\nvar SpriteSetConfig = function () {\n  function SpriteSetConfig() {\n    this.axis = null;\n    this.prefix = null;\n    this.suffix = null;\n    this.pad0 = null;\n  }\n\n  return SpriteSetConfig;\n}();\n\nexports.SpriteSetConfig = SpriteSetConfig;\n\nvar StateSpriteFrameData = function () {\n  function StateSpriteFrameData() {\n    this.start = null;\n    this.end = null;\n  }\n\n  return StateSpriteFrameData;\n}();\n\nexports.StateSpriteFrameData = StateSpriteFrameData;\n\nvar StatesSpriteData = function () {\n  function StatesSpriteData() {}\n\n  return StatesSpriteData;\n}();\n\nexports.StatesSpriteData = StatesSpriteData;\n;\n\nvar EntitiesSpriteSetData = function () {\n  function EntitiesSpriteSetData() {}\n\n  return EntitiesSpriteSetData;\n}();\n\nexports.EntitiesSpriteSetData = EntitiesSpriteSetData;\n;\n\nvar EntitySpriteSetData = function () {\n  function EntitySpriteSetData() {}\n\n  return EntitySpriteSetData;\n}();\n\nexports.EntitySpriteSetData = EntitySpriteSetData;\n\nvar SpritePathService = function () {\n  function SpritePathService() {\n    this._entityInfo = new EntitiesSpriteSetData();\n\n    for (var _i = 0, entityIDs_1 = entityIDs; _i < entityIDs_1.length; _i++) {\n      var entityID = entityIDs_1[_i];\n      this._entityInfo[entityID] = __webpack_require__(\"./images sync recursive ^\\\\.\\\\/.*\\\\/sprite\\\\.json$\")(\"./\" + entityID + \"/sprite.json\");\n    }\n  }\n\n  SpritePathService.prototype.getEntitySpritePaths = function (entityID) {\n    return this._entityInfo[entityID];\n  };\n\n  SpritePathService.prototype.getStateSpritePaths = function (entityID, state) {\n    var entitySpriteData = this.getEntitySpritePaths(entityID);\n    var stateInfo = entitySpriteData.states[state];\n    var paths = new Array();\n    var start = stateInfo.start;\n    var end = stateInfo.end;\n\n    if (end > start) {\n      for (var i = start; i <= end; i++) {\n        paths.push(\"images/\" + entityID + \"/\" + (entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix));\n      }\n    } else {\n      for (var i = start; i >= end; i--) {\n        paths.push(\"images/\" + entityID + \"/\" + (entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix));\n      }\n    }\n\n    return paths;\n  };\n\n  return SpritePathService;\n}();\n\nexports.SpritePathService = SpritePathService;\n\n//# sourceURL=webpack://RansomHeroes/./js/services/SpritePathService.js?");

/***/ }),

/***/ "./js/view/Canvas.js":
/*!***************************!*\
  !*** ./js/view/Canvas.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Canvas = function () {\n  function Canvas(htmlCanvas) {\n    this._htmlCanvas = htmlCanvas;\n    this._context = htmlCanvas.getContext(\"2d\");\n  }\n\n  Object.defineProperty(Canvas.prototype, \"context\", {\n    get: function () {\n      return this._context;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;\n\n//# sourceURL=webpack://RansomHeroes/./js/view/Canvas.js?");

/***/ }),

/***/ "./js/view/RHView.js":
/*!***************************!*\
  !*** ./js/view/RHView.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar Sprite_1 = __webpack_require__(/*! ./Sprite */ \"./js/view/Sprite.js\");\n\nvar SpritePathService_1 = __webpack_require__(/*! ../services/SpritePathService */ \"./js/services/SpritePathService.js\");\n\nvar RHView = function () {\n  function RHView(canvas) {\n    this._canvas = canvas;\n    this._entitySprites = new Map();\n    this._spriteService = new SpritePathService_1.SpritePathService();\n    this._background = new Image();\n    this._background.src = \"images/tree.jpg\";\n  }\n\n  RHView.prototype.addEntityView = function (entityID) {\n    var entitySpriteData = this._spriteService.getEntitySpritePaths(entityID);\n\n    for (var _i = 0, _a = Object.keys(entitySpriteData.states); _i < _a.length; _i++) {\n      var state = _a[_i];\n      this.addEntityStateView(entityID, state);\n    }\n  };\n\n  RHView.prototype.addEntityStateView = function (entityID, state) {\n    var options = new Sprite_1.SpriteOptions();\n    options.imagePaths = this._spriteService.getStateSpritePaths(entityID, state);\n    var sprite = new Sprite_1.Sprite(options);\n\n    if (!this._entitySprites.has(entityID)) {\n      this._entitySprites.set(entityID, new Map());\n    }\n\n    this._entitySprites.get(entityID).set(state, sprite);\n  };\n\n  RHView.prototype.drawEntity = function (entity) {\n    var sprite = this._entitySprites.get(entity.entityID).get(entity.state);\n\n    if (entity.hasFiniteState()) {\n      sprite.setFrame(entity.getProgressPercentage());\n    } else {\n      sprite.update();\n    }\n\n    var entityData = this._spriteService.getEntitySpritePaths(entity.entityID);\n\n    var origin = {\n      x: entityData.config.axis.x,\n      y: entityData.config.axis.y\n    };\n    sprite.render(this._canvas.context, entity.x, entity.y, entity.direction, origin);\n  };\n\n  RHView.prototype.drawGround = function (drawGround) {\n    this._canvas.context.drawImage(this._background, 0, 0, 800, 600);\n  };\n\n  RHView.prototype.draw = function (model) {\n    this._canvas.context.clearRect(0, 0, this._canvas.context.canvas.width, this._canvas.context.canvas.height);\n\n    this.drawGround(model);\n\n    for (var _i = 0, _a = model.entities; _i < _a.length; _i++) {\n      var entity = _a[_i];\n      this.drawEntity(entity);\n    }\n  };\n\n  return RHView;\n}();\n\nexports.RHView = RHView;\n\n//# sourceURL=webpack://RansomHeroes/./js/view/RHView.js?");

/***/ }),

/***/ "./js/view/Sprite.js":
/*!***************************!*\
  !*** ./js/view/Sprite.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _2DGame_1 = __webpack_require__(/*! ../lib/2DGame */ \"./js/lib/2DGame.js\");\n\nvar SpriteOptions = function () {\n  function SpriteOptions() {}\n\n  return SpriteOptions;\n}();\n\nexports.SpriteOptions = SpriteOptions;\n\nvar Sprite = function () {\n  function Sprite(options) {\n    this._images = new Array();\n    this.loadImages(options.imagePaths);\n    this._width = 60;\n    this._height = 60;\n    this._frameIndex = 0;\n    this._tickCount = 0;\n    this._ticksPerFrame = 6;\n    this._loops = true;\n  }\n\n  Sprite.prototype.loadImages = function (imagePaths) {\n    for (var _i = 0, imagePaths_1 = imagePaths; _i < imagePaths_1.length; _i++) {\n      var imagePath = imagePaths_1[_i];\n      var image = new Image();\n      image.src = imagePath;\n\n      this._images.push(image);\n    }\n  };\n\n  Sprite.prototype.setFrame = function (progressPercentage) {\n    this._frameIndex = Math.floor(progressPercentage * (this.length - 1));\n\n    if (this._frameIndex >= this._images.length) {\n      this._frameIndex = this._images.length - 1;\n    }\n  };\n\n  Sprite.prototype.update = function () {\n    this._tickCount++;\n\n    if (this._tickCount > this._ticksPerFrame) {\n      this._tickCount = 0;\n\n      if (this._frameIndex < this._images.length - 1) {\n        this._frameIndex += 1;\n      } else if (this._loops) {\n        this._frameIndex = 0;\n      }\n    }\n  };\n\n  Object.defineProperty(Sprite.prototype, \"length\", {\n    get: function () {\n      return this._images.length;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  Sprite.prototype.render = function (context, x, y, direction, origin) {\n    var image = this._images[this._frameIndex];\n    var width = image.width;\n    var height = image.height;\n    var xPos = x - origin.x;\n    var yPos = y - origin.y;\n\n    if (direction == _2DGame_1.Direction.Right) {\n      context.scale(-1, 1);\n      xPos = -xPos - width;\n    }\n\n    context.drawImage(image, xPos, yPos);\n\n    if (direction == _2DGame_1.Direction.Right) {\n      context.scale(-1, 1);\n    }\n  };\n\n  ;\n  return Sprite;\n}();\n\nexports.Sprite = Sprite;\n\n//# sourceURL=webpack://RansomHeroes/./js/view/Sprite.js?");

/***/ })

/******/ });
});