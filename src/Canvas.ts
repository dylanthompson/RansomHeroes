import { SpriteOptions, Sprite } from "./Sprite";
import { SpritePathService } from "./services/SpritePathService";

export class Canvas {
    private _htmlCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _sprites: Array<Sprite>;

    constructor(htmlCanvas: HTMLCanvasElement) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
        this._sprites = new Array<Sprite>();

        this.demo();

        let animationFrame = window.requestAnimationFrame(() => this.run());
    }

    private demo() {
        let entities = ["silsam", "zangief"];
        let states = ["idle"];

        let spritePathService = new SpritePathService();
        for (let entity of entities) {
            for (let state of states) {
                let options = new SpriteOptions();
                options.imagePaths = spritePathService.getStateSpritePaths(entity, state);
                let sprite = new Sprite(this._context, options);
                this._sprites.push(sprite);
            }
        }
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