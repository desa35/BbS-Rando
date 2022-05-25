// Imports the Itemlists that are common across all 3 characters
import { commandsAll } from "./ItemsGlobal/commandsAll.js";
import { icecreamAll } from "./ItemsGlobal/icecreamAll.js";
import { ingredientsAll } from "./ItemsGlobal/ingredientsAll.js";
import { itemCommands } from "./ItemsGlobal/itemCommands.js";
import { keyitems } from "./ItemsGlobal/keyitems.js";
import { shotlocksAll } from "./ItemsGlobal/shotlocksAll.js";
import { synthCrystals } from "./ItemsGlobal/synthCrystals.js";
import { synthOreItems } from "./ItemsGlobal/synthOreItems.js";
import { synthRecipes } from "./ItemsGlobal/synthRecipes.js";

// Imports the Itemlists that are exclusive to Ventus
import { actionV } from "./ItemsVentus/actionV.js";
import { commandStylesV } from "./ItemsVentus/commandStylesV.js";
import { commandsV } from "./ItemsVentus/commandsV.js";
import { dlinksV } from "./ItemsVentus/dlinksV.js";
import { icecreamV } from "./ItemsVentus/icecreamV.js";
import { ingredientsV } from "./ItemsVentus/ingredientsV.js";
import { keybladesV } from "./ItemsVentus/keybladesV.js";
import { reportsV } from "./ItemsVentus/reportsV.js";
import { shotlocksV } from "./ItemsVentus/shotlocksV.js";
import { startingWeaponV } from "./ItemsVentus/startingWeaponV.js";
import { stickersV } from "./ItemsVentus/stickersV.js";

// Imports the Itemlists that are exclusive to Terra
import { actionT } from "./ItemsTerra/actionT.js";
import { commandStylesT } from "./ItemsTerra/commandStylesT.js";
import { commandsT } from "./ItemsTerra/commandsT.js";
import { dlinksT } from "./ItemsTerra/dlinksT.js";
import { icecreamT } from "./ItemsTerra/icecreamT.js";
import { ingredientsT } from "./ItemsTerra/ingredientsT.js";
import { keybladesT } from "./ItemsTerra/keybladesT.js";
import { reportsT } from "./ItemsTerra/reportsT.js";
import { shotlocksT } from "./ItemsTerra/shotlocksT.js";
import { startingWeaponT } from "./ItemsTerra/startingWeaponT.js";
import { stickersT } from "./ItemsTerra/stickersT.js";

// Imports the Itemlists that are exclusive to Aqua
import { actionA } from "./ItemsAqua/actionA.js";
import { commandStylesA } from "./ItemsAqua/commandStylesA.js";
import { commandsA } from "./ItemsAqua/commandsA.js";
import { dlinksA } from "./ItemsAqua/dlinksA.js";
import { icecreamA } from "./ItemsAqua/icecreamA.js";
import { ingredientsA } from "./ItemsAqua/ingredientsA.js";
import { keybladesA } from "./ItemsAqua/keybladesA.js";
import { reportsA } from "./ItemsAqua/reportsA.js";
import { shotlocksA } from "./ItemsAqua/shotlocksA.js";
import { startingWeaponA } from "./ItemsAqua/startingWeaponA.js";
import { stickersA } from "./ItemsAqua/stickersA.js";

// Imports the World and Event checks for the Rewards and Pop-Ups from Ventus
import { singleRewardsVentus } from "./RewardsVentus/singleRewardsVentus.js";
import { doubleRewardsVentus } from "./RewardsVentus/doubleRewardsVentus.js";
import { rewardsChecksVentus } from "./RewardsVentus/rewardsChecksVentus.js";

// Imports the World and Event checks for the Rewards and Pop-Ups from Terra
import { singleRewardsTerra } from "./RewardsTerra/singleRewardsTerra.js";
import { singleDuplicateRewardsTerra } from "./RewardsTerra/singleDuplicateRewardsTerra.js";
import { doubleRewardsTerra } from "./RewardsTerra/doubleRewardsTerra.js";
import { doubleDuplicateRewardsTerra } from "./RewardsTerra/doubleDuplicateRewardsTerra.js";
import { rewardsChecksTerra } from "./RewardsTerra/rewardsChecksTerra.js";

// Imports the World and Event checks for the Rewards and Pop-Ups from Aqua
import { singleRewardsAqua } from "./RewardsAqua/singleRewardsAqua.js";
import { doubleRewardsAqua } from "./RewardsAqua/doubleRewardsAqua.js";
import { rewardsChecksAqua } from "./RewardsAqua/rewardsChecksAqua.js";

// Imports the adresses for the Chests and Stickers from Ventus
import { adressesV } from "./LocationsVentus/index.js";
import { ventusStickers } from "./LocationsVentus/ventusStickers.js";

// Imports the adresses for the Chests and Stickers from Terra
import { adressesT } from "./LocationsTerra/index.js";
import { terraStickers } from "./LocationsTerra/terraStickers.js";

// Imports the adresses for the Chests and Stickers from Aqua
import { adressesA } from "./LocationsAqua/index.js";
import { aquaStickers } from "./LocationsAqua/aquaStickers.js";

// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variable used to calculate rewards
const itemIntoReward = parseInt("10000", 16);

// Initializes variables for used Pop-Up randomization
let reward1 = parseInt("10F9C998", 16) - offset;
reward1 = reward1.toString(16).toUpperCase();
let reward2 = parseInt("10F9C980", 16) - offset;
reward2 = reward2.toString(16).toUpperCase();
let reward3 = parseInt("10F9C968", 16) - offset;
reward3 = reward3.toString(16).toUpperCase();
let reward4 = parseInt("10F9C9A8", 16) - offset;
reward4 = reward4.toString(16).toUpperCase();

// Initializes variables for currently held weapon (All characters)
const currentWeapon = parseInt("10F9B365", 16) - offset;
const currentWeaponInMenu = parseInt("10FA26DE", 16) - offset;

// Initializes variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - offset;

// Initializes variable for the character check conditional (Checks if not on Title Screen, Character Selection or pre-Orbs cutscene)
const characterCheck = `if ReadInt(0x206D6B) ~= 0xFFFFFF00 then
if ReadInt(0x206D6B) ~= 0xD0100 then
if ReadInt(0x206D6B) ~= 0x20100 or ReadInt(0x206D6F) ~= 0x100 or ReadShort(0x206D73) ~= 0x100 then
if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x0`;

// Initializes variable for the current weapon check conditional for Ventus, Terra and Aqua (Checks if fighting orbs)
const weaponCheckV = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x44004400 and ReadShort(0x206D73) == 0x4400 then\nWriteByte(0x`;
const weaponCheckT = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x3B003B00 and ReadShort(0x206D73) == 0x3B00 then\nWriteByte(0x`;
const weaponCheckA = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x4B004B00 and ReadShort(0x206D73) == 0x4B00 then\nWriteByte(0x`;

// Initializes the main function that runs the entire randomization process
function randomization() {
  // Start randomization for Ventus
  // Initializes an array that holds the entirety of the lua script and starts with a character Check for Ventus
  let finished = [
    `function _OnInit()\nend\n\nfunction _OnFrame()\n${characterCheck}0 then`,
  ];

  // Sets a random starting weapon for Ventus and removes it from the randomization pool
  let randoWeaponV = Math.floor(Math.random() * startingWeaponV.length);
  const removedWeaponMenuV = keybladesV.splice(randoWeaponV, 1)[0];
  const removedWeaponV = startingWeaponV.splice(randoWeaponV, 1)[0];
  const randomStartingWeaponV = `${weaponCheckV}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponV})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuV})\nend`;
  finished.push(randomStartingWeaponV);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Ventus
  const popupsV = [
    ...commandStylesV,
    ...dlinksV,
    ...shotlocksAll,
    ...shotlocksV,
    ...reportsV,
    ...keybladesV,
  ];

  // Distributes items that can be obtained as Pop-Ups for Ventus (Single -> Double -> Triple)
  for (let i = 0; i < rewardsChecksVentus.length; i++) {
    // Distributes items for single Pop-Up locations
    if (i < singleRewardsVentus.length) {
      let { element1 } = grabRandom(popupsV, 1);
      // Checks if drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nend`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nend`
        );
      }
    }
    // Distributes items for double Pop-Up locations
    else if (i < singleRewardsVentus.length + doubleRewardsVentus.length / 2) {
      let { element1, element2 } = grabRandom(popupsV, 2);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})`
        );
      }
      // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element2, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward2}, 0x28${element2})\nend`);
      } else {
        element2 = commandToReward(element2);
        finished.push(`WriteInt(0x${reward2}, 0x00000${element2})\nend`);
      }
    }
    // Distributes items for triple Pop-Up locations
    else {
      let { element1, element2, element3 } = grabRandom(popupsV, 3);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x28${element1})`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksVentus[i]}WriteInt(0x${reward1}, 0x00000${element1})`
        );
      }
      // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element2, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward2}, 0x28${element2})`);
      } else {
        element2 = commandToReward(element2);
        finished.push(`WriteInt(0x${reward2}, 0x00000${element2})`);
      }
      // Checks if third drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element3, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward3}, 0x28${element3})\nend`);
      } else {
        element3 = commandToReward(element3);
        finished.push(`WriteInt(0x${reward3}, 0x00000${element3})\nend`);
      }
    }
  }

  // Initializes a variable for remaining Pop-Up rewards from Ventus and removes invalid ones for future use
  const popupsVStored = popupsV.filter(function (value) {
    return !commandStylesV.includes(value) && !dlinksV.includes(value);
  });

  // Initializes a variable for remaining Pop-Up rewards from Ventus and removes invalid ones for Stickers
  const popupsVStickers = popupsVStored.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksV.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Ventus and stores them for later use
  const popupsVShotlocks = popupsVStored.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksV.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Ventus
  const valuesStickersV = [
    ...popupsVStickers,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsV,
    ...stickersV,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Ventus
  for (let i = 0; i < ventusStickers.length; i++) {
    let { element1 } = grabRandom(valuesStickersV, 1);
    let address = offsetCalc(ventusStickers, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }

  // Combines all rewards that remain initializes an array for them for Ventus
  const valuesFinalV = [
    ...popupsVShotlocks,
    ...valuesStickersV,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionV,
    ...commandsV,
    ...icecreamV,
  ];

  for (let i = 0; i < adressesV.length; i++) {
    let { element1 } = grabRandom(valuesFinalV, 1);
    let address = offsetCalc(adressesV, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }
  finished.push(`end\nend\nend\nend`);

  // Start randomization for Terra
  finished.push(`${characterCheck}2 then`);

  // Sets a random starting weapon for Terra and removes it from the randomization pool
  let randoWeaponT = Math.floor(Math.random() * startingWeaponT.length);
  const removedWeaponMenuT = keybladesT.splice(randoWeaponT, 1)[0];
  const removedWeaponT = startingWeaponT.splice(randoWeaponT, 1)[0];
  const randomStartingWeaponT = `${weaponCheckT}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponT})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuT})\nend`;
  finished.push(randomStartingWeaponT);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Terra
  const popupsT = [
    ...commandStylesT,
    ...dlinksT,
    ...shotlocksAll,
    ...shotlocksT,
    ...reportsT,
    ...keybladesT,
  ];

  // Distributes items that can be obtained as Pop-Ups for Terra (Single -> Single Dupe -> Double -> Double Dupe)
  for (
    let i = 0;
    i <
    rewardsChecksTerra.length -
      singleDuplicateRewardsTerra.length / 2 -
      doubleDuplicateRewardsTerra.length / 4;
    i++
  ) {
    // Distributes items for single Pop-Up locations
    if (i < singleRewardsTerra.length) {
      let { element1 } = grabRandom(popupsT, 1);
      // Checks if drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksTerra[i]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nend`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksTerra[i]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nend`
        );
      }
    }
    // Distributes items for single duped Pop-Up locations
    else if (
      i <
      singleRewardsTerra.length + singleDuplicateRewardsTerra.length / 2
    ) {
      let { element1 } = grabRandom(popupsT, 1);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${
            rewardsChecksTerra[i]
          }WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nend\n${
            rewardsChecksTerra[i + 1]
          }WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nend`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${
            rewardsChecksTerra[i]
          }WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nend\n${
            rewardsChecksTerra[i + 1]
          }WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nend`
        );
      }
    }
    // Distributes items for double Pop-Up locations
    else if (
      i <
      singleRewardsTerra.length +
        singleDuplicateRewardsTerra.length / 2 +
        doubleRewardsTerra.length / 2
    ) {
      let j = i + singleDuplicateRewardsTerra.length / 2;
      let { element1, element2 } = grabRandom(popupsT, 2);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksTerra[j]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksTerra[j]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})`
        );
      }
      // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element2, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward2}, 0x28${element2})\nend`);
      } else {
        element2 = commandToReward(element2);
        finished.push(`WriteInt(0x${reward2}, 0x00000${element2})\nend`);
      }
    }
    // Distributes items for double duped Pop-Up locations
    else {
      let j = i + singleDuplicateRewardsTerra.length / 2;
      let { element1, element2 } = grabRandom(popupsT, 2);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksTerra[j]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})`
        );
        // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
        if (parseInt(element2, 16) < itemIntoReward) {
          finished.push(
            `WriteInt(0x${reward2}, 0x28${element2})\nend\n${
              rewardsChecksTerra[j + 1]
            }WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element2})\nend`
          );
        } else {
          element2 = commandToReward(element2);
          finished.push(
            `WriteInt(0x${reward2}, 0x00000${element2})\nend\n${
              rewardsChecksTerra[j + 1]
            }WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nWriteInt(0x${reward2}, 0x00000${element2})\nend`
          );
        }
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksTerra[j]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})`
        );
        // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
        if (parseInt(element2, 16) < itemIntoReward) {
          finished.push(
            `WriteInt(0x${reward2}, 0x28${element2})\nend\n${
              rewardsChecksTerra[j + 1]
            }WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x28${element2})\nend`
          );
        } else {
          element2 = commandToReward(element2);
          finished.push(
            `WriteInt(0x${reward2}, 0x00000${element2})\nend\n${
              rewardsChecksTerra[j + 1]
            }WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element2})\nend`
          );
        }
      }
    }
  }

  // Initializes a variable for remaining Pop-Up rewards from Terra and removes invalid ones for future use
  const popupsTStored = popupsT.filter(function (value) {
    return !commandStylesT.includes(value) && !dlinksT.includes(value);
  });

  // Initializes a variable for remaining Pop-Up rewards from Terra and removes invalid ones for Stickers
  const popupsTStickers = popupsTStored.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksT.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Terra and stores them for later use
  const popupsTShotlocks = popupsTStored.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksT.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Terra
  const valuesStickersT = [
    ...popupsTStickers,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsT,
    ...stickersT,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Terra
  for (let i = 0; i < terraStickers.length; i++) {
    let { element1 } = grabRandom(valuesStickersT, 1);
    let address = offsetCalc(terraStickers, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }

  // Combines all rewards that remain initializes an array for them for Terra
  const valuesFinalT = [
    ...popupsTShotlocks,
    ...valuesStickersT,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionT,
    ...commandsT,
    ...icecreamT,
  ];

  for (let i = 0; i < adressesT.length; i++) {
    let { element1 } = grabRandom(valuesFinalT, 1);
    let address = offsetCalc(adressesT, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }
  finished.push(`end\nend\nend\nend`);

  // Start randomization for Aqua
  finished.push(`${characterCheck}1 then`);

  // Sets a random starting weapon for Aqua and removes it from the randomization pool
  let randoWeaponA = Math.floor(Math.random() * startingWeaponA.length);
  const removedWeaponMenuA = keybladesA.splice(randoWeaponA, 1)[0];
  const removedWeaponA = startingWeaponA.splice(randoWeaponA, 1)[0];
  const randomStartingWeaponA = `${weaponCheckA}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponA})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuA})\nend`;
  finished.push(randomStartingWeaponA);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Aqua
  const popupsA = [
    ...commandStylesA,
    ...dlinksA,
    ...shotlocksAll,
    ...shotlocksA,
    ...reportsA,
    ...keybladesA,
  ];

  // Distributes items that can be obtained as Pop-Ups for Aqua (Single -> Double -> Triple)
  for (let i = 0; i < rewardsChecksAqua.length; i++) {
    // Distributes items for single Pop-Up locations
    if (i < singleRewardsAqua.length) {
      let { element1 } = grabRandom(popupsA, 1);
      // Checks if drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward2}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})\nend`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward2}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})\nend`
        );
      }
    }
    // Distributes items for double Pop-Up locations
    else if (i < singleRewardsAqua.length + doubleRewardsAqua.length / 2) {
      let { element1, element2 } = grabRandom(popupsA, 2);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x28${element1})\nWriteInt(0x${reward3}, 0x28${element1})`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x00000${element1})\nWriteInt(0x${reward3}, 0x00000${element1})`
        );
      }
      // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element2, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward2}, 0x28${element2})\nend`);
      } else {
        element2 = commandToReward(element2);
        finished.push(`WriteInt(0x${reward2}, 0x00000${element2})\nend`);
      }
    }
    // Distributes items for triple Pop-Up locations
    else {
      let { element1, element2, element3 } = grabRandom(popupsA, 3);
      // Checks if first drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element1, 16) < itemIntoReward) {
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x28${element1})`
        );
      } else {
        element1 = commandToReward(element1);
        finished.push(
          `${rewardsChecksAqua[i]}WriteInt(0x${reward1}, 0x00000${element1})`
        );
      }
      // Checks if second drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element2, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward2}, 0x28${element2})`);
      } else {
        element2 = commandToReward(element2);
        finished.push(`WriteInt(0x${reward2}, 0x00000${element2})`);
      }
      // Checks if third drafted object is an item (Hexvalue < 10000) or a command (Hexvalue > 10000) and writes the lua accordingly
      if (parseInt(element3, 16) < itemIntoReward) {
        finished.push(`WriteInt(0x${reward3}, 0x28${element3})\nend`);
      } else {
        element3 = commandToReward(element3);
        finished.push(`WriteInt(0x${reward3}, 0x00000${element3})\nend`);
      }
    }
  }

  // Initializes a variable for remaining Pop-Up rewards from Aqua and removes invalid ones for future use
  const popupsAStored = popupsA.filter(function (value) {
    return !commandStylesA.includes(value) && !dlinksA.includes(value);
  });

  // Initializes a variable for remaining Pop-Up rewards from Aqua and removes invalid ones for Stickers
  const popupsAStickers = popupsAStored.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksA.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Aqua and stores them for later use
  const popupsAShotlocks = popupsAStored.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksA.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Aqua
  const valuesStickersA = [
    ...popupsAStickers,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsA,
    ...stickersA,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Aqua
  for (let i = 0; i < aquaStickers.length; i++) {
    let { element1 } = grabRandom(valuesStickersA, 1);
    let address = offsetCalc(aquaStickers, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }

  // Combines all rewards that remain initializes an array for them for Aqua
  const valuesFinalA = [
    ...popupsAShotlocks,
    ...valuesStickersA,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionA,
    ...commandsA,
    ...icecreamA,
  ];

  for (let i = 0; i < adressesA.length; i++) {
    let { element1 } = grabRandom(valuesFinalA, 1);
    let address = offsetCalc(adressesA, i);
    finished.push(`WriteInt(0x${address}, 0x${element1})`);
  }
  finished.push(`end\nend\nend\nend\nend`);

  // Introduces download functionality to the website
  var textToSave = finished.join("\n");
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
  hiddenElement.target = "_blank";
  hiddenElement.download = "seed.lua";
  hiddenElement.click();
}

// Assigns functionality to the "Randomization" button on the website
const click = document.querySelector("#click");
click.addEventListener("click", randomization);

// Initializes function to return any amount of random items out of a specified item pool
function grabRandom(itemPool, amountOfItems) {
  let elements = {};
  for (let i = 1; i <= amountOfItems; i++) {
    let random = Math.floor(Math.random() * itemPool.length);
    let element = itemPool.splice(random, 1)[0];
    elements[`element${i}`] = element;
  }
  return elements;
}

// Initializes function to return a command into a vaild Pop-Up reward
function commandToReward(item) {
  item = parseInt(item, 16) - itemIntoReward;
  item = item.toString(16).toUpperCase();
  return item;
}

// Initializes function to return adress with lua offset calculated
function offsetCalc(address, counter) {
  address = parseInt(address[counter], 16) - offset;
  address = address.toString(16).toUpperCase();
  return address;
}
