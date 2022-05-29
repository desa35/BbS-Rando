// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - offset;

// Initializes array for the Orb Battle conditional for Ventus, Terra and Aqua
export const orbsCheck = [
  {
    character: "Ventus",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x44004400 and ReadShort(0x206D73) == 0x4400 then`,
  },
  {
    character: "Aqua",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x4B004B00 and ReadShort(0x206D73) == 0x4B00 then`,
  },
  {
    character: "Terra",
    value: `if ReadInt(0x206D6B) == 0x20100 and ReadInt(0x206D6F) == 0x3B003B00 and ReadShort(0x206D73) == 0x3B00 then`,
  },
];

// Initializes function that write the checks for which character is being used
export function storyCheck(characterDigit) {
  const characterCheck = `if ReadInt(0x206D6B) ~= 0xFFFFFF00 then
if ReadInt(0x206D6B) ~= 0xD0100 then
if ReadInt(0x206D6B) ~= 0x20100 or ReadInt(0x206D6F) ~= 0x100 or ReadShort(0x206D73) ~= 0x100 then
if ReadByte(0x${storyModifier.toString(16).toUpperCase()}) == 0x0${
    characterDigit.value
  } then`;
  return characterCheck;
}
