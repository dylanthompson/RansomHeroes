import { Coordinate, Direction } from "../lib/2DGame";

var GRAVITY_SPEED = 8;
var Y_VEL_DECAY = 1;
var GROUND_Y = 575;
var WALL_1 = 25;
var WALL_2 = 775;

var Y_SUPER_JUMP = -26;
var Y_NORMAL_JUMP = -16;
var X_JUMP = 4.5;

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
    private _velocity: Coordinate;

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

    public hasFiniteState() {
        return this._endState != 0;
    }

    public npcBehavior(timeDelta: number) {
        let rand = Math.floor(Math.random() * 400);
        let rand2 = Math.floor(Math.random() * 100);

        if (this._state == "air-idle") {
            
            this._x += timeDelta * this._velocity.x;
            this._velocity.y += timeDelta * Y_VEL_DECAY;
            if (this._velocity.y > GRAVITY_SPEED) {
                this._velocity.y = GRAVITY_SPEED;
            }
            this._y += this._velocity.y;
            if (this._x >= WALL_2) {
                this._x = WALL_2;
                this._velocity.x = 0;
            } else if (this._x <= WALL_1) {
                this._x = WALL_1;
                this._velocity.x = 0;
            }
            if (this._y > GROUND_Y) {
                if (Math.abs(this._velocity.x) > 0) {
                    this._state = "land-forward";
                } else {
                    this._state = "land";
                }
                this._progress = 0;
                this._endState = this._turnSpeed;
                
                this._y = GROUND_Y;
            }
        } else if (this._state == "idle") {
            if (rand == 1) {
                this._state = "walk";
            } else if (rand == 2) {
                this._state = "turn"; // this._direction = this.invertDirection();
                this._progress = 0;
                this._endState = this._turnSpeed;
            } else if (rand == 3) {
                this._state = "air-jump-forward";
                let jumpYVelocity = Y_NORMAL_JUMP;
                if (rand2 < 50) {
                    jumpYVelocity = Y_SUPER_JUMP;
                }
                this._velocity = new Coordinate(X_JUMP * this.getUnitVectorX(), jumpYVelocity);
                this._endState = Math.abs(jumpYVelocity / Y_VEL_DECAY);
            } else if (rand == 4) {
                this._state = "air-jump";
                let jumpYVelocity = Y_NORMAL_JUMP;
                if (rand2 < 50) {
                    jumpYVelocity = Y_SUPER_JUMP;
                }
                this._velocity = new Coordinate(0, jumpYVelocity);
                this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));
            }
        } else if (this._state == "walk") {
            if (rand == 1) {
                this._state = "idle";
            } else if (rand == 2) {
                this._state = "air-jump-forward";
                let jumpYVelocity = Y_NORMAL_JUMP;
                if (rand2 < 50) {
                    jumpYVelocity = Y_SUPER_JUMP;
                }
                this._velocity = new Coordinate(X_JUMP * this.getUnitVectorX(), jumpYVelocity);
                this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));
            } else if (rand == 3) {
                this._state = "air-jump";
                let jumpYVelocity = Y_NORMAL_JUMP;
                if (rand2 < 50) {
                    jumpYVelocity = Y_SUPER_JUMP;
                }
                this._velocity = new Coordinate(0, jumpYVelocity);
                this._endState = Math.ceil(Math.abs(jumpYVelocity / Y_VEL_DECAY));
            } else {
                this._x += timeDelta * this._walkingSpeed * this.getUnitVectorX();
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
        } else if (this._state == "land" || this._state == "land-forward") {
            this._progress += 1;
            if (this._progress >= this._endState) {
                this._endState = this._progress = 0;
                this._state = "idle";
            }
        } else if (this._state == "turn") {
            this._progress += 1;
            if (this._progress >= this._endState) {
                this._endState = this._progress = 0;
                this._direction = this.invertDirection();
                if (rand <= 100) {
                    this._state = "idle";
                } else {
                    this._state = "walk";
                }   
            }
        } else if (this._state == "air-jump-forward") {
            this._progress += 1;
            this._x += timeDelta * this._velocity.x;
            // Decay on Y Velocity
            this._velocity.y += timeDelta * Y_VEL_DECAY; 
            // Max fall velocity
            if (this._velocity.y > GRAVITY_SPEED) {
                this._velocity.y = GRAVITY_SPEED;
            }
            this._y += this._velocity.y;

            if (this._x >= WALL_2) {
                this._x = WALL_2;
                this._velocity.x = 0;
            } else if (this._x <= WALL_1) {
                this._x = WALL_1;
                this._velocity.x = 0;
            }
            
            if (this._progress >= this._endState) {
                this._endState = this._progress = 0;
                this._state = "air-idle";
            }
        } else if (this._state == "air-jump") {
            this._progress += 1;
            this._x += timeDelta * this._velocity.x;
            // Decay on Y Velocity
            this._velocity.y += timeDelta * Y_VEL_DECAY; 
            // Max fall velocity
            if (this._velocity.y > GRAVITY_SPEED) {
                this._velocity.y = GRAVITY_SPEED;
            }
            this._y += this._velocity.y;

            if (this._x >= WALL_2) {
                this._x = WALL_2;
                this._velocity.x = 0;
            } else if (this._x <= WALL_1) {
                this._x = WALL_1;
                this._velocity.x = 0;
            }
            
            if (this._progress >= this._endState) {
                this._endState = this._progress = 0;
                this._state = "air-idle";
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
        this._endState = 0;
        this._velocity = new Coordinate(0, 0);
        this._x = x;
        this._y = y;
    }
}