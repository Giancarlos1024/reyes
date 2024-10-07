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
        <nav>
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
                <img src="./public/img/tituloDescripcion.png" alt="tituloDescripcion">
                <div>
                    <button class="button-leer">Leer más</button>
                    <button class="button-contactanos">Contáctenos</button>
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
                <h1>Tu corredor de seguros de confianza</h1>
                <p>
                F. REYES Y CIA Corredores de Seguros S.A.C. es una empresa peruana sólida con una 
                trayectoria de más de 40 años en el corretaje y asesoramiento en seguros, con R.N.P.S. 
                N° J0233.
                </p>
                <div class="button-somos">
                    <button class="leer-somos">Leer más</button>
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
                    <button class="leer-somos somos">Leer más</button>
                </div>
                <div class="div-Seccion-5">
                    <img src="./public/img/foto_riesgos_humanos.png" alt="">
                    <h3>Riesgos Humanos</h3>
                    <p>
                    Los riesgos generales se refieren a amenazas comunes que afectan a individuos y empresas, 
                    como accidentes, incendios o robos, generando pérdidas económicas.
                    </p>
                    <button class="leer-somos somos">Leer más</button>
                </div>
            </div>
        </section>
        <?php include('./templates/calificaciones.php');?>
        <section>

        <div class="aliados-section">
            <h2>Nuestros <strong>Aliados</strong></h2>
            <div class="carousel-container">
                <div class="carousel">
                    <img src="./public/img/pacifico.png" alt="Pacífico">
                    <img src="./public/img/positiva.png" alt="La Positiva">
                    <img src="./public/img/mapfre.png" alt="MAPFRE">
                    <img src="./public/img/sanitas.png" alt="Sanitas">
                    <img src="./public/img/rimac.png" alt="Rimac">
                    <img src="./public/img/protecta.png" alt="Protecta">
                    <img src="./public/img/chubb.png" alt="Chubb">
                </div>
            </div>
            <div class="btn-carousel">
                <button class="carousel-btn prev">&lt;</button>
                <button class="carousel-btn next">&gt;</button>
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
                    <a href="#" target="_blank">+51 923 217 317</a>
                </div>
                <div>
                    <img src="./public/img/mensaje.png" alt="mensaje">
                    <a href="#" target="_blank">contacto@freyescorredoresseguros.com</a>
                </div>
                <div>
                    <img src="./public/img/ubicacion.png" alt="ubicacion">
                    <a href="#" target="_blank">Residencial San Martín G-101, Ica, Perú</a>
                </div>   
            </div>
            <div>
            <div class="redes">
                <h4>Siguenos en :</h4>
                <div>
                    <a href="#"><img src="./public/img/facebook.svg" alt="facebook"></a>
                    <a href="#"><img src="./public/img/instagram.svg" alt="instagram"></a>
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

    <script src="./public/javascript/nuestros_seguros.js"></script>

</body>
</html>