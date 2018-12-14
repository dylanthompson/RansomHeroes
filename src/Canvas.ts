import { SpritePathService, SpriteOptions, Sprite } from "./Sprite";

export class Canvas {
    private _htmlCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor(htmlCanvas: HTMLCanvasElement) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");

        let spritePathService = new SpritePathService();
        let paths = spritePathService.getSpritePaths("silsam", "idle");
        let options = new SpriteOptions();
        options.imagePaths = paths;
        let silSam = new Sprite(this._context, options);

        setInterval(function () {
            silSam.update();
            silSam.render();
        }, 50);
    }
}

var canvas = new Canvas(<HTMLCanvasElement> document.getElementsByTagName("canvas")[0]);