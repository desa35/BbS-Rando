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

// Calls the Chests and Stickers from Ventus and sets a variables for them
const adressesV = require("./LocationsVentus");
const ventusStickers = require("./LocationsVentus/ventusStickers");

// Combines all rewards that can be obtained from Stickers and sets an array for them
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

//
let randomized = [];
for (let i = 0; i < ventusStickers.length; i++) {
  let random = Math.floor(Math.random() * valuesStickersVCopy.length);
  const element = valuesStickersVCopy.splice(random, 1)[0];
  randomized.push(element);
}

const valuesFinalV = [
  ...valuesStickersVCopy,
  ...commandsAll,
  // ...icecreamAll,
  ...itemCommands,
  ...shotlocksAll,
  ...actionV,
  ...commandsV,
  ...icecreamV,
  ...shotlocksV,
];
const valuesFinalVCopy = valuesFinalV.slice();

for (let i = 0; i < valuesFinalV.length; i++) {
  let random = Math.floor(Math.random() * valuesFinalVCopy.length);
  const element = valuesFinalVCopy.splice(random, 1)[0];
  randomized.push(element);
}

// let finished = [`function _OnInit()\nend\n\nfunction _OnFrame()`];
let finished = [];
for (let i = 0; i < adressesV.length; i++) {
  finished.push([adressesV[i], randomized[i]]);
}
// finished.push([`end`]);

fs.writeFile("./seed.txt", finished.join("\n"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});
