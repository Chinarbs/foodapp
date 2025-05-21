// Select the elements
const menuToggle = document.querySelector('.menu-toggle'); // menu button
const mobileMenu = document.querySelector('.sidebar');     // the sidebar or nav
const menuLinks = document.querySelectorAll('.sidebar a'); // nav links inside the sidebar

// Toggle menu on mobile when menu-toggle is clicked
menuToggle.addEventListener("click", function() {
    menuToggle.classList.toggle("is-active");
    mobileMenu.classList.toggle("active");
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener("click", function() {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove("is-active");
            mobileMenu.classList.remove("active");
        }
    });
});

// Scrolling arrows
var step = 100;

$(".back").on("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"-=" + step + "px"
    });
});

$(".forward").on("click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"+=" + step + "px"
    });
});
