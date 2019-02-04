import { Canvas } from "./Canvas";
import { Sprite, SpriteOptions } from "./Sprite";
import { RHModel } from "./RHModel";
import { Entity } from "./Entity";
import { SpritePathService } from "./services/SpritePathService";

export class RHView {
    private _canvas: Canvas;
    private _entitySprites: Map<string, Map<string, Sprite>>;

    constructor(canvas: Canvas) { 
        this._canvas = canvas;
        this._entitySprites = new Map<string, Map<string, Sprite>>();
    }

    public addEntityView(entityID: string, state: string) {
        let spritePathService = new SpritePathService();
        let options = new SpriteOptions();
        options.imagePaths = spritePathService.getStateSpritePaths(entityID, state);
        let sprite = new Sprite(options);

        if (!this._entitySprites.has(entityID)) {
            this._entitySprites.set(entityID, new Map<string, Sprite>());
        }
        this._entitySprites.get(entityID).set(state, sprite);
    }

    public drawEntity(entity: Entity) {
        var sprite = this._entitySprites.get(entity.entityID).get(entity.state);
        if (entity.state == "turn") {
            sprite.setFrame(entity.getProgressPercentage());
        } else {
            sprite.update();
        }
        

        let spritePathService = new SpritePathService();
        let entityData = spritePathService.getEntitySpritePaths(entity.entityID);
        let origin = {
            x: entityData.config.axis.x,
            y: entityData.config.axis.y
        };
        sprite.render(this._canvas.context, entity.x, entity.y, entity.direction, origin);
    }

    public drawGround(drawGround: RHModel) {
        this._canvas.context.beginPath();
        this._canvas.context.moveTo(0, 600);
        this._canvas.context.lineTo(50, 550);
        this._canvas.context.lineTo(800, 550);
        this._canvas.context.lineTo(750, 600);
        this._canvas.context.stroke();

        this._canvas.context.beginPath();
        this._canvas.context.moveTo(50, 550);
        this._canvas.context.lineTo(50, 0);
        this._canvas.context.stroke();
    }

    public draw(model: RHModel) {
        this._canvas.context.clearRect(0, 0, this._canvas.context.canvas.width, this._canvas.context.canvas.height);

        this.drawGround(model);

        for (let entity of model.entities) {
            this.drawEntity(entity);
        }
    }
}