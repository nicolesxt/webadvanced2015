var flip = false;
var contentt = $('.content');
var sub1 = $('.sub-content1');
var sub2 = $('.sub-content2');
var sub3 = $('.sub-content3');
var sub4 = $('.sub-content4');

var booleans = [false, false, false,false, false, false,false, false, false, false, false, false,false,false,false,false,false,false,false];
var randomSize = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
var aka = $('.aka');
var astronaut = $('.astronaut');
var binary = $('.binary');
var blacknwhite = $('.blacknwhite');
var creatures = $('.creatures');
var digital = $('.digital');
var emoji = $('.emoji');
var happy = $('.happy');
var high5 = $('.high5');
var icecube = $('.icecube');
var locationless = $('.locationless');
var mmm = $('.mmm');
var weirdos = $('.weirdos');
var boyfriend = $('.boyfriend');
var email = $('.email');

//portfolio elements
var works_aka = $('.works_aka');
var works_astronaut = $('.works_astronaut');
var works_binary = $('.works_binary');
var works_blacknwhite = $('.works_blacknwhite');
var works_boyfriend = $('.works_boyfriend');
var works_creatures = $('.works_creatures');
var works_digital = $('.works_digital');
var works_email = $('.works_email');
var works_emoji = $('.works_emoji');
var works_happy = $('.works_happy');
var works_high5= $('.works_high5');
var works_icecube = $('.works_icecube');
var works_locationless = $('.works_locationless');
var works_mmm = $('.works_mmm');
var works_weirdos = $('.works_weirdos');

//portfolio sub elements
var aka1 = $('.aka1');
var aka2 = $('.aka2');
var aka3 = $('.aka3');
var aka4 = $('.aka4');



String.prototype.strip = function(char) {
    return this.replace(new RegExp("^" + char + "*"), '').
        replace(new RegExp(char + "*$"), '');
}


$.extend_if_has = function(desc, source, array) {
    for (var i=array.length;i--;) {
        if (typeof source[array[i]] != 'undefined') {
            desc[array[i]] = source[array[i]];
        }
    }
    return desc;
};


(function($) {
    $.fn.tilda = function(eval, options) {
        if ($('body').data('tilda')) {
            return $('body').data('tilda').terminal;

        }


        
        this.addClass('tilda');
        options = options || {};
        eval = eval || function(command, term) {
            term.echo("you don't set eval for tilda");
        };
        var settings = {
            prompt: '> ',
            name: 'tilda',
            height: 100,
            enabled: false,
   greetings: "Welcome to Nico's world. \nType words to navigate.",

            //this function is activated when tilda is typed
            keypress: function(e) {
                booleans[0] = true;
                if (e.which == 96) {
                    return false;
                }
            }
            //this function is activated when tilda is typed
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td">Hi</div>');
        var self = this;
        self.terminal = this.find('.td').terminal(eval, settings);
        var focus = false;
        $(document.documentElement).keypress(function(e) {
            if (e.which == 96) {
                self.slideToggle('fast');
                self.terminal.focus(focus = !focus);
                self.terminal.attr({
                    scrollTop: self.terminal.attr("scrollHeight")
                });
            }
        });
        $('body').data('tilda', this);
        this.hide();
        return self;
    };
})(jQuery);

//--------------------------------------------------------------------------

update();
fonts();
randomness();
function update(){
  myCode01();
requestAnimationFrame(update);
}

//--------------------------------------------------------------------------
jQuery(document).ready(function($) {
    $('#tilda').tilda(function(command, term) {
      booleans[17]=true;
    if(command == 'Aka'){
      booleans[1]=true;
      term.push(function(command, term){

              if(command =='back'){
                booleans[1]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});
    }else if (command =='astronaut'){

              booleans[2]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[2]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }
    else if (command == 'binary'){


              booleans[3]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[3]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if(command == 'blacknwhite'){

              booleans[4]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[4]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'boyfriend'){

              booleans[5]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[5]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'creatures'){

              booleans[6]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[6]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'digital'){

              booleans[7]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[7]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'email'){

              booleans[8]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[8]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'emoji'){

              booleans[9]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[9]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'happy'){

              booleans[10]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[10]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'high5'){

              booleans[11]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[11]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'IceCube'){

              booleans[12]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[12]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'locationless'){

              booleans[13]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[13]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'mmm'){

              booleans[14]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[14]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }else if (command == 'weirdos'){

              booleans[15]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[15]=false;
                booleans[17]=false;
                term.pop();
              }
      },{
                prompt: ' > ',
                name: 'test'});

    }
   //if users type something that you don't understand
    else
    {
      term.echo("Sorry, I don't understand  '" + command + "'");
    }
  });
});

//--------------------------------------------------------------------------


//simulating the DRAW function in processing
function myCode01(){
  console.log('booleans[0]' + booleans[0]+' booleans[1]' + booleans[1]+' booleans[17]' + booleans[17]);
  //booleans[0] indicates if terminal is opened or not

  //all portfolio elements are supposed to hide at first
  works_aka.hide();
  works_astronaut.hide();
  works_binary.hide();
  works_blacknwhite.hide();
  works_boyfriend.hide();
  works_creatures.hide();
  works_digital.hide();
  works_email.hide();
  works_emoji.hide();
  works_happy.hide();
  works_high5.hide();
  works_icecube.hide();
  works_locationless.hide();
  works_mmm.hide();
  works_weirdos.hide();


    //when terminal is opened
if (booleans[0]===true){
   sub1.hide();
   sub4.hide();
   sub2.show();
   sub3.show();

      //when sub directory is entered
      if (booleans[17]===true){
            sub2.hide();
            sub3.hide();
            sub4.show();
      }
      //when gets out of sub directory
      else{
        sub1.hide();
        sub4.hide();
        sub2.show();
        sub3.show();
      }


              //class-------Aka
              //0 and 1 are true
              if (booleans[1]===true){
                  works_aka.toggle();
              }else{
              }

              //class-------astronaut
              //0 and 2 are true
              if (booleans[2]===true){
                   works_astronaut.toggle();
              }else{
              }

              if (booleans[3]===true){
                   works_binary.toggle();
              }else{
              }

              if (booleans[4]===true){
                   works_blacknwhite.toggle();
              }else{
              }

              if (booleans[5]===true){
                   works_boyfriend.toggle();
              }else{
              }

              if (booleans[6]===true){
                   works_creatures.toggle();
              }else{
              }

              if (booleans[7]===true){
                   works_digital.toggle();
              }else{
              }
              if (booleans[8]===true){
                   works_email.toggle();
              }else{
              }

              if (booleans[9]===true){
                   works_emoji.toggle();
              }else{
              }

              if (booleans[10]===true){
                   works_happy.toggle();
              }else{
              }

              if (booleans[11]===true){
                   works_high5.toggle();
              }else{
              }

              if (booleans[12]===true){
                   works_icecube.toggle();
              }else{
              }

              if (booleans[13]===true){
                   works_locationless.toggle();
              }else{
              }
              if (booleans[14]===true){
                   works_mmm.toggle();
              }else{
              }

              if (booleans[15]===true){
                   works_weirdos.toggle();
              }else{
              }

              if (booleans[16]===true){
                   works_astronaut.toggle();
              }else{
              }

//when terminal is closed
    }else if (booleans[0]===false){
        sub1.show();
        sub2.hide();
        sub3.hide();
        sub4.hide();
    }
}

function randomness(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(30, 150);
    };
    aka1.css("padding-left",randomSize[0]);
    aka1.css("padding-bottom", randomSize[4]);
    aka2.css("padding-left",randomSize[1]);
    aka1.css("padding-bottom", randomSize[5]);
    aka3.css("padding-left",randomSize[2]);
    aka1.css("padding-bottom", randomSize[6]);
    aka4.css("padding-left",randomSize[3]);
    aka1.css("padding-bottom", randomSize[7]);
}

function fonts(){
    for (var i = randomSize.length - 1; i >= 0; i--) {
        randomSize[i] = getRandomInt(13, 27);
    };
   aka.css("font-size",randomSize[0]);
   astronaut.css("font-size",randomSize[1]);
   binary.css("font-size",randomSize[2]);
   blacknwhite.css("font-size",randomSize[3]);
   creatures.css("font-size",randomSize[4]);
   digital.css("font-size",randomSize[5]);
   emoji.css("font-size",randomSize[6]);
   happy.css("font-size",randomSize[7]);
   high5.css("font-size",randomSize[8]);
   icecube.css("font-size",randomSize[9]);
   locationless.css("font-size",randomSize[10]);
   mmm.css("font-size",randomSize[11]);
   weirdos.css("font-size",randomSize[12]);
}

function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}