var openGnb = document.querySelector('.open-gnb');
var elHeader = document.querySelector('#header');
var elOutlayer = document.querySelector('.outlayer');

openGnb.addEventListener('click', openNav)
function openNav() {
    elHeader.classList.toggle('on')
    elOutlayer.classList.toggle('on')
}

window.addEventListener('resize',winResize)
function winResize() {
    var winWidth = this.innerWidth
    if ( winWidth > 800 ) {
        elHeader.classList.remove('on')
    }
}
