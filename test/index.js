const api = new (require("../dist/main.js")).client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
    console.log((await api.getCharacterByRarity(5)));
})();