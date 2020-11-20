import * as dataObject from "./util/dataObject";
import * as type from "./util/types";
import * as glob from "glob";


/**
 * @description Return all of the character data that this library have.
 */

export async function getCharacters(): Promise<dataObject.character[]> {
    let characterDataList: dataObject.character[] = [];
    const filePathList = glob.sync(__dirname + "\\..\\data\\characters\\**\\*.json");
    for (const filePath of filePathList) {
        characterDataList.push(require(filePath) as dataObject.character);
    }
    return characterDataList;
}

/**
 * @description Get the character data by their name.
 */

export async function getCharacterByName(name:string): Promise<dataObject.character> {
    return (await getCharacters()).filter((character) => character.name.toLowerCase() === name.toLowerCase())[0];
}

/**
 * @description Get a list of character data by their rarity.
 */

export async function getCharacterByRarity(rarity:number): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.rarity === rarity);
}

/**
 * @description Get a list of character data by their gender.
 */

export async function getCharacterByGender(gender:type.gender): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.gender === gender);
}

/**
 * @description Get a list of character data by their weapon.
 */

export async function getCharacterByWeapon(weapon:type.weapon): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.weapon === weapon);
}

/**
 * @description Get a list of character data by their vision.
 */

export async function getCharacterByVision(vision:type.vision): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.vision === vision);
}

/**
 * @description Get the character data by their nation.
 */

export async function getCharacterByNation(nation:type.nation): Promise<dataObject.character[]> {
    return (await getCharacters()).filter((character) => character.nation === nation);
}