import * as type from "./types";

export interface character {
    name: string,
    title: string,
    gender: type.gender,
    vision: type.vision,
    weapon: type.weapon,
    nation: type.nation,
    rarity: number,
    image: string,
    constellation: string,
    birthday: string,
    description: string,
    url: string,
    isUseless?: boolean
}