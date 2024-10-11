// Obtener elementos del DOM
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('telefono');
const enviarBtn = document.getElementById('enviar-btn');

// Evento 1: Validación de campos vacíos
enviarBtn.addEventListener('click', function () {
    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (nombre === '' || telefono === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('¡Agenda realizada con éxito!');
    }
});

// Evento 2: Efecto al pasar el mouse sobre el botón
enviarBtn.addEventListener('mouseover', function () {
    enviarBtn.style.backgroundColor = 'red';  // Cambia el color cuando el mouse está sobre el botón
});

enviarBtn.addEventListener('mouseout', function () {
    enviarBtn.style.backgroundColor = '#3f2a20';  // Regresa al color original cuando el mouse sale del botón
});

// Evento 3: Mostrar en consola el contenido del formulario al hacer clic en enviar
enviarBtn.addEventListener('click', function () {
    console.log(`Nombre: ${nombreInput.value}, Teléfono: ${telefonoInput.value}`);
});
