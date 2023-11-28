// TODO: Include packages needed for this application
const inquirer= require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    { type: "input", 
    name: "PorjectName", 
    message: "Whats the title of your project?", 
    default: "README",

    } , 
    {
        type: "input",
        name: "WhyThispProject",
        message: "Why do you think this project is useful?",
      },
    { 
        type: "input", 
        name: "description", 
        message: "description your project?"
    }, 
    { type: "input", 
    name:"installation", 
    message: "What's the installation process? "


    }, 
    {
        type: "input",
        name: "projectLearning",
        message: "What did you learn?",
      },
      {
        type: "input",
        name: "githubProject",
        message: "Please provide your github project link:",
      },
      {
        type: "input",
        name: "depoyedProject",
        message: "Please provide your deployed project link:",
      },
    {
        type: "input", 
    name:"usage", 
    message: "Whats the usege for this application ? "
    }, 
    { type: "list", 
    name:"License", 
    message: "What's the installtion process? ",
    choices: ["MIT", "GUP", "APACHE"]

    }, 
    {
        type: "input", 
    name:"Contributing", 
    message: "Who helped with the project? ",
    }, 
    {
        type: "input", 
        name: "test", 
        message: "What type of test we ran with this project?"
    }, 
    {
        type: "input",
        name: "username",
        message: "What is your github username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data)=>{
        console.log(data)
        const genrated = generateMarkdown(data)
        writeToFile("./utils/readme.md", genrated)
    })
}

// Function call to initialize app
init();
