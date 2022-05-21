// Calls the Chests and Stickers in Terra's Story and sets variables for them
const terraCastle = require("./terraCastle");
const terraDisney = require("./terraDisney");
const terraDwarf = require("./terraDwarf");
const terraEnchanted = require("./terraEnchanted");
const terraGraveyard = require("./terraGraveyard");
const terraNeverland = require("./terraNeverland");
const terraOlympus = require("./terraOlympus");
const terraRadiant = require("./terraRadiant");
const terraSpace = require("./terraSpace");
const terraStickers = require("./terraStickers");
const terraTower = require("./terraTower");

module.exports = [
  ...terraCastle,
  ...terraDisney,
  ...terraDwarf,
  ...terraEnchanted,
  ...terraGraveyard,
  ...terraNeverland,
  ...terraOlympus,
  ...terraRadiant,
  ...terraSpace,
  ...terraTower,
];
