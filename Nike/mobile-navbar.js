class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, header) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
      
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

//inicio propaganda
let titulo = document.getElementById('titulo')
let fundoT = document.querySelector('.fundofototenis')
let btncompra = document.querySelector('.comprar')
let img = document.getElementById('niketurbo');

  const btn1 = document.querySelector('.cor1');
  btn1.addEventListener('mouseenter', () => {
    img.src = 'img/niketurbo.png';
    fundoT.style.backgroundImage = 'radial-gradient(50.02% 44.4% at 50% 50%, #358EA6 47.77%, #61C5DF 100%)'
    titulo.style.backgroundImage = 'linear-gradient(90deg, #2698B6 39.16%, rgba(0, 165, 146, 0.09) 98.62%)'
    fundoT.style.backgroundImage = 'radial-gradient(50.02% 44.4% at 50% 50%, #358EA6 47.77%, #61C5DF 100%)'
    btncompra.style.background = '#2698B6'
  } );

  const btn2 = document.querySelector('.cor2');
  btn2.addEventListener('mouseenter', () => {
    img.src = 'img/niketurbo3.png';
    titulo.style.backgroundImage = 'linear-gradient(90deg, #050505 39.16%, rgba(32, 32, 32, 0.13) 98.62%)'
    fundoT.style.backgroundImage = 'radial-gradient(50.02% 44.4% at 50% 50%, #040404 47.77%, #202020 100%)'
    btncompra.style.background = '#000000'
    titulo.style.transitionDelay = '1s'
  } );

  const btn3 = document.querySelector('.cor3');
  btn3.addEventListener('mouseenter', () => {
    img.src = 'img/niketurbo2.png';
    fundoT.style.backgroundImage = 'radial-gradient(50.02% 44.4% at 50% 50%, #358EA6 47.77%, #61C5DF 100%)'
    titulo.style.backgroundImage = 'linear-gradient(90deg, #3AA199 39.16%, rgba(87, 188, 180, 0) 98.62%)'
    fundoT.style.backgroundImage = 'radial-gradient(50.02% 44.4% at 50% 50%, #389F97 47.77%, #66CAC2 100%)'
    btncompra.style.background = '#29CBA4'
  } );
//fim propaganda
//propaganda mobile
const header = document.querySelector('.header');
const activebtn = document.querySelector('.nikeofertamob');
const activeprop = document.querySelector('.activeprop')
activebtn.addEventListener('click', () =>{ 
  activeprop.classList.toggle('active-propaganda');
  
 
});
//cores propaganda mobile
const imgmobile = document.querySelector('.nikeofertamob');

  const botao1 = document.querySelector('.corofertam1');
  botao1.addEventListener('mouseenter', () => {
    imgmobile.src = 'img/niketurbom.png';
  } );

  const botao2 = document.querySelector('.corofertam2');
  botao2.addEventListener('mouseenter', () => {
    imgmobile.src = 'img/niketurbo3m.png';
  } );

  const botao3 = document.querySelector('.corofertam3');
  botao3.addEventListener('mouseenter', () => {
    imgmobile.src = 'img/niketurbo2m.png';
  } );

  const quant = document.querySelector('.numbercont');
  const quant1 = document.querySelector('.numbercont1');
  const btn = document.querySelector('.comprar');
  let cont = 0;

  btn.addEventListener('click', () =>{
      cont++;
      quant.innerHTML = cont;
      quant.style.display = "flex";
      quant1.innerHTML = cont;
      quant1.style.display = "flex";
  })
  
 function compra(){
  cont++;
  quant.innerHTML = cont;
  quant.style.display = "flex";
  quant1.innerHTML = cont;
  quant1.style.display = "flex";
 }