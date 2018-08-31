let drumkitButtons = document.getElementsByClassName('key');

let playSound = (btn) => {
    let audio;
    let keyCode = btn.dataset.key;

    btn.classList.add("playing");
    if(keyCode == 65) {
        audio = new Audio("./sounds/clap.wav");
        audio.play();
    } else if (keyCode == 83) {
        audio = new Audio("./sounds/hihat.wav");
        audio.play();
    } else if (keyCode == 68) {
        audio = new Audio("./sounds/kick.wav");
        audio.play();
    } else if (keyCode == 70) {
        audio = new Audio("./sounds/openhat.wav");
        audio.play();
    } else if (keyCode == 71) {
        audio = new Audio("./sounds/boom.wav");
        audio.play();
    } else if (keyCode == 72) {
        audio = new Audio("./sounds/ride.wav");
        audio.play();
    } else if (keyCode == 74) {
        audio = new Audio("./sounds/snare.wav");
        audio.play();
    } else if (keyCode == 75) {
        audio = new Audio("./sounds/tom.wav");
        audio.play();
    } else if (keyCode == 76) {
        audio = new Audio("./sounds/tink.wav");
        audio.play();
    }
}

$(document).ready(function() {
    $('.key').bind('webkitTransitionEnd', function()  {
        this.classList.remove("playing");
    });
    $('.key').click(function() {
        playSound(this);
    });
});
