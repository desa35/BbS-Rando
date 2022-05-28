import { cutsceneRewardChecksVentus } from "./cutsceneRewardChecksVentus.js";
import { cutsceneRewardChecksAqua } from "./cutsceneRewardChecksAqua.js";
import { cutsceneRewardChecksTerra } from "./cutsceneRewardChecksTerra.js";

export const cutsceneRewardChecks = [
  { character: "Ventus", value: cutsceneRewardChecksVentus },
  { character: "Aqua", value: cutsceneRewardChecksAqua },
  { character: "Terra", value: cutsceneRewardChecksTerra },
];
