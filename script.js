function clickMe() {
  swal({
    title: "Coming Soon!",
    text: "You clicked the button!",
    icon: "info",
    button: "Ok",
  });
}
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("active");
  navlist.classList.toggle("active");
}
function changeBg() {
  var nav = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if (scrollValue < 50) {
    navbar.classList.remove('navColor');
  } else {
    navbar.classList.add('navColor');
  }
}
window.addEventListener('scroll', changeBg);
/*------- Darkmode toggle ------ */
const body = document.querySelector("body")
  toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.add("dark");
  toggle.classList.add("active");
}
console.log(getMode)
toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
if(!body.classList.contains("dark")){
  return localStorage.setItem("mode", "light");
    localStorage.setItem("mode", "dark");
}
})
toggle.addEventListener("click", () => toggle.classList.toggle("active"));

