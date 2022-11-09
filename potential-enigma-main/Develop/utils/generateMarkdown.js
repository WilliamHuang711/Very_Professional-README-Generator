// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function LicenseBadge(license) {
  if (license) {
  licenseBadge = `https://img.shields.io/badge/License-${encodeURIComponent(license)}-green`;
  return licenseBadge;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function LicenseLink(license) {
  let licenseUrl;

  switch(license) {
    case 'BSD 3':
      licenseUrl = 'https://www.openbsd.org/policy.html';
      break;
    case 'BSD 2':
      licenseUrl = 'https://www.openbsd.org/policy.html';
      break;
    case 'GPL':
      licenseUrl = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'ISC':
      licenseUrl = 'https://choosealicense.com/licenses/isc/';
      break;
    case 'MIT':
        licenseUrl = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'No License':
      licenseUrl = '';
      break;
  }
  return licenseUrl;
}

function LicenseSection(license) {
  if (license !== 'No License') {
    return `This project is covered under [${license}](${LicenseLink(license)}).`
  } else {
    return 'NO License';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
![](${LicenseBadge(data.license)})

<a href="https://github.com/${data.username}"><img src="https://img.shields.io/badge/Github%20page-${data.username}-1abc9c.svg" alt="User's github profile"></a>

![alt text](https://github.com/${data.username}.png)

# UserName:
${data.username}

# Installation
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contribute}

# Test
${data.test}

# License
${LicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
