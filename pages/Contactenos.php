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
                <button class="section-botones button-leer">Leer más</button>
                <button class="section-botones button-contactanos">Contáctenos</button>
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
            <area id="coordenada1" shape="poly" coords="180,100,240,100,240,150,180,150" alt="Zona 1" href="javascript:void(0);" onclick="accionObjeto1()">
            <area id="coordenada2" shape="poly" coords="200,150,235,150,235,200,200,200" alt="Zona 2" href="javascript:void(0);" onclick="accionObjeto2()">
            <area id="coordenada3" shape="poly" coords="260,250,330,250,330,330,295,330" alt="Zona 3" href="javascript:void(0);" onclick="accionObjeto3()">
            <area id="coordenada4" shape="poly" coords="300,330,350,330,350,360,300,360" alt="Zona 4" href="javascript:void(0);" onclick="accionObjeto4()">
            <area id="coordenada5" shape="poly" coords="315,360,350,360,350,430,315,430" alt="Zona 5" href="javascript:void(0);" onclick="accionObjeto5()">
            <area id="coordenada6" shape="poly" coords="350,290,455,290,455,400,440,400" alt="Zona 6" href="javascript:void(0);" onclick="accionObjeto6()">
            <!-- Añade más áreas según sea necesario -->
        </map>
        </section>

        <section class="section-contacto">
            <h2>Contáctenos</h2>
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