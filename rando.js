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
import { actionV as actionVentus } from "./ItemsVentus/actionV.js";
import { commandStylesV as commandStylesVentus } from "./ItemsVentus/commandStylesV.js";
import { commandsV as commandsVentus } from "./ItemsVentus/commandsV.js";
import { dlinksV as dlinksVentus } from "./ItemsVentus/dlinksV.js";
import { icecreamV as icecreamVentus } from "./ItemsVentus/icecreamV.js";
import { ingredientsV as ingredientsVentus } from "./ItemsVentus/ingredientsV.js";
import { keybladesV as keybladesVentus } from "./ItemsVentus/keybladesV.js";
import { reportsV as reportsVentus } from "./ItemsVentus/reportsV.js";
import { shotlocksV as shotlocksVentus } from "./ItemsVentus/shotlocksV.js";
import { startingWeaponV as startingWeaponVentus } from "./ItemsVentus/startingWeaponV.js";
import { stickersV as stickersVentus } from "./ItemsVentus/stickersV.js";

// Imports the Itemlists that are exclusive to Terra
import { actionT as actionTerra } from "./ItemsTerra/actionT.js";
import { commandStylesT as commandStylesTerra } from "./ItemsTerra/commandStylesT.js";
import { commandsT as commandsTerra } from "./ItemsTerra/commandsT.js";
import { dlinksT as dlinksTerra } from "./ItemsTerra/dlinksT.js";
import { icecreamT as icecreamTerra } from "./ItemsTerra/icecreamT.js";
import { ingredientsT as ingredientsTerra } from "./ItemsTerra/ingredientsT.js";
import { keybladesT as keybladesTerra } from "./ItemsTerra/keybladesT.js";
import { reportsT as reportsTerra } from "./ItemsTerra/reportsT.js";
import { shotlocksT as shotlocksTerra } from "./ItemsTerra/shotlocksT.js";
import { startingWeaponT as startingWeaponTerra } from "./ItemsTerra/startingWeaponT.js";
import { stickersT as stickersTerra } from "./ItemsTerra/stickersT.js";

// Imports the Itemlists that are exclusive to Aqua
import { actionA as actionAqua } from "./ItemsAqua/actionA.js";
import { commandStylesA as commandStylesAqua } from "./ItemsAqua/commandStylesA.js";
import { commandsA as commandsAqua } from "./ItemsAqua/commandsA.js";
import { dlinksA as dlinksAqua } from "./ItemsAqua/dlinksA.js";
import { icecreamA as icecreamAqua } from "./ItemsAqua/icecreamA.js";
import { ingredientsA as ingredientsAqua } from "./ItemsAqua/ingredientsA.js";
import { keybladesA as keybladesAqua } from "./ItemsAqua/keybladesA.js";
import { reportsA as reportsAqua } from "./ItemsAqua/reportsA.js";
import { shotlocksA as shotlocksAqua } from "./ItemsAqua/shotlocksA.js";
import { startingWeaponA as startingWeaponAqua } from "./ItemsAqua/startingWeaponA.js";
import { stickersA as stickersAqua } from "./ItemsAqua/stickersA.js";

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

// Imports the adresses for the Chests from Ventus
import { adressesV as adressesVentus } from "./LocationsVentus/index.js";
import { ventusCastle } from "./LocationsVentus/ventusCastle.js";
import { ventusDeparture } from "./LocationsVentus/ventusDeparture.js";
import { ventusDisney } from "./LocationsVentus/ventusDisney.js";
import { ventusDwarf } from "./LocationsVentus/ventusDwarf.js";
import { ventusEnchanted } from "./LocationsVentus/ventusEnchanted.js";
import { ventusGraveyard } from "./LocationsVentus/ventusGraveyard.js";
import { ventusNeverland } from "./LocationsVentus/ventusNeverland.js";
import { ventusOlympus } from "./LocationsVentus/ventusOlympus.js";
import { ventusRadiant } from "./LocationsVentus/ventusRadiant.js";
import { ventusSpace } from "./LocationsVentus/ventusSpace.js";
import { ventusTower } from "./LocationsVentus/ventusTower.js";

// Imports the adresses for the Stickers from Ventus
import { ventusStickers } from "./StickersVentus/index.js";
import { ventusCastleStickers } from "./StickersVentus/ventusCastle.js";
import { ventusDisneyStickers } from "./StickersVentus/ventusDisney.js";
import { ventusDwarfStickers } from "./StickersVentus/ventusDwarf.js";
import { ventusEnchantedStickers } from "./StickersVentus/ventusEnchanted.js";
import { ventusGraveyardStickers } from "./StickersVentus/ventusGraveyard.js";
import { ventusNeverlandStickers } from "./StickersVentus/ventusNeverland.js";
import { ventusOlympusStickers } from "./StickersVentus/ventusOlympus.js";
import { ventusRadiantStickers } from "./StickersVentus/ventusRadiant.js";
import { ventusSpaceStickers } from "./StickersVentus/ventusSpace.js";
import { ventusTowerStickers } from "./StickersVentus/ventusTower.js";

// Imports the adresses for the Chests from Terra
import { adressesT as adressesTerra } from "./LocationsTerra/index.js";
import { terraCastle } from "./LocationsTerra/terraCastle.js";
import { terraDeparture } from "./LocationsTerra/terraDeparture.js";
import { terraDisney } from "./LocationsTerra/terraDisney.js";
import { terraDwarf } from "./LocationsTerra/terraDwarf.js";
import { terraEnchanted } from "./LocationsTerra/terraEnchanted.js";
import { terraGraveyard } from "./LocationsTerra/terraGraveyard.js";
import { terraNeverland } from "./LocationsTerra/terraNeverland.js";
import { terraOlympus } from "./LocationsTerra/terraOlympus.js";
import { terraRadiant } from "./LocationsTerra/terraRadiant.js";
import { terraSpace } from "./LocationsTerra/terraSpace.js";
import { terraTower } from "./LocationsTerra/terraTower.js";

// Imports the adresses for the Stickers from Terra
import { terraStickers } from "./StickersTerra/index.js";
import { terraCastleStickers } from "./StickersTerra/terraCastle.js";
import { terraDisneyStickers } from "./StickersTerra/terraDisney.js";
import { terraDwarfStickers } from "./StickersTerra/terraDwarf.js";
import { terraEnchantedStickers } from "./StickersTerra/terraEnchanted.js";
import { terraGraveyardStickers } from "./StickersTerra/terraGraveyard.js";
import { terraNeverlandStickers } from "./StickersTerra/terraNeverland.js";
import { terraOlympusStickers } from "./StickersTerra/terraOlympus.js";
import { terraRadiantStickers } from "./StickersTerra/terraRadiant.js";
import { terraSpaceStickers } from "./StickersTerra/terraSpace.js";
import { terraTowerStickers } from "./StickersTerra/terraTower.js";

// Imports the adresses for the Chests from Aqua
import { adressesA as adressesAqua } from "./LocationsAqua/index.js";
import { aquaCastle } from "./LocationsAqua/aquaCastle.js";
import { aquaDeparture } from "./LocationsAqua/aquaDeparture.js";
import { aquaDarkness } from "./LocationsAqua/aquaDarkness.js";
import { aquaDisney } from "./LocationsAqua/aquaDisney.js";
import { aquaDwarf } from "./LocationsAqua/aquaDwarf.js";
import { aquaEnchanted } from "./LocationsAqua/aquaEnchanted.js";
import { aquaGraveyard } from "./LocationsAqua/aquaGraveyard.js";
import { aquaNeverland } from "./LocationsAqua/aquaNeverland.js";
import { aquaOlympus } from "./LocationsAqua/aquaOlympus.js";
import { aquaRadiant } from "./LocationsAqua/aquaRadiant.js";
import { aquaSpace } from "./LocationsAqua/aquaSpace.js";
import { aquaTower } from "./LocationsAqua/aquaTower.js";

// Imports the adresses for the Stickers from Aqua
import { aquaStickers } from "./StickersAqua/index.js";
import { aquaCastleStickers } from "./StickersAqua/aquaCastle.js";
import { aquaDisneyStickers } from "./StickersAqua/aquaDisney.js";
import { aquaDwarfStickers } from "./StickersAqua/aquaDwarf.js";
import { aquaEnchantedStickers } from "./StickersAqua/aquaEnchanted.js";
import { aquaGraveyardStickers } from "./StickersAqua/aquaGraveyard.js";
import { aquaNeverlandStickers } from "./StickersAqua/aquaNeverland.js";
import { aquaOlympusStickers } from "./StickersAqua/aquaOlympus.js";
import { aquaRadiantStickers } from "./StickersAqua/aquaRadiant.js";
import { aquaSpaceStickers } from "./StickersAqua/aquaSpace.js";
import { aquaTowerStickers } from "./StickersAqua/aquaTower.js";

// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variable used to calculate rewards
const itemIntoReward = parseInt("10000", 16);

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
const weaponCheckVentus = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x44004400 and ReadShort(0x206D73) == 0x4400 then\nWriteByte(0x`;
const weaponCheckTerra = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x3B003B00 and ReadShort(0x206D73) == 0x3B00 then\nWriteByte(0x`;
const weaponCheckAqua = `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x4B004B00 and ReadShort(0x206D73) == 0x4B00 then\nWriteByte(0x`;

// Initializes variables for used Pop-Up randomization
let reward1 = parseInt("10F9C998", 16) - offset;
reward1 = reward1.toString(16).toUpperCase();
let reward2 = parseInt("10F9C980", 16) - offset;
reward2 = reward2.toString(16).toUpperCase();
let reward3 = parseInt("10F9C968", 16) - offset;
reward3 = reward3.toString(16).toUpperCase();
let reward4 = parseInt("10F9C9A8", 16) - offset;
reward4 = reward4.toString(16).toUpperCase();

// Initializes the main function that runs the entire randomization process
function randomization() {
  // Start randomization for Ventus
  // Initializes an array that holds the entirety of the lua script and starts with a character Check for Ventus
  let finished = [
    `function _OnInit()\nend\n\nfunction _OnFrame()\n${characterCheck}0 then`,
  ];

  // Sets a random starting weapon for Ventus and removes it from the randomization pool
  let randoWeaponVentus = Math.floor(
    Math.random() * startingWeaponVentus.length
  );
  const removedWeaponMenuVentus = keybladesVentus.splice(
    randoWeaponVentus,
    1
  )[0];
  const removedWeaponVentus = startingWeaponVentus.splice(
    randoWeaponVentus,
    1
  )[0];
  const randomStartingWeaponVentus = `${weaponCheckVentus}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponVentus})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuVentus})\nend`;
  finished.push(randomStartingWeaponVentus);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Ventus
  const popupsVentus = [
    ...commandStylesVentus,
    ...dlinksVentus,
    ...shotlocksAll,
    ...shotlocksVentus,
    ...reportsVentus,
    ...keybladesVentus,
  ];

  // Distributes items that can be obtained as Pop-Ups for Ventus (Single -> Double -> Triple)
  for (let i = 0; i < rewardsChecksVentus.length; i++) {
    // Distributes items for single Pop-Up locations
    if (i < singleRewardsVentus.length) {
      let { element1 } = grabRandom(popupsVentus, 1);
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
      let { element1, element2 } = grabRandom(popupsVentus, 2);
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
      let { element1, element2, element3 } = grabRandom(popupsVentus, 3);
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
  const popupsStoredVentus = popupsVentus.filter(function (value) {
    return (
      !commandStylesVentus.includes(value) && !dlinksVentus.includes(value)
    );
  });

  // Initializes a variable for remaining Pop-Up rewards from Ventus and removes invalid ones for Stickers
  const popupsStickersVentus = popupsStoredVentus.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksVentus.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Ventus and stores them for later use
  const popupsShotlocksVentus = popupsStoredVentus.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksVentus.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Ventus
  const valuesStickersVentus = [
    ...popupsStickersVentus,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsVentus,
    ...stickersVentus,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Ventus
  for (let i = 0; i < ventusStickers.length; i++) {
    if (i < ventusCastleStickers.length) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "3"
      );
      finished.push(luascript);
    } else if (i < ventusCastleStickers.length + ventusDisneyStickers.length) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "C"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "2"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "4"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length +
        ventusGraveyardStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "D"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length +
        ventusGraveyardStickers.length +
        ventusNeverlandStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "B"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length +
        ventusGraveyardStickers.length +
        ventusNeverlandStickers.length +
        ventusOlympusStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "8"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length +
        ventusGraveyardStickers.length +
        ventusNeverlandStickers.length +
        ventusOlympusStickers.length +
        ventusRadiantStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "6"
      );
      finished.push(luascript);
    } else if (
      i <
      ventusCastleStickers.length +
        ventusDisneyStickers.length +
        ventusDwarfStickers.length +
        ventusEnchantedStickers.length +
        ventusGraveyardStickers.length +
        ventusNeverlandStickers.length +
        ventusOlympusStickers.length +
        ventusRadiantStickers.length +
        ventusSpaceStickers.length
    ) {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "9"
      );
      finished.push(luascript);
    } else {
      let luascript = stickerRandom(
        valuesStickersVentus,
        ventusStickers,
        i,
        "5"
      );
      finished.push(luascript);
    }
  }

  // Combines all rewards that remain initializes an array for them for Ventus
  const valuesFinalVentus = [
    ...popupsShotlocksVentus,
    ...valuesStickersVentus,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionVentus,
    ...commandsVentus,
    ...icecreamVentus,
  ];

  for (let i = 0; i < adressesVentus.length; i++) {
    if (i < ventusCastle.length) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "3");
      finished.push(luascript);
    } else if (i < ventusCastle.length + ventusDisney.length) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "C");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length + ventusDisney.length + ventusDwarf.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "2");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "4");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length +
        ventusGraveyard.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "D");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length +
        ventusGraveyard.length +
        ventusNeverland.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "B");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length +
        ventusGraveyard.length +
        ventusNeverland.length +
        ventusOlympus.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "8");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length +
        ventusGraveyard.length +
        ventusNeverland.length +
        ventusOlympus.length +
        ventusRadiant.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "6");
      finished.push(luascript);
    } else if (
      i <
      ventusCastle.length +
        ventusDisney.length +
        ventusDwarf.length +
        ventusEnchanted.length +
        ventusGraveyard.length +
        ventusNeverland.length +
        ventusOlympus.length +
        ventusRadiant.length +
        ventusSpace.length
    ) {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "9");
      finished.push(luascript);
    } else {
      let luascript = chestRandom(valuesFinalVentus, adressesVentus, i, "5");
      finished.push(luascript);
    }
  }
  finished.push(`end\nend\nend\nend`);

  // Start randomization for Terra
  finished.push(`${characterCheck}2 then`);

  // Sets a random starting weapon for Terra and removes it from the randomization pool
  let randoWeaponTerra = Math.floor(Math.random() * startingWeaponTerra.length);
  const removedWeaponMenuTerra = keybladesTerra.splice(randoWeaponTerra, 1)[0];
  const removedWeaponTerra = startingWeaponTerra.splice(randoWeaponTerra, 1)[0];
  const randomStartingWeaponTerra = `${weaponCheckTerra}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponTerra})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuTerra})\nend`;
  finished.push(randomStartingWeaponTerra);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Terra
  const popupsTerra = [
    ...commandStylesTerra,
    ...dlinksTerra,
    ...shotlocksAll,
    ...shotlocksTerra,
    ...reportsTerra,
    ...keybladesTerra,
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
      let { element1 } = grabRandom(popupsTerra, 1);
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
      let { element1 } = grabRandom(popupsTerra, 1);
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
      let { element1, element2 } = grabRandom(popupsTerra, 2);
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
      let { element1, element2 } = grabRandom(popupsTerra, 2);
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
  const popupsStoredTerra = popupsTerra.filter(function (value) {
    return !commandStylesTerra.includes(value) && !dlinksTerra.includes(value);
  });

  // Initializes a variable for remaining Pop-Up rewards from Terra and removes invalid ones for Stickers
  const popupsStickersTerra = popupsStoredTerra.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksTerra.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Terra and stores them for later use
  const popupsShotlocksTerra = popupsStoredTerra.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksTerra.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Terra
  const valuesStickersTerra = [
    ...popupsStickersTerra,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsTerra,
    ...stickersTerra,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Terra
  for (let i = 0; i < terraStickers.length; i++) {
    if (i < terraCastleStickers.length) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "3");
      finished.push(luascript);
    } else if (i < terraCastleStickers.length + terraDisneyStickers.length) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "C");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "2");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "4");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length +
        terraGraveyardStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "D");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length +
        terraGraveyardStickers.length +
        terraNeverlandStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "B");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length +
        terraGraveyardStickers.length +
        terraNeverlandStickers.length +
        terraOlympusStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "8");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length +
        terraGraveyardStickers.length +
        terraNeverlandStickers.length +
        terraOlympusStickers.length +
        terraRadiantStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "6");
      finished.push(luascript);
    } else if (
      i <
      terraCastleStickers.length +
        terraDisneyStickers.length +
        terraDwarfStickers.length +
        terraEnchantedStickers.length +
        terraGraveyardStickers.length +
        terraNeverlandStickers.length +
        terraOlympusStickers.length +
        terraRadiantStickers.length +
        terraSpaceStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "9");
      finished.push(luascript);
    } else {
      let luascript = stickerRandom(valuesStickersTerra, terraStickers, i, "5");
      finished.push(luascript);
    }
  }

  // Combines all rewards that remain initializes an array for them for Terra
  const valuesFinalTerra = [
    ...popupsShotlocksTerra,
    ...valuesStickersTerra,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionTerra,
    ...commandsTerra,
    ...icecreamTerra,
  ];

  for (let i = 0; i < adressesTerra.length; i++) {
    if (i < terraCastle.length) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "3");
      finished.push(luascript);
    } else if (i < terraCastle.length + terraDeparture.length) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "1");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length + terraDeparture.length + terraDisney.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "C");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "2");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "4");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length +
        terraGraveyard.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "D");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length +
        terraGraveyard.length +
        terraNeverland.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "B");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length +
        terraGraveyard.length +
        terraNeverland.length +
        terraOlympus.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "8");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length +
        terraGraveyard.length +
        terraNeverland.length +
        terraOlympus.length +
        terraRadiant.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "6");
      finished.push(luascript);
    } else if (
      i <
      terraCastle.length +
        terraDeparture.length +
        terraDisney.length +
        terraDwarf.length +
        terraEnchanted.length +
        terraGraveyard.length +
        terraNeverland.length +
        terraOlympus.length +
        terraRadiant.length +
        terraSpace.length
    ) {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "9");
      finished.push(luascript);
    } else {
      let luascript = chestRandom(valuesFinalTerra, adressesTerra, i, "5");
      finished.push(luascript);
    }
  }
  finished.push(`end\nend\nend\nend`);

  // Start randomization for Aqua
  finished.push(`${characterCheck}1 then`);

  // Sets a random starting weapon for Aqua and removes it from the randomization pool
  let randoWeaponAqua = Math.floor(Math.random() * startingWeaponAqua.length);
  const removedWeaponMenuAqua = keybladesAqua.splice(randoWeaponAqua, 1)[0];
  const removedWeaponAqua = startingWeaponAqua.splice(randoWeaponAqua, 1)[0];
  const randomStartingWeaponAqua = `${weaponCheckAqua}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponAqua})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenuAqua})\nend`;
  finished.push(randomStartingWeaponAqua);

  // Joins all rewards that can be obtained on Pop-Ups and initializes an array for them for Aqua
  const popupsAqua = [
    ...commandStylesAqua,
    ...dlinksAqua,
    ...shotlocksAll,
    ...shotlocksAqua,
    ...reportsAqua,
    ...keybladesAqua,
  ];

  // Distributes items that can be obtained as Pop-Ups for Aqua (Single -> Double -> Triple)
  for (let i = 0; i < rewardsChecksAqua.length; i++) {
    // Distributes items for single Pop-Up locations
    if (i < singleRewardsAqua.length) {
      let { element1 } = grabRandom(popupsAqua, 1);
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
      let { element1, element2 } = grabRandom(popupsAqua, 2);
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
      let { element1, element2, element3 } = grabRandom(popupsAqua, 3);
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
  const popupsStoredAqua = popupsAqua.filter(function (value) {
    return !commandStylesAqua.includes(value) && !dlinksAqua.includes(value);
  });

  // Initializes a variable for remaining Pop-Up rewards from Aqua and removes invalid ones for Stickers
  const popupsStickersAqua = popupsStoredAqua.filter(function (value) {
    return !shotlocksAll.includes(value) && !shotlocksAqua.includes(value);
  });

  // Initializes a variable for remaining Shotlock Pop-Up rewards from Aqua and stores them for later use
  const popupsShotlocksAqua = popupsStoredAqua.filter(function (value) {
    return shotlocksAll.includes(value) || shotlocksAqua.includes(value);
  });

  // Joins all rewards that can be obtained from Stickers and initializes an array for them for Aqua
  const valuesStickersAqua = [
    ...popupsStickersAqua,
    // ...ingredientsAll,
    ...keyitems,
    ...synthCrystals,
    ...synthOreItems,
    // ...synthRecipes,
    // ...ingredientsAqua,
    ...stickersAqua,
  ];

  // Randomizes the possible rewards for Stickers into the Sticker slots for Aerra
  for (let i = 0; i < aquaStickers.length; i++) {
    if (i < aquaCastleStickers.length) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "3");
      finished.push(luascript);
    } else if (i < aquaCastleStickers.length + aquaDisneyStickers.length) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "C");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "2");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "4");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length +
        aquaGraveyardStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "D");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length +
        aquaGraveyardStickers.length +
        aquaNeverlandStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "B");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length +
        aquaGraveyardStickers.length +
        aquaNeverlandStickers.length +
        aquaOlympusStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "8");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length +
        aquaGraveyardStickers.length +
        aquaNeverlandStickers.length +
        aquaOlympusStickers.length +
        aquaRadiantStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "6");
      finished.push(luascript);
    } else if (
      i <
      aquaCastleStickers.length +
        aquaDisneyStickers.length +
        aquaDwarfStickers.length +
        aquaEnchantedStickers.length +
        aquaGraveyardStickers.length +
        aquaNeverlandStickers.length +
        aquaOlympusStickers.length +
        aquaRadiantStickers.length +
        aquaSpaceStickers.length
    ) {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "9");
      finished.push(luascript);
    } else {
      let luascript = stickerRandom(valuesStickersAqua, aquaStickers, i, "5");
      finished.push(luascript);
    }
  }

  // Combines all rewards that remain initializes an array for them for Aqua
  const valuesFinalAqua = [
    ...popupsShotlocksAqua,
    ...valuesStickersAqua,
    ...commandsAll,
    //...icecreamAll,
    ...itemCommands,
    ...actionAqua,
    ...commandsAqua,
    ...icecreamAqua,
  ];

  for (let i = 0; i < adressesAqua.length; i++) {
    if (i < aquaCastle.length) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "3");
      finished.push(luascript);
    } else if (i < aquaCastle.length + aquaDarkness.length) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "7");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length + aquaDarkness.length + aquaDeparture.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "1");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "C");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "2");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "4");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length +
        aquaGraveyard.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "D");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length +
        aquaGraveyard.length +
        aquaNeverland.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "B");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length +
        aquaGraveyard.length +
        aquaNeverland.length +
        aquaOlympus.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "8");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length +
        aquaGraveyard.length +
        aquaNeverland.length +
        aquaOlympus.length +
        aquaRadiant.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "6");
      finished.push(luascript);
    } else if (
      i <
      aquaCastle.length +
        aquaDarkness.length +
        aquaDeparture.length +
        aquaDisney.length +
        aquaDwarf.length +
        aquaEnchanted.length +
        aquaGraveyard.length +
        aquaNeverland.length +
        aquaOlympus.length +
        aquaRadiant.length +
        aquaSpace.length
    ) {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "9");
      finished.push(luascript);
    } else {
      let luascript = chestRandom(valuesFinalAqua, adressesAqua, i, "5");
      finished.push(luascript);
    }
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

// Initializes function to return adress with lua offset calculated (Check adress)
function offsetCalc(address, counter) {
  address = parseInt(address[counter], 16) - offset;
  address = address.toString(16).toUpperCase();
  return address;
}

// Initializes function to return adress with lua offset calculated (Sticker location)
function stickerLocation(address, counter) {
  address = parseInt(address[counter], 16) - offset + 2;
  address = address.toString(16).toUpperCase();
  return address;
}

// Initializes function to write Sticker randomization
function stickerRandom(itemPool, addressPool, counter, worldID) {
  let luascript = [];
  let { element1 } = grabRandom(itemPool, 1);
  let address = offsetCalc(addressPool, counter);
  let stickerLocationID = stickerLocation(addressPool, counter);
  return (luascript = `WriteShort(0x${address}, 0x${element1})\nWriteByte(0x${stickerLocationID}, 0x${worldID})`);
}

// Initializes function to write Chest randomization
function chestRandom(itemPool, addressPool, counter, worldID) {
  let luascript = [];
  let { element1 } = grabRandom(itemPool, 1);
  let address = offsetCalc(addressPool, counter);
  return (luascript = `WriteInt(0x${address}, 0x${worldID}${element1})`);
}
