// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type:'input',
    name: 'username',
    message: "what's your GitHub user name?"

},
{
    typr: 'input',
    name: 'title',
    message: "what's your project title?",
},
{
    typr: 'input',
    name: 'description',
    message: "What's your project description?",
},
{
    typr: 'input',
    name: 'toc',
    message: "Any table of Contents?",
},
{
    typr: 'input',
    name: 'installation',
    message: "What are the installation instructions?",
},
{
    typr: 'input',
    name: 'usage',
    message: "Any instructions or example for the use of this application?",
},
{
    typr: 'input',
    name: 'contribute',
    message: "List your collaborators",
},
{
    typr: 'input',
    name: 'test',
    message: "Any test written and examples",
},
{
    typr: 'list',
    name: 'license',
    message: "Choose any licenses that your project may include",
    choice: [
        'BSD 3',
        'BSD 2',
        'GPL',
        'ISC',
        'MIT',
        'No License'
    ]
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var fileName = 'README.md'
    fs.writeFile(fileName, data, "utf-8", function(err) {
        if (err) throw err;
        console.log('Your README file had successfully created!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        let readme = generateMarkdown(data);
        var fileName = 'README.md';
        return writeToFile(fileName, readme)
    })
}

// Function call to initialize app
init();
