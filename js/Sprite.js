"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteOptions = (function () {
    function SpriteOptions() {
    }
    return SpriteOptions;
}());
exports.SpriteOptions = SpriteOptions;
var Sprite = (function () {
    function Sprite(options) {
        this._images = new Array();
        this.loadImages(options.imagePaths);
        this._width = 60;
        this._height = 60;
        this._frameIndex = 0;
        this._tickCount = 0;
        this._ticksPerFrame = 6;
        this._loops = true;
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
    Sprite.prototype.render = function (context, x, y) {
        context.drawImage(this._images[this._frameIndex], x, y);
    };
    ;
    return Sprite;
}());
exports.Sprite = Sprite;
