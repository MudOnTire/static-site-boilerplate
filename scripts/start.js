const chalk = require('chalk');
const server = require('./server');

console.log(chalk.cyan.bold(`server started === ${server.started}`));

function start() {
  server.listen(8000, 'localhost', err => {
    if (err) {
      console.log(chalk.red.bold(`Dev server start failed, ${err.message}`));
    } else {
      server.started = true;
      console.log(chalk.cyan.bold(`server started === ${server.started}`));
    }
  });
}

function restart() {
  server.close(() => {
    server.started = false;
    console.log(chalk.cyan.bold(`server started === ${server.started}`));
    console.log(chalk.yellow.bold('Dev server stopped!'));
  });
}

if (!server.started) start();

module.exports.restart = restart;

