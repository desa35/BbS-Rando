// Initializes variable for the lua offset that needs to be subtracted
const offset = parseInt("60E334", 16);

// Initializes variable for all 3 Stories' for character checks later on (Offset already subtracted)
const storyModifier = parseInt("10F9CD00", 16) - offset;

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