"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = require("./Entity");
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
    Sprite.prototype.setFrame = function (progressPercentage) {
        this._frameIndex = Math.floor(progressPercentage * (this.length - 1));
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
    Object.defineProperty(Sprite.prototype, "length", {
        get: function () {
            return this._images.length;
        },
        enumerable: true,
        configurable: true
    });
    Sprite.prototype.render = function (context, x, y, direction, origin) {
        var image = this._images[this._frameIndex];
        var width = image.width;
        var height = image.height;
        var xPos = x - origin.x;
        var yPos = y - origin.y;
        if (direction == Entity_1.Direction.Right) {
            context.scale(-1, 1);
            xPos = -xPos - width;
        }
        context.drawImage(image, xPos, yPos);
        if (direction == Entity_1.Direction.Right) {
            context.scale(-1, 1);
        }
    };
    ;
    return Sprite;
}());
exports.Sprite = Sprite;
