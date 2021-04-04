const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const imdb = require("./lib/imdb");
clear();

console.log(
  chalk.yellow(figlet.textSync("IMDB Finder", { horizontalLayout: "full" }))
);

const run = async () => {
  try {
    const token = await imdb.search();

    console.log(chalk.green("All done!"));
  } catch (err) {
    if (err) {
      switch (err.status) {
        case 401:
          console.log(
            chalk.red(
              "Couldn't log you in. Please provide correct credentials/token."
            )
          );
          break;
        case 422:
          console.log(
            chalk.red(
              "There is already a remote repository or token with the same name"
            )
          );
          break;
        default:
          console.log(chalk.red(err));
      }
    }
  }
};

run();

// const run = async () => {
//   const credentials = await inquirer.askGithubCredentials();
//   console.log(credentials);
// };

// run();
