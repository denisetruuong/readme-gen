// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "write the descriptipn of your README",
    name: "description",
  },
  {
    type: "input",
    message: "write the installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "write the test instructions",
    name: "test",
  },
  {
    type: "input",
    message: "github username",
    name: "github",
  },
  {
    type: "input",
    message: "email contact",
    name: "email",
  },
  {
    type: "input",
    message: "list collaborators",
    name: "credit",
  },
  {
    type: "input",
    message: "features",
    name: "features",
  },
  {
    type: "input",
    message: "Choose your license",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
  },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      writeToFile("README.md", data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
