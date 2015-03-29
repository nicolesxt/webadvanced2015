var noun1 = document.querySelector('.noun1');
var noun2 = document.querySelector('.noun2');
var verb = document.querySelector('.verb');
var adv = document.querySelector('.adv');
var adj1 = document.querySelector('.adj1');
var adj2 = document.querySelector('.adj2');
var newLetter1 = document.querySelector('.letter1');
var newLetter2 = document.querySelector('.letter2');
var firstA = document.querySelector('.firstA');
var secondA = document.querySelector('.secondA');
var juhao = document.querySelector('.juhao');

var _noun1 = ['giraffe','coconut','dolphine','penguine','stone','sheep','pizza','donut','governor','princess','toothbrush','king','watermelon','woman','man','computer','camera','bottle of milk','pig','dog','piece of cake','lazy person','bald head','banana','atom','star','ship'];
var _noun2 = ['giraffe','coconut','dolphine','penguine','stone','sheep','pizza','donut','governor','princess','toothbrush','king','watermelon','woman','man','computer','camera','bottle of milk','pig','dog','piece of cake','lazy person','bald head','banana','atom','star','ship'];
var _verb = ['jumps on','watches','eats','drinks','gets','has','acquires','loves','drinks','pulls out','carries','rapes','raises','cooks','poops','complains to','thinks about','is','plays','knocks','kisses','swallows','knocks','inhales','exhales','steps on','sits on','sleeps with'];
var _adv = ['passionately','angrily','fiercely','gently','freely','sorrowly','quickly','slowly','brutally','patiently','happily','seriously','casually'];
var _adj1 = ['cute','scary','fierce','grey','red','super angry','happy','sad','shaking','work-in-progress','smelly','cented','serious','useless','beautiful','very ugly','skinny','fat','well-made','well-educated','pedantic','pretentious','confusing'];
var _adj2 = ['cute','scary','fierce','grey','red','super angry','happy','sad','shaking','work-in-progress','smelly','cented','serious','useless','beautiful','very ugly','skinny','fat','well-made','well-educated','pedantic','pretentious','confusing'];
var _letter1 = ['A','E','I','U','O'];
var _letter2 = ['A','E','I','U','O'];


//button
var buttonn = document.querySelector('.button');
buttonn.addEventListener('click', function (event){



/*
Thanks to stackoverflow.com for the code of color change.
http://stackoverflow.com/questions/14949011/random-color-from-array
*/
var rgb = [];
for(var i = 0; i < 3; i++)
    rgb.push(Math.floor(Math.random()*140+100));
	noun1.style.backgroundColor = 'rgb('+ rgb.join(',') +')';
	noun2.style.backgroundColor = 'rgb('+ rgb.join(',') +')';

var rgb1 = [];
for(var i = 0; i < 3; i++)
    rgb1.push(Math.floor(Math.random()*120+120));
	verb.style.backgroundColor = 'rgb('+ rgb1.join(',') +')';

var rgb2 = [];
for(var i = 0; i < 3; i++)
    rgb2.push(Math.floor(Math.random()*100+140));
	adj1.style.backgroundColor = 'rgb('+ rgb2.join(',') +')';
	adj2.style.backgroundColor = 'rgb('+ rgb2.join(',') +')';

var rgb3 = [];
for(var i = 0; i < 3; i++)
    rgb3.push(Math.floor(Math.random()*90+150));
	adv.style.backgroundColor = 'rgb('+ rgb3.join(',') +')';

var rgb4 = [];
for(var i = 0; i < 3; i++)
    rgb4.push(Math.floor(Math.random()*50+200));
	adv.style.backgroundColor = 'rgb('+ rgb4.join(',') +')';

var rgb5 = [];
for(var i = 0; i < 3; i++)
    rgb5.push(Math.floor(Math.random()*150));
	newLetter1.style.backgroundColor = 'rgb('+ rgb5.join(',') +')';
	newLetter2.style.backgroundColor = 'rgb('+ rgb5.join(',') +')';

var rgb6 = [];
for(var i = 0; i < 3; i++)
    rgb6.push(Math.floor(Math.random()*50+200));
	firstA.style.backgroundColor = 'rgb('+ rgb6.join(',') +')';
	secondA.style.backgroundColor = 'rgb('+ rgb6.join(',') +')';

var rgb7 = [];
for(var i = 0; i < 3; i++)
    rgb7.push(Math.floor(Math.random()*60+180));
	juhao.style.backgroundColor = 'rgb('+ rgb6.join(',') +')';

	// var _colors = ['black', 'red', 'blue'];
	// var randomColors = _colors[Math.floor(Math.random()*_colors.length)];
	// noun1.style.backgroundColor = 'randomColors';
	// console.log(randomColors);

var letter1Num = Math.floor(Math.random()*_letter1.length);
var randomLetter1 = _letter1[letter1Num];
var letter2Num = Math.floor(Math.random()*_letter2.length);
var randomLetter2 = _letter2[letter2Num];

var noun1Num = Math.floor(Math.random()*_noun1.length);
var randomNoun1 = _noun1[noun1Num];

var noun2Num = Math.floor(Math.random()*_noun2.length);
var randomNoun2 = _noun2[noun2Num];

var verbNum = Math.floor(Math.random()*_verb.length);
var randomVerb = _verb[verbNum];

var advNum = Math.floor(Math.random()*_adv.length);
var randomAdv = _adv[advNum];

var adjNum1 = Math.floor(Math.random()*_adj1.length);
var randomAdj1 = _adj1[adjNum1];

var adjNum2 = Math.floor(Math.random()*_adj2.length);
var randomAdj2 = _adj2[adjNum2];

newLetter1.innerHTML = randomLetter1;
newLetter2.innerHTML = randomLetter2;
noun1.innerHTML = randomNoun1;
noun2.innerHTML = randomNoun2;
verb.innerHTML = randomVerb;
adj1.innerHTML = randomAdj1;
adj2.innerHTML = randomAdj2;
adv.innerHTML = randomAdv;
})

