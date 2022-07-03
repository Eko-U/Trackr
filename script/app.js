const sideNav = document.querySelector('.header__details-nav--menu');
const popUpNav = document.querySelector('.logo__appear');
sideNav.addEventListener('click', function() {
  popUpNav.classList.toggle('hidden');
})