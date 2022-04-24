for (let i=0; i < document.querySelectorAll('.drum').length; i ++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        let innerButton = this.innerHTML
        makeSound(innerButton);
        flash(innerButton)
    });

};

document.addEventListener('keydown', function(event){
    makeSound(event.key)
    flash(event.key)

})



const makeSound = (key) => {
    switch (key) {
        case 'f':
            let kick = new Audio("sounds/kick 01.wav");
            kick.play();           
        break;
        case 'j':
            let snare = new Audio("sounds/Snare.wav");
            snare.play();           
        break;
        case 'b':
            let hihat = new Audio("sounds/Hihat.wav");
            hihat.play();           
        break;
        case 'y':
            let crash = new Audio("sounds/Crash.wav ");
            crash.play();           
        break;
        case 'v':
            let shakers = new Audio("sounds/Shaker (11).wav ");
            shakers.play();           
        break;

        default: console.log(key)
            break;
    }
    
}

function flash(letter) {
    let activeButton = document.querySelector('.' + letter)
    activeButton.classList.add('pressed')

    setTimeout(function() {
        activeButton.classList.remove('pressed')
    }, 200)


    
}

