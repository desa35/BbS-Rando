// const fs = require("fs");

// Calls the Itemlists that are common across all 3 characters and initializes variables for them
import { commandsAll } from "./ItemsGlobal/commandsAll.js";
import { icecreamAll } from "./ItemsGlobal/icecreamAll.js";
import { ingredientsAll } from "./ItemsGlobal/ingredientsAll.js";
import { itemCommands } from "./ItemsGlobal/itemCommands.js";
import { keyitems } from "./ItemsGlobal/keyitems.js";
import { shotlocksAll } from "./ItemsGlobal/shotlocksAll.js";
import { synthCrystals } from "./ItemsGlobal/synthCrystals.js";
import { synthOreItems } from "./ItemsGlobal/synthOreItems.js";
import { synthRecipes } from "./ItemsGlobal/synthRecipes.js";

// Calls the Itemlists that are exclusive to Ventus and initializes variables for them
import { actionV } from "./ItemsVentus/actionV.js";
import { commandsV } from "./ItemsVentus/commandsV.js";
import { icecreamV } from "./ItemsVentus/icecreamV.js";
import { ingredientsV } from "./ItemsVentus/ingredientsV.js";
import { keybladesV } from "./ItemsVentus/keybladesV.js";
import { shotlocksV } from "./ItemsVentus/shotlocksV.js";
import { startingWeaponV } from "./ItemsVentus/startingWeaponV.js";
import { stickersV } from "./ItemsVentus/stickersV.js";

// Calls the Itemlists that are exclusive to Terra and initializes variables for them
import { actionT } from "./ItemsTerra/actionT.js";
import { commandsT } from "./ItemsTerra/commandsT.js";
import { icecreamT } from "./ItemsTerra/icecreamT.js";
import { ingredientsT } from "./ItemsTerra/ingredientsT.js";
import { keybladesT } from "./ItemsTerra/keybladesT.js";
import { shotlocksT } from "./ItemsTerra/shotlocksT.js";
import { startingWeaponT } from "./ItemsTerra/startingWeaponT.js";
import { stickersT } from "./ItemsTerra/stickersT.js";

// Calls the Itemlists that are exclusive to Aqua and initializes variables for them
import { actionA } from "./ItemsAqua/actionA.js";
import { commandsA } from "./ItemsAqua/commandsA.js";
import { icecreamA } from "./ItemsAqua/icecreamA.js";
import { ingredientsA } from "./ItemsAqua/ingredientsA.js";
import { keybladesA } from "./ItemsAqua/keybladesA.js";
import { shotlocksA } from "./ItemsAqua/shotlocksA.js";
import { startingWeaponA } from "./ItemsAqua/startingWeaponA.js";
import { stickersA } from "./ItemsAqua/stickersA.js";

// Calls the adresses for the Chests and Stickers from Ventus and initializes a variables for them
import { adressesV } from "./LocationsVentus/index.js";
import { ventusStickers } from "./LocationsVentus/ventusStickers.js";

// Calls the adresses for the Chests and Stickers from Terra and initializes a variables for them
import { adressesT } from "./LocationsTerra/index.js";
import { terraStickers } from "./LocationsTerra/terraStickers.js";

// Calls the adresses for the Chests and Stickers from Aqua and initializes a variables for them
import { adressesA } from "./LocationsAqua/index.js";
import { aquaStickers } from "./LocationsAqua/aquaStickers.js";

// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variables for currently held weapon (All characters)
const currentWeapon = parseInt("10F9B365", 16) - offset;
const currentWeaponInMenu = parseInt("10FA26DE", 16) - offset;

// Initializes variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - offset;

// Initializes variable for the character check conditional (Checks if not on Title Screen, Character Selection or pre-Orbs cutscene)
const characterCheck = `if ReadByte(0x206D6C) ~= 0xFF or ReadByte(0x206D6D) ~= 0xFF or ReadByte(0x206D6E) ~= 0xFF then
if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x0D or ReadByte(0x206D6E) ~= 0x00 then
if ReadByte(0x206D6C) ~= 0x01 or ReadByte(0x206D6D) ~= 0x02 or ReadByte(0x206D6E) ~= 0x00 or ReadShort(0x206D70) ~= 0x01 or ReadShort(0x206D72) ~= 0x00 or ReadShort(0x206D74) ~= 0x01 then
if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x0`;

// Initializes variable for the current weapon check conditional for Ventus, Terra and Aqua (Checks if fighting orbs)
const weaponCheckV = `if ReadByte(0x206D6C) == 0x01 and ReadByte(0x206D6D) == 0x02 and ReadByte(0x206D6E) == 0x00 and ReadShort(0x206D70) == 0x44 and ReadShort(0x206D72) == 0x44 and ReadShort(0x206D74) == 0x44 then\nWriteInt(0x`;
const weaponCheckT = `if ReadByte(0x206D6C) == 0x01 and ReadByte(0x206D6D) == 0x02 and ReadByte(0x206D6E) == 0x00 and ReadShort(0x206D70) == 0x3B and ReadShort(0x206D72) == 0x3B and ReadShort(0x206D74) == 0x3B then\nWriteInt(0x`;
const weaponCheckA = `if ReadByte(0x206D6C) == 0x01 and ReadByte(0x206D6D) == 0x02 and ReadByte(0x206D6E) == 0x00 and ReadShort(0x206D70) == 0x4B and ReadShort(0x206D72) == 0x4B and ReadShort(0x206D74) == 0x4B then\nWriteInt(0x`;

function randomization() {
  // Initializes an array to hold the randomized items
  let randomized = [];

  // Initializes an array that holds the entirety of the lua script
  let finished = [
    `function _OnInit()\nend\n\nfunction _OnFrame()\n${characterCheck}0 then`,
  ];

  // Joins all the adresses (First Stickers, then Chests)
  const adressesFinal = [
    ...ventusStickers,
    ...adressesV,
    ...terraStickers,
    ...adressesT,
    ...aquaStickers,
    ...adressesA,
  ];

  // Sets a random starting weapon for Ventus, removes it from the randomization pool and initializes a variable for the weapon
  let randoWeaponV = Math.floor(Math.random() * startingWeaponV.length);
  const removedWeaponMenuV = keybladesV.splice(randoWeaponV, 1)[0];
  const removedWeaponV = startingWeaponV.splice(randoWeaponV, 1)[0];
  const randomStartingWeaponV = `${weaponCheckV}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponV})\nWriteInt(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuV})\nend`;
  finished.push(randomStartingWeaponV);

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Ventus
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
  for (let i = 0; i < ventusStickers.length; i++) {
    let random = Math.floor(Math.random() * valuesStickersVCopy.length);
    const element = valuesStickersVCopy.splice(random, 1)[0];
    randomized.push(element);
  }

  // Combines all rewards that remain initializes an array for them for Ventus
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

  // Sets a random starting weapon for Terra, removes it from the randomization pool and initializes a variable for the weapon
  let randoWeaponT = Math.floor(Math.random() * startingWeaponT.length);
  const removedWeaponMenuT = keybladesT.splice(randoWeaponT, 1)[0];
  const removedWeaponT = startingWeaponT.splice(randoWeaponT, 1)[0];
  const randomStartingWeaponT = `${weaponCheckT}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponT})\nWriteInt(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuT})\nend`;

  // Combines all rewards that can be obtained from Stickers and initializes an array for them for Terra
  const valuesStickersT = [
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    // ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsT,
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

  // Combines all rewards that remain initializes an array for them for Terra
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

  // Sets a random starting weapon for Aqua, removes it from the randomization pool and initializes a variable for the weapon
  let randoWeaponA = Math.floor(Math.random() * startingWeaponA.length);
  const removedWeaponMenuA = keybladesA.splice(randoWeaponA, 1)[0];
  const removedWeaponA = startingWeaponA.splice(randoWeaponA, 1)[0];
  const randomStartingWeaponA = `${weaponCheckA}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponA})\nWriteInt(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuA})\nend`;

  // Combines all rewards that can be obtained from Stickers and initializes an array for them for Aqua
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

  // Combines all rewards that remain initializes an array for them for Aqua
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

  // Assigns an adress to every randomized item
  for (let i = 0; i < adressesFinal.length; i++) {
    if (i == ventusStickers.length + adressesV.length) {
      finished.push(`end\nend\nend\nend\n${characterCheck}2 then\n${randomStartingWeaponT}`);
    } else if (
      i ==
      ventusStickers.length +
        adressesV.length +
        terraStickers.length +
        adressesT.length
    ) {
      finished.push(`end\nend\nend\nend\n${characterCheck}1 then\n${randomStartingWeaponA}`);
    }
    let offsetCalc = parseInt(adressesFinal[i], 16) - offset;
    finished.push(
      `WriteInt(0x${offsetCalc.toString(16).toUpperCase()}, 0x${randomized[i]})`
    );
  }
  finished.push([`end\nend\nend\nend\nend`]);
  var textToSave = finished.join("\n");

  var hiddenElement = document.createElement("a");

  hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
  hiddenElement.target = "_blank";
  hiddenElement.download = "seed.lua";
  hiddenElement.click();
}

const click = document.querySelector("#click");
click.addEventListener("click", randomization);
