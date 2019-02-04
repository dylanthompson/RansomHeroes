export enum Direction {
    Left = 1,
    Right = 2
}

var GRAVITY_SPEED = 3;
var GROUND_Y = 575;
var WALL_1 = 25;
var WALL_2 = 775;

export class Entity {
    private _entityID: string;
    private _state: string;
    private _direction: Direction;
    private _x: number;
    private _y: number;
    private _walkingSpeed: number;
    private _progress: number;
    private _endState: number;
    private _turnSpeed: number;

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get direction(): Direction {
        return this._direction;
    }

    public get entityID() : string
    {
        return this._entityID;
    }

    public get state() : string
    {
        return this._state;
    }

    public getUnitVectorX() {
        return this._direction == Direction.Left ? -1 : 1;
    }

    public invertDirection() {
        return this._direction == Direction.Left ? Direction.Right : Direction.Left;
    }

    public npcBehavior(timeDelta: number) {
        let rand = Math.floor(Math.random() * 200);

        if (this._state == "air-idle") {
            this._y += timeDelta * GRAVITY_SPEED;
            if (this._y > GROUND_Y) {
                this._state = "idle";
                this._y = GROUND_Y;
            }
        } else if (this._state == "idle") {
            if (rand == 2) {
                this._state = "walk";
            } else if (rand == 1) {
                this._state = "turn"; // this._direction = this.invertDirection();
                this._progress = 0;
                this._endState = this._turnSpeed;
            }
        } else if (this._state == "walk") {
            if (rand == 1) {
                this._state = "idle";
            } else {
                this._x += this._walkingSpeed * this.getUnitVectorX();
                if (this._x >= WALL_2) {
                    this._x = WALL_2;
                    this._state = "turn"; //this._direction = this.invertDirection();
                    this._progress = 0;
                    this._endState = this._turnSpeed;
                } else if (this._x <= WALL_1) {
                    this._x = WALL_1;
                    this._state = "turn"; //this._direction = this.invertDirection();
                    this._progress = 0;
                    this._endState = this._turnSpeed;
                }
            }
        } else if (this._state == "turn") {
            this._progress += 1;
            if (this._progress >= this._endState) {
                this._direction = this.invertDirection();
                if (rand <= 100) {
                    this._state = "idle";
                } else {
                    this._state = "walk";
                }   
            }
        }
    }

    public getProgressPercentage() {
        return this._progress / this._endState;
    }

    public update(timeDelta: number): void {
        if (this._state == null) {
            this.determineState();
        }
        this.npcBehavior(timeDelta);
    }

    public determineState() {
        if (this._y < GROUND_Y) {
            this._state = "air-idle";
        }

        if (this._y > GROUND_Y) {
            this._state = "idle";
            this._y = GROUND_Y;
        }
    }

    constructor(entityID: string, x: number, y: number) {
        this._entityID = entityID;
        this._state = null;
        this._direction = Direction.Right;
        this._walkingSpeed = 2;
        this._turnSpeed = 12;
        this._progress = 0;
        this._endState = 1;
        this._x = x;
        this._y = y;
    }
}