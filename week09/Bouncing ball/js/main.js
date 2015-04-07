var posX = 0;
var posY = 0;

var velX = 5;
var velY = Math.random(3,8);

var boundaryL = 0;
var boundaryR = $(window).width() - 20;
var boundaryB = $(window).height() - 20;
var boundaryT = 0;

var ball = $('.ball');
//declare
function update(){

//emulate the draw function
requestAnimationFrame(update);

posX+=velX;
posY+=velY;

ball.css('left', posX);
ball.css('top', posY);

checkBoundaries();

	console.log('fsd');
}

function checkBoundaries(){
if(posX> boundaryR|| posX< boundaryL ){
	velX*= -1;
}

if(posY> boundaryB || posY< boundaryT ){
	velY*= -1;
}
}

//calling the function
update();