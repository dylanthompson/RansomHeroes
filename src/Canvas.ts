import { SpriteOptions, Sprite } from "./Sprite";
import { SpritePathService } from "./services/SpritePathService";
import { RHGame } from "./RHGame";

export class Canvas {
    private _htmlCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    public get context(): CanvasRenderingContext2D {
        return this._context;
    }

    constructor(htmlCanvas: HTMLCanvasElement) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
    }
}
