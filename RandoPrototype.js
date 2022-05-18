const fs = require('fs')

// 1. Get 2 arrays for addresses and values

const adressesV = [
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D2E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D4E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D96',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D8E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D56',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D5E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D66',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D6E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D36',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D3E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D46',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D9E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D76',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D7E',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D72D86',
    '"KINGDOM HEARTS Birth by Sleep FINAL MIX.exe"+D731BE',
];

const valuesV = [
    "000001",
    "000002",
    "000003",
    "000004",
    "000005",
    "000006",
    "000007",
    "000008",
    "000009",
    "00000A",
    "00000B",
    "00000D",
    "00000E",
    "000010",
    "000011",
    "000012",
    "000100",
    "000101",
    "000102",
    "000103",
    "000104",
    "000105",
    "000106",
    "000107",
    "000108",
    "000109",
    "00010A",
    "00010B",
    "00010C",
    "000110",
    "000111",
    "000112",
    "000200",
    "000201",
    "000202",
    "000203",
    "000204",
    "000205",
    "000206",
];

// 2. Create an array to hold your lua lines of code

// const random = [];

// 3. Shuffle the values array (Google how to do it)

let randomized = [];
const valuesVCopy = valuesV.slice();
for ( let i = 0; i < valuesV.length; i++ ) {
    let random = Math.floor( Math.random() * valuesVCopy.length );
    const element = valuesVCopy.splice(random, 1)[0];
    randomized.push(element)
}

// 4. Loop through addresses array, get the value at the index of the current iteration, that will be your random value for that address

let finished = [];
for ( let i = 0; i < adressesV.length; i++ ) {
    finished.push([adressesV[i], randomized[i]]);
}
console.log(finished);

// 5. Push the lua line of code with the current address and value, do this for all iterations
// 6. Join the array of lua lines of code and dump it into a file (Google how to do it)
// 7. Create a pnach template

// let pnach = [];
// for ( let i = 0; i < finished.length; i++ ) {
//     let valuesExtract = finished[i]
//     pnach.push(`patch=1,EE,${valuesExtract[0]},extended,${valuesExtract[1]}`)
// }
// // 8. Output pnach

fs.writeFile('./seed.txt', finished.join("\n"), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})