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
    <link rel="stylesheet" href="../public/css/nuestros_seguros_riesgos.css">
    <title>Nuestros Seguros</title>
</head>
<body>
    
    <?php include('../templates/header.php');?>

    <section class="riesgos-generales">
    <div class="title-section">
        <h1>Riesgos <span class="highlight">Humanos</span></h1>
        <p><a href="#">Riesgos Humanos</a> > Todos nuestros seguros</p>
    </div>

    <div class="riesgos-grid">
        <div class="riesgo-item">
            <img src="../public/img/sctr_pension.svg" alt="Vehículos y SOAT">
            <h3>SCTR Pensión</h3>
            <p>El Seguro Complementario de Trabajo de Riesgo (SCTR) garantiza pensiones y beneficios en casos de riesgos laborales, asegurando tu seguridad financiera.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>
        <div class="riesgo-item">
            <img src="../public/img/sctr_salud.svg" alt="Transporte">
            <h3>SCTR Salud</h3>
            <p>Nuestro SCTR para Salud te protege en accidentes laborales o enfermedades ocupacionales, brindando atención médica de calidad y un servicio excepcional.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/seguro_vida.svg" alt="Incendio, Equipo Electrónico y Líneas Aliadas">
            <h3>Seguros de vida con retorno</h3>
            <p>Nuestros Seguros de Vida con Retorno son una inversión para tu futuro y el de tus seres queridos, combinando protección y ahorro con beneficios al final del plazo.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/accidentes_personales.svg" alt="Robo y Asalto">
            <h3>Accidentes personales</h3>
            <p>Nuestro seguro de Accidentes Personales te brinda tranquilidad al protegerte en situaciones inesperadas en casa, trabajo y ocio. Tu seguridad es nuestra prioridad.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>



        <div class="riesgo-item">
            <img src="../public/img/asistencia_medica.svg" alt="Vehículos y SOAT">
            <h3>Asistencia médica familiar</h3>
            <p>Nuestra Asistencia Médica Familiar es la inversión en la salud de tu familia, brindando acceso a atención de calidad. Priorizamos tu bienestar y la seguridad familiar.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/eps.svg" alt="Transporte">
            <h3>EPS</h3>
            <p>Nuestra EPS es tu aliado en el cuidado de la salud, con atención de calidad, acceso a hospitales y planes flexibles. Tu salud es nuestro compromiso principal. </p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>
    </div>
</section>


    <?php include('../templates/footer.php');?>
</body>
</html>