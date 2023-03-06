// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const createReadME = require("./utils/generateMarkdown");
const fs = require("fs");
const { generatePrime } = require("crypto");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },

  {
    type: "input",
    name: "usage",
    message: "What use is your project?",
  },

  {
    type: "input",
    name: "credits",
    message: "What resources helped complete your project?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },

  {
    type: "input",
    name: "github",
    message: "What use is your git hub username?",
  },

  {
    type: "list",
    name: "license",
    message: "License?",
    choices: ["Apache", "MIT", "GNU", "other", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README.md.")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const pageTemplate = createReadME(answers);
    writeToFile('README.md', pageTemplate)
  });
}

// Function call to initialize app
init();
