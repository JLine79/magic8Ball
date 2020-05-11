$(document).ready(function(){
$("#answer").hide();
var magic8Ball = {};
	magic8Ball.magicAnswers = ["Yes", "No", "Ask again later", "Don't count on it", "Maybe", "Keep trying!"];
	magic8Ball.askQuestion = function (question) {
	$("#8ball").attr ("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var selectFromAnswers = randomNumber * this.magicAnswers.length;
	var randomIndex = Math.floor (selectFromAnswers);
	var answer = this.magicAnswers [randomIndex];
	$("#answer").text (answer);


console.log (question);
console.log (answer);
	};

	var onClick = function (){
	$("#answer").hide();
	$("#8ball").attr ("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");


	setTimeout (
		function() {
	var question = prompt ("Ask me anything!");
	$("#8ball").effect("shake");
	magic8Ball.askQuestion (question);
		},500);

	};
	$("#questionButton").click (onClick);

});
