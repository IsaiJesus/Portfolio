var menu = document.getElementById('menu');
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
var menuResume = document.querySelector('.menu-resume');

menu.addEventListener('click', handleToggle);
link1.addEventListener('click', handleToggle);
link2.addEventListener('click', handleToggle);
link3.addEventListener('click', handleToggle);
link4.addEventListener('click', handleToggle);
menuResume.addEventListener('click', handleToggle);

function handleToggle() {
  document.querySelector(".menu-container").classList.toggle("menu-on");
}