// Evento para el botón de "VER MÁS"
document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // Previene que se recargue la página
    alert('¡Bienvenido! Conoce más sobre nuestras residencias.');
    window.location.href = 'index2.html';
});

