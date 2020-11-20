import * as type from "./types";

export interface character {
    name: string,
    title?: string,
    gender: type.gender,
    vision: type.vision,
    weapon: type.weapon,
    nation?: type.nation,
    rarity: number,
    images?: {
        male?: {
            cardImage?: string,
            portraitImage?: string,
        },
        female?: {
            cardImage?: string,
            portraitImage?: string,
        },
        both?: {
            cardImage?: string,
            portraitImage?: string,
        }
    },
    constellation?: string,
    birthday?: string,
    description: string,
    url?: string
}