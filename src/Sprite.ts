import { CanvasElement } from "./CanvasElement";

var silSamData = require('../images/silsam/sprite.json');

class Coordinate {
    public x: number;
    public y: number;
}

class StateSpriteFrameData {
    public start: number;
    public end: number;
    public center: Coordinate;
    public prefix: string;
    public suffix: string;
}

// class EntitySpriteFrameData {
//     private _stateInfo: Map<string, StateSpriteFrameData>;
// }

export class SpritePathService {
    private _entityInfo: any;//Map<string, EntitySpriteFrameData>;
    constructor() {
        this._entityInfo = { "silsam": silSamData };
    }

    public getSpritePaths(entityID:string, state: string) {
        let stateInfo = this._entityInfo["silsam"]["idle"];
        let paths = new Array<string>();
        for (let i = stateInfo.start; i <= stateInfo.end; i++) {
            paths.push("images/silsam/" + stateInfo.prefix + i.toString() + stateInfo.suffix);
        }
        return paths;
    }
}

export class SpriteOptions {
    public imagePaths: Array<string>;
}

export class Sprite extends CanvasElement {
    private _width: number;
    private _height: number;
    private _images: Array<HTMLImageElement>;
    private _frameIndex: number;
    private _tickCount: number;
    private _ticksPerFrame: number;
    private _loops: boolean;

    constructor(context: CanvasRenderingContext2D, options:SpriteOptions) {
        super(context);
        this._images = new Array<HTMLImageElement>();
        this.loadImages(options.imagePaths);
        
        this._width = 60;
        this._height = 60;
        this._frameIndex = 0;
        this._tickCount = 0;
        this._ticksPerFrame = 1;
        this._loops = true;
    }

    private loadImages(imagePaths:Array<string>) {
        for (let imagePath of imagePaths) {
            let image = new Image();
            image.src = imagePath;
            this._images.push(image);
        }
    }

    public update() {
        this._tickCount++;
        if (this._tickCount > this._ticksPerFrame) {
            this._tickCount = 0;
            if (this._frameIndex < this._images.length - 1) {
                this._frameIndex += 1; 
            } else if (this._loops) {
                this._frameIndex = 0;
            }
        }
    }

    public render() {
        this._context.clearRect(0, 0, this._width, this._height);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        this._context.drawImage(
            this._images[this._frameIndex],
            //this._frameIndex * this._width / this._images.length,
            //0,
            //this._width / this._images.length,
            //this._height,
            100,
            100);//,
            //this._width / this._images.length,
            //this._height);
        };   
}