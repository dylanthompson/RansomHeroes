var spriteConfigs: { [s: string]: {} };
var entityIDs: Array<string> = ["zangief", "silversamurai"];

class Coordinate {
    public x: number;
    public y: number;
}

class SpriteSetConfig {
    public axis: Coordinate = null;
    public prefix: string = null;
    public suffix: string = null;
    public pad0: number = null;
}
class StateSpriteFrameData {
    public start: number = null;
    public end: number = null;
}
class StatesSpriteData { [stateName: string]:  StateSpriteFrameData };
class EntitiesSpriteSetData { [entityName: string]: EntitySpriteSetData; };
class EntitySpriteSetData {
    public states: StatesSpriteData;
    public config: SpriteSetConfig;
}

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
        for (let i = stateInfo.start; i <= stateInfo.end; i++) {
            paths.push(`images/${entityID}/${entitySpriteData.config.prefix + i.toString().padStart(entitySpriteData.config.pad0, '0') + entitySpriteData.config.suffix}`);
        }
        return paths;
    }
}
