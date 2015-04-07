var obutton = $('.orange');
var abutton = $('.apple');
var playerSituation = $('.title');

var boo = 0;

var tile = [$('.one1'), $('.one2'), $('.one3'), $('.two1'), $('.two2'), $('.two3'), $('.three1'), $('.three2'), $('.three3')];

var player1, player2;

var count = [false, false, false,false, false, false,false, false, false];
var count1 = [false, false, false,false, false, false,false, false, false];
var doneButton = $('.done');

var orange = [false, false, false,false, false, false,false, false, false];
var apple = [false, false, false,false, false, false,false, false, false];

var aa = 1;
var bb = 2;
var cc = 3;
var dd = 4;

update();

//declare
function update(){
requestAnimationFrame(update);
		whichPlayer();
		win();


	obutton.on('click', function () {
		boo = 2;
	})


	abutton.on('click', function () {
	    boo = 4;
	})

	doneButton.on('click', function (){
		boo = 0;
		console.log(boo);
	})
	tiles(0);
	tiles(1);
	tiles(2);
	tiles(3);
	tiles(4);
	tiles(5);
	tiles(6);
	tiles(7);
	tiles(8);

			// console.log(orange[0]);
			// console.log(orange[1]);
			// console.log(orange[2]);
			// console.log(orange[3]);
			// console.log(orange[4]);
			// console.log(orange[5]);
			// console.log(orange[6]);
			// console.log(orange[7]);

}


function whichPlayer(){
	if( boo < 3 && boo> 1){
		playerSituation.text('Orange is Playing');
		$(".title").css("color", "orange");
	// 	$("h2").css("background-color","red");
	}
	if (boo > 3){
		playerSituation.text('Apple is Playing');
		$(".title").css("color", "red");
	// 	$("h2").css("background-color","black");
	}
	if (boo < 1){
		playerSituation.text('Tic-Tac-Toe');
		$(".title").css("color", "black");
	}
}


function win(){
	if(orange[4]=== true && orange[4+aa]===true && orange[4-aa]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[4]=== true && orange[4+bb]===true && orange[4-bb]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[4]=== true && orange[4+cc]===true && orange[4-cc]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[4]=== true && orange[4+dd]===true && orange[4-dd]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[1]=== true && orange[1+aa]===true && orange[1-aa]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[7]=== true && orange[7+aa]===true && orange[7-aa]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[3]=== true && orange[3+cc]===true && orange[3-cc]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}
	if(orange[5]=== true && orange[5+cc]===true && orange[5-cc]===true){
		playerSituation.text('Orange Wins!');
		$(".title").css("color", "orange");
	}


	if(apple[4]=== true && apple[4+aa]===true && apple[4-aa]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[4]=== true && apple[4+bb]===true && apple[4-bb]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[4]=== true && apple[4+cc]===true && apple[4-cc]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[4]=== true && apple[4+dd]===true && apple[4-dd]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[1]=== true && apple[1+aa]===true && apple[1-aa]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[7]=== true && apple[7+aa]===true && apple[7-aa]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[3]=== true && apple[3+cc]===true && apple[3-cc]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}
	if(apple[3]=== true && apple[3+cc]===true && apple[3-cc]===true){
		playerSituation.text('Apple Wins!');
		$(".title").css("color", "red");
	}

}

function tiles(numver){
	if(boo < 3 && boo> 1){
		tile[numver].on('click', function () {
			tile[numver].text('X');
			orange[numver] = true;
		})
	}
	if(boo > 3){
		tile[numver].on('click', function () {
			tile[numver].text('O');
			apple[numver] = true;
		})
	}

	if(boo < 2){
			tile[numver].text('N');
			orange[numver] = false;
			apple[numver] = false;
	}
}



