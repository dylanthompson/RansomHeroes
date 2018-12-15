import { SpritePathService, SpriteOptions, Sprite } from "./Sprite";

export class Canvas {
    private _htmlCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _sprites: Array<Sprite>;

    constructor(htmlCanvas: HTMLCanvasElement) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
        this._sprites = new Array<Sprite>();

        let spritePathService = new SpritePathService();
        let paths = spritePathService.getSpritePaths("silsam", "idle");
        let options = new SpriteOptions();
        options.imagePaths = paths;
        this._sprites.push(new Sprite(this._context, options));

        let animationFrame = window.requestAnimationFrame(() => this.run());
    }

    private run() {
        this._sprites.forEach((item) => {
            item.update();
        });

        this._sprites.forEach((item) => {
            item.render();
        });

        window.requestAnimationFrame(() => this.run());
    }
}

var canvas = new Canvas(<HTMLCanvasElement> document.getElementsByTagName("canvas")[0]);