const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// toggle nav
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

// show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

// hide the modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

// hide modal on outside click
window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.classList.remove('show-modal')
    } else {
        return false;  
    }
})