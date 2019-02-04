export class Entity {
    private _entityID: string;
    private _state: string;
    private _x: number;
    private _y: number;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get entityID() : string
    {
        return this._entityID;
    }

    public get state() : string
    {
        return this._state;
    }

    public update(time: number): boolean {
        return true;
    }

    constructor(entityID: string, x: number, y: number) {
        this._entityID = entityID;
        this._state = "idle";
        this._x = x;
        this._y = y;
    }
}