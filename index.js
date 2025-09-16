// 1. Strings
const farmAnimals = 'cow horse sheep pig chicken'.split(' '); // this creates an array of animal names

// Destructure sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals; 

// Destructure animal names
const [bessie, , dolly, babe, little] = farmAnimals;

// Destructure animal colors
const [blackAndWhite, , black, pink] = farmAnimals;


// 2. Arrays
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructure rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// Destructure using initials
const [r, o, y, g, b, , v] = colors;

// Destructure indigo with `indg`
const [, , , , , indg] = colors;


// 3. Objects
const muppet = { // this is an object representing a muppet character
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

// Object destructuring
const { muppetName, color, song, job, partner } = muppet; // this extracts properties into variables


// Nested object
const muppetSongs = {
  song1: "The Rainbow Connection",
  song2: "Moving Right Along",
  song3: "Can You Picture That?",
  song4: "I Hope That Something Better Comes Along"
};

const kermit = {
  kermitName: "Kermit",
  job: "Host of The Muppet Show",
  partner: "Miss Piggy"
};

// Destructure songs 2 & 4
const { song2, song4 } = muppetSongs;

// Destructure Kermit's job and partner
const { job: nestedJob, partner: nestedPartner } = kermit;
