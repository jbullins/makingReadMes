function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${data.licensing}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
