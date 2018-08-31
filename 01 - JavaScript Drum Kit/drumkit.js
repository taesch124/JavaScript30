let drumkitButtons = document.getElementsByClassName('key');
let audioSources = document.getElementsByTagName('audio');

let playSound = (keyCode) => {
    let source = findElementFromKey(audioSources, keyCode);
    if (!source) return;
    addPlayingEffect(keyCode);
    let audio = new Audio(source.src);
    audio.play();
}

let addPlayingEffect = (keyCode) => {
    let btn = findElementFromKey(drumkitButtons, keyCode);
    btn.classList.add('playing');
}

let findElementFromKey = (elements, keyCode) => {
    for (let i = 0; i < elements.length; i++) {
        if(elements[i].dataset.key == keyCode) {
            return elements[i];
        }
    }
    return null;
}

$(document).ready(function() {
    $('.key').bind('webkitTransitionEnd', function()  {
        this.classList.remove("playing");
    });

    $('.key').click(function() {
        playSound(this.dataset.key);
    });

    document.addEventListener('keydown', function(event) {
        playSound(event.keyCode);
    });
});
