// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache2.0-yellow.svg)`;
  } else if (license === "GPL 3.0") {
    return `![License: GPL](https://img.shields.io/badge/License-GPL3.0-critical.svg)`;
  } else {
    return '';
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { };
function renderLicenseLink(license) {
  let link;
  switch (license) {
    case "MIT":
      link = 'mit';
      break;
    case 'Apache 2.0':
      link = 'apache-2.0';
      break;
    case 'GPL 3.0':
      link = 'gpl-3.0';
      break;
    default: 'none';
  }
  if (link === 'none') {
    return '';
  } else {
    return `https://choosealicense.com/licenses/${link}/`;
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the MIT License.
  For more information, please visit: [MIT](${renderLicenseLink(license)})`;
  } else if (license === "Apache 2.0") {
    return `This project is licensed under Apache 2.0.
  For more information, please visit: [Apache](${renderLicenseLink(license)})`;
  } else if (license === "GPL 3.0") {
    return `This project is licensed under GPL 3.0.
  For more information, please visit: [GPL](${renderLicenseLink(license)})`;
  } else {
    return '';
  }
};

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
- LinkedIn: [${data.author}]${data.linkedin}
- Email: [${data.email}]

## License

// license section

&copy; ${data.year} ${data.author}
`;
};

module.exports = generateMarkdown;
