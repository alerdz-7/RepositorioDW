// Seleccionar todos los botones con la clase "cta-button"
document.querySelectorAll('.cta-button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la recarga de la página
        alert('¡Bienvenido! Conoce más sobre nuestras residencias.');
        window.location.href = 'agenda.html'; 
    });
});
