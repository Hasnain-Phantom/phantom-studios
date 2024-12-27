
gsap.to("#menuitems", {
    y: -100,
    scrollTrigger: {
        trigger: ".navbar",
        start: "center top",
        end: "center 100%",
        scrub: 1
    },
});
gsap.from(".side-menu",{
    x:50,  
    scrollTrigger: {
        trigger: ".navbar",
        start: "center top",
        end: "center 100%",
        scrub: 1
    },
});

gsap.from(".menu-icon",{
    x:500,  
    scrollTrigger: {
        trigger: ".navbar",
        start: "center top",
        end: "center 100%",
        scrub: 1
    }
});
var t1=gsap.timeline();
t1
.from("#phan", {
    duration: 2,
    opacity:-3,
    y:50
})
.from("#studio", {
    duration: 1,
    opacity:-3,
    y:40

});
var t2=gsap.timeline();
t2
.from("#list1", {
    opacity:0,
    x:400,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: true
        
    },
})
.from("#list2", {
    opacity:0,
    x:600,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: true
        
    },
})
.from("#list3", {
    opacity:0,
    x:800,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: true
        
    },
})
.from("#list4", {
    opacity:0,
    x:1000,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: true
        
    },
})
.from("#list5", {
    opacity:0,
    x:1200,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: true
        
    },
})


var list1= document.querySelector("#list1");
var list2= document.querySelector("#list2");
var list3= document.querySelector("#list3");
var list4= document.querySelector("#list4");
var list5= document.querySelector("#list5");
var cursor= document.querySelector("#cursor");
//for First exp name

list1.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
list1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
    cursor.style.backgroundImage = "url('media/img2.jpg')";
})
list1.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
gsap.to(cursor,{
    scale:0
})
cursor.style.backgroundImage = "url('')";

})
//

list2.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"red",
        ease:"back.out"
    })
})
list2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
    // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
list2.addEventListener("mouseleave",function(){
    cursor.innerHTML="2"
gsap.to(cursor,{
    scale:0
})
})
//

list3.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
list3.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
    // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
list3.addEventListener("mouseleave",function(){
    cursor.innerHTML="3"
gsap.to(cursor,{
    scale:0
})

})
//

list4.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
list4.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
    // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
list4.addEventListener("mouseleave",function(){
    cursor.innerHTML="4"
gsap.to(cursor,{
    scale:0
})

})//


list5.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
list5.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
    // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
list5.addEventListener("mouseleave",function(){
    cursor.innerHTML="5"
gsap.to(cursor,{
    scale:0
})

})//
gsap.from("#select", {
    opacity:0,
    x:1200,
    scrollTrigger: {
        trigger: "#select_work",
        start: "top 70%",
      end: "center 0%",
      markers:false,
      scrub: true
        
    },
})
gsap.from("#work", {
    opacity:0,
    x:-1200,
    scrollTrigger: {
        trigger: "#select_work",
        start: "top 70%",
      end: "center 0%",
      markers:false,
      scrub: true
        
    },
})

