import { Entity } from "./Entity";
import { Sprite} from "./Sprite";

export class EntityView {
    private _sprites: Map<string, Sprite>;
    private _entity: Entity;
    constructor(entity: Entity, sprites: Map<string, Sprite>) {
        //super();
        this._entity = entity;
        this._sprites = sprites;
    }
}