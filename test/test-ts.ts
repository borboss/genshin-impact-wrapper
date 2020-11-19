import { client } from "../src/main";
const api = new client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
    console.log((await api.getCharacterByRarity(5)));
})();