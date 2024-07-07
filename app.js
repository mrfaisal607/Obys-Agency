function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var h5Timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    h5Timer.innerHTML = grow++;
                }
                else {
                    h5Timer.innerHTML = grow;
                }
            }, 38);
        }
    })
    tl.to(".line h2", {
        animationName: "nowAnime",
        opacity: 1
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3.45
    })
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        ease: Power4,
        duration: 0.5
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("nav",{
       opacity:0 
    })
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1 ",{
        y:150,
        stagger:0.2
    })
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dest){
        gsap.to("#crsr",{
            left:dest.x,
            top:dest.y  
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");    
}





// git remote add origin https://github.com/mrfaisal607/Obys-Agency.git
// git branch -M main
// git push -u origin main
loadingAnimation();
cursorAnimation();