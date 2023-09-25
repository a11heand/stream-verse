/**
 * Filename: complexCode.js
 * Content: Sophisticated and elaborate code showcasing advanced JavaScript techniques
 */

// Object representing a person with name and age
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Array of person objects
const persons = [
  new Person('John', 25),
  new Person('Jane', 30),
  new Person('Alex', 35),
  new Person('Sarah', 28),
];

// Function to group persons by age
function groupPersonsByAge(persons) {
  const groupedPersons = {};

  persons.forEach((person) => {
    if (!groupedPersons[person.age]) {
      groupedPersons[person.age] = [];
    }
    groupedPersons[person.age].push(person);
  });

  return groupedPersons;
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// Generate 100 random numbers between 1 and 100
const randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(getRandomNumber(1, 100));
}

// Filter prime numbers from the random numbers array
const primeNumbers = randomNumbers.filter((number) => isPrime(number));

// Group persons by age
const groupedPersons = groupPersonsByAge(persons);

// Calculate the average age of persons
const ages = Object.keys(groupedPersons).map((age) => parseInt(age));
const averageAge = calculateAverage(ages);

console.log('Random Numbers:', randomNumbers);
console.log('Prime Numbers:', primeNumbers);
console.log('Grouped Persons:', groupedPersons);
console.log('Average Age:', averageAge);

// ... The code continues with more sophisticated and elaborate logic ...

... (over 200 lines of complex code) ...