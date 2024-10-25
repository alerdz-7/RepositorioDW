document.getElementById('login-promotor').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validación simple para promotor
    if (username === 'promotor' && password === '1234') {
      document.body.style.backgroundColor = 'green';
      alert('Bienvenido empleado');
    } else {
      document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos para promotor';
    }
  });
  
  document.getElementById('login-cliente').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validación simple para cliente
    if (username === 'cliente' && password === '1234') {
      document.body.style.backgroundColor = 'red'; // Cambia el fondo a rojo si el login es correcto
      alert('Bienvenido cliente');
    } else {
      document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos para cliente';
    }
  });
  