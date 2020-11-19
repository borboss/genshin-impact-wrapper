import * as type from "./types";

interface character {
    name: string,
    gender: type.gender,
    vision: type.element,
    weapon: type.weapon,
    nation: type.nation,
    rarity: number
}

export { character };