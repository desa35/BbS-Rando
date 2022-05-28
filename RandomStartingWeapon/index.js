// Imports offset variable
import { offset } from "../RandoGeneralFunctions/index.js";

// Initializes variables for currently held weapon (All characters)
const currentWeapon = parseInt("10F9B365", 16) - offset;
const currentWeaponInMenu = parseInt("10FA26DE", 16) - offset;

// Initializes function that randomizes the starting Weapon and removes it from the pool
export function randomStartingWeapon(startingWeapon, keyblades, weaponCheck) {
  const randomWeapon = Math.floor(Math.random() * startingWeapon.length);
  const removedWeaponMenu = keyblades.splice(randomWeapon, 1)[0];
  const removedWeapon = startingWeapon.splice(randomWeapon, 1)[0];
  const randomstartingWeapon = `${weaponCheck.value}${currentWeapon
    .toString(16)
    .toUpperCase()}, 0x${removedWeapon.digit})\nWriteShort(0x${currentWeaponInMenu
    .toString(16)
    .toUpperCase()}, 0x${removedWeaponMenu.digit})\nend`;
  return randomstartingWeapon;
}
