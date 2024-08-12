// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "MIT") {
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg">`;
  } else if (license === "Apache 2.0") {
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">`;
  } else if (license === "GPL 3.0") {
    return `!<img src="https://img.shields.io/badge/License-GPLv3-blue.svg">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case "Apache 2.0":
      return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`;
    case "GPL 3.0":
      return `[GPL 3.0](https://opensource.org/licenses/GPL-3.0)`;
    default:
      return "";
    case "None":
      return "No license";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return;
  }
  if (license === "MIT") {
    return `MIT License`;
  }
  if (license === "Apache 2.0") {
    return `Apache 2.0 License`;
  }
  if (license === "GPL 3.0") {
    return `GPL 3.0 License`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Badges
  ${renderLicenseBadge(data.license)}
  

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Test](#test)
  - [GitHub](#github)
  - [Email](#email)
  - [Credit](#credit)
  - [Features](#features)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Test
  ${data.test}

  ## GitHub
  ${data.github}

  ## Email
  ${data.email}

  ## Credit
  ${data.credit}

  ## Features
  ${data.features}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${data.license}


`;
}

export default generateMarkdown;
