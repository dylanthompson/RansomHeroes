import { Coordinate, Direction } from "../lib/2DGame";

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

    public setFrame(progressPercentage: number) {
        this._frameIndex = Math.floor(progressPercentage * (this.length - 1));
        if (this._frameIndex >= this._images.length) {
            this._frameIndex = this._images.length - 1;
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

    public get length() {
        return this._images.length;
    }

    public render(context: CanvasRenderingContext2D, x: number, y: number, direction: Direction, origin: Coordinate) {
        // if (this._tickCount !== 1) {
        //     return;
        // }
        //context.clearRect(0, 0, this._width, this._height);
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

        let image = this._images[this._frameIndex];

        let width = image.width;
        let height = image.height;

        let xPos = x - origin.x;
        let yPos = y - origin.y;
        if (direction == Direction.Right) {
            context.scale(-1, 1);
            xPos = -xPos - width;
        }

        context.drawImage(image, xPos, yPos);

        if (direction == Direction.Right) {
            context.scale(-1, 1);
        }
    };
}