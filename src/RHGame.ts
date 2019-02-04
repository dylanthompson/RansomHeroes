import { Entity } from "./model/Entity";
import { RHModel } from "./model/RHModel";
import { SpritePathService } from "./services/SpritePathService";
import { Canvas } from "./view/Canvas";
import { RHView } from "./view/RHView";
import { Sprite, SpriteOptions } from "./view/Sprite";

export class RHGame {
    private _view: RHView;
    private _model: RHModel;

    constructor(canvas: Canvas) {
        this._model = new RHModel();
        this._view = new RHView(canvas);
        
        let entities = ["silversamurai", "zangief"];
        for (let entity of entities) {
            var randX = Math.floor(Math.random() * 700) + 50;
            var randY = Math.floor(Math.random() * 400) + 50;
            var curEntity = new Entity(entity, randX, randY);
            this._model.addEntity(curEntity);
            this._view.addEntityView(entity);
        }
    }

    public run() {

        this._model.update();
        this._view.draw(this._model);

        window.requestAnimationFrame(() => this.run());

    }
}

var canvas = new Canvas(<HTMLCanvasElement> document.getElementsByTagName("canvas")[0]);
let game = new RHGame(canvas);
let animationFrame = window.requestAnimationFrame(() => game.run());