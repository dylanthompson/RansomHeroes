import { Entity } from "./Entity";

export class RHModel {
    private _time: number;
    private _entities: Array<Entity>;

    public get entities(): Array<Entity> {
        return [...this._entities];
    }

    public addEntity(entity: Entity): void {
        this._entities.push(entity);
    }

    public update() {
        this._time += 1;
        for (let entity of this._entities) {
            entity.update(this._time);
        }
        
    }

    constructor() {
        this._time = 0;
        this._entities = new Array<Entity>();
    }
}