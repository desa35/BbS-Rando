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

// Calls the Itemlists that are exclusive to Aqua and sets variables for them
const actionA = require("./ItemsAqua/actionA");
const commandsA = require("./ItemsAqua/commandsA");
const icecreamA = require("./ItemsAqua/icecreamA");
const ingredientsA = require("./ItemsAqua/ingredientsA");
const keybladesA = require("./ItemsAqua/keybladesA");
const shotlocksA = require("./ItemsAqua/shotlocksA");
const stickersA = require("./ItemsAqua/stickersA");

// Calls the adresses for the Chests and Stickers from Ventus and sets a variables for them
const adressesV = require("./LocationsVentus");
const ventusStickers = require("./LocationsVentus/ventusStickers");

// Calls the adresses for the Chests and Stickers from Terra and sets a variables for them
const adressesT = require("./LocationsTerra");
const terraStickers = require("./LocationsTerra/terraStickers");

// Calls the adresses for the Chests and Stickers from Aqua and sets a variables for them
const adressesA = require("./LocationsAqua");
const aquaStickers = require("./LocationsAqua/aquaStickers");

// Sets Variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - parseInt("60E334", 16);

// Joins all the adresses (First Stickers, then Chests)
const adressesFinal = [
  ...ventusStickers,
  ...adressesV,
  ...terraStickers,
  ...adressesT,
  ...aquaStickers,
  ...adressesA,
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

// Combines all rewards that can be obtained from Stickers and sets an array for them for Aqua
const valuesStickersA = [
  // ...ingredientsAll,
  ...keyitems,
  ...synthCrystals,
  // ...synthOreItems,
  // ...synthRecipes,
  // ...ingredientsA,
  ...keybladesA,
  ...stickersA,
];
const valuesStickersACopy = valuesStickersA.slice();

// Randomizes the possible rewards for Stickers into the Sticker slots for Aqua
for (let i = 0; i < aquaStickers.length; i++) {
  let random = Math.floor(Math.random() * valuesStickersACopy.length);
  const element = valuesStickersACopy.splice(random, 1)[0];
  randomized.push(element);
}

// Combines all rewards that remain sets an array for them for Aqua
const valuesFinalA = [
  ...valuesStickersACopy,
  ...commandsAll,
  //...icecreamAll,
  ...itemCommands,
  ...shotlocksAll,
  ...actionA,
  ...commandsA,
  ...icecreamA,
  ...shotlocksA,
];
const valuesFinalACopy = valuesFinalA.slice();

// Randomizes all remaining rewards into Chests for Aqua
for (let i = 0; i < adressesA.length; i++) {
  let random = Math.floor(Math.random() * valuesFinalACopy.length);
  const element = valuesFinalACopy.splice(random, 1)[0];
  randomized.push(element);
}

let finished = [
  `function _OnInit()\nend\n\nfunction _OnFrame()
    if ReadByte(0x206D6C) ~= 0xFF or ReadByte(0x206D6D) ~= 0xFF or ReadByte(0x206D6E) ~= 0xFF then
    if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x0D or ReadByte(0x206D6E) ~= 0x00 then
    if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x02 or ReadByte(0x206D6E) ~= 0x00 or ReadShort(0x206D70) ~= 0x01 or ReadShort(0x206D72) ~= 0x00 or ReadShort(0x206D74) ~= 0x01 then
    if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x00 then`,
];
// let finished = [];
for (let i = 0; i < adressesFinal.length; i++) {
  if (i == ventusStickers.length + adressesV.length) {
    finished.push(
      `end\nend\nend\nend
      if ReadByte(0x206D6C) ~= 0xFF or ReadByte(0x206D6D) ~= 0xFF or ReadByte(0x206D6E) ~= 0xFF then
      if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x0D or ReadByte(0x206D6E) ~= 0x00 then
      if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x02 or ReadByte(0x206D6E) ~= 0x00 or ReadShort(0x206D70) ~= 0x01 or ReadShort(0x206D72) ~= 0x00 or ReadShort(0x206D74) ~= 0x01 then
      if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x02 then`
    );
  } else if (
    i ==
    ventusStickers.length +
      adressesV.length +
      terraStickers.length +
      adressesT.length
  ) {
    finished.push(
      `end\nend\nend\nend
      if ReadByte(0x206D6C) ~= 0xFF or ReadByte(0x206D6D) ~= 0xFF or ReadByte(0x206D6E) ~= 0xFF then
      if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x0D or ReadByte(0x206D6E) ~= 0x00 then
      if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x02 or ReadByte(0x206D6E) ~= 0x00 or ReadShort(0x206D70) ~= 0x01 or ReadShort(0x206D72) ~= 0x00 or ReadShort(0x206D74) ~= 0x01 then
      if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x01 then`
    );
  }
  let offsetCalc = parseInt(adressesFinal[i], 16) - parseInt("60E334", 16);
  finished.push(
    `WriteInt(0x${offsetCalc.toString(16).toUpperCase()}, 0x${randomized[i]})`
  );
}
finished.push([`end\nend\nend\nend\nend`]);

fs.writeFile("./seed.lua", finished.join("\n"), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //file written successfully
});
