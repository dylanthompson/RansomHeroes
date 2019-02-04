import { Coordinate } from "../lib/2DGame";

var spriteConfigs: { [s: string]: {} };
var entityIDs: Array<string> = ["zangief", "silversamurai"];

export class SpriteSetConfig {
    public axis: Coordinate = null;
    public prefix: string = null;
    public suffix: string = null;
    public pad0: number = null;
}
export class StateSpriteFrameData {
    public start: number = null;
    public end: number = null;
}
export class StatesSpriteData { [stateName: string]:  StateSpriteFrameData };
export class EntitiesSpriteSetData { [entityName: string]: EntitySpriteSetData; };
export class EntitySpriteSetData {
    public states: StatesSpriteData;
    public config: SpriteSetConfig;
}

export type EntitySpriteData = { [entityName: string]: StateSpriteData };
export type StateSpriteData = { [stateName: string]:  StateSpriteFrameData };

export class SpritePathService {
    private _entityInfo: any;
    constructor() {
        this._entityInfo = new EntitiesSpriteSetData();
        for (let entityID of entityIDs) {
            this._entityInfo[entityID] = require(`../../images/${entityID}/sprite.json`);
        }
    }

    public getEntitySpritePaths(entityID:string): EntitySpriteSetData {
        return this._entityInfo[entityID];
    }

    public getStateSpritePaths(entityID:string, state: string): Array<string> {
        let entitySpriteData:EntitySpriteSetData = this.getEntitySpritePaths(entityID);
        let stateInfo: StateSpriteFrameData = entitySpriteData.states[state];
        let paths = new Array<string>();

        let start = stateInfo.start;
        let end = stateInfo.end;

        if (end > start) {
            for (let i = start; i <= end; i++) {
                paths.push(`images/${entityID}/${entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix}`);
            }
        } else {
            for (let i = start; i >= end; i--) {
                paths.push(`images/${entityID}/${entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix}`);
            }
        }

        return paths;
    }
}
