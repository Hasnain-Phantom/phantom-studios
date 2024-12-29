


var laptop_menu_icon=document.getElementsByClassName("laptop-menu-icon")[0];
laptop_menu_icon.addEventListener("click",function(){
    gsap.to("#click-menu",{
        y:0,
        duration:1
    })
    document.getElementById("nav").style.display="none";
})

var laptop_close_button=document.getElementsByClassName("laptop-close-button")[0];
laptop_close_button.addEventListener("click",function(){
    gsap.to("#click-menu",{
        y:-800,
        duration:1
    })
    document.getElementById("nav").style.display="block";


})


