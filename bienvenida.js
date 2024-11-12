document.getElementById('login-promotor').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple para promotor
    if (username === 'promotor' && password === '1234') {
        document.body.style.backgroundColor = 'green';
        alert('Bienvenido empleado');
        window.location.href = 'promotor.html'; // Redirigir a promotor.html
    } else {
        document.getElementById('error-message').innerText = 'Usuario o contraseña incorrectos para promotor';
    }
});
