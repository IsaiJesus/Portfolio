var form = document.querySelector('.form-box');
var popUp = document.querySelector('.pop-up-off');
var popUpButton = document.getElementById('pop-up-button');

const submitData = (e) => {
  e.preventDefault();
  const name = document.getElementById('name-form').value;
  const email = document.getElementById('email-form').value;
  const message = document.getElementById('message-form').value;
  window.location.href = 
  `mailto:isaijesus02@gmail.com?subject=Portfolio&body=Nombre%3A%20${name}%20%0ACorreo%3A%20${email}%0AMensaje%3A%20${message}`;
  form.reset();
  popUp.classList.remove('pop-up-off');
  popUp.classList.add('pop-up');
};

popUpButton.addEventListener('click', function(){
  popUp.classList.add('pop-up-off');
  popUp.classList.remove('pop-up');
});

form.addEventListener("submit", submitData);
