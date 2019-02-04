import { RHView } from "./RHView";
import { RHModel } from "./RHModel";
import { Canvas } from "./Canvas";
import { Entity } from "./Entity";
import { Sprite, SpriteOptions } from "./Sprite";
import { SpritePathService } from "./services/SpritePathService";

export class RHGame {
    private _view: RHView;
    private _model: RHModel;

    constructor(canvas: Canvas) {
        this._model = new RHModel();
        this._view = new RHView(canvas);
        
        let entities = ["silversamurai", "zangief"];
        let states = ["idle", "air-idle", "walk", "turn"];
        for (let entity of entities) {
            var randX = Math.floor(Math.random() * 700) + 50;
            var randY = Math.floor(Math.random() * 400) + 50;
            var curEntity = new Entity(entity, randX, randY);
            this._model.addEntity(curEntity);

            for (let state of states) {
                this._view.addEntityView(entity, state);
            }
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