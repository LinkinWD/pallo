
const pallo = document.querySelector('.pallo')

const liikutapalloa = function(e) {
    if(e.keycode ==37) {
        console.log('vasemalle')
    }
    if(e.keycode ==38) {
        console.log('ylös')
    }
    if(e.keycode ==39) {
        console.log('oikealle')
    }
    if(e.keycode ==40) {
        console.log('alas')
    }
    console.log(e.keyCode)
}

document.addEventListener('keydown', liikutapalloa)