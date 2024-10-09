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
        <h1>Riesgos <span class="highlight">Generales</span></h1>
        <p><a href="#">Riesgos Generales</a> > Todos nuestros seguros</p>
    </div>

    <div class="riesgos-grid">
        <div class="riesgo-item">
            <img src="../public/img/vehiculos_soat.svg" alt="Vehículos y SOAT">
            <h3>Vehículos y SOAT</h3>
            <p>Proteja su vehículo y a usted mismo con un seguro de auto. El SOAT cubre gastos médicos y funerarios, así como daños a terceros en caso de accidente de tránsito grave.</p> 
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>
        <div class="riesgo-item">
            <img src="../public/img/transporte.svg" alt="Transporte">
            <h3>Transporte</h3>
            <p>Nuestro seguro cubre daños materiales y personales, así como responsabilidad civil en accidentes viales inesperados y de gravedad, protegiendo así a los afectados.</p>
            <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/incendio.svg" alt="Incendio, Equipo Electrónico y Líneas Aliadas">
            <h3>Incendio, Equipo Electrónico y Líneas Aliadas</h3>
            <p>Nuestro seguro abarca daños materiales causados por incendios, fenómenos naturales, daños eléctricos y otros eventos, garantizando protección en todas las eventualidades.</p> <br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/robo.svg" alt="Robo y Asalto">
            <h3>Robo y Asalto</h3>
            <p>El seguro cubre pérdidas por robo y asalto en negocios, incluyendo dinero, inventario, equipo y daños ocasionados a empleados o clientes, garantizando la seguridad.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>



        <div class="riesgo-item">
            <img src="../public/img/desonestidad.svg" alt="Vehículos y SOAT">
            <h3>Deshonestidad y 3D</h3>
            <p>Nuestro seguro de Deshonestidad y 3D actúa como escudo ante prácticas comerciales deshonestas, protegiendo tu negocio de riesgos financieros derivados de actos intencionados.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/ramos_tecnicos.svg" alt="Transporte">
            <h3>Ramos Técnicos</h3>
            <p>Los seguros de ramos técnicos cubren bienes, maquinaria y responsabilidad en actividades técnicas, protegiendo de daños y riesgos que puedan surgir en operaciones.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/lucro_cesante.svg" alt="Incendio, Equipo Electrónico y Líneas Aliadas">
            <h3>Lucro Cesante</h3>
            <p>Nuestro seguro de Lucro Cesante protege tu negocio ante interrupciones imprevistas, cubriendo ingresos perdidos y gastos fijos, asegurando estabilidad financiera.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/responsabilidad_civil.svg" alt="Robo y Asalto">
            <h3>Responsabilidad Civil</h3>
            <p>Nuestro seguro de Responsabilidad Civil te protege ante imprevistos, cubriendo accidentes personales y daños a propiedad ajena, asegurando la protección de tu patrimonio.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/seguro_credito.svg" alt="Incendio, Equipo Electrónico y Líneas Aliadas">
            <h3>Seguro de Crédito y Caución</h3>
            <p>Nuestro seguro de Responsabilidad Civil protege contra imprevistos y daños a terceros en situaciones accidentales, negligencias o incumplimientos legales inesperados.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>

        <div class="riesgo-item">
            <img src="../public/img/inspeccion_riesgos.svg" alt="Robo y Asalto">
            <h3>Inspección de Riesgos</h3>
            <p>Nuestro seguro de inspección de riesgos cubre costos de inspecciones y medidas de control, asegurando el correcto funcionamiento de su negocio ante posibles eventualidades.</p><br>
            <div class="button">
                <a href="#" class="cotizar-btn">Cotízalo ahora</a>
            </div>
        </div>
    </div>
</section>


    <?php include('../templates/footer.php');?>
</body>
</html>