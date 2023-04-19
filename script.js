const hamburguer = document.querySelector(".hamburguer-menu");
const navMenu = document.querySelector(".navlist");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})