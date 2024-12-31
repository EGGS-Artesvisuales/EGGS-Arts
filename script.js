// Selección de elementos
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Verificar si los elementos existen antes de agregar eventos
if (navToggle && navMenu) {
    // Alternar el menú hamburguesa
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Activa o desactiva el menú
        navToggle.classList.toggle('active'); // Cambia el estado del botón hamburguesa (opcional)
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active'); // Cierra el menú
            navToggle.classList.remove('active'); // Restablece el estado del botón hamburguesa
        });
    });
}

// Depuración en consola
console.log("Script de navegación cargado correctamente");
