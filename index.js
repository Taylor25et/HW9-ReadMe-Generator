// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license from the following:",
    choices: ["Mozilla_Public_2.0", "GNU_AGPLv3", "Apache_2.0", "MIT", "no license"],
  },
  {
    type: "input",
    name: "installation",
    message: "Please explain how to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please explain how to use your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "Please include information on how to run tests for this project.",
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
