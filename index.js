// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of your README',
            name: 'titleQst',
        },
        {
            type: 'input',
            message: 'Enter a description: ',
            name: 'descriptionQst',
        },
        {
            type: 'input',
            message: 'Enter installation instructions: ',
            name: 'installQst',
        },
        {
            type: 'input',
            message: 'Enter usage information: ',
            name: 'usageQst',
        },
        {
            type: 'input',
            message: 'Enter contribution guidelines: ',
            name: 'contributionQst',
        },
        {
            type: 'input',
            message: 'Enter test instructions: ',
            name: 'testQst',
        },
        {
            type: 'input',
            message: 'Pick a license (MIT, GNU, BSD3): ',
            name: 'licenseQst',
            choices: ["MIT", "GNU", "BSD3"],
        },
    ])
    .then((response) => {
        const questions = [
            response.titleQst, 
            response.descriptionQst, 
            response.installQst, 
            response.usageQst,
            response.contributionQst,
            response.testQst,
            response.licenseQst
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
