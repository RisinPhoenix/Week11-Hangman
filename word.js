// Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters 
// guessed versus the random word selected.
var Word = function(wordPicked){
	this.word = wordPicked;
	this.answerLettersArray = this.word.split("");
	this.lettersGuessed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	this.alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	this.checkLetters = function(letterPicked){
		this.letter = letterPicked;
		console.log(this.letter);

		// for (i = 0, i < alphabetLetters.lenght, i++)

		// 	if (alphabetLetters[i] == letter) {

		// 		for (i = 0, i < lettersGuessed.lenght, i++)

		// 			if (lettersGuessed.lenght[i] == letter){
		// 				var index = lettersGuessed.indexOf([i]);
		// 					if (~index) {
		// 					    lettersGuessed[index] = "-";
		// 								}
		// 			}
		// 			else {
		// 			answerLettersArray.push(letter);
		// 			console.log(answerLetterArray);
		// 			}
		// 	}
		// 	else {
		// 		console.log('Please input a letter');
		// 	}

		
		
		

		console.log("Letter is picked already");
	};
};

module.exports = Word;