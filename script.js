const scroll = new LocomotiveScroll({
  el: document.querySelector('#main-container'),
  smooth: true
});

document.addEventListener("mousemove",function
(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
  })
})
