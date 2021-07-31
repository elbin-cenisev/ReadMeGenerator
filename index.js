// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
function generateReadme() {
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
        {
            type: 'input',
            message: 'Enter your Github username: ',
            name: 'githubQst',
        },
        {
            type: 'input',
            message: 'Enter your email address: ',
            name: 'emailQst',
        },
    ])
    .then((response) => {
        const licenseBadge = getBadge(response.licenseBadge);
        const githubLink = `https://github.com/${response.githubQst}`

        const ReadmeText = `
        # ${response.titleQst}
        ${licenseBadge}
        
        ## Table of Contents
        1. [Description](#Description)
        2. [Installation](#Installation)
        3. [Usage](#Usage)
        4. [Contributing](#Contributing)
        5. [Tests](#Tests)
        6. [License](#License)
        7. [Questions](#Questions)

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
        
        ## Questions
        You can find my Github profile at ${githubLink}.
        You can reach me via email at ${response.emailQst}
        `
        writeToFile(README, ReadmeText);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(`${fileName}.md`, data, (error) =>
        error ? console.error(error) : console.log("Successfully created README file")
    );
}

// TODO: Create a function to initialize app
function init() { 

}

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
