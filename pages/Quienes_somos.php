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
    

    <title>Quienes Somos</title>
</head>
<body>
   
    <?php include('../templates/header.php');?>
    
    <!-- Comienza el contenedor principal -->
    <div class="seguro-section">
        
        <div class="text-container">
            <!-- Título y texto al lado izquierdi -->
            <h1>¿Quiénes Somos?</h1>
            <br>
            <br>
            <p>Somos una empresa peruana sólida con una trayectoria de más de 40 años en el 
                corretaje y asesoramiento en seguros, con R.N.P.S. N° J0233.</p>
            
            <!-- Botones debajo del texto -->
            <div class="button-container">
                <a href="" class="btn leer-mas">Leer más</a>
                <a href="" class="btn contactanos">contáctanos</a>
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
        </div>
    </div>


    <div class="container">
        <div class="block">
            <img src="../public/img/perfil_fernando.png" alt="Imagen 1">
            <h1>Fernando Francisco Reyes Breña</h1>
            <h2>1934-<strong>2024</strong></h2>
            <p>Fundador y lider de la empresa F.REYES Y CIA
                Corredores de Seguros S.A.C., con un legado honorable
                en su trayectoria como persona y empresario, con sólidos 
                valores forjando el desrrollo y crecimiento de la organizació
            </p>
        </div>
        <div class="block"> <strong></strong>
            <img src="../public/img/perfil_fernando2.png" alt="Imagen 2">
            <h1>Fernando Martín Reyes Moyano</h1>
            <h2>1934-<strong>2024</strong></h2>
            <p>Fue hijo de don Fernando Reyes Breña, especialista en seguros y administración 
                de empresas, con conocimientos en la parte comercial y técnica, fue el subgerente 
                comercial de la zona sur, logrando el crecimiento y expansión de la cartera de 
                seguros con diversas empresas del sector, en base a estrategias concibiendo un
                desarrollo empresarial sólido. <br> </p>
        </div>
    </div>

    <?php include('../templates/calificaciones.php');?>

    <?php include('../templates/aliados.php');?>
    <?php include('../templates/footer.php');?>
</body>
</html>