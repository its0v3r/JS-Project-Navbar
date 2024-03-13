// elements
const nav_toggle_btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// events
window.addEventListener("resize", () => {
    adjustNavbar();
});

nav_toggle_btn.addEventListener("click", () => {
    toggleNavbar();
});

// toggle navbar visibility
const toggleNavbar = () => {
    if (links.clientHeight == 0) {
        links.style.height = links.scrollHeight + "px";
        links.classList.add("show");
    } else {
        links.style.height = "0px";
        links.classList.remove("show");
    }
};

// check if the navbar needs to be show or hidden when resizing
const adjustNavbar = () => {
    if (window.innerWidth >= 800) {
        links.style.height = "auto";
        links.classList.remove("show");
    } else if (window.innerWidth < 800) {
        if (!links.classList.contains("show")) {
            links.style.height = "0px";
        }
    }
};
