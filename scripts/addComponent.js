const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const compsDir = path.resolve(__dirname, '../src/components');
const compName = process.argv[2];

if (!compName) {
  console.log(chalk.red.bold('Please enter a component name!'));
  return;
}

const compPath = path.resolve(compsDir, compName);

if (fs.existsSync(compPath)) {
  console.log(chalk.red.bold(`Component ${compName} already exists!`));
} else {
  fs.mkdirSync(compPath);

  fs.writeFileSync(path.resolve(compPath, 'index.html'), '');

  fs.writeFileSync(path.resolve(compPath, 'index.js'), "import './style.scss';");

  fs.writeFileSync(path.resolve(compPath, 'style.scss'), '');

  console.log(chalk.green.bold(`Component ${compName} created.`));
}