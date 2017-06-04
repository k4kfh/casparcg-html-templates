/*
These functions are in a certain order on purpose. update() is the most important, and is called first. Please see http://blog.evilgeniustech.com/casparcg-html-producer-basics/ for more information.
*/

//This function is designed to update any information and get the animation ready to play
function update(arg) { //the key/value pairs configured in CasparCG client are passed here
    json = JSON.parse(arg); //You must parse the JSON string. I recommend storing the JSON outside this function so the parameters can be accessed by other functions
    
    //in this case, if we're passed a parameter called "f0" we want to change the text box accordingly. If not, we want it to say "hello world"
    if (json.f0 !== undefined) {
        $("#text-element").html(json.f0);
    }
    
    //Now that's all we have to do, fading in the box is handled by the play() function
}

//This function actually plays the animation that we've updated/configured with update()
function play(arg) {
    //in this case we just have to fade in a simple <div>
    $(".textbox").fadeTo("slow", 1); //"slowly set the opacity to 1"
}

function stop() {
    
}

//This is an opportunity to smoothly transition out, so in this case we want to fade out our text
function next() {
    
}
