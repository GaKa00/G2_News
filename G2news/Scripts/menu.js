const menu = document.querySelector(".nav-list");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector("#close-btn");
const menuIcon = document.querySelector("#menu-btn");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
};

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItems) {
        menuItems.addEventListener("click", toggleMenu);
    }
)

export default menu