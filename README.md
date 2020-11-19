# Unofficial Genshin Impact API Wrapper

<div align="center">
    <a href="https://www.npmjs.com/package/genshin-impact-wrapper"><img src="https://img.shields.io/npm/v/genshin-impact-wrapper"></a>
    <a href="https://www.npmjs.com/package/genshin-impact-wrapper"><img src="https://img.shields.io/npm/dm/genshin-impact-wrapper"></a>
    <a href="https://github.com/xhayper/genshin-impact-wrapper/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/genshin-impact-wrapper"></a>
</div>
<div align="center">
    <a href="https://www.npmjs.com/package/genshin-impact-wrapper"><img src="https://nodei.co/npm/genshin-impact-wrapper.png?stars=true"></a>
</div>

* What can this package do?
<br>Search information about a character.

* How do i use it?

Typescript

```typescript
import * as genshin from "genshin-impact-wrapper";

(async () => {
    console.log((await genshin.getCharacters()));
    console.log((await genshin.getCharacterByRarity(5)));
    console.log((await genshin.getCharacterByName("Diona")));
    console.log((await genshin.getCharacterByWeapon("Bow")));
    console.log((await genshin.getCharacterByVision("Cryo")));
    console.log((await genshin.getCharacterByGender("Female")));
    console.log((await genshin.getCharacterByNation("Mondstadt")));
})();
```

Javascript

```javascript
const genshin = require("genshin-impact-wrapper");

(async () => {
    console.log((await genshin.getCharacters()));
    console.log((await genshin.getCharacterByRarity(5)));
    console.log((await genshin.getCharacterByName("Diona")));
    console.log((await genshin.getCharacterByWeapon("Bow")));
    console.log((await genshin.getCharacterByVision("Cryo")));
    console.log((await genshin.getCharacterByGender("Female")));
    console.log((await genshin.getCharacterByNation("Mondstadt")));
})();
```

* Cool! How do i install it?
You can use your npm package manager of your choice.

NPM
```
npm install genshin-impact-wrapper
```

Yarn
```
yarn add genshin-impact-wrapper
```

* Credits
Data from [Here](https://github.com/AkenoSann/genshin-impact-api), [here](https://github.com/HerixOfficial/genshin-impact) and [here](https://genshin-impact.fandom.com/)