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
            prompt: ' > ',
            name: 'tilda',
            height: 100,
            enabled: false,


            
   greetings: "Hi \nWelcome to Nico's world. \nType:\n2D/3D/4D/cuteStuff/myBeautifulSoul \n to navigate yourself. \n *hint: remember to be really really specific!",
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
                term.echo('What do you want to see specificly? \n(hint: sketches/photography/collages)');
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
                      }else if (command == Delete){
                        //wanna get to the mother directory
                    }else{
                        term.echo('I informed you to type specificly? You nauty piece of cup cake');
                      }
            }, {
                prompt: '  > ',
                name: 'test'});
    }else if (command =='3D'){
      term.echo('What do you want to see specificly? \n (hint: I made a woodStool)');
    }
    else if (command == '4D'){
      term.echo("Awesome choice! Let's see some awesome animations and movies!");
    }else if(command == 'cuteStuff' || command == 'cute'){
      term.echo("My life is dedicated to my cute projects.");
    }else if (command == 'myBeautifulSoul'){
      term.echo("So you wanna see my beautiful soul?");
    }else
    {
      term.echo('Be more percise pleaaase QvQ');
    }



    });
});

