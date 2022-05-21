const fs = require("fs");

// Calls the Itemlists that are common across all 3 characters and sets variables for them
const commandsAll = require("./ItemsGlobal/commandsAll");
const icecreamAll = require("./ItemsGlobal/icecreamAll");
const ingredientsAll = require("./ItemsGlobal/ingredientsAll");
const itemCommands = require("./ItemsGlobal/itemCommands");
const keyitems = require("./ItemsGlobal/keyitems");
const shotlocksAll = require("./ItemsGlobal/shotlocksAll");
const synthCrystals = require("./ItemsGlobal/synthCrystals");
const synthOreItems = require("./ItemsGlobal/synthOreItems");
const synthRecipes = require("./ItemsGlobal/synthRecipes");

// Calls the Itemlists that are exclusive to Ventus and sets variables for them
const actionV = require("./ItemsVentus/actionV");
const commandsV = require("./ItemsVentus/commandsV");
const icecreamV = require("./ItemsVentus/icecreamV");
const ingredientsV = require("./ItemsVentus/ingredientsV");
const keybladesV = require("./ItemsVentus/keybladesV");
const shotlocksV = require("./ItemsVentus/shotlocksV");
const stickersV = require("./ItemsVentus/stickersV");

// Calls the Itemlists that are exclusive to Terra and sets variables for them
const actionT = require("./ItemsTerra/actionT");
const commandsT = require("./ItemsTerra/commandsT");
const icecreamT = require("./ItemsTerra/icecreamT");
const ingredientsT = require("./ItemsTerra/ingredientsT");
const keybladesT = require("./ItemsTerra/keybladesT");
const shotlocksT = require("./ItemsTerra/shotlocksT");
const stickersT = require("./ItemsTerra/stickersT");

// Calls the Chests and Stickers from Ventus and sets a variables for them
const adressesV = require("./LocationsVentus");
const ventusStickers = require("./LocationsVentus/ventusStickers");

// Calls the Chests and Stickers from Terra and sets a variables for them
const adressesT = require("./LocationsTerra");
const terraStickers = require("./LocationsTerra/terraStickers");

// Sets Variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - parseInt("60E334", 16);

// Joins all the adresses (First Stickers, then Chests)
const adressesFinal = [
  ...ventusStickers,
  ...adressesV,
  ...terraStickers,
  ...adressesT,
];

// Combines all rewards that can be obtained from Stickers and sets an array for them for Ventus
const valuesStickersV = [
  // ...ingredientsAll,
  ...keyitems,
  ...synthCrystals,
  // ...synthOreItems,
  // ...synthRecipes,
  // ...ingredientsV,
  ...keybladesV,
  ...stickersV,
];
const valuesStickersVCopy = valuesStickersV.slice();

// Randomizes the possible rewards for Stickers into the Sticker slots for Ventus
let randomized = [];
for (let i = 0; i < ventusStickers.length; i++) {
  let random = Math.floor(Math.random() * valuesStickersVCopy.length);
  const element = valuesStickersVCopy.splice(random, 1)[0];
  randomized.push(element);
}

// Combines all rewards that remain sets an array for them for Ventus
const valuesFinalV = [
  ...valuesStickersVCopy,
  ...commandsAll,
  //...icecreamAll,
  ...itemCommands,
  ...shotlocksAll,
  ...actionV,
  ...commandsV,
  ...icecreamV,
  ...shotlocksV,
];
const valuesFinalVCopy = valuesFinalV.slice();

// Randomizes all remaining rewards into Chests for Ventus
for (let i = 0; i < adressesV.length; i++) {
  let random = Math.floor(Math.random() * valuesFinalVCopy.length);
  const element = valuesFinalVCopy.splice(random, 1)[0];
  randomized.push(element);
}

// Combines all rewards that can be obtained from Stickers and sets an array for them for Terra
const valuesStickersT = [
  // ...ingredientsAll,
  ...keyitems,
  ...synthCrystals,
  // ...synthOreItems,
  // ...synthRecipes,
  ...ingredientsT,
  ...keybladesT,
  ...stickersT,
];
const valuesStickersTCopy = valuesStickersT.slice();

// Randomizes the possible rewards for Stickers into the Sticker slots for Terra
for (let i = 0; i < terraStickers.length; i++) {
  let random = Math.floor(Math.random() * valuesStickersTCopy.length);
  const element = valuesStickersTCopy.splice(random, 1)[0];
  randomized.push(element);
}

// Combines all rewards that remain sets an array for them for Terra
const valuesFinalT = [
  ...valuesStickersTCopy,
  ...commandsAll,
  //...icecreamAll,
  ...itemCommands,
  ...shotlocksAll,
  ...actionT,
  ...commandsT,
  ...icecreamT,
  ...shotlocksT,
];
const valuesFinalTCopy = valuesFinalT.slice();

// Randomizes all remaining rewards into Chests for Terra
for (let i = 0; i < adressesT.length; i++) {
  let random = Math.floor(Math.random() * valuesFinalTCopy.length);
  const element = valuesFinalTCopy.splice(random, 1)[0];
  randomized.push(element);
}

let finished = [
  `function _OnInit()\nend\n\nfunction _OnFrame()\nif ReadByte(0x${storyModifier
    .toString(16)
    .toUpperCase()}) == 0x00 then`,
];
// let finished = [];
for (let i = 0; i < adressesFinal.length; i++) {
  if (i == ventusStickers.length + adressesV.length) {
    finished.push(
      `end\nif ReadByte(0x${storyModifier
        .toString(16)
        .toUpperCase()}) == 0x02 then`
    );
  }
  let offsetCalc = parseInt(adressesFinal[i], 16) - parseInt("60E334", 16);
  finished.push(
    `WriteInt(0x${offsetCalc.toString(16).toUpperCase()}, ${randomized[i]})`
  );
}
finished.push([`end\nend`]);

fs.writeFile("./seed.lua", finished.join("\n"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});
