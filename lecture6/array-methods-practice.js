// Function to practice forEach
function logEachAnimal(animals) {
  animals.forEach((animal) => console.log(animal.length));
  animals.forEach((animal) => console.log(animal));
}

// Function to practice map
function getAnimalNameLengths(animals) {
  // Your map logic here
  console.log(animals.map((animal) => animal));
  return animals.map((animal) => animal.length);

  // Example: return animals.map(animal => animal.length);
}

// Function to practice filter
function filterLandAnimals(animals) {
  return animals.filter((animal) => animal !== "Lion");
}

// Function to practice find
function findFirstLargeAnimal(animals) {
  return animals.find((animal) => animal.length > 4);
}

// Function to practice reduce
function getTotalNumberOfLegs(animals) {
  return animals.reduce((total, animal) => total, 4);
}

// Example array of animals to test the functions
let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Fish"];

// Testing the functions
console.log("forEach result:");
logEachAnimal(animals);

console.log("\nmap result:");
console.log(getAnimalNameLengths(animals));

console.log("\nfilter result:");
console.log(filterLandAnimals(animals));

console.log("\nfind result:");
console.log(findFirstLargeAnimal(animals));

console.log("\nreduce result:");
console.log(getTotalNumberOfLegs(animals));
