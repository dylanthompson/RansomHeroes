"use strict";
exports.__esModule = true;
var Sprite_1 = require("./Sprite");
var Canvas = (function () {
    function Canvas(htmlCanvas) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
        var spritePathService = new Sprite_1.SpritePathService();
        var paths = spritePathService.getSpritePaths("silsam", "idle");
        var options = new Sprite_1.SpriteOptions();
        options.imagePaths = paths;
        var silSam = new Sprite_1.Sprite(this._context, options);
        setInterval(function () {
            silSam.update();
            silSam.render();
        }, 50);
    }
    return Canvas;
}());
exports.Canvas = Canvas;
var canvas = new Canvas(document.getElementsByTagName("canvas")[0]);
