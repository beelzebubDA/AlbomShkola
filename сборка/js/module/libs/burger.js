// const hamburger = document.querySelector(".header__hamburger");
// const navMenu = document.querySelector(".header__lists");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// Jquery version

$(".header__hamburger").on("click", function (e) {
    e.preventDefault();
    $(".header__hamburger").toggleClass("active");
    $(".header__lists").toggleClass("active");
    $(".header__list").on("click", function () {
        $(".header__lists").removeClass("active");
        $(".header__hamburger").removeClass("active");
        $(".header_hamburger-menu").removeClass("opened");
    });
});
