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
    <style>
        .img11 {
            width: 100%;
            height: auto;
        }

        area {
            /* outline: 2px solid red;  */
        }
    </style>
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
                <a href="../pages/Contactenos.php" class="section-botones button-leer">Leer más</a>
                <a href="../pages/Contactenos.php" class="section-botones button-contactanos">Contáctenos</a>
            </div>
            <div class="section-Saludo-img">
                <img src="../public/img/fercito.gif" alt="saludo">
            </div>
        </section>

        <section class="mapaDinamico">
            
        
        <img class="img11" src="../public/img/Vector_Mapa.svg" alt="Mapa" usemap="#mapa-interactivo">
        
    
        <!-- Mapa con áreas interactivas -->
        <map name="mapa-interactivo">
            <!-- Aquí actualizo el área para ser poligonal (shape="poly") -->
            <area id="coordenada1" shape="poly" coords="270,140,340,140,340,210,270,210" alt="Zona 1" href="javascript:void(0);" onclick="accionObjeto1()">
            <area id="coordenada2" shape="poly" coords="280,215,330,215,330,250,280,250" alt="Zona 2" href="javascript:void(0);" onclick="accionObjeto2()">
            <area id="coordenada3" shape="poly" coords="380,380,470,380,470,465,380,465" alt="Zona 3" href="javascript:void(0);" onclick="accionObjeto3()">
            <area id="coordenada4" shape="poly" coords="400,470,470,470,470,505,400,505" alt="Zona 4" href="javascript:void(0);" onclick="accionObjeto4()">
            <area id="coordenada5" shape="poly" coords="440,510,500,510,500,600,440,600" alt="Zona 5" href="javascript:void(0);" onclick="accionObjeto5()">
            <area id="coordenada6" shape="poly" coords="530,390,655,390,655,550,530,550" alt="Zona 6" href="javascript:void(0);" onclick="accionObjeto6()">
            <!-- Añade más áreas según sea necesario -->
        </map>
        </section>

        <section class="section-contacto">
            <h2>Contáctenos</h2>
            <form id="contactForm">
                <div class="datos-form-personales">
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Introduzca su nombre" required>
                    <label for="email">Correo Electrónico</label>
                    <input type="email" name="email" id="email" placeholder="Introduzca su correo" required>
                    <label for="telefono">Teléfono</label>
                    <input type="tel" name="telefono" id="telefono" placeholder="Introduzca su teléfono" required>
                    <label for="tipo-seguro">Tipo de Seguro</label>
                    <select name="tipo-seguro" id="tipo-seguro">
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
                        <option value="Seguros de vida con retorno">Seguros de vida con retorno</option>
                        <option value="Accidentes personales">Accidentes personales</option>
                        <option value="Asistencia médica familiar">Asistencia médica familiar</option>
                        <option value="EPS">EPS</option>      
                    </select>
                </div>
                <div class="datos-form-personales">
                    <label for="oficina">Oficina</label>
                    <select name="oficina" id="oficina">
                        <option value="#">Introduzca la oficina</option>
                        <option value="Piura">Piura</option>
                        <option value="Chiclayo">Chiclayo</option>
                        <option value="Lima">Lima</option>
                        <option value="Pisco">Pisco</option>
                        <option value="Ica">Ica</option>
                        <option value="Cusco">Cusco</option>
                    </select>
                    <label for="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" rows="5" placeholder="Describe tu mensaje aquí..."></textarea>
                    <div class="validacion-form">
                        <input type="checkbox" name="promo" id="promo-checkbox">
                        <label id="label-validacion" for="promo-checkbox">Deseo recibir promociones y recordatorios en mi buzón de mensajes de mi correo electrónico.</label>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </section>

    </main>
    
    <?php include('../templates/chatbot.php');?>
    <?php include('../templates/footer.php');?>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                tipoSeguro: document.getElementById('tipo-seguro').value,
                oficina: document.getElementById('oficina').value,
                mensaje: document.getElementById('mensaje').value,
                promo: document.getElementById('promo-checkbox').checked
            };

            fetch('http://localhost:3000/send-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())  // Esto debería funcionar ahora porque el servidor devuelve JSON
            .then(data => {
                if (data.message === "Correo enviado con éxito") {
                    alert("Correo enviado con éxito");
                    document.getElementById('contactForm').reset();
                } else {
                    alert("Error al enviar el correo: " + data.message);
                }
            })
            .catch(error => console.error('Error:', error));

        });

        // PIURA
        function accionObjeto1() {
            // alert("zona 1")
            window.open("https://maps.app.goo.gl/N1cBBCpu7TaxFYrt5", "_blank");
        }

        // CHICLAYO - CORREGIR EL LINK CORRECTO
        function accionObjeto2() {
            // alert("zona 2")
            window.open("https://maps.app.goo.gl/6PuxPi5phVYtyRDm7", "_blank");
            
        }
        // LIMA 
        function accionObjeto3() {
            // alert("zona 3")
            window.open("https://maps.app.goo.gl/62CcC12eLgpgjH1w9", "_blank");
            // Puedes añadir otro tipo de interacción aquí
        }

        // PISCO - CORREGIR EL LINK
        function accionObjeto4() {
            // alert("zona 4")
            window.open("https://maps.app.goo.gl/EysPz45CcefUrBjFA", "_blank");
            // Puedes añadir otro tipo de interacción aquí
        }
        // ICA 
        function accionObjeto5() {
            // alert("zona 5")
            window.open("https://maps.app.goo.gl/8ymbgRpaiD7maWwz7", "_blank");
            // Puedes añadir otro tipo de interacción aquí
        }
        //CUSCO 

        function accionObjeto6() {
            // alert("zona 6")
            window.open("https://maps.app.goo.gl/uVKTmdWRKjzi1Gto8", "_blank");
            // Puedes añadir otro tipo de interacción aquí
        }
    </script>

</body>
</html>
