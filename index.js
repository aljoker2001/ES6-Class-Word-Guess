const Word = require("./word");
const Letters = require("./letter");
const inquirer = require("inquirer");
const words = [""]


const letterGuess = () => {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter: ",
            validate: function (value) {
                if (value === '' || value === undefined) {
                    return false
                }
                return true
            }
        }
    ])
    .then(function (guessed) {
        var letter = new Letters(guessed.letter);
    })
}

letterGuess();