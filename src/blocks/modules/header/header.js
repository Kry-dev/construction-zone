import $ from "jquery";
window.onscroll = function () {
    myFunction();
};

// Get the navbar
const navbar = document.getElementById("header");
// Get navbar height
const navHeight = navbar.offsetHeight;
// Get the offset position of the navbar
const shadow = navbar.offsetTop + navHeight;
// Add the shadow class to the navbar when you reach its scroll position. Remove "shadow" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= shadow) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
}


$("#nav-toggle").click(function(){
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("d-flex");
});
