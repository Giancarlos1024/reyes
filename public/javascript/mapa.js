// Inicializar el mapa
var map = L.map('map').setView([-9.19, -75.0152], 6); // Coordenadas centradas en Perú

// Añadir capa base de mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Datos de las oficinas
var oficinas = [
    {
        "ciudad": "Piura",
        "direccion": "Calle Junin Nro. 1011",
        "telefono1": "+51 973 557825",
        "telefono2": "+51 981 296 934",
        "coordenadas": [-5.1945, -80.6328]
    },
    {
        "ciudad": "Cusco",
        "direccion": "Jr. Retiro 426, Dpto. 402, Wanchaq",
        "telefono1": "+51 947 413 560",
        "coordenadas": [-13.532, -71.9675]
    },
    {
        "ciudad": "Chiclayo",
        "direccion": "Calle Colón No. 686, Ofi. 402 (Edificio Atlas)",
        "telefono1": "+51 074 270516",
        "telefono2": "+51 956 113 225",
        "coordenadas": [-6.7714, -79.8409]
    },
    {
        "ciudad": "Lima",
        "direccion": "Av. Jose Larco N°743, Ofi. 401, Miraflores",
        "telefono1": "+51 981 320 285",
        "telefono2": "+51 981 012 291",
        "telefono3": "+51 981 012 294",
        "coordenadas": [-12.0464, -77.0428]
    },
    {
        "ciudad": "Ica",
        "direccion": "Residencial San Martín G-101",
        "telefono1": "+51 056 231151",
        "telefono2": "+51 923 217 317",
        "coordenadas": [-14.0678, -75.7286]
    },
    {
        "ciudad": "Pisco",
        "direccion": "Mariscal Castilla Nro. 230",
        "telefono1": "+51 056 322462",
        "telefono2": "+51 960 238 266",
        "coordenadas": [-13.7103, -76.2032]
    }
];

// Añadir marcadores al mapa
oficinas.forEach(function(oficina) {
    var marker = L.marker(oficina.coordenadas).addTo(map);
    marker.bindPopup(
        "<b>Ciudad:</b> " + oficina.ciudad + "<br>" +
        "<b>Dirección:</b> " + oficina.direccion + "<br>" +
        "<b>Teléfonos:</b> " + (oficina.telefono1 ? oficina.telefono1 + "<br>" : "") +
        (oficina.telefono2 ? oficina.telefono2 + "<br>" : "") +
        (oficina.telefono3 ? oficina.telefono3 + "<br>" : "")
    );
});