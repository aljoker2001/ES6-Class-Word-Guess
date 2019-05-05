var Letters = require("./letter");

var letters = new Letters;
var guess = process.argv[2];

class Word {
    constructor(word) {
        this.word = []
        for (let letter of word) {
            let x = new Letters(letter);
            this.word.push(x);
        }
        console.log(this.word);
    }
    currentWord(letter) {
        var display = '';
        for (let i of this.word) {
            console.log(i);
            if (i.letter === " ") {
                display += " ";
            } else {
                display += i.isGuessed(letter) + " ";
            }
        }
        console.log(display);
    }
    guess2(letter) {
        for (let i of this.word) {
            if (letter === undefined) {
                return "You must enter a letter."
            } else if (letter.toUpperCase() !== i.letter.toUpperCase()) {
                console.log("didn't work");
                console.log(letter, i);
            } else {
                console.log(letter);
                i.guess(letter);
                this.currentWord(letter);
                return
            }
        }
    }
}



var y = new Word("Jurassic Park");
y.currentWord();
y.guess2(guess);
console.log(guess);
console.log(letters.letter);
letters.isGuessed(guess);
letters.guess(guess);
letters.isGuessed(guess);
module.exports = Word;

