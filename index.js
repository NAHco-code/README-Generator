
// Set dependencies
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// *needed to promisify async init function
const util = require('util');



// Questions array for user input
const questions = [{}];

// Asynchronous writeFile function using promises instead of callback
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt(questions);
};

// Define async initialization
// const init = async

// Initialize app
init();
