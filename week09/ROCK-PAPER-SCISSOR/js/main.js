var rBotton = $('.choice-rock');
var pBotton = $('.choice-paper');
var sBotton = $('.choice-scissors');

var resultButton = $('.results-final');
var resultsFinalElement = $('.results-final');

var playerChoice = '';
var computerChoice = '';

var playerChoiceElement = $('.player-choice');
var computerChoiceElement = $('.computer-choice');

//score
var playerScore = 0;
var computerScore = 0;
var playerScoreElement = $('.score-player');
var computerScoreElement = $('.score-computer');


rBotton.on('click', function(){
//	console.log('I picked rock.');
	playerChoice = 'rock';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);
})

pBotton.on('click', function(){
//	console.log('I picked paper.');
	playerChoice = 'paper';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);
})

sBotton.on('click', function(){
	// console.log('I picked scissors.');
	playerChoice = 'scissors';
	makeComputerChoice();
	findWinner();

	playerChoiceElement.text(playerChoice);
	computerChoiceElement.text(computerChoice);
})

resultButton.on('click', function(){
	resultsButton.text(resultsFinalElement);
})


function makeComputerChoice(){
	var randomNumber = Math.random();

	if(randomNumber < 0.333){
		computerChoice = 'rock';
	}
	if(randomNumber >= 0.333 && randomNumber < 0.666){
		computerChoice = 'paper';
	}
	if(randomNumber >=0.666){
		computerChoice = 'scissors';
	}
		console.log(playerChoice+'  '+computerChoice);
}

function findWinner(){
	//tie
	//'===' not only compare value but also compare type of the variable
	if(playerChoice === computerChoice){
		console.log('tie');
	}
	//player win
	//1 rock player + scissor computer
	//2 scissor player + paper computer
	//3 paper player + rock computer
	if(playerChoice === 'rock' && computerChoice === 'scissors'){
		resultsFinalElement.text('Booooo you won!!!');
		playerScore ++;
	}
	if(playerChoice === 'scissors' && computerChoice === 'paper'){
		resultsFinalElement.text('Booooo you won!!!');
		playerScore ++;
	}
	if(playerChoice === 'paper' && computerChoice === 'rock'){
		resultsFinalElement.text('Booooo you won!!!');
		playerScore ++;
	}


	//computer win
	//1 scissors player + rock computer
	//2 paper player + scissors computer
	//3 rock computer + paper player
	if(playerChoice === 'scissors' && computerChoice === 'rock'){
		resultsFinalElement.text('Yeahhhh you lost!!!');
		computerScore ++;
	}
	if(playerChoice === 'paper' && computerChoice === 'scissors'){
		resultsFinalElement.text('Yeahhhh you lost!!!');
		computerScore ++;
	}
	if(playerChoice === 'rock' && computerChoice === 'paper'){
		resultsFinalElement.text('Yeahhh you lost!!!');
		computerScore ++;
	}

	playerScoreElement.text(playerScore);
	computerScoreElement.text(computerScore);


}