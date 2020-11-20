const genshin = require("genshin-impact-wrapper");

(async () => {
    /* I don't know why but runkit won't work with this :OMEGALUL: */
    console.log((await genshin.getCharacters()));
    console.log((await genshin.getCharacterByRarity(5)));
    console.log((await genshin.getCharacterByName("Diona")));
    console.log((await genshin.getCharacterByWeapon("Bow")));
    console.log((await genshin.getCharacterByVision("Cryo")));
    console.log((await genshin.getCharacterByGender("Female")));
    console.log((await genshin.getCharacterByNation("Mondstadt")));
})();