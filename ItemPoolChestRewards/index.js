import { itemCommands } from "../ItemsGlobal/itemCommands.js";

import { actionCommands } from "../ActionCommands/index.js";
import { battleCommands } from "../BattleCommands/index.js";
import { icecreamCommands } from "../IcecreamCommands/index.js";
import { ingredients } from "../IcecreamIngredients/index.js";
import { shotlocks } from "../Shotlocks/index.js";

const itemCommandsVentus = itemCommands.slice();
const itemCommandsAqua = itemCommands.slice();
const itemCommandsTerra = itemCommands.slice();

export const chestRewardsVentus = [
  ...itemCommandsVentus,
  ...actionCommands[0],
  ...battleCommands[0],
  // ...icecreamCommands[0],
  // ...ingredients[0],
  ...shotlocks[0],
];

export const chestRewardsAqua = [
  ...itemCommandsAqua,
  ...actionCommands[1],
  ...battleCommands[1],
  // ...icecreamCommands[1],
  // ...ingredients[1],
  ...shotlocks[1],
];

export const chestRewardsTerra = [
  ...itemCommandsTerra,
  ...actionCommands[2],
  ...battleCommands[2],
  // ...icecreamCommands[2],
  // ...ingredients[2],
  ...shotlocks[2],
];

export const initialChestRewards = [
  chestRewardsVentus,
  chestRewardsAqua,
  chestRewardsTerra,
];
