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
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../public/css/style.css">
    <link rel="stylesheet" href="../public/css/calificaciones.css">
    <link rel="stylesheet" href="../public/css/quienes_somos.css">
    

    <title>Sobre nosotros</title>
</head>
<body>
   
    <?php include('../templates/header.php');?>
    <br>
    
    <!-- Comienza el contenedor principal -->
    <div class="seguro-section">
        
        <div class="text-container">
            <!-- Título y texto al lado izquierdi -->
            <h1>¿Quiénes Somos?</h1>
            <br>
            <p>Somos una empresa peruana con trayectoria de más de 40 años en el corretaje y asesoramiento en seguros, ofreciendo soluciones personalizadas y un servicio de calidad para satisfacer las necesidades de nuestros clientes. Contamos con un equipo de profesionales altamente capacitados, comprometidos con brindar confianza y seguridad en cada paso del proceso. Nuestro número de registro de corredores de seguros es R.N.P.S. N° J0233, lo que respalda nuestra legalidad y transparencia en el sector.</p>
            
            <!-- Botones debajo del texto -->
            <div class="button-container">
                <a href="../pages/Quienes_somos.php" class="btn leer-mas">Leer más</a>
                <a href="../pages/Contactenos.php" class="btn contactanos">Contáctenos</a>
            </div>
        </div>
        <div class="image-container">
            <!-- Imagen que se mostrará en el lado derecho -->
            <img src="../public/img/quienes_somos.svg" alt="Imagen de seguro" class="seguro-img">
        </div>
    </div>

    <div class="historia-section">
        <div class="text-container-h">
                <!-- Título y texto al lado izquierdi -->
                <h1>Nuestra <strong>Historia</strong> </h1>
                <br>
                <br>
                <p> Nuestra historia se remonta a sus raíces, fundada por el Sr. Fernando Francisco 
                    Reyes Breña, quien desempeñó un papel fundamental como presidente del Directorio.
                    A lo largo de los años, hemos experimentado una notable evolución y crecimiento. 
                    Hoy en día, la empresa está bajo el liderazgo de la familia Reyes Moyano, quienes 
                    han asumido el compromiso de llevar adelante la visión y los valores que nos caracterizan.
                </p>    
                <!-- Botones debajo del texto -->
                <div class="button-container-history">             
                    <a href="../pages/Quienes_somos.php" class="btn-h leer-mas-history">Leer más</a>
                </div>
        </div>
    </div>


    <div class="container-gerente">
        <div class="block-gerente">
            <img src="../public/img/perfil_fernando.svg" alt="Imagen 1">
            <h1>Fernando Francisco <br>Reyes Breña</h1>
            <h2>1934-<strong>2024</strong></h2>
            <p>Fundador y líder de la empresa F.REYES Y CIA Corredores de Seguros S.A.C., dejó un legado honorable en su trayectoria como persona y empresario. Con sólidos valores y principios, forjó el desarrollo y crecimiento de la organización, asegurando así su éxito en el competitivo sector asegurador y su reconocimiento en el mercado</p>
        </div>
        <div class="block-gerente"> <strong></strong>
            <img src="../public/img/perfil_fernando2.svg" alt="Imagen 2">
            <h1>Fernando Martín <br>Reyes Moyano</h1>
            <h2>1934-<strong>2024</strong></h2>
            <p>Fue hijo de don Fernando Reyes Breña, especialista en seguros y administración de empresas, con conocimientos en la parte comercial y técnica. Fue subgerente comercial de la zona sur, logrando el crecimiento y la expansión de la cartera de seguros con diversas empresas, mediante estrategias que concibieron un desarrollo empresarial sólido.<br> </p>
       </div>
    </div>








    <div class="equipo-section">
        <div class="text-container-equipo">
                <!-- Título y texto al lado izquierdi -->
                <h1>Nuestro <strong>Equipo</strong> </h1>   
                <br><br>
        </div>
    </div>

    <!-- Primer bloque grande: Equipo -->
    <div class="team-section">
        <!-- Tres bloques pequeños -->
        <div class="team-member">
            <img src="../public/img/perfil_vilma.png" alt="Vilma Reyes Moyano">
            
            <h3>Vilma Reyes Moyano</h3>
            <h5>Gerente General</h5>
            <br>
            <p>Hija de don Fernando Reyes Breña, especialista en la gestión de seguros,
                 con más de 30 años de experiencia en dicho sector, con conocimientos en 
                 la parte gerencial y administrativa de la organización. Conocedora de
                  las nuevas tendencias en los mercados, finanzas , planeamiento estratégico.</p>
        </div>
        
        <div class="team-member">
            <img src="../public/img/perfil_javier.png" alt="Javier Reyes Moyano">
            
            <h3>Javier Reyes Moyano</h3>
            <h5>Gerente Comercial</h5>
            <br>
            <p>Hijo de don Fernando Reyes Breña, es economista de profesión, con más de 
                30 años de experienciaen el sector seguros, con conocimientos en la parte 
                comercial y técnica en la gestión de seguros. Conocedor de las tendencias
                 tecnológicas enfocadas en la gestión empresarial.</p>
        </div>
        <div class="team-member">
            <img src="../public/img/perfil_roger.png" alt="Roger Portilla Portilla">
            
            <h3>Roger Portilla Portilla</h3>
            <h5>Subgerente Técnico</h5>
            <br>
            <p>Administrador de profesión y técnico en seguros con una impresionante 
                trayectoria de más de 30 años en el sector. Durante su carrera ha liderado
                 equipos en las áreas de emisión, suscripción y siniestros, demostrando 
                 habilidades excepcionales de gestión</p>
        </div>
    </div>

    <!-- Segundo bloque grande: Misión, Visión y Valores -->
    <div class="mission-section">
        <!-- Tres bloques pequeños -->
        <div class="mission-block">
            <img src="../public/img/mision.svg" alt="Icono Misión" class="icon">
            <h4>Misión</h4>
            <p>Brindar soluciones profesionales, a través de propuestas competitivas y 
                transformadoras en materia de prevención y protección de riesgos, mediante
                 una asesoría y corretaje integral y personalizado a nuestros clientes.</p>
        </div>
        <div class="mission-block">
            <img src="../public/img/vision.svg" alt="Icono Visión" class="icon">
            <h4>Visión</h4>
            <p>Ser un bróker de seguros altamente competitivo, reconocido por su actitud de 
                servicio, calidad y profesionalismo, con un alto sentido de responsabilidad 
                y principios éticos.</p>
        </div>
        <div class="mission-block">
            <img src="../public/img/valores.svg" alt="Icono Valores" class="icon">
            <h4>Valores</h4>
            <div class="valores">
                <li>Respeto</li>
                <li>Aptitud</li>
                <li>Eficiencia</li>
                <li>Solidaridad</li>
                <li>Honestidad</li>
            </div>
        </div>
    </div>

    <?php include('../templates/calificaciones.php');?>

    <?php include('../templates/aliados.php');?>


    <?php include('../templates/footer.php');?>
</body>
</html>













