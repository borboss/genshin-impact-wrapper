import * as dataObject from "./util/dataObject";
import * as type from "./util/types";
import * as glob from "glob";

export class client {

    async getCharacters() {
        let characterDataList: dataObject.character[] = [];
        const filePathList = glob.sync(__dirname + "\\..\\data\\characters\\**\\*.json");
        for (const filePath of filePathList) {
            characterDataList.push(require(filePath) as dataObject.character);
        }
        return characterDataList;
    }

    async getCharacterByName(name:string) {
        const characterDataList:dataObject.character[] = await this.getCharacters();
        return characterDataList.filter((character) => character.name.toLowerCase() === name.toLowerCase());
    }

    async getCharacterByWeapon(weapon:type.weapon) {
        const characterDataList:dataObject.character[] = await this.getCharacters();
        return characterDataList.filter((character) => character.weapon === weapon);
    }

    async getCharacterByVision(vision:type.vision) {
        const characterDataList:dataObject.character[] = await this.getCharacters();
        return characterDataList.filter((character) => character.vision === vision);
    }

    async getCharacterByNation(nation:type.nation) {
        const characterDataList:dataObject.character[] = await this.getCharacters();
        return characterDataList.filter((character) => character.nation === nation);
    }

    async getCharacterByRarity(rarity:number) {
        const characterDataList:dataObject.character[] = await this.getCharacters();
        return characterDataList.filter((character) => character.rarity === rarity);
    }

}