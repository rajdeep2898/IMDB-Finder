const CLI = require("clui");
const Spinner = CLI.Spinner;

const inquirer = require("./inquirer");
const searcher = require("./searcher");

const pkg = require("../package.json");
const showName = require("./showName");

let octokit;

module.exports = {
  search: async () => {
    const credentials = await inquirer.askInput();

    const status = new Spinner("Searching , please wait...  ");

    var searchresults = await searcher.findMovies(credentials.totalNumber);

    var moviename = [];

    const fun2 = async (searchresults) => {
      var i = 1;
      var count = 1;
      for (const result of searchresults) {
        console.log("Searching Movie= ", count);
        count++;

        var details = await showName.checkMovie(result, credentials);

        if (details.stars.includes(credentials.actorName)) {
          moviename.push(details);
          i++;
        }
        if (i > credentials.inputNumber) {
          break;
        }
      }
      // console.log(moviename);
      return moviename;
    };
    status.start();
    var newList = await fun2(searchresults);
    status.stop();
    console.log(newList);
  },
};
