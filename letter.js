class Letters {
    constructor(letter) {
        this.letter = letter.toUpperCase()
        this.used = false
    }
    isGuessed (letter) {
        if (this.used) {
            console.log(this.letter);
            return letter;
        } else {
            console.log("_");
            return "_";
        }
    }
    guess (letter) {
        if (letter.toUpperCase() === this.letter) {
            console.log(`${letter} has now been guessed.`);
            this.used = true;
        } else {
            console.log(`You have already guessed ${letter}.`);
        }
    }
}

var e = new Letters("e");
e.isGuessed("e");
console.log(e.letter, e.used)
e.guess("e");
console.log(e.used);
e.isGuessed("e");

module.exports = Letters;