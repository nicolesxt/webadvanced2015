var obutton = $('.orange');
var abutton = $('.apple');
var playerSituation = $('.title');

var boo = 0;

var tile = [$('.one1'), $('.one2'), $('.one3'), $('.two1'), $('.two2'), $('.two3'), $('.three1'), $('.three2'), $('.three3')];

var player1, player2;

var count = [false, false, false,false, false, false,false, false, false];
var count1 = [false, false, false,false, false, false,false, false, false];
var doneButton = $('.done');

update();

//declare
function update(){
requestAnimationFrame(update);
		whichPlayer();
		win();
}


obutton.on('click', function () {
	boo = 2;
	orangePlayer();
})


abutton.on('click', function () {
    boo = 4;
    applePlayer();
})

doneButton.on('click', function (){
	boo = 0;
	tile[0].text('N');
	tile[1].text('N');
	tile[2].text('N');
	tile[3].text('N');
	tile[4].text('N');
	tile[5].text('N');
	tile[6].text('N');
	tile[7].text('N');
	tile[8].text('N');


	console.log(count[0]);
	console.log(count[1]);
	console.log(count[2]);
	console.log(count[3]);
	console.log(count[4]);
	console.log(count[5]);
	console.log(count[6]);
	console.log(count[7]);
	console.log(count[8]);
})
//i was attemped to change background color
//to indicate which player is on the role right now


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
	//orange wins
	if(count[0]=== true && count[1]=== true &&count[2]=== true ){
		console.log('Orange wins!');
	}
}



function orangePlayer(){
	if (boo < 3 && boo> 1){


		tile[0].on('click', function(event){
				count[0] = !count[0];
				if(count[0]===false){
					tile[0].text('N');
				}else{
					tile[0].text('X');
				}
		})


		tile[1].on('click', function(event){
				count[1] = !count[1];
				if(count[1]===false){
					tile[1].text('N');
				}else{
					tile[1].text('X');
				}
		})

		tile[2].on('click', function(event){
				count[2] = !count[2];
				if(count[2]===false){
					tile[2].text('N');
				}else{
					tile[2].text('X');
				}
		})
		tile[7].on('click', function(event){
				count[7] = !count[7];
				if(count[7]===false){
					tile[7].text('N');
				}else{
					tile[7].text('X');
				}
		})
		tile[3].on('click', function(event){
				count[3] = !count[3];
				if(count[3]===false){
					tile[3].text('N');
				}else{
					tile[3].text('X');
				}
		})
		tile[4].on('click', function(event){
				count[4] = !count[4];
				if(count[4]===false){
					tile[4].text('N');
				}else{
					tile[4].text('X');
				}
		})
		tile[5].on('click', function(event){
				count[5] = !count[5];
				if(count[5]===false){
					tile[5].text('N');
				}else{
					tile[5].text('X');
				}
		})
		tile[6].on('click', function(event){
				count[6] = !count[6];
				if(count[6]===false){
					tile[6].text('N');
				}else{
					tile[6].text('X');
				}
		})
		tile[8].on('click', function(event){
				count[8] = !count[8];
				if(count[8]===false){
					tile[8].text('N');
				}else{
					tile[8].text('X');
				}
		})
	}
}

function applePlayer(){
	if (boo > 3) {

		console.log("apple");
		tile[0].on('click', function(event){
				count1[0] = !count1[0];
				if(count1[0]===false){
					tile[0].text('N');
				}else{
					tile[0].text('O');
				}
		})


		tile[1].on('click', function(event){
				count1[1] = !count1[1];
				if(count1[1]===false){
					tile[1].text('N');
				}else{
					tile[1].text('O');
				}
		})

		tile[2].on('click', function(event){
				count1[2] = !count1[2];
				if(count1[2]===false){
					tile[2].text('N');
				}else{
					tile[2].text('O');
				}
		})
		tile[7].on('click', function(event){
				count1[7] = !count1[7];
				if(count1[7]===false){
					tile[7].text('N');
				}else{
					tile[7].text('O');
				}
		})
		tile[3].on('click', function(event){
				count1[3] = !count1[3];
				if(count1[3]===false){
					tile[3].text('N');
				}else{
					tile[3].text('O');
				}
		})
		tile[4].on('click', function(event){
				count1[4] = !count1[4];
				if(count1[4]===false){
					tile[4].text('N');
				}else{
					tile[4].text('O');
				}
		})
		tile[5].on('click', function(event){
				count1[5] = !count1[5];
				if(count1[5]===false){
					tile[5].text('N');
				}else{
					tile[5].text('O');
				}
		})
		tile[6].on('click', function(event){
				count1[6] = !count1[6];
				if(count1[6]===false){
					tile[6].text('N');
				}else{
					tile[6].text('O');
				}
		})
		tile[8].on('click', function(event){
				count1[8] = !count1[8];
				if(count1[8]===false){
					tile[8].text('N');
				}else{
					tile[8].text('O');
				}
		})


	};
}
