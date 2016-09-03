// main.js will contain the logic of your app.
// Running main.js in Terminal/Bash will start the game.
var inquirer = require("inquirer");

var RandomWord = require('./game.js');
var placeHolder = require('./letter.js');
var Word = require('./word.js');


var newGame = new RandomWord();
var currentAnswer = newGame.randomAnswer;

var letterGuessed = "a";

var wordCheck = new Word(currentAnswer);

var letterCheck = new currentAnswer.checkLetter(letterGuessed);

// var RandomWord = function(){

// this.wordList = ['london', 'england', 'paris', 'france', 'moscow', 'russia', 
// 'berlin', 'germany', 'rome', 'italy', 'athens', 'greese', 'madrid', 'spain', 
//  'vienna', 'italy', 'milan', 'italy', 'budapest', 'turkey', 'prague'];

// this.randomAnswer = this.wordList[Math.floor(Math.random()*this.wordList.length)];
// }

// module.exports = RandomWord;

// var Dud = function(gender, dudName, coolnessScale){
// 	this.gender = gender
// 	this.dudName = dudName;
// 	this.coolnessScale = coolnessScale;
// 	this.dudeOrDudess = function(){
// 		if (this.gender == 'female'){
// 			console.log("I'm a dudess. Sup?");
// 		}else{
// 			console.log("I'm a dude. Are there any dudesses around?");
// 		}
// 	}
// }

// module.exports = Dud;


// var PartyBus = require('./party_bus.js');

// //fun fact: Beersville is a real city in PA!!!
// var zbtPartyBus = new PartyBus('Cosmo', 'NYC', 'Beersville, PA');

// //none
// console.log('dudes?', zbtPartyBus.duds);

// zbtPartyBus.addDud('female', 'Moon', 10);

// console.log('dudes?', zbtPartyBus.duds);

// zbtPartyBus.addDud('male', 'Breaker', 10);
// zbtPartyBus.addDud('female', 'Pine', 8);
// zbtPartyBus.addDud('male', 'Chance', 9);
// zbtPartyBus.addDud('male', 'West', 4);
// zbtPartyBus.addDud('female', 'Honor', 6);

// console.log('dudes?', zbtPartyBus.duds);


// var Dud = require('./dud.js');

// var PartyBus = function(driverName, startLocation, destination){
// 	this.duds = [];
// 	this.driverName = driverName;
// 	this.startLocation = startLocation;
// 	this.destination = destination;
// 	this.addDud = function(g, n, r){
// 		this.duds.push(new Dud(g, n, r));
// 	}
// }

// module.exports = PartyBus;