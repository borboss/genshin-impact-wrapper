import * as dataObject from "./util/dataObject";
import * as type from "./util/types";
import * as glob from "glob";

class client {

    async getCharacters(): Promise<dataObject.character[]> {
        let characterDataList: dataObject.character[] = [];
        const filePathList = glob.sync(__dirname + "\\..\\data\\characters\\**\\*.json");
        for (const filePath of filePathList) {
            characterDataList.push(require(filePath) as dataObject.character);
        }
        return characterDataList;
    }

    async getCharacterByName(name:string): Promise<dataObject.character[]> {
        return (await this.getCharacters()).filter((character) => character.name.toLowerCase() === name.toLowerCase());
    }

    async getCharacterByWeapon(weapon:type.weapon): Promise<dataObject.character[]> {
        return (await this.getCharacters()).filter((character) => character.weapon === weapon);
    }

    async getCharacterByVision(vision:type.vision): Promise<dataObject.character[]> {
        return (await this.getCharacters()).filter((character) => character.vision === vision);
    }

    async getCharacterByNation(nation:type.nation): Promise<dataObject.character[]> {
        return (await this.getCharacters()).filter((character) => character.nation === nation);
    }

    async getCharacterByRarity(rarity:number): Promise<dataObject.character[]> {
        return (await this.getCharacters()).filter((character) => character.rarity === rarity);
    }

}

export { client };