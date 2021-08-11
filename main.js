
const pallo = document.querySelector('.pallo')
let x = 300
let y = 300

pallo.style.left = x+"px"
pallo.style.top = y+"px"

const liikutapalloa = function(e) {
    if(e.keyCode ==37) {
        x = x -3
        pallo.style.left = x+"px"
    }
    else if(e.keyCode ==38) {
        y = y -3
        pallo.style.top = y+"px"
    }
    else if(e.keyCode ==39) {
        x = x + 3
        pallo.style.left = x+"px"
    }
    else if(e.keyCode ==40) {
        y = y + 3
        pallo.style.top = y+"px"
    }
    
}

document.addEventListener('keydown', liikutapalloa)