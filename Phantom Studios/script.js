gsap.from("#phantom-logo",{
    fontSize:"230px",
    y:200,
    scrollTrigger:{
        trigger:"#logo",
        scroll:"body",
        start:"top 0",
        end:"top 100%",
        scrub:1
    }
  })
  
  gsap.from("#menu",{
   x:-300,
  
    scrollTrigger:{
        trigger:"#logo",
        scroll:"body",
        start:"top 0",
        end:"top 100%",
        scrub:1
    }
  })
  