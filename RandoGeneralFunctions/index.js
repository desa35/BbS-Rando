// Initializes variable for the lua offset that needs to be subtracted from adresses
export const offset = parseInt("60E334", 16);

// Initializes function to return any amount of random items out of a specified item pool
export function grabRandom(itemPool, amountOfItems) {
  let elements = {};
  for (let i = 1; i <= amountOfItems; i++) {
    let random = Math.floor(Math.random() * itemPool.length);
    let element = itemPool.splice(random, 1)[0];
    elements[`element${i}`] = element;
  }
  return elements;
}

// Initializes function to return adress with lua offset calculated (Check adress)
export function offsetCalc(address) {
  address = parseInt(address, 16) - offset;
  address = address.toString(16).toUpperCase();
  return address;
}

// Initializes function to return the total length of all arrays inside a multiarray
export function getMultiArrayLength(array) {
  let length = 0;
  for ( let i = 0; i < array.length; i++) {
    length += array[i].length;
  }
  return length;
}

export function offsetCalcForMulti(addressPool, addressPoolLength) {
  let address = [];
  address = parseInt(address, 16) - offset;
  address = address.toString(16).toUpperCase();
  return address;
}