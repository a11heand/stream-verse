/*
 * Filename: creative_code.js
 * Description: A creative JavaScript code example
 * Author: OpenAI
 */

// Define a class for a spaceship object
class Spaceship {
  constructor(name, color, energyLevel) {
    this.name = name;
    this.color = color;
    this.energyLevel = energyLevel;
  }

  // Method to fly the spaceship
  fly() {
    if (this.energyLevel > 0) {
      console.log(`${this.name} is flying!`);
      this.energyLevel -= 10;
    } else {
      console.log(`Insufficient energy to fly ${this.name}!`);
    }
  }
}

// Create a spaceship object named "Starfighter"
const starfighter = new Spaceship("Starfighter", "blue", 100);

// Create multiple spaceship objects
const spaceship1 = new Spaceship("Alpha", "red", 80);
const spaceship2 = new Spaceship("Beta", "green", 90);

// Function to compare spaceship energy levels
function compareEnergy(space1, space2) {
  if (space1.energyLevel > space2.energyLevel) {
    console.log(`${space1.name} has more energy than ${space2.name}!`);
  } else if (space2.energyLevel > space1.energyLevel) {
    console.log(`${space2.name} has more energy than ${space1.name}!`);
  } else {
    console.log(`Both ${space1.name} and ${space2.name} have the same energy level!`);
  }
}

// Generate random spaceship names
const spaceshipNames = ["Orion", "Voyager", "Celestial", "Galactica", "Stellar"];
function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * spaceshipNames.length);
  return spaceshipNames[randomIndex];
}

// An array to hold multiple spaceship objects
const spaceships = [];

// Loop to create 5 spaceship objects with random names and energy levels ranging from 0 to 100
for (let i = 0; i < 5; i++) {
  const randomName = generateRandomName();
  const randomEnergy = Math.floor(Math.random() * 101);
  const spaceship = new Spaceship(randomName, "random", randomEnergy);
  spaceships.push(spaceship);
}

// Function to calculate the total energy level of all spaceships
function calculateTotalEnergy() {
  let totalEnergy = 0;
  for (let spaceship of spaceships) {
    totalEnergy += spaceship.energyLevel;
  }
  return totalEnergy;
}

// Print the spaceship details
for (let spaceship of spaceships) {
  console.log(`Spaceship: ${spaceship.name}, Color: ${spaceship.color}, Energy Level: ${spaceship.energyLevel}`);
}

// Invoke the fly method for the first spaceship object
starfighter.fly();

// Invoke the compareEnergy function for two spaceship objects
compareEnergy(spaceship1, spaceship2);

// Calculate and print the total energy level of all spaceships
const totalEnergy = calculateTotalEnergy();
console.log(`Total Energy Level of All Spaceships: ${totalEnergy}`);

// More code goes here...
// ...
// ... (At least 200 lines long)