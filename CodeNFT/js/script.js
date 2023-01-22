
 //animações de entrada para texto
window.sr = ScrollReveal({reset : true});
sr.reveal('.anima-c-b', {origin: 'bottom', distance: '-50px', duration: 1200, viewFactor: 3.0})
sr.reveal('.anima-left', { origin: 'left', distance:'100px', delay: 400, viewFactor: 3.0,})
sr.reveal('.anima-left-1', { origin: 'left', distance:'100px', delay: 550, viewFactor: 3.0,})
sr.reveal('.anima-left-2', { origin: 'left', distance:'100px', delay: 700, viewFactor: 3.0,})
sr.reveal('.anima-left-3', { origin: 'left', distance:'100px', delay: 800, viewFactor: 3.0,})

        const edit = document.querySelector('.visivel');
        const icon = document.querySelector('.botaoP1');
        icon.addEventListener('click', () => {
        edit.classList.toggle('ver')
        } );
        const icon2 = document.querySelector('.botaoP2');
        icon2.addEventListener('click', () => {
        edit.classList.toggle('ver2')
        } );
        const icon3 = document.querySelector('.botaoP3');
        icon3.addEventListener('click', () => {
        edit.classList.toggle('ver3')
        } );
        const icon4 = document.querySelector('.botaoP4');
        icon4.addEventListener('click', () => {
        edit.classList.toggle('ver4')
        } );
