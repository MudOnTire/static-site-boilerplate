const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const pagesDir = path.resolve(__dirname, '../src/pages');
const pageName = process.argv[2];

if (!pageName) {
  console.log(chalk.red.bold('Please enter a page name!'));
  return;
}

const pagePath = path.resolve(pagesDir, pageName);

if (fs.existsSync(pagePath)) {
  console.log(chalk.red.bold(`Page ${pageName} already exists!`));
} else {
  fs.mkdirSync(pagePath);

  fs.writeFileSync(
    path.resolve(pagePath, 'index.html'),
    "${require('Src/components/header/index.html')}\n\n<!-- page content here -->\n\n${require('Src/components/footer/index.html')}"
  );

  fs.writeFileSync(path.resolve(pagePath, 'index.js'), "import './style.scss';");

  fs.writeFileSync(path.resolve(pagePath, 'style.scss'), '');

  console.log(chalk.green.bold(`Page ${pageName} created.`));
}