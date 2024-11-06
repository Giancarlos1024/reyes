<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../public/css/style.css">
    <link rel="stylesheet" href="../public/css/header.css">
    <title>Document</title>
</head>
<body>
    <header class="headerTop">
        <img class="imgLogo" src="../public/img/logoHeader.svg" alt="Logo Header">
        <!-- Botón de hamburguesa -->
        <div class="hamburger" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav class="navMenu">
            <ul>
                <li><a href="../index.php" class="<?php echo $current_page == 'index.php' ? 'active' : ''; ?>">Inicio</a></li>
                <li><a href="./Quienes_somos.php" class="<?php echo $current_page == 'Quienes_somos.php' ? 'active' : ''; ?>">¿Quiénes somos?</a></li>
                <li>
                    <a href="./Nuestros_seguros.php" class="<?php echo $current_page == 'Nuestros_seguros.php' ? 'active' : ''; ?>">Nuestros seguros</a>
                    <ul class="dropdown">
                        <li><a href="./Nuestros_seguros_riesgos_generales.php" class="<?php echo $current_page == 'Nuestros_seguros_riesgos_generales.php' ? 'active' : ''; ?>">Riesgos Generales</a></li>
                        <li><a href="./Nuestros_seguros_riesgos_humanos.php" class="<?php echo $current_page == 'Nuestros_seguros_riesgos_humanos.php' ? 'active' : ''; ?>">Riesgos Humanos</a></li>
                    </ul>
                </li>
                <li><a href="./Contactenos.php" class="<?php echo $current_page == 'Contactenos.php' ? 'active' : ''; ?>">Contáctenos</a></li>
            </ul>
        </nav>
    </header>
    <script src="../public/javascript/menu.js"></script>
</body>
</html>
