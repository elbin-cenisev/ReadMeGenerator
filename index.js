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

        const licenseBadge = getBadge(response.licenseBadge);

        const README = `
        # ${response.titleQst}
        
        ## Description
        ${response.descriptionQst}.
        
        ## Installation
        ${response.installQst}.
        
        ## Usage
        ${response.usageQst}.

        ## Contributing
        ${response.contributionQst}.

        ## Tests
        ${response.testQst}.

        ## License
        This repository is covered under the ${response.licenseQst} license.
        
        ## Screenshots
        ![Screenshot from 2021-06-24 13-56-46](https://user-images.githubusercontent.com/75343776/123310396-0a02da80-d4f4-11eb-9645-417c90412f55.png)
        ![Screenshot from 2021-06-24 13-40-59](https://user-images.githubusercontent.com/75343776/123310421-0ec78e80-d4f4-11eb-8cd0-3f1c5dfe4f07.png)
        ![Screenshot from 2021-06-24 13-40-20](https://user-images.githubusercontent.com/75343776/123310434-1129e880-d4f4-11eb-8755-ff91ffcb9821.png)
        ![Screenshot from 2021-06-24 13-39-02](https://user-images.githubusercontent.com/75343776/123310446-138c4280-d4f4-11eb-9756-e969f17fdf64.png)
        
        ## License
        MIT License
        `
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// Function that returns correct license badge
function getBadge(license) {
    let licenseBadge;
    license = license.toLowerCase();
    if (license === "mit") {
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    if (license === "bsd3") {
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    if (license === "gnu") {
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    return licenseBadge;
}
