const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('.bx');

menuIcon.addEventListener('click', function() {
  nav.classList.toggle('show');
});


document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
      nav.classList.remove('active');
    }
  });