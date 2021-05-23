AOS.init();


const menuResponsive= document.querySelector(".menu-responsive");
const btnMenu = document.querySelector(".btn_menu");
const menuHamburguesa = document.querySelector("#hamburguesa");

const toggleMenu = () =>{
    menuResponsive.classList.toggle("traslate");
    menuResponsive.style.transition = "transform .5s ease-in-out";
}

btnMenu.addEventListener('click', function(e){
    toggleMenu();
    
})

menuResponsive.addEventListener('click', function(e){
    toggleMenu();  
   
})

