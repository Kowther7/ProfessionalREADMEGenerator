// Include necessary packages
const inquirer = require("inquirer");
const fs = require("fs");
const licensesFile = require("./utils/licenses.json");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "ProjectName",
    message: "What's the title of your project?",
    default: "README",
  },
  {
    type: "input",
    name: "WhyThisProject",
    message: "Why do you think this project is useful?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project?",
  },
 
  {
    type: "input",
    name: "projectLearning",
    message: "What did you learn?",
  },
  {
    type: "input",
    name: "githubProject",
    message: "Please provide your GitHub project link:",
  },
  {
    type: "input",
    name: "deployedProject",
    message: "Please provide your deployed project link:",
  },
  {
    type: "input",
    name: "usage",
    message: "What's the usage for this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Select your license from the options:",
    choices: licensesFile.licenses.map((license) => license.name),
    validate(answer) {
      const licensesArray = licensesFile.licenses.map(
        (license) => license.name
      );
      if (!licensesArray.includes(answer)) {
        return "License not valid!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who helped with the project?",
  },
  {
    type: "input",
    name: "test",
    message: "What type of tests were run with this project?",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// Function to write data to README file
function writeToFile(fileName, data1) {
    fs.writeFile("readme_files/" + fileName + ".md", data1, (err) =>
      err
        ? console.log(err)
        : console.log("created your Readme file!")
    );
  }
// Function to initialize the app
function init() {
  return inquirer.prompt(questions).then((data) => {
    // Log the collected user input
    console.log(data);
    // Generate Markdown content using the user input
    const generated = generateMarkdown(data);
    // Write the generated content to a README.md file in the utils folder
    writeToFile(data.ProjectName, generated);
  });
}

// Initialize the app by prompting the user with questions
init();
