// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { };

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { };

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { };

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

// license badge

${data.blurb}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contribute](#contribute)
- [Contact Me](#questions)
- [License](#license)
## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Tests

${data.tests}

## Contribute

${data.contribute}

## Questions?

- Github: [${data.github}]
- LinkedIn: [${data.author}]
- Email: [${data.email}]

## License

// license section

&copy; ${data.year} ${data.author}
`;
};

module.exports = generateMarkdown;
