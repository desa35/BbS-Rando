// Imports arrays that are used for randomization
import { startingWeapon } from "../StartingWeapons/index.js";
import { keyblades } from "./Keyblades/index.js";
import { commandStyles } from "./CommandStyles/index.js";
import { dlinks } from "./D-Links/index.js";

import { cutsceneRewardChecks } from "./CutsceneRewards/CutsceneRewardChecks/index.js";
import { cutsceneRewardsPool } from "./ItemPoolCutsceneRewards/index.js";

import { singleRewards } from "./CutsceneRewards/CutsceneRewardsSingle/index.js";
import { doubleRewards } from "./CutsceneRewards/CutsceneRewardsDouble/index.js";

import { initialStickerRewards } from "./ItemPoolStickerRewards/index.js";
import { stickerLocations } from "./RandomStickerRewards/index.js";

import { initialChestRewards } from "./ItemPoolChestRewards/index.js";

// Imports functions that are used for randomization
import { storyCheck } from "./RandoInitialization/index.js";
import { randomBattleLevel } from "./RandomBattlelevel/index.js";
import { randomStartingWeapon } from "./RandomStartingWeapon/index.js";
import { randomCutsceneRewards } from "./RandomCutsceneRewards/index.js";
import { randomStickerRewards } from "./RandomStickerRewards/index.js";
import { chestLocations, randomChestRewards } from "./RandomChestRewards/index.js";

// Initializes array to hold the character digits used for most functions
const characterDigit = [
  { character: "Ventus", value: 0 },
  { character: "Aqua", value: 1 },
  { character: "Terra", value: 2 },
];

// Initializes array for the current weapon check conditional for Ventus, Terra and Aqua (Lua Code checks if Orbs are currently fought)
const weaponCheck = [
  {
    character: "Ventus",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x44004400 and ReadShort(0x206D73) == 0x4400 then\nWriteByte(0x`,
  },
  {
    character: "Aqua",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x4B004B00 and ReadShort(0x206D73) == 0x4B00 then\nWriteByte(0x`,
  },
  {
    character: "Terra",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x3B003B00 and ReadShort(0x206D73) == 0x3B00 then\nWriteByte(0x`,
  },
];

const stickerRewards = [
  initialStickerRewards[0],
  initialStickerRewards[1],
  initialStickerRewards[2],
];

const chestRewards = [
  initialChestRewards[0],
  initialChestRewards[1],
  initialChestRewards[2],
]

// Assigns functionality to the "Randomization" button on the website
const click = document.querySelector("#click");
click.addEventListener("click", randomization);

function randomization() {
  const finished = [`function _OnInit()\nend\n\nfunction _OnFrame()`];
  for (let i = 0; i < 3; i++) {
    const characterCheck = storyCheck(characterDigit[i]);
    // const battleLevel = randomBattleLevel();
    const randomWeapon = randomStartingWeapon(
      startingWeapon[i],
      keyblades[i],
      weaponCheck[i]
    );
    const cutsceneRewards = randomCutsceneRewards(
      characterDigit[i],
      cutsceneRewardChecks[i],
      singleRewards[i],
      doubleRewards[i],
      cutsceneRewardsPool[i]
    );
    const filteredCutsceneRewards = cutsceneRewardsPool[i].filter(function (
      number
    ) {
      return !commandStyles[i].includes(number) && !dlinks[i].includes(number);
    });
    stickerRewards[i].push(...filteredCutsceneRewards);

    const stickers = randomStickerRewards(
      stickerRewards[i],
      stickerLocations[i]
    );
chestRewards[i].push(...stickerRewards[i]);
const chests = randomChestRewards(chestRewards[i], chestLocations[i])

    finished.push(
      characterCheck,
      battleLevel,
      randomWeapon,
      cutsceneRewards,
      stickers,
      chests,
      `end\nend\nend\nend`
    );
  }
  finished.push(`end`);

  // Introduces download functionality to the website
  var textToSave = finished.join("\n");
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
  hiddenElement.target = "_blank";
  hiddenElement.download = "seed.lua";
  hiddenElement.click();
}
