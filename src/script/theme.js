let themeButton = document.getElementById('theme-button');
let body = document.querySelector('body');
let icon = document.getElementById('icon');

themeButton.addEventListener('click', function () {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  window.localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light'); // if body.classList.contains('dark') is true, then 'dark' is returned, otherwise 'light' is returned

  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});