

    document.addEventListener("DOMContentLoaded", function() {
        const divs = document.querySelectorAll('.Calificaciones > div');

        // Función para verificar si un elemento es visible en el viewport
        function esVisible(elemento) {
            const rect = elemento.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom >= 0;
        }

        // Función para aplicar o eliminar la animación según la visibilidad
        function aplicarAnimacion() {
            divs.forEach(div => {
                if (esVisible(div)) {
                    div.classList.add('aparecer');  // Aplica la animación cuando el elemento es visible
                } else {
                    div.classList.remove('aparecer');  // Elimina la clase cuando ya no es visible
                }
            });
        }

        // Ejecutar al hacer scroll y en la carga de la página
        window.addEventListener('scroll', aplicarAnimacion);
        aplicarAnimacion();
    });


