// Imports all valid Cutscene Rewards for Ventus
import { commandStylesVentus } from "../CommandStyles/commandStylesV.js";
import { dlinksVentus } from "../D-Links/dlinksV.js";
import { shotlocksVentus } from "../Shotlocks/shotlocksV.js";
import { reportsVentus } from "../Reports/reportsV.js";
import { keybladesVentus } from "../Keyblades/keybladesV.js";
import { wayfinderVentus } from "../Wayfinders/wayfinderV.js";

// Imports all valid Cutscene Rewards for Aqua
import { commandStylesAqua } from "../CommandStyles/commandStylesA.js";
import { dlinksAqua } from "../D-Links/dlinksA.js";
import { shotlocksAqua } from "../Shotlocks/shotlocksA.js";
import { reportsAqua } from "../Reports/reportsA.js";
import { keybladesAqua } from "../Keyblades/keybladesA.js";
import { wayfinderAqua } from "../Wayfinders/wayfinderA.js";

// Imports all valid Cutscene Rewards for Terra
import { commandStylesTerra } from "../CommandStyles/commandStylesT.js";
import { dlinksTerra } from "../D-Links/dlinksT.js";
import { shotlocksTerra } from "../Shotlocks/shotlocksT.js";
import { reportsTerra } from "../Reports/reportsT.js";
import { keybladesTerra } from "../Keyblades/keybladesT.js";
import { wayfinderTerra } from "../Wayfinders/wayfinderT.js";

const cRV = [
  ...commandStylesVentus,
  ...dlinksVentus,
  // ...shotlocksVentus,
  ...reportsVentus,
  ...keybladesVentus,
  ...wayfinderVentus,
];

const cRA = [
  ...commandStylesAqua,
  ...dlinksAqua,
  // ...shotlocksAqua,
  ...reportsAqua,
  ...keybladesAqua,
  ...wayfinderAqua,
];

const cRT = [
  ...commandStylesTerra,
  ...dlinksTerra,
  // ...shotlocksTerra,
  ...reportsTerra,
  ...keybladesTerra,
  ...wayfinderTerra,
];

export const cutsceneRewardsVentus = cRV.slice();
export const cutsceneRewardsAqua = cRA.slice();
export const cutsceneRewardsTerra = cRT.slice();

export const cutsceneRewardsPool = [
  cutsceneRewardsVentus,
  cutsceneRewardsAqua,
  cutsceneRewardsTerra,
];
