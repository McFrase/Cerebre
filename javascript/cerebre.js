var s = skrollr.init({
    smoothScrolling: true
});


window.onload = function(){
    const navbar = document.querySelector('.navbar');
    const navDisplay = document.querySelector('.navDisplay');
    const slideOut = document.querySelector('.sliders')
    const scroll = document.querySelector('.scroll')
    const navDescription = document.querySelector('.navDescription')
    
    navbar.addEventListener("click",  function(){
        this.classList.toggle("active");

        if (this.classList.contains("active")){
            gsap.to(".navDisplay", {
                duration: 1,
                display: "block",
                ease: "bounce"
            });
            gsap.to(".sliders", {
                delay: .1,
                duration: .4,
                width: "100%",
                left: "initial",
                ease: "ease.in"
            });
            gsap.to('body', {
                overflow: "hidden",
                duration: 0
            });
            gsap.to('.scroll', {
                background: "none",
                boxShadow: "none",
                duration: 0
            });
            gsap.to('.navDescription', {
                scale: 1,
                opacity: 1,
                delay: .4,
                duration: 1
            })
        }else{
            gsap.to(".sliders", {
                delay: .8,
                duration: .9,
                width: "0",
                left: "100%",
                ease: "ease.in"
            });
            gsap.to('body', {
                overflow: "auto",
                duration: 0
            });
            gsap.to('.navDescription', {
                scale: 0,
                opacity: 0,
                delay: .2,
                duration: .5
            })
        }
    })
}

gsap.to('.slider', {
    duration: 2,
    stagger: .1,
    delay: 4,
    width: 0,
    left: "100%"
});

gsap.to('h1', {
    duration: 1,
    slice: 1,
});

let tl = gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});
tl.to("#create", {
    y: '0%',
    duration: 1.7,
    stagger: .2,
    ease: "bounce"
});

tl.to(".dwText", {
    y: '100%',
    duration: 3,
    delay: 1
});


gsap.registerPlugin(ScrollTrigger);

gsap.from('.textHeader', {
    scrollTrigger: {
        trigger: ".textHeader",
        toggleActions: "restart restart restart restart"
    },
    y: 50,
    delay: .3,
    duration: 2,
    scrub: true,
})

var trl = gsap.timeline({repeat:-1});
trl.to(".aboutImg", 10, {
    backgroundPosition: "-600px 0px",
    ease: Linear.easeNone
});

gsap.from('.aInnerTexts', {
    scrollTrigger: {
        trigger: "#about",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    delay: .3,
    duration: 2,
    scrub: true,
    ease: "back.out(1.7)"
})

gsap.from('#biavd, #ds, #ecs, #cm', {
    scrollTrigger: {
        trigger: "#whatWeDo",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    delay: .3,
    duration: 2,
    scrub: true,
    ease: "back.out(1.7)"
})

gsap.from('.teamtext', {
    scrollTrigger: {
        trigger: ".teamtext",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    duration: 1,
    scrub: true,
    ease: "back.out(1.7)"
})

gsap.from('.glide', {
    scrollTrigger: {
        trigger: ".teamtext",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    duration: 1,
    scrub: true,
    ease: "back.out(1.7)"
})

gsap.from('.clientText', {
    scrollTrigger: {
        trigger: ".clientText",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    duration: 1,
    scrub: true,
    ease: "back.out(1.7)"
})

gsap.from('.img', {
    scrollTrigger: {
        trigger: ".img",
        toggleActions: "restart restart restart restart"
    },
    y: 100,
    duration: 1,
    scrub: true,
    ease: "bounce"
})

gsap.from('.distort', {
   x: 50,
   delay: 14,
    duration: 1,
})

