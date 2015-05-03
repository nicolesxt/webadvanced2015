var contentt = $('.content');
var sub1 = $('.sub-content1');
var sub2 = $('.sub-content2');
var sub3 = $('.sub-content3');
var sub4 = $('.sub-content4');

var booleans = [false, false, false,false, false, false,false, false, false, false, false, false];
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
   greetings: "Welcome to Nico's world. \nType words to navigate",

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
function update(){
requestAnimationFrame(update);

 myCode01();
}

//--------------------------------------------------------------------------
jQuery(document).ready(function($) {
    $('#tilda').tilda(function(command, term) {
    if(command == 'Aka'){
              booleans[1]=true;
      term.push(function(command, term){
              if(command =='back'){
                booleans[1]=false;
                term.pop();
              }
      },{
                prompt: '  > ',
                name: 'test'});
    }else if (command =='astronaut'){
      term.echo('What do you want to see specificly? \n (hint: I made a woodStool)');
    }
    else if (command == 'binary'){
      term.echo("Awesome choice! Let's see some awesome animations and movies!");
    }else if(command == 'blacknwhite'){
      term.echo("My life is dedicated to my cute projects.");
    }else if (command == 'creatures'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'digital'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'emoji'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'happy'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'high5'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'IceCube'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'locationless'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'mmm'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'weirdos'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'definition'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'email'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'boyfriend'){
      term.echo("So you wanna see my beautiful soul?");
    }else if (command == 'back'){
      term.pop();
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
  //booleans[0] indicates if terminal is opened or not
    if (booleans[0]===true){

              if (booleans[1]===true){
                  sub2.hide();
                  aka.show();
                  astronaut.hide();
                  binary.hide();
                  blacknwhite.hide();
                  creatures.hide();
                  digital.hide();
                  emoji.hide();
                  happy.hide();
                  high5.hide();
                  locationless.hide();
                  mmm.hide();
                  weirdos.hide();
                  icecube.hide();
                  boyfriend.hide();
                  email.hide();
                  sub4.show();
              }else if (booleans[1]===false){
                sub1.hide();
                sub2.show();
                sub3.show();
              }


    }else if (booleans[0]===false){
        sub1.show();
        sub2.hide();
        sub3.hide();
        sub4.hide();
    }
// for (var i = booleans.length - 1; i >= 0; i--) {
//     console.log(booleans[i]);
// };
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


