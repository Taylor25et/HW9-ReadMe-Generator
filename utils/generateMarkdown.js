// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string, google shields.io
function renderLicenseBadge(license) {
  if (license === "no license") {
    return "";
  }
  return `![gitHubLicense](https://img.shields.io/badge/License-${license}-green.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "no license") {
    return "";
  }
  return`* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return "";
  }
  return `## License

  This project is covered under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
${renderLicenseLink(data.license)}


`;
}

module.exports = generateMarkdown;