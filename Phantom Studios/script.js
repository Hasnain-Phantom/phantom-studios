
var laptop_menu_icon=document.getElementsByClassName("laptop-menu-icon")[0];
laptop_menu_icon.addEventListener("click",function(){
    gsap.from("#click-menu",{
        opacity:0,
        y:-1000,
        duration:1
    })
    document.getElementById("click-menu").style.display="block";
})