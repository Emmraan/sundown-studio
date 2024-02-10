
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Here is code for DOM 
const pause = document.querySelector(".ri-pause-line");
const vplay = document.querySelector(".ri-play-fill");
const vlc = document.querySelector("#page2");
const play = document.querySelector(".play");
const vdo = document.querySelector(".vdo");

vlc.addEventListener("mouseenter", function () {
    gsap.to(play, {
        scale: 1,
        opacity: 1,
    });
});

vlc.addEventListener("mouseleave", function () {
    gsap.to(play, {
        scale: 0,
        opacity: 0
    });
});

document.addEventListener("mousemove", function (event) {
    gsap.to(play, {
      left: event.clientX - 45,
      top: event.clientY - -0,
    });
});


play.addEventListener("click", function() {
    if (vdo.paused) {
      vdo.play();
    } else {
      vdo.pause();
    }
  });
vdo.addEventListener("click", function() {
    if (vdo.paused) {
      vdo.play();
    } else {
      vdo.pause();
    }
  });




play.addEventListener("click", function () {
    if (vplay.style.transform === "scale(1)") {
      vplay.style.transform = "scale(0)";
      pause.style.transform = "scale(1)";
    } else {
      vplay.style.transform = "scale(1)";
      pause.style.transform = "scale(0)";
    }
    vplay.style.transition = "transform 0.5s ease-in-out";
    pause.style.transition = "transform 0.5s ease-in-out";
  });
vdo.addEventListener("click", function () {
    if (vplay.style.transform === "scale(1)") {
      vplay.style.transform = "scale(0)";
      pause.style.transform = "scale(1)";
    } else {
      vplay.style.transform = "scale(1)";
      pause.style.transform = "scale(0)";
    }
    vplay.style.transition = "transform 0.5s ease-in-out";
    pause.style.transition = "transform 0.5s ease-in-out";
  });






  const sliderBox = document.querySelector(".swiper")
  const swipeArrow = document.querySelector(".swipe-arrow")

  sliderBox.addEventListener("mouseenter",function(){
    gsap.to(swipeArrow,{
      opacity:1,
      scale:1
    });
  });
  sliderBox.addEventListener("mouseleave",function(){
    gsap.to(swipeArrow,{
      opacity:0,
      scale:0
    });
  });

  document.addEventListener("mousemove", function (event) {
    gsap.to(swipeArrow, {
        left: event.clientX - 45,
        top: event.clientY - 235,
    });
});

  
  // Here is code for shery js 

  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: .5,
  });

  // here is code for swiper js 
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });