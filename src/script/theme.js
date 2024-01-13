let themeButton = document.getElementById('theme-button');
let body = document.querySelector('body');
let icon = document.getElementById('icon');

themeButton.addEventListener('click', function () {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});