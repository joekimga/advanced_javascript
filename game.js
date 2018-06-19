var inquirer = require("inquirer");
var prompt = require("prompt");
var Word = require("./Word");
var words = require("./words");


function Start() {
  var player = this;

 
  this.play = function() {
    this.guessesLeft = 7;
    this.nextWord();
  };

  this.nextWord = function() {
    var randWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randWord);
  };

  this.makeGuess = function() {
    this.askForLetter().then(function() {
      if (player.guessesLeft < 1) {
        player.askToPlayAgain();
      }
      else if (player.currentWord.guessedCorrectly()) {
        player.guessesLeft = 7;
        player.nextWord();
      }
      else {
        player.makeGuess();
      }
    });
  };

  this.askToPlayAgain = function() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(function(val) {
        if (val.choice) {
          player.play();
        }
        else {
          player.quit();
        }
      });
  };

  this.askForLetter = function() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: function(val) {
            return /[a-z1-9]/gi.test(val);
          }
        }
      ])
      .then(function(val) {
        var didGuessCorrectly = player.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(promp.green("\nCORRECT!!!\n"));

        }
        else {
          player.guessesLeft--;
          console.log(promp.red("\nINCORRECT!!!\n"));
          console.log(player.guessesLeft + " guesses remaining!!!\n");
        }
      });
  };

  this.quit = function() {
    console.log("\nGoodbye!");
    process.exit(0);
  };
}

module.exports = Start;
