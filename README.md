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
import { client } from "genshin-impact-wrapper";
const api = new client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByRarity(5)));
    console.log((await api.getCharacterByName("Diona")));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
})();
```

Javascript

```javascript
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