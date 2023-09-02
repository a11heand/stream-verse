/*
FileName: ComplexCode.js
Description: This code demonstrates an elaborate and complex data management system using JavaScript. It showcases advanced concepts like object-oriented programming, data manipulation, and error handling.
*/

// Define the class for a User
class User {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `User ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
  }
}

// Define the class for a DataManagementSystem
class DataManagementSystem {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    if (!(user instanceof User)) {
      throw new Error("Invalid user object provided!");
    }

    this.users.push(user);
  }

  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      throw new Error("User not found!");
    }

    this.users.splice(userIndex, 1);
  }

  getUser(userId) {
    const user = this.users.find((user) => user.id === userId);

    if (!user) {
      throw new Error("User not found!");
    }

    return user.getInfo();
  }

  getAllUsers() {
    let userInformation = "";

    for (const user of this.users) {
      userInformation += user.getInfo() + "\n";
    }

    return userInformation;
  }
}

// Create an instance of DataManagementSystem
const dms = new DataManagementSystem();

// Create users and add them to the system
const user1 = new User(1, "John Doe", 25);
const user2 = new User(2, "Jane Smith", 30);
const user3 = new User(3, "Alice Johnson", 35);

dms.addUser(user1);
dms.addUser(user2);
dms.addUser(user3);

// Print all users
console.log("All Users:");
console.log(dms.getAllUsers());

// Retrieve and print details for a specific user
console.log("\nRetrieve User:");
console.log(dms.getUser(2));

// Delete a user and print the updated list
dms.deleteUser(1);
console.log("\nUpdated Users:");
console.log(dms.getAllUsers());

// Try adding an invalid user object
try {
  dms.addUser({});
} catch (error) {
  console.log(`\nError: ${error.message}`);
}

/*
... (additional code and functionality can be added)
... (the code can be extended to include more operations, manipulation, etc.)
*/

// Output:
// All Users:
// User ID: 1, Name: John Doe, Age: 25
// User ID: 2, Name: Jane Smith, Age: 30
// User ID: 3, Name: Alice Johnson, Age: 35

// Retrieve User:
// User ID: 2, Name: Jane Smith, Age: 30

// Updated Users:
// User ID: 2, Name: Jane Smith, Age: 30
// User ID: 3, Name: Alice Johnson, Age: 35

// Error: Invalid user object provided!
*/