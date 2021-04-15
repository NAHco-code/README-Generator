
// Set dependencies
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// *needed to promisify async init function
const util = require('util');



// Questions array for user input
const questions = [
    { type: 'input', message: "What's your name?", name: 'author' },
    { type: 'input', message: "Wait.. what year is it? {yyyy}", name: 'year' },
    { type: 'input', message: "What's your Github username?", name: 'github' },
    { type: 'input', message: "What's your LinkedIn username?", name: 'linkedin' },
    { type: 'input', message: "What's your email address?", name: 'email' },
    { type: 'input', message: "What is the title of your project?", name: 'title' },
    { type: 'input', message: "Write a short blurb selling your project. Make it sound cool!", name: 'blurb' },
    { type: 'input', message: "Write a detailed description of your project. Explain the 'what', 'why' and 'how'", name: 'description' },
    { type: 'input', message: "What command should be run to install dependencies?", name: 'installation' },
    { type: 'input', message: "What does the user need to know about using your project?", name: 'usage' },
    { type: 'input', message: "What command should be run for tests?", name: 'tests' },
    { type: 'input', message: "What does the user need to know about contributing to the project?", name: 'contribute' },
    {
        type: 'list', message: "What kind of license is needed for this project?", name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'none']
    },
];

// Asynchronous writeFile function using promises instead of callback
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt(questions);
};

// Define async initialization
const init = async () => {
    try {
        const answers = await promptUser()
        await writeFileAsync('README.md', generateMarkdown(answers))
        console.log('Successfully generated README file!')
    } catch (err) {
        console.error(err)
    }
    console.log("Check it out - it should be in the root directory of the Generator. Now you can move it to your project folder. Can't wait to see your next project!")
};

// Initialize app
init();
