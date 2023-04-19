const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Validar el formulario
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (username === '' || password === '') {
    alert('Por favor ingrese un nombre de usuario y contraseña válidos');
    return;
  }
  
  // Simular un inicio de sesión exitoso
  if (username === 'usuario' && password === 'contraseña') {
    window.location.href = 'index.html';
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});