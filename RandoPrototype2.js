const fs = require('fs')

const commandsAll = require("./ItemsGlobal/commandsAll")
const icecreamAll = require("./ItemsGlobal/icecreamAll")
const ingredientsAll = require("./ItemsGlobal/ingredientsAll")
const itemCommands = require("./ItemsGlobal/itemCommands")
const keyitems = require("./ItemsGlobal/keyitems")
const shotlocksAll = require("./ItemsGlobal/shotlocksAll")
const synthCrystals = require("./ItemsGlobal/synthCrystals")
const synthOreItems = require("./ItemsGlobal/synthOreItems")
const synthRecipes = require("./ItemsGlobal/synthRecipes")

const actionV = require("./ItemsVentus/actionV")
const commandsV = require("./ItemsVentus/commandsV")
const icecreamV = require("./ItemsVentus/icecreamV")
const ingredientsV = require("./ItemsVentus/ingredientsV")
const keybladesV = require("./ItemsVentus/keybladesV")
const shotlocksV = require("./ItemsVentus/shotlocksV")
const stickersV = require("./ItemsVentus/stickersV")

const ventusCastle = require("./LocationsVentus/ventusCastle")
const ventusDisney = require("./LocationsVentus/ventusDisney")
const ventusDwarf = require("./LocationsVentus/ventusDwarf")
const ventusEnchanted = require("./LocationsVentus/ventusEnchanted")
const ventusGraveyard = require("./LocationsVentus/ventusGraveyard")
const ventusNeverland = require("./LocationsVentus/ventusNeverland")
const ventusOlympus = require("./LocationsVentus/ventusOlympus")
const ventusRadiant = require("./LocationsVentus/ventusRadiant")
const ventusSpace = require("./LocationsVentus/ventusSpace")
const ventusStickers = require("./LocationsVentus/ventusStickers")
const ventusTower = require("./LocationsVentus/ventusTower")

const commandsAllCopy = commandsAll.slice();
const itemCommandsCopy = itemCommands.slice();
const icecreamAllCopy = icecreamAll.slice();
const ingredientsAllCopy = ingredientsAll.slice();
const shotlocksAllCopy = shotlocksAll.slice();
const synthCrystalsCopy = synthCrystals.slice();
const synthOreItemsCopy = synthOreItems.slice();
const synthRecipesCopy = synthRecipes.slice();

const actionVCopy = actionV.slice();
const commandsVCopy = commandsV.slice();
const icecreamVCopy = icecreamV.slice();
const ingredientsVCopy = ingredientsV.slice();
const keyitemsCopy = keyitems.slice();
const keybladesVCopy = keybladesV.slice();
const shotlocksVCopy = shotlocksV.slice();
const stickersVCopy = stickersV.slice();

const ventusCastleCopy = ventusCastle.slice();
const ventusDisneyCopy = ventusDisney.slice();
const ventusDwarfCopy = ventusDwarf.slice();
const ventusEnchantedCopy = ventusEnchanted.slice();
const ventusGraveyardCopy = ventusGraveyard.slice();
const ventusNeverlandCopy = ventusNeverland.slice();
const ventusOlympusCopy = ventusOlympus.slice();
const ventusRadiantCopy = ventusRadiant.slice();
const ventusSpaceCopy = ventusSpace.slice();
const ventusStickersCopy = ventusStickers.slice();
const ventusTowerCopy = ventusTower.slice();

const valuesStickersV = [
    // ...ingredientsAllCopy,
    ...keyitemsCopy,
    ...synthCrystalsCopy,
    // ...synthOreItemsCopy,
    // ...synthRecipesCopy,
    // ...ingredientsVCopy,
    ...keybladesVCopy,
    ...stickersVCopy,
]
const valuesStickersVCopy = valuesStickersV.slice();

const adressesV = [
    ...ventusStickersCopy,
    ...ventusCastleCopy,
    ...ventusDisneyCopy,
    ...ventusDwarfCopy,
    ...ventusEnchantedCopy,
    ...ventusGraveyardCopy,
    ...ventusNeverlandCopy,
    ...ventusOlympusCopy,
    ...ventusRadiantCopy,
    ...ventusSpaceCopy,
    ...ventusTowerCopy,
]

let randomized = [];
for ( let i = 0; i < ventusStickersCopy.length; i++ ) {
    let random = Math.floor( Math.random() * valuesStickersVCopy.length );
    const element = valuesStickersVCopy.splice(random, 1)[0];
    randomized.push(element);
}

const valuesFinalV = [
    ...valuesStickersVCopy,
    ...commandsAllCopy,
    // ...icecreamAllCopy,
    ...itemCommandsCopy,
    ...shotlocksAllCopy,
    ...actionVCopy,
    ...commandsVCopy,
    ...icecreamVCopy,
    ...shotlocksVCopy,
]
const valuesFinalVCopy = valuesFinalV.slice();

for ( let i = 0; i < valuesFinalV.length; i++ ) {
    let random = Math.floor( Math.random() * valuesFinalVCopy.length );
    const element = valuesFinalVCopy.splice(random, 1)[0];
    randomized.push(element)
}

let finished = [
    `function _OnInit()\nend\n\nfunction _OnFrame()`
];
for ( let i = 0; i < adressesV.length; i++ ) {
    finished.push([adressesV[i], randomized[i]]);
}
finished.push([`end`]);

fs.writeFile('./seed.txt', finished.join("\n"), err => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })