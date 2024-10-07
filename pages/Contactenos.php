<?php
include('../includes/db.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="public/img/LogoNav.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../public/css/style.css">
    <link rel="stylesheet" href="../public/css/contactenos.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <title>Contáctenos</title>
</head>
<body>
    
    <?php include('../templates/header.php');?>

    <main>
        <section class="section-nuestras-oficinas">
            <div class="section-informacion">
                <h2><strong>Nuestras</strong> Oficinas</h2>
                <p>Contamos con seis ubicaciones estratégicas que nos permiten estar más cerca de ti. 
                Cada una de nuestras sedes refleja nuestra dedicación a proteger lo que más valoras. 
                Te invitamos a explorar nuestras instalaciones y a conocer al equipo que está comprometido 
                en ser tu socio en la seguridad financiera y la tranquilidad de tu negocio.</p>
                <button class="section-botones button-leer">Leer más</button>
                <button class="section-botones button-contactanos">Contáctenos</button>
            </div>
            <div class="section-Saludo-img">
                <img src="../public/img/SaludoGIF1.png" alt="saludo">
            </div>
        </section>

        <section>
            
            <div id="map" style="height: 500px; width: 100%;"></div>
        </section>

        <section class="section-contacto">
            <h2>Contáctanos</h2>
            <form id="data">
                <div class="datos-form-personales">
                    <label for="">Nombre</label>
                    <input type="text" placeholder="Introduzca su nombre">
                    <label for="">Correo Electrónico</label>
                    <input type="email" placeholder="Introduzca su correo">
                    <label for="">Teléfono</label>
                    <input type="tel" placeholder="Introduzca su teléfono">
                    <div class="validacion-form">
                        <input type="checkbox" id="promo-checkbox">
                        <label id="label-validacion" for="promo-checkbox">Deseo recibir promociones y recordatorios en mi buzón de mensajes de mi correo electrónico.</label>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
                <div class="datos-form-personales">
                    <label for="">Tipo de Seguro</label>
                    <select id="select-seguros">
                        <option value="#">Introduzca el tipo de seguro</option>
                        <option value="Vehículos y SOAT">Vehículos y SOAT</option>
                        <option value="Transporte">Transporte</option>
                        <option value="Incendio, Equipo Electrónico y Líneas Aliadas">Incendio, Equipo Electrónico y Líneas Aliadas</option>
                        <option value="Robo y Asalto">Robo y Asalto</option>
                        <option value="Deshonestidad y 3D">Deshonestidad y 3D</option>
                        <option value="Ramos Técnicos">Ramos Técnicos</option>
                        <option value="Lucro Cesante">Lucro Cesante</option>
                        <option value="Responsabilidad Civil">Responsabilidad Civil</option>
                        <option value="Seguro de Crédito y Caución">Seguro de Crédito y Caución</option>
                        <option value="Inspección de Riesgos">Inspección de Riesgos</option>
                        <option value="SCTR Pensión">SCTR Pensión</option>
                        <option value="SCTR Salud">SCTR Salud</option>
                        <option value="Inspección de Riesgos">Seguros de vida con retorno</option>
                        <option value="Inspección de Riesgos">Accidentes personales</option>
                        <option value="Inspección de Riesgos">Asistencia médica familiar</option>
                        <option value="Inspección de Riesgos">EPS</option>      
                    </select>
                    <label for="">Oficina</label>
                    <select id="select-oficina">
                        <option value="#">Introduzca la oficina</option>
                        <option value="Piura">Piura</option>
                        <option value="Chiclayo">Chiclayo</option>
                        <option value="Lima">Lima</option>
                        <option value="Pisco">Pisco</option>
                        <option value="Ica">Ica</option>
                        <option value="Cusco">Cusco</option>
                    </select>
                    <label for="">Mensaje</label>
                    <textarea id="mensaje" rows="5" placeholder="Describe tu mensaje aquí..."></textarea>
                </div>
            </form>
        </section>

    </main>

    <?php include('../templates/footer.php');?>

    <script>
        // Inicializar el mapa
        var map = L.map('map').setView([-9.19, -75.0152], 5); // Coordenadas centradas en Perú con un nivel de zoom más adecuado

        // Añadir capa base de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Datos de las oficinas
        var oficinas = [
            {
                "ciudad": "Piura",
                "direccion": "Calle Junín Nro. 1011",
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
                "direccion": "Av. José Larco N°743, Ofi. 401, Miraflores",
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
    </script>

</body>
</html>