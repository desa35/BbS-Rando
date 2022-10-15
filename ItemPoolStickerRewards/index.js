import { synthCrystals } from "../ItemsGlobal/synthCrystals.js";

import { stickers } from "../Stickers/index.js";

const synthCrystalsVentus = synthCrystals.slice();
const synthCrystalsAqua = synthCrystals.slice();
const synthCrystalsTerra = synthCrystals.slice();

export const stickerRewardsVentus = [
  ...synthCrystalsVentus,
  ...stickers[0],
];

export const stickerRewardsAqua = [
  ...synthCrystalsAqua,
  ...stickers[1],
];

export const stickerRewardsTerra = [
  ...synthCrystalsTerra,
  ...stickers[2],
];

export const initialStickerRewards = [
  stickerRewardsVentus,
  stickerRewardsAqua,
  stickerRewardsTerra,
];
