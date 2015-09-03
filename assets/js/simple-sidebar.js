$(".menu-toggle,#hamburger-icon").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});