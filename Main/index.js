const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // Project Name
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? ',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else{
                console.log('You must enter a title to continue!');
                return false;
            }
        }
    },
    // Project Descriptiion
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project ',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else{
                console.log('You must provide a project description to continue!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? ',
        validate: installationInput => {
            if (installationInput){
                return true;
            } else{
                console.log('You must provide the installation information to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? ',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else{
                console.log('You must provide project usage information to continue!');
                return false;
            }
        }
    },
     // Contribution Guidlines
     {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project? ',
        validate: contributionInput => {
            if (contributionInput){
                return true;
            } else{
                console.log('You must provide information on how to contribute to this project to continue!');
                return false;
            }
        }
    },
     // Test Instructions
     {
        type: 'input',
        name: 'test',
        message: 'How do you test this project? ',
        validate: testInput => {
            if (testInput){
                return true;
            } else{
                console.log('You must provide testing information on this project to continue!');
                return false;
            }
        }
    },
     // License Options
     {
        type: 'input',
        name: 'licensing',
        message: 'Choose a license for you project ',
        choices: ['Apache', 'MIT', 'GNU-General-Public', 'Common-Development-and-Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput){
                return true;
            } else{
                console.log('Please pick a license for the project!');
                return false;
            }
        }
    },
     // GitHub Username
     {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username ',
        validate: githubInput => {
            if (githubInput){
                return true;
            } else{
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
     // Email Address
     {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email? ',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Success! Information transferred to README!')
    });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
function init(){
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

init();