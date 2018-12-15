"use strict";
exports.__esModule = true;
var Sprite_1 = require("./Sprite");
var Canvas = (function () {
    function Canvas(htmlCanvas) {
        var _this = this;
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
        this._sprites = new Array();
        var spritePathService = new Sprite_1.SpritePathService();
        var paths = spritePathService.getSpritePaths("silsam", "idle");
        var options = new Sprite_1.SpriteOptions();
        options.imagePaths = paths;
        this._sprites.push(new Sprite_1.Sprite(this._context, options));
        var animationFrame = window.requestAnimationFrame(function () { return _this.run(); });
    }
    Canvas.prototype.run = function () {
        var _this = this;
        this._sprites.forEach(function (item) {
            item.update();
        });
        this._sprites.forEach(function (item) {
            item.render();
        });
        window.requestAnimationFrame(function () { return _this.run(); });
    };
    return Canvas;
}());
exports.Canvas = Canvas;
var canvas = new Canvas(document.getElementsByTagName("canvas")[0]);
