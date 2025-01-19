var barMenu = document.getElementById('bar-menu');
var linkButtons = document.querySelectorAll('.link-button');

barMenu.addEventListener('click', handleToggle);
linkButtons.forEach(function(button) {
  button.addEventListener('click', handleToggle);
});

function handleToggle() {
  document.querySelector(".nav-mobile-box").classList.toggle("nav-mobile-on");
}