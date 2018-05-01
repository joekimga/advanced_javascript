var word = require('./words.js');
var prompt = require('prompt');

console.log("Let's play Hangman!");
console.log("Pick a fruit!");
prompt.start();

game = {
	wordList: ['apple', 'banana', 'cherry', 'guava', 'honeydew', 'pineapple', 'watermelon'],
	wordsCorrect: 0,
	guessesLeft: 5,
	currentWrd: null,

	startGame: function (wrd) {

	},

	resetGuesses: function() {

	},

	promptUser: function() {

	},
};

game.startGame();