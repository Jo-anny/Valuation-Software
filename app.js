
function displayMobileMenu() {
    var menu = document.getElementById("showThis");
    var cancel = document.getElementById("menu-btn-cancel");
    var show = document.getElementById("menu-btn");

    if (menu.style.display === "none") {
        menu.style.display = "block";
        cancel.style.display = "block";
        show.style.display = "none";
    } else {
        menu.style.display = "none";
        cancel.style.display = "none";
        show.style.display = "block";
    }
}