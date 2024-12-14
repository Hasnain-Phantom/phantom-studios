document.querySelector("#main").addEventListener("mousemove",function(dets){
    gsap.to(document.querySelector("#cursor"),{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
document.querySelector("#main").addEventListener("mousemove",function(dets){
    gsap.to(document.querySelector("#cursor"),{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out"
    })
})
gsap.to("#Phantom h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#Phantom",
        scoller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,pin:true
    }
})