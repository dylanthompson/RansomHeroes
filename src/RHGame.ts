<<<<<<< HEAD
import { Entity } from "./model/Entity";
import { RHModel } from "./model/RHModel";
import { SpritePathService } from "./services/SpritePathService";
import { Canvas } from "./view/Canvas";
import { RHView } from "./view/RHView";
import { Sprite, SpriteOptions } from "./view/Sprite";
=======
import { RHView } from "./RHView";
import { RHModel } from "./RHModel";
import { Canvas } from "./Canvas";
import { Entity } from "./Entity";
import { Sprite, SpriteOptions } from "./Sprite";
import { SpritePathService } from "./services/SpritePathService";
>>>>>>> 95db0b60083616a0ebcd82b9bf40a442dd267968

export class RHGame {
    private _view: RHView;
    private _model: RHModel;

    constructor(canvas: Canvas) {
        this._model = new RHModel();
        this._view = new RHView(canvas);
        
        let entities = ["silversamurai", "zangief"];
<<<<<<< HEAD
        for (let entity of entities) {
            var randX = Math.floor(Math.random() * 700) + 50;
            var randY = Math.floor(Math.random() * 400) + 50;
            var curEntity = new Entity(entity, randX, randY);
            this._model.addEntity(curEntity);
            this._view.addEntityView(entity);
=======
        let states = ["idle"];
        for (let entity of entities) {
            var randX = Math.floor(Math.random() * 200) + 50;
            var randY = Math.floor(Math.random() * 200) + 50;
            var curEntity = new Entity(entity, randX, randY);
            this._model.addEntity(curEntity);

            for (let state of states) {
                this._view.addEntityView(entity, state);
            }
>>>>>>> 95db0b60083616a0ebcd82b9bf40a442dd267968
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