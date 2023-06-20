// SELECT ALL DRUM ELEMENTS

var numberOfPokemonButtons = document.querySelectorAll(".pokemon").length;

// FOR LOOP THAT ORDERS EACH BUTTON


for (var i = 0; i < numberOfPokemonButtons; i++) {

    document.querySelectorAll(".pokemon")[i].addEventListener("click", handleClick);
    
    function handleClick(){

        // WAS HAVING TROUBLE FINDING A BUG IN MY CODE AND 
        // // THEN FIGURED OUT THE PROBLEM WAS THAT I WASN'T
        // PUTTING THIS VARIABLE IN THE RIGHT PLACE INSIDE THE FUNCTION

        var buttonInnerHTML = this.textContent;

        // PASSES IN THE BUTTON THAT GOT PRESSED

        crySFX(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    }

    // DETECTS KEYBOARD PRESSES

    document.addEventListener("keypress", function(event) {
        crySFX(event.key);

        buttonAnimation(event.key);
    });

    function crySFX(key){

        switch (key) {
            case "w":
                var pikachu = new Audio("sounds/pikachu.mp3");
                pikachu.play();
                break;
    
            case "a":
                var bulbasaur = new Audio("sounds/bulbasaur.mp3");
                bulbasaur.play();
                break;
    
            case "s":
                var charmander = new Audio("sounds/charmander.mp3");
                charmander.play();
                break;
    
            case "d":
                var squirtle = new Audio("sounds/squirtle.mp3");
                squirtle.volume = 0.1;
                squirtle.play();
                break;
    
            case "j":
                var eevee = new Audio("sounds/eevee.mp3");
                eevee.volume = 0.1;
                eevee.play();
                break;
    
            case "k":
                var meowth = new Audio("sounds/meowth.mp3");
                meowth.play();
                break;
    
            case "l":
                var togepi = new Audio("sounds/togepi.mp3");
                togepi.play();
                break;

            default: console.log(buttonInnerHTML)
            }

    }

    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        
        // ADDS A CSS STYLE TO THE PRESSED BUTTON
        activeButton.classList.add("pressed");    
        
        // REMOVES THE CSS STYLE CLASS AFTER 1 SECOND
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }

}

