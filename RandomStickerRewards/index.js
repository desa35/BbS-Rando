import { ventusStickerLocations } from "../StickerLocations/StickerLocationsVentus/index.js";
import { aquaStickerLocations } from "../StickerLocations/StickerLocationsAqua/index.js";
import { terraStickerLocations } from "../StickerLocations/StickerLocationsTerra/index.js";

import { orbsCheck } from "../RandoInitialization/index.js";

export const stickerLocations = [
  ventusStickerLocations,
  aquaStickerLocations,
  terraStickerLocations,
];

import { grabRandom } from "../RandoGeneralFunctions/index.js";
import { offsetCalc } from "../RandoGeneralFunctions/index.js";

export function randomStickerRewards(itemPool, addressPool, characterDigit) {
  let luascript = [orbsCheck[characterDigit.value].value];
  for (let i = 0; i < addressPool.length; i++) {
    let { element1 } = grabRandom(itemPool, 1);
    let address = offsetCalc(addressPool[i].address);
    let worldID = addressPool[i].prefix;
    luascript.push(`WriteInt(0x${address}, 0x${worldID}${element1.digit})`);
  }
  luascript.push(`end`);
  return luascript.join("\n");
}
