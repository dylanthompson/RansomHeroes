"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CanvasElement_1 = require("./CanvasElement");
var silSamData = require('../images/silsam/sprite.json');
var Coordinate = (function () {
    function Coordinate() {
    }
    return Coordinate;
}());
var StateSpriteFrameData = (function () {
    function StateSpriteFrameData() {
    }
    return StateSpriteFrameData;
}());
var SpritePathService = (function () {
    function SpritePathService() {
        this._entityInfo = { "silsam": silSamData };
    }
    SpritePathService.prototype.getSpritePaths = function (entityID, state) {
        var stateInfo = this._entityInfo["silsam"]["idle"];
        var paths = new Array();
        for (var i = stateInfo.start; i <= stateInfo.end; i++) {
            paths.push("images/silsam/" + stateInfo.prefix + i.toString() + stateInfo.suffix);
        }
        return paths;
    };
    return SpritePathService;
}());
exports.SpritePathService = SpritePathService;
var SpriteOptions = (function () {
    function SpriteOptions() {
    }
    return SpriteOptions;
}());
exports.SpriteOptions = SpriteOptions;
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(context, options) {
        var _this = _super.call(this, context) || this;
        _this._images = new Array();
        _this.loadImages(options.imagePaths);
        _this._width = 60;
        _this._height = 60;
        _this._frameIndex = 0;
        _this._tickCount = 0;
        _this._ticksPerFrame = 1;
        _this._loops = true;
        return _this;
    }
    Sprite.prototype.loadImages = function (imagePaths) {
        for (var _i = 0, imagePaths_1 = imagePaths; _i < imagePaths_1.length; _i++) {
            var imagePath = imagePaths_1[_i];
            var image = new Image();
            image.src = imagePath;
            this._images.push(image);
        }
    };
    Sprite.prototype.update = function () {
        this._tickCount++;
        if (this._tickCount > this._ticksPerFrame) {
            this._tickCount = 0;
            if (this._frameIndex < this._images.length - 1) {
                this._frameIndex += 1;
            }
            else if (this._loops) {
                this._frameIndex = 0;
            }
        }
    };
    Sprite.prototype.render = function () {
        this._context.clearRect(0, 0, this._width, this._height);
        this._context.drawImage(this._images[this._frameIndex], 100, 100);
    };
    ;
    return Sprite;
}(CanvasElement_1.CanvasElement));
exports.Sprite = Sprite;
