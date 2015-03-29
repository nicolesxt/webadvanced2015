//declaring a variable
var blueBox = document.querySelector('.box-1');
//kinda like serial.print
console.log(blueBox);

var GreenBox = document.querySelector('.box-2');
console.log(GreenBox);
var RedBox = document.querySelector('.box-3');
console.log(RedBox);
var YellowBox = document.querySelector('.box-4');
console.log(YellowBox);




//array of random words
var myRandomwords = ['Banana', 'Barf','Batman','Briana'];



blueBox.addEventListener('click', function (event) {
	document.body.style.backgroundColor= 'blue';
	console.log(event);
	para.style.color='white';

	// para.classList.add('paragraph1');
	// para.classList.remove('paragraph2');
	// para.classList.remove('paragraph3');
	// para.classList.remove('paragraph4');
para.innerHTML = getNewWord();

});

GreenBox.addEventListener('click', function (event) {
	document.body.style.backgroundColor='green';
	console.log(event);
	para.style.color='black';
	// para.classList.add('paragraph2');
	// para.classList.remove('paragraph1');
	// para.classList.remove('paragraph3');
	// para.classList.remove('paragraph4');
para.innerHTML = getNewWord();

});

RedBox.addEventListener('click', function (event) {
	document.body.style.backgroundColor='red';
	console.log(event);
	para.style.color='white';
	// para.classList.add('paragraph3');
	// para.classList.remove('paragraph1');
	// para.classList.remove('paragraph2');
	// para.classList.remove('paragraph4');
		para.innerHTML = getNewWord();
});

YellowBox.addEventListener('click', function (event) {
	document.body.style.backgroundColor='yellow';
	console.log(event);
	para.style.color='black';
	// para.classList.add('paragraph4');
	// para.classList.remove('paragraph1');
	// para.classList.remove('paragraph2');
	// para.classList.remove('paragraph3');
		para.innerHTML = getNewWord();
});


//CHANGE paragraph

var para = document.querySelector('.paragraph');

para.addEventListener('click', function (event){
	document.body.style.color='blue';
	console.log(event);
	para.classList.remove('paragraph1');
	para.classList.remove('paragraph2');
	para.classList.remove('paragraph3');
	para.classList.remove('paragraph4');

})


function getNewWord(){
	var randomNumber = Math.floor(Math.random()*4);
	var randomWord = myRandomwords[randomNumber];
    console.log(randomWord);
    return randomWord;
	para.innerHTML = randomWord;

}