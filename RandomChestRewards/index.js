import { chestAdressesVentus } from "../ChestLocations/ChestLocationsVentus/index.js";
import { chestAdressesAqua } from "../ChestLocations/ChestLocationsAqua/index.js";
import { chestAdressesTerra } from "../ChestLocations/ChestLocationsTerra/index.js";

import { orbsCheck } from "../RandoInitialization/index.js";

export const chestLocations = [
  chestAdressesVentus,
  chestAdressesAqua,
  chestAdressesTerra,
];

import { grabRandom } from "../RandoGeneralFunctions/index.js";
import { offsetCalc } from "../RandoGeneralFunctions/index.js";

export function randomChestRewards(itemPool, addressPool, characterDigit) {
    let luascript = [orbsCheck[characterDigit.value].value];
    for (let i = 0; i < addressPool.length; i++) {
      let { element1 } = grabRandom(itemPool, 1);
      let address = offsetCalc(addressPool[i].address);
      let worldID = addressPool[i].prefix;
      luascript.push(`WriteInt(0x${address}, 0x${worldID}${element1.category}${element1.digit})`);
    }
    luascript.push(`end`);
    return luascript.join("\n");
  }