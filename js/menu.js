var menu = document.getElementById('menu');

menu.addEventListener('click', handleToggle);

function handleToggle() {
  document.querySelector(".menu-container").classList.toggle("menu-off");
}