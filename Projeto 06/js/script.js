const cookieBox = document.querySelector(".cookies"),
buttons = document.querySelectorAll(".button");

const executeCodes = () => {
//if cookie contains codinglab it will be returned and below of this code will not run
if (document.cookie.includes("codinglab")) return;
cookieBox.classList.add("show");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cookieBox.classList.remove("show");

    //if button has acceptBtn id
    if (button.id == "aceitaBtn") {
      //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
      document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
    }
  });
});
};

window.addEventListener("load", executeCodes);

 //animações de entrada para texto
window.sr = ScrollReveal({reset : true});
sr.reveal('.anima-c-b', {origin: 'bottom', distance: '-50px', duration: 1200, viewFactor: 3.0})
sr.reveal('.anima-left', { origin: 'left', distance:'100px', delay: 400, viewFactor: 3.0,})
sr.reveal('.anima-left-1', { origin: 'left', distance:'100px', delay: 550, viewFactor: 3.0,})
sr.reveal('.anima-left-2', { origin: 'left', distance:'100px', delay: 700, viewFactor: 3.0,})
sr.reveal('.anima-left-3', { origin: 'left', distance:'100px', delay: 800, viewFactor: 3.0,})

//DarkMode
const edit = document.querySelector('.editdark');
const icon = document.querySelector('.darkMode');
icon.addEventListener('click', () => {
   edit.classList.toggle('dark')
} );

  
