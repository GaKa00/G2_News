const menu = <HTMLUListElement>document.querySelector(".nav-list");
const menuItems = document.querySelectorAll<HTMLLIElement>(".nav-item");
const hamburger = <HTMLButtonElement>document.querySelector(".hamburger");
const closeIcon = <HTMLElement>document.querySelector("#close-btn");
const menuIcon = <HTMLElement>document.querySelector("#menu-btn");

function toggleMenu() : void {
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
    function (menuItems : HTMLLIElement) : void {
        menuItems.addEventListener("click", toggleMenu);
    }
)

