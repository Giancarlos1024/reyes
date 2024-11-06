<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F.REYES Y CIA</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./public/css/style.css">
    <link rel="stylesheet" href="./public/css/aliados.css">
    <link rel="stylesheet" href="./public/css/home.css">
</head>
<body>
    <header class="headerTop">
        <img class="imgLogo" src="./public/img/logoHeader.svg" alt="Logo Header">
        
        <!-- Botón de hamburguesa -->
        <div class="hamburger" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        
        <nav class="navMenu">
            <ul>
                <li><a href="./index.php" class="active">Inicio</a></li>
                <li><a href="./pages/Quienes_somos.php">¿Quiénes somos?</a></li>
                <li>
                    <a href="./pages/Nuestros_seguros.php">Nuestros seguros</a>
                    <ul class="dropdown">
                        <li><a href="./pages/Nuestros_seguros_riesgos_generales.php">Riesgos Generales</a></li>
                        <li><a href="./pages/Nuestros_seguros_riesgos_humanos.php">Riegos Humanos</a></li>
                    </ul>
                </li>
                <li><a href="./pages/Contactenos.php">Contáctenos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="Seccion1">
            <div class="div-Seccion-1">
                <img id="imgdescripcion" src="./public/img/tituloDescripcion.png" alt="tituloDescripcion">
                <div>
                    <a href="./pages/Quienes_somos.php" class="button-leer">Leer más</a>
                    <a href="./pages/Contactenos.php" class="button-contactanos">Contáctenos</a>
                </div>
            </div>
            <div class="div-Seccion-2">
                <img src="./public/img/tituloPersonas.png" alt="tituloPersonas">
                <div></div>
            </div>

        </section>
        <section class="Seccion2">
            <div class="div-Seccion-3">
                <img src="./public/img/tituloPersona2.png" alt="tituloPersona2">
            </div>
            <div class="div-Seccion-4">
                <h4>¿Quiénes somos?</h4>
                <h1>Tu corredor de <br>seguros de confianza</h1>
                <p>
                F. REYES Y CIA Corredores de Seguros S.A.C. es una empresa peruana sólida con una 
                trayectoria de más de 40 años en el corretaje y asesoramiento en seguros, con R.N.P.S. 
                N° J0233.
                </p>
                <div class="button-somos">
                    <a href="./pages/Quienes_somos.php" class="leer-somos">Leer más</a>
                </div>
            </div>
        </section>
        <section class="Seccion3">
            <h2><strong>Nuestros</strong> Seguros</h2>
            <div>
                <div class="div-Seccion-5">
                    <img src="./public/img/foto_riesgos_generales.png" alt="">
                    <h3>Riesgos Generales</h3>
                    <p>
                    Los riesgos generales se refieren a amenazas comunes que afectan a individuos y empresas, 
                    como accidentes, incendios o robos, generando pérdidas económicas.
                    </p>
                    <a href="./pages/Nuestros_seguros_riesgos_generales.php" class="leer-somos somos">Leer más</a>
                </div>
                <div class="div-Seccion-5">
                    <img src="./public/img/foto_riesgos_humanos.png" alt="">
                    <h3>Riesgos Humanos</h3>
                    <p>
                    Los riesgos generales se refieren a amenazas comunes que afectan a individuos y empresas, 
                    como accidentes, incendios o robos, generando pérdidas económicas.
                    </p>
                    <a href="./pages/Nuestros_seguros_riesgos_humanos.php" class="leer-somos somos">Leer más</a>
                </div>
            </div>
        </section>
        <?php include('./templates/calificaciones.php');?>
        <section>

        <div class="aliados-section">
            <h2>Nuestros <strong>Aliados</strong></h2>
            <div class="carousel-container">
                <div class="carousel">
                    <!-- Grupo 1 (visible al inicio) -->
                    <div class="image-group">
                        <img src="./public/img/positiva.png" alt="La Positiva">
                        <img src="./public/img/mapfre.png" alt="MAPFRE">
                        <img src="./public/img/chubb.png" alt="Chubb">
                        <img src="./public/img/qualitas.png" alt="Qualitas">
                    </div>
                    <!-- Grupo 2 (oculto inicialmente) -->
                    <div class="image-group">
                        <img src="./public/img/rimac.png" alt="Rimac">
                        <img src="./public/img/protecta.png" alt="Protecta">
                        <img src="./public/img/sanitas.png" alt="Sanitas">
                        <img src="./public/img/pacifico.png" alt="Pacífico">
                    </div>
                </div>
            </div>
            <div class="btn-carousel">
                <button class="carousel-btn prev"><img src="./public/img/derecha_btn.svg" alt="izquierda"></button>
                <button class="carousel-btn next"><img src="./public/img/izquierda_btn.svg" alt="derecha"></button>
            </div>
        </div>


        </section>
    </main>

    <footer>
        <section class="SeccionFooter-One">
            
            <div class="LogoFooter">
                <img src="./public/img/LogoFooter.svg" alt="Logo Header">
            </div>
            <div class="informacionFooter">
                <h4>Informacion de contacto</h4>
                <div>
                    <img src="./public/img/phone.png" alt="phone">
                    <a href="tel:+51923217317">+51 923 217 317</a> - <a href="tel:+5656231151"> (056) 231151 Anexo 1001</a>

                </div>
                <div>
                    <img src="./public/img/mensaje.png" alt="mensaje">
                    <a href="mailto:contacto@freyescorredoresseguros.com">contacto@freyescorredoresseguros.com</a>
                </div>
                <div>
                    <img src="./public/img/ubicacion.png" alt="ubicacion">
                    <a href="https://maps.app.goo.gl/HCsRQVJkGY722Foa9" target="_blank">Residencial San Martín G-101, Ica, Perú</a>
                </div>   
            </div>
            <div>
            <div class="redes">
                <h4>Siguenos en :</h4>
                <div>
                    <a href="https://www.facebook.com/freyesycia" target="_blank"><img src="./public/img/facebook.svg" alt="facebook"></a>
                    <a href="https://www.instagram.com/freyesycia/" target="_blank"><img src="./public/img/instagram.svg" alt="instagram"></a>                
                </div> 
            </div>
            
        </section>
        <section class="SeccionFooterLinea">
            <div></div>
        </section>
        <section class="SeccionFooter-Two">
            <div>
                <p>® 2​023 - F. REYES Y CIA  Corredores de Seguros - Todos los derechos reservados.</p>
            </div>
        </section>
    </footer>

    
    <script src="./public/javascript/nuestros_aliados.js"></script>
    <script src="./public/javascript/menu.js"></script>

</body>
</html>
