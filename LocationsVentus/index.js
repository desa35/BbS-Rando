// Calls the Chests and Stickers in Ventus' Story and sets variables for them
const ventusCastle = require("./ventusCastle");
const ventusDisney = require("./ventusDisney");
const ventusDwarf = require("./ventusDwarf");
const ventusEnchanted = require("./ventusEnchanted");
const ventusGraveyard = require("./ventusGraveyard");
const ventusNeverland = require("./ventusNeverland");
const ventusOlympus = require("./ventusOlympus");
const ventusRadiant = require("./ventusRadiant");
const ventusSpace = require("./ventusSpace");
const ventusStickers = require("./ventusStickers");
const ventusTower = require("./ventusTower");

module.exports = [
  ...ventusCastle,
  ...ventusDisney,
  ...ventusDwarf,
  ...ventusEnchanted,
  ...ventusGraveyard,
  ...ventusNeverland,
  ...ventusOlympus,
  ...ventusRadiant,
  ...ventusSpace,
  ...ventusTower,
];
