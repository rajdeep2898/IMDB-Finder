const inquirer = require("inquirer");

module.exports = {
  askInput: () => {
    const questions = [
      {
        name: "totalNumber",
        type: "input",
        message: "Total number to check from top",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Enter a valid input.";
          }
        },
      },
      {
        name: "actorName",
        type: "input",
        message: "Enter Actor Name:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter Actor name.";
          }
        },
      },
      {
        name: "inputNumber",
        type: "input",
        message: "Enter your number you want to make a search in:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please Enter your number you want to make a search in";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
