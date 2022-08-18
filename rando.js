// Imports arrays that are used for randomization
import { orbsCheck } from "./RandoInitialization/index.js";
import { startingWeapon } from "../StartingWeapons/index.js";
import { keyblades } from "./Keyblades/index.js";
import { commandStyles } from "./CommandStyles/index.js";
import { dlinks } from "./D-Links/index.js";
import { dlinkAbilities } from "./D-LinkAbilities/index.js";

// Imports arrays necessary for Cutscene Reward randomization
import { cutsceneRewardChecks } from "./CutsceneRewards/CutsceneRewardChecks/index.js";
import { cutsceneRewardsPool } from "./ItemPoolCutsceneRewards/index.js";
import { singleRewards } from "./CutsceneRewards/CutsceneRewardsSingle/index.js";
import { doubleRewards } from "./CutsceneRewards/CutsceneRewardsDouble/index.js";

// Imports arrays necessary for Sticker Reward randomization
import { initialStickerRewards } from "./ItemPoolStickerRewards/index.js";
import { stickerLocations } from "./RandomStickerRewards/index.js";

// Imports arrays necessary for Chest Reward randomization
import { initialChestRewards } from "./ItemPoolChestRewards/index.js";
import { chestLocations } from "./RandomChestRewards/index.js";

// Imports array necessary for D-Link Ability randomization
import { dlinkAbilityLocations } from "./D-LinkAbilityLocations/index.js";

// Imports functions that are used for randomization
import { storyCheck } from "./RandoInitialization/index.js";
import { randomBattleLevel } from "./RandomBattlelevel/index.js";
import { randomStartingWeapon } from "./RandomStartingWeapon/index.js";
import { randomCutsceneRewards } from "./RandomCutsceneRewards/index.js";
import { randomStickerRewards } from "./RandomStickerRewards/index.js";
import { randomChestRewards } from "./RandomChestRewards/index.js";
import { randomDlinkAbility } from "./RandomD-LinkAbility/index.js";

// Initializes array to hold the character digits used for most functions
const characterDigit = [
  { character: "Ventus", value: 0 },
  { character: "Aqua", value: 1 },
  { character: "Terra", value: 2 },
];

// Initializes array to hold valid Sticker Rewards
const stickerRewards = [
  initialStickerRewards[0],
  initialStickerRewards[1],
  initialStickerRewards[2],
];

// Initializes array to hold valid Chest Rewards
const chestRewards = [
  initialChestRewards[0],
  initialChestRewards[1],
  initialChestRewards[2],
];

// Assigns functionality to the "Randomization" button on the website
const click = document.querySelector("#click");
click.addEventListener("click", randomization);

// Initializes main function that runs the randomization
function randomization() {
  const finished = [`function _OnInit()\nend\n\nfunction _OnFrame()`];
  for (let i = 0; i < 3; i++) {
    const characterCheck = storyCheck(characterDigit[i]);
    // const battleLevel = randomBattleLevel(characterDigit[i]);
    const randomWeapon = randomStartingWeapon(
      startingWeapon[i],
      keyblades[i],
      orbsCheck[i]
    );
    const cutsceneRewards = randomCutsceneRewards(
      characterDigit[i],
      cutsceneRewardChecks[i],
      singleRewards[i],
      doubleRewards[i],
      cutsceneRewardsPool[i]
    );
    // Filters rewards that become invalid for future steps out of the Cutscene Reward array
    const filteredCutsceneRewards = cutsceneRewardsPool[i].filter(function (
      number
    ) {
      return !commandStyles[i].includes(number) && !dlinks[i].includes(number);
    });
    stickerRewards[i].push(...filteredCutsceneRewards);

    const stickers = randomStickerRewards(
      stickerRewards[i],
      stickerLocations[i],
      characterDigit[i]
    );
    chestRewards[i].push(...stickerRewards[i]);
    const chests = randomChestRewards(
      chestRewards[i],
      chestLocations[i],
      characterDigit[i]
    );
    const dlinkability = randomDlinkAbility(
      dlinkAbilities,
      dlinkAbilityLocations,
      characterDigit[i]
    );

    finished.push(
      characterCheck,
      // battleLevel,
      randomWeapon,
      cutsceneRewards,
      stickers,
      chests,
      dlinkability,
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
  location.reload();
}
