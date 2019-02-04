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
        let timeDelta = 1;
        this._time += timeDelta;
        for (let entity of this._entities) {
            entity.update(timeDelta);
        }
    }

    constructor() {
        this._time = 0;
        this._entities = new Array<Entity>();
    }
}