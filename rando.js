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

// Joins all the adresses (First Stickers, then Chests)
const adressesFinal = [
  ...ventusStickers,
  ...terraStickers,
  ...adressesV,
  ...adressesT,
]

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

// Combines all rewards that can be obtained from Stickers and sets an array for them for Terra
const valuesStickersT = [
  ...valuesStickersVCopy,
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

const valuesFinal = [
  ...valuesStickersTCopy,
  ...commandsAll,
  //...icecreamAll,
  ...itemCommands,
  ...shotlocksAll,
  ...actionV,
  ...commandsV,
  ...icecreamV,
  ...shotlocksV,
  ...actionT,
  ...commandsT,
  ...icecreamT,
  ...shotlocksT,
];
const valuesFinalCopy = valuesFinal.slice();

for (let i = 0; i < valuesFinal.length; i++) {
  let random = Math.floor(Math.random() * valuesFinalCopy.length);
  const element = valuesFinalCopy.splice(random, 1)[0];
  randomized.push(element);
}

let finished = [`function _OnInit()\nend\n\nfunction _OnFrame()`];
// let finished = [];
for (let i = 0; i < adressesFinal.length; i++) {
  let offsetCalc = parseInt(adressesFinal[i], 16) - parseInt("60E334", 16);
  finished.push(`WriteInt(0x${offsetCalc.toString(16).toUpperCase()}, ${randomized[i]})`);
}
finished.push([`end`]);

fs.writeFile("./seed.lua", finished.join("\n"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});