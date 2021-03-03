gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");
gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false,
    scrub: 1 ,
    snap : 1/ (sections.length - 1)
  });
});

var tl = new TimelineMax( );

    tl.from(".loader" , {
        opacity: 0 ,
        y : -30 , 
        duration: 1 ,
        ease: "expo.out"
    })
    .from(".loader-text" , {
        opacity: 0 ,
        scale:0 , 
        duration: 1.5 ,
        ease: "expo.out"
    })
    .to(".slider" , {
        y : -100, 
        duration: 2.5 ,
        ease: "expo.out"
    })
    .to(".loader" , {
        opacity: 0 ,
        y : -100, 
        duration: 3 ,
        ease: "expo.out"
    },"-=2.3")
    .from("nav" , {
        opacity: 0 ,
        y : -30 , 
        duration: 1 ,
        ease: "expo.out"
    })
    .from(".logo" , {
        opacity: 0 ,
        x : -30 , 
        duration: 1  ,
        ease: "expo.out"
    })
    .from(".nav-links li" , {
        opacity: 0 ,
        x : -30 , 
        duration: 1 ,
        stagger: 0.2,
        ease: "expo.out"
    },"-=.6")
    .from(".hero-heading" , {
        opacity: 0 ,
        x : -30 , 
        duration: 1  ,
        ease: "expo.out"
    })
    .from(".hero-smallheading" , {
        opacity: 0 ,
        x : -30 , 
        duration: 1  ,
        ease: "expo.out"
    },"-=0.6")
    .from(".hero-img" , {
        opacity: 0 ,
        x : 30 , 
        duration: 1  ,
        ease: "expo.out"
    },"-=1")
    .from(".scroll-down" , {
        opacity: 0 ,
        y : 30 , 
        duration: 1 ,
        ease: "expo.out" 
    },"-=1")
    .from(".animate-card" , {
        opacity: 0 ,
        scale: 0,
        duration: 1 ,
        ease: "expo.out" 
    },"-=1");

