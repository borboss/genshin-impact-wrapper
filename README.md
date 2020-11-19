# Unofficial Genshin Impact API

* What can this package do?
<br>Search information about a character.

* How do i use it?

Typescript

```typescript
import { client } from "genshin-api";
const api = new client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
    console.log((await api.getCharacterByRarity(5)));
})();
```

Javascript

```javascript
const genshin = require("genshin-api");
const api = new genshin.client();

(async () => {
    console.log((await api.getCharacters()));
    console.log((await api.getCharacterByWeapon("Bow")));
    console.log((await api.getCharacterByVision("Cryo")));
    console.log((await api.getCharacterByNation("Mondstadt")));
    console.log((await api.getCharacterByRarity(5)));
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