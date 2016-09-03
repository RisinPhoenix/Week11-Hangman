// Your game.js file will randomly select a word for the player.
var RandomWord = function(){

this.wordList = ['london', 'england', 'paris', 'france', 'moscow', 'russia', 
'berlin', 'germany', 'rome', 'italy', 'athens', 'greese', 'madrid', 'spain', 
 'vienna', 'italy', 'milan', 'italy', 'budapest', 'turkey', 'prague'];

this.randomAnswer = this.wordList[Math.floor(Math.random()*this.wordList.length)];
};

module.exports = RandomWord;

// city = cities[Math.floor(Math.random()*cities.length)];

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