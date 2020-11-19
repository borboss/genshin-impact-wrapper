# Unofficial Genshin Impact API

<div align="center">
    <a href="https://www.npmjs.com/package/genshin-api"><img src="https://img.shields.io/npm/v/genshin-api"></a>
    <a href="https://www.npmjs.com/package/genshin-api"><img src="https://img.shields.io/npm/dm/genshin-api"></a>
    <a href="https://github.com/xhayper/genshin-api/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/genshin-api"></a>
</div>
<div align="center">
    <a href="https://www.npmjs.com/package/genshin-api"><img src="https://nodei.co/npm/genshin-api.png?stars=true"></a>
</div>

* What can this package do?
<br>Search information about a character.

* How do i use it?

Typescript

```typescript
import { client } from "genshin-api";
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
const genshin = require("genshin-api");
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
npm install genshin-api
```

Yarn
```
yarn add genshin-api
```

* Credits
Data from [Here](https://github.com/AkenoSann/genshin-impact-api), [here](https://github.com/HerixOfficial/genshin-impact) and [here](https://genshin-impact.fandom.com/)