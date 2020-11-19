const genshin = require("genshin-impact-wrapper");
const api = new genshin.client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByRarity(5)));
    console.log((await api.getCharacterByName("Diona")));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
})();