// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variable for the Battle Level
const battleLevel = parseInt("10F9F505", 16) - offset;

// Initializes function to get a specific battle Level adress
export function battleLevelAddress(counter) {
  let level = battleLevel + counter;
  level = level.toString(16).toUpperCase();
  return level;
}

// Initializes function to get a random Battle level
export function randomBattleLevelGenerator(min, max) {
  let random = Math.ceil(Math.random() * (max - min - 1)) + min;
  random = random.toString(16).toUpperCase();
  return random;
}

// Initializes function to write Battle Level randomization (Hardcore)
export function randomBattleLevel() {
  let luascript = [];
  for (let i = 0; i < 12; i++) {
    let random = randomBattleLevelGenerator(4, 1);
    let level = battleLevelAddress(i);
    luascript.push(`WriteByte(0x${level}, 0x${random})`);
  }
  let random = randomBattleLevelGenerator(10, 8);
  let level = battleLevelAddress(12);
  luascript.push(`WriteByte(0x${level}, 0x${random})`);
  return luascript.join("\n");
}
