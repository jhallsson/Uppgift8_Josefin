window.onscroll = function() {myFunction()};
// function myFunction(){
var navbar = document.getElementById("sticky-nav");
var sticky = navbar.offsetTop;
var logo = document.getElementById("nav-logo");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    logo.style.opacity = "1";
    logo.style.visibility = "visible";
  } else {
    navbar.classList.remove("sticky");

    // logo.style.visibility = "hidden";
    logo.style.opacity = "0";
  }
}
// }
