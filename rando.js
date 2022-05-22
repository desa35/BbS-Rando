// const fs = require("fs");

// Calls the Itemlists that are common across all 3 characters and sets variables for them
import { commandsAll } from "./ItemsGlobal/commandsAll.js";
import { icecreamAll } from "./ItemsGlobal/icecreamAll.js";
import { ingredientsAll } from "./ItemsGlobal/ingredientsAll.js";
import { itemCommands } from "./ItemsGlobal/itemCommands.js";
import { keyitems } from "./ItemsGlobal/keyitems.js";
import { shotlocksAll } from "./ItemsGlobal/shotlocksAll.js";
import { synthCrystals } from "./ItemsGlobal/synthCrystals.js";
import { synthOreItems } from "./ItemsGlobal/synthOreItems.js";
import { synthRecipes } from "./ItemsGlobal/synthRecipes.js";

// Calls the Itemlists that are exclusive to Ventus and sets variables for them
import { actionV } from "./ItemsVentus/actionV.js";
import { commandsV } from "./ItemsVentus/commandsV.js";
import { icecreamV } from "./ItemsVentus/icecreamV.js";
import { ingredientsV } from "./ItemsVentus/ingredientsV.js";
import { keybladesV } from "./ItemsVentus/keybladesV.js";
import { shotlocksV } from "./ItemsVentus/shotlocksV.js";
import { stickersV } from "./ItemsVentus/stickersV.js";

// Calls the Itemlists that are exclusive to Terra and sets variables for them
import { actionT } from "./ItemsTerra/actionT.js";
import { commandsT } from "./ItemsTerra/commandsT.js";
import { icecreamT } from "./ItemsTerra/icecreamT.js";
import { ingredientsT } from "./ItemsTerra/ingredientsT.js";
import { keybladesT } from "./ItemsTerra/keybladesT.js";
import { shotlocksT } from "./ItemsTerra/shotlocksT.js";
import { stickersT } from "./ItemsTerra/stickersT.js";

// Calls the Itemlists that are exclusive to Aqua and sets variables for them
import { actionA } from "./ItemsAqua/actionA.js";
import { commandsA } from "./ItemsAqua/commandsA.js";
import { icecreamA } from "./ItemsAqua/icecreamA.js";
import { ingredientsA } from "./ItemsAqua/ingredientsA.js";
import { keybladesA } from "./ItemsAqua/keybladesA.js";
import { shotlocksA } from "./ItemsAqua/shotlocksA.js";
import { stickersA } from "./ItemsAqua/stickersA.js";

// Calls the adresses for the Chests and Stickers from Ventus and sets a variables for them
import { adressesV } from "./LocationsVentus/index.js";
import { ventusStickers } from "./LocationsVentus/ventusStickers.js";

// Calls the adresses for the Chests and Stickers from Terra and sets a variables for them
import { adressesT } from "./LocationsTerra/index.js";
import { terraStickers } from "./LocationsTerra/terraStickers.js";

// Calls the adresses for the Chests and Stickers from Aqua and sets a variables for them
import { adressesA } from "./LocationsAqua/index.js";
import { aquaStickers } from "./LocationsAqua/aquaStickers.js";

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
console.log(finished);

// fs.writeFile("./seed.lua", finished.join("\n"), (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   //file written successfully
// });

var textToSave = finished.join("\n");

var hiddenElement = document.createElement("a");

hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
hiddenElement.target = "_blank";
hiddenElement.download = "seed.lua";
hiddenElement.click();
