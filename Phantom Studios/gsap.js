
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
      scrub: 2
        
    },
})
.from("#list2", {
    opacity:0,
    x:600,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#list3", {
    opacity:0,
    x:800,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#list4", {
    opacity:0,
    x:1000,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#list5", {
    opacity:0,
    x:1200,
    scrollTrigger: {
        trigger: "#exp_list",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})



gsap.from("#select", {
    opacity:0,
    x:1200,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#select_work",
        start: "top 70%",
      end: "center 0%",
      markers:false,
      scrub: 1
      
        
    },
})
gsap.from("#work", {
    opacity:0,
    x:-1200,
ease: "power1.out",

    scrollTrigger: {
        trigger: "#select_work",
        start: "top 70%",
      end: "center 0%",
      markers:false,
      scrub: 1
        
    },
})

gsap.from("#video", {
    scale: 0,
    ease: "power1.out", 
    scrollTrigger: {
        trigger: "#video_parent",
        start: "top 70%",
        end: "center 0%",
        markers: false,
        scrub: 3, 
    },
});

///Mouse hover image 
var cursor= document.querySelector("#cursor");
var main1= document.querySelector("#main1");
var overlays1= document.querySelector(".overlays1");

var main2= document.querySelector("#main2");
var overlays2= document.querySelector(".overlays2");

var main3= document.querySelector("#main3");
var overlays3= document.querySelector(".overlays3");

var main4= document.querySelector("#main4");
var overlays4= document.querySelector(".overlays4");

var main5= document.querySelector("#main5");
var overlays5= document.querySelector(".overlays5");

main1.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"yellow",
        ease:"back.out"
    })
})
overlays1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
      // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
overlays1.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:0
    })
})


main2.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"red",
        ease:"back.out"
    })
})
overlays2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
      // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
overlays2.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:0
    })
})


main3.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"yellow",
        ease:"back.out"
    })
})
overlays3.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
      // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
overlays3.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:0
    })
})


main4.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"red",
        ease:"back.out"
    })
})
overlays4.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
      // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
overlays4.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:0
    })
})


main5.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        backgroundColor:"yellow",
        ease:"back.out"
    })
})
overlays5.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:5
    })
      // cursor.style.backgroundImage = "url('media/img2.jpg')";
})
overlays5.addEventListener("mouseleave",function(){
        cursor.innerHTML=""
    gsap.to(cursor,{
        scale:0
    })
})
gsap.to(".serv",{
    y:-400,
    stagger:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#services",
        scoller:"body",
        start:"top 0%",
        end:"top -100%",
        ease: "power1.out",
        scrub:1,pin:true
    }
})




// Adding 3D effect to all images while preserving existing properties
const images = ["s1", "s2", "s3", "s4"];

images.forEach((id) => {
  const img = document.getElementById(id);
  const h1_11 = document.getElementById(`${id}_h11`);
//   const h1_12 = document.getElementById(`${id}_h12`);

  img.addEventListener("mousemove", (event) => {
    const rect = img.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5; // Normalized X
    const y = (event.clientY - rect.top) / rect.height - 0.5; // Normalized Y

    // Apply 3D transformations
    gsap.to(img, {
      scale: 1.3,
      rotationX: -y * 40, // Increased tilt based on Y
      rotationY: x * 40,  // Increased tilt based on X
      transformPerspective: 1000,
      ease: "power1.out",
    });

  });

  img.addEventListener("mouseleave", () => {
    // Reset transformations
    gsap.to(img, {
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 1000,
      ease: "power1.out",
    });

  });
});


gsap.to("#comapny_child",{
    x:-200,
    scrollTrigger:{
        trigger:"#companies",
        scoller:"body",
        start:"top center",
        end:"center center",
        markers:true,
        scrub:1,
        markers:false,

        // pin:true
    }
})

//////////////////////
var t4=gsap.timeline();
t4

.from("#one", {
    opacity:0,
    x:400,
    scrollTrigger: {
        trigger: "#exp_list2",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#two", {
    opacity:0,
    x:600,
    scrollTrigger: {
        trigger: "#exp_list2",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#three", {
    opacity:0,
    x:800,
    scrollTrigger: {
        trigger: "#exp_list2",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#four", {
    opacity:0,
    x:1000,
    scrollTrigger: {
        trigger: "#exp_list2",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})
.from("#five", {
    opacity:0,
    x:1200,
    scrollTrigger: {
        trigger: "#exp_list2",
        start: "top 70%",
      end: "center center",
      scrub: 2
        
    },
})



gsap.from("#main_work-heading",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#main_works2",
        start:"top 70%",
        end:"center center",
        markers:true,
        scrub:1,
        markers:false,
    }
})
gsap.from("#s_para2",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#parent_spara2",
        start:"top 70%",
        end:"center center",
        markers:true,
        scrub:1,
        markers:false,
    }
})


gsap.from("#main_work1-heading",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#main_works",
        start:"top 70%",
        end:"center center",
        markers:true,
        scrub:1,
        markers:false,
    }
})
gsap.from("#s_para",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#parent_spara",
        start:"top 70%",
        end:"center center",
        markers:true,
        scrub:1
    }
})

gsap.to("#count1", { innerText: 15, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#achmt_righ_top",
        start:"top 70%",
        end:"center center",
        // markers:true,
        scrub:1
    }
  });
gsap.to("#count2", { innerText: 4, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#achmt_righ_top",
        start:"top 70%",
        end:"center center",
        // markers:true,
        scrub:1
    }
  });
gsap.to("#count3", { innerText: 30, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#achmt_righ_top",
        start:"top 70%",
        end:"center center",
        // markers:true,
        scrub:1
    }
  });


  
gsap.to("#count11", { innerText: 21, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#RAISED",
        start:"-200% 200%",        end:"center center",

        markers:true,
        scrub:1
    }
  });
gsap.to("#count22", { innerText: 300, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#RATE",
        start:"-200% 200%",        end:"center center",

        markers:true,
        scrub:1
    }
  });
gsap.to("#count33", { innerText: 10, duration: 3, 
    snap: {
        innerText:1
    },
    scrollTrigger:{
        trigger:"#AWARDS",
        start:"-200% 200%",
        end:"center center",
        markers:true,
        scrub:1
    }
  });



gsap.from("#story_img", {
    opacity:0,
    x:800,
    scrollTrigger: {
        trigger:"#story_right",
        scoller:"body",
        start:"top center",
        end:"center center",
        markers:true,
        scrub:1,
        markers:false,
        
    },
})


var t4=gsap.timeline();
t4

.from("#story_list1", {
    opacity:0,
    x:400,
    scrollTrigger: {
        trigger: "#story_right1",
        start: "top 70%",
      end: "top center",
      markers:true,
      scrub: 2
        
    },
})
.from("#story_list2", {
    opacity:0,
    x:600,
    scrollTrigger: {
        trigger: "#story_right1",
        start: "top 70%",
      end: "top center",
      scrub: 2
        
    },
})
.from("#story_list3", {
    opacity:0,
    x:800,
    scrollTrigger: {
        trigger: "#story_right1",
        start: "top 70%",
      end: "top center",
      scrub: 2
        
    },
})

GSDevTools.create();



gsap.from("#about_us",{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:"#aboutus_right",
        start:"top 70%",
        end:"center center",
        markers:true,
        scrub:1
      
    }
})
