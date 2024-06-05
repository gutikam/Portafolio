const cube = document.getElementById('information');
let timer;

cube.addEventListener('mouseover', () => {
    cube.style.transform = 'translateX(800px)'; // Mover el cubo hacia la derecha
    clearTimeout(timer); // Limpiar el temporizador existente, si hay alguno
});

cube.addEventListener('mouseout', () => {
    timer = setTimeout(() => {
        cube.style.transform = 'translateX(0px)'; // Mover el cubo hacia su posición original
    }, 900); // Retrasar el evento mouseout por 500 milisegundos
});
