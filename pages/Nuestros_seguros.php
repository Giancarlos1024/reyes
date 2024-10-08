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
    <link rel="stylesheet" href="../public/css/nuestros_seguros.css">
    
    <title>Nuestros Seguros</title>
</head>
<body>
    <?php include('../templates/header.php');?>


    
    <!-- Comienza el contenedor principal -->
    <div class="seguro-section">
        <div class="image-container">
            <!-- Imagen que se mostrará en el lado izquierdo -->
            <img src="../public/img/nuestros_seguros.png" alt="Imagen de seguro" class="seguro-img">
        </div>
        <div class="text-container">
            <!-- Título y texto al lado derecho -->
            <h1>Puedes escoger un seguro <strong>con toda confianza.</strong></h1>
            
            <!-- Botones debajo del texto -->
            <div class="button-container">
                <a href="" class="btn leer-mas">Leer más</a>
                <a href="" class="btn contactanos">Contáctenos</a>
            </div>
        </div>
    </div>


    <div class="riesgos-section">
    <div class="riesgo-card">
        <h2><strong>Riesgos </strong>Generales</h2>
        <img src="../public/img/riesgos_generales.png" alt="Riesgos Generales">
        <p>Los riesgos generales se refieren a amenazas comunes que afectan a individuos y empresas, como accidentes, incendios o robos, generando pérdidas económicas significativas.</p>
        <a href="Nuestros_seguros_riesgos_generales.php" class="btn leer-mas">Leer más</a>

    </div>

    <div class="riesgo-card">
        <h2>Riesgos Humanos</h2>
        <img src="../public/img/riesgos_humanos.png" alt="Riesgos Humanos">
        <p>Los riesgos humanos son amenazas derivadas de comportamientos, decisiones o acciones de las personas que pueden causar daño o pérdidas como negligencia o malas decisiones.</p>
        <a href="Nuestros_seguros_riesgos_humanos.php" class="btn leer-mas">Leer más</a>
    </div>
</div>



<?php include('../templates/aliados.php');?>


    <?php include('../templates/footer.php');?>
</body>
</html>