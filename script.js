const hamburguer = document.querySelector('.hamburguer-menu');
const navMenu = document.querySelector('.navlist');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

function initAnimationScroll() {
  const section = document.querySelectorAll('.js-scroll');
  if (section.length) {
    const windowMetade = window.innerHeight * 0.6;
    //função que anima o scroll
    function animaScroll() {
      section.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top; //aqui pega a diotância do topo
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          //verifica se o top é igual menor que 0
          section.classList.add('ativo'); // se for menor que 0 adiciona
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

initAnimationScroll();
