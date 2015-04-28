var sketches = $('.sketches');

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
            prompt: '>',
            name: 'tilda',
            height: 100,
            enabled: false,


            
   greetings: "Hi \nWelcome to Nico's world. \nType:\n2D/3D/4D/cuteStuff/myBeautifulSoul \n to navigate yourself.",
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                }
            }
        };
        if (options) {
            $.extend(settings, options);
        }
        this.append('<div class="td"></div>');
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
jQuery(document).ready(function($) {

    $('#tilda').tilda(function(command, term) {

    if(command == '2D'){
                x1 = true;
                term.echo('What do you want to see specificly? \n(hint: sketches/photography/collages) \nType "back" to go back to the mother directory.');
            term.push(function(command, term) {
                      if(command == 'sketches'){
                        term.echo('Here are my beautiful sketches.');
                        //showing sketches on the main page


                        sketches.text('!!!!!!!');
                        console.log(sketches);


                      }else if (command == 'photography'){
                        term.echo('Here are my beautiful photos.');
                      }else if (command == 'collages'){
                        term.echo('Here are some awesome collages.');

                      }else if (command == 'back'){
                        //push and pop matrix!!!
                        term.pop();
                        //wanna get to the mother directory
                        term.echo("Hi \nWelcome to Nico's world. \nType:\n'2D' '3D' '4D' 'cuteStuff' 'myBeautifulSoul' \n to navigate yourself. \n *hint: remember to be really really specific!");
                    }else{
                        term.echo('I informed you to type specificly? You nauty piece of cup cake');
                      }
            }, {
                prompt: '  >',
                name: 'test'});
    }else if (command =='3D'){
                x1 = true;
                term.echo("What do you want to see specificly? \n(hint: I made a 'woodStool' ) \nType 'back' to go back to the mother directory.");
            term.push(function(command, term) {
                      if(command == 'woodStool'){
                        term.echo('Here are a wood Stool I made in 2013.');
                      }else if (command == 'back'){
                        //push and pop matrix!!!
                        term.pop();
                        //wanna get to the mother directory
                        term.echo("Hi \nWelcome to Nico's world. \nType:\n'2D' '3D' '4D' 'cuteStuff' 'myBeautifulSoul' \n to navigate yourself. \n *hint: remember to be really really specific!");
                    }else{
                        term.echo('be more percise pleaaaaase Q_Q');
                      }
            }, {
                prompt: '  >',
                name: 'test'});

    }else if (command == '4D'){

                x1 = true;
                term.echo("Awesome choice! Let's see some awesome 'animation' or 'film' \nType 'back' to go back to the mother directory.");
            term.push(function(command, term) {
                      if(command == 'animation'){
                        term.echo('Here are some animations.');
                      }else if (command == 'film'){
                        term.echo('Here are some films.');
                      }else if (command == 'back'){
                        //push and pop matrix!!!
                        term.pop();
                        //wanna get to the mother directory
                        term.echo("Hi \nWelcome to Nico's world. \nType:\n'2D' '3D' '4D' 'cuteStuff' 'myBeautifulSoul' \n to navigate yourself. \n *hint: remember to be really really specific!");
                    }else{
                        term.echo('be more percise pleaaaaase Q_Q');
                      }
            }, {
                prompt: '  >',
                name: 'test'});

    }else if(command == 'cuteStuff' || command == 'cute'){
              x1 = true;
              term.echo("My life is dedicated to my cute projects.\nExplore 'Aka' 'IceCube' 'High5' 'trivial' ");
              term.push(function(command, term) {
                      if(command == 'animation'){
                        term.echo('Here are some animations.');
                      }else if (command == 'film'){
                        term.echo('Here are some films.');
                      }else if (command == 'back'){
                        //push and pop matrix!!!
                        term.pop();
                        //wanna get to the mother directory
                        term.echo("Hi \nWelcome to Nico's world. \nType:\n'2D' '3D' '4D' 'cuteStuff' 'myBeautifulSoul' \n to navigate yourself. \n *hint: remember to be really really specific!");
                    }else{
                        term.echo('be more percise pleaaaaase Q_Q');
                      }
            }, {
                prompt: '  >',
                name: 'test'});

    }else if (command == 'myBeautifulSoul' || command == 'yourBeautifulSoul'){
              x1 = true;
              term.echo("Be free and type words like 'music' 'food' to see some AWESOME recommendations! \n Hint: type 'help' to seek help");
              term.push(function(command, term) {
                      if(command == 'music'){
                        term.echo('');
                      }else if (command == 'food'){
                        term.echo('');
                      }else if (command == 'film'){
                        term.echo('');
                      }else if (command == 'motto'){
                        term.echo('');
                      }else if (command == 'boyfriend'){
                        term.echo('My ideal boyfriend would be Anakin Skywalker when he was hesitating to turn to the dark side or not.');
                      }else if (command == 'artist'){
                        term.echo();
                      }else if (command == 'help' || command == 'HELP' || command == 'HELP '||command == ' HELP' ||command == 'help '||command == ' help'){
                        term.echo('Things you can type: \nfood, film, motto, boyfriend, artist, dog_or_cat \nartist, sitcom, thoughts, mood, color \nmajor, live-in, favorite_haircut, random');
                      }
                      else if (command == 'back'){
                        //push and pop matrix!!!
                        term.pop();
                        //wanna get to the mother directory
                        term.echo("Hi \nWelcome to Nico's world. \nType:\n'2D' '3D' '4D' 'cuteStuff' 'myBeautifulSoul' \n to navigate yourself. \n *hint: remember to be really really specific!");
                    }else{
                        term.echo('Oh no this one is not in the category');
                      }
            }, {
                prompt: '  >',
                name: 'test'});
    } else
    {
      term.echo('Be more percise pleaaase QvQ');
    }



    });
});

