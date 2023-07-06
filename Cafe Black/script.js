const stickyNavbar = document.querySelector("header.sticky-navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY > 36) {
    stickyNavbar.classList.add("scrolling");
  } else {
    stickyNavbar.classList.remove("scrolling");
  }
});
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};
window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };
  

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
 nextPercentage = Math.min(nextPercentage, 0);
 nextPercentage = Math.max(nextPercentage, -100);
 



    
  track.dataset.percentage = nextPercentage;
 track.animate({
    transform:`translate(${nextPercentage}%, -50%)`},
    {duration:1200, fill:"forwards"});
 

for(const image of track.getElementsByClassName("image")){
   image.animate({
    objectPosition:`${100 + nextPercentage}% center`}, {duration:1200, fill: "forwards"});
    
};

}

