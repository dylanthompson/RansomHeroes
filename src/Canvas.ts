import { SpriteOptions, Sprite } from "./Sprite";
import { SpritePathService } from "./services/SpritePathService";
<<<<<<< HEAD
import { RHGame } from "./RHGame";
=======
>>>>>>> 7d847f332077d00a8f863aa316a0515c013c7cda

export class Canvas {
    private _htmlCanvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    public get context(): CanvasRenderingContext2D {
        return this._context;
    }

    constructor(htmlCanvas: HTMLCanvasElement) {
        this._htmlCanvas = htmlCanvas;
        this._context = htmlCanvas.getContext("2d");
<<<<<<< HEAD
    }
}
=======
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
>>>>>>> 7d847f332077d00a8f863aa316a0515c013c7cda
