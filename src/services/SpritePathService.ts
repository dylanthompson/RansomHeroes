import { JsonConvert, JsonObject, JsonProperty } from "json2typescript";

var spriteConfigs: { [s: string]: {} };
<<<<<<< HEAD
var entityIDs: Array<string> = ["zangief", "silversamurai"];
=======
var entityIDs: Array<string> = ["zangief", "silsam"];
>>>>>>> 7d847f332077d00a8f863aa316a0515c013c7cda

@JsonObject("Coordinate")
class Coordinate {
    @JsonProperty("x", Number)
    public x: number;
    @JsonProperty("y", Number)
    public y: number;
}
@JsonObject("StateSpriteFrameData")
class StateSpriteFrameData {
    @JsonProperty("start", Number)
    public start: number = null;
    @JsonProperty("end", Number)
    public end: number = null;
    @JsonProperty("axis", Coordinate)
    public axis: Coordinate = null;
    @JsonProperty("prefix", String)
    public prefix: string = null;
    @JsonProperty("suffix", String)
    public suffix: string = null;
    @JsonProperty("pad0", Number)     
    public pad0: number = null;
}

@JsonObject("EntitySpriteFrameData")
class EntitySpriteFrameData {

     private _stateInfo: Map<string, StateSpriteFrameData>;
}

spriteConfigs = {};
for (let entityID of entityIDs) {
    spriteConfigs[entityID] = require(`../../images/${entityID}/sprite.json`);
}

<<<<<<< HEAD
export type EntitySpriteData = { [entityName: string]: StateSpriteData };
export type StateSpriteData = { [stateName: string]:  StateSpriteFrameData };

export class SpritePathService {
    private _entityInfo: EntitySpriteData;
=======
export class SpritePathService {
    private _entityInfo: { [entityName: string]:  { [stateName: string]:  StateSpriteFrameData } };
>>>>>>> 7d847f332077d00a8f863aa316a0515c013c7cda
    constructor() {
        this._entityInfo = spriteConfigs;
    }

<<<<<<< HEAD
    public getEntitySpritePaths(entityID:string): StateSpriteData {
        return this._entityInfo[entityID];
    }

=======
    public getEntitySpritePaths(entityID:string): { [stateName: string]: StateSpriteFrameData } {
        return this._entityInfo[entityID];
    }


>>>>>>> 7d847f332077d00a8f863aa316a0515c013c7cda
    public getStateSpritePaths(entityID:string, state: string): Array<string> {
        let jsonConvert: JsonConvert = new JsonConvert();
        let stateInfo: StateSpriteFrameData = jsonConvert.deserializeObject(this.getEntitySpritePaths(entityID)[state], StateSpriteFrameData);
        let paths = new Array<string>();
        for (let i = stateInfo.start; i <= stateInfo.end; i++) {
            paths.push(`images/${entityID}/${stateInfo.prefix + i.toString().padStart(stateInfo.pad0, '0') + stateInfo.suffix}`);
        }
        return paths;
    }
}
