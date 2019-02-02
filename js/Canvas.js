"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Canvas = (function () {
    function Canvas(htmlCanvas) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
    }
    Object.defineProperty(Canvas.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    return Canvas;
}());
exports.Canvas = Canvas;
