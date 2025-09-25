const navbar = document.querySelector(".navbar");
const herocontentSection= document.querySelector(".hero-content")||document.querySelector(".header-content"); 

window.addEventListener("scroll" ,e=>{
const navbarHeight = navbar.offsetHeight;

    if(window.scrollY+navbarHeight >= herocontentSection.offsetTop){
        navbar.classList.add("navbar-backColor");
    }
    else{
        navbar.classList.remove("navbar-backColor");
    }
});