


jQuery(document).ready(function($) {
    var id = 1;
  $('body').terminal(function(command, term) {
    if(command == '2D'){
                x1 = true;
                term.echo('What do you want to see specificly? \n(hint: sketches/photography/collages)');
            term.push(function(command, term) {
                      if(command == 'sketches'){
                        term.echo('Here are my beautiful sketches.');
                      }else if (command == 'photography'){
                        term.echo('Here are my beautiful photos.');
                      }else if (command == 'collages'){
                        term.echo('Here are some awesome collages.');
                      }else if (command == Delete){
                        //wanna get to the mother directory
                    }else{
                        term.echo('I informed you to type specificly? You nauty girl.');
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
      term.echo('Be more percise pleaaase @v@');
    }
  }, {
    greetings: "Hi \nWelcome to Nico's world. \nType:\n2D/3D/4D/cuteStuff/myBeautifulSoul \n to navigate yourself. \n *hint: remember to be really really specific!",
    onBlur: function(){
      return false;
    }

    });
});

update();

function update(){
requestAnimationFrame(update);
}