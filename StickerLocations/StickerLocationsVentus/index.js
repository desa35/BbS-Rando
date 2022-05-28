// Calls the Chests and Stickers in Ventus' Story and sets variables for them
import { ventusCastleStickers } from "./ventusCastle.js";
import { ventusDisneyStickers } from "./ventusDisney.js";
import { ventusDwarfStickers } from "./ventusDwarf.js";
import { ventusEnchantedStickers } from "./ventusEnchanted.js";
import { ventusGraveyardStickers } from "./ventusGraveyard.js";
import { ventusNeverlandStickers } from "./ventusNeverland.js";
import { ventusOlympusStickers } from "./ventusOlympus.js";
import { ventusRadiantStickers } from "./ventusRadiant.js";
import { ventusSpaceStickers } from "./ventusSpace.js";
import { ventusTowerStickers } from "./ventusTower.js";

export const ventusStickerLocations = [
  ...ventusCastleStickers,
  ...ventusDisneyStickers,
  ...ventusDwarfStickers,
  ...ventusEnchantedStickers,
  ...ventusGraveyardStickers,
  ...ventusNeverlandStickers,
  ...ventusOlympusStickers,
  ...ventusRadiantStickers,
  ...ventusSpaceStickers,
  ...ventusTowerStickers,
];
