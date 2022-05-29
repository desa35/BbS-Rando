const dlinkAbilityPool = [
  { digit: "01A6", category: "01", name: "Quickload", origin: "Global" },
  { digit: "01A7", category: "01", name: "Haste", origin: "Global" },
  { digit: "01A8", category: "01", name: "Protect", origin: "Global" },
  { digit: "01A9", category: "01", name: "Shell", origin: "Global" },
  { digit: "01AA", category: "01", name: "Attack Boost", origin: "Global" },
  { digit: "01AB", category: "01", name: "Magic Boost", origin: "Global" },
  { digit: "01AC", category: "01", name: "Regen", origin: "Global" },
  { digit: "01AD", category: "01", name: "Munny Plus", origin: "Global" },
  { digit: "01AE", category: "01", name: "Berserk", origin: "Global" },
  { digit: "01AF", category: "01", name: "Magic Deflector", origin: "Global" },
  { digit: "01B0", category: "01", name: "Attack Deflector", origin: "Global" },
  { digit: "01B1", category: "01", name: "Float", origin: "Global" },
  { digit: "01B2", category: "01", name: "Auto-Life", origin: "Global" },
  { digit: "01B3", category: "01", name: "Auto-Teleport", origin: "Global" },
  { digit: "01B4", category: "01", name: "Auto-Remedy", origin: "Global" },
  { digit: "01B5", category: "01", name: "Steal", origin: "Global" },
  { digit: "01B6", category: "01", name: "Drain", origin: "Global" },
  { digit: "01B7", category: "01", name: "Double Strike", origin: "Global" },
  { digit: "01B8", category: "01", name: "Focus Saver", origin: "Global" },
  { digit: "01B9", category: "01", name: "Overdrive", origin: "Global" },
  //   { digit: "01BA", category: "01", name: "Fiery Touch", origin: "Global" },
  { digit: "01BB", category: "01", name: "Gauge Boost", origin: "Global" },
  { digit: "01BC", category: "01", name: "Auto-Counter", origin: "Global" },
  { digit: "01BD", category: "01", name: "Stun Boost", origin: "Global" },
  { digit: "01BE", category: "01", name: "Double EXP", origin: "Global" },
  { digit: "01BF", category: "01", name: "Double CP", origin: "Global" },
  { digit: "01C0", category: "01", name: "Auto-Block", origin: "Global" },
];

const dlinkAbilitiesVentus = dlinkAbilityPool.slice();
const dlinkAbilitiesAqua = dlinkAbilityPool.slice();
const dlinkAbilitiesTerra = dlinkAbilityPool.slice();

export const dlinkAbilities = [
  ...dlinkAbilitiesVentus,
  ...dlinkAbilitiesAqua,
  ...dlinkAbilitiesTerra,
];
