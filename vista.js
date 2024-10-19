// Arreglo de imágenes
const images = [
    "casa1.jpeg",
    "casa2.jpeg",
    "casa3.jpeg"
  ];
  
  // Índice de la imagen actual
  let currentIndex = 0;
  
  // Cambiar la imagen cada 5 segundos automáticamente
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carouselImage").src = images[currentIndex];
  }, 5000);
  
  // Cambiar la imagen al hacer clic en los botones
  function changeImage(index) {
    currentIndex = index;
    document.getElementById("carouselImage").src = images[currentIndex];
  }
  
  // Cambiar el color del botón cuando el cursor está encima
  function hoverButton(button) {
    button.style.backgroundColor = '#ff7f7f';
  }
  
  function unhoverButton(button) {
    button.style.backgroundColor = '#555';
  }
  