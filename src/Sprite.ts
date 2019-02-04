import {JsonObject, JsonProperty} from "json2typescript";

export class SpriteOptions {
    public imagePaths: Array<string>;
}

export class Sprite {
    private _width: number;
    private _height: number;
    private _images: Array<HTMLImageElement>;
    private _frameIndex: number;
    private _tickCount: number;
    private _ticksPerFrame: number;
    private _loops: boolean;

    constructor(options:SpriteOptions) {
        this._images = new Array<HTMLImageElement>();
        this.loadImages(options.imagePaths);
        
        this._width = 60;
        this._height = 60;
        this._frameIndex = 0;
        this._tickCount = 0;
        this._ticksPerFrame = 6;
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

    public render(context: CanvasRenderingContext2D, x: number, y: number) {
        // if (this._tickCount !== 1) {
        //     return;
        // }
        //context.clearRect(0, 0, this._width, this._height);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        context.drawImage(
            this._images[this._frameIndex],
            //this._frameIndex * this._width / this._images.length,
            //0,
            //this._width / this._images.length,
            //this._height,
            x,
            y);//,
            //this._width / this._images.length,
            //this._height);
        };   
}