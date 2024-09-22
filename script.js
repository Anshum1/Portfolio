function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //to open and close menu
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); //add or remove class x button in hamburger menu
    icon.classList.toggle("open");
}