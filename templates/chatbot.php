<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../public/css/style.css">
</head>
<body>
    <!-- Botón del Chatbot -->
    <div id="chatbot-button" onclick="toggleChatbot()">
        <img src="../public/img/FercitoChat.png" alt="Chatbot Icon">
    </div>

    <!-- Ventana del Chatbot -->
    <div id="chatbot-window" class="hidden">
        <div id="chatbot-header">
            <div>
                <img class="chat-fercito-logo" src="../public/img/FercitoChat.png" alt="Chatbot Icon">
                <span>Fercito</span>
            </div>
            <button class="closebutton" onclick="toggleChatbot()">X</button>
        </div>
        <div id="chatbot-messages">
            <!-- Aquí solo se mostrará el mensaje de bienvenida al iniciar -->
        </div>
        
        <div id="chatbot-input">
            <input type="text" id="entrada-usuario" placeholder="Escribe tu mensaje..." />
            <img src="../public/img/adjuntarArchivo.png" alt="Adjuntar archivo" 
                onclick="document.getElementById('input-file').click()" style="cursor: pointer; width: 28px; margin-left: 8px;">
            <button onclick="manejarEntradaUsuario()">Enviar</button>
            <input type="file" id="input-file" style="display: none;" onchange="manejarArchivoAdjunto(event)">
        </div>



    </div>
    <script src="../public/javascript/chatbot.js"></script>
</body>
</html>
