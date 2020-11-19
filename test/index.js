const api = new (require("../dist/main.js")).client();

(async () => {
    console.log((await api.getCharacters())[0]);
    console.log((await api.getCharacterByWeapon("Bow"))[0]);
    console.log((await api.getCharacterByVision("Cryo"))[0]);
    console.log((await api.getCharacterByNation("Mondstadt"))[0]);
})();