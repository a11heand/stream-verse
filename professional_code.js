/* Filename: professional_code.js */

/**
 * This code is a professional and creative implementation of a simple chatbot
 * that interacts with users, providing information and answering questions.
 */

// Import necessary modules
const readline = require('readline');

// Creating the interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Welcome message
console.log('Welcome to Chatbot! How may I assist you today?');

/**
 * Function to process user input and provide appropriate response
 * @param {string} userInput - The user's input
 */
function processInput(userInput) {
  // Convert input to lowercase and remove whitespace
  const input = userInput.toLowerCase().trim();

  // Check for specific keywords and provide customized responses
  if (input === 'hello' || input === 'hi') {
    console.log('Hello there! How can I help you?');
  } else if (input === 'help') {
    console.log('Sure! I can assist you with a wide range of topics. Just ask me anything!');
    console.log('For example, you can ask me about the weather, news, or even tell me a joke.');
  } else if (input.startsWith('tell me a joke')) {
    console.log('Sure. Why don\'t scientists trust atoms? Because they make up everything!');
  } else if (input === 'bye' || input === 'goodbye') {
    console.log('Goodbye! Have a great day.');
    rl.close();
  } else {
    console.log('Apologies, but I\'m not programmed to answer that question yet. How else may I assist you?');
  }
}

// Start the conversation
rl.question('Ask me anything: ', (answer) => {
  processInput(answer);
});

// Continue the conversation until user says 'bye'
rl.on('line', (answer) => {
  processInput(answer);
});

// Handle graceful termination
rl.on('close', () => {
  console.log('Chatbot session ended.');
  process.exit(0);
});

// ... (additional code for more complex chatbot behavior)