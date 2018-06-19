var Letter = require("./Letter");

function Word(word) {

  this.letters = word.split("").map(function(char) {
    return new Letter(char);
  });
}

// Slice letter from Word???












module.exports = Word;