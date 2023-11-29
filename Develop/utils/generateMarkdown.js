const licensesFile = require("./licenses.json");
// TODO: Create a function that returns a license badge based on which license is passed in

// get license by name
function getLicenseData(name) {
  return licensesFile.licenses.filter(function (license) {
    return license.name == name;
  });

}
function renderLicenseBadge(licenseObject) {
  return licenseObject ? `${licenseObject[0].badge}` : ``;
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseObject) {
  return licenseObject ? `${licenseObject[0].link}` : ``;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName) {
  let licenseFound = getLicenseData(licenseName);
  let licenseBadge = renderLicenseBadge(licenseFound);
  let licenseLink = renderLicenseLink(licenseFound);
  return `${licenseBadge}${licenseLink}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({
  ProjectName,
  WhyThisProject,
  githubProject, 
  deployedProject, 
  usage,
  license,
  projectLearning,
  Contributing,
  test, 
  username,
  email,

}) {
  return `# ${ProjectName}
## WhyThisProject
${WhyThisProject} 
## githubProject
${githubProject}
## deployedProject
${deployedProject}
## usage
${usage}
## License
${renderLicenseSection(license)}
## ProjectLearning
${projectLearning}
## Contributing
${Contributing}
## test
${test}
## username
${username}
## email
${email}


To run the project locally, follow these steps:

1. Open Visual Studio on your computer.
2. Clone the Git project: ${githubProject}
3. Pull the latest changes from the 'main' branch.
4. Open a new terminal and type npm install to install the necessary dependencies.
5. Navigate to the index file using the terminal.
6. Open a new terminal and type node index.
For a visual guide, refer to the usage section.

## Credits
The project relied on the following resources:

Module 09 information provided in Canva.



## Questions
For any queries, feel free to reach out directly via email ${email}



`;
}

module.exports = generateMarkdown;
