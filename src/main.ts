import * as dataObject from "./util/dataObject";
import * as type from "./util/types";
import * as glob from "glob";

export async function getCharacters(): Promise<dataObject.character[]> {
    let characterDataList: dataObject.character[] = [];
    const filePathList = glob.sync(__dirname + "\\..\\data\\characters\\**\\*.json");
    for (const filePath of filePathList) {
        characterDataList.push(require(filePath) as dataObject.character);
    }
    return characterDataList;
}

export async function getCharacterByName(name:string): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.name.toLowerCase() === name.toLowerCase());
}

export async function getCharacterByRarity(rarity:number): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.rarity === rarity);
}

export async function getCharacterByGender(gender:type.gender): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.gender === gender);
}

export async function getCharacterByWeapon(weapon:type.weapon): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.weapon === weapon);
}

export async function getCharacterByVision(vision:type.vision): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.vision === vision);
}

export async function getCharacterByNation(nation:type.nation): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.nation === nation);
}