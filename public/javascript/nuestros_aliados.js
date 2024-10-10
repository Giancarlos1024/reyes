const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const groups = document.querySelectorAll('.image-group');

let currentGroup = 0;
const totalGroups = groups.length;

// Mostrar el grupo actual
function showGroup(index) {
    groups.forEach((group, i) => {
        group.style.display = (i === index) ? 'grid' : 'none'; // Mostrar el grupo seleccionado y ocultar los demás
    });
}

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentGroup = (currentGroup + 1) % totalGroups; // Cambiar al siguiente grupo en forma circular
    showGroup(currentGroup);
});

// Botón "Anterior"
prevButton.addEventListener('click', () => {
    currentGroup = (currentGroup - 1 + totalGroups) % totalGroups; // Cambiar al grupo anterior en forma circular
    showGroup(currentGroup);
});

// Mostrar el primer grupo al cargar la página
showGroup(currentGroup);
