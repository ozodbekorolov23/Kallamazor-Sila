let elButton = document.querySelector(".btn");
let elButtonMenu = elButton.querySelector(".menu");
let elButtonExit = elButton.querySelector(".exit");
let Nav = document.querySelector(".nav");

elButton.addEventListener("click", function(evt) {
    evt.preventDefault();

    elButtonMenu.classList.toggle("menu__exit")
    elButtonExit.classList.toggle("exit__menu")
    Nav.classList.toggle("nav__blok")
})
